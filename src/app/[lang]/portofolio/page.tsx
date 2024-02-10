import React from 'react'
import { getDictionary } from '@@/get-dictionary'
import { Locale } from '@@/i18n-config'
import CardPortofolio from '@/components/CardPortofolio'
import Image from 'next/image'

export default async function PagePortofolio({
  params: { lang },
}: Readonly<{
  params: { lang: Locale }
}>) {
  const t = await getDictionary(lang)

  return (
    <div className="container mx-auto">
      <div className="my-6 gap-4 dark:text-gray-200 grid grid-cols-3">
        {t.profile.portofolio.company.map((item) => (
          <CardPortofolio
            labelDescription={t.profile.portofolio.label_description}
            labelRole={t.profile.portofolio.label_role}
            labelTech={t.profile.portofolio.label_tech_used}
            {...item}
            key={item.name}
          />
        ))}
      </div>

      <dialog id="showProjectDetail" className="modal">
        <div className="modal-box">
          <h3 className="font-bold text-lg">Hello!</h3>
          <div>
            <div className="carousel carousel-center p-4 space-x-4 bg-neutral rounded-box">
              <div className="carousel-item">
                <div className="relative w-[20rem] h-[5rem]">
                  <Image
                    objectFit="cover"
                    fill={true}
                    src="https://daisyui.com/images/stock/photo-1559703248-dcaaec9fab78.jpg"
                    alt="https://daisyui.com/images/stock/photo-1559703248-dcaaec9fab78.jpg"
                    className="rounded-box"
                  />
                </div>
              </div>
              <div className="carousel-item">
                <div className="relative w-[20rem] h-[5rem]">
                  <Image
                    objectFit="cover"
                    fill={true}
                    src="https://daisyui.com/images/stock/photo-1559703248-dcaaec9fab78.jpg"
                    alt="https://daisyui.com/images/stock/photo-1559703248-dcaaec9fab78.jpg"
                    className="rounded-box"
                  />
                </div>
              </div>
              <div className="carousel-item">
                <div className="relative w-[20rem] h-[5rem]">
                  <Image
                    objectFit="cover"
                    fill={true}
                    src="https://daisyui.com/images/stock/photo-1559703248-dcaaec9fab78.jpg"
                    alt="https://daisyui.com/images/stock/photo-1559703248-dcaaec9fab78.jpg"
                    className="rounded-box"
                  />
                </div>
              </div>
              <div className="carousel-item">
                <div className="relative w-[20rem] h-[5rem]">
                  <Image
                    objectFit="cover"
                    fill={true}
                    src="https://daisyui.com/images/stock/photo-1559703248-dcaaec9fab78.jpg"
                    alt="https://daisyui.com/images/stock/photo-1559703248-dcaaec9fab78.jpg"
                    className="rounded-box"
                  />
                </div>
              </div>
            </div>
          </div>
          <div className="modal-action">
            <form method="dialog">
              <button className="btn">Close</button>
            </form>
          </div>
        </div>
      </dialog>
    </div>
  )
}
