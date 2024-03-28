'use client'

import CardPortofolio, { ContentCardProps } from '@/components/CardPortofolio'
import React, { memo, useCallback, useMemo, useState } from 'react'

type ContentProps = {
  itemsCompany: Array<ContentCardProps>
  itemsPersonal: Array<ContentCardProps>
  labelDescription: string
  labelRole: string
  labelTech: string
  tabs: Array<string>
}

const Content = ({
  itemsCompany,
  itemsPersonal,
  labelDescription,
  labelRole,
  labelTech,
  tabs,
}: Readonly<ContentProps>) => {
  const [tab, setTab] = useState<string>(tabs[0])

  const listAllPortofolio = useMemo(
    () => itemsCompany.concat(itemsPersonal),
    [itemsCompany, itemsPersonal]
  )

  const listPortofolio = useCallback(() => {
    switch (tab) {
      case tabs[1]:
        return itemsCompany
      case tabs[2]:
        return itemsPersonal
      default:
        return listAllPortofolio
    }
  }, [itemsCompany, itemsPersonal, listAllPortofolio, tab, tabs])

  return (
    <div>
      <div className="sticky dark:bg-gray-800 bg-white w-full top-16 z-[4] py-6">
        <div role="tablist" className="tabs tabs-boxed lg:w-1/3 w-full tabs-lg">
          {tabs.map((item: string) => {
            const tabActive = item === tab
            const styleTabActive: string = 'bg-gray-800 text-white'
            const className: string = `${tabActive ? styleTabActive : 'bg-white text-dark-800'} tab text-base capitalize font-semibold`

            return (
              <button
                key={String(Date + item)}
                onClick={() => setTab(item)}
                className={className}
              >
                {item}
              </button>
            )
          })}
        </div>
      </div>

      <div className="my-6 gap-4 dark:text-gray-200 grid grid-cols-3 pb-16">
        {listPortofolio().map((item) => (
          <CardPortofolio
            {...item}
            available={item.available}
            labelDescription={labelDescription}
            labelRole={labelRole}
            labelTech={labelTech}
            key={item.name}
          />
        ))}
      </div>
    </div>
  )
}

export default memo(Content)
