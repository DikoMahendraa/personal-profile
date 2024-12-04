import React, { memo } from 'react'

import { Code2 } from 'lucide-react'

const skills = {
  title_skills: 'Skills',
  title_programming: 'Programming Languages',
  title_library: 'Library / Framework / Services',
  title_tools: 'Tools',
  programming: ['Javascript', 'Typescript'],
  library: [
    'React Js',
    'Git',
    'React Native',
    'Dart/Flutter',
    'Next Js',
    'Firebase',
    'Git',
    'TailwindCSS',
    'REST API',
    'Docker',
    'Google Cloud Platform (GCP)',
    'Zod/Yup',
    'GraphQL',
    'React Hooks Form',
    'Tanstack Query',
    'E2E Automation (Cypress)',
    'Unit Test (RTL, Jest)',
    'Framer Motion',
  ],
  tools: ['Postman', 'Figma', 'Jira', 'Trello', 'Insomnia', 'Swagger'],
}

const SectionDescription = ({
  title,
  items,
}: {
  title: string
  items: Array<string>
}) => (
  <div className="xs:col-span-2 mt-4">
    <p className="mb-2 text-gray-800 lg:text-lg text-base font-semibold dark:text-cyan-500 flex items-center gap-2">
      <Code2 size={16} /> {title}
    </p>
    <ul className="list-disc list-item ml-5">
      {items.map((item) => (
        <li
          key={item}
          className="text-gray-600 lg:text-base mb-1 text-sm dark:text-gray-300"
        >
          {item}
        </li>
      ))}
    </ul>
  </div>
)

const Skills = () => {
  return (
    <div id="skills" className="border-t border-gray-50 mt-8 pt-4">
      <h1 className="lg:text-2xl text-lg font-semibold text-gray-600 dark:text-white">
        {skills.title_skills}
      </h1>
      <SectionDescription
        items={skills.programming}
        title={skills.title_programming}
      />
      <SectionDescription items={skills.tools} title={skills.title_tools} />
      <SectionDescription items={skills.library} title={skills.title_library} />
    </div>
  )
}

export default memo(Skills)
