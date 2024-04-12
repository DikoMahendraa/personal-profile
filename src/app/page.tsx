import Profile from '@/components/Profile'
import { MainLayout } from '@/layouts/MainLayout'
import Experiences from '@/components/Experiences'
import Educations from '@/components/Educations'
import Skills from '@/components/Skills'
import { Metadata } from 'next'
import { metadataMainPage } from '@/constants/seo'

export const metadata: Metadata = {
  ...metadataMainPage,
}

const HomePage = () => {
  return (
    <MainLayout className="layout">
      <Profile />
      <Experiences />
      <Educations />
      <Skills />
    </MainLayout>
  )
}

export default HomePage
