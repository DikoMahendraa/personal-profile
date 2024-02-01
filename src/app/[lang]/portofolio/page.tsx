import Link from 'next/link'
import React from 'react'

export default function PagePortofolio() {
  return (
    <div className="container mx-auto">
      <nav className="flex gap-4 shadow-lg py-4 px-6 justify-between">
        <div className="flex items-center gap-4 w-full text-center justify-center">
          <Link className="link link-info" href="#">
            Personal
          </Link>
          <Link className="link link-info" href="#">
            Companies
          </Link>
        </div>
        <button className="btn text-white btn-info uppercase">
          contact me
        </button>
      </nav>
    </div>
  )
}
