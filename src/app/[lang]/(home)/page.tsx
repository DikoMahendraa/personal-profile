import dynamic from 'next/dynamic'
import AboutMe from '@/components/AboutMe'
import Educations from '@/components/Educations'
import Experiences from '@/components/Experiences'
import Footer from '@/components/Footer'
import LeftSide from '@/components/LeftSide'
import Skills from '@/components/Skills'

import { Locale } from '../../../../i18n-config'
import { getDictionary } from '../../../../get-dictionary'

const Header = dynamic(() => import('@/components/Header'), { ssr: false })

export default async function Home({
  params: { lang },
}: Readonly<{
  params: { lang: Locale }
}>) {
  const t = await getDictionary(lang)

  return (
    <main className="lg:container mx-auto flex flex-col justify-center items-center h-full">
      <section className="grid lg:grid-cols-3 grid-cols-1 relative">
        <div className="col-span-1 hidden lg:block px-6 relative">
          <LeftSide lang={lang} />
          <Footer />
        </div>

        <div className="lg:col-span-2 col-span-1 lg:h-screen h-full relative">
          <Header content={t.profile.navbar} lang={lang} />
          <div className="overflow-y-scroll lg:mt-4 lg:h-[75rem] h-screen">
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
