'use client'

import React, { memo } from 'react'
import Image from 'next/image'
import Link from 'next/link'

export type ContentCardProps = Readonly<{
  name: string
  role: string
  description: string
  tech: string
  link: string
  images: string
  available: boolean
}>

export interface CardPortfolioProps extends ContentCardProps {
  labelDescription: string
  labelRole: string
  labelTech: string
}

interface LinkCustomProps {
  children: React.ReactNode
  disabled: boolean
  href: string
}

const LinkCustom: React.FC<LinkCustomProps> = ({
  children,
  disabled,
  href,
}) => {
  return disabled ? (
    <div>{children}</div>
  ) : (
    <Link href={href} target="_blank">
      {children}
    </Link>
  )
}

const CardPortofolio = (item: Readonly<CardPortfolioProps>) => {
  return (
    <div className="lg:col-span-1 col-span-2 border dark:border-gray-700 border-gray-200 rounded-lg dark:shadow-lg">
      <div className="rounded-md dark:shadow-xl p-4 cursor-pointer hover:bg-gray-100/50 dark:hover:bg-gray-900/10">
        <h2 className="text-lg font-semibold capitalize">{item.name}</h2>
        <div className="relative aspect-video w-full mt-6 mb-4">
          <Image
            alt="image-profile"
            src={item.images}
            fill
            layout="contain"
            priority
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            quality={50}
            className="rounded-md"
          />
        </div>

        <div className="mt-4 flex items-center gap-2">
          <LinkCustom href={item.link} disabled={!item.available}>
            <button
              disabled={!item.available}
              className={`btn text-white btn-sm font-normal ${item.available ? 'btn-info' : 'btn-disabled dark:bg-gray-600 dark:text-white cursor-default'}`}
            >
              Preview
            </button>
          </LinkCustom>
          <button className="cursor-default btn text-white btn-success font-normal btn-sm">
            Source
          </button>
        </div>
      </div>
    </div>
  )
}

export default memo(CardPortofolio)
