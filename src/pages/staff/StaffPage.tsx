import { Routes, Route, Navigate } from "react-router-dom"
import { StaffLayout } from "@/components/StaffLayout"
import VaccinesPage from "@/components/staff-dashboard/vaccine-package-page/VaccinePage"
import { useAuthContext } from "@/contexts/AuthContexts"
import VaccineIntervalRulePage from "@/components/staff-dashboard/interval-rules-page/VaccineIntervalRulePage"
import AppointmentReviewPage from "@/components/staff-dashboard/appointment-page/AppointmentReviewPage"

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
                <Route path="/appointments" element={<AppointmentReviewPage />} />

                {/* Catch any other staff routes and redirect to vaccines */}
                <Route path="*" element={<Navigate to="/staff/vaccines" replace />} />
            </Routes>
        </StaffLayout>
    )
}