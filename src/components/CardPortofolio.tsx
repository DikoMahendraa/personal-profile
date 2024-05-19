'use client'

import React, { memo } from 'react'
import Image from 'next/image'

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
  onPreview: () => void
  labelTech: string
}

const CardPortofolio = (props: Readonly<CardPortfolioProps>) => {
  return (
    <div
      onClick={props.onPreview}
      className="rounded-md cursor-pointer hover:bg-gray-100/50 dark:hover:bg-gray-900/10"
    >
      <h2 className="text-base font-semibold capitalize p-4">{props.name}</h2>
      <div className="relative aspect-video w-full">
        <Image
          alt="image-profile"
          src={props.images}
          fill
          priority
          className="rounded-md"
        />
      </div>
    </div>
  )
}

export default memo(CardPortofolio)
