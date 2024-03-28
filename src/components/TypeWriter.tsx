'use client'

import { useEffect, useState } from 'react'

export const TypingText = ({
  text,
  className,
}: {
  text: string
  className: string
}) => {
  const [displayText, setDisplayText] = useState('')

  useEffect(() => {
    let currentIndex = 0
    const interval = setInterval(() => {
      setDisplayText(text.substring(0, currentIndex))
      currentIndex++
      if (currentIndex > text.length) {
        clearInterval(interval)
      }
    }, 200) // Ubah kecepatan animasi di sini
    return () => clearInterval(interval)
  }, [text])

  return <span className={className}>{displayText}</span>
}
