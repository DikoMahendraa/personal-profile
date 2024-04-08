import Profile from '@/components/Profile'
import { MainLayout } from '@/layouts/MainLayout'
import Experiences from '@/components/Experiences'
import Educations from '@/components/Educations'
import Skills from '@/components/Skills'
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Diko | Profile',
  metadataBase: new URL('https://cocome.vercel.app'),
  description: 'Here is a little brief information about me',
  openGraph: {
    title: `Hi, I'am Diko Mahendra`,
    description:
      'Hi, I am Diko Mahendra. Frontend Engineer experience using NextJs, React Js and also React Native',
    url: 'https://cocome.vercel.app',
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
