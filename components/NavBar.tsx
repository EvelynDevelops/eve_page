// components/NavBar.tsx
'use client'

import { useState } from 'react'
import Link from 'next/link'
import AuthBox from './base/AuthBox'

export default function NavBar() {
  const [showAuth, setShowAuth] = useState(false)

  return (
    <nav className="fixed top-0 left-0 w-full bg-white dark:bg-gray-900 shadow-md z-50 px-6 md:px-16 lg:px-32 py-2 flex justify-between items-center">
      <div className="flex items-center space-x-2">
        <span className="text-sm text-gray-700 dark:text-gray-300">Evelyn's Org</span>
      </div>

      <div className="flex space-x-8">
        <Link href="/" className="font-semibold text-gray-700 dark:text-gray-300 hover:text-black">Home</Link>
        <Link href="/blog" className="font-semibold text-gray-700 dark:text-gray-300 hover:text-black">Blog</Link>
        <Link href="/projects" className="font-semibold text-gray-700 dark:text-gray-300 hover:text-black">Projects</Link>
        <Link href="/contact-me" className="font-semibold text-gray-700 dark:text-gray-300 hover:text-black">Contact</Link>
      </div>

      <div className="relative">
        <button
          onClick={() => setShowAuth(!showAuth)}
          className="px-4 py-1 border border-gray-300 rounded-md text-sm font-medium text-gray-700 hover:bg-gray-100 dark:border-gray-600 dark:text-gray-300 dark:hover:bg-gray-800"
        >
          Login
        </button>

        {showAuth && (
          <div className="absolute top-12 right-0 bg-white dark:bg-gray-800 border border-gray-300 dark:border-gray-700 rounded-md shadow-md p-4 z-50">
            <AuthBox />
          </div>
        )}
      </div>
    </nav>
  )
}
