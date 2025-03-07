import type { Metadata } from "next";
import Link from "next/link";
import "./globals.css";

export const metadata: Metadata = {
  title: "Evelyn's Portfolio",
  description: "Showcasing my projects, blog, and experience.",
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <head>
        <title>Evelyn's Portfolio</title>
        <meta name="description" content="Showcasing my projects, blog, and experience." />
      </head>
      <body className="flex flex-col min-h-screen">
        {/* Top nav bar */}
        <nav className="fixed top-0 left-0 w-full bg-white dark:bg-gray-900 shadow-md z-50 px-64 py-2 flex justify-between items-center">
          <h1 className="text-2xl font-bold">EVE</h1>
          <div className="flex space-x-8">
            <Link href="/" className="font-semibold text-gray-700 hover:text-black">Home</Link>
            <Link href="/blog" className="font-semibold text-gray-700 hover:text-black">Blog</Link>
            <Link href="/projects" className="font-semibold text-gray-700 hover:text-black">Projects</Link>
            <Link href="/contact-me" className="font-semibold text-gray-700 hover:text-black">Contact</Link>
          </div>
        </nav>

        {/* Main content area */}
        <main className="flex-grow pt-16">{children}</main>

        {/* Footer (sticks to the bottom) */}
        <footer className="w-full bg-white text-black text-center py-6 border-t border-gray-300 mt-auto">
          <p>© 2025 Evelyn. All rights reserved.</p>
          <p>Made with love and 🥏</p>
        </footer>
      </body>
    </html>
  );
}

