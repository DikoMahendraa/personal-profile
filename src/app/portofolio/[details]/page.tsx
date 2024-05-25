'use client'

import { MainLayout } from '@/layouts/MainLayout'
import { ArrowLeft } from 'lucide-react'
import Image from 'next/image'
import Link from 'next/link'
import { usePathname } from 'next/navigation'

import { motion } from 'framer-motion'
import { useAtomValue } from 'jotai'
import { detailPortofolio } from '../(fragments)/Content'

const PortfolioDetailPage = () => {
  const pathname = usePathname()
  const lastPathname = pathname.split('/').pop() as string

  const _detailPortofolio = useAtomValue(detailPortofolio)

  const isDesktop = _detailPortofolio.layout_type?.includes('desktop')

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
        className={`grid h-full gap-6 mt-6 ${!isDesktop ? 'lg:grid-cols-2 grid-cols-1' : 'grid-cols-1'}`}
      >
        {_detailPortofolio.assets?.map((item: number) => {
          const imageSrc = `/portofolio/${_detailPortofolio.type}/${lastPathname}/${item}.webp`

          return (
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: 20 }}
              transition={{ delay: Number(`0.${item}`), times: 0 }}
              className={`relative  ${!isDesktop ? 'aspect-mobile' : 'aspect-video'}`}
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
        <p className="dark:text-cyan-300 lg:text-lg text-sm font-semibold capitalize lg:my-6 my-2">
          about the application
        </p>
        <div
          className="dark:text-gray-400 lg:text-base text-xs"
          dangerouslySetInnerHTML={{
            __html: _detailPortofolio.about as TrustedHTML,
          }}
        />
        <Link
          href={String(_detailPortofolio.link)}
          target="_blank"
          className="btn btn-info my-2 btn-sm text-white text-xs"
        >
          Visit Site
        </Link>
        <p className="dark:text-cyan-300 lg:text-lg text-sm font-semibold capitalize lg:my-6 my-2">
          some things {`I'm`} working on
        </p>
        <ul className="list-disc lg:text-base text-xs dark:text-gray-400">
          {_detailPortofolio?.todo?.map((item) => (
            <li className="mb-4" key={item}>
              {item}
            </li>
          ))}
        </ul>
        <p className="dark:text-cyan-300 lg:text-lg text-sm font-semibold capitalize lg:my-6 my-2">
          technology used
        </p>
        <ul className="list-disc lg:text-base text-xs dark:text-gray-400">
          {_detailPortofolio?.tech?.map((item) => (
            <li className="capitalize" key={item}>
              {item}
            </li>
          ))}
        </ul>
      </div>
    </MainLayout>
  )
}

export default PortfolioDetailPage
