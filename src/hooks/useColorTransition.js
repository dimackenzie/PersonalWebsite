import { useRef, useLayoutEffect, useCallback, useState } from 'react'
import useObserver from './useObserver'
import throttle from '../utilities/throttle'

const transition = (start, end, step) => {
  let result = start.slice()
  for (let i = 0; i < 3; i++) {
    result[i] = Math.round(result[i] + step * (end[i] - start[i]))
  }
  return result
}

const useColorTransition = (startingColor, endingColor, transitionInterval) => {
  const position = useRef(0)
  const container = useRef()
  const isIntersecting = useObserver(container)
  const [rgb, setRgb] = useState(startingColor)
  const transitionIntervalRef = useRef(transitionInterval)

  const handleColorTransition = useCallback(
    e => {
      // Scrolling up
      if (position.current > e.currentTarget.scrollY) {
        let transitionColor = transition(
          startingColor,
          endingColor,
          transitionIntervalRef.current
        )
        transitionIntervalRef.current =
          transitionIntervalRef.current > 0
            ? transitionIntervalRef.current - transitionInterval
            : transitionIntervalRef.current
        setRgb(transitionColor)
      }
      // Scrolling down
      else if (position.current <= e.currentTarget.scrollY) {
        let transitionColor = transition(
          startingColor,
          endingColor,
          transitionIntervalRef.current
        )
        transitionIntervalRef.current =
          transitionIntervalRef.current < 1
            ? transitionIntervalRef.current + transitionInterval
            : transitionIntervalRef.current
        setRgb(transitionColor)
      }

      position.current = window.scrollY
    },
    [startingColor, endingColor, transitionInterval]
  )

  useLayoutEffect(() => {
    const throttledHandleColorTransition = throttle(handleColorTransition, 500)
    if (isIntersecting)
      window.addEventListener('scroll', throttledHandleColorTransition)

    return () =>
      window.removeEventListener('scroll', throttledHandleColorTransition)
  }, [isIntersecting, handleColorTransition])

  return [container, `rgb(${rgb[0]}, ${rgb[1]}, ${rgb[2]})`]
}

export default useColorTransition
