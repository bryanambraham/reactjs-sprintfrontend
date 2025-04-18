"use client"

import { useState, useRef } from "react"
import { Link, NavLink } from "react-router-dom"
import { Menu, X, ChevronDown, Truck } from "lucide-react"

export function SiteHeader() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [activeDropdown, setActiveDropdown] = useState(null)
  const dropdownTimeoutRef = useRef(null)

  const handleDropdownEnter = (dropdown) => {
    if (dropdownTimeoutRef.current) {
      clearTimeout(dropdownTimeoutRef.current)
    }
    setActiveDropdown(dropdown)
  }

  const handleDropdownLeave = () => {
    dropdownTimeoutRef.current = setTimeout(() => {
      setActiveDropdown(null)
    }, 300) // 300ms delay before closing dropdown
  }

  return (
    <header className="bg-secondary shadow-md">
      <div className="container mx-auto px-24 py-3">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-2">
            {/* <Truck size={28} className="text-primary" /> */}
            <div className="relative w-auto h-14">
                <img src="/sprintlogo.png" alt="SprintCargo Logo" className="w-full h-full object-contain" />
              </div>
            {/* <span className="text-text-primary font-bold text-xl">SprintCargo</span> */}
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <NavLink
              to="/"
              className={({ isActive }) =>
                isActive ? "text-primary font-medium" : "text-text-primary hover:text-primary transition-colors"
              }
            >
              Home
            </NavLink>

            {/* Services Dropdown */}
            <div
              className="relative"
              onMouseEnter={() => handleDropdownEnter("services")}
              onMouseLeave={handleDropdownLeave}
            >
              <button className="flex items-center text-text-primary hover:text-primary transition-colors">
                <span>Services</span>
                <ChevronDown size={16} className="ml-1" />
              </button>
              <div
                className={`absolute left-0 mt-2 w-48 bg-accent rounded-md shadow-lg py-2 z-10 transition-opacity duration-200 ${
                  activeDropdown === "services" ? "opacity-100 visible" : "opacity-0 invisible"
                }`}
                onMouseEnter={() => handleDropdownEnter("services")}
                onMouseLeave={handleDropdownLeave}
              >
                <Link to="/barang" className="block px-4 py-2 text-text-primary hover:bg-secondary hover:text-primary">
                  Pengiriman Barang
                </Link>
                <Link to="/mobil" className="block px-4 py-2 text-text-primary hover:bg-secondary hover:text-primary">
                  Pengiriman Mobil
                </Link>
                <Link to="/motor" className="block px-4 py-2 text-text-primary hover:bg-secondary hover:text-primary">
                  Pengiriman Motor
                </Link>
                <Link
                  to="/alatberat"
                  className="block px-4 py-2 text-text-primary hover:bg-secondary hover:text-primary"
                >
                  Pengiriman Alat Berat
                </Link>
              </div>
            </div>

            {/* Destinations Dropdown */}
            <div
              className="relative"
              onMouseEnter={() => handleDropdownEnter("destinations")}
              onMouseLeave={handleDropdownLeave}
            >
              <button className="flex items-center text-text-primary hover:text-primary transition-colors">
                <span>Destinations</span>
                <ChevronDown size={16} className="ml-1" />
              </button>
              <div
                className={`absolute left-0 mt-2 w-48 bg-accent rounded-md shadow-lg py-2 z-10 transition-opacity duration-200 ${
                  activeDropdown === "destinations" ? "opacity-100 visible" : "opacity-0 invisible"
                }`}
                onMouseEnter={() => handleDropdownEnter("destinations")}
                onMouseLeave={handleDropdownLeave}
              >
                <Link to="/jawa" className="block px-4 py-2 text-text-primary hover:bg-secondary hover:text-primary">
                  Jawa
                </Link>
                <Link to="/bali" className="block px-4 py-2 text-text-primary hover:bg-secondary hover:text-primary">
                  Bali
                </Link>
                <Link
                  to="/kalimantan"
                  className="block px-4 py-2 text-text-primary hover:bg-secondary hover:text-primary"
                >
                  Kalimantan
                </Link>
                <Link to="/sumatera" className="block px-4 py-2 text-text-primary hover:bg-secondary hover:text-primary">
                  Sumatera
                </Link>
              </div>
            </div>

            <NavLink
              to="/calculator"
              className={({ isActive }) =>
                isActive ? "text-primary font-medium" : "text-text-primary hover:text-primary transition-colors"
              }
            >
              Calculator
            </NavLink>
            <NavLink
              to="/about"
              className={({ isActive }) =>
                isActive ? "text-primary font-medium" : "text-text-primary hover:text-primary transition-colors"
              }
            >
              About
            </NavLink>
            <NavLink
              to="/blog"
              className={({ isActive }) =>
                isActive ? "text-primary font-medium" : "text-text-primary hover:text-primary transition-colors"
              }
            >
              Blog
            </NavLink>
            <NavLink
              to="/agent-registration"
              className={({ isActive }) =>
                isActive ? "text-primary font-medium" : "text-text-primary hover:text-primary transition-colors"
              }
            >
              Daftar Agen
            </NavLink>
          </nav>

          {/* CTA Button */}
          <div className="hidden md:block">
          <a
              href="https://wa.me/6285282656556?text=Hai%20SprintCargo,%20saya%20mau%20bertanya%20dong."
              className="inline-flex items-center bg-green-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-green-700 transition-colors"
            >
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" fill="currentColor" viewBox="0 0 24 24" onClick={() => setIsMenuOpen(false)}>
                <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.893 11.892-1.99-.001-3.951-.5-5.688-1.448l-6.305 1.654zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884-.001 2.225.651 3.891 1.746 5.634l-.999 3.648 3.742-.981zm11.387-5.464c-.074-.124-.272-.198-.57-.347-.297-.149-1.758-.868-2.031-.967-.272-.099-.47-.149-.669.149-.198.297-.768.967-.941 1.165-.173.198-.347.223-.644.074-.297-.149-1.255-.462-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.297-.347.446-.521.151-.172.2-.296.3-.495.099-.198.05-.372-.025-.521-.075-.148-.669-1.611-.916-2.206-.242-.579-.487-.501-.669-.51l-.57-.01c-.198 0-.52.074-.792.372s-1.04 1.016-1.04 2.479 1.065 2.876 1.213 3.074c.149.198 2.095 3.2 5.076 4.487.709.306 1.263.489 1.694.626.712.226 1.36.194 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.695.248-1.29.173-1.414z" />
              </svg>
              WhatsApp
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button className="md:hidden text-text-primary" onClick={() => setIsMenuOpen(!isMenuOpen)}>
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden bg-accent">
          <div className="container mx-auto px-4 py-3">
            <nav className="flex flex-col space-y-4">
              <NavLink
                to="/"
                className={({ isActive }) =>
                  isActive ? "text-primary font-medium" : "text-text-primary hover:text-primary transition-colors"
                }
                onClick={() => setIsMenuOpen(false)}
              >
                Home
              </NavLink>
              <div className="space-y-2">
                <div className="text-text-primary font-medium">Services</div>
                <div className="pl-4 space-y-2">
                  <Link
                    to="/barang"
                    className="block text-text-secondary hover:text-primary"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    Pengiriman Barang
                  </Link>
                  <Link
                    to="/mobil"
                    className="block text-text-secondary hover:text-primary"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    Pengiriman Mobil
                  </Link>
                  <Link
                    to="/motor"
                    className="block text-text-secondary hover:text-primary"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    Pengiriman Motor
                  </Link>
                  <Link
                    to="/alatberat"
                    className="block text-text-secondary hover:text-primary"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    Pengiriman Alat Berat
                  </Link>
                </div>
              </div>
              <div className="space-y-2">
                <div className="text-text-primary font-medium">Destinations</div>
                <div className="pl-4 space-y-2">
                  <Link
                    to="/jawa"
                    className="block text-text-secondary hover:text-primary"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    Jawa
                  </Link>
                  <Link
                    to="/bali"
                    className="block text-text-secondary hover:text-primary"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    Bali
                  </Link>
                  <Link
                    to="/kalimantan"
                    className="block text-text-secondary hover:text-primary"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    Kalimantan
                  </Link>
                  <Link
                    to="/sumatera"
                    className="block text-text-secondary hover:text-primary"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    Sumatera
                  </Link>
                </div>
              </div>
              <NavLink
                to="/calculator"
                className={({ isActive }) =>
                  isActive ? "text-primary font-medium" : "text-text-primary hover:text-primary transition-colors"
                }
                onClick={() => setIsMenuOpen(false)}
              >
                Calculator
              </NavLink>
              <NavLink
                to="/about"
                className={({ isActive }) =>
                  isActive ? "text-primary font-medium" : "text-text-primary hover:text-primary transition-colors"
                }
                onClick={() => setIsMenuOpen(false)}
              >
                About
              </NavLink>
              <NavLink
                to="/blog"
                className={({ isActive }) =>
                  isActive ? "text-primary font-medium" : "text-text-primary hover:text-primary transition-colors"
                }
                onClick={() => setIsMenuOpen(false)}
              >
                Blog
              </NavLink>
              <NavLink
              to="/agent-registration"
              className={({ isActive }) =>
                isActive ? "text-primary font-medium" : "text-text-primary hover:text-primary transition-colors"
              }
            >
              Daftar Agen
            </NavLink>
              <a
              href="https://wa.me/6285282656556?text=Hai%20SprintCargo,%20saya%20mau%20bertanya%20dong."
              className="inline-flex items-center bg-green-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-green-700 transition-colors"
            >
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" fill="currentColor" viewBox="0 0 24 24" onClick={() => setIsMenuOpen(false)}>
                <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.893 11.892-1.99-.001-3.951-.5-5.688-1.448l-6.305 1.654zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884-.001 2.225.651 3.891 1.746 5.634l-.999 3.648 3.742-.981zm11.387-5.464c-.074-.124-.272-.198-.57-.347-.297-.149-1.758-.868-2.031-.967-.272-.099-.47-.149-.669.149-.198.297-.768.967-.941 1.165-.173.198-.347.223-.644.074-.297-.149-1.255-.462-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.297-.347.446-.521.151-.172.2-.296.3-.495.099-.198.05-.372-.025-.521-.075-.148-.669-1.611-.916-2.206-.242-.579-.487-.501-.669-.51l-.57-.01c-.198 0-.52.074-.792.372s-1.04 1.016-1.04 2.479 1.065 2.876 1.213 3.074c.149.198 2.095 3.2 5.076 4.487.709.306 1.263.489 1.694.626.712.226 1.36.194 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.695.248-1.29.173-1.414z" />
              </svg>
              WhatsApp
            </a>
            </nav>
          </div>
        </div>
      )}
    </header>
  )
}

export default SiteHeader

