'use client'

import { useEffect, useState } from 'react'
import { supabase } from '@/lib/supabaseClient'
import { useUser } from '@supabase/auth-helpers-react'
import { Heart } from 'lucide-react'

export default function LikeButton({ postId }: { postId: number }) {
  const user = useUser()
  const [liked, setLiked] = useState(false)
  const [likeCount, setLikeCount] = useState(0)

  // 获取当前用户是否已点赞
  useEffect(() => {
    const fetchLikeStatus = async () => {
      const { data: likes } = await supabase
        .from('likes')
        .select('*')
        .eq('post_id', postId)

      setLikeCount(likes?.length || 0)

      if (user) {
        const liked = likes?.some(like => like.user_id === user.id)
        setLiked(!!liked)
      }
    }

    fetchLikeStatus()
  }, [postId, user])

  const toggleLike = async () => {
    if (!user) {
      alert('请先登录后再点赞')
      return
    }

    if (liked) {
      await supabase
        .from('likes')
        .delete()
        .match({ post_id: postId, user_id: user.id })
    } else {
      await supabase
        .from('likes')
        .insert({ post_id: postId, user_id: user.id })
    }

    setLiked(!liked)
    setLikeCount(prev => liked ? prev - 1 : prev + 1)
  }

  return (
    <div className="flex items-center gap-2 mt-6">
      <button
        onClick={toggleLike}
        className={`p-2 rounded-full border hover:bg-gray-100 dark:hover:bg-gray-800 ${
          liked ? 'text-red-500' : 'text-gray-500'
        }`}
      >
        <Heart fill={liked ? 'currentColor' : 'none'} className="w-5 h-5" />
      </button>
      <span className="text-sm text-gray-500">{likeCount} 个点赞</span>
    </div>
  )
}
