import React from 'react'

export default function Educations() {
  return (
    <div id="education" className="mt-10">
      <p className="text-xl font-semibold text-gray-600">Educations</p>
      <div className="grid grid-cols-2 mt-4">
        <div>
          <p className="text-lg font-semibold">SMK Negeri 1 Rawajitu Selatan</p>
          <p className="text-lg font-normal text-gray-500">
            Computer & Network Engineering
          </p>
          <p className="text-base font-normal text-gray-400 mt-2">
            2017 - 2019
          </p>
          <p className="text-base font-normal text-gray-400">
            Tulang Bawang, Lampung, Indonesia.
          </p>
        </div>
        <div>
          <p className="text-xl font-semibold">Pondok IT QODR</p>
          <p className="text-xl font-normal text-gray-500">
            Frontend Developer
          </p>
          <p className="text-base font-normal text-gray-400 mt-2">
            Jul 2019 - Jan 2022
          </p>
          <p className="text-base font-normal text-gray-400">
            Bantul Dligno, Yogyakarta - Indonesia
          </p>
        </div>
      </div>
    </div>
  )
}
