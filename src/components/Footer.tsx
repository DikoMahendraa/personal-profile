const Footer = () => {
  return (
    <footer className="h-20 flex items-center justify-center">
      <p className="text-gray-600 text-sm dark:text-gray-400">
        &copy; {new Date().getFullYear()} Next. Made with ❤️ using Next.js App
        Dir
      </p>
    </footer>
  )
}

export default Footer
