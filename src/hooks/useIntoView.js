import { useEffect, useState } from 'react'
import { useViewportScroll } from 'framer-motion'

const useIntoView = ref => {
  const [inView, setInView] = useState(false)
  const { scrollY } = useViewportScroll()

  useEffect(() => {
    const unsubscribe = scrollY.onChange(currentY => {
      if (ref.current) {
        const { offsetTop, clientHeight } = ref.current
        const activationPoint = currentY + window.innerHeight - clientHeight / 2
        if (activationPoint >= offsetTop) {
          setInView(true)
        }
      }
    })
    return unsubscribe
  })

  return inView
}

export default useIntoView
