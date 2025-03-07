"use client"

import type React from "react"
import { useEffect, useRef, useState } from "react"
import { useNavigate } from "react-router-dom"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Link } from "react-router-dom"
import { motion } from "framer-motion"
import AuthLayout from "@/components/AuthLayout"
import { Auth } from "@/api/auth"
import { useToast } from "@/hooks/use-toast"

// Import images
const logoImage =
  "https://minio.ae-tao-fullstack-api.site/api/v1/buckets/vaccinacare-bucket/objects/download?preview=true&prefix=logo.png&version_id=null"
const registerIllustration =
  "https://minio.ae-tao-fullstack-api.site/api/v1/buckets/vaccinacare-bucket/objects/download?preview=true&prefix=auth%2Fregister.png&version_id=null"

const Register = () => {
  const navigate = useNavigate()
  const { toast } = useToast()
  const emailInputRef = useRef<HTMLInputElement>(null)

  // Retrieve email from sessionStorage (if available)
  const [email, setEmail] = useState(() => sessionStorage.getItem("registerEmail") || "")
  const [password, setPassword] = useState("")
  const [confirmPassword, setConfirmPassword] = useState("")
  const [isLoading, setIsLoading] = useState(false)
  const [error, setError] = useState<string | null>(null)

  // Save email input to sessionStorage
  const handleEmailChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value
    setEmail(value)
    sessionStorage.setItem("registerEmail", value)
  }

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault() // Prevents form reload
    setError(null)

    if (password !== confirmPassword) {
      setError("Passwords do not match. Please ensure your passwords match.")
      toast({
        title: "Passwords do not match",
        description: "Please ensure your passwords match.",
        variant: "error",
      })
      return
    }

    setIsLoading(true)
    try {
      const response = await Auth.register({ email, password })
      if (response.isSuccess) {
        toast({
          title: "Registration Successful",
          description: "Welcome to VaccinaCare!",
          variant: "success",
        })
        sessionStorage.removeItem("registerEmail") // Clear stored email after success
        navigate("/login") // Redirect to login page
      } else {
        setError(response.message || "Registration failed. Please try again.")
        toast({
          title: "Registration Failed",
          description: response.message || "Registration failed. Please try again.",
          variant: "destructive",
        })
      }
    } catch (error) {
      const errorMessage = error instanceof Error ? error.message : "An unexpected error occurred."
      setError(errorMessage)
      toast({
        title: "Registration Failed",
        description: errorMessage,
        variant: "destructive",
      })
    } finally {
      setIsLoading(false)
    }
  }

  useEffect(() => {
    if (emailInputRef.current) {
      emailInputRef.current.focus()
    }
  }, [])

  return (
    <AuthLayout illustration={registerIllustration} isReversed>
      <Card className="w-full max-w-md">
        <CardHeader className="space-y-3 items-center text-center">
          <motion.div
            initial={{ scale: 0.5 }}
            animate={{ scale: 1 }}
            transition={{ duration: 0.5 }}
            className="w-24 h-24"
          >
            <img src={logoImage || "/placeholder.svg"} alt="VacinnaCare Logo" className="w-full h-full object-contain" />
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
        <CardContent>
          {error && (
            <div className="bg-red-50 border border-red-200 text-red-700 px-4 py-3 rounded-md text-sm mb-4">
              {error}
            </div>
          )}
          <form onSubmit={handleSubmit} className="space-y-4">
            <div className="space-y-2">
              <Input
                type="email"
                placeholder="Email"
                className="h-12"
                value={email}
                onChange={handleEmailChange}
                required
                ref={emailInputRef}
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
            <div className="space-y-2">
              <Input
                type="password"
                placeholder="Confirm password"
                className="h-12"
                value={confirmPassword}
                onChange={(e) => setConfirmPassword(e.target.value)}
                required
                disabled={isLoading}
              />
            </div>
            <div className="text-sm">
              {"Already have an account? "}
              <Link to="/login" className="text-blue-500 hover:text-blue-700 font-medium">
                Login
              </Link>
            </div>
            <Button type="submit" className="w-full h-12 text-base bg-[#1e1b4b] hover:bg-[#1e1b4b]/90" disabled={isLoading}>
              {isLoading ? "Registering..." : "Register"}
            </Button>
          </form>
        </CardContent>
      </Card>
    </AuthLayout>
  )
}

export default Register
