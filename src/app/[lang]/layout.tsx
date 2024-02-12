import { Providers } from './(home)/providers'
import dynamic from 'next/dynamic'
import Head from 'next/head'

import { Locale } from '@@/i18n-config'
import { getDictionary } from '@@/get-dictionary'
import '@/app/globals.css'

const Header = dynamic(() => import('@/components/Header'), { ssr: false })

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
