import type React from "react"
import { BrowserRouter as Router, Route, Routes, useLocation } from "react-router-dom"
import { AnimatePresence } from "framer-motion"
import Header from "./components/Header"
import Home from "./pages/Home"
import About from "./pages/About"
import Appointments from "./pages/Appointments"
import Login from "./pages/Login"
import Register from "./pages/Register"
import Footer from "./components/Footer"
import { Toaster } from "./components/ui/toaster"
import PageTransition from "./components/PageTransition"
import NotFound from "./pages/NotFound"
import ProtectedRoute from "./components/ProtectedRoute"
import { AuthProvider } from "@/contexts/AuthContexts"
import UserDashboard from "./pages/UserDashboard"
import ChildDashboard from "./pages/ChildDashboard"
import VaccineList from "./pages/VaccineList"
import Notifications from "./pages/Notifications"
import VaccinePackagesLayout from "./pages/packageVaccineLayout"
import VaccineDetail from "./pages/VaccineDetail"

// Define valid routes
const validRoutes = [
	"/",
	"/login",
	"/register",
	"/about",
	"/appointments",
	"/user-dashboard",
	"/child-dashboard",
	"/notifications",
	"/vaccines",
	"/vaccine/:id",
	"/package-vaccines"
]

const isValidRoute = (pathname: string) => {
	return validRoutes.includes(pathname) || /^\/vaccine\/[^/]+$/.test(pathname)
  }

const AppContent: React.FC = () => {
	const location = useLocation()
	const isAuthPage = location.pathname === "/login" || location.pathname === "/register"
	const isValid = isValidRoute(location.pathname)
	const showHeaderFooter = isValid && !isAuthPage

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
							<Route path="/vaccines" element={<VaccineList />} />
							<Route path="/vaccine/:id" element={<VaccineDetail />} />
							<Route path="/package-vaccines" element={<VaccinePackagesLayout />} />
							
							{/* Protected routes */}
							<Route
								path="/user-dashboard"
								element={
									<ProtectedRoute>
										<UserDashboard />
									</ProtectedRoute>
								}
							/>
							<Route
								path="/child-dashboard"
								element={
									<ProtectedRoute>
										<ChildDashboard />
									</ProtectedRoute>
								}
							/>
							<Route
								path="/notifications"
								element={
									<ProtectedRoute>
										<Notifications />
									</ProtectedRoute>
								}
							/>
							<Route
								path="/appointments"
								element={
									<ProtectedRoute>
										<Appointments />
									</ProtectedRoute>
								}
							/>


							{/* 404 Page*/}
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
		<AuthProvider>
			<Router>
				<AppContent />
			</Router>
		</AuthProvider>
	)
}

export default App

