import { MainLayout } from '@/layouts/MainLayout'
import { ArrowLeft } from 'lucide-react'
import Link from 'next/link'
import React from 'react'

const PortfolioDetailPage = () => {
  return (
    <MainLayout>
      <Link href="/portofolio">
        <button className="dark:text-white btn btn-outline">
          <ArrowLeft />
          Back
        </button>
      </Link>

      <div>
        <p className="dark:text-white text-gray-800">
          Berikut ini adalah beberapa tools yg sering saya gunakan
        </p>
      </div>
    </MainLayout>
  )
}

export default PortfolioDetailPage
