import { CalendarFold, GraduationCap, MapPin } from 'lucide-react'
import React, { memo } from 'react'

const educations = {
  title_education: 'Educations',
  schools: [
    {
      name: 'SMK Negeri 1 Rawajitu Selatan',
      major: 'Computer & Network Engineering',
      since: 'April 2017 - May 2019',
      place: 'Tulang Bawang, Lampung - Indonesia.',
    },
    {
      name: 'Pondok IT QODR',
      major: 'Web Developer',
      since: 'Jul 2019 - Jan 2022',
      place: 'Bantul Dligno, Yogyakarta - Indonesia',
    },
  ],
}

const Educations = () => {
  return (
    <div id="education" className="border-t border-gray-50 mt-8 pt-4">
      <h1 className="lg:text-2xl text-lg font-semibold text-gray-600 dark:text-white">
        {educations.title_education}
      </h1>
      <div className="mt-4">
        <ul className="timeline timeline-snap-icon max-md:timeline-compact timeline-vertical">
          {educations.schools.map((item, index) => (
            <li key={item.name}>
              <hr />
              <div className="timeline-middle">
                <GraduationCap className="dark:text-cyan-300" />
              </div>
              <div
                className={`${index === 0 ? 'timeline-start' : 'timeline-end'} timeline-box dark:bg-primary-dark-soft`}
              >
                <p className="text-lg flex items-center gap-2 font-semibold dark:text-white">
                  <GraduationCap className="dark:text-cyan-300" />
                  {item.name}
                </p>
                <p className="text-base dark:text-gray-300">{item.major}</p>
                <hr className="my-2 dark:bg-primary-dark" />
                <p className="text-base dark:text-gray-300 flex items-center gap-2">
                  <CalendarFold size={16} />
                  {item.since}
                </p>
                <p className="text-base dark:text-gray-300 flex items-center gap-2">
                  <MapPin size={16} />
                  {item.place}
                </p>
              </div>
              <hr />
            </li>
          ))}
        </ul>
      </div>
    </div>
  )
}

export default memo(Educations)
