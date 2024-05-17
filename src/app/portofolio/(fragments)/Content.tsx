'use client'

import CardPortofolio from '@/components/CardPortofolio'
import React, { useCallback, useMemo, useState } from 'react'

import { motion } from 'framer-motion'
import { listFilterPortofolio, portofolio } from '@/constants/portofolio'
import Image from 'next/image'
import { ChevronDown, FolderGit2 } from 'lucide-react'

const Content = () => {
  const [tab, setTab] = useState<string>(portofolio.tab[0])
  const [filter, setFilter] = useState<string>('')
  const [showFilter, setshowFilter] = useState<boolean>(false)

  const listAllPortofolio = useMemo(
    () => portofolio.company.concat(portofolio?.personal),
    []
  )

  const listPortofolio = useCallback(() => {
    switch (tab) {
      case portofolio.tab[1]:
        return portofolio.company
      case portofolio.tab[2]:
        return portofolio.personal
      default:
        return listAllPortofolio
    }
  }, [listAllPortofolio, tab])

  const listFilterByTech = useCallback(() => {
    if (filter.length > 0) {
      return listPortofolio().filter((item) => {
        const splitTech = item.tech
          .split(',')
          .map((tech) =>
            tech.trim().toLowerCase().replace('js', '').replace(/ /g, '')
          )

        return splitTech.includes(
          filter.toLowerCase().replace('js', '').replace(/ /g, '')
        )
      })
    } else {
      return listPortofolio()
    }
  }, [filter, listPortofolio])

  const switchTab = useCallback((item: string) => setTab(item), [])

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      <div className=" flex items-center justify-between dark:bg-primary-dark w-full top-0 z-[4] py-6">
        <div role="tablist">
          {portofolio.tab.map((item: string) => {
            return (
              <button
                className={`relative mr-4 text-gray-400 capitalize ${tab === item && 'dark:!text-cyan-300 !text-gray-600 font-semibold'}`}
                key={String(Date + item)}
                onClick={() => switchTab(item)}
              >
                {item}

                {tab === item && (
                  <motion.span
                    className="absolute inset-x-0 h-[2px] bg-gradient-to-r -bottom-2 dark:bg-cyan-300 from-primary-dark-soft text-white dark:bg-unset"
                    layoutId="navbar-filter-portofolio"
                    transition={{
                      type: 'tween',
                      duration: 0.25,
                    }}
                  />
                )}
              </button>
            )
          })}
        </div>

        <div>
          <ul className="menu">
            <li className="relative">
              <button
                onClick={() => {
                  setshowFilter((visible) => !visible)
                }}
                className="dark:text-white lg:bg-none w-full active:bg-cyan-300/10"
              >
                <p className="hidden lg:flex dark:text-gray-400">
                  Filter by
                  <span className="text-cyan-300 font-semibold ml-2">
                    {filter.trim()}
                  </span>
                </p>
                {showFilter ? (
                  <motion.span
                    layoutId="navbar-filter-portofolio-hide"
                    transition={{
                      type: 'tween',
                      duration: 0.25,
                    }}
                    animate={{ rotate: showFilter ? '90deg' : '0deg' }}
                  >
                    <ChevronDown className="dark:text-white" size={16} />
                  </motion.span>
                ) : (
                  <motion.span
                    layoutId="navbar-filter-portofolio-show"
                    transition={{
                      type: 'tween',
                      duration: 0.25,
                    }}
                  >
                    <ChevronDown className="dark:text-white" size={16} />
                  </motion.span>
                )}
              </button>
              {showFilter && (
                <motion.ul
                  layoutId="navbar-filter-list-tech"
                  transition={{
                    type: 'tween',
                    duration: 0.25,
                  }}
                  animate={{
                    opacity: showFilter ? 1 : 0,
                    x: showFilter ? 0 : 20,
                  }}
                  initial={{
                    opacity: 0,
                    x: 20,
                  }}
                  className="dark:text-gray-300 w-[12rem] z-[4] rounded-md bg-white top-10 py-2 dark:bg-primary-dark absolute lg:left-[-3rem] left-[-7rem] pr-2"
                >
                  {listFilterPortofolio.map((item) => (
                    <li
                      onClick={() => setFilter(item.name)}
                      className={`dark:hover:bg-cyan-300/25 rounded-md dark:hover:text-cyan-300 ${filter === item.name ? 'dark:text-cyan-300 dark:bg-cyan-300/25' : ''}`}
                      key={item.name}
                    >
                      <p className="flex items-center gap-2 capitalize">
                        <Image
                          priority
                          alt={`image-${item.name}`}
                          src={item.icons}
                          width={20}
                          height={20}
                        />
                        {item.name.toLowerCase().replace('js', '')}
                      </p>
                    </li>
                  ))}
                  <button
                    className="btn btn-outline btn-sm w-full mt-2 btn-error"
                    onClick={() => {
                      setFilter('')
                      setshowFilter(false)
                    }}
                  >
                    Reset
                  </button>
                </motion.ul>
              )}
            </li>
          </ul>
        </div>
      </div>

      <div className=" my-6 gap-4 dark:text-gray-200 grid grid-cols-2 pb-16">
        {listFilterByTech().map((item, index) => (
          <motion.div
            className="lg:col-span-1 col-span-2 border dark:bg-primary-dark-soft dark:border-cyan-300/30 hover:bg-cyan-300/25 rounded-lg dark:hover:bg-cyan-300/25 transition-colors"
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: 20 }}
            transition={{ delay: Number(`0.${index}`), times: 0 }}
            key={item.name}
          >
            <CardPortofolio
              {...item}
              viewDetail={`/portofolio/${item.name.toLowerCase().replace(/ /g, '-')}`}
              available={item.available}
              labelDescription={portofolio.label_description}
              labelRole={portofolio.label_role}
              labelTech={portofolio.label_tech_used}
            />
          </motion.div>
        ))}
      </div>
      {listFilterByTech().length === 0 && (
        <motion.div
          className="w-full flex-col items-center justify-center "
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
        >
          <div className="flex justify-center mb-4">
            <FolderGit2 className="dark:text-gray-400" size={40} />
          </div>
          <p className="text-center text-gray-400 dark:text-gray-500">
            There is no portfolio available yet.
          </p>
        </motion.div>
      )}
    </motion.div>
  )
}

export default Content
