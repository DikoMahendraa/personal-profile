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
      layout_type: 'desktop',
      type: 'personal',
      assets: 2,
      images: '/portofolio/personal/form-builder.png',
      name: 'Form Generator',
      todo: [
        'Determining Ideas related to creating web builder tools',
        'Using AI assistance to facilitate the development process starting from concept ideas and also code.',
        'Creating several features in each field, such as text type, email, etc.',
        'Finding UI inspiration',
        'Deploying and publishing applications to vercel',
        'Ensuring the display remains responsive and proper on all types of tabs',
      ],
      available: true,
      role: 'Frontend Developer',
      tech: [
        'NextJs',
        'Typescript',
        'TailwindCSS',
        'Zod',
        'Yup',
        'React Hooks Form',
      ],
      link: 'https://helper-form-generator.vercel.app',
      about:
        '<p>The purpose of creating this application is to facilitate the process of creating a form component that is integrated with several types of validation that are already very familiar to use, such as zod and yup. The hope is that with this application, it will greatly facilitate and accelerate the development process that requires a form page with various types of fields and validation.</p>',
    },
    {
      layout_type: 'desktop',
      type: 'personal',
      assets: 3,
      images: '/portofolio/personal/staycations.png',
      name: 'Staycations',
      todo: [
        'Implemented Zod and React Hooks Form.',
        'Created validation forms.',
        'Sliced UI using Shadcn/UI and Tailwind CSS.',
        'Implemented linter, pre-commit hooks, clean code, and responsive design',
      ],
      available: true,
      role: 'Frontend Developer',
      tech: ['NextJs', 'Typescript', 'Shadcn/UI', 'Zod', 'React Hooks Form'],
      link: 'https://cocome-staycation.vercel.app/',
      about:
        '<p>This is a practice application that I use to hone my CSS and JavaScript skills, utilizing NextJS and integrating React Hook Form for input form validation in hotel bookings. I focused on implementing clean code and reusable components, using NextJS to create responsive displays for both web and desktop.</p>',
    },
    {
      layout_type: 'desktop',
      type: 'personal',
      assets: 5,
      images: '/portofolio/personal/burgerapp.png',
      name: 'Burger City',
      todo: [
        'Studied how React Native works.',
        'Learned the differences between ReactJS and React Native, from setup to UI slicing.',
        'Learned to implement clean code and refactor code.',
        'Discussed with mentors regarding the usage of necessary packages and modules.',
        'Ran React Native application using Wi-Fi and real device.',
      ],
      available: false,
      role: 'React Native Developer',
      tech: ['React Native'],
      link: '',
      about: `<p>is an application developed for learning and practicing React Native mobile app development. <br /> The goal of this application is to allow users to order food online without having to visit the restaurant. It features various functionalities such as a food menu, saving favorite items, and the checkout process. This application solely focuses on the UI and does not include integration.</p>`,
    },
    {
      layout_type: 'desktop',
      type: 'personal',
      assets: 3,
      images: '/portofolio/personal/doctor.png',
      name: 'My Doctor',
      todo: [
        'Participated in online training from start to finish.',
        'Initialized project using React Native.',
        'Installed necessary dependencies such as Firebase and Redux.',
        'Learned to utilize Firebase as a storage solution.',
        'Utilized Firebase authentication feature for login and registration.',
        'Implemented clean code and refactored code.',
        'Utilized the atomic design pattern for project architecture.',
      ],
      available: false,
      role: 'React Native Developer',
      tech: ['React Native', 'Firebase'],
      link: '',
      about: `<p>
      is a chat application that acts as a bridge between patients and doctors, allowing for online consultation and medication ordering. <br /> It utilizes Firebase authentication and Firebase Firestore as a storage location for messages.
      </p>`,
    },
    {
      layout_type: 'desktop',
      type: 'personal',
      assets: 5,
      images: '/portofolio/personal/financial.png',
      name: 'Financial Planner',
      todo: [
        'Initialized project using Next.js.',
        'Utilized atomic design pattern in Next.js app.',
        'Integrated with Firebase for storage and authentication for login and registration.',
        'Resolved bugs in display and non-functioning features.',
        'Explored UI design ideas for an attractive appearance.',
      ],
      available: true,
      role: 'Frontend Developer',
      tech: ['NextJs', 'Typescript', 'Firebase', 'TailwindCSS'],
      link: 'https://financial-planner-ck.vercel.app/login',
      about: `<p> is a web application that provides convenient features for managing expenses and income. It also includes a feature for calculating income to determine fund allocation according to needs such as emergency funds, savings, and spending money.</p>`,
    },
  ],
  company: [
    {
      layout_type: 'desktop',
      type: 'company',
      assets: 3,
      images: '/portofolio/company/main-website.png',
      name: 'BRI Main Website',
      todo: [
        'Ensured page performance through code optimization',
        'Implemented clean and maintainable code practices',
        'Focused on creating reusable and type-safe components',
        'Leveraged the powerful features of Next.js, including server and client components, to enhance functionality and scalability',
        'Performed deployment using Jenkins, Kubernets',
      ],
      role: 'Frontend Engineer',
      tech: [
        'NextJs',
        'Typescript',
        'TailwindCSS',
        'Framer motion',
        'i18n',
        'Jenkins',
        'Kubernetes',
        'Docker',
      ],
      link: 'https://bri-corpsite.dev-kjt.id/web/kartukredit',
      available: true,
      about: `This landing page is designed to be highly dynamic, with all its content managed within Drupal, a content management system. This setup allows the owner to easily customize the layout, text, and images on the landing page as desired, without needing to rewrite any code each time they want to update the content. This is an incredibly innovative concept as it enables companies to save costs by simplifying content management. My role was to ensure the page's performance by optimizing clean, reusable, and type-safe code. Additionally, I leveraged the powerful features of Next.js, including server and client components, to maximize efficiency and scalability.`,
    },
    {
      layout_type: 'desktop',
      type: 'company',
      assets: 4,
      images: '/portofolio/company/kartu-kredit.png',
      name: 'BRI Kartu Kredit',
      todo: [
        'Ensured page performance through code optimization',
        'Implemented clean and maintainable code practices',
        'Focused on creating reusable and type-safe components',
        'Leveraged the powerful features of Next.js, including server and client components, to enhance functionality and scalability',
        'Performed deployment using Jenkins, Kubernets',
      ],
      role: 'Frontend Engineer',
      tech: [
        'NextJs',
        'Typescript',
        'TailwindCSS',
        'Framer motion',
        'i18n',
        'Jenkins',
        'Kubernetes',
        'Docker',
      ],
      link: 'https://bri-corpsite.dev-kjt.id/web/kartukredit',
      available: true,
      about: `This landing page is designed to be highly dynamic, with all its content managed within Drupal, a content management system. This setup allows the owner to easily customize the layout, text, and images on the landing page as desired, without needing to rewrite any code each time they want to update the content. This is an incredibly innovative concept as it enables companies to save costs by simplifying content management. My role was to ensure the page's performance by optimizing clean, reusable, and type-safe code. Additionally, I leveraged the powerful features of Next.js, including server and client components, to maximize efficiency and scalability.`,
    },
    {
      layout_type: 'desktop',
      type: 'company',
      assets: 5,
      images: '/portofolio/company/vtr.png',
      name: 'VTR',
      todo: experiences.company[1].description,
      role: 'Frontend Engineer',
      tech: [
        'NextJs',
        'Typescript',
        'i18n',
        'Jotai',
        'Zod',
        'React Hook Form',
        'React Query',
        'TailwindCSS',
        'Jest',
        'Cypress',
      ],
      link: 'https://www.vtrconnect.com/welcome',
      available: true,
      about: `<div>
      <p>The application connects tenants, landlords, and professionals in the property rental process. It features several main functions:</p>
      <ul><br />
          <strong>Recons:</strong> This likely refers to a function related to "reconciliation" or organizing financial or transactional information for the parties involved.< <br />
          <strong>Connect:</strong> This function facilitates the connection and interaction between tenants, landlords, and professionals involved in property rental.<<br />
          <strong>Manager (Landlord, Tenant, Professional):</strong> This feature serves as a management tool, enabling landlords, tenants, and professionals to oversee various aspects of the rental process.</li><br />
          <li><strong>Profile:</strong> This section allows users to create and manage their personal profiles within the application.</li><br />
      </ul>
      <p>Each of these functions plays a crucial role in streamlining and enhancing the property rental experience by fostering communication, organization, and efficient management.</p>
  </div>`,
    },
    {
      layout_type: 'desktop',
      type: 'company',
      assets: 2,
      images: '/portofolio/company/agree.png',
      name: 'Agreeculture.id',
      role: 'Frontend Engineer',
      todo: experiences.company[1].description,
      tech: [
        'NextJs',
        'i18n',
        'TailwindCSS',
        'styled-component',
        'redux',
        'react hooks form',
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
      assets: 5,
      images: '/portofolio/company/nabati.png',
      name: 'PT Kaldu Sari Nabati Indonesia',
      todo: experiences.company[2].description,
      role: 'Frontend Developer',
      tech: [
        'NextJs',
        'React Native',
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
      about: `<p>eDOT offers integrated business solutions for various industries, including:</p>

      <br />
      <ul>
      <li><strong>ERP (Enterprise Resource Planning)</strong>: Helps manage inventory, automate tasks, and gain real-time insights for successful business growth. (<a href="#">Learn more about ERP</a>)</li>
      <br />
      <li><strong>E-Commerce</strong>: Enables businesses to sell online through mobile and desktop web applications.</li>
      <br />
      <li><strong>Logistics</strong>: Provides efficient logistics services to ensure your products reach customers quickly and safely.</li>
      </ul>`,
    },
    {
      todo: experiences.company[3].description,
      layout_type: 'desktop',
      type: 'company',
      assets: 3,
      images: '/portofolio/company/dana.png',
      name: 'Dana Syariah',
      role: 'Frontend Web & Mobile React Native',
      tech: [
        'React Native',
        'NextJs',
        'Typescript',
        'i18n',
        'React Storybook',
        'AntDesign',
        'Redux.',
      ],
      available: true,
      link: 'https://borrower.danasyariah.id',
      about: `<p><strong>DanaSyariah.id</strong> provides services for funders to make their assets and funds productive according to Sharia principles and safe from the returns of buying and selling property activities. <br /><br /> The projects funded are those that have passed verification by the DanaSyariah.id team, with several conditions including having buyers or even purchasers already.</p>
      `,
    },
    {
      layout_type: 'desktop',
      type: 'company',
      assets: 9,
      images: '/portofolio/company/mirocks.png',
      name: 'Mirocks Insurance',
      todo: [
        'Learning GraphQL: Implemented responsive design using Tailwind CSS, ensuring optimal viewing across desktop, tablet, and mobile devices.',
        'GraphQL Integration: Introduced new features to benefit landlords, tenants, and professional users.',
        'User Activity Log Display: Wrote comprehensive unit tests for each component, utility, and page, guaranteeing code stability.',
        'English Communication: Adopted clean coding practices and upgraded project dependencies to their latest versions.',
        'Clean Code Practices: Established a well-organized folder structure for improved project maintainability.',
      ],
      role: 'Internship Frontend Developer',
      tech: [
        'GraphQL',
        'typescript',
        'Nextjs',
        'AntDesign Pro',
        'i18n',
        'Redux',
      ],
      link: '',
      available: false,
      about: `<p>InsVault Insurance is an innovative insurance app designed to help you efficiently manage your insurance needs. Developed by a dedicated individual, InsVault Insurance offers a range of intuitive and useful features to ensure your insurance requirements are met effectively.</p>
      <br />
      <p><strong>Key Features:</strong></p>
      <br />
      
      <p><strong>Balance:</strong> Easily monitor your insurance balance and transactions, so you always know your financial position regarding insurance.</p>
      <br />
      <p><strong>Referral:</strong> Earn extra benefits by inviting friends or family to use InsVault Insurance through our referral feature.</p>
      <br />
      <p><strong>Profile:</strong> Manage your personal information and insurance details effortlessly, all in one secure and organized place.</p>
      <br />
      
      <p>InsVault Insurance provides ease and convenience in managing your insurance, ensuring you get optimal protection without the hassle.</p>`,
    },
    {
      layout_type: 'desktop',
      type: 'company',
      assets: 6,
      images: '/portofolio/company/hobids.png',
      name: 'Hobids',
      todo: [
        'Discussing with the client to determine the product/application flow to be developed.',
        'Determining suitable technology according to the product type, and here I use Next.js and TypeScript because the application requires SEO.',
        'Discussing with the design team, as well as the backend team regarding UI and API requirements.',
        'Initializing the project using Next.js.',
        'Installing dependencies and necessary packages such as Tailwind, Redux state management, etc.',
        'Implementing clean code, refactoring, and bug fixing during development.',
      ],
      role: 'Frontend Engineer',
      tech: [
        'ReactJs',
        'Nextjs',
        'Javascript',
        'TailwindCSS',
        'Ant Design',
        'Redux',
        'PWA',
      ],
      link: '',
      available: false,
      about: `<p><strong>Hobids: Your Unique E-commerce Experience</strong></p> <br />

      <p><strong>Hobids</strong> is an innovative e-commerce application that offers a unique twist with its added feature of auctions. Built on a <strong>Progressive Web App (PWA)</strong> and web view, <strong>Hobids</strong> combines the convenience of traditional e-commerce platforms with the excitement of auctions.</p>
      <br />
      
      <p>Unfortunately, the development of this promising application has been postponed due to client requests. However, <strong>Hobids</strong> remains poised to revolutionize the online shopping experience once development resumes.</p>
      `,
    },
    {
      layout_type: 'desktop',
      type: 'company',
      assets: 5,
      images: '/portofolio/company/zurich.png',
      name: 'Dashboard Zurich Insurance',
      todo: [
        'Studied Vue.js and Nuxt.js frameworks intensively for 7 days before starting development.',
        'Initialized the project using Nuxt.js.',
        'Installed necessary packages.',
        'Integrated with API and Vuex state management.',
        'Conducted meetings with the QA, PM, BE, and UI/UX teams.',
        'Implemented analytics feature, handling data for status such as pending, rejected, verified, invalid, signed documents, and user management.',
      ],
      role: 'Junior Frontend Developer',
      tech: ['VueJs', 'NuxtJs', 'Vuetify', 'Vuex'],
      link: '',
      available: false,
      about: `<p>The Zurich Dashboard is an application for monitoring user-related insurance registration/loan processes. It includes several features such as analytics, checking the status of user loan applications (pending, invalid, rejected, or verified), monitoring activity logs such as user logins, etc., and user management for granting access to roles ranging from sysadmin, operational staff, manager, product manager, and several other roles.</p>
      <br />
      <p><strong>Key Features:</strong></p>
      <br />
      <ul class="list-disc">
        <li class="mb-2">Analytics</li>
        <li class="mb-2">Signed Documents</li>
        <li class="mb-2">Acitvity Log</li>
        <li>User Management</li>
      </ul>
      `,
    },
    {
      type: 'company',
      layout_type: 'desktop',
      assets: 6,
      images: '/portofolio/company/qatros.png',
      name: 'Landing Page Qatros',
      role: 'Junior Frontend Developer',
      todo: [
        'Studied Vue.js framework and Next.js intensively.',
        'Developed applications for clients such as Zurich Dashboard and Artaboga (Parent Dashboard), adding several CRUD features to the Artaboga dashboard.',
        'Conducted several Research and Development (R&D) sessions and produced products such as Auction and Liveness Detection.',
        'Held sharing sessions regarding the usage of React vs. React Native.',
        'Developed a new UI for internal landing page.',
      ],
      tech: ['VueJs', 'Bootstrap'],
      link: 'https://qatros.com/',
      available: true,
      about: `<p>Qatros is a technology startup offering a variety of service offerings for digital product needs (consultation, development, maintenance) and human resources needs (specific-house training, public training, bootcamp training). Currently, digital transformation is happening so massively, and changes have touched almost every sector of the industry. Qatros is ready to provide the best energy to solve various technology problems.</p>

      <br />

      <p>We build a culture of Technology From Rural People as an identity that we are proud of, and we are committed to providing products and services with the best quality. Where we live or where we come from is no longer a problem. It's all about working with a professional ethos, full of dedication, and a strong determination to keep learning forever.</p>`,
    },
    {
      layout_type: 'desktop',
      type: 'company',
      assets: 3,
      images: '/portofolio/company/liveness.png',
      name: 'Liveness Detection',
      role: 'Junior Frontend Developer',
      todo: [
        'Initialized the project using Nuxt.js.',
        'Integrated with a custom module to detect faces and expressions.',
        'Implemented UI designs from Figma into code.',
        'Implemented 3D assets for gestures using Three.js.',
      ],
      tech: ['Bootstrap', 'NuxtJs', 'ThreeJs', 'Blender', 'Liveness Module'],
      link: '',
      available: false,
      about: `Is an application used to validate based on gesture movements and facial expressions.`,
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
