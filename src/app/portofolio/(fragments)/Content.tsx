'use client'

import CardPortofolio from '@/components/CardPortofolio'
import React, { memo, useCallback, useMemo, useState } from 'react'

import { motion } from 'framer-motion'

const portofolio = {
  tab: ['all', 'company', 'personal'],
  alert:
    'Warning: Some projects may no longer be available due to several factors (missing documentation, privacy issues, project no longer running).',
  label_role: 'position',
  label_description: 'What did you do?',
  label_tech_used: 'What are the technologies used?',
  personal: [
    {
      images: '/portofolio/personal/burgerapp.png',
      name: 'Burger City',
      description:
        'Slicing UI using React Native, installing and running the React Native CLI application, running RN projects on real devices via usb cable and Wifi network. reusable and refactoring code.',
      available: false,
      role: 'React Native Developer',
      tech: 'React Native',
      link: '',
    },
    {
      images: '/portofolio/personal/tartile.png',
      name: 'Tartil Me',
      description:
        'Initializing the project using NuxtJs, slicing pages and components, implementing clean code. adding some features for searching surahs, qori etc. integrating with data created by the backend.',
      available: false,
      role: 'Frontend Developer',
      tech: 'NuxtJs, Bootstrap',
      link: '',
    },
    {
      images: '/portofolio/personal/doctor.png',
      name: 'My Doctor',
      description:
        'Followed the course from 0, starting from RN project setup, slicing components. using atomic design pattern, integrating with firebase for authentication and for chat features.',
      available: false,
      role: 'React Native Developer',
      tech: 'React Native, Firebase',
      link: '',
    },
    {
      images: '/portofolio/personal/financial.png',
      name: 'Financial Planner',
      description:
        'Determine the technology to be used, apply atomic design pattern as a folder structure. apply clean code and reusable components. integration with firebase.',
      available: true,
      role: 'Frontend Developer',
      tech: 'NextJs, Typescript, Firebase, TailwindCSS',
      link: 'https://financial-planner-ck.vercel.app/login',
    },
    {
      images: '/portofolio/personal/taskio.png',
      name: 'Task IO',
      description:
        'looked for design inspiration on dribble, made modifications and added some new UI using figma tools, applied the atomic design pattern as a folder structure. implement clean code and reusable components. slicing UI and integration with Supabase',
      available: true,
      role: 'Frontend Developer',
      tech: 'NextJs, Typescript, Supabase, TailwindCSS, figma',
      link: 'https://task-io-seven.vercel.app/',
    },
  ],
  company: [
    {
      images: '/portofolio/company/vtr.png',
      name: 'VTR',
      description:
        'Help clean up messy code to become reusable and refactor, fix bugs in Frontend code. continue to help mentoring QA for automation using cypress. implement unit testing using Jest, learn how to deploy applications to production, learn how to register branches to AWS amplify, continue to learn sharing sessions every month with Frontend friends and much more.',
      role: 'Frontend Engineer',
      tech: 'NextJs, Typescript, i18n, Jotai, Zod, React Hook Form, React Query, TailwindCSS, Jest, Cypress',
      link: 'https://www.vtrconnect.com/welcome',
      available: true,
    },
    {
      images: '/portofolio/company/agree.png',
      name: 'Agreeculture.id',
      role: 'Frontend Engineer',
      description:
        'Fixed bugs in the Frontend code, added some new features such as Ask an Expert, Agreepedia, and also the Discussion Forum. I also participated in the migration process for responsive design (mobile, tablet, & desktop). nerapin clean code, and many more.',
      tech: 'NextJs, i18n, TailwindCSS, styled-component, redux, react hooks form.',
      available: true,
      link: 'https://agreeculture.id/',
    },
    {
      images: '/portofolio/company/nabati.png',
      name: 'Dashboard Zeus Hermes',
      description:
        'Maintenance of Zeus dashboard and also Hermes for product management, add some CRUD features in the dashboard. integration with Rest API. and add translation feature (i18n) in the dashboard.',
      role: 'Frontend Developer',
      tech: 'NextJs, Typescript, i18n, Micro Frontend, AntDesign, Jira, React Storybook, Styled Component.',
      available: false,
      link: '',
    },
    {
      images: '/portofolio/company/dana.png',
      name: 'Dana Syariah',
      description:
        'Help develop from 0 for web applications starting from the landing page & also the dsahboard, installation of several modules / packages needed, implementation of storybooks for component maintenance to make the development process much faster, installation of language features (i18n), continue to help develop existing applications using React Native, add some features and also refactoring code and folder structure that is messy.',
      role: 'Frontend Web & Mobile React Native',
      tech: 'React Native, NextJs, Typescript, i18n, React Storybook, AntDesign, Redux.',
      available: true,
      link: 'https://borrower.danasyariah.id/auth/login',
    },
    {
      images: '/portofolio/company/not-found.png',
      name: 'Mirocks Insurance',
      description:
        'I actually learned more here, starting from communicating and presenting in English. learning new technologies such as GraphQL and Typescript, learning about clean code. and fixing some bugs in the interface, adding some new features such as uploading documents and form validation.',
      role: 'Internship Frontend Developer',
      tech: 'GraphQL, typescript, Nextjs, AntDesign Pro, i18n, Redux.',
      link: '',
      available: false,
    },
    {
      images: '/portofolio/company/certie.png',
      name: 'Certie',
      description:
        'create a web application from 0, discuss with BE, PM and also the client regarding the project to be worked on, find a UI template that is suitable for the project. learn UI/UX and figma as design tools, create project architecture with atomic design patterns. then deploy the project to cpanel.',
      role: 'Frontend Engineer',
      tech: 'ReactJs, Nextjs, Javascript, TailwindCSS, Ant Design, Redux.',
      link: '',
      available: false,
    },
    {
      images: '/portofolio/company/hobids.png',
      name: 'Hobids',
      description:
        'Create a web application from 0, discuss with BE, PM and also the client regarding the project to be worked on, realize the UI figma into the code. determine the folder architecture in FE, and present to the client regarding the appearance and prototype that has been done.',
      role: 'Frontend Engineer',
      tech: 'ReactJs, Nextjs, Javascript, TailwindCSS, Ant Design, Redux.',
      link: '',
      available: false,
    },
    {
      images: '/portofolio/company/zurich.png',
      name: 'Dashboard Zurich Insurance',
      description:
        'Create dashboard management from 0, add some analytics features, signed docs, activity logs, user management, and also all data (pending, invalid, rejected and verified), work with the team. then apply state management using vuex.',
      role: 'Junior Frontend Developer',
      tech: 'VueJs, NuxtJs, Vuetify, Vuex.',
      link: '',
      available: false,
    },
    {
      images: '/portofolio/company/qatros.png',
      name: 'Landing Page Qatros',
      role: 'Junior Frontend Developer',
      description:
        'learning vuejs for 1 week, then direct implementation by developing landing pages (with a new UI) for internal companies, learning to work with teams, discussing new technologies, and conducting sharing sessions in the office.',
      tech: 'VueJs, Bootstrap',
      link: 'https://qatros.com/',
      available: true,
    },
    {
      images: '/portofolio/company/liveness.png',
      name: 'Liveness Detection',
      role: 'Junior Frontend Developer',
      description:
        'Create a landing page for the livenesss detection application from 0, make it responsive design for desktop, tablet, and mobile. implement 3D assets for gesture and expression using ThreeJs, and package integration for liveness detection.',
      tech: 'Bootstrap, NuxtJs, ThreeJs, Blender, Liveness Module',
      link: '',
      available: false,
    },
    {
      images: '/portofolio/company/woowa.png',
      name: 'Woowa Dashboard',
      role: 'Internship Frontend Developer',
      description:
        'Choosing a suitable template for Woowa Dashboard, modifying the template that has been purchased and then adjusting it to the display needs needed. learning to use the css framework and also state management redux. learning to work with a team and using git as a tool for collaboration.',
      tech: 'ReactJs, Dashboard Template, Redux, Bootstrap.',
      link: 'https://go.woo-wa.com/',
      available: true,
    },
  ],
}
const Content = () => {
  const [tab, setTab] = useState<string>(portofolio.tab[0])

  const listAllPortofolio = useMemo(
    () => portofolio.company.concat(portofolio.personal),
    []
  )

  const listPortofolio = useCallback(() => {
    switch (tab) {
      case portofolio.tab[1]:
        return portofolio.company
      case portofolio.tab[2]:
        return portofolio.personal
      default:
        return listAllPortofolio
    }
  }, [listAllPortofolio, tab])

  const switchTab = useCallback((item: string) => setTab(item), [])

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      <div className="sticky dark:bg-gray-800 w-full top-0 z-[4] py-6">
        <div role="tablist">
          {portofolio.tab.map((item: string) => {
            return (
              <button
                className={`relative mr-4 text-gray-400 capitalize font-semibold ${tab === item && 'dark:!text-white !text-gray-600'}`}
                key={String(Date + item)}
                onClick={() => switchTab(item)}
              >
                {item}

                {tab === item && (
                  <motion.span
                    className="absolute inset-x-0 h-[2px] bg-gradient-to-r -bottom-2 bg-blue-600 from-red-200 text-white dark:bg-unset"
                    layoutId="navbar-filter-portofolio"
                    transition={{
                      type: 'tween',
                      duration: 0.25,
                    }}
                  />
                )}
              </button>
            )
          })}
        </div>
      </div>

      <div className="my-6 gap-4 dark:text-gray-200 grid grid-cols-2 pb-16">
        {listPortofolio().map((item, index) => (
          <motion.div
            className="lg:col-span-1 col-span-2 border dark:border-gray-700 border-gray-200 rounded-lg dark:shadow-lg"
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: 20 }}
            transition={{ delay: Number(`0.${index}`), times: 0 }}
            key={item.name}
          >
            <CardPortofolio
              {...item}
              viewDetail={`/portofolio/${item.name.toLowerCase().replace(/ /g, '-')}`}
              available={item.available}
              labelDescription={portofolio.label_description}
              labelRole={portofolio.label_role}
              labelTech={portofolio.label_tech_used}
            />
          </motion.div>
        ))}
      </div>
    </motion.div>
  )
}

export default memo(Content)
