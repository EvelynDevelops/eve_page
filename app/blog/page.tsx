// app/blog/page.tsx
'use client'

import Link from 'next/link'
import { useEffect, useState } from 'react'
import { supabase } from '@/lib/supabaseClient'

type Post = {
  id: number
  title: string
  content: string | null
  created_at: string
}

export default function BlogListPage() {
  const [posts, setPosts] = useState<Post[]>([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)

  useEffect(() => {
    const fetchPosts = async () => {
      const { data, error } = await supabase
        .from('posts')
        .select('id, title, content, created_at')
        .order('created_at', { ascending: false })
      if (error) {
        setError(error.message)
      } else if (data) {
        setPosts(data)
      }
      setLoading(false)
    }

    fetchPosts()
  }, [])

  return (
    <div className="max-w-3xl mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-6">Blog</h1>

      {loading && (
        <div className="space-y-6">
          {[...Array(3)].map((_, i) => (
            <div key={i} className="border rounded p-4 animate-pulse">
              <div className="h-5 bg-gray-200 rounded w-2/3 mb-2" />
              <div className="h-3 bg-gray-200 rounded w-1/4 mb-3" />
              <div className="h-4 bg-gray-200 rounded w-full" />
            </div>
          ))}
        </div>
      )}

      {!loading && error && (
        <p className="text-red-500">Failed to load posts: {error}</p>
      )}

      {!loading && !error && posts.length === 0 && (
        <p className="text-gray-500">No posts yet.</p>
      )}

      {!loading && !error && posts.length > 0 && (
        <div className="space-y-6">
          {posts.map((post) => (
            <Link key={post.id} href={`/blog/${post.id}`}>
              <div className="border rounded p-4 hover:shadow cursor-pointer">
                <h2 className="text-xl font-semibold">{post.title}</h2>
                <p className="text-sm text-gray-500 mb-2">
                  {new Date(post.created_at).toLocaleDateString()}
                </p>
                <p className="text-gray-700 line-clamp-2">
                  {post.content}
                </p>
              </div>
            </Link>
          ))}
        </div>
      )}
    </div>
  )
}
