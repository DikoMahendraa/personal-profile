'use client'

import React, { memo, useCallback } from 'react'
import { usePathname } from 'next/navigation'
import { FileDown } from 'lucide-react'

const ButtonDownload = ({ text }: Readonly<{ text: string }>) => {
  const pathname = usePathname()

  const pdfID = '/docs/diko-id.pdf'
  const pdfEN = '/docs/diko-en.pdf'
  const pdfJP = '/docs/diko-jp.pdf'

  const setPdf = useCallback(() => {
    switch (pathname) {
      case '/en':
        return pdfEN
      case '/jp':
        return pdfJP
      case '/id':
      default:
        return pdfID
    }
  }, [pathname])

  const handleDownload = useCallback(() => {
    const link = document.createElement('a')
    link.href = setPdf()
    link.download = 'resume.pdf'
    document.body.appendChild(link)
    link.click()
    document.body.removeChild(link)
  }, [setPdf])

  return (
    <button
      onClick={handleDownload}
      className="btn btn-outline rounded-sm dark:btn-info dark:btn-primary"
    >
      <FileDown /> {text}
    </button>
  )
}

export default memo(ButtonDownload)
