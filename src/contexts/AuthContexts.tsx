"use client"

import type React from "react"
import { createContext, useContext, useState, useEffect, useCallback } from "react"
import { Auth } from "@/api/auth"
import axiosInstance from "@/api/axiosInstance"
import { Loading } from "@/components/ui/loading"
import { fetchUserData, type UserData } from "@/api/user"

interface AuthContextType {
  isAuthenticated: boolean
  isLoading: boolean
  user: UserData | null
  login: (email: string, password: string) => Promise<boolean>
  logout: () => void
  refreshUserData: () => Promise<void>
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
  const [user, setUser] = useState<UserData | null>(null)

  const loadUserData = useCallback(async () => {
    try {
      const userData = await fetchUserData()
      setUser(userData)
      return userData
    } catch (error) {
      console.error("Error fetching user data:", error)
      Auth.logout()
      setIsAuthenticated(false)
      setUser(null)
      throw error
    }
  }, [])

  // Add a function to refresh user data without logging out on error
  const refreshUserData = useCallback(async () => {
    try {
      const userData = await fetchUserData()
      setUser(userData)
    } catch (error) {
      console.error("Error refreshing user data:", error)
      // Don't log out on refresh errors
    }
  }, [])

  useEffect(() => {
    const initializeAuth = async () => {
      const token = Auth.getToken()
      if (token) {
        try {
          await axiosInstance.get("/users/me")
          setIsAuthenticated(true)
          await loadUserData()
        } catch (error) {
          console.error("Token validation failed:", error)
          Auth.logout()
        }
      }
      setIsLoading(false)
    }

    initializeAuth()
  }, [loadUserData])

  const login = async (email: string, password: string) => {
    try {
      const response = await Auth.login({ email, password })
      if (response.isSuccess) {
        setIsAuthenticated(true)
        // Load user data and wait for it to complete
        await loadUserData()
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
    setUser(null)
  }

  if (isLoading) {
    return <Loading text="Please wait, we are cooking..." />
  }

  return (
    <AuthContext.Provider
      value={{
        isAuthenticated,
        isLoading,
        user,
        login,
        logout,
        refreshUserData,
      }}
    >
      {children}
    </AuthContext.Provider>
  )
}

