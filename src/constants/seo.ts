const baseMetadata = {
  title: 'Diko |',
  description:
    'Hi, I am Diko Mahendra. Frontend Engineer experience using NextJs, React Js and also React Native',
  openGraph: {
    title: `Hi, I'am Diko Mahendra`,
    description:
      'Hi, I am Diko Mahendra. Frontend Engineer experience using NextJs, React Js and also React Native',
    siteName: 'My Profile',
    images: [
      {
        url: '/me.jpg',
        width: 400,
        height: 100,
        alt: 'coco-profile-mobile',
      },
    ],
    type: 'profile',
  },
}

export const metadataPortofolioPage = {
  ...baseMetadata,
  title: 'Diko | Portofolio',
  metadataBase: new URL('https://cocome.vercel.app/portofolio'),
  description:
    'These are some of the applications that I have developed while studying and working',
  openGraph: {
    ...baseMetadata.openGraph,
    url: 'https://cocome.vercel.app/portofolio',
    title: 'Diko | Portofolio',
    description:
      'These are some of the applications that I have developed while studying and working',
  },
}

export const metadataAssistantPage = {
  ...baseMetadata,
  title: 'Diko | Assistant',
  metadataBase: new URL('https://cocome.vercel.app/assistant'),
  description:
    'This is a tool that I often use when developing applications from the Frontend side',
  openGraph: {
    ...baseMetadata.openGraph,
    url: 'https://cocome.vercel.app/assistant',
    title: 'Diko | Assistant',
    description:
      'This is a tool that I often use when developing applications from the Frontend side',
  },
}

export const metadataMainPage = {
  ...baseMetadata,
  title: 'Diko | Profile',
  metadataBase: new URL('https://cocome.vercel.app'),
  description: 'Here is a little brief information about me',
  openGraph: {
    ...baseMetadata.openGraph,
    url: 'https://cocome.vercel.app',
    title: 'Diko | Profile',
    description: 'Here is a little brief information about me',
  },
}
