import { useEffect, useState } from 'react'

const useObserver = (ref, options = { rootMargin: '0px', threshold: [0] }) => {
  const [isIntersecting, setIntersecting] = useState(false)

  useEffect(() => {
    const observer = new IntersectionObserver(([entry]) => {
      setIntersecting(entry.isIntersecting)
    }, options)

    if (ref.current) {
      observer.observe(ref.current)
    }

    return () => {
      observer.unobserve(ref.current)
    }
  })

  return isIntersecting
}

export default useObserver
