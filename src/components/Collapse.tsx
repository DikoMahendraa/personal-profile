import React from 'react'

export default function Collapse({
  icon,
  label,
  description,
}: Readonly<{
  icon: React.ReactNode
  label: string
  description: string
}>) {
  return (
    <button
      tabIndex={0}
      className="collapse shadow-md dark:bg-gray-800 collapse-plus text-left"
    >
      <div className="collapse-title flex items-center gap-2 text-gray-400 capitalize text-base font-semibold">
        {icon}
        {label}
      </div>
      <div className="collapse-content">
        <p className="font-normal text-gray-800 dark:text-gray-300">
          {description}
        </p>
      </div>
    </button>
  )
}
