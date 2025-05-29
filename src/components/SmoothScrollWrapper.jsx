import { useEffect } from "react"

export default function SmoothScrollWrapper({ children }) {
  useEffect(() => {
    const smoothScrollTo = (target, duration = 1000) => {
      const start = window.pageYOffset
      const distance = target - start
      let startTime = null

      const easeInOutCubic = (t) => {
        return t < 0.5 ? 4 * t * t * t : (t - 1) * (2 * t - 2) * (2 * t - 2) + 1
      }

      const animation = (currentTime) => {
        if (startTime === null) startTime = currentTime
        const timeElapsed = currentTime - startTime
        const progress = Math.min(timeElapsed / duration, 1)
        const ease = easeInOutCubic(progress)

        window.scrollTo(0, start + distance * ease)

        if (timeElapsed < duration) {
          requestAnimationFrame(animation)
        }
      }

      requestAnimationFrame(animation)
    }

    const handleAnchorClick = (e) => {
      const target = e.target
      if (target.hash) {
        e.preventDefault()
        const element = document.querySelector(target.hash)
        if (element) {
          const offsetTop = element.offsetTop - 80
          smoothScrollTo(offsetTop, 1200)
        }
      }
    }

    document.addEventListener("click", handleAnchorClick)
    return () => document.removeEventListener("click", handleAnchorClick)
  }, [])

  return <>{children}</>
}
