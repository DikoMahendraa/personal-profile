import { Providers } from '@/themes/providers'
import Header from '@/components/Header'
import Footer from '@/components/Footer'

import { GoogleAnalytics } from '@next/third-parties/google'
import { Poppins } from 'next/font/google'

import '@/styles/globals.css'

const poppins = Poppins({
  weight: ['400', '500', '600', '700'],
  subsets: ['latin'],
  variable: '--font-poppins',
})

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" suppressHydrationWarning className={poppins.className}>
      <head />
      <body>
        <Providers>
          <Header />
          {children}
          <Footer />
        </Providers>
      </body>
      <GoogleAnalytics gaId="G-069D1L25M7" />
    </html>
  )
}
