'use client'

import React, { memo, useCallback } from 'react'
import { FileDown } from 'lucide-react'
import { sendGAEvent } from '@next/third-parties/google'

const ButtonDownload = ({ text }: Readonly<{ text: string }>) => {
  const handleDownload = useCallback(() => {
    sendGAEvent('event', 'button-download', {
      value: 'button donwload diklik',
    })
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
      className="btn bg-cyan-800/35 text-cyan-300 border-none hover:bg-cyan-700"
    >
      <FileDown size={16} /> {text}
    </button>
  )
}

export default memo(ButtonDownload)
