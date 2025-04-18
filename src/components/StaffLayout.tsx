import type React from "react"
import { CustomSidebar } from "@/components/staff-admin-component/CustomSidebar"
import { ThemeProvider } from "@/contexts/ThemeContext"

interface StaffLayoutProps {
    children: React.ReactNode
}

export function StaffLayout({ children }: StaffLayoutProps) {
    return (
        <ThemeProvider>
            <CustomSidebar role="staff">{children}</CustomSidebar>
        </ThemeProvider>
    )
}

