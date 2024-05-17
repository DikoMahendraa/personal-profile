import React, { memo, useCallback } from 'react'
import CardExperience from './CardExperience'
import { experiences } from '@/constants/experiences'

const Experiences = () => {
  const title = useCallback(
    (index: number) => (index === 0 ? experiences.title_experience : ''),
    []
  )

  return (
    <div id="experience" className="border-t border-gray-50 mt-8 pt-4">
      {experiences.company.map((item, index) => (
        <CardExperience
          key={item.name}
          location={item.country}
          time={item.time}
          company={item.name}
          position={item.position}
          techTitle={item.title_tech_used}
          techUsed={item.techonology}
          title={title(index)}
          list={item.description}
        />
      ))}
    </div>
  )
}

export default memo(Experiences)
