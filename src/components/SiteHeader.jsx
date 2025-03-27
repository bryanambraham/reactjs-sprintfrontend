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
      <div className="container mx-auto px-4 py-3">
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
          </nav>

          {/* CTA Button */}
          <div className="hidden md:block">
            <a
              href="https://wa.me/6285282656556?text=Hai%20SprintCargo,%20saya%20mau%20bertanya%20dong."
              className="bg-primary hover:bg-primary-dark text-white font-medium py-2 px-4 rounded-md transition-colors"
            >
              Kontak Kami
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
              <a
                href="https://wa.me/6285282656556?text=Hai%20SprintCargo,%20saya%20mau%20bertanya%20dong."
                className="bg-primary hover:bg-primary-dark text-white font-medium py-2 px-4 rounded-md transition-colors inline-block w-full text-center"
                onClick={() => setIsMenuOpen(false)}
              >
                Kontak Kami
              </a>
            </nav>
          </div>
        </div>
      )}
    </header>
  )
}

export default SiteHeader

