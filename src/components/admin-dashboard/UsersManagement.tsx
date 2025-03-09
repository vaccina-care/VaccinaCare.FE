"use client"

import { useState, useCallback, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Badge } from "@/components/ui/badge"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import {
  Search,
  MoreHorizontal,
  Eye,
  Pencil,
  Trash2,
  ChevronLeft,
  ChevronRight,
  UserPlus,
  Mail,
} from "lucide-react"
import { useDebounce } from "@/hooks/use-debounce"
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription } from "@/components/ui/dialog"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"

// Mock user types
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

// Mock user data - 50 người như gốc
const mockUsers: UserType[] = Array.from({ length: 50 }, (_, i) => ({
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
  const [totalCount, setTotalCount] = useState(0)
  const [isLoading, setIsLoading] = useState(true)
  const [searchName, setSearchName] = useState("")
  const [searchEmail, setSearchEmail] = useState("")
  const [filterRole, setFilterRole] = useState<string>("all")
  const [filterStatus, setFilterStatus] = useState<string>("all")
  const [page, setPage] = useState(1)
  const [pageSize] = useState(10)
  const [selectedUser, setSelectedUser] = useState<UserType | null>(null)
  const [viewDialogOpen, setViewDialogOpen] = useState(false)

  // Add debounced search values
  const debouncedSearchName = useDebounce(searchName, 300)
  const debouncedSearchEmail = useDebounce(searchEmail, 300)

  // Fetch users with filtering and pagination
  const fetchUsers = useCallback(() => {
    setIsLoading(true)
    setTimeout(() => {
      let filteredUsers = [...mockUsers]

      if (debouncedSearchName) {
        filteredUsers = filteredUsers.filter((user) =>
          user.name.toLowerCase().includes(debouncedSearchName.toLowerCase())
        )
      }

      if (debouncedSearchEmail) {
        filteredUsers = filteredUsers.filter((user) =>
          user.email.toLowerCase().includes(debouncedSearchEmail.toLowerCase())
        )
      }

      if (filterRole !== "all") {
        filteredUsers = filteredUsers.filter((user) => user.role === filterRole)
      }

      if (filterStatus !== "all") {
        filteredUsers = filteredUsers.filter((user) => user.status === filterStatus)
      }

      setTotalCount(filteredUsers.length)
      const start = (page - 1) * pageSize
      const paginatedUsers = filteredUsers.slice(start, start + pageSize)
      setUsers(paginatedUsers)
      setIsLoading(false)
    }, 500)
  }, [debouncedSearchName, debouncedSearchEmail, filterRole, filterStatus, page, pageSize])

  useEffect(() => {
    fetchUsers()
  }, [fetchUsers])

  // Handlers
  const handleViewUser = useCallback((user: UserType) => {
    setSelectedUser(user)
    setViewDialogOpen(true)
  }, [])

  const handleEditUser = useCallback((user: UserType) => {
    console.log("Edit user:", user)
  }, [])

  const handleCreateUser = useCallback(() => {
    console.log("Create new user")
  }, [])

  const handleDeleteUser = useCallback((user: UserType) => {
    console.log("Delete user:", user)
  }, [])

  const totalPages = Math.ceil(totalCount / pageSize)

  // Helper functions for badge variants
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
      <div className="flex items-center justify-between mb-6">
        <h1 className="text-2xl font-semibold">Users Management</h1>
        <Button onClick={handleCreateUser} className="bg-blue-600 hover:bg-blue-700">
          <UserPlus className="mr-2 h-4 w-4" />
          Add New User
        </Button>
      </div>

      <div className="flex flex-col md:flex-row gap-4 mb-6">
        <div className="flex flex-1 gap-2">
          <div className="relative flex-1">
            <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
            <Input
              placeholder="Search by name..."
              value={searchName}
              onChange={(e) => setSearchName(e.target.value)}
              className="pl-9"
            />
          </div>
          <div className="relative flex-1">
            <Mail className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
            <Input
              placeholder="Search by email..."
              value={searchEmail}
              onChange={(e) => setSearchEmail(e.target.value)}
              className="pl-9"
            />
          </div>
        </div>
        <div className="flex gap-2">
          <Select value={filterRole} onValueChange={setFilterRole}>
            <SelectTrigger className="w-[150px]">
              <SelectValue placeholder="Role" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="all">All Roles</SelectItem>
              <SelectItem value="admin">Admin</SelectItem>
              <SelectItem value="staff">Staff</SelectItem>
              <SelectItem value="patient">Patient</SelectItem>
            </SelectContent>
          </Select>

          <Select value={filterStatus} onValueChange={setFilterStatus}>
            <SelectTrigger className="w-[150px]">
              <SelectValue placeholder="Status" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="all">All Statuses</SelectItem>
              <SelectItem value="active">Active</SelectItem>
              <SelectItem value="inactive">Inactive</SelectItem>
              <SelectItem value="pending">Pending</SelectItem>
            </SelectContent>
          </Select>
        </div>
      </div>

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
                <th className="w-[80px] px-4 py-3 text-right">Actions</th>
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
                    <td className="px-4 py-3 text-right">
                      <div className="h-8 bg-gray-200 dark:bg-gray-700 rounded w-8 ml-auto" />
                    </td>
                  </tr>
                ))
              ) : users.length === 0 ? (
                <tr>
                  <td colSpan={6} className="px-4 py-8 text-center text-gray-500">
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
                    <td className="px-4 py-3 text-right">
                      <DropdownMenu>
                        <DropdownMenuTrigger asChild>
                          <Button variant="ghost" size="icon" className="h-8 w-8">
                            <MoreHorizontal className="h-4 w-4" />
                          </Button>
                        </DropdownMenuTrigger>
                        <DropdownMenuContent align="end">
                          <DropdownMenuItem onClick={() => handleViewUser(user)}>
                            <Eye className="mr-2 h-4 w-4" />
                            View Details
                          </DropdownMenuItem>
                          <DropdownMenuItem onClick={() => handleEditUser(user)}>
                            <Pencil className="mr-2 h-4 w-4" />
                            Edit User
                          </DropdownMenuItem>
                          <DropdownMenuItem onClick={() => handleDeleteUser(user)} className="text-red-600">
                            <Trash2 className="mr-2 h-4 w-4" />
                            Delete User
                          </DropdownMenuItem>
                        </DropdownMenuContent>
                      </DropdownMenu>
                    </td>
                  </tr>
                ))
              )}
            </tbody>
          </table>
        </div>

        {/* Pagination */}
        <div className="flex items-center justify-between px-4 py-3 border-t">
          <div className="text-sm text-gray-500">
            {totalCount > 0 ? (
              <>
                {(page - 1) * pageSize + 1}-{Math.min(page * pageSize, totalCount)} of {totalCount} users
              </>
            ) : (
              "No users"
            )}
          </div>
          <div className="flex items-center gap-2">
            <span className="text-sm text-gray-500">
              Page {page} of {totalPages}
            </span>
            <Button
              variant="outline"
              size="icon"
              onClick={() => setPage((prev) => Math.max(prev - 1, 1))}
              disabled={page === 1}
              className="h-8 w-8"
            >
              <ChevronLeft className="h-4 w-4" />
            </Button>
            <Button
              variant="outline"
              size="icon"
              onClick={() => setPage((prev) => Math.min(prev + 1, totalPages))}
              disabled={page >= totalPages}
              className="h-8 w-8"
            >
              <ChevronRight className="h-4 w-4" />
            </Button>
          </div>
        </div>
      </div>

      {/* View Details Dialog */}
      <Dialog open={viewDialogOpen} onOpenChange={setViewDialogOpen}>
        <DialogContent className="sm:max-w-[600px]">
          <DialogHeader>
            <DialogTitle>User Details</DialogTitle>
            <DialogDescription>View user information</DialogDescription>
          </DialogHeader>
          {selectedUser && (
            <div className="space-y-6">
              <div className="flex flex-col items-center gap-4 sm:flex-row">
                <Avatar className="h-20 w-20">
                  <AvatarImage src={selectedUser.avatar} alt={selectedUser.name} />
                  <AvatarFallback className="text-2xl">{selectedUser.name.charAt(0)}</AvatarFallback>
                </Avatar>
                <div className="space-y-1 text-center sm:text-left">
                  <h3 className="text-2xl font-semibold">{selectedUser.name}</h3>
                  <div className="flex flex-wrap justify-center gap-2 sm:justify-start">
                    <Badge variant="outline" className={`${getRoleBadgeVariant(selectedUser.role)} border-0`}>
                      {selectedUser.role.charAt(0).toUpperCase() + selectedUser.role.slice(1)}
                    </Badge>
                    <Badge variant="outline" className={`${getStatusBadgeVariant(selectedUser.status)} border-0`}>
                      {selectedUser.status.charAt(0).toUpperCase() + selectedUser.status.slice(1)}
                    </Badge>
                  </div>
                </div>
              </div>
              <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
                <div className="space-y-2">
                  <p className="text-muted-foreground">Email</p>
                  <div className="flex items-center gap-2">
                    <Mail className="h-4 w-4 text-muted-foreground" />
                    <span>{selectedUser.email}</span>
                  </div>
                </div>
                <div className="space-y-2">
                  <p className="text-muted-foreground">Phone</p>
                  <div className="flex items-center gap-2">
                    <span>{selectedUser.phone || "Not provided"}</span>
                  </div>
                </div>
                <div className="space-y-2">
                  <p className="text-muted-foreground">Date of Birth</p>
                  <div className="flex items-center gap-2">
                    <span>{selectedUser.dateOfBirth || "Not provided"}</span>
                  </div>
                </div>
                <div className="space-y-2">
                  <p className="text-muted-foreground">Created At</p>
                  <div className="flex items-center gap-2">
                    <span>{selectedUser.createdAt}</span>
                  </div>
                </div>
                <div className="space-y-2">
                  <p className="text-muted-foreground">Last Login</p>
                  <div className="flex items-center gap-2">
                    <span>{selectedUser.lastLogin || "Never"}</span>
                  </div>
                </div>
              </div>
            </div>
          )}
        </DialogContent>
      </Dialog>
    </div>
  )
}