import { Link } from "react-router-dom"
import { Truck, Mail, Phone, MapPin, Facebook, Twitter, Instagram, Linkedin } from "lucide-react"

export function SiteFooter() {
  return (
    <footer className="bg-secondary-dark text-text-primary">
      <div className="container mx-auto px-4 md:px-20 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div>
            <div className="flex items-center space-x-2 mb-4">
              <Truck size={28} className="text-primary" />
              <span className="text-text-primary font-bold text-xl">SprintCargo</span>
            </div>
            <p className="text-text-secondary mb-4">
              Providing reliable logistics and shipping services across Indonesia since 2010.
            </p>
            <div className="space-y-2">
              <div className="flex items-start">
                <MapPin size={18} className="text-primary mr-2 mt-1 flex-shrink-0" />
                <a href="https://www.google.com/maps?q=Jl+Pasar+Kebayoran+Lama+No+20,+Kebayoran+Lama,+Jakarta+Selatan,+Daerah+Khusus+Ibukota+Jakarta+12230" target="_blank" rel="noopener noreferrer" className="hover:text-[#DE1F26]">
                  <span className="text-text-secondary">
                    Jl Pasar Kebayoran Lama No 20, <br /> Kebayoran Lama, Jakarta Selatan, <br /> Daerah Khusus Ibukota Jakarta 12230
                  </span>
                </a>
              </div>
              <div className="flex items-center">
                <Phone size={18} className="text-primary mr-2 flex-shrink-0" />
                <a href="https://wa.me/6285282656556?text=Hai%20SprintCargo,%20saya%20mau%20bertanya%20dong.">
                <span className="text-text-secondary">+62 852-8265-6556</span></a>
              </div>
              <div className="flex items-center">
                <Mail size={18} className="text-primary mr-2 flex-shrink-0" />
                <a href="mailto:marketing@sprintcargo.id" className="text-gray-600 hover:underline hover:text-[#DE1F26]">
                  <span className="text-text-secondary">marketing@sprintcargo.id</span>
                </a>
              </div>
              <div className="flex items-center">
                <Mail size={18} className="text-primary mr-2 flex-shrink-0" />
                <a href="mailto:cs@sprintcargo.id" className="text-gray-600 hover:underline hover:text-[#DE1F26]">
                  <span className="text-text-secondary">cs@sprintcargo.id</span>
                </a>
              </div>
            </div>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Our Services</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/barang" className="text-text-secondary hover:text-primary transition-colors"
                onClick={() => setIsMenuOpen(false)}>
                  Pengiriman Barang
                </Link>
              </li>
              <li>
                <Link to="/mobil" className="text-text-secondary hover:text-primary transition-colors"
                onClick={() => setIsMenuOpen(false)}>
                  Pengiriman Mobil
                </Link>
              </li>
              <li>
                <Link to="/motor" className="text-text-secondary hover:text-primary transition-colors"
                onClick={() => setIsMenuOpen(false)}>
                  Pengiriman Motor
                </Link>
              </li>
              <li>
                <Link to="/alatberat" className="text-text-secondary hover:text-primary transition-colors"
                onClick={() => setIsMenuOpen(false)}>
                  Pengiriman Alat Berat
                </Link>
              </li>
              <li>
                <Link to="/calculator" className="text-text-secondary hover:text-primary transition-colors"
                onClick={() => setIsMenuOpen(false)}>
                  Calculator Cargo
                </Link>
              </li>
            </ul>
          </div>

          {/* Destinations */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Destinations</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/papua" className="text-text-secondary hover:text-primary transition-colors"
                onClick={() => setIsMenuOpen(false)}>
                  Papua
                </Link>
              </li>
              <li>
                <Link to="/ntb" className="text-text-secondary hover:text-primary transition-colors"
                onClick={() => setIsMenuOpen(false)}>
                  Nusa Tenggara Barat
                </Link>
              </li>
              <li>
                <Link to="/ntt" className="text-text-secondary hover:text-primary transition-colors"
                onClick={() => setIsMenuOpen(false)}>
                  Nusa Tenggara Timur
                </Link>
              </li>
              <li>
                <Link to="/maluku" className="text-text-secondary hover:text-primary transition-colors"
                onClick={() => setIsMenuOpen(false)}>
                  Maluku
                </Link>
              </li>
              <li>
              </li>
            </ul>
          </div>

          {/* Connect */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Connect With Us</h3>
            <div className="flex space-x-4 mb-6">
              <a href="#" className="text-text-secondary hover:text-primary transition-colors">
                <Facebook size={20} />
              </a>
              <a href="#" className="text-text-secondary hover:text-primary transition-colors">
                <Twitter size={20} />
              </a>
              <a href="https://www.instagram.com/sprintcargo.id?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw==" className="text-text-secondary hover:text-primary transition-colors">
                <Instagram size={20} />
              </a>
              <a href="#" className="text-text-secondary hover:text-primary transition-colors">
                <Linkedin size={20} />
              </a>
            </div>
            {/* <h3 className="text-lg font-semibold mb-4">Newsletter</h3>
            <form className="space-y-2">
              <input
                type="email"
                placeholder="Your email address"
                className="w-full px-3 py-2 bg-accent text-text-primary rounded-md focus:outline-none focus:ring-2 focus:ring-primary"
              />
              <button
                type="submit"
                className="w-full bg-primary hover:bg-primary-dark text-white font-medium py-2 px-4 rounded-md transition-colors"
              >
                Subscribe
              </button>
            </form> */}
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="bg-black py-4">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-text-secondary text-sm mb-2 md:mb-0">
              &copy; {new Date().getFullYear()} SprintCargo. All rights reserved.
            </p>
            <div className="flex space-x-4">
              <Link to="/#" className="text-text-secondary hover:text-primary text-sm transition-colors"
              onClick={() => setIsMenuOpen(false)}>
                Privacy Policy
              </Link>
              <Link to="/#" className="text-text-secondary hover:text-primary text-sm transition-colors"
              onClick={() => setIsMenuOpen(false)}>
                Terms of Service
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default SiteFooter

