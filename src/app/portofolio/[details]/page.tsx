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

  const onViewDetails = (url: string) => {
    window.open(url, '_blank')
  }

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
        {[...Array(_detailPortofolio.assets)].map((_, index) => {
          const imageSrc = `/portofolio/${_detailPortofolio.type}/${lastPathname}/${index + 1}.png`

          return (
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: 20 }}
              transition={{ delay: Number(`0.${index}`), times: 0 }}
              key={index}
              className="relative w-full rounded-lg overflow-hidden"
            >
              <Image
                src={imageSrc}
                alt={`portfolio-image-${lastPathname}-${index}`}
                priority
                layout="responsive" // Ensures full-width with height auto-adjusted based on aspect ratio
                width={1920} // Example width; adjust based on your design
                height={1080} // Example height; aspect ratio will be maintained
                className="rounded-lg bg-white"
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
        <button
          onClick={
            _detailPortofolio.available
              ? () => onViewDetails(_detailPortofolio.link)
              : () => ({})
          }
          className={`btn btn-ghost mt-4 
            ${
              !_detailPortofolio.available
                ? 'disabled:text-gray-400 disabled:bg-gray-600'
                : 'bg-cyan-600 text-white'
            }`}
          disabled={!_detailPortofolio.available}
        >
          Visit Site
        </button>
        <p className="dark:text-cyan-300 lg:text-lg text-sm font-semibold capitalize lg:my-6 my-2">
          What I worked on
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
