import { useState, useEffect, useCallback } from "react"
import { login as authLogin } from "@/api/authConfig"

export const useAuth = () => {
  const [isAuthenticated, setIsAuthenticated] = useState(false)
  const [isLoading, setIsLoading] = useState(true)

  const checkAuth = useCallback(async () => {
    const token = localStorage.getItem("accessToken")
    if (token) {
      // For now, we'll just assume it's valid if it exists
      setIsAuthenticated(true)
    } else {
      setIsAuthenticated(false)
    }
    setIsLoading(false)
  }, [])

  useEffect(() => {
    checkAuth()
  }, [checkAuth])

  const login = async (email: string, password: string) => {
    try {
      const response = await authLogin({ email, password })
      if (response.isSuccess) {
        localStorage.setItem("accessToken", response.data.accessToken)
        setIsAuthenticated(true)
        return true
      }
      return false
    } catch (error) {
      console.error("Login error:", error)
      return false
    }
  }

  const logout = () => {
    localStorage.removeItem("accessToken")
    setIsAuthenticated(false)
  }

  return { isAuthenticated, isLoading, login, logout, checkAuth }
}

