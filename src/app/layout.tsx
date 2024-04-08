import { Providers } from '@/themes/providers'
import Header from '@/components/Header'
import Footer from '@/components/Footer'

import '@/styles/globals.css'
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Home | Profile',
  metadataBase: new URL('https://cocome.vercel.app'),
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
      {
        url: '/me.webp',
        width: 1800,
        height: 1600,
        alt: 'coco-profile-desktop',
      },
    ],
    type: 'profile',
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head />
      <body>
        <Providers>
          <Header />
          {children}
          <Footer />
        </Providers>
      </body>
    </html>
  )
}
