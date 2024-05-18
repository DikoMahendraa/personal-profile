const Footer = () => {
  return (
    <footer className="h-20 flex items-center justify-center absolute w-full bottom-0">
      <p className="text-gray-600 lg:text-sm text-xs dark:text-gray-400">
        &copy; {new Date().getFullYear()} Next. Made with ❤️ using Next.js App
        Dir
      </p>
    </footer>
  )
}

export default Footer
