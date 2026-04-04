export const prefersReducedMotion = () => {
  if (typeof window === "undefined") return false
  return window.matchMedia("(prefers-reduced-motion: reduce)").matches
}

export const fadeUp = (delay = 0, duration = 0.8) => ({
  hidden: { opacity: 0, y: 40 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration, delay, ease: [0.25, 0.46, 0.45, 0.94] },
  },
})

export const fadeIn = (delay = 0, duration = 0.8) => ({
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { duration, delay, ease: [0.25, 0.46, 0.45, 0.94] },
  },
})

export const staggerContainer = (staggerChildren = 0.1, delayChildren = 0.2) => ({
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren, delayChildren },
  },
})

export const viewportOnce = { once: true, margin: "-50px" }
