import type { Metadata } from 'next'
import { Providers } from './(home)/providers'
import dynamic from 'next/dynamic'
import Head from 'next/head'

import { Locale } from '@@/i18n-config'
import { getDictionary } from '@@/get-dictionary'
import '@/app/globals.css'

const Header = dynamic(() => import('@/components/Header'), { ssr: false })

export const metadata: Metadata = {
  openGraph: {
    title: 'Hi Everyone — I am Diko Mahendra',
    description:
      'a frontend developer with more than 3 years of experience, building web-based applications and also mobile applications. using javascript typescript, implementing clean code and reusable code, working with a team. and ready to adjust to the technology needed by the company.',
    url: 'https://cocome.vercel.app',
    siteName: 'cocome.vercel.app',
    images: [
      {
        url: '/og-cover.png',
        width: 800,
        height: 600,
      },
      {
        url: '/og-cover.png',
        width: 1800,
        height: 1600,
        alt: 'cover-meta',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
}

export default async function RootLayout({
  children,
  params: { lang },
}: Readonly<{
  children: React.ReactNode
  params: { lang: Locale }
}>) {
  const t = await getDictionary(lang)

  return (
    <html lang={lang} suppressHydrationWarning>
      <Head>
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      </Head>

      <body className="dark:bg-gray-800 min-h-screen relative">
        <Providers>
          <Header content={t.profile.navbar} lang={lang} />
          {children}
        </Providers>
      </body>
    </html>
  )
}
