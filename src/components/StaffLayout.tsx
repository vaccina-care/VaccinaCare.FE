import type React from "react"
import { CustomSidebar } from "@/components/staff/CustomSidebar"

interface StaffLayoutProps {
    children: React.ReactNode
}

export function StaffLayout({ children }: StaffLayoutProps) {
    return <CustomSidebar>{children}</CustomSidebar>
}

