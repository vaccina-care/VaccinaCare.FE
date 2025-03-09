import type React from "react"
import DashboardLayout from "@/components/user-dashboard/DashboardLayout"
import AppointmentsSection from "@/components/user-dashboard/appointment/AppointmentSection"

const AppointmentDashboard: React.FC = () => {
    return (
        <DashboardLayout>
            <AppointmentsSection />
        </DashboardLayout>
    )
}

export default AppointmentDashboard

