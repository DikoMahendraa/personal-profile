import React from 'react'
import { getDictionary } from '@@/get-dictionary'
import { Locale } from '@@/i18n-config'
import CardPortofolio from '@/components/CardPortofolio'
import { MessageSquareWarning } from 'lucide-react'

export default async function PagePortofolio({
  params: { lang },
}: Readonly<{
  params: { lang: Locale }
}>) {
  const t = await getDictionary(lang)

  return (
    <div className="lg:container px-4 lg:px-0 mx-auto relative">
      <div
        role="alert"
        className="alert lg:sticky top-20 lg:top-[72px] bg-yellow-500 z-[5] border-none lg:mt-10 mt-4 mb-5 flex items-start"
      >
        <MessageSquareWarning size={30} />
        <p className="dark:text-gray-800 italic text-left">
          {t.profile.portofolio.alert}
        </p>
      </div>
      <div className="my-6 gap-4 dark:text-gray-200 grid grid-cols-3 pb-16">
        {t.profile.portofolio.company.map((item) => (
          <CardPortofolio
            labelDescription={t.profile.portofolio.label_description}
            labelRole={t.profile.portofolio.label_role}
            labelTech={t.profile.portofolio.label_tech_used}
            {...item}
            key={item.name}
          />
        ))}
      </div>
    </div>
  )
}
