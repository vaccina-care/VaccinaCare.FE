import { Link } from "react-router-dom"
import { Button } from "@/components/ui/button"
import { Phone, Clock, MapPin } from 'lucide-react'

const Header = () => {
  return (
    <header className="w-full">
      {/* Top bar */}
      <div className="container mx-auto px-4 py-4">
        <div className="flex flex-col md:flex-row justify-between items-center gap-4">
          {/* Logo */}
          <Link to="/" className="text-2xl font-bold font-yeseva">
            <span className="tracking-[0.08em]">VACCINA</span>
            <span className="text-blue-500 tracking-[0.08em]">CARE</span>
          </Link>

          {/* Contact Info */}
          <div className="flex flex-wrap justify-center gap-6">
            {/* Emergency */}
            <div className="flex items-center gap-2">
              <div className="w-10 h-10 rounded-full bg-blue-100 flex items-center justify-center">
                <Phone className="w-5 h-5 text-blue-600" />
              </div>
              <div>
                <p className="text-sm font-medium">EMERGENCY</p>
                <p className="text-blue-600">(237) 681-812-255</p>
              </div>
            </div>

            {/* Work Hours */}
            <div className="flex items-center gap-2">
              <div className="w-10 h-10 rounded-full bg-blue-100 flex items-center justify-center">
                <Clock className="w-5 h-5 text-blue-600" />
              </div>
              <div>
                <p className="text-sm font-medium">WORK HOUR</p>
                <p className="text-blue-600">05:00 - 24:00 Every fuking days</p>
              </div>
            </div>

            {/* Location */}
            <div className="flex items-center gap-2">
              <div className="w-10 h-10 rounded-full bg-blue-100 flex items-center justify-center">
                <MapPin className="w-5 h-5 text-blue-600" />
              </div>
              <div>
                <p className="text-sm font-medium">LOCATION</p>
                <p className="text-blue-600">0123 Ho Chi Minh City</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Navigation */}
      <nav className="bg-[#1e1b4b] text-white">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-between items-center py-4">
            <ul className="flex flex-wrap items-center gap-6">
              <li><Link to="/" className="hover:text-blue-300">Home</Link></li>
              <li><Link to="/about" className="hover:text-blue-300">About us</Link></li>
              <li><Link to="/services" className="hover:text-blue-300">Services</Link></li>
              <li><Link to="/contact" className="hover:text-blue-300">Contact</Link></li>
            </ul>
            <Button 
              className="mt-4 md:mt-0 bg-blue-600 hover:bg-blue-700"
              asChild
            >
              <Link to="/Login">Login</Link>
            </Button>
          </div>
        </div>
      </nav>
    </header>
  )
}

export default Header

