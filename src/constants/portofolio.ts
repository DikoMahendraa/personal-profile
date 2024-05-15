export const portofolio = {
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
      images: '/portofolio/personal/financial.webp',
      name: 'Financial Planner',
      description:
        'Determine the technology to be used, apply atomic design pattern as a folder structure. apply clean code and reusable components. integration with firebase.',
      available: true,
      role: 'Frontend Developer',
      tech: 'NextJs, Typescript, Firebase, TailwindCSS',
      link: 'https://financial-planner-ck.vercel.app/login',
    },
  ],
  company: [
    {
      images: '/portofolio/company/vtr.webp',
      name: 'VTR',
      description:
        'Help clean up messy code to become reusable and refactor, fix bugs in Frontend code. continue to help mentoring QA for automation using cypress. implement unit testing using Jest, learn how to deploy applications to production, learn how to register branches to AWS amplify, continue to learn sharing sessions every month with Frontend friends and much more.',
      role: 'Frontend Engineer',
      tech: 'NextJs, Typescript, i18n, Jotai, Zod, React Hook Form, React Query, TailwindCSS, Jest, Cypress',
      link: 'https://www.vtrconnect.com/welcome',
      available: true,
      primary_desc: ` <div>
      <p>The application connects tenants, landlords, and professionals in the property rental process. It features several main functions:</p>
      <ul><br />
          <li><strong>Recons:</strong> This likely refers to a function related to "reconciliation" or organizing financial or transactional information for the parties involved.</li> <br />
          <li><strong>Connect:</strong> This function facilitates the connection and interaction between tenants, landlords, and professionals involved in property rental.</li><br />
          <li><strong>Manager (Landlord, Tenant, Professional):</strong> This feature serves as a management tool, enabling landlords, tenants, and professionals to oversee various aspects of the rental process.</li><br />
          <li><strong>Profile:</strong> This section allows users to create and manage their personal profiles within the application.</li><br />
      </ul>
      <p>Each of these functions plays a crucial role in streamlining and enhancing the property rental experience by fostering communication, organization, and efficient management.</p>
  </div>`,
    },
    {
      images: '/portofolio/company/agree.webp',
      name: 'Agreeculture.id',
      role: 'Frontend Engineer',
      description:
        'Fixed bugs in the Frontend code, added some new features such as Ask an Expert, Agreepedia, and also the Discussion Forum. I also participated in the migration process for responsive design (mobile, tablet, & desktop). nerapin clean code, and many more.',
      tech: 'NextJs, i18n, TailwindCSS, styled-component, redux, react hooks form.',
      available: true,
      link: 'https://agreeculture.id/',
    },
    {
      images: '/portofolio/company/nabati.webp',
      name: 'Dashboard Zeus Hermes',
      description:
        'Maintenance of Zeus dashboard and also Hermes for product management, add some CRUD features in the dashboard. integration with Rest API. and add translation feature (i18n) in the dashboard.',
      role: 'Frontend Developer',
      tech: 'NextJs, Typescript, i18n, Micro Frontend, AntDesign, Jira, React Storybook, Styled Component.',
      available: false,
      link: '',
    },
    {
      images: '/portofolio/company/dana.webp',
      name: 'Dana Syariah',
      description:
        'Help develop from 0 for web applications starting from the landing page & also the dsahboard, installation of several modules / packages needed, implementation of storybooks for component maintenance to make the development process much faster, installation of language features (i18n), continue to help develop existing applications using React Native, add some features and also refactoring code and folder structure that is messy.',
      role: 'Frontend Web & Mobile React Native',
      tech: 'React Native, NextJs, Typescript, i18n, React Storybook, AntDesign, Redux.',
      available: true,
      link: 'https://borrower.danasyariah.id/auth/login',
    },
    {
      images: '/portofolio/company/mirocks.webp',
      name: 'Mirocks Insurance',
      description:
        'I actually learned more here, starting from communicating and presenting in English. learning new technologies such as GraphQL and Typescript, learning about clean code. and fixing some bugs in the interface, adding some new features such as uploading documents and form validation.',
      role: 'Internship Frontend Developer',
      tech: 'GraphQL, typescript, Nextjs, AntDesign Pro, i18n, Redux.',
      link: '',
      available: false,
    },
    {
      images: '/portofolio/company/hobids.webp',
      name: 'Hobids',
      description:
        'Create a web application from 0, discuss with BE, PM and also the client regarding the project to be worked on, realize the UI figma into the code. determine the folder architecture in FE, and present to the client regarding the appearance and prototype that has been done.',
      role: 'Frontend Engineer',
      tech: 'ReactJs, Nextjs, Javascript, TailwindCSS, Ant Design, Redux.',
      link: '',
      available: false,
    },
    {
      images: '/portofolio/company/zurich.webp',
      name: 'Dashboard Zurich Insurance',
      description:
        'Create dashboard management from 0, add some analytics features, signed docs, activity logs, user management, and also all data (pending, invalid, rejected and verified), work with the team. then apply state management using vuex.',
      role: 'Junior Frontend Developer',
      tech: 'VueJs, NuxtJs, Vuetify, Vuex.',
      link: '',
      available: false,
    },
    {
      images: '/portofolio/company/qatros.webp',
      name: 'Landing Page Qatros',
      role: 'Junior Frontend Developer',
      description:
        'learning vuejs for 1 week, then direct implementation by developing landing pages (with a new UI) for internal companies, learning to work with teams, discussing new technologies, and conducting sharing sessions in the office.',
      tech: 'VueJs, Bootstrap',
      link: 'https://qatros.com/',
      available: true,
    },
    {
      images: '/portofolio/company/liveness.webp',
      name: 'Liveness Detection',
      role: 'Junior Frontend Developer',
      description:
        'Create a landing page for the livenesss detection application from 0, make it responsive design for desktop, tablet, and mobile. implement 3D assets for gesture and expression using ThreeJs, and package integration for liveness detection.',
      tech: 'Bootstrap, NuxtJs, ThreeJs, Blender, Liveness Module',
      link: '',
      available: false,
    },
  ],
}

export const listFilterPortofolio = [
  {
    name: 'React Js',
    value: 'react',
    icons:
      'https://static-00.iconduck.com/assets.00/react-icon-512x456-2ynx529a.png',
  },
  {
    name: 'React Native',
    value: 'react-native',
    icons:
      'https://static-00.iconduck.com/assets.00/react-icon-512x456-2ynx529a.png',
  },
  {
    name: 'Next Js',
    value: 'next',
    icons:
      'https://static-00.iconduck.com/assets.00/nextjs-icon-512x512-y563b8iq.png',
  },
  {
    name: 'Vue Js',
    value: 'vue',
    icons:
      'https://static-00.iconduck.com/assets.00/vue-icon-512x442-q8uxz5az.png',
  },
  {
    name: 'Nuxt Js',
    value: 'nuxt',
    icons:
      'https://static-00.iconduck.com/assets.00/nuxt-icon-icon-512x380-dm4zv5l3.png',
  },
] as const
