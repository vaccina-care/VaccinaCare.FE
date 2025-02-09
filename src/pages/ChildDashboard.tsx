import type React from "react"
import DashboardLayout from "@/components/dashboard/DashboardLayout"
import ChildrenProfile from "@/components/dashboard/ChildrenProfile"


const ChildDashboard: React.FC = () => {
  return (
    <DashboardLayout>
      <ChildrenProfile />
    </DashboardLayout>
  )
}

export default ChildDashboard

