import React from 'react'

export default function Footer() {
  return (
    <footer className="absolute bottom-10">
      <p className="text-gray-500 text-sm dark:text-gray-400">
        &copy; {new Date().getFullYear()} Diko Mahendra. Made with ❤️ using
        Next.js App Dir
      </p>
    </footer>
  )
}
