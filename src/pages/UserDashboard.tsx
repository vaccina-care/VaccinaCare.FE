import type React from "react"
import DashboardLayout from "@/components/dashboard/DashboardLayout"
import UserProfile from "@/components/dashboard/UserProfile"

const UserDashboard: React.FC = () => {
  return (
    <DashboardLayout>
      <UserProfile />
    </DashboardLayout>
  )
}

export default UserDashboard

