import React from 'react'
import Image from "next/image"


export default function LeftSide() {
  return (
    <div className="w-full mt-20">
    <div className="flex items-center justify-center">
     <div className="relative w-[20rem] h-[20rem] rounded-lg">
         <Image alt="image-profile" src="/me.jpeg" fill objectFit="cover" className="rounded-md" />
       </div>
    </div>
     <div className="text-center mt-4">
         <p className="font-bold text-gray-800 text-2xl">DIKO MAHENDRA</p>
         <p className="text-gray-600 text-lg">Frontend Developer</p>
     </div>
     <div className="mt-6">
         <p className="font-semibold text-gray-800 text-lg">Contact Number</p>
         <p className="text-gray-600">+628-2384-8980-30</p>
     </div>
     <div className="mt-4 text-lg">
         <p className="font-semibold text-gray-800">Email</p>
         <p className="text-gray-600">diko.dev99@gmail.com</p>
     </div>
     <div className="mt-4 text-lg">
       <p className="font-semibold text-lg text-gray-800">SOCIAL LINKS</p>
       <div>
         <p className="text-gray-600">Facebook</p>
         <p className="text-gray-600">Instagram</p>
         <p className="text-gray-600">Youtube</p>
         <p className="text-gray-600">Tiktok</p>
         <p className="text-gray-600">Twitter</p>
       </div>
     </div>
   </div>
  )
}
