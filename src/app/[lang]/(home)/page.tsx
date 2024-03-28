import AboutMe from '@/components/AboutMe'
import Educations from '@/components/Educations'
import Experiences from '@/components/Experiences'
import Footer from '@/components/Footer'
import LeftSide from '@/components/LeftSide'
import Skills from '@/components/Skills'

import { Locale } from '@@/i18n-config'

export default async function Home({
  params: { lang },
}: Readonly<{
  params: { lang: Locale }
}>) {
  return (
    <main className="lg:container mx-auto flex flex-col justify-center items-center">
      <section className="grid lg:grid-cols-3 grid-cols-1 relative">
        <div className="col-span-1 hidden lg:block px-6 relative">
          <LeftSide lang={lang} />
          <Footer />
        </div>

        <div className="lg:col-span-2 col-span-1 relative">
          <div className="lg:hidden">
            <LeftSide lang={lang} />
          </div>
          <AboutMe lang={lang} />
          <Experiences lang={lang} />
          <Educations lang={lang} />
          <Skills lang={lang} />
        </div>
      </section>
    </main>
  )
}
