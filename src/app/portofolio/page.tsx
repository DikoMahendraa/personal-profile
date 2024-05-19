import React from 'react'
import { MessageSquareWarning } from 'lucide-react'
import { Metadata } from 'next'
import { MainLayout } from '@/layouts/MainLayout'
import ContentPortofolio from './(fragments)/Content'
import { metadataPortofolioPage } from '@/constants/seo'

export const metadata: Metadata = {
  ...metadataPortofolioPage,
}

const PortofolioPage = () => {
  return (
    <MainLayout className="layout">
      <div className="alert bg-yellow-500 p-4 gap-2 rounded-md border-none lg:mt-10 mt-4 mb-5 flex items-start">
        <MessageSquareWarning
          size={30}
          className="text-primary-dark hidden lg:inline"
        />
        <p className="dark:text-gray-800 italic text-left">
          <b>Warning:</b> Some projects may no longer be available due to
          several factors (missing documentation, privacy issues, project no
          longer running).
        </p>
      </div>

      <ContentPortofolio />
    </MainLayout>
  )
}

export default PortofolioPage
