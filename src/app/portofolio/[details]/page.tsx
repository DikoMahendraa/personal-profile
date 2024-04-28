'use client'

import { MainLayout } from '@/layouts/MainLayout'
import { ArrowLeft } from 'lucide-react'
import Image from 'next/image'
import Link from 'next/link'
import { usePathname } from 'next/navigation'

import { motion } from 'framer-motion'
import {
  allImageAssets,
  companyAssets,
  personalAssets,
} from '@/constants/listAssets'
import { portofolio } from '@/constants/portofolio'

const PortfolioDetailPage = () => {
  const pathname = usePathname()
  const lastPathname = pathname.split('/').pop() as string

  const routeBasedCompanies =
    Object.keys(companyAssets).includes(lastPathname) && 'company'

  const routeBasedPersonal =
    Object.keys(personalAssets).includes(lastPathname) && 'personal'

  const basePublicUrl = routeBasedCompanies || routeBasedPersonal

  const verticalLayout = [...Object.keys(personalAssets), 'hobids']
    .filter((key) => !['task-io', 'tartil-me'].includes(key))
    .includes(lastPathname)

  return (
    <MainLayout className="layout">
      <Link href="/portofolio">
        <ArrowLeft className="text-white dark:text-cyan-300" />
      </Link>

      <div className="my-6">
        <p className="dark:text-white lg:text-3xl text-2xl font-bold uppercase text-gray-800">
          {lastPathname.split('-').join(' ')}
        </p>
      </div>

      <div
        className={`grid h-full gap-6 mt-6 ${verticalLayout ? 'lg:grid-cols-2 grid-cols-1' : 'grid-cols-1'}`}
      >
        {// eslint-disable-next-line @typescript-eslint/ban-ts-comment
        // @ts-expect-error
        allImageAssets[lastPathname]?.map((item: number) => {
          const imageSrc = `/portofolio/${basePublicUrl}/${lastPathname}/${item}.webp`

          return (
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: 20 }}
              transition={{ delay: Number(`0.${item}`), times: 0 }}
              className={`relative  ${verticalLayout ? 'aspect-mobile' : 'aspect-video'}`}
              key={item}
            >
              <Image
                fill
                alt={`portofolio-image-${lastPathname}-${item}`}
                quality={50}
                priority
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                src={imageSrc}
              />
            </motion.div>
          )
        })}
      </div>
      <div className="my-6">
        <div
          className="dark:text-gray-400 lg:text-base text-xs"
          dangerouslySetInnerHTML={{
            // eslint-disable-next-line @typescript-eslint/ban-ts-comment
            // @ts-expect-error
            __html: portofolio[basePublicUrl][0].primary_desc,
          }}
        />
      </div>
    </MainLayout>
  )
}

export default PortfolioDetailPage
