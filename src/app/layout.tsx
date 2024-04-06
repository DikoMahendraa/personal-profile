import '@/styles/globals.css'

import { Providers } from './(fragments)/providers'
import Header from '@/components/Header'
import Footer from '@/components/Footer'

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
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
