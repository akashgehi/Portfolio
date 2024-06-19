// composables/useEnterAnimation.js

import { useNuxtApp } from '#app'

export const useEnterAnimation = () => {
  const { $gsap: gsap } = useNuxtApp()

  const enterAnimation = (elements) => {
    const tl = gsap.timeline(); // Create the timeline

    gsap.set(elements, { display: 'none' }) // Set initial visibility to hidden

    elements.forEach((tile, index) => {
      // Generate random x and y values for entry direction
      const x = Math.random() > 0.5 ? 100 : -100
      const y = Math.random() > 0.5 ? 50 : -50

      tl.fromTo(tile,
        { opacity: 0, x, y, scale: 0.9, filter: "blur(10px)", display: 'flex', visibility: 'visible'},
        { opacity: 1, x: 0, y: 0, scale: 1, filter: "blur(0px)", duration: index == 1 ? 1 : 0.1, ease: 'power3.in' }
      )
    })
  }
  const exitAnimation = (elements,next) => {
    const tl = gsap.timeline(); // Create the timeline
    elements.forEach((tile, index) => {
      // Generate random x and y values for exit direction
      const x = Math.random() > 0.5 ? 100 : -100
      const y = Math.random() > 0.5 ? 50 : -50

      tl.fromTo(tile,
        { opacity: 1, x: 0, y: 0, scale: 1, filter: "blur(0px)" },
        { opacity: 0, x, y, scale: 0.9, filter: "blur(10px)", display: 'flex', visibility: 'visible', duration: index == 0 ? .5 : 0.3, delay: -.0005, ease: 'power3.in' }
      ).then(() => {
        next()
      })
    })

    // gsap.set(elements, { display: 'none' }) // Set initial visibility to hidden
  }
  return {
    enterAnimation,exitAnimation
  }
}
