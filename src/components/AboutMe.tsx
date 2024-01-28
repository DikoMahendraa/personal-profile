import React from 'react'
import { Locale } from '../../i18n-config'
import { getDictionary } from '../../get-dictionary'

export default async function AboutMe({ lang }: { lang: Locale }) {
  const t = await getDictionary(lang)

  return (
    <div id="about" className="p-4">
      <p className="text-xl font-semibold text-gray-800 dark:text-white">
        {t.profile.about.title_aboutme}
      </p>
      <p className="mt-2 text-gray-600 dark:text-gray-300">
        {t.profile.about.description}
      </p>
    </div>
  )
}
