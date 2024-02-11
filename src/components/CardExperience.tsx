import { Building, CalendarDays, MapPin, UserRound } from 'lucide-react'
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
        <h1 className="lg:text-2xl text-lg font-semibold text-gray-800 dark:text-white">
          {title}
        </h1>
      )}
      <div>
        <div className="flex mt-4 justify-between items-center">
          <div>
            <p className="lg:text-xl text-base font-semibold text-gray-800 dark:text-white flex items-center gap-2">
              <Building />
              {company}
            </p>
            <p className="lg:text-lg text-base font-normal text-gray-500 mt-2 dark:text-gray-400 flex items-center gap-2">
              <UserRound /> {position}
            </p>
          </div>
          <div>
            <p className="lg:text-base text-sm text-gray-500 dark:text-gray-300 flex items-center gap-2">
              <CalendarDays size={18} />
              {time}
            </p>
            <p className="lg:text-base text-sm text-gray-500 mt-2 dark:text-gray-300 flex items-center gap-2">
              <MapPin size={18} />
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
