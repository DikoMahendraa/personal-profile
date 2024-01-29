import React from 'react'
import CardExperience from './CardExperience'
import { Locale } from '../../i18n-config'

import { getDictionary } from '../../get-dictionary'

export default async function Experiences({ lang }: { lang: Locale }) {
  const t = await getDictionary(lang)

  return (
    <div id="experience" className='lg:px-0 px-2'>
      {t.profile.experiences.company.map((item, index) => (
        <CardExperience
          key={item.name}
          location={item.country}
          time={item.time}
          company={item.name}
          position={item.position}
          techTitle={item.title_tech_used}
          techUsed={item.techonology}
          title={index === 0 ? t.profile.experiences.title_experience : ''}
          list={item.description}
        />
      ))}
    </div>
  )
}
