import { Home, NotepadText } from 'lucide-react'
import Link from 'next/link'

const NotFound = async () => {
  return (
    <div className="flex flex-col items-center justify-center h-screen">
      <div>
        <div className="flex justify-center mb-4">
          <NotepadText size={100} />
        </div>

        <h1 className="text-3xl font-semibold mb-2 text-center">404 - Ups</h1>

        <p className="text-lg text-center mb-4">Sorry, Page not found.</p>

        <div className="flex justify-center">
          <Link href="/en">
            <button className="btn btn-info flex items-center text-white font-normal">
              <Home /> Main page
            </button>
          </Link>
        </div>
      </div>
    </div>
  )
}

export default NotFound
