import React from 'react'

export default function Header() {
  return (
    <nav className="flex sticky bg-white shadow-lg">
      <div className="p-4 text-blue-500">
        <a className="text-gray-700 font-semibold" href="#about">
          About Me
        </a>
      </div>
      <div className="p-4 text-blue-500">
        <a className="text-gray-700 font-semibold" href="#experience">
          Experience
        </a>
      </div>
      <div className="p-4 text-blue-500">
        <a className="text-gray-700 font-semibold" href="#education">
          Education
        </a>
      </div>
      <div className="p-4 text-blue-500">
        <a className="text-gray-700 font-semibold" href="#skills">
          Skills
        </a>
      </div>
      <div className="p-4 text-blue-500">
        <a className="text-gray-700 font-semibold" href="#portofolio">
          Portofolio
        </a>
      </div>
    </nav>
  )
}
