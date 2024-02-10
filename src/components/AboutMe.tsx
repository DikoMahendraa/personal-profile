import React from 'react'
import { Locale } from '@@/i18n-config'
import { getDictionary } from '@@/get-dictionary'

export default async function AboutMe({ lang }: Readonly<{ lang: Locale }>) {
  const t = await getDictionary(lang)

  return (
    <div id="about" className="lg:p-4 px-6 lg:pt-0 mt-14">
      <h1 className="text-2xl font-semibold text-gray-800 dark:text-white">
        {t.profile.about.title_aboutme}
      </h1>
      <p className="mt-2 text-gray-600 dark:text-gray-300">
        {t.profile.about.description}
      </p>
    </div>
  )
}
