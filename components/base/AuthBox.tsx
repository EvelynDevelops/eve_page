// components/AuthBox.tsx
'use client'

import { useEffect, useState } from 'react'
import { supabase } from '@/lib/supabaseClient'

export default function AuthBox() {
  const [user, setUser] = useState<any>(null)

  useEffect(() => {
    supabase.auth.getUser().then(({ data: { user } }) => {
      if (user) {
        setUser(user)
        syncUserProfile(user)
      }
    })
  }, [])

  const syncUserProfile = async (user: any) => {
    await supabase.from('profiles').upsert({
      id: user.id,
      name: user.user_metadata.name,
      avatar_url: user.user_metadata.avatar_url,
    })
  }

  const handleLogin = async () => {
    await supabase.auth.signInWithOAuth({
      provider: 'github',
      options: {
        redirectTo: window.location.href,
      },
    })
  }

  const handleLogout = async () => {
    await supabase.auth.signOut()
    setUser(null)
  }

  return user ? (
    <div className="w-64 flex items-center justify-between">
      {/* leftside - image + name */}
      <div className="flex items-center space-x-2">
        <img src={user.user_metadata.avatar_url} className="w-8 h-8 rounded-full" />
        <span className="text-sm text-gray-700 dark:text-gray-300">{user.user_metadata.name}</span>
      </div>

      {/* rightside-logout */}
      <button
        onClick={handleLogout}
        className="text-sm text-gray-500 underline hover:text-black"
      >
        Log out
      </button>
    </div>
  ) : (
    <button
      onClick={handleLogin}
      className="w-64 px-1 py-1 border border-gray-300 rounded-md text-md font-medium text-gray-700 hover:bg-gray-100 dark:border-gray-600 dark:text-gray-300 dark:hover:bg-gray-800"
    >
      Login with GitHub
    </button>
  )
}
