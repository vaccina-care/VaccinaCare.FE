"use client"

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
import VaccineDetail from "./pages/VaccineDetail"
import VaccinePackageDetail from "./pages/VaccinePackageDetail"
import Feedback from "./pages/Feedback"
import StaffPage from "./pages/staff/StaffPage"
import AppointmentDashboard from "./pages/AppointmentDashboard"

//demo-page
import PaymentSuccessPage from "./components/payment/paymentSuccess"
import PaymentFailPage from "./components/payment/paymentFail"

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
	"/vaccine-list",
	"/vaccine/:id",
	"/vaccine-package/:packageId",
	"/feedback",
	"/staff",
	"/staff/vaccines",
	"/staff/vaccine-interval-rules",
	"/appointments-dashboard", // Add the new route
]

const isValidRoute = (pathname: string) => {
	return (
		validRoutes.includes(pathname) ||
		/^\/vaccine\/[^/]+$/.test(pathname) ||
		/^\/vaccine-package\/[^/]+$/.test(pathname) ||
		pathname.startsWith("/staff/")
	)
}

const AppContent: React.FC = () => {
	const location = useLocation()
	const isAuthPage = location.pathname === "/login" || location.pathname === "/register"
	const isValid = isValidRoute(location.pathname)
	const isStaffPage = location.pathname.startsWith("/staff")
	const showHeaderFooter = isValid && !isAuthPage && !isStaffPage

	return (
		<div className="min-h-screen flex flex-col">
			{showHeaderFooter && <Header />}
			<main className={`flex-1 ${isStaffPage ? "bg-gray-50" : ""}`}>
				<AnimatePresence mode="wait">
					<PageTransition key={location.pathname}>
						<Routes location={location}>
							{/* Public routes */}
							<Route path="/" element={<Home />} />
							<Route path="/login" element={<Login />} />
							<Route path="/register" element={<Register />} />
							<Route path="/about" element={<About />} />
							<Route path="/vaccine-list" element={<VaccineList />} />
							<Route path="/vaccine/:id" element={<VaccineDetail />} />
							<Route path="/vaccine-package/:packageId" element={<VaccinePackageDetail />} />

							{/* TEST */}
							<Route path="/feedback" element={<Feedback />} />
							<Route path="/payment-success" element={<PaymentSuccessPage />} />
							<Route path="/payment-fail" element={<PaymentFailPage />} />

							{/* Protected user routes */}
							<Route element={<ProtectedRoute />}>
								<Route path="/user-dashboard" element={<UserDashboard />} />
								<Route path="/child-dashboard" element={<ChildDashboard />} />
								<Route path="/appointments-dashboard" element={<AppointmentDashboard />} />
								<Route path="/notifications" element={<Notifications />} />
								<Route path="/appointments" element={<Appointments />} />
							</Route>

							{/* Staff routes */}
							<Route element={<ProtectedRoute staffOnly />}>
								<Route path="/staff/*" element={<StaffPage />} />
							</Route>

							{/* 404 Page */}
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

