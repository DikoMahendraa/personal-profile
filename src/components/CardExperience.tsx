import { Building, CalendarDays, MapPin, UserRound } from 'lucide-react'
import React, { memo } from 'react'

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

const CardExperience = ({
  company,
  techTitle,
  techUsed,
  location,
  list,
  position,
  time,
  title,
}: Readonly<CardExperienceProps>) => {
  return (
    <div className="mb-6">
      {title && (
        <h1 className="lg:text-2xl text-lg font-semibold text-gray-800 dark:text-white">
          {title}
        </h1>
      )}
      <div>
        <div className="lg:flex sm:flex mt-4 justify-between items-center xs:grid sm grid-cols-2">
          <div className="xs:col-span-2">
            <p className="text-base lg:text-lg font-semibold text-gray-800 dark:text-cyan-500 flex items-center gap-2">
              <Building />
              {company}
            </p>
            <p className="lg:text-base text-sm font-normal text-gray-500 mt-2 dark:text-gray-400 flex items-center gap-2">
              <UserRound /> {position}
            </p>
          </div>
          <div className="xs:col-span-2 mt-4 lg:mt-0">
            <p className="lg:text-sm text-xs  text-gray-500 dark:text-gray-300 flex items-center gap-2">
              <CalendarDays size={18} />
              {time}
            </p>
            <p className="lg:text-sm text-xs  text-gray-500 mt-2 dark:text-gray-300 flex items-center gap-2">
              <MapPin size={18} />
              {location}
            </p>
          </div>
        </div>
        <div className="mt-4 text-gray-600 dark:text-gray-300">
          <ul className="list-disc ml-4">
            {list.map((description) => (
              <li key={description} className="lg:text-base text-sm">
                {description}
              </li>
            ))}
          </ul>
        </div>
        <div className="mt-4">
          <p className="font-semibold lg:text-base text-sm text-gray-500">
            {techTitle}
          </p>
          <p className="font-normal lg:text-base text-sm underline dark:text-gray-300">
            « {techUsed}
          </p>
        </div>
      </div>
    </div>
  )
}

export default memo(CardExperience)
