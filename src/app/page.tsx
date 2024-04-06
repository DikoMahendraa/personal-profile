import Profile from '@/components/Profile'
import { MainLayout } from './(fragments)/MainLayout'
import Experiences from '@/components/Experiences'
import Educations from '@/components/Educations'
import Skills from '@/components/Skills'

export default function Home() {
  return (
    <MainLayout>
      <Profile />
      <Experiences />
      <Educations />
      <Skills />
    </MainLayout>
  )
}
