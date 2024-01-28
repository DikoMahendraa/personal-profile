import React from 'react'
import Image from 'next/image'
import { Locale } from '../../i18n-config'
import { getDictionary } from '../../get-dictionary'
import ButtonDownload from './ButtonDownload'

export default async function LeftSide({ lang }: { lang: Locale }) {
  const t = await getDictionary(lang)

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
          {t.profile.user.name}
        </p>
        <p className="text-gray-600 text-lg dark:text-gray-400">
          {t.profile.user.position}
        </p>
      </div>
      <div className="mt-6 text-lg">
        <p className="font-semibold text-gray-800 text-lg dark:text-white">
          Whatsapp
        </p>
        <a
          target="_blank"
          href={` https://wa.me/${t.profile.user.whatsapp.split('-').join('')}`}
          className="link link-info"
        >
          {t.profile.user.whatsapp}
        </a>
      </div>
      <div className="mt-4 text-lg">
        <p className="font-semibold text-gray-800 dark:text-white">Email</p>
        <a
          target="_blank"
          href={`mailto:${t.profile.user.email}`}
          className="link link-info"
        >
          {t.profile.user.email}
        </a>
      </div>
      <div className="mt-4 text-lg">
        <p className="font-semibold text-lg text-gray-800 dark:text-white">
          {t.profile.user.title_social_media}
        </p>
        <div className="flex flex-col">
          <ul className="list-disc dark:marker:text-white marker:text-gray-600 ml-4">
            {t.profile.user.social_media.map((item) => (
              <li key={item.name}>
                <a
                  href={item.url}
                  target="_blank"
                  className="link link-info text-base"
                >
                  {item.name}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>

      <ButtonDownload text={t.profile.user.button_download} />
    </div>
  )
}
