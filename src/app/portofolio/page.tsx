import React from 'react'
import { MessageSquareWarning } from 'lucide-react'
import { MainLayout } from '@/layouts/MainLayout'
import dynamic from 'next/dynamic'
import { Metadata } from 'next'

const Content = dynamic(() => import('./(fragments)/Content'), { ssr: false })

export const metadata: Metadata = {
  title: 'Diko | Portofolio',
  metadataBase: new URL('https://cocome.vercel.app/portofolio'),
  description:
    'These are some of the applications that I have developed while studying and working',
  openGraph: {
    title: `Hi, I'am Diko Mahendra`,
    description:
      'These are some of the applications that I have developed while studying and working',
    url: 'https://cocome.vercel.app/portofolio',
    siteName: 'My Profile',
    images: [
      {
        url: '/me.webp',
        width: 800,
        height: 600,
        alt: 'coco-profile-mobile',
      },
    ],
    type: 'profile',
  },
}

const PortofolioPage = () => {
  return (
    <MainLayout className="layout">
      <div
        role="alert"
        className="alert bg-yellow-500 border-none lg:mt-10 mt-4 mb-5 flex items-start"
      >
        <MessageSquareWarning size={30} />
        <p className="dark:text-gray-800 italic text-left">
          Warning: Some projects may no longer be available due to several
          factors (missing documentation, privacy issues, project no longer
          running).
        </p>
      </div>

      <Content />
    </MainLayout>
  )
}

export default PortofolioPage
