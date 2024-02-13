import React from 'react'
import { getDictionary } from '@@/get-dictionary'
import { Locale } from '@@/i18n-config'
import { MessageSquareWarning } from 'lucide-react'
import Content from './(fragments)/Content'

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
        className="alert bg-yellow-500 border-none lg:mt-10 mt-4 mb-5 flex items-start"
      >
        <MessageSquareWarning size={30} />
        <p className="dark:text-gray-800 italic text-left">
          {t.profile.portofolio.alert}
        </p>
      </div>

      <Content
        tabs={t.profile.portofolio.tab}
        labelDescription={t.profile.portofolio.label_description}
        labelRole={t.profile.portofolio.label_role}
        labelTech={t.profile.portofolio.label_tech_used}
        itemsCompany={t.profile.portofolio.company}
        itemsPersonal={t.profile.portofolio.personal}
      />
    </div>
  )
}
