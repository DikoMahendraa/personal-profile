import { useState, useEffect, useCallback } from 'react'

interface ViewportSize {
  width: number
  height: number
}

const useViewportSize = (): ViewportSize => {
  const [viewportSize, setViewportSize] = useState<ViewportSize>({
    width: window?.innerWidth,
    height: window?.innerHeight,
  })

  const handleResize = useCallback(() => {
    setViewportSize({
      width: window?.innerWidth,
      height: window?.innerHeight,
    })
  }, [])

  useEffect(() => {
    window.addEventListener('resize', handleResize)

    return () => {
      window.removeEventListener('resize', handleResize)
    }
  }, [handleResize])

  return viewportSize
}

export { useViewportSize }
