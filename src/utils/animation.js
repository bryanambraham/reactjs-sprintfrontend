import AOS from "aos"
import "aos/dist/aos.css"

export const initializeAOS = () => {
  AOS.init({
    duration: 800,
    once: false,
    mirror: true,
    offset: 120,
    easing: "ease-in-out",
  })
}

export const refreshAOS = () => {
  AOS.refresh()
}

