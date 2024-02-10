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
    <div className="container mx-auto relative">
      <div
        role="alert"
        className="alert sticky top-20 lg:top-[72px] bg-yellow-500 z-[5] border-none mt-10 mb-5"
      >
        <MessageSquareWarning />
        <span className="dark:text-gray-800 italic">
          Warning: Pada beberapa project mungkin sudah tidak tersedia karena
          beberapa faktor, (hilang dokumentasi, privasi, dan project yg sudah
          tidak berjalan)
        </span>
      </div>
      <div className="my-6 gap-4 dark:text-gray-200 grid grid-cols-3">
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
