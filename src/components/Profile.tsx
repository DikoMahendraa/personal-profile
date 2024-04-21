import React, { memo } from 'react'
import Image from 'next/image'
import { AtSign, Phone } from 'lucide-react'

import ButtonDownload from './ButtonDownload'

const Profile = () => {
  return (
    <div className="w-full flex-col items-center mt-10">
      <div className="flex gap-4 items-center mb-6">
        <div className="relative lg:block w-[15rem] h-[15rem] hidden overflow-hidden border-4 border-gray-700">
          <Image
            alt="image-profile"
            src="/me.webp"
            fill
            priority
            sizes="(max-width: 768px) 7.5rem, 15rem"
            quality={25}
          />
        </div>
        <div>
          <p className="dark:text-white mb-6 text-gray-700 lg:text-5xl text-4xl font-bold">
            Hi, {`I'm`} <br /> <span className="capitalize">Diko Mahendra</span>
          </p>
          <p className="flex items-center lg:text-base text-sm gap-2">
            <Phone size={18} className="dark:text-white text-gray-700" />
            <a
              target="_blank"
              href="https://wa.me/082384898030"
              className="dark:text-white text-gray-700"
            >
              082384898030
            </a>
          </p>
          <p className="flex items-center lg:text-base text-sm gap-2 mt-2 mb-4">
            <AtSign size={18} className="text-white" />
            <a
              target="_blank"
              href="https://wa.me/082384898030"
              className="dark:text-white text-gray-700"
            >
              diko.dev99@gmail.com
            </a>
          </p>
          <ButtonDownload text="Resume" />
        </div>
      </div>
      <div className="lg:text-base text-sm dark:text-gray-300">
        <p className="lg:max-w-[90%]">
          I am web developer with ± 3 years of experience using NextJs, React Js
          and also React Native. interested in learning new things, used to
          working under pressure, working well with team, used to working
          remotely and ready to adjust skills according to company needs.
        </p>
        <p className="mt-4 lg:max-w-[80%]">
          I continually explore new technologies and tools to improve my
          development process, while keeping up with the latest trends and best
          practices.
        </p>
      </div>
    </div>
  )
}

export default memo(Profile)
