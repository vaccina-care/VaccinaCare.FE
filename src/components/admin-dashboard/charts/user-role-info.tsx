"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Users, Shield, UserCircle, User, ArrowUpRight } from "lucide-react"
import { UserBase } from "@/api/admin/adminUser"

interface UserRoleInfoProps {
  users: UserBase[]
}

export function UserRoleInfo({ users }: UserRoleInfoProps) {
  const adminCount = users.filter(user => user.roleName === "Admin").length
  const staffCount = users.filter(user => user.roleName === "Staff").length
  const customerCount = users.filter(user => user.roleName === "Customer").length

  return (
    <div className="grid gap-4 grid-cols-2">
      <Card className="bg-gradient-to-br from-purple-50 to-purple-100 dark:from-purple-950/40 dark:to-purple-900/20 border-purple-200 dark:border-purple-800">
        <CardHeader className="pb-2">
          <CardTitle className="text-lg font-medium flex items-center justify-between">
            Total Users
            <Users className="h-4 w-4 text-purple-500" />
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="text-3xl font-bold text-purple-700 dark:text-purple-400">{users.length}</div>
          <p className="text-sm text-purple-600 dark:text-purple-300 flex items-center mt-1">
            <ArrowUpRight className="h-3 w-3 mr-1" />
            +10% from last month
          </p>
        </CardContent>
      </Card>

      <Card className="bg-gradient-to-br from-red-50 to-red-100 dark:from-red-950/40 dark:to-red-900/20 border-red-200 dark:border-red-800">
        <CardHeader className="pb-2">
          <CardTitle className="text-lg font-medium flex items-center justify-between">
            Admins
            <Shield className="h-4 w-4 text-red-500" />
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="text-3xl font-bold text-red-700 dark:text-red-400">{adminCount}</div>
          <p className="text-sm text-red-600 dark:text-red-300 mt-1">
            {users.length > 0 ? ((adminCount / users.length) * 100).toFixed(1) : 0}% of total users
          </p>
        </CardContent>
      </Card>

      <Card className="bg-gradient-to-br from-green-50 to-green-100 dark:from-green-950/40 dark:to-green-900/20 border-green-200 dark:border-green-800">
        <CardHeader className="pb-2">
          <CardTitle className="text-lg font-medium flex items-center justify-between">
            Staff
            <UserCircle className="h-4 w-4 text-green-500" />
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="text-3xl font-bold text-green-700 dark:text-green-400">{staffCount}</div>
          <p className="text-sm text-green-600 dark:text-green-300 mt-1">
            {users.length > 0 ? ((staffCount / users.length) * 100).toFixed(1) : 0}% of total users
          </p>
        </CardContent>
      </Card>

      <Card className="bg-gradient-to-br from-blue-50 to-blue-100 dark:from-blue-950/40 dark:to-blue-900/20 border-blue-200 dark:border-blue-800">
        <CardHeader className="pb-2">
          <CardTitle className="text-lg font-medium flex items-center justify-between">
            Customers
            <User className="h-4 w-4 text-blue-500" />
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="text-3xl font-bold text-blue-700 dark:text-blue-400">{customerCount}</div>
          <p className="text-sm text-blue-600 dark:text-blue-300 mt-1">
            {users.length > 0 ? ((customerCount / users.length) * 100).toFixed(1) : 0}% of total users
          </p>
        </CardContent>
      </Card>
    </div>
  )
}