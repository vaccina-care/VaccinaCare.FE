import { Link } from "react-router-dom"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { Facebook, Instagram, Linkedin, Send } from 'lucide-react'

const Footer = () => {
  return (
    <footer className="bg-[#1e1b4b] text-white">
      <div className="container mx-auto px-4 py-12">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Logo and Description */}
          <div className="space-y-4">
            <Link to="/" className="text-2xl font-bold font-yeseva">
              <span className="tracking-[0.08em]">VACCINA</span>
              <span className="text-blue-300 tracking-[0.08em]">CARE</span>
            </Link>
            <p className="text-gray-300">
              Leading the Way in Childhood Health, Trusted Care for Growing Futures.
            </p>
          </div>

          {/* Important Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Important Links</h3>
            <ul className="space-y-2">
              <li><Link to="/appointment" className="text-gray-300 hover:text-blue-300">Appointment</Link></li>
              <li><Link to="/doctors" className="text-gray-300 hover:text-blue-300">Doctors</Link></li>
              <li><Link to="/services" className="text-gray-300 hover:text-blue-300">Services</Link></li>
              <li><Link to="/about" className="text-gray-300 hover:text-blue-300">About Us</Link></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Contact Us</h3>
            <ul className="space-y-2">
              <li>Call: (237) 681-812-255</li>
              <li>Email: skibidi@gmail.com</li>
              <li>Address: 0123 Some place</li>
              <li>Country: Viet Nam</li>
            </ul>
          </div>

          {/* Newsletter */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Newsletter</h3>
            <div className="flex gap-2">
              <Input 
                type="email" 
                placeholder="Enter your email address"
                className="bg-white/10 border-white/20"
              />
              <Button size="icon" className="bg-blue-600 hover:bg-blue-700">
                <Send className="h-4 w-4" />
              </Button>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-12 pt-8 border-t border-white/10">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-sm text-gray-300">
              © 2024 Hospital's name All Rights Reserved by PNTEC-LTD
            </p>
            {/* Social Links */}
            <div className="flex gap-4">
              <a href="#" className="hover:text-blue-300">
                <Linkedin className="h-5 w-5" />
              </a>
              <a href="#" className="hover:text-blue-300">
                <Facebook className="h-5 w-5" />
              </a>
              <a href="#" className="hover:text-blue-300">
                <Instagram className="h-5 w-5" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer

