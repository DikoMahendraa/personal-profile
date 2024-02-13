'use client'

import Link from 'next/link'
import { useCallback } from 'react'
import { useTheme } from 'next-themes'
import { usePathname, useRouter } from 'next/navigation'
import { Moon, Sun } from 'lucide-react'

import EnglishFlag from '@/svgs/EnglishFlag'
import IndonesiaFlag from '@/svgs/IndonesiaFlag '
import JapanFlag from '@/svgs/JapanFlag'
import { Locale } from '@@/i18n-config'

interface Language {
  locale: string
  href: string
  flag: React.ReactNode
  name: string
}

interface LanguageItemProps {
  locale: string
  href: string
  flag: React.ReactNode
  name: string
}

const languages = [
  {
    locale: 'en',
    href: '/en',
    flag: <EnglishFlag width={20} height={15} />,
    name: 'English',
  },
  {
    locale: 'id',
    href: '/id',
    flag: <IndonesiaFlag width={20} height={15} />,
    name: 'Indonesia',
  },
  {
    locale: 'jp',
    href: '/jp',
    flag: <JapanFlag width={20} height={15} />,
    name: 'Japan',
  },
]

const LanguageItem: React.FC<LanguageItemProps> = ({
  locale,
  href,
  flag,
  name,
}) => {
  return (
    <li>
      <Link locale={locale} href={href}>
        <span className="flex items-center gap-2">
          {flag} {name}
        </span>
      </Link>
    </li>
  )
}

interface LanguageSelectorProps {
  languages: Array<Language>
  defaultValue: React.ReactNode
}

const LanguageSelector: React.FC<LanguageSelectorProps> = ({
  languages,
  defaultValue,
}) => {
  return (
    <div className="relative">
      <button className="btn dropdown-toggle">{defaultValue}</button>
      <ul
        className="dropdown-content z-[1] menu p-2 shadow bg-base-100 rounded-box w-52"
        tabIndex={0}
      >
        {languages.map((lang) => (
          <LanguageItem
            key={String(Date + lang.name)}
            locale={lang.locale}
            href={lang.href}
            flag={lang.flag}
            name={lang.name}
          />
        ))}
      </ul>
    </div>
  )
}

export default function Header({
  lang,
  content,
}: Readonly<{
  lang: Locale
  content: Array<{
    href: string
    name: string
    disabled: boolean
    scrollable: boolean
  }>
}>) {
  const router = useRouter()
  const pathname = usePathname()
  const { theme, setTheme } = useTheme()

  const setFlag: () => React.ReactNode = () => {
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

  const scrollToSection = useCallback(
    (sectionId: string, scrollable: boolean) => {
      const section = document.getElementById(sectionId)

      if (scrollable) {
        if (pathname.includes('portofolio') || pathname.includes('articles')) {
          router.push(`/${lang}`)
        }
        section?.scrollIntoView({ behavior: 'smooth' })
      } else {
        router.push(`/${lang}/${sectionId}`)
      }
    },
    [lang, pathname, router]
  )

  return (
    <nav className="bg-white dark:bg-gray-800 sticky top-0 w-full z-10 shadow-lg lg:pr-4 p-4 lg:p-2">
      <div className="lg:container mx-auto flex justify-between items-center">
        <div className="flex items-center">
          {content?.map((item) => (
            <div key={item.name} className="p-4 lg:block hidden">
              <button
                disabled={item.disabled}
                onClick={() => scrollToSection(item.href, item.scrollable)}
                className="text-gray-700 font-semibold dark:text-white"
              >
                {item.name}{' '}
                {item.disabled && <i className="text-xs">(coming soon)</i>}
              </button>
            </div>
          ))}
          <div className="dropdown dropdown-hover lg:hidden flex">
            <button
              tabIndex={0}
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
            </button>
            <ul
              tabIndex={0}
              className="dropdown-content z-[1] menu p-2 shadow bg-base-100 rounded-box"
            >
              {content?.map((item) => (
                <li key={item.name}>
                  <button
                    disabled={!!item.disabled}
                    onClick={() => scrollToSection(item.href, item.scrollable)}
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
            <LanguageSelector defaultValue={setFlag()} languages={languages} />
          </div>

          <div className="flex items-center space-x-2 ml-4">
            <label className="swap swap-rotate">
              <input
                type="checkbox"
                onChange={() =>
                  theme === 'light' ? setTheme('dark') : setTheme('light')
                }
              />

              <Moon className="swap-on text-gray-800" />
              <Sun className="swap-off text-white" />
            </label>
          </div>
        </div>
      </div>
    </nav>
  )
}
