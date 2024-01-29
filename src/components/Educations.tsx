import React from 'react'
import { Locale } from '../../i18n-config'
import { getDictionary } from '../../get-dictionary'

export default async function Educations({ lang }: { lang: Locale }) {
  const t = await getDictionary(lang)

  return (
    <div id="education" className="mt-10 lg:px-0 px-6">
      <p className="text-xl font-semibold text-gray-600 dark:text-white">
        {t.profile.educations.title_education}
      </p>
      <div className="grid grid-cols-2 mt-4">
        {t.profile.educations.schools.map((item) => (
          <div key={item.name}>
            <p className="text-lg font-semibold dark:text-white">{item.name}</p>
            <p className="text-lg font-normal text-gray-500 dark:text-gray-400">
              {item.major}
            </p>
            <p className="text-base font-normal text-gray-400 dark:text-gray-300 mt-2">
              {item.since}
            </p>
            <p className="text-base font-normal text-gray-400 dark:text-gray-300">
              {item.place}
            </p>
          </div>
        ))}
      </div>
    </div>
  )
}
