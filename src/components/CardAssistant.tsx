'use client'

import React from 'react'
import { motion } from 'framer-motion'
import Image from 'next/image'
import Link from 'next/link'

const frontendTools = [
  {
    name: 'Visual Studio Code',
    url: 'https://code.visualstudio.com/',
    icon: 'https://upload.wikimedia.org/wikipedia/commons/9/9a/Visual_Studio_Code_1.35_icon.svg',
  },
  {
    name: 'React',
    url: 'https://reactjs.org/',
    icon: 'https://upload.wikimedia.org/wikipedia/commons/a/a7/React-icon.svg',
  },
  {
    name: 'Bootstrap',
    url: 'https://getbootstrap.com/',
    icon: 'https://static-00.iconduck.com/assets.00/bootstrap-icon-512x512-f3dudm5z.png',
  },
  {
    name: 'Tailwind CSS',
    url: 'https://tailwindcss.com/',
    icon: 'https://static-00.iconduck.com/assets.00/tailwind-css-icon-2048x1229-u8dzt4uh.png',
  },
  {
    name: 'Sass',
    url: 'https://sass-lang.com/',
    icon: 'https://upload.wikimedia.org/wikipedia/commons/9/96/Sass_Logo_Color.svg',
  },
  {
    name: 'ESLint',
    url: 'https://eslint.org/',
    icon: 'https://static-00.iconduck.com/assets.00/eslint-icon-512x450-nnbg6ys3.png',
  },
  {
    name: 'Jest',
    url: 'https://jestjs.io/',
    icon: 'https://static-00.iconduck.com/assets.00/file-type-jest-icon-464x512-mzi7n10u.png',
  },
  {
    name: 'Cypress',
    url: 'https://www.cypress.io/',
    icon: 'https://static-00.iconduck.com/assets.00/cypress-icon-512x511-29zvfts6.png',
  },
  {
    name: 'TypeScript',
    url: 'https://www.typescriptlang.org/',
    icon: 'https://upload.wikimedia.org/wikipedia/commons/4/4c/Typescript_logo_2020.svg',
  },
  {
    name: 'Redux',
    url: 'https://redux.js.org/',
    icon: 'https://upload.wikimedia.org/wikipedia/commons/4/49/Redux.png',
  },
  {
    name: 'GraphQL',
    url: 'https://graphql.org/',
    icon: 'https://upload.wikimedia.org/wikipedia/commons/1/17/GraphQL_Logo.svg',
  },
  {
    name: 'Apollo Client',
    url: 'https://www.apollographql.com/docs/react/',
    icon: 'https://upload.wikimedia.org/wikipedia/commons/1/17/GraphQL_Logo.svg',
  },
  {
    name: 'Ant Design',
    url: 'https://ant.design/',
    icon: 'https://static-00.iconduck.com/assets.00/ant-design-icon-512x512-xbdsnx83.png',
  },
  {
    name: 'Storybook',
    url: 'https://storybook.js.org/',
    icon: 'https://static-00.iconduck.com/assets.00/storybook-icon-icon-412x512-341bo8r1.png',
  },
  {
    name: 'Next.js',
    url: 'https://nextjs.org/',
    icon: 'https://static-00.iconduck.com/assets.00/nextjs-icon-512x512-y563b8iq.png',
  },
  {
    name: 'Styled Components',
    url: 'https://styled-components.com/',
    icon: 'https://upload.wikimedia.org/wikipedia/commons/a/a7/React-icon.svg',
  },
  {
    name: 'Chart.js',
    url: 'https://www.chartjs.org/',
    icon: 'https://www.chartjs.org/media/logo-title.svg',
  },
  {
    name: 'ChatGPT',
    url: 'https://openai.com/chatgpt',
    icon: 'https://static-00.iconduck.com/assets.00/openai-icon-505x512-pr6amibw.png',
  },
  {
    name: 'Gemini',
    url: 'https://gemini.google.com/',
    icon: 'https://static-00.iconduck.com/assets.00/stars-icon-511x512-siyrhal8.png',
  },
  {
    name: 'Postman',
    url: 'https://www.postman.com/',
    icon: 'https://static-00.iconduck.com/assets.00/postman-icon-497x512-beb7sy75.png',
  },
  {
    name: 'Figma',
    url: 'https://www.figma.com/',
    icon: 'https://upload.wikimedia.org/wikipedia/commons/3/33/Figma-logo.svg',
  },
  {
    name: 'Twitter',
    url: 'https://twitter.com/',
    icon: 'https://static-00.iconduck.com/assets.00/twitter-icon-512x512-7o66iwws.png',
  },
  {
    name: 'Husky',
    url: 'https://typicode.github.io/husky/',
    icon: 'https://static-00.iconduck.com/assets.00/husky-icon-487x512-gj3nh7dq.png',
  },
  {
    name: 'PNG to WebP',
    url: 'https://pixelied.com/convert/png-converter/png-to-webp',
    icon: 'https://static-00.iconduck.com/assets.00/png-icon-376x512-bin8ip63.png',
  },
  {
    name: 'Vercel',
    url: 'https://vercel.com/',
    icon: 'https://static-00.iconduck.com/assets.00/brand-vercel-icon-512x436-8wo8pcih.png',
  },
  {
    name: 'GitHub',
    url: 'https://github.com/',
    icon: 'https://upload.wikimedia.org/wikipedia/commons/9/91/Octicons-mark-github.svg',
  },
  {
    name: 'GitLab',
    url: 'https://about.gitlab.com/',
    icon: 'https://static-00.iconduck.com/assets.00/gitlab-icon-512x471-wfbmkpzi.png',
  },
  {
    name: 'LinkedIn',
    url: 'https://www.linkedin.com/',
    icon: 'https://upload.wikimedia.org/wikipedia/commons/c/ca/LinkedIn_logo_initials.png',
  },
  {
    name: 'IconDuck',
    url: 'https://iconduck.com/',
    icon: 'https://static-00.iconduck.com/assets.00/duck-emoji-458x512-5guzkgzm.png',
  },
  {
    name: 'Prettier',
    url: 'https://prettier.io/',
    icon: 'https://static-00.iconduck.com/assets.00/file-type-light-prettier-icon-512x512-l2np06bn.png',
  },
  {
    name: 'Jira',
    url: 'https://www.atlassian.com/software/jira',
    icon: 'https://static-00.iconduck.com/assets.00/jira-icon-512x512-kkop6eik.png',
  },
  {
    name: 'Trello',
    url: 'https://trello.com/',
    icon: 'https://static-00.iconduck.com/assets.00/trello-icon-512x512-tvmznu7l.png',
  },
]

export default function CardAssistant() {
  return (
    <div className="grid grid-cols-3 gap-4 mt-4">
      {frontendTools.map((item, index) => (
        <motion.div
          key={index}
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: 20 }}
          transition={{ delay: index * 0.1 }}
          className="lg:col-span-1 col-span-3 border-primary-dark-soft/50 dark:border-cyan-300/30 border dark:bg-primary-dark-soft px-4 pt-4 rounded-md dark:hover:bg-cyan-300/50 transition-colors"
        >
          <Link href={item.url} target="_blank">
            <Image
              alt={item.name}
              src={item.icon}
              priority
              width={50}
              height={50}
              quality={50}
            />
            <p className="font-semibold dark:text-cyan-300 my-2">{item.name}</p>
          </Link>
        </motion.div>
      ))}
    </div>
  )
}
