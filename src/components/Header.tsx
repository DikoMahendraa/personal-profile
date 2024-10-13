'use client'

import { useTheme } from 'next-themes'
import { Menu, Moon, Sun } from 'lucide-react'

import { usePathname } from 'next/navigation'
import { memo, useCallback, useMemo } from 'react'
import Link from 'next/link'

import { motion } from 'framer-motion'

const navbar = [
  {
    href: '/',
    name: 'Profile',
  },
  {
    href: '/portofolio',
    name: 'Portofolio',
  },
  {
    href: '/assistant',
    name: 'Assistant',
  },
]

const HeaderItem: React.FC<{ pathname: string }> = ({ pathname }) => {
  return navbar.map((item) => (
    <div key={item.name} className="py-4 mr-6 lg:block hidden">
      <Link
        href={item.href}
        className={`relative dark:text-gray-400 dark:hover:text-cyan-600/80 ${pathname === item.href && 'dark:!text-cyan-300 font-semibold'}`}
      >
        {item.name}

        {pathname === item.href && (
          <motion.div
            className="absolute inset-x-0 h-px -bottom-1 from-primary-dark-soft bg-gradient-to-r dark:from-cyan-300/50 dark:bg-unset"
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
  const pathname = usePathname()
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
    <nav className="bg-white dark:bg-primary-dark sticky top-0 w-full z-10">
      <div className="layout flex items-center justify-between py-4">
        <div className="flex items-center">
          <HeaderItem pathname={pathname} />
          <div className="dropdown dropdown-hover lg:hidden flex">
            <button
              tabIndex={0}
              className="btn btn-ghost btn-circle text-gray-800 dark:text-white"
            >
              <Menu />
            </button>

            <ul
              tabIndex={0}
              className="dropdown-content z-[1] menu py-2 shadow dark:bg-gray-800 bg-white rounded-box w-[10rem]"
            >
              {navbar?.map((item) => (
                <li key={item.name}>
                  <Link
                    href={item.href}
                    className={`relative flex items-center text-base hover:text-red-500 dark:text-gray-400 ${pathname === item.href && 'dark:!text-cyan-300 font-semibold'}`}
                  >
                    {item.name}

                    {pathname === item.href && (
                      <motion.span
                        className="absolute right-0 left-24 h-px rounded-full from-primary-dark-soft bg-gradient-to-r dark:from-cyan-300/50  dark:bg-unset"
                        layoutId="navbar-desktop-mobile"
                        transition={{
                          type: 'tween',
                          duration: 0.25,
                        }}
                      />
                    )}
                  </Link>
                </li>
              ))}
            </ul>
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
  )
}

export default memo(Header)
