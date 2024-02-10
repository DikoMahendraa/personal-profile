'use client'

import React from 'react'
import { usePathname } from 'next/navigation'
import { FileDown } from 'lucide-react'

export default function ButtonDownload({ text }: Readonly<{ text: string }>) {
  const pathname = usePathname()

  const handleDownload = () => {
    const pdfID = '/docs/diko-id.pdf'
    const pdfEnJp = '/docs/diko-en.pdf'
    const link = document.createElement('a')
    link.href = pathname?.includes('id') ? pdfID : pdfEnJp
    link.download = 'resume.pdf'
    document.body.appendChild(link)
    link.click()
    document.body.removeChild(link)
  }

  return (
    <button
      onClick={handleDownload}
      className="btn btn-outline rounded-sm dark:btn-info dark:btn-primary"
    >
      <FileDown /> {text}
    </button>
  )
}
