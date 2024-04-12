'use client'

import CardPortofolio from '@/components/CardPortofolio'
import React, { useCallback, useMemo, useState } from 'react'

import { motion } from 'framer-motion'
import { portofolio } from '@/constants/portofolio'

const Content = () => {
  const [tab, setTab] = useState<string>(portofolio.tab[0])

  const listAllPortofolio = useMemo(
    () => portofolio.company.concat(portofolio.personal),
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

  const switchTab = useCallback((item: string) => setTab(item), [])

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      <div className="sticky dark:bg-primary-dark w-full top-0 z-[4] py-6">
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
      </div>

      <div className="my-6 gap-4 dark:text-gray-200 grid grid-cols-2 pb-16">
        {listPortofolio().map((item, index) => (
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
    </motion.div>
  )
}

export default Content
