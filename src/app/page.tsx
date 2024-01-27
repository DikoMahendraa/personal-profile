import dynamic from 'next/dynamic'
import AboutMe from '@/components/AboutMe'
import Educations from '@/components/Educations'
import Experiences from '@/components/Experiences'
import Footer from '@/components/Footer'
import LeftSide from '@/components/LeftSide'
import Skills from '@/components/Skills'
const Header = dynamic(() => import('@/components/Header'), { ssr: false })

export default function Home() {
  return (
    <main className="container mx-auto flex flex-col justify-center items-center h-full">
      <section className="grid grid-cols-3 relative">
        <div className="col-span-1 px-6 relative">
          <LeftSide />
          <Footer />
        </div>

        <div className="col-span-2 h-screen relative">
          <Header />
          <div className="overflow-y-scroll h-[75rem]">
            <AboutMe />
            <Experiences />
            <Educations />
            <Skills />
          </div>
        </div>
      </section>
    </main>
  )
}
