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
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Label } from "@/components/ui/label"
import { getAllUsers, UserRole, UserStatus } from "@/api/admin/admin-user"

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

type DialogMode = "view" | "edit" | "create"

export function UsersManagement() {
  const [users, setUsers] = useState<UserType[]>([])
  const [totalCount, setTotalCount] = useState(0)
  const [isLoading, setIsLoading] = useState(true)
  const [searchName, setSearchName] = useState("")
  const [searchEmail, setSearchEmail] = useState("")
  const [filterRole, setFilterRole] = useState<UserRole | "all">("all")  
  const [filterStatus, setFilterStatus] = useState<UserStatus | "all">("all")
  const [page, setPage] = useState(1)
  const [pageSize] = useState(10)
  const [selectedUser, setSelectedUser] = useState<UserType | null>(null)
  const [deleteConfirmOpen, setDeleteConfirmOpen] = useState(false)
  const [dialogOpen, setDialogOpen] = useState(false)
  const [dialogMode, setDialogMode] = useState<DialogMode>("view")
  const [isSaving, setIsSaving] = useState(false)
  const { toast } = useToast()

  const debouncedSearchName = useDebounce(searchName, 300)
  const debouncedSearchEmail = useDebounce(searchEmail, 300)

  const fetchUsers = useCallback(async () => {
    setIsLoading(true)
    try {
      const response = await getAllUsers({
        page,
        pageSize,
        searchName: debouncedSearchName,
        searchEmail: debouncedSearchEmail,
        role: filterRole,
        status: filterStatus,
      });

      if (response.isSuccess) {
        const mappedUsers: UserType[] = response.data.users.map((user, index) => ({
          id: user.id || `user-${index}`,
          name: user.fullName,
          email: user.email,
          role: user.roleName,
          status: user.status || "active",
          phone: user.phoneNumber || "Not provided",
          dateOfBirth: user.dateOfBirth || undefined,
          createdAt: user.createdAt || new Date().toISOString().split('T')[0],
          lastLogin: user.lastLogin || undefined,
          avatar: user.imageUrl || undefined,
        }));

        setUsers(mappedUsers);
        setTotalCount(response.data.totalCount);
      } else {
        toast({
          title: "Error",
          description: response.message || "Failed to fetch users",
          variant: "destructive",
        });
      }
    } catch (error) {
      toast({
        title: "Error",
        description: "Failed to fetch users",
        variant: "destructive",
      });
    } finally {
      setIsLoading(false);
    }
  }, [debouncedSearchName, debouncedSearchEmail, filterRole, filterStatus, page, pageSize, toast]);
  
  useEffect(() => {
    fetchUsers();
    return () => {
      document.body.style.pointerEvents = "auto";
    };
  }, [fetchUsers]);

  const openDialog = useCallback((mode: DialogMode, user: UserType | null = null) => {
    setDialogMode(mode)
    setSelectedUser(user)
    setDialogOpen(true)
  }, [])

  const closeDialog = useCallback(() => {
    setDialogOpen(false)
    setTimeout(() => {
      setSelectedUser(null)
      setDialogMode("view")
      setIsSaving(false)
      document.body.style.pointerEvents = "auto"
    }, 300)
  }, [])

  const handleViewUser = useCallback((user: UserType) => {
    openDialog("view", user)
  }, [openDialog])

  const handleEditUser = useCallback((user: UserType) => {
    openDialog("edit", user)
  }, [openDialog])

  const handleCreateUser = useCallback(() => {
    openDialog("create")
  }, [openDialog])

  const handleDeleteUser = useCallback((user: UserType) => {
    setSelectedUser(user)
    setDeleteConfirmOpen(true)
  }, [])

  const confirmDeleteUser = useCallback(() => {
    if (!selectedUser) return
    setTimeout(() => {
      setUsers((prev) => prev.filter((user) => user.id !== selectedUser.id))
      setTotalCount((prev) => prev - 1)
      toast({
        title: "User deleted",
        description: `${selectedUser.name} has been deleted successfully.`,
      })
      setDeleteConfirmOpen(false)
      setSelectedUser(null)
      document.body.style.pointerEvents = "auto" 
    }, 500)
  }, [selectedUser, toast])

  const handleSaveUser = useCallback(
    (formData: any) => {
      setIsSaving(true)
      setTimeout(() => {
        if (dialogMode === "create") {
          const newUser: UserType = {
            id: `user-${Date.now()}`,
            name: formData.name,
            email: formData.email,
            role: formData.role,
            status: "active",
            phone: formData.phone || "",
            dateOfBirth: formData.dateOfBirth,
            createdAt: new Date().toISOString().split("T")[0],
            avatar: undefined,
          }
          setUsers((prev) => [...prev, newUser])
          setTotalCount((prev) => prev + 1)
          toast({
            title: "User created",
            description: `${newUser.name} has been created successfully.`,
          })
        } else if (dialogMode === "edit" && selectedUser) {
          const updatedUser = {
            ...selectedUser,
            name: formData.name,
            email: formData.email,
            role: formData.role,
            status: formData.status,
            phone: formData.phone,
            dateOfBirth: formData.dateOfBirth,
          }
          setUsers((prev) => prev.map((user) => (user.id === selectedUser.id ? updatedUser : user)))
          toast({
            title: "User updated",
            description: `${updatedUser.name} has been updated successfully.`,
          })
        }
        closeDialog()
      }, 500)
    },
    [dialogMode, selectedUser, toast, closeDialog],
  )

  const totalPages = Math.ceil(totalCount / pageSize)

  const getRoleBadgeVariant = (role: UserRole) => {
    switch (role) {
      case "admin": return "bg-purple-100 text-purple-800 dark:bg-purple-500/20 dark:text-purple-400"
      case "staff": return "bg-blue-100 text-blue-800 dark:bg-blue-500/20 dark:text-blue-400"
      case "customer": return "bg-green-100 text-green-800 dark:bg-green-500/20 dark:text-green-400"
      default: return "bg-gray-100 text-gray-800 dark:bg-gray-500/20 dark:text-gray-400"
    }
  }

  const getStatusBadgeVariant = (status: UserStatus) => {
    switch (status) {
      case "active": return "bg-green-100 text-green-800 dark:bg-green-500/20 dark:text-green-400"
      case "inactive": return "bg-red-100 text-red-800 dark:bg-red-500/20 dark:text-red-400"
      case "pending": return "bg-yellow-100 text-yellow-800 dark:bg-yellow-500/20 dark:text-yellow-400"
      default: return "bg-gray-100 text-gray-800 dark:bg-gray-500/20 dark:text-gray-400"
    }
  }

  const handleRoleChange = (value: string) => {
    setFilterRole(value as UserRole | "all"); 
  };

  const handleStatusChange = (value: string) => {
    setFilterStatus(value as UserStatus | "all"); 
  };

  return (
    <div className="p-6">
      <div className="flex items-center justify-between mb-6">
        <h1 className="text-2xl font-semibold">Users Management</h1>
        <Button onClick={handleCreateUser} className="bg-blue-600 hover:bg-blue-700">
          <UserPlus className="mr-2 h-4 w-4" />
          Add New User
        </Button>
      </div>

      {/* Filters */}
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
          <Select value={filterRole} onValueChange={handleRoleChange}>
            <SelectTrigger className="w-[150px]">
              <SelectValue placeholder="Role" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="all">All Roles</SelectItem>
              <SelectItem value="admin"><Shield className="inline mr-2 h-4 w-4" />Admin</SelectItem>
              <SelectItem value="staff"><User className="inline mr-2 h-4 w-4" />Staff</SelectItem>
              <SelectItem value="customer"><User className="inline mr-2 h-4 w-4" />Customer</SelectItem>
            </SelectContent>
          </Select>
          <Select value={filterStatus} onValueChange={handleStatusChange}>
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

      {/* Table */}
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
                    <td className="px-4 py-3"><div className="flex items-center gap-3"><div className="h-8 w-8 rounded-full bg-gray-200" /><div className="h-5 bg-gray-200 rounded w-32" /></div></td>
                    <td className="px-4 py-3"><div className="h-5 bg-gray-200 rounded w-40" /></td>
                    <td className="px-4 py-3"><div className="h-5 bg-gray-200 rounded w-16" /></td>
                    <td className="px-4 py-3"><div className="h-5 bg-gray-200 rounded w-16" /></td>
                    <td className="px-4 py-3"><div className="h-5 bg-gray-200 rounded w-24" /></td>
                    <td className="px-4 py-3 text-right"><div className="h-8 bg-gray-200 rounded w-8 ml-auto" /></td>
                  </tr>
                ))
              ) : users.length === 0 ? (
                <tr><td colSpan={6} className="px-4 py-8 text-center text-gray-500">No users found</td></tr>
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
                    <td className="px-4 py-3"><Badge variant="outline" className={`${getRoleBadgeVariant(user.role)} border-0`}>{user.role.charAt(0).toUpperCase() + user.role.slice(1)}</Badge></td>
                    <td className="px-4 py-3"><Badge variant="outline" className={`${getStatusBadgeVariant(user.status)} border-0`}>{user.status.charAt(0).toUpperCase() + user.status.slice(1)}</Badge></td>
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
                            <Eye className="mr-2 h-4 w-4" /> View Details
                          </DropdownMenuItem>
                          <DropdownMenuItem onClick={() => handleEditUser(user)}>
                            <Pencil className="mr-2 h-4 w-4" /> Edit User
                          </DropdownMenuItem>
                          <DropdownMenuItem onClick={() => handleDeleteUser(user)} className="text-red-600">
                            <Trash2 className="mr-2 h-4 w-4" /> Delete User
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
            {totalCount > 0 ? `${(page - 1) * pageSize + 1}-${Math.min(page * pageSize, totalCount)} of ${totalCount} users` : "No users"}
          </div>
          <div className="flex items-center gap-2">
            <span className="text-sm text-gray-500">Page {page} of {totalPages}</span>
            <Button variant="outline" size="icon" onClick={() => setPage((prev) => Math.max(prev - 1, 1))} disabled={page === 1} className="h-8 w-8"><ChevronLeft className="h-4 w-4" /></Button>
            <Button variant="outline" size="icon" onClick={() => setPage((prev) => Math.min(prev + 1, totalPages))} disabled={page >= totalPages} className="h-8 w-8"><ChevronRight className="h-4 w-4" /></Button>
          </div>
        </div>
      </div>

      {/* User Dialog */}
      <Dialog
        open={dialogOpen}
        onOpenChange={(open) => {
          if (!open && !isSaving) { 
            closeDialog()
          }
        }}
      >
        <DialogContent className="sm:max-w-[600px]">
          <DialogHeader>
            <DialogTitle>
              {dialogMode === "view" ? "User Details" : dialogMode === "edit" ? "Edit User" : "Create New User"}
            </DialogTitle>
            <DialogDescription>
              {dialogMode === "view" ? "View user information" : dialogMode === "edit" ? "Make changes to user information" : "Add a new user to the system"}
            </DialogDescription>
          </DialogHeader>

          {dialogMode === "view" && selectedUser ? (
            <div className="space-y-6">
              <div className="flex flex-col items-center gap-4 sm:flex-row">
                <Avatar className="h-20 w-20">
                  <AvatarImage src={selectedUser.avatar} alt={selectedUser.name} />
                  <AvatarFallback className="text-2xl">{selectedUser.name.charAt(0)}</AvatarFallback>
                </Avatar>
                <div className="space-y-1 text-center sm:text-left">
                  <h3 className="text-2xl font-semibold">{selectedUser.name}</h3>
                  <div className="flex flex-wrap justify-center gap-2 sm:justify-start">
                    <Badge variant="outline" className={`${getRoleBadgeVariant(selectedUser.role)} border-0`}>{selectedUser.role.charAt(0).toUpperCase() + selectedUser.role.slice(1)}</Badge>
                    <Badge variant="outline" className={`${getStatusBadgeVariant(selectedUser.status)} border-0`}>{selectedUser.status.charAt(0).toUpperCase() + selectedUser.status.slice(1)}</Badge>
                  </div>
                </div>
              </div>
              <Tabs defaultValue="details">
                <TabsList className="grid w-full grid-cols-2">
                  <TabsTrigger value="details">User Details</TabsTrigger>
                  <TabsTrigger value="activity">Activity</TabsTrigger>
                </TabsList>
                <TabsContent value="details" className="space-y-4 pt-4">
                  <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
                    <div className="space-y-2"><Label className="text-muted-foreground">Email</Label><div className="flex items-center gap-2"><Mail className="h-4 w-4 text-muted-foreground" /><span>{selectedUser.email}</span></div></div>
                    <div className="space-y-2"><Label className="text-muted-foreground">Phone</Label><div className="flex items-center gap-2"><Phone className="h-4 w-4 text-muted-foreground" /><span>{selectedUser.phone || "Not provided"}</span></div></div>
                    <div className="space-y-2"><Label className="text-muted-foreground">Date of Birth</Label><div className="flex items-center gap-2"><Calendar className="h-4 w-4 text-muted-foreground" /><span>{selectedUser.dateOfBirth || "Not provided"}</span></div></div>
                    <div className="space-y-2"><Label className="text-muted-foreground">User ID</Label><div className="flex items-center gap-2"><User className="h-4 w-4 text-muted-foreground" /><span>{selectedUser.id}</span></div></div>
                  </div>
                </TabsContent>
                <TabsContent value="activity" className="space-y-4 pt-4">
                  <div className="space-y-4">
                    <div className="space-y-2"><Label className="text-muted-foreground">Account Created</Label><div className="flex items-center gap-2"><Calendar className="h-4 w-4 text-muted-foreground" /><span>{selectedUser.createdAt}</span></div></div>
                    <div className="space-y-2"><Label className="text-muted-foreground">Last Login</Label><div className="flex items-center gap-2"><Calendar className="h-4 w-4 text-muted-foreground" /><span>{selectedUser.lastLogin || "Never"}</span></div></div>
                    <Card><CardHeader className="pb-2"><CardTitle className="text-sm font-medium">Recent Activity</CardTitle></CardHeader><CardContent><div className="text-sm text-muted-foreground">No recent activity to display.</div></CardContent></Card>
                  </div>
                </TabsContent>
              </Tabs>
              <DialogFooter>
                <Button variant="outline" onClick={closeDialog}>Close</Button>
              </DialogFooter>
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
                  role: formData.get("role") as UserRole,
                  status: formData.get("status") as UserStatus,
                  phone: formData.get("phone") as string,
                  dateOfBirth: formData.get("dateOfBirth") as string,
                }
                handleSaveUser(data)
              }}
            >
              <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
                <div className="space-y-2"><Label htmlFor="name">Full Name</Label><Input id="name" name="name" defaultValue={selectedUser?.name || ""} required /></div>
                <div className="space-y-2"><Label htmlFor="email">Email</Label><Input id="email" name="email" type="email" defaultValue={selectedUser?.email || ""} required /></div>
                <div className="space-y-2">
                  <Label htmlFor="role">Role</Label>
                  <Select name="role" defaultValue={selectedUser?.role || "customer"}>
                    <SelectTrigger id="role"><SelectValue placeholder="Select role" /></SelectTrigger>
                    <SelectContent>
                      <SelectItem value="admin">Admin</SelectItem>
                      <SelectItem value="staff">Staff</SelectItem>
                      <SelectItem value="customer">Customer</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                {dialogMode === "edit" && (
                  <div className="space-y-2">
                    <Label htmlFor="status">Status</Label>
                    <Select name="status" defaultValue={selectedUser?.status || "active"}>
                      <SelectTrigger id="status"><SelectValue placeholder="Select status" /></SelectTrigger>
                      <SelectContent>
                        <SelectItem value="active">Active</SelectItem>
                        <SelectItem value="inactive">Inactive</SelectItem>
                        <SelectItem value="pending">Pending</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                )}
                <div className="space-y-2"><Label htmlFor="phone">Phone Number</Label><Input id="phone" name="phone" defaultValue={selectedUser?.phone || ""} /></div>
                <div className="space-y-2"><Label htmlFor="dateOfBirth">Date of Birth</Label><Input id="dateOfBirth" name="dateOfBirth" type="date" defaultValue={selectedUser?.dateOfBirth || ""} /></div>
              </div>
              <DialogFooter>
                <Button type="button" variant="outline" onClick={closeDialog} disabled={isSaving}>
                  Cancel
                </Button>
                <Button type="submit" disabled={isSaving}>
                  {dialogMode === "create" ? "Create User" : "Save Changes"}
                </Button>
              </DialogFooter>
            </form>
          )}
        </DialogContent>
      </Dialog>

      {/* Delete Confirmation Dialog */}
      <AlertDialog open={deleteConfirmOpen} onOpenChange={setDeleteConfirmOpen}>
        <AlertDialogContent>
          <AlertDialogHeader>
            <AlertDialogTitle>Are you sure?</AlertDialogTitle>
            <AlertDialogDescription>
              This action cannot be undone. This will permanently delete the user
              {selectedUser && ` "${selectedUser.name}"`} and remove their data from the system.
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