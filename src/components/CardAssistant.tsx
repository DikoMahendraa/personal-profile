'use client'

import React from 'react'
import { motion } from 'framer-motion'
import Image from 'next/image'
import Link from 'next/link'
import { frontendTools } from '@/constants/assistant'

export default function CardAssistant() {
  return (
    <div className="grid grid-cols-3 gap-4 mt-4">
      {frontendTools.map((item, index) => (
        <motion.div
          key={index}
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: 20 }}
          transition={{ delay: index * 0.1 }}
          className="lg:col-span-1 col-span-3 border-primary-dark-soft/50 dark:border-cyan-300/30 border dark:bg-primary-dark-soft px-4 pt-4 rounded-md dark:hover:bg-cyan-300/50 transition-colors"
        >
          <Link href={item.url} target="_blank">
            <Image
              alt={item.name}
              src={item.icon}
              priority
              width={50}
              height={50}
              quality={50}
            />
            <p className="font-semibold dark:text-cyan-300 my-2">{item.name}</p>
          </Link>
        </motion.div>
      ))}
    </div>
  )
}
