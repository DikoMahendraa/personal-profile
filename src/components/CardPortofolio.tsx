'use client'

import { CircleUserRound, Code2, ListTodo } from 'lucide-react'
import React from 'react'
import Collapse from './Collapse'

export default function CardPortofolio(
  item: Readonly<{
    labelDescription: string
    labelRole: string
    labelTech: string
    name: string
    role: string
    description: string
    tech: string
  }>
) {
  const onShowModal = () => {
    return (
      document?.getElementById('showProjectDetail') as HTMLElement & {
        showModal: () => void
      }
    )?.showModal?.()
  }
  return (
    <div className="lg:col-span-1 col-span-3">
      <div className="rounded-md shadow-xl p-4 cursor-pointer hover:bg-gray-100/50 dark:hover:bg-gray-900/10">
        <h2 className="text-xl font-semibold uppercase">{item.name}</h2>
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
