import React from 'react'
import CardExperience from './CardExperience'

export default function Experiences() {
  return (
    <div id="experience">
      <CardExperience
        location="Slangor - Malaysia"
        endDate="presently"
        startDate="April 2023"
        company="Virtual Spirit Sdn Bhd"
        position="Frontend Developer"
        title="Experiences"
        list={[
          'Revamp old UI to new UI',
          'Implement responsive design for desktop, tablet and mobile using tailwindCSS',
          'Performed unit test for each component, utils and page',
          'Added some new features for landlord, tenant, and professional roles',
          'Implemented clean code, adjusted packages modules to the latest version, implemented e2e test using cypress, made folder architecture more readable, implemented storybook for each component, and participated in the process of raising code to production, branch registration to AWS amplify, and adding environment variables in AWS',
          'worked with the team, from FE, BE QA and also PM',
        ]}
      />
      <CardExperience
        location="Jakarta Selatan - Indonesia"
        company="PT. Telkom Indonesia"
        position="Frontend Engineer"
        startDate="Jan 2022"
        endDate="Jun 2023"
        list={[
          'Fixed several bugs on the agree website, from the appearance to the integratino process',
          'implement responsive web design for desktop., tablet, and mobile display with perfect pixel (accuracy and similiarity with design / UI on figma 99% )',
          'Negotiate with UI/UX team for a look that is difficult to develop by Frontend Team',
          'Contributed to the development of new features for agreepedia, ask experts and discussion forums',
          'The development process uses agile methods, which include retro, sprint planning, development, review, and release',
          'Implemented language change features for English and indonesia',
          'Minimize the use of modules or packages that are needed while they can still be made or modified by yourself',
          'Create unit tests on component, utilities, and pages, with coverage above 85% to pass the code quality check on sentry',
          'Apply clean code to all code created',
          'Work with teams, from FE, BE, QA, UI/UX, and PM',
        ]}
      />
      <CardExperience
        location="Bandung, Indonesia"
        company="PT. Kaldu Sari Nabati"
        position="Frontend Engineer"
        startDate="May 2022"
        endDate="Sept 2022"
        list={[
          'Added several features to the internal dashboard for product management, as well as adjusting some of the available features according to their respective roles.',
          'Participated in meetings with clients and presented related progress and features that have been developed.',
          'Added the registration feature into several steps, namely registering with email and cellphone number and verifying the data of the cellphone number and email.',
          'Integrate with endpoints that have been provided by the Backend.',
          'Worked with teams, from FE, BE and PM.',
        ]}
      />
    </div>
  )
}
