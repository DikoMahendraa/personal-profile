import dynamic from 'next/dynamic'
import AboutMe from '@/components/AboutMe'
import Educations from '@/components/Educations'
import Experiences from '@/components/Experiences'
import Footer from '@/components/Footer'
import LeftSide from '@/components/LeftSide'
import Skills from '@/components/Skills'

import { Locale } from '../../../i18n-config'

const Header = dynamic(() => import('@/components/Header'), { ssr: false })

export default async function Home({
  params: { lang },
}: {
  params: { lang: Locale }
}) {
  return (
    <main className="container mx-auto flex flex-col justify-center items-center h-full">
      <section className="grid grid-cols-3 relative">
        <div className="col-span-1 px-6 relative">
          <LeftSide lang={lang} />
          <Footer />
        </div>

        <div className="col-span-2 h-screen relative">
          <Header lang={lang} />
          <div className="overflow-y-scroll mt-4 h-[75rem]">
            <AboutMe lang={lang} />
            <Experiences lang={lang} />
            <Educations lang={lang} />
            <Skills lang={lang} />
          </div>
        </div>
      </section>
    </main>
  )
}
