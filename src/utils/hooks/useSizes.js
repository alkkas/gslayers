import { useLayoutEffect, useState } from 'react'

export const useSizes = () => {
  const [sizes, setSizes] = useState({ width: 0, height: 0 })

  useLayoutEffect(() => {
    setSizes({ width: window.innerWidth, height: window.innerHeight })
    window.addEventListener('resize', () => {
      setSizes({ width: window.innerWidth, height: window.innerHeight })
    })
  }, [])
  return sizes
}
