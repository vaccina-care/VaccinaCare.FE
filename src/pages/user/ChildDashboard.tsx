import type React from "react"
import DashboardLayout from "@/components/user-dashboard/DashboardLayout"
import ChildrenProfile from "@/components/user-dashboard/child-profile/ChildrenProfile"


const ChildDashboard: React.FC = () => {
  return (
    <DashboardLayout>
      <ChildrenProfile />
    </DashboardLayout>
  )
}

export default ChildDashboard

