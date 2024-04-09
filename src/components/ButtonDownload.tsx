'use client'

import React, { memo, useCallback } from 'react'
import { FileDown } from 'lucide-react'

const ButtonDownload = ({ text }: Readonly<{ text: string }>) => {
  const handleDownload = useCallback(() => {
    const link = document.createElement('a')
    link.href = '/docs/diko-en.pdf'
    link.download = 'resume.pdf'
    document.body.appendChild(link)
    link.click()
    document.body.removeChild(link)
  }, [])

  return (
    <button
      onClick={handleDownload}
      className="dark:hover:bg-cyan-300/35 transition hover:bg-primary-dark/20 dark:text-cyan-300 flex items-center px-4 py-2 font-semibold border dark:border-cyan-300/35 rounded-sm gap-2 dark:bg-cyan-300/20"
    >
      <FileDown size={16} /> {text}
    </button>
  )
}

export default memo(ButtonDownload)
