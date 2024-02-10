'use client'

import React from 'react'

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
        <h2 className="text-xl font-semibold">{item.name}</h2>
        <button
          tabIndex={0}
          className="collapse shadow-md dark:bg-gray-800 collapse-plus mt-4 text-left"
        >
          <div className="collapse-title text-base font-semibold">
            {item.labelRole}
          </div>
          <div className="collapse-content">
            <p className="font-normal">{item.role}</p>
          </div>
        </button>
        <button
          tabIndex={0}
          className="collapse shadow-md dark:bg-gray-800 collapse-plus text-left"
        >
          <div className="collapse-title text-base font-semibold">
            {item.labelDescription}
          </div>
          <div className="collapse-content">
            <p className="font-normal">{item.description}</p>
          </div>
        </button>
        <button
          tabIndex={0}
          className="collapse shadow-md dark:bg-gray-800 collapse-plus text-left"
        >
          <div className="collapse-title text-base font-semibold">
            {item.labelTech}
          </div>
          <div className="collapse-content">
            <p className="font-normal">{item.tech}</p>
          </div>
        </button>
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
