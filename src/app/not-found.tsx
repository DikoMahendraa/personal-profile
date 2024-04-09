import { ArrowLeft, NotepadText } from 'lucide-react'
import Link from 'next/link'

const NotFound = () => {
  return (
    <div className="flex flex-col items-center justify-center h-screen">
      <div>
        <div className="flex justify-center mb-4 dark:text-cyan-300/50">
          <NotepadText size={100} />
        </div>

        <h1 className="text-3xl font-semibold mb-2 text-center dark:text-cyan-300/50">
          Page not found
        </h1>

        <p className="text-lg text-center mb-4 dark:text-gray-200">
          Oops ... <br /> {`You've`} visited the unwritten page!
        </p>

        <div className="flex justify-center">
          <Link href="/" className="">
            <span className="flex dark:text-cyan-300/45 dark:hover:text-cyan-300">
              <ArrowLeft /> Back to Home
            </span>
          </Link>
        </div>
      </div>
    </div>
  )
}

export default NotFound
