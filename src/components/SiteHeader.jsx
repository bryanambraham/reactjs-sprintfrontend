"use client"

import { useState } from "react"
import { Phone, Mail, Facebook, Twitter, Rss, ChevronDown, Menu, X } from "lucide-react"

const SiteHeader = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const [activeDropdown, setActiveDropdown] = useState(null)

  const layananItems = [
    { title: "Jasa Ekspedisi Barang", href: "/Barang" },
    { title: "Jasa Pengiriman Mobil", href: "/Mobil" },
    { title: "Jasa Pengiriman Motor", href: "/Motor" },
    { title: "Jasa Pengiriman Alat Berat", href: "/AlatBerat" },
    { title: "Sewa Truk", href: "/SewaTruk" },
  ]

  const cekOngkirItems = [
    { title: "Ongkir Jakarta Kalimantan", href: "/Kalimantan" },
    { title: "Ongkir Jakarta Sumatera", href: "/Sumatera" },
    { title: "Ongkir Jakarta Bali", href: "/Bali" },
    { title: "Ongkir Jakarta Jawa", href: "/Jawa" },
  ]

  return (
    <header className="w-full relative z-50">
      {/* Top bar */}
      <div className="w-full bg-[#FF6600] text-white py-1">
        <div className="container-responsive flex justify-between items-center text-sm">
          <div className="hidden md:flex items-center gap-4">
            <div className="flex items-center gap-2">
              <Phone className="h-4 w-4" />
              <a href="https://wa.me/6285282656556?text=Hai%20SprintCargo,%20saya%20mau%20bertanya%20dong.">
                +62 852-8265-6556
              </a>
            </div>
            <div className="flex items-center gap-2">
              <Mail className="h-4 w-4" />
              <a href="mailto:marketing@sprintcargo.id">marketing@sprintcargo.id</a>
            </div>
          </div>
          <div className="flex items-center gap-4">
            <a href="#" className="hover:text-gray-200 hide-on-mobile">
              <Facebook className="h-4 w-4" />
            </a>
            <a href="#" className="hover:text-gray-200 hide-on-mobile">
              <Twitter className="h-4 w-4" />
            </a>
            <a href="#" className="hover:text-gray-200 hide-on-mobile">
              <Rss className="h-4 w-4" />
            </a>
          </div>
        </div>
      </div>

      {/* Main navigation */}
      <div className="bg-white shadow-sm">
        <div className="container-responsive py-4">
          <div className="flex justify-between items-center">
            <a href="/" className="flex items-center">
              <img src="/sprintlogo.png" alt="SprintCargo Logo" className="h-12 w-auto" />
            </a>

            {/* Desktop Navigation */}
            <nav className="hidden md:flex items-center gap-6">
              <a href="/" className="text-gray-700 hover:text-[#FF6600]">
                Home
              </a>

              {/* Layanan Dropdown */}
              <div className="relative group">
                <button
                  className="flex items-center gap-1 text-gray-700 hover:text-[#FF6600]"
                  onClick={() => setActiveDropdown(activeDropdown === "layanan" ? null : "layanan")}
                  onMouseEnter={() => setActiveDropdown("layanan")}
                >
                  Layanan
                  <ChevronDown className="h-4 w-4" />
                </button>
                <div
                  className={`absolute top-full left-0 bg-white shadow-lg rounded-md py-2 w-64 ${
                    activeDropdown === "layanan" ? "block" : "hidden"
                  }`}
                  onMouseLeave={() => setActiveDropdown(null)}
                >
                  {layananItems.map((item) => (
                    <a
                      key={item.href}
                      href={item.href}
                      className="block px-4 py-2 text-gray-700 hover:bg-gray-50 hover:text-[#FF6600]"
                    >
                      {item.title}
                    </a>
                  ))}
                </div>
              </div>

              {/* Cek Ongkir Dropdown */}
              <div className="relative group">
                <button
                  className="flex items-center gap-1 text-gray-700 hover:text-[#FF6600]"
                  onClick={() => setActiveDropdown(activeDropdown === "ongkir" ? null : "ongkir")}
                  onMouseEnter={() => setActiveDropdown("ongkir")}
                >
                  Cek Ongkir
                  <ChevronDown className="h-4 w-4" />
                </button>
                <div
                  className={`absolute top-full left-0 bg-white shadow-lg rounded-md py-2 w-64 ${
                    activeDropdown === "ongkir" ? "block" : "hidden"
                  }`}
                  onMouseLeave={() => setActiveDropdown(null)}
                >
                  {cekOngkirItems.map((item) => (
                    <a
                      key={item.href}
                      href={item.href}
                      className="flex flex-row px-4 py-2 text-gray-700 hover:bg-gray-50 hover:text-[#FF6600]"
                    >
                      {item.title}
                    </a>
                  ))}
                </div>
              </div>

              <a href="/About" className="text-gray-700 hover:text-[#FF6600]">
                Tentang Kami
              </a>
              <a href="/Blog" className="text-gray-700 hover:text-[#FF6600]">
                Blog
              </a>
              <a href="/Promo" className="text-gray-700 hover:text-[#FF6600]">
                Promo
              </a>
            </nav>

            {/* Mobile Menu Button */}
            <button className="md:hidden p-2" onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}>
              {isMobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>

          {/* Mobile Navigation */}
          {isMobileMenuOpen && (
            <nav className="md:hidden mt-4 py-4 border-t">
              <div className="flex flex-col gap-4">
                <a href="/" className="text-gray-700 hover:text-[#FF6600]">
                  Home
                </a>

                {/* Mobile Layanan */}
                <div className="space-y-2">
                  <button
                    className="flex items-center justify-between w-full text-gray-700 hover:text-[#FF6600]"
                    onClick={() => setActiveDropdown(activeDropdown === "layanan-mobile" ? null : "layanan-mobile")}
                  >
                    Layanan
                    <ChevronDown className="h-4 w-4" />
                  </button>
                  {activeDropdown === "layanan-mobile" && (
                    <div className="pl-4 space-y-2">
                      {layananItems.map((item) => (
                        <a key={item.href} href={item.href} className="block text-gray-600 hover:text-[#FF6600]">
                          {item.title}
                        </a>
                      ))}
                    </div>
                  )}
                </div>

                {/* Mobile Cek Ongkir */}
                <div className="space-y-2">
                  <button
                    className="flex items-center justify-between w-full text-gray-700 hover:text-[#FF6600]"
                    onClick={() => setActiveDropdown(activeDropdown === "ongkir-mobile" ? null : "ongkir-mobile")}
                  >
                    Cek Ongkir
                    <ChevronDown className="h-4 w-4" />
                  </button>
                  {activeDropdown === "ongkir-mobile" && (
                    <div className="pl-4 space-y-2">
                      {cekOngkirItems.map((item) => (
                        <a key={item.href} href={item.href} className="block text-gray-600 hover:text-[#FF6600]">
                          {item.title}
                        </a>
                      ))}
                    </div>
                  )}
                </div>

                <a href="/About" className="text-gray-700 hover:text-[#FF6600]">
                  Tentang Kami
                </a>
                <a href="/Blog" className="text-gray-700 hover:text-[#FF6600]">
                  Blog
                </a>
                <a href="/Promo" className="text-gray-700 hover:text-[#FF6600]">
                  Promo
                </a>
              </div>
            </nav>
          )}
        </div>
      </div>
    </header>
  )
}

export default SiteHeader

