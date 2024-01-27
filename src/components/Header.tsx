import EnglishFlag from '@/svgs/EnglishFlag'
import IndonesiaFlag from '@/svgs/IndonesiaFlag '
import JapanFlag from '@/svgs/JapanFlag'
import React from 'react'

export default function Header() {
  return (
    <nav className="flex justify-between items-center sticky bg-white shadow-lg">
      <div className="flex">
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
          <a
            className="text-gray-400 cursor-default"
            aria-disabled
            href="#portofolio"
          >
            Portofolio <i className="text-xs">(coming soon)</i>
          </a>
        </div>
      </div>
      <div className="flex items-center">
        <div className="dropdown dropdown-hover">
          <div tabIndex={0} role="button" className="btn m-1">
            <IndonesiaFlag width={20} height={15} /> Indonesia
          </div>
          <ul
            tabIndex={0}
            className="dropdown-content z-[1] menu p-2 shadow bg-base-100 rounded-box w-52"
          >
            <li>
              <a>
                <EnglishFlag width={20} height={15} /> English
              </a>
            </li>
            <li>
              <a>
                <IndonesiaFlag width={20} height={15} /> Indonesia
              </a>
            </li>
            <li>
              <a>
                <JapanFlag width={20} height={15} /> Japan
              </a>
            </li>
          </ul>
        </div>

        <div className="flex items-center space-x-2 ml-4">
          <p className="text-sm">Dark</p>
          <input type="checkbox" className="toggle toggle-sm" />
        </div>
      </div>
    </nav>
  )
}
