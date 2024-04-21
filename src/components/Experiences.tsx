import React, { memo, useCallback } from 'react'
import CardExperience from './CardExperience'

const experiences = {
  title_experience: 'Experiences',
  company: [
    {
      name: 'Virtual Spirit Sdn Bhd',
      position: 'Frontend Developer',
      time: 'April 2023 - presently',
      country: 'Slangor - Malaysia',
      techonology:
        'Git, NextJS, Typescript, (Jest, RTL, Cypress), i18n, React Query, React Hooks Form, Jotai, Zod, TailwindCSS.',
      title_tech_used: 'Technology & Tools used:',
      description: [
        `Implemented responsive design using Tailwind CSS, ensuring optimal viewing across desktop, tablet, and mobile devices.`,
        `Introduced new features to benefit landlords, tenants, and professional users.`,
        `Wrote comprehensive unit tests for each component, utility, and page, guaranteeing code stability.`,
        `Adopted clean coding practices and upgraded project dependencies to their latest versions.`,
        `Established a well-organized folder structure for improved project maintainability.`,
        `Developed interactive component stories using Storybook for efficient UI development.`,
        `Collaborated with front-end (FE), back-end (BE), Quality Assurance (QA), and Product Management (PM) teams for seamless project execution.`,
        `Participated in the deployment process, including code promotion, branch registration with AWS Amplify, and environment variable management within AWS.`,
      ],
    },
    {
      name: 'PT. Telkom Indonesia',
      position: 'Frontend Engineer',
      time: 'Jan 2022 - Jun 2023',
      techonology:
        'Git, Jira, NextJs, (Jest, RTL), i18n, React Hooks Form, Redux, TailwindCSS.',
      title_tech_used: 'Technology & Tools used:',
      country: 'Jakarta Selatan - Indonesia',
      description: [
        `Resolved various bugs on the Agree website, improving appearance and integration processes.`,
        `Implemented pixel-perfect responsive web design for desktop, tablet, and mobile, ensuring seamless user experience across devices and exceeding design fidelity expectations (99% match with Figma).`,
        `Collaborated effectively with the UI/UX team to achieve a desired aesthetic while considering development feasibility.`,
        `Contributed to the development of new features for Agreepedia, Ask Experts, and Discussion Forums, expanding the platform's functionality.`,
        `Championed clean code practices, minimizing external dependencies and crafting maintainable solutions.`,
        `Established a comprehensive unit testing suite (coverage > 85%) for components, utilities, and pages, ensuring code stability and passing Sentry's quality checks.`,
        `Actively participated in the agile development process, encompassing retrospection, sprint planning, development, code reviews, and releases.`,
        `Implemented multilingual capabilities for English and Indonesian audiences, broadening the platform's reach.`,
      ],
    },
    {
      name: 'PT. Kaldu Sari Nabati',
      position: 'Frontend Engineer',
      techonology:
        'Git, NextJS, Typescript, i18n, React Query, React Hooks Form',
      title_tech_used: 'Technology & Tools used:',
      time: 'May 2022 - Sept 2022',
      country: 'Bandung, Indonesia',
      description: [
        `Developed and customized features within the internal product management dashboard, empowering PMs with efficient workflows.`,
        `Streamlined the user experience by tailoring features based on specific user roles.`,
        `Presented development progress and new features to clients, effectively communicating technical details and functionalities.`,
        `Implemented a multi-step registration flow, including email and mobile phone number verification, enhancing user security and data accuracy.`,
        `Seamlessly integrated the application with backend endpoints provided by backend developers, ensuring smooth data exchange.`,
        `Collaborated effectively with front-end (FE), back-end (BE), and Product Management (PM) teams to deliver successful projects.`,
      ],
    },
    {
      name: 'Dana Syariah',
      position: 'Freelance Frontend Web & Mobile React Native',
      techonology:
        'Git, NextJS, Typescript, i18n, React Query, React Hooks Form',
      title_tech_used: 'Technology & Tools used:',
      time: 'Jan 2022 - May 2022',
      country: 'Bandung, Indonesia',
      description: [
        `Led the development of a web-based application from scratch, encompassing lender and borrower dashboards.`,
        `Defined the application architecture and selected appropriate libraries, demonstrating strong technical judgment.`,
        `Developed a mobile application using React Native, incorporating language-specific features and complex logic for lender profit simulation.`,
        `Presented development progress and features to clients, fostering clear communication and client buy-in.`,
        `Integrated the application with back-end endpoints, ensuring seamless data flow.`,
        `Collaborated effectively with front-end, back-end, and Product Management teams for successful project delivery.`,
      ],
    },
  ],
}

const Experiences = () => {
  const title = useCallback(
    (index: number) => (index === 0 ? experiences.title_experience : ''),
    []
  )

  return (
    <div id="experience" className="border-t border-gray-50 mt-8 pt-4">
      {experiences.company.map((item, index) => (
        <CardExperience
          key={item.name}
          location={item.country}
          time={item.time}
          company={item.name}
          position={item.position}
          techTitle={item.title_tech_used}
          techUsed={item.techonology}
          title={title(index)}
          list={item.description}
        />
      ))}
    </div>
  )
}

export default memo(Experiences)
