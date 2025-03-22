import { Link } from "react-router-dom"
import { Truck, Mail, Phone, MapPin, Facebook, Twitter, Instagram, Linkedin } from "lucide-react"

export function SiteFooter() {
  return (
    <footer className="bg-secondary-dark text-text-primary">
      <div className="container mx-auto px-4 py-12">
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
                <span className="text-text-secondary">
                  Jalan Kangkung Nomor 4, Cipulir, Kebayoran Lama, Jakarta Selatan
                </span>
              </div>
              <div className="flex items-center">
                <Phone size={18} className="text-primary mr-2 flex-shrink-0" />
                <span className="text-text-secondary">(021) 27092288</span>
              </div>
              <div className="flex items-center">
                <Mail size={18} className="text-primary mr-2 flex-shrink-0" />
                <span className="text-text-secondary">info@sprintcargo.id</span>
              </div>
            </div>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Our Services</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/barang" className="text-text-secondary hover:text-primary transition-colors">
                  Pengiriman Barang
                </Link>
              </li>
              <li>
                <Link to="/mobil" className="text-text-secondary hover:text-primary transition-colors">
                  Pengiriman Mobil
                </Link>
              </li>
              <li>
                <Link to="/motor" className="text-text-secondary hover:text-primary transition-colors">
                  Pengiriman Motor
                </Link>
              </li>
              <li>
                <Link to="/alatberat" className="text-text-secondary hover:text-primary transition-colors">
                  Pengiriman Alat Berat
                </Link>
              </li>
              <li>
                <Link to="/calculator" className="text-text-secondary hover:text-primary transition-colors">
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
                <Link to="/jawa" className="text-text-secondary hover:text-primary transition-colors">
                  Jawa
                </Link>
              </li>
              <li>
                <Link to="/bali" className="text-text-secondary hover:text-primary transition-colors">
                  Bali
                </Link>
              </li>
              <li>
                <Link to="/kalimantan" className="text-text-secondary hover:text-primary transition-colors">
                  Kalimantan
                </Link>
              </li>
              <li>
                <Link to="/maluku" className="text-text-secondary hover:text-primary transition-colors">
                  Maluku
                </Link>
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
              <a href="#" className="text-text-secondary hover:text-primary transition-colors">
                <Instagram size={20} />
              </a>
              <a href="#" className="text-text-secondary hover:text-primary transition-colors">
                <Linkedin size={20} />
              </a>
            </div>
            <h3 className="text-lg font-semibold mb-4">Newsletter</h3>
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
            </form>
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
              <Link to="/privacy" className="text-text-secondary hover:text-primary text-sm transition-colors">
                Privacy Policy
              </Link>
              <Link to="/terms" className="text-text-secondary hover:text-primary text-sm transition-colors">
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

