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

  // Improve the initializeAuth function in useEffect
  useEffect(() => {
    const initializeAuth = async () => {
      console.log("AuthContext: Initializing auth state")
      const token = Auth.getToken()

      if (token) {
        console.log("AuthContext: Found existing token, validating")
        try {
          await axiosInstance.get("/users/me")
          console.log("AuthContext: Token is valid, setting authenticated state")
          setIsAuthenticated(true)
          await loadUserData()
        } catch (error) {
          console.error("AuthContext: Token validation failed:", error)
          // Clear invalid token
          Auth.logout()
          setIsAuthenticated(false)
          setUser(null)
        }
      } else {
        console.log("AuthContext: No token found, user is not authenticated")
        setIsAuthenticated(false)
        setUser(null)
      }

      setIsLoading(false)
    }

    initializeAuth()
  }, [loadUserData])

  // Improve the login function to handle state transitions better
  const login = async (email: string, password: string) => {
    console.log("AuthContext: Login attempt started")
    try {
      const response = await Auth.login({ email, password })
      if (response.isSuccess) {
        console.log("AuthContext: Login successful, setting authenticated state")
        setIsAuthenticated(true)

        // Load user data and wait for it to complete
        try {
          const userData = await loadUserData()
          console.log("AuthContext: User data loaded successfully", { role: userData?.roleName })
          return true
        } catch (userDataError) {
          console.error("AuthContext: Failed to load user data after login", userDataError)
          // If we can't load user data, we should log out
          Auth.logout()
          setIsAuthenticated(false)
          setUser(null)
          return false
        }
      }
      console.log("AuthContext: Login failed - server returned unsuccessful response")
      return false
    } catch (error) {
      console.error("AuthContext: Login error:", error)
      return false
    }
  }

  // Improve the logout function to properly clear all state
  const logout = useCallback(() => {
    console.log("AuthContext: Logging out user")

    // First clear the token
    Auth.logout()

    // Then update state
    setIsAuthenticated(false)
    setUser(null)

    // Clear any stored credentials in sessionStorage
    sessionStorage.removeItem("email")

    // Force a small delay to ensure state updates are processed
    setTimeout(() => {
      console.log("AuthContext: Logout complete, state reset")
    }, 100)
  }, [])

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

