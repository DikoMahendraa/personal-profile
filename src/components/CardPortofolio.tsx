'use client'

import { CircleUserRound, Code2, ListTodo } from 'lucide-react'
import React from 'react'
import Collapse from './Collapse'
import Image from 'next/image'

export type ContentCardProps = Readonly<{
  name: string
  role: string
  description: string
  tech: string
  images: string
}>

export interface CardPortfolioProps extends ContentCardProps {
  labelDescription: string
  labelRole: string
  labelTech: string
}

export default function CardPortofolio(item: Readonly<CardPortfolioProps>) {
  const onShowModal = () => {
    return (
      document?.getElementById('showProjectDetail') as HTMLElement & {
        showModal: () => void
      }
    )?.showModal?.()
  }
  return (
    <div className="lg:col-span-1 col-span-3 border dark:border-gray-700 border-gray-200 rounded-lg dark:shadow-lg">
      <div className="rounded-md dark:shadow-xl p-4 cursor-pointer hover:bg-gray-100/50 dark:hover:bg-gray-900/10">
        <h2 className="text-xl font-semibold uppercase">{item.name}</h2>
        <div className="relative h-[15rem] w-full mt-6 mb-4">
          <Image
            alt="image-profile"
            src={item.images}
            fill
            priority
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            quality={50}
            className="rounded-md"
          />
        </div>
        <Collapse
          icon={<CircleUserRound />}
          label={item.labelRole}
          description={item.role}
        />
        <Collapse
          icon={<ListTodo />}
          label={item.labelDescription}
          description={item.description}
        />
        <Collapse
          icon={<Code2 />}
          label={item.labelTech}
          description={item.tech}
        />

        <div className="mt-4 flex items-center gap-2">
          <button
            onClick={onShowModal}
            className="btn text-white btn-info btn-sm font-normal"
          >
            Preview
          </button>
          <button className="btn text-white btn-success font-normal btn-sm">
            Source
          </button>
        </div>
      </div>
    </div>
  )
}
