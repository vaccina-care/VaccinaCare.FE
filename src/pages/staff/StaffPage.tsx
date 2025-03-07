import { Routes, Route, Navigate } from "react-router-dom"
import { StaffLayout } from "@/components/StaffLayout"
import VaccinesPage from "@/components/staff-dashboard/VaccinePage"
import AppointmentsPage from "@/components/staff-dashboard/AppointmentPage"
import ReportsPage from "@/components/staff-dashboard/ReportPage"
import InventoryPage from "@/components/staff-dashboard/InventoryPage"
import { useAuthContext } from "@/contexts/AuthContexts"

export default function StaffPage() {
    const { user } = useAuthContext()

    // Debug
    console.log("StaffPage rendering, user:", user)

    return (
        <StaffLayout>
            <Routes>

                {/* Redirect /staff to /staff/vaccines */}
                <Route path="/" element={<Navigate to="/staff/vaccines" replace />} />
                <Route path="/vaccines" element={<VaccinesPage />} />
                <Route path="/appointments" element={<AppointmentsPage />} />
                <Route path="/reports" element={<ReportsPage />} />
                <Route path="/inventory" element={<InventoryPage />} />

                {/* Catch any other staff routes and redirect to vaccines */}
                <Route path="*" element={<Navigate to="/staff/vaccines" replace />} />
            </Routes>
        </StaffLayout>
    )
}