import React from 'react'
import Image from 'next/image'
import {
  AtSign,
  Facebook,
  Github,
  Instagram,
  Linkedin,
  Phone,
} from 'lucide-react'

import { Locale } from '@@/i18n-config'
import { getDictionary } from '@@/get-dictionary'
import ButtonDownload from './ButtonDownload'

export default async function LeftSide({ lang }: Readonly<{ lang: Locale }>) {
  const t = await getDictionary(lang)

  const setIconSocialMedia = (type: string) => {
    switch (type) {
      case 'Facebook':
        return <Facebook size={20} />
      case 'Instagram':
        return <Instagram size={18} />
      case 'Linkedin':
        return <Linkedin size={18} />
      case 'Github':
      default:
        return <Github size={18} />
    }
  }

  return (
    <div className="w-full mt-20">
      <div className="flex items-center justify-center">
        <div className="relative w-[15rem] h-[15rem] rounded-full overflow-hidden mb-4 border-4 border-gray-400">
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
        <p className="text-white flex text-base items-center gap-2 mt-2">
          <Phone size={18} />
          <a
            target="_blank"
            href={` https://wa.me/${t.profile.user.whatsapp.split('-').join('')}`}
            className="link link-info"
          >
            {t.profile.user.whatsapp}
          </a>
        </p>
      </div>
      <div className="mt-4 text-lg">
        <p className="font-semibold text-gray-800 dark:text-white">Email</p>
        <p className="flex items-center text-base gap-2 mt-2 text-white">
          <AtSign size={18} />
          <a
            target="_blank"
            href={`mailto:${t.profile.user.email}`}
            className="link link-info"
          >
            {t.profile.user.email}
          </a>
        </p>
      </div>
      <div className="mt-4 text-lg mb-8">
        <p className="font-semibold text-lg text-gray-800 dark:text-white">
          {t.profile.user.title_social_media}
        </p>
        <div className="flex flex-col">
          {t.profile.user.social_media.map((item) => (
            <p
              key={item.name}
              className="flex text-white items-center gap-2 mt-2"
            >
              {setIconSocialMedia(item.name)}
              <a
                href={item.url}
                target="_blank"
                className="link link-info text-base"
              >
                {item.name}
              </a>
            </p>
          ))}
        </div>
      </div>

      <ButtonDownload text={t.profile.user.button_download} />
    </div>
  )
}
