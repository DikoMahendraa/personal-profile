import React from 'react'

interface ExperiencesProps {
  title?: string;
  list: string[];
  company: string;
  position: string;
  startDate: string;
  endDate: string
}

export default function Experiences(props: Readonly<ExperiencesProps>) {
  return (
    <div id="pengalaman" className="p-4">
      {
        props.title && (
          <p className="text-xl font-semibold text-gray-800">{props.title}</p>
        )
      }
        <div>
        <div className="flex mt-4 justify-between items-center">
          <div>
            <p className="text-xl font-semibold">{props.company}</p>
            <p className="text-lg font-normal text-gray-500 mt-2">{props.position}</p>
          </div>
          <div>
            <p className="text-base text-gray-500">{props.startDate}-{props.endDate}</p>
            <p className="text-base text-gray-500 mt-2">Slangor - Malaysia</p>
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
