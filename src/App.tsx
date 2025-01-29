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

const AppContent: React.FC = () => {
  const location = useLocation()
  const isAuthPage = location.pathname === "/login" || location.pathname === "/register"

  return (
    <div className="min-h-screen flex flex-col">
      {!isAuthPage && <Header />}
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
              <Route path="/user-dashboard" element={<UserDashboard />} />
            </Routes>
          </PageTransition>
        </AnimatePresence>
      </main>
      {!isAuthPage && <Footer />}
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

