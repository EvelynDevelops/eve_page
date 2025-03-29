// app/blog/[id]/page.tsx
'use client'

import { useEffect, useState } from 'react'
import { useParams } from 'next/navigation'
import { supabase } from '@/lib/supabaseClient'
import ReactMarkdown from 'react-markdown'
import LikeButton from './LikeButton'
import CommentBox from './CommentBox'


type Post = {
  id: number
  title: string
  content: string
  created_at: string
}

export default function BlogDetailPage() {
  const { id } = useParams()
  const [post, setPost] = useState<Post | null>(null)

  useEffect(() => {
    const fetchPost = async () => {
      const { data } = await supabase
        .from('posts')
        .select('*')
        .eq('id', id)
        .single()
      setPost(data)
    }

    fetchPost()
  }, [id])

  if (!post) return <div className="p-8">Loading...</div>

  return (
    <div className="max-w-3xl mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-2">{post.title}</h1>
      <p className="text-sm text-gray-500 mb-4">
        {new Date(post.created_at).toLocaleDateString()}
      </p>
      <article className="prose dark:prose-invert">
        <ReactMarkdown>{post.content}</ReactMarkdown>
      </article>

    <LikeButton postId={Number(id)} />
    <CommentBox postId={Number(id)} />


    </div>
  )
}
