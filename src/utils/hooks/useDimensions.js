import { useState, useLayoutEffect } from 'react'

// Naive implementation - in reality would want to attach
// a window or resize listener. Also use state/layoutEffect instead of ref/effect
// if this is important to know on initial client render.
// It would be safer to  return null for unmeasured states.

export const useDimensions = ref => {
  const [dimensions, setDimensions] = useState({ width: 0, height: 0 })

  useLayoutEffect(() => {
    function setRefDimenstions() {
      setDimensions({
        width: ref.current?.offsetWidth,
        height: ref.current?.offsetHeight,
      })
    }
    setRefDimenstions()
    window.addEventListener('resize', setRefDimenstions)

    return function cleanup() {
      window.removeEventListener('resize', setRefDimenstions)
    }
  }, [])

  return dimensions
}
