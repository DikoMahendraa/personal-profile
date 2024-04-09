import CardAssistant from '@/components/CardAssistant'
import { MainLayout } from '@/layouts/MainLayout'
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
    <MainLayout className="layout">
      <div className="my-6 gap-4 dark:text-gray-200">
        <p className="text-xl font-semibold">
          Tools and all the sources that I use
        </p>
        <CardAssistant />
      </div>
    </MainLayout>
  )
}

export default AssistantPage
