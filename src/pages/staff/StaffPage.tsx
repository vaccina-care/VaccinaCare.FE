import { Routes, Route, Navigate } from "react-router-dom"
import { StaffLayout } from "@/components/StaffLayout"
import VaccinesPage from "@/components/staff-dashboard/VaccinePage"
import ReportsPage from "@/components/staff-dashboard/ReportPage"
import { useAuthContext } from "@/contexts/AuthContexts"
import VaccineIntervalRulePage from "@/components/staff-dashboard/IntervalRules/VaccineIntervalRulePage"

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
                <Route path="/vaccine-interval-rules" element={<VaccineIntervalRulePage />} />
                <Route path="/reports" element={<ReportsPage />} />

                {/* Catch any other staff routes and redirect to vaccines */}
                <Route path="*" element={<Navigate to="/staff/vaccines" replace />} />
            </Routes>
        </StaffLayout>
    )
}