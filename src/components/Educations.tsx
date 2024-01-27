import React from 'react'

export default function Educations() {
  return (
    <div id="education" className="mt-10">
      <p className="text-xl font-semibold text-gray-600 dark:text-white">
        Educations
      </p>
      <div className="grid grid-cols-2 mt-4">
        <div>
          <p className="text-lg font-semibold dark:text-white">
            SMK Negeri 1 Rawajitu Selatan
          </p>
          <p className="text-lg font-normal text-gray-500 dark:text-gray-400">
            Computer & Network Engineering
          </p>
          <p className="text-base font-normal text-gray-400 dark:text-gray-300 mt-2">
            2017 - 2019
          </p>
          <p className="text-base font-normal text-gray-400 dark:text-gray-300">
            Tulang Bawang, Lampung, Indonesia.
          </p>
        </div>
        <div>
          <p className="text-lg font-semibold dark:text-white">
            Pondok IT QODR
          </p>
          <p className="text-lg font-normal text-gray-500 dark:text-gray-400">
            Frontend Developer
          </p>
          <p className="text-base font-normal text-gray-400 mt-2 dark:text-gray-300">
            Jul 2019 - Jan 2022
          </p>
          <p className="text-base font-normal text-gray-400 dark:text-gray-300">
            Bantul Dligno, Yogyakarta - Indonesia
          </p>
        </div>
      </div>
    </div>
  )
}
