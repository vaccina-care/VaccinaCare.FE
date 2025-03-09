"use client"

import { useState, useEffect } from "react"
import { Badge } from "@/components/ui/badge"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"

type UserRole = "admin" | "staff" | "patient"
type UserStatus = "active" | "inactive" | "pending"

interface UserType {
  id: string
  name: string
  email: string
  role: UserRole
  status: UserStatus
  phone: string
  dateOfBirth?: string
  createdAt: string
  lastLogin?: string
  avatar?: string
}

const mockUsers: UserType[] = Array.from({ length: 20 }, (_, i) => ({
  id: `user-${i + 1}`,
  name: `User ${i + 1}`,
  email: `user${i + 1}@example.com`,
  role: i % 10 === 0 ? "admin" : i % 3 === 0 ? "staff" : "patient",
  status: i % 7 === 0 ? "inactive" : i % 5 === 0 ? "pending" : "active",
  phone: `+1 (555) ${100 + i}-${1000 + i}`,
  dateOfBirth: i % 2 === 0 ? `1990-${(i % 12) + 1}-${(i % 28) + 1}` : undefined,
  createdAt: `2023-${(i % 12) + 1}-${(i % 28) + 1}`,
  lastLogin: i % 3 === 0 ? `2023-${(i % 12) + 1}-${(i % 28) + 1}` : undefined,
  avatar: i % 5 === 0 ? undefined : `/placeholder.svg?height=40&width=40`,
}))

export function UsersManagement() {
  const [users, setUsers] = useState<UserType[]>([])
  const [isLoading, setIsLoading] = useState(true)


  useEffect(() => {
    setIsLoading(true)
    setTimeout(() => {
      setUsers(mockUsers)
      setIsLoading(false)
    }, 500)
  }, [])

  const getRoleBadgeVariant = (role: UserRole) => {
    switch (role) {
      case "admin":
        return "bg-purple-100 text-purple-800 dark:bg-purple-500/20 dark:text-purple-400"
      case "staff":
        return "bg-blue-100 text-blue-800 dark:bg-blue-500/20 dark:text-blue-400"
      case "patient":
        return "bg-green-100 text-green-800 dark:bg-green-500/20 dark:text-green-400"
      default:
        return "bg-gray-100 text-gray-800 dark:bg-gray-500/20 dark:text-gray-400"
    }
  }

  const getStatusBadgeVariant = (status: UserStatus) => {
    switch (status) {
      case "active":
        return "bg-green-100 text-green-800 dark:bg-green-500/20 dark:text-green-400"
      case "inactive":
        return "bg-red-100 text-red-800 dark:bg-red-500/20 dark:text-red-400"
      case "pending":
        return "bg-yellow-100 text-yellow-800 dark:bg-yellow-500/20 dark:text-yellow-400"
      default:
        return "bg-gray-100 text-gray-800 dark:bg-gray-500/20 dark:text-gray-400"
    }
  }

  return (
    <div className="p-6">
      <h1 className="text-2xl font-semibold mb-6">Users Management</h1>

      <div className="rounded-md border bg-card overflow-hidden">
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead>
              <tr className="border-b bg-muted/50">
                <th className="px-4 py-3 text-left">User</th>
                <th className="px-4 py-3 text-left">Email</th>
                <th className="px-4 py-3 text-left">Role</th>
                <th className="px-4 py-3 text-left">Status</th>
                <th className="px-4 py-3 text-left">Created</th>
              </tr>
            </thead>
            <tbody>
              {isLoading ? (
                Array.from({ length: 5 }).map((_, index) => (
                  <tr key={`skeleton-${index}`} className="border-b animate-pulse">
                    <td className="px-4 py-3">
                      <div className="flex items-center gap-3">
                        <div className="h-8 w-8 rounded-full bg-gray-200 dark:bg-gray-700" />
                        <div className="h-5 bg-gray-200 dark:bg-gray-700 rounded w-32" />
                      </div>
                    </td>
                    <td className="px-4 py-3">
                      <div className="h-5 bg-gray-200 dark:bg-gray-700 rounded w-40" />
                    </td>
                    <td className="px-4 py-3">
                      <div className="h-5 bg-gray-200 dark:bg-gray-700 rounded w-16" />
                    </td>
                    <td className="px-4 py-3">
                      <div className="h-5 bg-gray-200 dark:bg-gray-700 rounded w-16" />
                    </td>
                    <td className="px-4 py-3">
                      <div className="h-5 bg-gray-200 dark:bg-gray-700 rounded w-24" />
                    </td>
                  </tr>
                ))
              ) : users.length === 0 ? (
                <tr>
                  <td colSpan={5} className="px-4 py-8 text-center text-gray-500">
                    No users found
                  </td>
                </tr>
              ) : (
                users.map((user) => (
                  <tr key={user.id} className="border-b hover:bg-muted/50">
                    <td className="px-4 py-3">
                      <div className="flex items-center gap-3">
                        <Avatar>
                          <AvatarImage src={user.avatar} alt={user.name} />
                          <AvatarFallback>{user.name.charAt(0)}</AvatarFallback>
                        </Avatar>
                        <span className="font-medium">{user.name}</span>
                      </div>
                    </td>
                    <td className="px-4 py-3 text-muted-foreground">{user.email}</td>
                    <td className="px-4 py-3">
                      <Badge variant="outline" className={`${getRoleBadgeVariant(user.role)} border-0`}>
                        {user.role.charAt(0).toUpperCase() + user.role.slice(1)}
                      </Badge>
                    </td>
                    <td className="px-4 py-3">
                      <Badge variant="outline" className={`${getStatusBadgeVariant(user.status)} border-0`}>
                        {user.status.charAt(0).toUpperCase() + user.status.slice(1)}
                      </Badge>
                    </td>
                    <td className="px-4 py-3 text-muted-foreground">{user.createdAt}</td>
                  </tr>
                ))
              )}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  )
}