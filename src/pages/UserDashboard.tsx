import type React from "react"
import DashboardLayout from "@/components/user-dashboard/DashboardLayout"
import UserProfile from "@/components/user-dashboard/UserProfile"

const UserDashboard: React.FC = () => {
  return (
    <DashboardLayout>
      <UserProfile />
    </DashboardLayout>
  )
}

export default UserDashboard

