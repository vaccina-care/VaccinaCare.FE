import { AdminDashboard } from "@/components/admin-dashboard/Dashboard"
import { PolicyManagement } from "@/components/admin-dashboard/PolicyManagement"
import { UsersManagement } from "@/components/admin-dashboard/UsersManagement"
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
                <Route path="/policy-management" element={<PolicyManagement />} />
                <Route path="/users-management" element={<UsersManagement />} />

                <Route path="*" element={<Navigate to="/admin/admin-dashboard" replace />} />
            </Routes>
        </AdminLayout>
    )
}