/* eslint-disable @typescript-eslint/no-unused-vars */
"use client"

import { useState, useEffect, useCallback } from "react"
import { Link, useNavigate, useLocation } from "react-router-dom"
import { Button } from "@/components/ui/button"
import {
	Phone,
	Clock,
	MapPin,
	LogOut,
	User,
	Bell,
	NotepadText,
	HelpCircle,
	Mail,
	UserCircle,
	Calendar,
	Loader2,
	CheckCircle2,
} from "lucide-react"
import { useAuthContext } from "@/contexts/AuthContexts"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover"
import { Badge } from "@/components/ui/badge"
import { Separator } from "@/components/ui/separator"
import { ScrollArea } from "@/components/ui/scroll-area"
import { getUserNotifications, type Notification } from "@/api/notification"
import { format, parseISO } from "date-fns"

import avtImage from "@/assets/images/aba.png"

const Header = () => {
	const { isAuthenticated, logout, user } = useAuthContext()
	const navigate = useNavigate()
	const location = useLocation()

	const [notifications, setNotifications] = useState<Notification[]>([])
	const [isLoadingNotifications, setIsLoadingNotifications] = useState(false)
	const [notificationError, setNotificationError] = useState<string | null>(null)

	// Function to fetch notifications
	const fetchNotifications = useCallback(async () => {
		if (!isAuthenticated) return

		try {
			setIsLoadingNotifications(true)
			const response = await getUserNotifications()
			if (response.isSuccess) {
				setNotifications(response.data)
			} else {
				setNotificationError(response.message || "Failed to fetch notifications")
			}
		} catch (error) {
			console.error("Error fetching notifications:", error)
			setNotificationError("An error occurred while fetching notifications")
		} finally {
			setIsLoadingNotifications(false)
		}
	}, [isAuthenticated])

	// Fetch notifications on initial load and when authentication state changes
	useEffect(() => {
		fetchNotifications()
	}, [fetchNotifications])

	// Refresh notifications when specific paths are visited
	useEffect(() => {
		// Route that will trigger a notification refresh
		const refreshPaths = [
			"/appointments", 
			"/payment-success",
			"/child-dashboard",
		]

		if (refreshPaths.some((path) => location.pathname.includes(path))) {
			fetchNotifications()
		}

		// Add event listener for child added event
		const handleChildAdded = () => {
			fetchNotifications()
		}

		// Register event listener
		window.addEventListener("child-added", handleChildAdded)

		// Clean up event listener
		return () => {
			window.removeEventListener("child-added", handleChildAdded)
		}
	}, [location.pathname, fetchNotifications])

	const handleLogout = () => {
		console.log("Header: Logout button clicked")
		logout()

		// Force navigation to home page after logout
		navigate("/", { replace: true })
	}

	// Format notification date
	const formatNotificationDate = (dateString: string) => {
		try {
			const date = parseISO(dateString)
			const now = new Date()

			// If it's today, just show the time
			if (date.toDateString() === now.toDateString()) {
				return format(date, "h:mm a")
			}

			// If it's within the last 7 days, show the day name
			const sevenDaysAgo = new Date(now)
			sevenDaysAgo.setDate(now.getDate() - 7)
			if (date > sevenDaysAgo) {
				return format(date, "EEEE, h:mm a")
			}

			// Otherwise show the full date
			return format(date, "MMM d, yyyy")
		} catch (error) {
			return dateString
		}
	}

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
								<p className="text-blue-600">07:00 - 18:00 Everyday</p>
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
							<li>
								<Link to="/" className="hover:text-blue-300">
									Home
								</Link>
							</li>
							<li>
								<Link to="/about" className="hover:text-blue-300 ">
									About us
								</Link>
							</li>
							<li>
								<Link to="/vaccine-list" className="hover:text-blue-300">
									Vaccine List
								</Link>
							</li>
							<li>
								<Link to="/policies" className="hover:text-blue-300">
									Policies
								</Link>
							</li>
						</ul>
						{isAuthenticated ? (
							<div className="flex items-center gap-4 mt-4 md:mt-0">
								{/* Staff Contact Info Popup */}
								<Popover>
									<PopoverTrigger asChild>
										<Button
											variant="ghost"
											size="icon"
											className="text-white bg-blue-600/20 hover:bg-blue-500/30 transition-colors rounded-full w-10 h-10"
										>
											<HelpCircle className="h-5 w-5" />
										</Button>
									</PopoverTrigger>
									<PopoverContent className="w-80 p-0">
										<div className="bg-[#1e1b4b] text-white p-3 rounded-t-md">
											<h3 className="font-semibold text-lg">Contact Our Staff</h3>
											<p className="text-sm text-blue-200">We're here to help you</p>
										</div>
										<div className="p-4 space-y-4">
											<div className="flex items-start gap-3">
												<Phone className="h-5 w-5 text-[#1e1b4b] mt-0.5" />
												<div>
													<p className="font-medium">Customer Support</p>
													<p className="text-sm text-gray-600">+84 123 456 789</p>
													<p className="text-sm text-gray-600">Available 24/7</p>
												</div>
											</div>

											<Separator />

											<div className="flex items-start gap-3">
												<Mail className="h-5 w-5 text-[#1e1b4b] mt-0.5" />
												<div>
													<p className="font-medium">Email Support</p>
													<p className="text-sm text-gray-600">support@vaccinacare.com</p>
													<p className="text-sm text-gray-600">Response within 24 hours</p>
												</div>
											</div>

											<Separator />

											<div className="flex items-start gap-3">
												<UserCircle className="h-5 w-5 text-[#1e1b4b] mt-0.5" />
												<div>
													<p className="font-medium">Medical Consultation</p>
													<p className="text-sm text-gray-600">Dr. Nguyen Van A</p>
													<p className="text-sm text-gray-600">+84 987 654 321</p>
												</div>
											</div>

											<Button className="w-full bg-[#1e1b4b] hover:bg-[#1e1b4b]/90 mt-2">
												<Link to="/about" className="w-full">
													Contact Us
												</Link>
											</Button>
										</div>
									</PopoverContent>
								</Popover>

								{/* Appointment transfer button */}
								<Button
									asChild
									className="bg-blue-600 hover:bg-blue-700 text-white font-medium px-6 py-2 rounded-md shadow-md transition-all"
								>
									<Link to="/appointments">Booking Appointment</Link>
								</Button>

								{/* Notification Bell with Popover */}
								<Popover>
									<PopoverTrigger asChild>
										<Button
											variant="ghost"
											size="icon"
											className="text-white bg-blue-600/20 hover:bg-blue-500/30 transition-colors rounded-full w-10 h-10 relative"
										>
											<Bell className="h-5 w-5" />
											{notifications.length > 0 && (
												<Badge className="absolute -top-2 -right-2 h-5 w-5 flex items-center justify-center rounded-full bg-red-500 text-white text-xs p-0 border-2 border-[#1e1b4b]">
													{notifications.length > 99 ? "99+" : notifications.length}
												</Badge>
											)}
										</Button>
									</PopoverTrigger>
									<PopoverContent className="w-80 p-0 max-h-[70vh] flex flex-col">
										<div className="bg-[#1e1b4b] text-white p-3 rounded-t-md flex justify-between items-center">
											<div>
												<h3 className="font-semibold text-lg">Notifications</h3>
												<p className="text-sm text-blue-200">{notifications.length} notifications</p>
											</div>
											<Link to="/notifications">
												<Button variant="ghost" size="sm" className="text-white hover:bg-blue-700/50">
													View All
												</Button>
											</Link>
										</div>

										{isLoadingNotifications ? (
											<div className="flex justify-center items-center p-6">
												<Loader2 className="h-6 w-6 animate-spin text-blue-600" />
											</div>
										) : notificationError ? (
											<div className="p-4 text-center text-red-500">
												<p>{notificationError}</p>
											</div>
										) : notifications.length === 0 ? (
											<div className="p-6 text-center text-gray-500">
												<p>No notifications</p>
											</div>
										) : (
											<ScrollArea className="flex-1 max-h-[400px]">
												<div className="p-2">
													{notifications.slice(0, 5).map((notification) => (
														<div
															key={notification.id}
															className="p-3 hover:bg-gray-50 rounded-md transition-colors cursor-pointer border-b border-gray-100 last:border-0"
															onClick={() => {
																// If notification has appointmentId, navigate to appointment details
																if (notification.appointmentId) {
																	navigate(`/appointments/${notification.appointmentId}`)
																} else {
																	// Otherwise navigate to notifications page
																	navigate("/notifications")
																}
															}}
														>
															<div className="flex gap-3">
																<div className="mt-1 flex-shrink-0">
																	{notification.title.includes("Appointment") ? (
																		<Calendar className="h-5 w-5 text-blue-500" />
																	) : notification.title.includes("Payment") ? (
																		<CheckCircle2 className="h-5 w-5 text-green-500" />
																	) : notification.title.includes("Child") ? (
																		<User className="h-5 w-5 text-purple-500" />
																	) : (
																		<Bell className="h-5 w-5 text-gray-500" />
																	)}
																</div>
																<div className="flex-1">
																	<h4 className="text-sm font-medium line-clamp-1">{notification.title}</h4>
																	<p className="text-xs text-gray-600 line-clamp-2 mt-1">{notification.content}</p>
																	<p className="text-xs text-gray-400 mt-1">
																		{formatNotificationDate(notification.createdAt)}
																	</p>
																</div>
															</div>
														</div>
													))}

													{notifications.length > 5 && (
														<div className="p-2 text-center">
															<Link to="/notifications">
																<Button
																	variant="ghost"
																	size="sm"
																	className="text-blue-600 hover:text-blue-800 hover:bg-blue-50"
																>
																	View {notifications.length - 5} more notifications
																</Button>
															</Link>
														</div>
													)}
												</div>
											</ScrollArea>
										)}
									</PopoverContent>
								</Popover>

								{/* User Avatar */}
								<Popover>
									<PopoverTrigger asChild>
										<Button
											variant="ghost"
											className="relative rounded-full p-0 h-10 w-10 border-2 border-blue-400 hover:border-blue-300 transition-all"
										>
											<Avatar className="h-full w-full">
												<AvatarImage src={user?.imageUrl || avtImage} alt="Avatar" />
												<AvatarFallback className="bg-blue-600">
													<User className="h-4 w-4 text-white" />
												</AvatarFallback>
											</Avatar>
										</Button>
									</PopoverTrigger>
									<PopoverContent className="w-56 p-2">
										<div className="flex flex-col space-y-1">
											<div className="px-2 py-1.5 mb-1 border-b">
												<p className="font-medium text-sm">{user?.fullName || "User"}</p>
												<p className="text-xs text-gray-500 truncate">{user?.email || "user@example.com"}</p>
											</div>
											<Button
												variant="ghost"
												className="flex items-center justify-start px-2 py-1.5 text-sm hover:bg-blue-50 hover:text-blue-700"
											>
												<NotepadText className="mr-2 h-4 w-4" />
												<Link to="/user-dashboard" className="w-full text-left">
													Dashboard
												</Link>
											</Button>
											<Button
												variant="ghost"
												className="flex items-center justify-start px-2 py-1.5 text-sm hover:bg-blue-50 hover:text-blue-700"
											>
												<Calendar className="mr-2 h-4 w-4" />
												<Link to="/appointments-dashboard" className="w-full text-left">
													Appointments
												</Link>
											</Button>
											<Separator className="my-1" />
											<Button
												variant="ghost"
												className="flex items-center justify-start px-2 py-1.5 text-sm hover:bg-red-50 hover:text-red-600"
												onClick={handleLogout}
											>
												<LogOut className="mr-2 h-4 w-4" />
												<span>Log out</span>
											</Button>
										</div>
									</PopoverContent>
								</Popover>
							</div>
						) : (
							<div className="flex items-center gap-4 mt-4 md:mt-0">
								{/* Staff Contact Info Popup (also available for non-authenticated users) */}
								<Popover>
									<PopoverTrigger asChild>
										<Button
											variant="ghost"
											size="icon"
											className="text-white bg-blue-600/20 hover:bg-blue-500/30 transition-colors rounded-full w-10 h-10"
										>
											<HelpCircle className="h-5 w-5" />
										</Button>
									</PopoverTrigger>
									<PopoverContent className="w-80 p-0">
										<div className="bg-[#1e1b4b] text-white p-3 rounded-t-md">
											<h3 className="font-semibold text-lg">Contact Our Staff</h3>
											<p className="text-sm text-blue-200">We're here to help you</p>
										</div>
										<div className="p-4 space-y-4">
											<div className="flex items-start gap-3">
												<Phone className="h-5 w-5 text-[#1e1b4b] mt-0.5" />
												<div>
													<p className="font-medium">Customer Support</p>
													<p className="text-sm text-gray-600">+84 123 456 789</p>
													<p className="text-sm text-gray-600">Available 24/7</p>
												</div>
											</div>

											<Separator />

											<div className="flex items-start gap-3">
												<Mail className="h-5 w-5 text-[#1e1b4b] mt-0.5" />
												<div>
													<p className="font-medium">Email Support</p>
													<p className="text-sm text-gray-600">support@vaccinacare.com</p>
													<p className="text-sm text-gray-600">Response within 24 hours</p>
												</div>
											</div>

											<Separator />

											<div className="flex items-start gap-3">
												<UserCircle className="h-5 w-5 text-[#1e1b4b] mt-0.5" />
												<div>
													<p className="font-medium">Medical Consultation</p>
													<p className="text-sm text-gray-600">Dr. Nguyen Van A</p>
													<p className="text-sm text-gray-600">+84 987 654 321</p>
												</div>
											</div>

											<Button className="w-full bg-[#1e1b4b] hover:bg-[#1e1b4b]/90 mt-2">
												<Link to="/about" className="w-full">
													Contact Us
												</Link>
											</Button>
										</div>
									</PopoverContent>
								</Popover>

								<Button
									className="bg-blue-600 hover:bg-blue-700 text-white font-medium px-6 py-2 rounded-md shadow-md transition-all"
									asChild
								>
									<Link to="/Login">Login</Link>
								</Button>
							</div>
						)}
					</div>
				</div>
			</nav>
		</header>
	)
}

export default Header

