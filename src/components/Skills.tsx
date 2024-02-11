import React from 'react'

import { Locale } from '@@/i18n-config'
import { getDictionary } from '@@/get-dictionary'
import { Code2 } from 'lucide-react'

const SectionDescription = ({
  title,
  items,
}: {
  title: string
  items: Array<string>
}) => (
  <div className="xs:col-span-2 xs:mt-8">
    <p className="mb-2 text-gray-800 lg:text-lg text-base font-semibold dark:text-white flex items-center gap-2">
      <Code2 /> {title}
    </p>
    <ul className="list-disc list-item ml-5">
      {items.map((item) => (
        <li key={item} className="text-gray-600 text-base dark:text-gray-300">
          {item}
        </li>
      ))}
    </ul>
  </div>
)

export default async function Skills({ lang }: Readonly<{ lang: Locale }>) {
  const t = await getDictionary(lang)

  return (
    <div id="skills" className="mt-10 lg:px-0 px-6 mb-14">
      <h1 className="lg:text-2xl text-lg font-semibold text-gray-600 dark:text-white">
        {t.profile.skills.title_skills}
      </h1>
      <div className="grid grid-cols-2">
        <SectionDescription
          items={t.profile.skills.programming}
          title={t.profile.skills.title_programming}
        />
        <SectionDescription
          items={t.profile.skills.tools}
          title={t.profile.skills.title_tools}
        />
      </div>
      <SectionDescription
        items={t.profile.skills.library}
        title={t.profile.skills.title_library}
      />
    </div>
  )
}
