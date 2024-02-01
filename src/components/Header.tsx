'use client'

import { useTheme } from 'next-themes'
import EnglishFlag from '@/svgs/EnglishFlag'
import IndonesiaFlag from '@/svgs/IndonesiaFlag '
import JapanFlag from '@/svgs/JapanFlag'
import Dark from '@/svgs/Dark'
import Light from '@/svgs/Light'
import { Locale } from '../../i18n-config'
import Link from 'next/link'

export default function Header({
  lang,
  content,
}: {
  lang: Locale
  content: Array<{
    href: string
    name: string
    disabled: boolean
  }>
}) {
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
    <nav className="flex justify-between items-center sticky top-0 w-full bg-white shadow-lg lg:pr-4 p-4 lg:p-2 dark:bg-gray-800">
      <div className="flex">
        {content?.map((item) => (
          <div key={item.name} className="p-4 lg:block hidden">
            <button
              disabled={!!item.disabled}
              onClick={() => scrollToSection(item.href)}
              className="text-gray-700 font-semibold dark:text-white"
            >
              {item.name}{' '}
              {item.disabled && <i className="text-xs">(coming soon)</i>}
            </button>
          </div>
        ))}
        <div className="dropdown dropdown-hover lg:hidden flex">
          <div
            tabIndex={0}
            role="button"
            className="btn btn-ghost btn-circle text-gray-300"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-8 w-8"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h16M4 18h7"
              />
            </svg>
          </div>
          <ul
            tabIndex={0}
            className="dropdown-content z-[1] menu p-2 shadow bg-base-100 rounded-box"
          >
            {content?.map((item) => (
              <li key={item.name}>
                <button
                  disabled={!!item.disabled}
                  onClick={() => scrollToSection(item.href)}
                  className="bg-base-100 text-lg btn-wide"
                >
                  {item.name}{' '}
                  {item.disabled && <i className="text-xs">(coming soon)</i>}
                </button>
              </li>
            ))}
          </ul>
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
