"use client"

import type React from "react"
import { createContext, useContext, useState, useEffect } from "react"
import { Auth } from "@/api/auth"
import axiosInstance from "@/api/axiosInstance"

interface AuthContextType {
  isAuthenticated: boolean
  isLoading: boolean
  login: (email: string, password: string) => Promise<boolean>
  logout: () => void
}

const AuthContext = createContext<AuthContextType | undefined>(undefined)

// eslint-disable-next-line react-refresh/only-export-components
export const useAuthContext = () => {
  const context = useContext(AuthContext)
  if (!context) {
    throw new Error("useAuthContext must be used within an AuthProvider")
  }
  return context
}

export const AuthProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [isAuthenticated, setIsAuthenticated] = useState(false)
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    const initializeAuth = async () => {
      const token = Auth.getToken()
      if (token) {
        try {
          // Validate token by making a request to a protected endpoint
          await axiosInstance.get("/users/me")
          setIsAuthenticated(true)
        } catch (error) {
          console.error("Token validation failed:", error)
          Auth.logout()
        }
      }
      setIsLoading(false)
    }

    initializeAuth()
  }, [])

  const login = async (email: string, password: string) => {
    try {
      const response = await Auth.login({ email, password })
      if (response.isSuccess) {
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
    Auth.logout()
    setIsAuthenticated(false)
  }

  if (isLoading) {
    return <div className="flex items-center justify-center min-h-screen">Loading...</div>
  }

  return <AuthContext.Provider value={{ isAuthenticated, isLoading, login, logout }}>{children}</AuthContext.Provider>
}

