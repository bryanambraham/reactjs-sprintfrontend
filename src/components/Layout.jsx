import { Outlet } from "react-router-dom"
import SiteHeader from "./SiteHeader"
import SiteFooter from "./SiteFooter"

function Layout() {
  return (
    <div className="min-h-screen bg-secondary text-text-primary">
      <SiteHeader />
      <main>
        <Outlet /> {/* This is where your page content will be rendered */}
      </main>
      <SiteFooter />
    </div>
  )
}

export default Layout

