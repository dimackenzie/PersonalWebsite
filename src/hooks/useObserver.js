import { useEffect, useState } from 'react'

const useObserver = (ref, options = { rootMargin: '0px', threshold: [0] }) => {
  const [isIntersecting, setIntersecting] = useState(false)

  useEffect(() => {
    const persistentRef = ref.current
    const observer = new IntersectionObserver(([entry]) => {
      setIntersecting(entry.isIntersecting)
    }, options)

    if (persistentRef) {
      observer.observe(persistentRef)
    }

    return () => {
      observer.unobserve(persistentRef)
    }
  })

  return isIntersecting
}

export default useObserver
