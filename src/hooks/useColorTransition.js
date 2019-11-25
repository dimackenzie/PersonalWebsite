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

const useColorTransition = (startingColor, endingColor) => {
  const position = useRef(0)
  const container = useRef()
  const isIntersecting = useObserver(container)
  const [rgb, setRgb] = useState(startingColor)
  const trasitionStepRef = useRef(0.05)

  const handleColorTransition = useCallback(
    e => {
      // Scrolling up
      if (position.current > e.currentTarget.scrollY) {
        let transitionColor = transition(
          startingColor,
          endingColor,
          trasitionStepRef.current
        )
        trasitionStepRef.current =
          trasitionStepRef.current > 0
            ? trasitionStepRef.current - 0.05
            : trasitionStepRef.current
        setRgb(transitionColor)
      }
      // Scrolling down
      else if (position.current <= e.currentTarget.scrollY) {
        let transitionColor = transition(
          startingColor,
          endingColor,
          trasitionStepRef.current
        )
        trasitionStepRef.current =
          trasitionStepRef.current < 1
            ? trasitionStepRef.current + 0.05
            : trasitionStepRef.current
        setRgb(transitionColor)
      }

      position.current = window.scrollY
    },
    [startingColor, endingColor]
  )

  useLayoutEffect(() => {
    const throttledHandleColorTransition = throttle(handleColorTransition, 200)
    if (isIntersecting)
      window.addEventListener('scroll', throttledHandleColorTransition)

    return () =>
      window.removeEventListener('scroll', throttledHandleColorTransition)
  }, [isIntersecting, handleColorTransition])

  return [container, `rgb(${rgb[0]}, ${rgb[1]}, ${rgb[2]})`]
}

export default useColorTransition
