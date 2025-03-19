"use client"

import type React from "react"
import { Card } from "@/components/ui/card"
import { cn } from "@/lib/utils"
import { User, Users, Bell, Calendar, HistoryIcon } from "lucide-react"
import { useNavigate, useLocation } from "react-router-dom"

interface DashboardLayoutProps {
  children: React.ReactNode
}

const DashboardLayout: React.FC<DashboardLayoutProps> = ({ children }) => {
  const navigate = useNavigate()
  const location = useLocation()

  const isActive = (path: string) => location.pathname === path

  return (
    <div className="container mx-auto py-8">
      <Card className="flex min-h-[600px]">
        {/* Sidebar */}
        <div className="w-64 border-r border-gray-200 p-4">
          <nav className="space-y-2">
            <button
              onClick={() => navigate("/user-dashboard")}
              className={cn(
                "flex w-full items-center gap-2 rounded-lg px-3 py-2 transition-colors hover:bg-gray-100",
                isActive("/user-dashboard") ? "text-blue-600 bg-blue-50" : "text-gray-600",
              )}
            >
              <User className="h-4 w-4" />
              <span>Personal Information</span>
            </button>
            <button
              onClick={() => navigate("/child-dashboard")}
              className={cn(
                "flex w-full items-center gap-2 rounded-lg px-3 py-2 transition-colors hover:bg-gray-100",
                isActive("/child-dashboard") ? "text-blue-600 bg-blue-50" : "text-gray-600",
              )}
            >
              <Users className="h-4 w-4" />
              <span>Children Information</span>
            </button>
            <button
              onClick={() => navigate("/appointments-dashboard")}
              className={cn(
                "flex w-full items-center gap-2 rounded-lg px-3 py-2 transition-colors hover:bg-gray-100",
                isActive("/appointments-dashboard") ? "text-blue-600 bg-blue-50" : "text-gray-600",
              )}
            >
              <Calendar className="h-4 w-4" />
              <span>Appointments</span>
            </button>
            <button
              onClick={() => navigate("/vaccine-record")}
              className={cn(
                "flex w-full items-center gap-2 rounded-lg px-3 py-2 transition-colors hover:bg-gray-100",
                isActive("/vaccine-record") ? "text-blue-600 bg-blue-50" : "text-gray-600",
              )}
            >
              <HistoryIcon className="h-4 w-4" />
              <span>Vaccine Record</span>
            </button>
            <button
              onClick={() => navigate("/notifications")}
              className={cn(
                "flex w-full items-center gap-2 rounded-lg px-3 py-2 transition-colors hover:bg-gray-100",
                isActive("/notifications") ? "text-blue-600 bg-blue-50" : "text-gray-600",
              )}
            >
              <Bell className="h-4 w-4" />
              <span>Notifications</span>
            </button>
          </nav>
        </div>

        {/* Main Content */}
        <div className="flex-1 p-6">{children}</div>
      </Card>
    </div>
  )
}

export default DashboardLayout

