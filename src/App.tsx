"use client"

import { lazy, Suspense } from "react"
import { BrowserRouter as Router, Route, Routes, useLocation } from "react-router-dom"
import { AnimatePresence } from "framer-motion"
import { Toaster } from "./components/ui/toaster"
import PageTransition from "./components/PageTransition"
import ProtectedRoute from "./components/ProtectedRoute"
import { AuthProvider } from "@/contexts/AuthContexts"
import Header from "./components/Header"
import Footer from "./components/Footer"

// Lazy load components
const Home = lazy(() => import("./pages/Home"))
const About = lazy(() => import("./pages/About"))
const Appointments = lazy(() => import("./pages/Appointments"))
const Login = lazy(() => import("./pages/Login"))
const Register = lazy(() => import("./pages/Register"))
const NotFound = lazy(() => import("./pages/NotFound"))
const UserDashboard = lazy(() => import("./pages/user/UserDashboard"))
const ChildDashboard = lazy(() => import("./pages/user/ChildDashboard"))
const VaccineList = lazy(() => import("./pages/VaccineList"))
const Notifications = lazy(() => import("./pages/Notifications"))
const VaccineDetail = lazy(() => import("./pages/VaccineDetail"))
const VaccinePackageDetail = lazy(() => import("./pages/VaccinePackageDetail"))
const StaffPage = lazy(() => import("./pages/staff/StaffPage"))
const AdminPage = lazy(() => import("./pages/admin/AdminPage"))
const AppointmentDashboard = lazy(() => import("./pages/user/AppointmentDashboard"))
const PaymentSuccessPage = lazy(() => import("./components/payment/paymentSuccess"))
const PaymentFailPage = lazy(() => import("./components/payment/paymentFail"))
const PolicyPage = lazy(() => import("./pages/Policy"))
const VaccineRecordDashboard = lazy(() => import("./pages/user/VaccineRecordDashboard"))

// Loading fallback component
const LoadingFallback = () => (
	<div className="flex items-center justify-center min-h-screen">
		<div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-blue-500"></div>
	</div>
)

// Define valid routes
const validRoutes = [
	"/",
	"/login",
	"/register",
	"/about",
	"/policies",
	"/appointments",
	"/user-dashboard",
	"/child-dashboard",
	"/notifications",
	"/vaccine-record",
	"/vaccine-list",
	"/vaccine/:id",
	"/vaccine-package/:packageId",
	"/staff",
	"/staff/vaccines",
	"/staff/vaccine-interval-rules",
	"/appointments-dashboard",
	"/admin",
	"/admin/policy-management",
	"/admin/users-management",
	"/admin/admin-dashboard",
	"/admin/rating-management",
]

const isValidRoute = (pathname: string) => {
	return (
		validRoutes.includes(pathname) ||
		/^\/vaccine\/[^/]+$/.test(pathname) ||
		/^\/vaccine-package\/[^/]+$/.test(pathname) ||
		pathname.startsWith("/staff/") ||
		pathname.startsWith("/admin/")
	)
}

const AppContent = () => {
	const location = useLocation()
	const isAuthPage = location.pathname === "/login" || location.pathname === "/register"
	const isValid = isValidRoute(location.pathname)
	const isStaffPage = location.pathname.startsWith("/staff")
	const isAdminPage = location.pathname.startsWith("/admin")
	const showHeaderFooter = isValid && !isAuthPage && !isStaffPage && !isAdminPage

	return (
		<div className="min-h-screen flex flex-col">
			{showHeaderFooter && <Header />}
			<main className={`flex-1 ${isStaffPage || isAdminPage ? "bg-gray-50" : ""}`}>
				<AnimatePresence mode="wait">
					<PageTransition key={location.pathname}>
						<Suspense fallback={<LoadingFallback />}>
							<Routes location={location}>
								{/* Public routes */}
								<Route path="/" element={<Home />} />
								<Route path="/login" element={<Login />} />
								<Route path="/register" element={<Register />} />
								<Route path="/about" element={<About />} />
								<Route path="/vaccine-list" element={<VaccineList />} />
								<Route path="/vaccine/:id" element={<VaccineDetail />} />
								<Route path="/vaccine-package/:packageId" element={<VaccinePackageDetail />} />
								<Route path="/policies" element={<PolicyPage />} />
								<Route path="/payment-success" element={<PaymentSuccessPage />} />
								<Route path="/payment-fail" element={<PaymentFailPage />} />

								{/* TEST */}

								{/* Protected user routes */}
								<Route element={<ProtectedRoute />}>
									<Route path="/user-dashboard" element={<UserDashboard />} />
									<Route path="/child-dashboard" element={<ChildDashboard />} />
									<Route path="/appointments-dashboard" element={<AppointmentDashboard />} />
									<Route path="/notifications" element={<Notifications />} />
									<Route path="/appointments" element={<Appointments />} />
									<Route path="/vaccine-record" element={<VaccineRecordDashboard />} />
								</Route>

								{/* Staff routes */}
								<Route element={<ProtectedRoute staffOnly />}>
									<Route path="/staff/*" element={<StaffPage />} />
								</Route>

								{/* Admin routes */}
								<Route element={<ProtectedRoute adminOnly />}>
									<Route path="/admin/*" element={<AdminPage />} />
								</Route>

								{/* 404 Page */}
								<Route path="*" element={<NotFound />} />
							</Routes>
						</Suspense>
					</PageTransition>
				</AnimatePresence>
			</main>
			{showHeaderFooter && <Footer />}
			<Toaster />
		</div>
	)
}

const App = () => {
	return (
		<AuthProvider>
			<Router>
				<AppContent />
			</Router>
		</AuthProvider>
	)
}

export default App

