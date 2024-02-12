import './globals.css'

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <meta charSet="UTF-8" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />

      <title>Hi Everyone — I am Diko Mahendra</title>
      <meta name="title" content="Hi Everyone — I am Diko Mahendra" />
      <meta
        name="description"
        content="web developer with ± 3 years of experience using NextJs, React Js and also React Native. interested in learning new things, used to working under pressure, working well with team, used to working remotely and ready to adjust skills according to company needs."
      />

      <meta property="og:type" content="website" />
      <meta property="og:url" content="https://cocome.vercel.app/" />
      <meta property="og:title" content="Hi Everyone — I am Diko Mahendra" />
      <meta
        property="og:description"
        content="web developer with ± 3 years of experience using NextJs, React Js and also React Native. interested in learning new things, used to working under pressure, working well with team, used to working remotely and ready to adjust skills according to company needs."
      />
      <meta property="og:image" content="/og-cover.png" />

      <meta property="twitter:card" content="summary_large_image" />
      <meta property="twitter:url" content="https://cocome.vercel.app/" />
      <meta
        property="twitter:title"
        content="Hi Everyone — I am Diko Mahendra"
      />
      <meta
        property="twitter:description"
        content="web developer with ± 3 years of experience using NextJs, React Js and also React Native. interested in learning new things, used to working under pressure, working well with team, used to working remotely and ready to adjust skills according to company needs."
      />
      <meta property="twitter:image" content="/og-cover.png" />

      <body className="dark:bg-gray-800 min-h-screen relative">{children}</body>
    </html>
  )
}
