const throttle = (callback, limit) => {
  let wait = false
  // Return new function that takes in event
  return (...args) => {
    if (!wait) {
      callback(...args)
      wait = true
      setTimeout(() => {
        wait = false
      }, limit)
    }
  }
}

export default throttle
