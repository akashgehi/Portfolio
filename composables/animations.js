// composables/useEnterAnimation.js

import { useNuxtApp } from '#app'

export const useEnterAnimation = () => {
  const { $gsap: gsap } = useNuxtApp()

  const enterAnimation = (elements,duration,type) => {
    const tl = gsap.timeline(); // Create the timeline

    gsap.set(elements, { display: 'none' }) // Set initial visibility to hidden
let x
let y
    elements.forEach((tile, index, random) => {
      // Generate random x and y values for entry direction
      if(random){
       x = Math.random() > 0.5 ? 100 : -100
       y = Math.random() > 0.5 ? 50 : -50
      }
      else{
   x = 0
   y = 0
}
      tl.fromTo(tile,
        { opacity: 0, x, y, scale: 0.5, display: 'flex', visibility: 'visible'},
        { opacity: 1, x: 0, y: 0, scale: 1, duration:  duration(index), ease: type || 'ease' }
      )
    })
  }
  const exitAnimation = (elements,next,duration,type) => {
    const tl = gsap.timeline(); // Create the timeline
    elements.forEach((tile, index) => {
      // Generate random x and y values for exit direction
      const x = Math.random() > 0.5 ? 100 : -100
      const y = Math.random() > 0.5 ? 50 : -50

      tl.fromTo(tile,
        { opacity: 1, x: 0, y: 0, scale: 1, filter: "blur(0px)" },
        { opacity: 0, x, y, scale: 0.9, filter: "blur(10px)", display: 'flex', visibility: 'visible', duration: duration, ease:type }
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
