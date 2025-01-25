import React from 'react'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import Header from './components/Header'
import Home from './pages/Home'
import About from './pages/About'
import Services from './pages/Services'
import Appointments from './pages/Appointments'
import Children from './pages/Children'
import Dashboard from './pages/Dashboard'
import Login from './pages/Login'
import Register from './pages/Register'
import Footer from './components/Footer'
import { Toaster } from './components/ui/toaster'

const App: React.FC = () => {
  return (
    <Router>
      <div>
      <Header />
        <main className="flex-1">
            <Routes>
              <Route path="/login" element={<Login />} />
              <Route path="/register" element={<Register />} />
              <Route path="/" element={<Home />} />
              <Route path="/about" element={<About />} />
              <Route path="/services" element={<Services />} />
              <Route path="/appointments" element={<Appointments />} />
              <Route path="/children" element={<Children />} />
              <Route path="/dashboard" element={<Dashboard />} />
            </Routes>
        </main>
        <Toaster/>
        <Footer />  
      </div>
    </Router>
  )
}

export default App

