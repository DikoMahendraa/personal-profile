'use client'

import { useTheme } from 'next-themes'
import EnglishFlag from '@/svgs/EnglishFlag'
import IndonesiaFlag from '@/svgs/IndonesiaFlag '
import JapanFlag from '@/svgs/JapanFlag'
import Dark from '@/svgs/Dark'
import Light from '@/svgs/Light'
import { Locale } from '../../i18n-config'
import Link from 'next/link'

export default function Header({ lang }: { lang: Locale }) {
  const { theme, setTheme } = useTheme()

  const setFlag = () => {
    switch (lang) {
      case 'en':
        return (
          <p className="flex gap-2">
            <EnglishFlag width={20} height={15} /> English
          </p>
        )
      case 'jp':
        return (
          <p className="flex gap-2">
            <JapanFlag width={20} height={15} /> Japan
          </p>
        )
      case 'id':
      default:
        return (
          <p className="flex gap-2">
            <IndonesiaFlag width={20} height={15} /> Indonesia
          </p>
        )
    }
  }

  const scrollToSection = (sectionId: string) => {
    const section = document.getElementById(sectionId)
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' })
    }
  }

  return (
    <nav className="flex justify-between items-center sticky bg-white shadow-lg pr-4 dark:bg-gray-800">
      <div className="flex">
        <div className="p-4">
          <button
            onClick={() => scrollToSection('about')}
            className="text-gray-700 font-semibold dark:text-white"
          >
            About Me
          </button>
        </div>
        <div className="p-4">
          <button
            className="text-gray-700 font-semibold dark:text-white"
            onClick={() => scrollToSection('experience')}
          >
            Experience
          </button>
        </div>
        <div className="p-4">
          <button
            className="text-gray-700 font-semibold dark:text-white"
            onClick={() => scrollToSection('education')}
          >
            Education
          </button>
        </div>
        <div className="p-4">
          <button
            className="text-gray-700 font-semibold dark:text-white"
            onClick={() => scrollToSection('skills')}
          >
            Skills
          </button>
        </div>
        <div className="p-4">
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
          <div tabIndex={0} role="button" className="btn btn-sm m-1">
            {setFlag()}
          </div>
          <ul
            tabIndex={0}
            className="dropdown-content z-[1] menu p-2 shadow bg-base-100 rounded-box w-52"
          >
            <li>
              <Link locale="en" href="/en">
                <EnglishFlag width={20} height={15} /> English
              </Link>
            </li>
            <li>
              <Link locale="id" href="/id">
                <IndonesiaFlag width={20} height={15} /> Indonesia
              </Link>
            </li>
            <li>
              <Link locale="jp" href="/jp">
                <JapanFlag width={20} height={15} /> Japan
              </Link>
            </li>
          </ul>
        </div>

        <div className="flex items-center space-x-2 ml-4">
          <p className="text-sm italic capitalize">
            {theme === 'light' ? <Dark /> : <Light />}
          </p>

          <input
            type="checkbox"
            checked={theme === 'light'}
            className="toggle toggle-sm"
            onChange={() => {
              return theme === 'light' ? setTheme('dark') : setTheme('light')
            }}
          />
        </div>
      </div>
    </nav>
  )
}
