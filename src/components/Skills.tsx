import React from 'react'
import { Locale } from '../../i18n-config'
import { getDictionary } from '../../get-dictionary'

export default async function Skills({ lang }: { lang: Locale }) {
  const t = await getDictionary(lang)

  return (
    <div id="skills" className="mt-10">
      <p className="text-xl font-semibold text-gray-600 dark:text-white">
        {t.profile.skills.title_skills}
      </p>
      <div className="grid grid-cols-2 mt-4">
        <div>
          <p className="mb-2 text-lg text-gray-800 font-semibold dark:text-white">
            {t.profile.skills.title_programming}
          </p>
          <ul className="list-disc list-item ml-5">
            {t.profile.skills.programming.map((item) => (
              <li
                key={item}
                className="text-gray-600 text-base dark:text-gray-300"
              >
                {item}
              </li>
            ))}
          </ul>
        </div>
        <div>
          <p className="mb-2 text-gray-800 text-lg font-semibold dark:text-white">
            {t.profile.skills.title_tools}
          </p>
          <ul className="list-disc list-item ml-5">
            {t.profile.skills.tools.map((item) => (
              <li
                key={item}
                className="text-gray-600 text-base dark:text-gray-300"
              >
                {item}
              </li>
            ))}
          </ul>
        </div>
      </div>
      <div>
        <p className="mb-2 text-gray-800 text-lg font-semibold dark:text-white">
          {t.profile.skills.title_library}
        </p>
        <ul className="list-disc list-item ml-5">
          {t.profile.skills.library.map((item) => (
            <li
              key={item}
              className="text-gray-600 text-base dark:text-gray-300"
            >
              {item}
            </li>
          ))}
        </ul>
      </div>
    </div>
  )
}
