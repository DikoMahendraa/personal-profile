import { MainLayout } from '@/layouts/MainLayout'
import { MessageSquareCode } from 'lucide-react'
import { Metadata } from 'next'
import React from 'react'

export const metadata: Metadata = {
  title: 'Diko | Assistant',
  metadataBase: new URL('https://cocome.vercel.app/assistant'),
  description:
    'This is a tool that I often use when developing applications from the Frontend side',
  openGraph: {
    title: `Hi, I'am Diko Mahendra`,
    description:
      'This is a tool that I often use when developing applications from the Frontend side',
    url: 'https://cocome.vercel.app/assistant',
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

const AssistantPage = () => {
  return (
    <MainLayout className="layout h-screen">
      <div className="my-6 gap-4 dark:text-gray-200 h-[20rem] flex justify-center items-center w-full">
        <MessageSquareCode className="text-gray-500" size={100} />
        <div>
          <h1 className="text-2xl italic font-semibold">Coming Soon</h1>
          <h1 className="text-xl italic font-normal text-gray-500 mt-2">
            Under Development
          </h1>
        </div>
      </div>
    </MainLayout>
  )
}

export default AssistantPage
