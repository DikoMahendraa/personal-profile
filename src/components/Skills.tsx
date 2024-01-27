import React from 'react'

export default function Skills() {
  return (
    <div id="skills" className="mt-10">
      <p className="text-xl font-semibold text-gray-600">Skills</p>
      <div className="grid grid-cols-2 mt-4">
        <div>
          <p className="mb-2 text-lg text-gray-800 font-semibold">
            Programming Languages
          </p>
          <ul className="list-disc list-item ml-5">
            <li className="text-gray-600 text-base">Javascript</li>
            <li className="text-gray-600 text-base">Typescript</li>
          </ul>
        </div>
        <div>
          <p className="mb-2 text-gray-800 text-lg font-semibold">Tools </p>
          <ul className="list-disc list-item ml-5">
            <li className="text-gray-600 text-base">Postman</li>
            <li className="text-gray-600 text-base">Figma</li>
            <li className="text-gray-600 text-base">Jira</li>
          </ul>
        </div>
      </div>
      <div>
        <p className="mb-2 text-gray-800 text-lg font-semibold">
          Library / Framework / Services
        </p>
        <ul className="list-disc list-item ml-5">
          <li className="text-gray-600 text-base">React Js</li>
          <li className="text-gray-600 text-base">Next Js</li>
          <li className="text-gray-600 text-base">Firebase</li>
          <li className="text-gray-600 text-base">Git</li>
          <li className="text-gray-600 text-base">TailwindCSS</li>
          <li className="text-gray-600 text-base">REST API</li>
          <li className="text-gray-600 text-base">GraphQL</li>
          <li className="text-gray-600 text-base">React Native</li>
        </ul>
      </div>
    </div>
  )
}
