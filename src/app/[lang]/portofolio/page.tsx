import Link from 'next/link'
import React from 'react'

export default function PagePortofolio() {
  return (
    <div className="container mx-auto">
      <div className="my-6 gap-4 dark:text-gray-200 grid grid-cols-3">
        {Array.from({ length: 8 }).map((idx) => (
          <div className="lg:col-span-1 col-span-3" key={idx as string}>
            <div className="rounded-md shadow-xl p-4 cursor-pointer hover:bg-gray-100/50 dark:hover:bg-gray-900/10">
              <h2 className="font-semibold">VTR</h2>
              <p className="mt-4">
                Aplikasi real estate untuk perusahaan US, memiliki beberapa role
                diantaranya tenant, landlord, dan juga professional
              </p>
              <Link href="https://vtrconnect.com" target="_blank">
                <p className="text-info mt-4">https://vtrconnect.com</p>
              </Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
