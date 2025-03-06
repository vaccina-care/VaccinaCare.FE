"use client"

import type React from "react"
import { useState, useEffect } from "react"
import { useNavigate } from "react-router-dom"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Link } from "react-router-dom"
import { motion } from "framer-motion"
import AuthLayout from "@/components/AuthLayout"
import { useAuthContext } from "@/contexts/AuthContexts"
import { useToast } from "@/hooks/use-toast"

// Import images
const logoImage =
	"https://minio.ae-tao-fullstack-api.site/api/v1/buckets/vaccinacare-bucket/objects/download?preview=true&prefix=logo.png&version_id=null"
const loginIllustration =
	"https://minio.ae-tao-fullstack-api.site/api/v1/buckets/vaccinacare-bucket/objects/download?preview=true&prefix=auth%2Flogin.png&version_id=null"

const Login = () => {
	const [email, setEmail] = useState("")
	const [password, setPassword] = useState("")
	const [isLoading, setIsLoading] = useState(false)
	const [error, setError] = useState<string | null>(null)
	const { login, user, isAuthenticated } = useAuthContext()
	const navigate = useNavigate()
	const { toast } = useToast()

	// Effect to handle redirection after successful login and user data is loaded
	useEffect(() => {
		if (isAuthenticated && user) {
			const redirectPath = user.roleName === "Staff" ? "/staff/vaccines" : "/user-dashboard"
			navigate(redirectPath, { replace: true })
		}
	}, [isAuthenticated, user, navigate])

	const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
		e.preventDefault()
		setIsLoading(true)
		setError(null) // Clear previous errors

		try {
			const success = await login(email, password)
			if (success) {
				toast({
					title: "Login Successful",
					description: "Welcome back to VaccinaCare!",
					variant: "success",
				})
				// Redirection will be handled by the useEffect hook
			} else {
				// Handle failed login without throwing an error
				setError("Invalid email or password. Please try again.")
				toast({
					title: "Login Failed",
					description: "Invalid email or password. Please try again.",
					variant: "error",
				})
			}
		} catch (error) {
			// Handle unexpected errors
			const errorMessage = error instanceof Error ? error.message : "An unexpected error occurred."
			setError(errorMessage)
			toast({
				title: "Login Failed",
				description: errorMessage,
				variant: "error",
			})
		} finally {
			setIsLoading(false)
		}
	}

	return (
		<AuthLayout illustration={loginIllustration}>
			<Card className="w-full max-w-md">
				<CardHeader className="space-y-3 items-center text-center">
					<motion.div
						initial={{ scale: 0.5 }}
						animate={{ scale: 1 }}
						transition={{ duration: 0.5 }}
						className="w-24 h-24"
					>
						<img
							src={logoImage || "/placeholder.svg"}
							alt="VacinnaCare Logo"
							className="w-full h-full object-contain"
						/>
					</motion.div>
					<div className="space-y-1">
						<h1 className="text-3xl font-bold tracking-tight font-yeseva">
							<span className="tracking-[0.1em]">VACINNA</span>
							<span className="text-blue-500 tracking-[0.1em]">CARE</span>
						</h1>
						<p className="text-sm text-muted-foreground">
							The safety of your child today brings joy to parents tomorrow.
						</p>
					</div>
				</CardHeader>
				<CardContent className="space-y-4">
					{error && (
						<div className="bg-red-50 border border-red-200 text-red-700 px-4 py-3 rounded-md text-sm">{error}</div>
					)}
					<form onSubmit={handleSubmit} className="space-y-4">
						<div className="space-y-2">
							<Input
								type="email"
								placeholder="Email"
								className="h-12"
								value={email}
								onChange={(e) => setEmail(e.target.value)}
								required
								disabled={isLoading}
							/>
						</div>
						<div className="space-y-2">
							<Input
								type="password"
								placeholder="Password"
								className="h-12"
								value={password}
								onChange={(e) => setPassword(e.target.value)}
								required
								disabled={isLoading}
							/>
						</div>
						<div className="text-sm">
							{"Don't have account? "}
							<Link to="/register" className="text-blue-500 hover:text-blue-700 font-medium">
								Create account
							</Link>
						</div>
						<Button
							type="submit"
							className="w-full h-12 text-base bg-[#1e1b4b] hover:bg-[#1e1b4b]/90"
							disabled={isLoading}
						>
							{isLoading ? "Logging in..." : "Login"}
						</Button>
					</form>
				</CardContent>
			</Card>
		</AuthLayout>
	)
}

export default Login

