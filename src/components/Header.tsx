'use client'

import { useTheme } from 'next-themes'
import { Moon, Sun } from 'lucide-react'

import { usePathname } from 'next/navigation'
import { memo, useCallback, useMemo } from 'react'
import Link from 'next/link'

import { motion } from 'framer-motion'
import { MainLayout } from '@/app/(fragments)/MainLayout'

const navbar = [
  {
    href: '/',
    name: 'About Me',
  },
  {
    href: '/portofolio',
    name: 'Portofolio',
  },
  {
    href: '/articles',
    name: 'Articles',
  },
]

const HeaderItem = () => {
  const pathname = usePathname()

  return navbar.map((item) => (
    <div key={item.name} className="py-4 mr-6 lg:block hidden">
      <Link
        href={item.href}
        className="text-gray-700 relative font-semibold dark:text-white"
      >
        {item.name}

        {pathname === item.href && (
          <motion.div
            className="absolute inset-x-0 h-[2px] -bottom-1 from-gray-800 bg-gradient-to-r dark:from-base-300 dark:bg-unset"
            layoutId="navbar-desktop"
            transition={{
              type: 'tween',
              duration: 0.25,
            }}
          />
        )}
      </Link>
    </div>
  ))
}

const Header = () => {
  const { theme, setTheme } = useTheme()

  const switchDarkMode = useCallback(
    () => (theme === 'light' ? setTheme('dark') : setTheme('light')),
    [setTheme, theme]
  )

  const iconMode = useMemo(
    () => (theme === 'light' ? <Moon /> : <Sun className="text-white" />),
    [theme]
  )

  return (
    <MainLayout>
      <nav className="bg-white dark:bg-gray-800 sticky top-0 w-full z-10">
        <div className="lg:container mx-auto flex justify-between items-center">
          <div className="flex items-center">
            <HeaderItem />
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
            </div>
          </div>

          <div className="flex items-center">
            <div className="flex items-center space-x-2 ml-4">
              <button
                className="text-sm italic capitalize cursor-pointer"
                onClick={switchDarkMode}
              >
                {iconMode}
              </button>
            </div>
          </div>
        </div>
      </nav>
    </MainLayout>
  )
}

export default memo(Header)
