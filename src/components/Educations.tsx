import { CalendarDays, GraduationCap, MapPin } from 'lucide-react'
import React, { memo } from 'react'

const educations = {
  title_education: 'Educations',
  schools: [
    {
      name: 'SMK Negeri 1 Rawajitu Selatan',
      major: 'Computer & Network Engineering',
      since: '2017 - May 2019',
      place: 'Tulang Bawang, Lampung, Indonesia.',
    },
    {
      name: 'Pondok IT QODR',
      major: 'Frontend Developer',
      since: 'Jul 2019 - Jan 2022',
      place: 'Bantul Dligno, Yogyakarta - Indonesia',
    },
  ],
}

const EducationItem = () => {
  return educations.schools.map((item) => (
    <div key={item.name} className="lg:col-span-1 col-span-2 mb-6">
      <p className="lg:text-lg text-base font-semibold dark:text-cyan-500 flex lg:items-center gap-2">
        <GraduationCap /> {item.name}
      </p>
      <p className="lg:text-base text-sm font-normal text-gray-500 dark:text-gray-400">
        {item.major}
      </p>
      <p className="lg:text-base text-sm font-normal text-gray-400 dark:text-gray-300 lg:mt-6 mt-3 flex items-center gap-2">
        <CalendarDays size={18} /> {item.since}
      </p>
      <p className="lg:text-base text-sm font-normal text-gray-400 dark:text-gray-300 flex items-center gap-2 mt-2">
        <MapPin size={18} /> {item.place}
      </p>
    </div>
  ))
}

const Educations = () => {
  return (
    <div id="education" className="border-t border-gray-50 mt-8 pt-4">
      <h1 className="lg:text-2xl text-lg font-semibold text-gray-600 dark:text-white">
        {educations.title_education}
      </h1>
      <div className="grid grid-cols-2 mt-4">
        <EducationItem />
      </div>
    </div>
  )
}

export default memo(Educations)
