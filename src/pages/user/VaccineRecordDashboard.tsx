import type React from "react"
import DashboardLayout from "@/components/user-dashboard/DashboardLayout"
import VaccineRecordSection from "@/components/user-dashboard/vaccine-record/VaccineRecordSection"


const VaccineRecordDashboard: React.FC = () => {
    return (
        <DashboardLayout>
            <VaccineRecordSection />
        </DashboardLayout>
    )
}

export default VaccineRecordDashboard
