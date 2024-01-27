import React from 'react'
import Image from 'next/image'

export default function LeftSide() {
  return (
    <div className="w-full mt-20">
      <div className="flex items-center justify-center">
        <div className="relative w-[20rem] h-[20rem] rounded-lg">
          <Image
            alt="image-profile"
            src="/me.jpeg"
            fill
            objectFit="cover"
            className="rounded-md"
          />
        </div>
      </div>
      <div className="text-center mt-4">
        <p className="font-bold text-gray-800 text-2xl dark:text-white">
          DIKO MAHENDRA
        </p>
        <p className="text-gray-600 text-lg dark:text-gray-400">
          Frontend Developer
        </p>
      </div>
      <div className="mt-6 text-lg">
        <p className="font-semibold text-gray-800 text-lg dark:text-white">
          Whatsapp
        </p>
        <p className="text-gray-600 text-base dark:text-gray-400">
          +628-2384-8980-30
        </p>
      </div>
      <div className="mt-4 text-lg">
        <p className="font-semibold text-gray-800 dark:text-white">Email</p>
        <p className="text-gray-600 text-base dark:text-gray-400">
          diko.dev99@gmail.com
        </p>
      </div>
      <div className="mt-4 text-lg">
        <p className="font-semibold text-lg text-gray-800 dark:text-white">
          Social Media
        </p>
        <div className="flex flex-col">
          <ul className="list-disc dark:marker:text-white marker:text-gray-600 ml-4">
            <li>
              <a
                href="https://web.facebook.com/diko.mahendra.790"
                target="_blank"
                className="link link-info text-base"
              >
                Facebook
              </a>
            </li>
            <li>
              <a
                href="https://www.instagram.com/dikomahendr4/"
                target="_blank"
                className="link link-info text-base"
              >
                Instagram
              </a>
            </li>
            <li>
              <a
                href="https://www.linkedin.com/in/diko-mahendra/"
                target="_blank"
                className="link link-info text-base"
              >
                Linkedin
              </a>
            </li>
            <li>
              <a
                href="https://github.com/DikoMahendraa"
                target="_blank"
                className="link link-info text-base"
              >
                Github
              </a>
            </li>
          </ul>
        </div>
      </div>

      <div className="mt-8">
        <button className="btn btn-outline rounded-sm dark:btn-info dark:btn-primary">
          Download Resume
        </button>
      </div>
    </div>
  )
}
