import type React from "react"
import { Navigate, useLocation, Outlet } from "react-router-dom"
import { useAuthContext } from "@/contexts/AuthContexts"

interface ProtectedRouteProps {
  children?: React.ReactNode
  staffOnly?: boolean
  adminOnly?: boolean
}

const ProtectedRoute: React.FC<ProtectedRouteProps> = ({ children, staffOnly = false, adminOnly = false }) => {
  const { isAuthenticated, user } = useAuthContext()
  const location = useLocation()

  if (!isAuthenticated) {
    return <Navigate to="/login" state={{ from: location }} replace />
  }

  if (staffOnly && user?.roleName !== "Staff") {
    return <Navigate to="/" replace />
  }

  if (adminOnly && user?.roleName !== "Admin") {
    return <Navigate to="/" replace />
  }


  return children || <Outlet />
}

export default ProtectedRoute

