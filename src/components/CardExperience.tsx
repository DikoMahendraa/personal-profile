import React from 'react'

interface CardExperienceProps {
  title?: string
  list: string[]
  company: string
  position: string
  time: string
  location: string
  techTitle: string
  techUsed: string
}

export default function CardExperience({
  company,
  techTitle,
  techUsed,
  location,
  list,
  position,
  time,
  title,
}: Readonly<CardExperienceProps>) {
  return (
    <div className="p-4">
      {title && (
        <h1 className="text-2xl font-semibold text-gray-800 dark:text-white">
          {title}
        </h1>
      )}
      <div>
        <div className="flex mt-4 justify-between items-center">
          <div>
            <p className="text-xl font-semibold text-gray-800 dark:text-white">
              {company}
            </p>
            <p className="text-lg font-normal text-gray-500 mt-2 dark:text-gray-400">
              {position}
            </p>
          </div>
          <div>
            <p className="text-base text-gray-500 dark:text-gray-300">{time}</p>
            <p className="text-base text-gray-500 mt-2 dark:text-gray-300">
              {location}
            </p>
          </div>
        </div>
        <div className="mt-4 text-gray-600 dark:text-gray-300">
          <ul className="list-disc ml-4">
            {list.map((description) => (
              <li key={description}>{description}</li>
            ))}
          </ul>
        </div>
        <div className="mt-4">
          <p className="font-semibold text-gray-500">{techTitle}</p>
          <p className="font-normal underline dark:text-gray-300">
            « {techUsed}
          </p>
        </div>
      </div>
    </div>
  )
}
