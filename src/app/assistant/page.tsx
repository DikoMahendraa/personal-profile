import CardAssistant from '@/components/CardAssistant'
import { metadataAssistantPage } from '@/constants/seo'
import { MainLayout } from '@/layouts/MainLayout'
import { Metadata } from 'next'
import React from 'react'

export const metadata: Metadata = {
  ...metadataAssistantPage,
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
