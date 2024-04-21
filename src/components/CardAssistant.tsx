'use client'

import React from 'react'
import { motion } from 'framer-motion'
import Link from 'next/link'
import { frontendTools } from '@/constants/assistant'

export default function CardAssistant() {
  return (
    <div className="grid gap-4 mt-4">
      {frontendTools.map((item, index) => (
        <motion.div
          key={index}
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: 20 }}
          transition={{ delay: index * 0.1 }}
        >
          <p className=" lg:text-lg text-base mb-2 lg:mt-6 mt-4">
            {item.title}
          </p>

          <ul className="list-disc ml-6">
            {item.tools?.map((tool) => (
              <li key={tool.name} className="text-gray-400 hover:text-cyan-300">
                <Link target="_blank" href={tool.url}>
                  {tool.name}
                </Link>
              </li>
            ))}
          </ul>
        </motion.div>
      ))}
    </div>
  )
}
