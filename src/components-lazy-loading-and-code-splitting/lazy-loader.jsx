import { useEffect, useState } from "react"

const LazyLoader = ({ show = false, delay = 0 }) => {
  const [showLoader, setShowLoader] = useState(show)

  useEffect(() => {
    let timeout
    if (!show) {
      setShowLoader(false)
    }
    if (delay === 0) {
      setShowLoader(true)
    } else {
      timeout = setTimeout(() => {
        setShowLoader(true)
      }, delay)
    }

    return () => {
      clearTimeout(timeout)
    }
  }, [show, delay])

  return showLoader ? <h1>Loading...</h1> : null
}

export default LazyLoader
