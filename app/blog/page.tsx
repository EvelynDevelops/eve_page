// app/blog/page.tsx
'use client'

import Link from 'next/link'
import { useEffect, useState } from 'react'
import { supabase } from '@/lib/supabaseClient'

type Post = {
  id: number
  title: string
  content: string
  created_at: string
}

export default function BlogListPage() {
  const [posts, setPosts] = useState<Post[]>([])

  useEffect(() => {
    const fetchPosts = async () => {
      const { data, error } = await supabase
        .from('posts')
        .select('id, title, content, created_at')
        .order('created_at', { ascending: false })
      if (data) setPosts(data)
    }

    fetchPosts()
  }, [])

  return (
    <div className="max-w-3xl mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-6">Blog</h1>
      <div className="space-y-6">
        {posts.map((post) => (
          <Link key={post.id} href={`/blog/${post.id}`}>
            <div className="border rounded p-4 hover:shadow cursor-pointer">
              <h2 className="text-xl font-semibold">{post.title}</h2>
              <p className="text-sm text-gray-500 mb-2">
                {new Date(post.created_at).toLocaleDateString()}
              </p>
              <p className="text-gray-700 line-clamp-2">
                {post.content.slice(0, 100)}...
              </p>
            </div>
          </Link>
        ))}
      </div>
    </div>
  )
}
