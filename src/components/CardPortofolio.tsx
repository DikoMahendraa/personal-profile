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
  viewDetail: string
  labelTech: string
}

const CardPortofolio = (props: Readonly<CardPortfolioProps>) => {
  return (
    <Link href={props.viewDetail}>
      <div className="rounded-md cursor-pointer hover:bg-gray-100/50 dark:hover:bg-gray-900/10">
        <h2 className="text-base font-semibold capitalize p-4">{props.name}</h2>
        <div className="relative aspect-video w-full">
          <Image
            alt="image-profile"
            src={props.images}
            fill
            priority
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            quality={50}
            className="rounded-md"
          />
        </div>
      </div>
    </Link>
  )
}

export default memo(CardPortofolio)
