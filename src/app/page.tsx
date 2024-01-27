import AboutMe from "@/components/AboutMe";
import Experiences from "@/components/Experiences";
import Header from "@/components/Header";
import LeftSide from "@/components/LeftSide";

export default function Home() {
  return (
    <main className="container mx-auto flex justify-center items-center h-screen mt-10">
     <section className="grid grid-cols-3 relative">
        <div className="col-span-1 px-6">
            <LeftSide/>
        </div>

        <div className="col-span-2 h-screen relative">
        <Header />
       <div className="overflow-y-scroll h-[75rem]">
          <AboutMe />
          
          <div id="experience" >
          <Experiences
            location="Slangor - Malaysia"
            endDate="presently"
            startDate="April 2023"
            company="Virtual Spirit Sdn Bhd"
            position="Frontend Developer"
            title="Experiences"
            list={[
            "Revamp old UI to new UI",
            "Implement responsive design for desktop, tablet and mobile using tailwindCSS",
            "Performed unit test for each component, utils and page",
            "Added some new features for landlord, tenant, and professional roles",
            "Implemented clean code, adjusted packages modules to the latest version, implemented e2e test using cypress, made folder architecture more readable, implemented storybook for each component, and participated in the process of raising code to production, branch registration to AWS amplify, and adding environment variables in AWS",
            "worked with the team, from FE, BE QA and also PM"
          ]} 
          /> 
          <Experiences
            location="Jakarta Selatan - Indonesia"
            company="PT. Telkom Indonesia"
            position="Frontend Engineer"
            startDate="Jan 2022"
            endDate="Jun 2023"
            list={[
            "Fixed several bugs on the agree website, from the appearance to the integratino process",
            "implement responsive web design for desktop., tablet, and mobile display with perfect pixel (accuracy and similiarity with design / UI on figma 99% )",
            "Negotiate with UI/UX team for a look that is difficult to develop by Frontend Team",
            "Contributed to the development of new features for agreepedia, ask experts and discussion forums",
            "The development process uses agile methods, which include retro, sprint planning, development, review, and release",
            "Implemented language change features for English and indonesia",
            "Minimize the use of modules or packages that are needed while they can still be made or modified by yourself",
            "Create unit tests on component, utilities, and pages, with coverage above 85% to pass the code quality check on sentry",
            "Apply clean code to all code created",
            "Work with teams, from FE, BE, QA, UI/UX, and PM"
          ]} /> 
          <Experiences
            location="Bandung, Indonesia" 
            company="PT. Kaldu Sari Nabati"
            position="Frontend Engineer"
            startDate="Jan 2022"
            endDate="Jun 2023"
            list={[
              "Added several features to the internal dashboard for product management, as well as adjusting some of the available features according to their respective roles.",
              "Participated in meetings with clients and presented related progress and features that have been developed.",
              "Added the registration feature into several steps, namely registering with email and cellphone number and verifying the data of the cellphone number and email.",
              "Integrate with endpoints that have been provided by the Backend.",
              "Worked with teams, from FE, BE and PM."
          ]} />
          </div>

          <div id="education">
            <p className="text-xl font-semibold text-gray-600  bg-green-300 pl-4 py-2 w-1/3">Educations</p>
            <div className="grid grid-cols-2 mt-4">
              <div>
                <p className="text-xl font-semibold">SMK Negeri 1 Rawajitu Selatan</p>
                <p className="text-xl font-normal text-gray-500 mt-2">
                  Computer & Network Engineering
                </p>
                <p className="text-lg font-normal text-gray-400 mt-2">
                  2017 - 2019
                </p>
                <p className="text-lg font-normal text-gray-400">
                  Tulang Bawang, Lampung, Indonesia.
                </p>
              </div>
              <div>
                <p className="text-xl font-semibold">Pondok IT QODR</p>
                <p className="text-xl font-normal text-gray-500 mt-2">
                  Frontend Developer
                </p>
                <p className="text-lg font-normal text-gray-400 mt-2">
                  Jul 2019 - Jan 2022
                </p>
                <p className="text-lg font-normal text-gray-400">
                  Bantul Dligno, Yogyakarta - Indonesia
                </p>
              </div>
            </div>
          </div>

          <div id="skills" className="mt-6">
          <p className="text-xl font-semibold text-gray-600  bg-green-300 pl-4 py-2 w-1/3">Skills</p>
            <div className="grid grid-cols-2 mt-4">
             <div>
              <p className="mb-2 text-gray-800 text-base font-semibold">Programming Languages</p>
                <ul className="list-disc list-item ml-5">
                  <li className="text-gray-600">Javascript</li>
                  <li className="text-gray-600">Typescript</li>
                </ul>
             </div>
             <div>
                <p className="mb-2 text-gray-800 text-base font-semibold">Tools </p>
                <ul className="list-disc list-item ml-5">
                  <li className="text-gray-600">Postman</li>
                  <li className="text-gray-600">Figma</li>
                  <li className="text-gray-600">Jira</li>
                </ul>
             </div>
            </div>
             <div>
                <p className="mb-2 text-gray-800 text-base font-semibold">
                  Library / Framework / Services</p>
                <ul className="list-disc list-item ml-5">
                  <li className="text-gray-600">React Js</li>
                  <li className="text-gray-600">Next Js</li>
                  <li className="text-gray-600">Firebase</li>
                  <li className="text-gray-600">Git</li>
                  <li className="text-gray-600">TailwindCSS</li>
                  <li className="text-gray-600">REST API</li>
                  <li className="text-gray-600">GraphQL</li>
                  <li className="text-gray-600">React Native</li>
                </ul>
             </div>
          </div>
        </div>
        </div>
      </section>
    </main>
  );
}