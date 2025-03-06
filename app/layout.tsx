import type { Metadata } from "next";
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
      <head />
      <body className="flex flex-col min-h-screen">
        {/* Top nav bar */}
        <nav className="fixed top-0 left-0 w-full bg-white dark:bg-gray-900 shadow-md z-50 px-64 py-2 flex justify-between items-center">
          <h1 className="text-2xl font-bold">EVE</h1>
          <div className="flex space-x-8">
            <a href="#" className="font-semibold text-gray-700 hover:text-black">Home</a>
            <a href="#" className="font-semibold text-gray-700 hover:text-black">Blog</a>
            <a href="#" className="font-semibold text-gray-700 hover:text-black">Project</a>
            <a href="#" className="font-semibold text-gray-700 hover:text-black">Contact</a>
          </div>
        </nav>

        {/* Main content area */}
        <main className="flex-grow pt-16">{children}</main>

        {/* Footer (only visible at the bottom of the page) */}
        <footer className="w-full bg-gray-900 text-white text-center py-4 mt-auto">
          <p>© 2025 Evelyn. All rights reserved.</p>
          <p>Made with love and 🫐</p>
        </footer>
      </body>
    </html>
  );
}
