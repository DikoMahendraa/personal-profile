import React from 'react'

import { Locale } from '@@/i18n-config'
import { getDictionary } from '@@/get-dictionary'
import { CalendarDays, GraduationCap, MapPin } from 'lucide-react'

export default async function Educations({ lang }: Readonly<{ lang: Locale }>) {
  const t = await getDictionary(lang)

  return (
    <div id="education" className="mt-10 lg:px-0 px-6">
      <h1 className="lg:text-2xl text-lg font-semibold text-gray-600 dark:text-white">
        {t.profile.educations.title_education}
      </h1>
      <div className="grid grid-cols-2 mt-4">
        {t.profile.educations.schools.map((item) => (
          <div key={item.name} className="lg:col-span-1 col-span-2 mb-6">
            <p className="lg:text-lg text-base font-semibold dark:text-white flex lg:items-center gap-2">
              <GraduationCap /> {item.name}
            </p>
            <p className="lg:text-lg text-base font-normal text-gray-500 dark:text-gray-400">
              {item.major}
            </p>
            <p className="lg:text-base text-sm font-normal text-gray-400 dark:text-gray-300 lg:mt-6 mt-3 flex items-center gap-2">
              <CalendarDays size={18} /> {item.since}
            </p>
            <p className="lg:text-base text-sm font-normal text-gray-400 dark:text-gray-300 flex items-center gap-2 mt-2">
              <MapPin size={18} /> {item.place}
            </p>
          </div>
        ))}
      </div>
    </div>
  )
}
