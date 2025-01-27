import type { ReactNode } from "react"
import { Card } from "@/components/ui/card"
import { User, Users, Bell } from "lucide-react"

interface DashboardLayoutProps {
  children: ReactNode
}

const DashboardLayout = ({ children }: DashboardLayoutProps) => {
  return (
    <div className="container mx-auto py-8">
      <Card className="flex min-h-[600px]">
        {/* Sidebar */}
        <div className="w-64 border-r border-gray-200 p-4">
          <nav className="space-y-2">
            <a
              href="#personal-info"
              className="flex items-center gap-2 rounded-lg px-3 py-2 text-blue-600 bg-blue-50 transition-colors hover:bg-blue-100"
            >
              <User className="h-4 w-4" />
              <span>Personal information</span>
            </a>
            <a
              href="#children-info"
              className="flex items-center gap-2 rounded-lg px-3 py-2 text-gray-600 transition-colors hover:bg-gray-100"
            >
              <Users className="h-4 w-4" />
              <span>Children information</span>
            </a>
            <a
              href="#notifications"
              className="flex items-center gap-2 rounded-lg px-3 py-2 text-gray-600 transition-colors hover:bg-gray-100"
            >
              <Bell className="h-4 w-4" />
              <span>Notification</span>
            </a>
          </nav>
        </div>

        {/* Main Content */}
        <div className="flex-1 p-6">{children}</div>
      </Card>
    </div>
  )
}

export default DashboardLayout

