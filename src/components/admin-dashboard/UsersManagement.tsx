"use client"

import { useState, useCallback, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Badge } from "@/components/ui/badge"
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu"
import {
  Search,
  MoreHorizontal,
  Eye,
  Pencil,
  Trash2,
  ChevronLeft,
  ChevronRight,
  UserPlus,
  Shield,
  User,
  Mail,
  Calendar,
  Phone,
} from "lucide-react"
import { useDebounce } from "@/hooks/use-debounce"
import { useToast } from "@/hooks/use-toast"
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
} from "@/components/ui/alert-dialog"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog"
import { Avatar, AvatarFallback } from "@/components/ui/avatar"
import { Label } from "@/components/ui/label"
import { createUser, updateUser, deleteUser, getAllUsers, UserBase } from "@/api/admin/adminUser"

const formatDate = (dateString: string) => {
  const date = new Date(dateString)
  return date.toLocaleDateString("en-US", {
    year: "numeric",
    month: "short",
    day: "2-digit",
  })
}

const currentUserRole = "Admin";

type UserRole = "Admin" | "Staff" | "Customer"
type DialogMode = "view" | "edit" | "create"

export function UsersManagement() {
  const [users, setUsers] = useState<UserBase[]>([])
  const [totalCount, setTotalCount] = useState(0)
  const [isLoading, setIsLoading] = useState(true)
  const [searchTerm, setSearchTerm] = useState("")
  const [filterRole, setFilterRole] = useState<string>("all")
  const [page, setPage] = useState(1)
  const [pageSize] = useState(10)
  const [selectedUser, setSelectedUser] = useState<UserBase | null>(null)
  const { toast } = useToast()
  const [dialogOpen, setDialogOpen] = useState(false)
  const [dialogMode, setDialogMode] = useState<DialogMode>("view")
  const [deleteDialogOpen, setDeleteDialogOpen] = useState(false)

  const debouncedSearchTerm = useDebounce(searchTerm, 1000)

  const openDialog = useCallback((mode: DialogMode, user: UserBase | null = null) => {
    setDialogMode(mode)
    setSelectedUser(user)
    setDialogOpen(true)
  }, [])

  const closeDialog = useCallback(() => {
    setDialogOpen(false)
    setTimeout(() => {
      setSelectedUser(null)
      setDialogMode("view")
      document.body.style.pointerEvents = "auto"
    }, 300)
  }, [])

  const fetchUsers = useCallback(async () => {
    try {
      setIsLoading(true)

      const response = await getAllUsers({
        searchTerm: debouncedSearchTerm || undefined,
        pageIndex: page,
        pageSize,
      })

      if (response.isSuccess) {
        console.log("Fetched data:", response.data)
        let fetchedUsers = response.data.users || []
        if (filterRole !== "all") {
          fetchedUsers = fetchedUsers.filter(user => user.roleName === filterRole)
        }
        setUsers(fetchedUsers)
        setTotalCount(filterRole === "all" ? response.data.totalCount || 0 : fetchedUsers.length)
      }

      // if (response.isSuccess) {
      //   console.log("Fetched data:", response.data)
      //   setUsers(response.data.users || response.data || [])
      //   setTotalCount(response.data.totalCount || 0)
      // } 
      else {
        toast({
          title: "Error",
          description: "Failed to fetch users",
          variant: "destructive",
        })
      }
    } catch (error) {
      console.error("Error fetching users:", error)
      toast({
        title: "Error",
        description: "Failed to fetch users",
        variant: "destructive",
      })
    } finally {
      setIsLoading(false)
    }
  }, [debouncedSearchTerm, filterRole, page, pageSize, toast])

  useEffect(() => {
    fetchUsers()
  }, [fetchUsers])

  const handleViewUser = useCallback((user: UserBase) => {
    openDialog("view", user)
  }, [openDialog])

  const handleEditUser = useCallback((user: UserBase) => {
    openDialog("edit", user)
  }, [openDialog])

  const handleCreateUser = useCallback(() => {
    openDialog("create", null)
  }, [openDialog])

  const openDeleteDialog = useCallback((user: UserBase) => {
    setSelectedUser(user)
    setDeleteDialogOpen(true)
  }, [])

  const closeDeleteDialog = useCallback(() => {
    setDeleteDialogOpen(false)
    setTimeout(() => {
      setSelectedUser(null)
      document.body.style.pointerEvents = "auto"
    }, 300)
  }, [])

  const handleDeleteUser = useCallback((user: UserBase) => {
    openDeleteDialog(user)
  }, [openDeleteDialog])

  const confirmDeleteUser = useCallback(async () => {
    if (!selectedUser) return

    if (currentUserRole === "Admin" && selectedUser.roleName === "Admin") {
      toast({
        title: "Error",
        description: "Admins cannot delete other Admins.",
        variant: "destructive",
      })
      closeDeleteDialog()
      return
    }

    try {
      const response = await deleteUser(selectedUser.userId)
      if (response.isSuccess) {
        setUsers((prev) => prev.filter((user) => user.userId !== selectedUser.userId))
        setTotalCount((prev) => prev - 1)
        toast({
          title: "Success",
          description: `${selectedUser.fullName || "Unnamed User"} has been deleted successfully.`,
          variant: "success",
        })
        closeDeleteDialog()
        await fetchUsers()
      } else {
        toast({
          title: "Error",
          description: `Failed to delete user: ${response.message || "Unknown error"}`,
          variant: "destructive",
        })
      }
    } catch (error: any) {
      console.error("Error deleting user:", error.response?.data || error.message)
      toast({
        title: "Error",
        description: error.response?.data?.message || "An error occurred while deleting the user",
        variant: "destructive",
      })
    }
  }, [selectedUser, toast, closeDeleteDialog])

  const handleSaveUser = useCallback(
    async (formData: any) => {
      if (dialogMode === "create") {
        try {
          const userData = {
            fullName: formData.name,
            email: formData.email,
            password: formData.password,
          }

          const response = await createUser(userData)
          if (response.isSuccess) {
            const newUser: UserBase = {
              userId: response.data.userId,
              fullName: response.data.fullName,
              email: response.data.email,
              roleName: response.data.roleName || "Staff",
              createdAt: response.data.createdAt,
            }

            toast({
              title: "Success",
              description: "Staff account created successfully",
              variant: "success",
            })
            setUsers((prev) => [...prev, newUser])
            setTotalCount((prev) => prev + 1)
            closeDialog()
            await fetchUsers()
          } else {
            toast({
              title: "Error",
              description: "Failed to create staff account",
              variant: "destructive",
            })
          }
        } catch (error) {
          console.error("Error creating user:", error)
          toast({
            title: "Error",
            description: "An error occurred while creating the staff account",
            variant: "destructive",
          })
        }
      } else if (dialogMode === "edit" && selectedUser) {
        try {
          const updatedUserData = {
            fullName: formData.name,
            email: formData.email,
            phoneNumber: formData.phone,
          }

          const response = await updateUser(selectedUser.userId, updatedUserData)
          if (response.isSuccess) {
            const updatedUser: UserBase = {
              ...selectedUser,
              fullName: response.data.fullName ?? updatedUserData.fullName,
              email: response.data.email ?? updatedUserData.email,
              phoneNumber: response.data.phoneNumber ?? updatedUserData.phoneNumber,
            }

            setUsers((prev) =>
              prev.map((user) => (user.userId === selectedUser.userId ? updatedUser : user))
            )
            toast({
              title: "Success",
              description: "User updated successfully",
              variant: "success",
            })
            closeDialog()
            await fetchUsers()
          } else {
            toast({
              title: "Error",
              description: "Failed to update user",
              variant: "destructive",
            })
          }
        } catch (error) {
          console.error("Error updating user:", error)
          toast({
            title: "Error",
            description: "An error occurred while updating the user",
            variant: "destructive",
          })
        }
      }
    },
    [dialogMode, selectedUser, toast, closeDialog]
  )

  const totalPages = Math.ceil(totalCount / pageSize)

  const getRoleBadgeVariant = (role: UserRole) => {
    switch (role) {
      case "Admin":
        return "bg-purple-100 text-purple-800 dark:bg-purple-500/20 dark:text-purple-400"
      case "Staff":
        return "bg-blue-100 text-blue-800 dark:bg-blue-500/20 dark:text-blue-400"
      case "Customer":
        return "bg-green-100 text-green-800 dark:bg-green-500/20 dark:text-green-400"
      default:
        return "bg-gray-100 text-gray-800 dark:bg-gray-500/20 dark:text-gray-400"
    }
  }

  return (
    <div className="flex flex-col gap-6 p-6">
      <div className="flex items-center justify-between">
        <h1 className="text-2xl font-semibold">Users Management</h1>
        <Button onClick={handleCreateUser} className="bg-blue-600 hover:bg-blue-700">
          <UserPlus className="mr-2 h-4 w-4" />
          Add Staff
        </Button>
      </div>

      <div className="flex flex-col md:flex-row gap-4 mb-6">
        <div className="flex flex-1 gap-2">
          <div className="relative w-1/3">
            <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
            <Input
              placeholder="Search by name or email..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="pl-9"
            />
            {searchTerm && searchTerm !== debouncedSearchTerm && (
              <span className="absolute right-3 top-1/2 -translate-y-1/2 text-sm text-red-600">Searching...</span>
            )}
          </div>

          <Select value={filterRole} onValueChange={setFilterRole}>
            <SelectTrigger className="w-[150px]">
              <SelectValue placeholder="Role" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="all">All Roles</SelectItem>
              <SelectItem value="Admin">
                <div className="flex items-center gap-2">
                  <Shield className="h-4 w-4" />
                  <span>Admin</span>
                </div>
              </SelectItem>
              <SelectItem value="Staff">
                <div className="flex items-center gap-2">
                  <User className="h-4 w-4" />
                  <span>Staff</span>
                </div>
              </SelectItem>
              <SelectItem value="Customer">
                <div className="flex items-center gap-2">
                  <User className="h-4 w-4" />
                  <span>Customer</span>
                </div>
              </SelectItem>
            </SelectContent>
          </Select>
        </div>
        {/* <div className="flex gap-2">
          
        </div> */}
      </div>

      <div className="rounded-md border bg-card overflow-hidden">
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead>
              <tr className="border-b bg-muted/50">
                <th className="px-4 py-3 text-left">User</th>
                <th className="px-4 py-3 text-left">Email</th>
                <th className="px-4 py-3 text-left">Role</th>
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
                    <td className="px-4 py-3 text-right">
                      <div className="h-8 bg-gray-200 dark:bg-gray-700 rounded w-8 ml-auto" />
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
                  <tr key={user.userId} className="border-b hover:bg-muted/50">
                    <td className="px-4 py-3">
                      <div className="flex items-center gap-3">
                        <Avatar>
                          <AvatarFallback>{user.fullName?.charAt(0) || "U"}</AvatarFallback>
                        </Avatar>
                        <span className="font-medium">{user.fullName || "Unnamed User"}</span>
                      </div>
                    </td>
                    <td className="px-4 py-3 text-muted-foreground">{user.email || "N/A"}</td>
                    <td className="px-4 py-3">
                      <Badge variant="outline" className={`${getRoleBadgeVariant(user.roleName)} border-0`}>
                        {user.roleName}
                      </Badge>
                    </td>
                    <td className="px-4 py-3 text-muted-foreground">{formatDate(user.createdAt)}</td>
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

      <Dialog
        open={dialogOpen}
        onOpenChange={(open) => {
          setDialogOpen(open)
          if (!open) {
            closeDialog()
          }
        }}
      >
        <DialogContent className="sm:max-w-[600px]">
          <DialogHeader>
            <DialogTitle>
              {dialogMode === "view"
                ? "User Details"
                : dialogMode === "edit"
                  ? "Edit User"
                  : "Create New Staff"}
            </DialogTitle>
            <DialogDescription>
              {dialogMode === "view"
                ? "View user information"
                : dialogMode === "edit"
                  ? "Make changes to user information"
                  : "Add a new staff to the system"}
            </DialogDescription>
          </DialogHeader>

          {dialogMode === "view" && selectedUser ? (
            <div className="space-y-6">
              <div className="flex flex-col items-center gap-4 sm:flex-row">
                <Avatar className="h-20 w-20">
                  <AvatarFallback className="text-2xl">{selectedUser.fullName?.charAt(0) || "U"}</AvatarFallback>
                </Avatar>
                <div className="space-y-1 text-center sm:text-left">
                  <h3 className="text-2xl font-semibold">{selectedUser.fullName || "Unnamed User"}</h3>
                  <div className="flex flex-wrap justify-center gap-2 sm:justify-start">
                    <Badge variant="outline" className={`${getRoleBadgeVariant(selectedUser.roleName)} border-0`}>
                      {selectedUser.roleName}
                    </Badge>
                  </div>
                </div>
              </div>

              <div className="space-y-4">
                <h4 className="text-lg font-medium">User Details</h4> {/* Thêm tiêu đề cho phần User Details */}
                <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
                  <div className="space-y-2">
                    <Label className="text-muted-foreground">Email</Label>
                    <div className="flex items-center gap-2">
                      <Mail className="h-4 w-4 text-muted-foreground" />
                      <span>{selectedUser.email || "Not provided"}</span>
                    </div>
                  </div>
                  <div className="space-y-2">
                    <Label className="text-muted-foreground">Phone</Label>
                    <div className="flex items-center gap-2">
                      <Phone className="h-4 w-4 text-muted-foreground" />
                      <span>{selectedUser.phoneNumber || "Not provided"}</span>
                    </div>
                  </div>
                  {/* SỬA: Thêm Account Created từ tab Activity vào đây */}
                  <div className="space-y-2">
                    <Label className="text-muted-foreground">Account Created</Label>
                    <div className="flex items-center gap-2">
                      <Calendar className="h-4 w-4 text-muted-foreground" />
                      <span>{formatDate(selectedUser.createdAt)}</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ) : (
            <form
              className="space-y-4"
              onSubmit={(e) => {
                e.preventDefault()
                const formData = new FormData(e.currentTarget)
                const data = {
                  name: formData.get("name") as string,
                  email: formData.get("email") as string,
                  phone: formData.get("phone") as string,
                  ...(dialogMode === "create" && { password: formData.get("password") as string }),
                  ...(dialogMode === "edit" && { phone: formData.get("phone") as string }),
                }
                handleSaveUser(data)
              }}
            >
              <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
                <div className="space-y-2">
                  <Label htmlFor="name">Full Name</Label>
                  <Input id="name" name="name" defaultValue={selectedUser?.fullName || ""} placeholder="Enter full name" required />
                </div>
                {dialogMode === "create" && (
                  <div className="space-y-2">
                    <Label htmlFor="password">Password</Label>
                    <Input
                      id="password"
                      name="password"
                      type="string"
                      required
                      placeholder="Enter password"
                    />
                  </div>
                )}
                <div className="space-y-2">
                  <Label htmlFor="email">Email</Label>
                  <Input id="email" name="email" type="email" defaultValue={selectedUser?.email || ""} placeholder="Enter email" required />
                </div>
                {dialogMode === "edit" && (
                  <div className="space-y-2">
                    <Label htmlFor="phone">Phone Number</Label>
                    <Input id="phone" name="phone" defaultValue={selectedUser?.phoneNumber || ""} placeholder="Enter phone number" />
                  </div>
                )}
              </div>
              <DialogFooter>
                <Button type="button" variant="outline" onClick={closeDialog}>
                  Cancel
                </Button>
                <Button type="submit">{dialogMode === "create" ? "Create Staff" : "Save Changes"}</Button>
              </DialogFooter>
            </form>
          )}
        </DialogContent>
      </Dialog>

      <AlertDialog
        open={deleteDialogOpen}
        onOpenChange={(open) => {
          setDeleteDialogOpen(open)
          if (!open) {
            closeDeleteDialog()
          }
        }}
      >
        <AlertDialogContent>
          <AlertDialogHeader>
            <AlertDialogTitle>Are you sure?</AlertDialogTitle>
            <AlertDialogDescription>
              This action cannot be undone. This will permanently delete the user
              {selectedUser && ` "${selectedUser.fullName}"`} and remove their data from the system.
            </AlertDialogDescription>
          </AlertDialogHeader>
          <AlertDialogFooter>
            <AlertDialogCancel>Cancel</AlertDialogCancel>
            <AlertDialogAction onClick={confirmDeleteUser} className="bg-red-600 hover:bg-red-700">
              Delete
            </AlertDialogAction>
          </AlertDialogFooter>
        </AlertDialogContent>
      </AlertDialog>
    </div>
  )
}