import { AdminDashboard } from "@/components/admin-dashboard/Dashboard"
import SystemUserPage from "@/components/admin-dashboard/SystemUserPage"
import SystemVaccinePage from "@/components/admin-dashboard/SystemVaccinePage"
import { AdminLayout } from "@/components/AdminLayout"
import { useAuthContext } from "@/contexts/AuthContexts"
import { Navigate, Route, Routes } from "react-router-dom"

export default function AdminPage() {
    const { user } = useAuthContext()

    // Debug
    console.log("AdminPage rendering, user:", user)

    return (
        <AdminLayout>
            <Routes>

                <Route path="/" element={<Navigate to="/admin/admin-dashboard" replace />} />
                <Route path="/admin-dashboard" element={<AdminDashboard />} />
                <Route path="/system-vaccine" element={<SystemVaccinePage />} />
                <Route path="/system-user" element={<SystemUserPage />} />

                <Route path="*" element={<Navigate to="/admin/admin-dashboard" replace />} />
            </Routes>
        </AdminLayout>
    )
}