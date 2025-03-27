"use client"

import { useEffect } from "react"
import { refreshAOS } from "../utils/animation"

export const useScrollAnimation = () => {
  useEffect(() => {
    // Refresh AOS when component mounts
    refreshAOS()

    // Add scroll event listener to refresh AOS on scroll
    const handleScroll = () => {
      refreshAOS()
    }

    window.addEventListener("scroll", handleScroll)

    return () => {
      window.removeEventListener("scroll", handleScroll)
    }
  }, [])
}

