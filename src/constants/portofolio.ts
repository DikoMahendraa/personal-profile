import { experiences } from './experiences'

export const portofolio = {
  tab: ['all', 'company', 'personal'],
  alert:
    'Warning: Some projects may no longer be available due to several factors (missing documentation, privacy issues, project no longer running).',
  label_role: 'position',
  label_description: 'What did you do?',
  label_tech_used: 'What are the technologies used?',
  personal: [
    {
      layout_type: 'mobile',
      type: 'personal',
      assets: [1, 2, 3, 4, 5, 6, 7, 8, 9],
      images: '/portofolio/personal/burgerapp.png',
      name: 'Burger City',
      todo: [
        'Slicing UI using React Native, installing and running the React Native CLI application, running RN projects on real devices via usb cable and Wifi network. reusable and refactoring code.',
      ],
      available: false,
      role: 'React Native Developer',
      tech: ['React Native'],
      link: '',
      about: `<div>
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
      layout_type: 'mobile',
      type: 'personal',
      assets: [1, 2, 3, 4, 5, 6, 7, 8, 9],
      images: '/portofolio/personal/doctor.png',
      name: 'My Doctor',
      todo: [
        'Followed the course from 0, starting from RN project setup, slicing components. using atomic design pattern, integrating with firebase for authentication and for chat features.',
      ],
      available: false,
      role: 'React Native Developer',
      tech: ['React Native', 'Firebase'],
      link: '',
      about: ` <div>
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
      layout_type: 'desktop',
      type: 'personal',
      assets: [1, 2, 3, 4, 5, 6, 7, 8],
      images: '/portofolio/personal/financial.webp',
      name: 'Financial Planner',
      todo: [
        'Determine the technology to be used, apply atomic design pattern as a folder structure. apply clean code and reusable components. integration with firebase.',
      ],
      available: true,
      role: 'Frontend Developer',
      tech: ['NextJs', 'Typescript', 'Firebase', 'TailwindCSS'],
      link: 'https://financial-planner-ck.vercel.app/login',
      about: ` <div>
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
  ],
  company: [
    {
      layout_type: 'desktop',
      type: 'company',
      assets: [1, 2, 3, 4, 5, 6, 7],
      images: '/portofolio/company/vtr.webp',
      name: 'VTR',
      todo: experiences.company[0].description,
      role: 'Frontend Engineer',
      tech: [
        'NextJs',
        'Typescript',
        'i18n',
        'Jotai',
        'Zod',
        'React',
        'Hook',
        'Form',
        'React',
        'Query',
        'TailwindCSS',
        'Jest',
        'Cypress',
      ],
      link: 'https://www.vtrconnect.com/welcome',
      available: true,
      about: `<div>
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
      layout_type: 'desktop',
      type: 'company',
      assets: [1, 2, 3, 4, 5, 6, 7, 8],
      images: '/portofolio/company/agree.webp',
      name: 'Agreeculture.id',
      role: 'Frontend Engineer',
      todo: experiences.company[1].description,
      tech: [
        'NextJs',
        'i18n',
        'TailwindCSS',
        'styled-component',
        'redux',
        'react',
        'hooks',
        'form',
      ],
      available: true,
      link: 'https://agreeculture.id/',
      about: `<div>
      <p>
      Agree is a part of Telkom Indonesia that has been involved in and contributed to the digitalization of Indonesian agriculture since 2019. We have collaborated with farmers, agribusiness companies, investors, educational institutions, and government agencies to build a digital ecosystem in the agricultural world. We are here as a solution that connects agricultural stakeholders, carrying the mission to develop the agricultural sector and bring high economic value.</p>

      <p class="mt-6 mb-4 font-semibold">Has several features:</p>
      <ul class="list-disc pl-10 space-y-2">
      <li class="pl-[10rem]">Articles</li>
      <li class="pl-[10rem]">Ask an Expert</li>
      <li class="pl-[10rem]">Cultivation Information</li>
      <li class="pl-[10rem]">Ask an Expert</li>
      <li class="pl-[10rem]">Discussion Forum</li>
    </ul>
  </div>`,
    },
    {
      layout_type: 'desktop',
      type: 'company',
      assets: [1],
      images: '/portofolio/company/nabati.webp',
      name: 'Dashboard Zeus Hermes',
      todo: experiences.company[2].description,
      role: 'Frontend Developer',
      tech: [
        'NextJs',
        'Typescript',
        'i18n',
        'Micro Frontend',
        'AntDesign',
        'Jira',
        'React Storybook',
        'Styled Component',
      ],
      available: false,
      link: '',
      about: ``,
    },
    {
      todo: experiences.company[3].description,
      layout_type: 'desktop',
      type: 'company',
      assets: [1, 2, 3, 4, 5, 6],
      images: '/portofolio/company/dana.webp',
      name: 'Dana Syariah',
      role: 'Frontend Web & Mobile React Native',
      tech: 'React Native, NextJs, Typescript, i18n, React Storybook, AntDesign, Redux.',
      available: true,
      link: 'https://borrower.danasyariah.id/auth/login',
      about: ``,
    },
    {
      layout_type: 'desktop',
      type: 'company',
      assets: [1, 2, 3, 4, 5, 6, 7, 8, 9],
      images: '/portofolio/company/mirocks.webp',
      name: 'Mirocks Insurance',
      todo: [''],
      role: 'Internship Frontend Developer',
      tech: [
        'GraphQL',
        'typescript',
        'Nextjs',
        'AntDesign',
        'Pro',
        'i18n',
        'Redux',
      ],
      link: '',
      available: false,
      about: ``,
    },
    {
      layout_type: 'desktop',
      type: 'company',
      assets: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11],
      images: '/portofolio/company/hobids.webp',
      name: 'Hobids',
      todo: [''],
      role: 'Frontend Engineer',
      tech: [
        'ReactJs',
        'Nextjs',
        'Javascript',
        'TailwindCSS',
        'Ant Design',
        'Redux',
      ],
      link: '',
      available: false,
      about: ``,
    },
    {
      layout_type: 'desktop',
      type: 'company',
      assets: [1, 2, 3, 4, 5],
      images: '/portofolio/company/zurich.webp',
      name: 'Dashboard Zurich Insurance',
      todo: [''],
      role: 'Junior Frontend Developer',
      tech: ['VueJs', 'NuxtJs', 'Vuetify', 'Vuex'],
      link: '',
      available: false,
      about: ``,
    },
    {
      type: 'company',
      layout_type: 'desktop',
      assets: [1, 2, 3, 4, 5, 6],
      images: '/portofolio/company/qatros.webp',
      name: 'Landing Page Qatros',
      role: 'Junior Frontend Developer',
      todo: [''],
      tech: ['VueJs, Bootstrap'],
      link: 'https://qatros.com/',
      available: true,
      about: ``,
    },
    {
      layout_type: 'desktop',
      type: 'company',
      assets: [1, 2, 3, 4, 5],
      images: '/portofolio/company/liveness.webp',
      name: 'Liveness Detection',
      role: 'Junior Frontend Developer',
      todo: [''],
      tech: ['Bootstrap', 'NuxtJs', 'ThreeJs', 'Blender', 'Liveness Module'],
      link: '',
      available: false,
      about: ``,
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
