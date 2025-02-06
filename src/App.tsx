import type React from "react"
import { BrowserRouter as Router, Route, Routes, useLocation } from "react-router-dom"
import { AnimatePresence } from "framer-motion"
import Header from "./components/Header"
import Home from "./pages/Home"
import About from "./pages/About"
import Services from "./pages/Services"
import Appointments from "./pages/Appointments"
import Login from "./pages/Login"
import Register from "./pages/Register"
import Footer from "./components/Footer"
import { Toaster } from "./components/ui/toaster"
import UserDashboard from "./pages/UserDashboard"
import PageTransition from "./components/PageTransition"
import NotFound from "./pages/NotFound"
import VaccineList from "./pages/VaccineList"

// Define valid routes
const validRoutes = ["/", "/login", "/register", "/about", "/services", "/appointments", "/user-dashboard", "/vaccines"]

const AppContent: React.FC = () => {
  const location = useLocation()

  // Check if current path is a valid route
  const isValidRoute = validRoutes.includes(location.pathname)

  // Pages that shouldn't show header/footer
  const isAuthPage = location.pathname === "/login" || location.pathname === "/register"

  // Show header/footer only if it's a valid route and not an auth page
  const showHeaderFooter = isValidRoute && !isAuthPage

  return (
    <div className="min-h-screen flex flex-col">
      {showHeaderFooter && <Header />}
      <main className="flex-1">
        <AnimatePresence mode="wait">
          <PageTransition key={location.pathname}>
            <Routes location={location}>
              <Route path="/login" element={<Login />} />
              <Route path="/register" element={<Register />} />
              <Route path="/" element={<Home />} />
              <Route path="/about" element={<About />} />
              <Route path="/services" element={<Services />} />
              <Route path="/appointments" element={<Appointments />} />
              <Route path="/user-dashboard/*" element={<UserDashboard />} />
              <Route path="/vaccines" element={<VaccineList />} />
              <Route path="*" element={<NotFound />} />
            </Routes>
          </PageTransition>
        </AnimatePresence>
      </main>
      {showHeaderFooter && <Footer />}
      <Toaster />
    </div>
  )
}

const App: React.FC = () => {
  return (
    <Router>
      <AppContent />
    </Router>
  )
}

export default App

