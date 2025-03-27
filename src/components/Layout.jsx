"use client"

import { Outlet } from "react-router-dom"
import { useEffect } from "react"
import SiteHeader from "./SiteHeader"
import SiteFooter from "./SiteFooter"
import { initializeAOS, refreshAOS } from "../utils/animation"
import PartnerCarousel from "./PartnerCarousel"

function Layout() {
  useEffect(() => {
    // Initialize AOS
    initializeAOS()

    // Refresh AOS on window resize
    window.addEventListener("resize", refreshAOS)

    return () => {
      window.removeEventListener("resize", refreshAOS)
    }
  }, [])

  return (
    <div className="min-h-screen bg-secondary text-text-primary mx-auto overflow-x-hidden">
      <SiteHeader />
      <main>
        <Outlet /> {/* This is where your page content will be rendered */}
        <PartnerCarousel />
      </main>
      <SiteFooter />
    </div>
  )
}

export default Layout

