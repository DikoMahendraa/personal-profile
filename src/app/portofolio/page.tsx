import React from 'react'
import { MessageSquareWarning } from 'lucide-react'
import { MainLayout } from '@/layouts/MainLayout'
import dynamic from 'next/dynamic'

const Content = dynamic(() => import('./(fragments)/Content'), { ssr: false })

const PortofolioPage = () => {
  return (
    <MainLayout>
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
