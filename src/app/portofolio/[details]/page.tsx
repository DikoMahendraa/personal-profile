'use client'

import { MainLayout } from '@/layouts/MainLayout'
import { ArrowLeft } from 'lucide-react'
import Image from 'next/image'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import React, { useCallback } from 'react'

import { motion } from 'framer-motion'

const PortfolioDetailPage = () => {
  const pathname = usePathname()
  const lastPathname = pathname.split('/').pop() as string

  const imageCount = useCallback(() => {
    switch (lastPathname) {
      case 'vtr':
        return []
      case 'agreeculture.id':
        return [1, 2, 3, 4, 5, 6, 7, 8]
      case 'dashboard-zeus-hermes':
        return []
      case 'dana-syariah':
        return []
      case 'certie':
        return []
      case 'dashboard-zurich-insurance':
        return [1, 2, 3, 4, 5]
      case 'mirocks-insurance':
        return [1, 2, 3, 4, 5, 6, 7, 8, 9]
      case 'landing-page-qatros':
        return [1, 2, 3, 4, 5, 6]
      case 'woowa-dashboard':
        return []
      case 'liveness-detection':
        return []
      case 'tartil-me':
        return [1, 2, 3, 4, 5, 6]
      case 'burger-city':
        return [1, 2, 3, 4, 5, 6, 7, 8, 9]
      case 'financial-planner':
        return [1, 2, 3, 4, 5, 6, 7, 8, 9]
      default:
        return []
    }
  }, [lastPathname])

  const routeBasedCompanies =
    [
      'vtr',
      'agreeculture.id',
      'dashboard-zeus-hermes',
      'dana-syariah',
      'mirocks-insurance',
      'certie',
      'dashboard-zurich-insurance',
      'landing-page-qatros',
      'woowa-dashboard',
      'liveness-detection',
    ].includes(lastPathname) && 'company'

  const routeBasedPersonal =
    [
      'task-io',
      'my-doctor',
      'financial-planner',
      'tartil-me',
      'burger-city',
    ].includes(lastPathname) && 'personal'

  const basePublicUrl = routeBasedCompanies || routeBasedPersonal

  return (
    <MainLayout>
      <Link href="/portofolio">
        <button className="dark:text-white btn btn-outline">
          <ArrowLeft />
          Back
        </button>
      </Link>

      <div className="my-10">
        <p className="dark:text-white text-3xl font-bold text-gray-800">
          TartileMe
        </p>
      </div>

      <div className="grid grid-cols-1 gap-6 mt-12">
        {imageCount().map((item, index) => {
          const imageSrc = `/portofolio/${basePublicUrl}/${lastPathname}/${index + 1}.webp`

          return (
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: 20 }}
              transition={{ delay: Number(`0.${index}`), times: 0 }}
              className="relative aspect-video"
              key={item}
            >
              <Image
                fill
                // style={{ objectFit: 'contain' }}
                alt="portofolio-image-index"
                quality={50}
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                src={imageSrc}
              />
            </motion.div>
          )
        })}
      </div>
    </MainLayout>
  )
}

export default PortfolioDetailPage
