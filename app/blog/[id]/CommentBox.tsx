'use client'

import { useEffect, useState } from 'react'
import { supabase } from '@/lib/supabaseClient'
import { useUser } from '@supabase/auth-helpers-react'

export default function CommentBox({ postId }: { postId: number }) {
  const user = useUser()
  const [comment, setComment] = useState('')
  const [comments, setComments] = useState<any[]>([])

  useEffect(() => {
    fetchComments()
  }, [postId])

  const fetchComments = async () => {
    const { data, error } = await supabase
    .from('comments')
    .select('*, author:profiles(name, avatar_url)')
    .eq('post_id', postId)
    .order('created_at', { ascending: false })
  

    if (!error && data) setComments(data)
  }

  const handleSubmit = async () => {
    if (!user) return alert('请先登录再发表评论')

    const { error } = await supabase.from('comments').insert({
      post_id: postId,
      user_id: user.id,
      content: comment,
    })

    if (!error) {
      setComment('')
      fetchComments()
    }
  }

  return (
    <div className="mt-10 space-y-6">
      <h3 className="text-lg font-semibold">💬 评论</h3>

      {user ? (
        <div className="flex flex-col space-y-2">
          <textarea
            value={comment}
            onChange={e => setComment(e.target.value)}
            className="border p-2 rounded-md w-full min-h-[80px]"
            placeholder="写点什么吧..."
          />
          <button
            onClick={handleSubmit}
            className="self-end px-4 py-1 bg-black text-white rounded hover:opacity-90"
          >
            发表
          </button>
        </div>
      ) : (
        <p className="text-gray-500">请先登录后再发表评论。</p>
      )}

      <div className="space-y-4 mt-6">
        {comments.map((c, i) => (
          <div key={i} className="border-t pt-3">
            <div className="flex items-center gap-2 mb-1">
            {c.author?.avatar_url && (
                <img
                    src={c.author.avatar_url}
                    className="w-6 h-6 rounded-full"
                    alt=""
                />
                )}
              <span className="text-sm text-gray-700 font-medium">
                {c.author?.name || '匿名'}
              </span>
            </div>
            <p className="text-gray-800 text-sm whitespace-pre-wrap">{c.content}</p>
          </div>
        ))}
      </div>
    </div>
  )
}