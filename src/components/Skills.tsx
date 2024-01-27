import React from 'react'

export default function Skills() {
  return (
    <div id="skills" className="mt-10">
      <p className="text-xl font-semibold text-gray-600 dark:text-white">
        Skills
      </p>
      <div className="grid grid-cols-2 mt-4">
        <div>
          <p className="mb-2 text-lg text-gray-800 font-semibold dark:text-white">
            Programming Languages
          </p>
          <ul className="list-disc list-item ml-5">
            <li className="text-gray-600 text-base dark:text-gray-300">
              Javascript
            </li>
            <li className="text-gray-600 text-base dark:text-gray-300">
              Typescript
            </li>
          </ul>
        </div>
        <div>
          <p className="mb-2 text-gray-800 text-lg font-semibold dark:text-white">
            Tools{' '}
          </p>
          <ul className="list-disc list-item ml-5">
            <li className="text-gray-600 text-base dark:text-gray-300">
              Postman
            </li>
            <li className="text-gray-600 text-base dark:text-gray-300">
              Figma
            </li>
            <li className="text-gray-600 text-base dark:text-gray-300">Jira</li>
          </ul>
        </div>
      </div>
      <div>
        <p className="mb-2 text-gray-800 text-lg font-semibold dark:text-white">
          Library / Framework / Services
        </p>
        <ul className="list-disc list-item ml-5">
          <li className="text-gray-600 text-base dark:text-gray-300">
            React Js
          </li>
          <li className="text-gray-600 text-base dark:text-gray-300">
            Next Js
          </li>
          <li className="text-gray-600 text-base dark:text-gray-300">
            Firebase
          </li>
          <li className="text-gray-600 text-base dark:text-gray-300">Git</li>
          <li className="text-gray-600 text-base dark:text-gray-300">
            TailwindCSS
          </li>
          <li className="text-gray-600 text-base dark:text-gray-300">
            REST API
          </li>
          <li className="text-gray-600 text-base dark:text-gray-300">
            GraphQL
          </li>
          <li className="text-gray-600 text-base dark:text-gray-300">
            React Native
          </li>
        </ul>
      </div>
    </div>
  )
}
