import type React from "react"
import { CustomSidebar } from "@/components/staff-admin-component/CustomSidebar"
import { ThemeProvider } from "@/contexts/ThemeContext"

interface AdminLayoutProps {
    children: React.ReactNode
}

export function AdminLayout({ children }: AdminLayoutProps) {
    return (
        <ThemeProvider>
            <CustomSidebar role="admin">{children}</CustomSidebar>
        </ThemeProvider>
    )
}

