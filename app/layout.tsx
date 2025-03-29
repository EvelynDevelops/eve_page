// app/layout.tsx
import type { Metadata } from "next"
import "./globals.css"
import NavBar from "@/components/NavBar" 

export const metadata: Metadata = {
  title: "Evelyn's Portfolio",
  description: "Showcasing my projects, blog, and experience.",
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className="flex flex-col min-h-screen">
        <NavBar />
        <main className="flex-grow pt-16">{children}</main>
        <footer className="w-full bg-white text-black text-center py-6 border-t border-gray-300 mt-auto">
          <p>© 2025 Evelyn. All rights reserved.</p>
          <p>Made with love and 🥏</p>
        </footer>
      </body>
    </html>
  )
}
