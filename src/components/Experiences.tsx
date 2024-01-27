import React from 'react'

interface ExperiencesProps {
  title?: string
  list: string[]
  company: string
  position: string
  startDate: string
  endDate: string
  location: string
}

export default function Experiences(props: Readonly<ExperiencesProps>) {
  return (
    <div className="p-4">
      {props.title && (
        <p className="text-xl font-semibold text-gray-800 bg-green-300 pl-4 py-2 w-1/3">
          {props.title}
        </p>
      )}
      <div>
        <div className="flex mt-4 justify-between items-center">
          <div>
            <p className="text-xl font-semibold bg-gray-400 px-4 italic text-white">
              {props.company}
            </p>
            <p className="text-lg font-normal text-gray-500 mt-2">
              {props.position}
            </p>
          </div>
          <div>
            <p className="text-base text-gray-500">
              {props.startDate}-{props.endDate}
            </p>
            <p className="text-base text-gray-500 mt-2">{props.location}</p>
          </div>
        </div>
        <div className="mt-4 text-gray-600">
          <ul className="list-disc ml-4">
            {props.list.map((description) => (
              <li key={description}>{description}</li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  )
}
