"use client"

import { useState, useCallback, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu"
import {
  Search,
  MoreHorizontal,
  Eye,
  Pencil,
  Trash2,
  ChevronLeft,
  ChevronRight,
  FilePlus,
  Calendar,
  Tag,
  Clock,
  DollarSign,
  RefreshCw,
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
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"

// Policy types
type PolicyStatus = "active" | "inactive" | "draft" | "archived"
type PolicyCategory = "general" | "privacy" | "security" | "compliance" | "operational"

// Update the PolicyType interface to match the backend response
interface PolicyType {
  policyId: string
  policyName: string
  description: string
  cancellationDeadline: number
  penaltyFee: number
  createdAt?: string // Adding this for UI display purposes
  updatedAt?: string // Adding this for UI display purposes
}

// Update the mock policy data
const mockPolicies: PolicyType[] = Array.from({ length: 50 }, (_, i) => ({
  policyId: `3fa85f64-5717-4562-b3fc-2c963f66afa${i}`,
  policyName: `Policy ${i + 1}`,
  description: `This is a description for Policy ${i + 1}. It outlines the rules and guidelines that must be followed.`,
  cancellationDeadline: Math.floor(Math.random() * 72) + 24, // Random hours between 24-96
  penaltyFee: Math.floor(Math.random() * 50) + 10, // Random fee between 10-60
  createdAt: `2023-${(i % 12) + 1}-${(i % 28) + 1}`,
  updatedAt: `2023-${(i % 12) + 1}-${(i % 28) + 1}`,
}))

type DialogMode = "view" | "edit" | "create"

export function PolicyManagement() {
  const [policies, setPolicies] = useState<PolicyType[]>([])
  const [totalCount, setTotalCount] = useState(0)
  const [isLoading, setIsLoading] = useState(true)
  const [searchName, setSearchName] = useState("")
  const [filterCategory, setFilterCategory] = useState<string>("all")
  const [filterStatus, setFilterStatus] = useState<string>("all")
  const [page, setPage] = useState(1)
  const [pageSize] = useState(10)
  const [selectedPolicy, setSelectedPolicy] = useState<PolicyType | null>(null)
  // const [deleteConfirmOpen, setDeleteConfirmOpen] = useState(false)
  const { toast } = useToast()
  const [dialogOpen, setDialogOpen] = useState(false)
  const [dialogMode, setDialogMode] = useState<DialogMode>("view")
  const [deleteDialogOpen, setDeleteDialogOpen] = useState(false)

  // Add debounced search values
  const debouncedSearchName = useDebounce(searchName, 300)

  // Update the dialog state management
  const [policyDialogState, setPolicyDialogState] = useState<{
    isOpen: boolean
    mode: DialogMode
    policyId: string | null
  }>({
    isOpen: false,
    mode: "view",
    policyId: null,
  })

  const openDialog = useCallback((mode: DialogMode, policy: PolicyType | null = null) => {
    setDialogMode(mode)
    setSelectedPolicy(policy)
    setDialogOpen(true)
  }, [])

  // 3. Thêm closeDialog giống VaccinePage
  const closeDialog = useCallback(() => {
    setDialogOpen(false)
    setTimeout(() => {
      setSelectedPolicy(null)
      setDialogMode("view")
      document.body.style.pointerEvents = "auto"
    }, 300)
  }, [])

  // const handleClosePolicyDialog = useCallback(() => {
  //   setPolicyDialogState({
  //     isOpen: false,
  //     mode: "view",
  //     policyId: null,
  //   })
  // }, [])

  // Update fetchPolicies to use the new fields
  const fetchPolicies = useCallback(() => {
    setIsLoading(true)

    // Simulate API call with filtering
    setTimeout(() => {
      let filteredPolicies = [...mockPolicies]

      // Apply filters
      if (debouncedSearchName) {
        filteredPolicies = filteredPolicies.filter(
          (policy) =>
            policy.policyName.toLowerCase().includes(debouncedSearchName.toLowerCase()) ||
            policy.description.toLowerCase().includes(debouncedSearchName.toLowerCase()),
        )
      }

      // Set total count for pagination
      setTotalCount(filteredPolicies.length)

      // Apply pagination
      const start = (page - 1) * pageSize
      const paginatedPolicies = filteredPolicies.slice(start, start + pageSize)

      setPolicies(paginatedPolicies)
      setIsLoading(false)
    }, 500) // Simulate network delay
  }, [debouncedSearchName, page, pageSize])

  useEffect(() => {
    fetchPolicies()
  }, [fetchPolicies])

  // Dialog handlers
  const handleViewPolicy = useCallback((policy: PolicyType) => {
    openDialog("view", policy) // Dùng openDialog thay vì set state thủ công
  }, [openDialog])

  const handleEditPolicy = useCallback((policy: PolicyType) => {
    openDialog("edit", policy) // Dùng openDialog
  }, [openDialog])

  const handleCreatePolicy = useCallback(() => {
    openDialog("create", null) // Dùng openDialog
  }, [openDialog])

  // const handleViewPolicy = useCallback((policy: PolicyType) => {
  //   setSelectedPolicy(policy)
  //   setPolicyDialogState({
  //     isOpen: true,
  //     mode: "view",
  //     policyId: policy.policyId,
  //   })
  // }, [])

  // const handleEditPolicy = useCallback((policy: PolicyType) => {
  //   setSelectedPolicy(policy)
  //   setPolicyDialogState({
  //     isOpen: true,
  //     mode: "edit",
  //     policyId: policy.policyId,
  //   })
  // }, [])

  // const handleCreatePolicy = useCallback(() => {
  //   setPolicyDialogState({
  //     isOpen: true,
  //     mode: "create",
  //     policyId: null,
  //   })
  // }, [])

  const openDeleteDialog = useCallback((policy: PolicyType) => {
    setSelectedPolicy(policy)
    setDeleteDialogOpen(true)
  }, [])

  const closeDeleteDialog = useCallback(() => {
    setDeleteDialogOpen(false)
    setTimeout(() => {
      setSelectedPolicy(null)
      document.body.style.pointerEvents = "auto"
    }, 300)
  }, [])

  // Delete policy handler
  const handleDeletePolicy = useCallback((policy: PolicyType) => {
    openDeleteDialog(policy) // Dùng openDeleteDialog
  }, [openDeleteDialog])

  const confirmDeletePolicy = useCallback(() => {
    if (!selectedPolicy) return
    setTimeout(() => {
      setPolicies((prev) => prev.filter((policy) => policy.policyId !== selectedPolicy.policyId))
      setTotalCount((prev) => prev - 1)
      toast({
        title: "Policy deleted",
        description: `${selectedPolicy.policyName} has been deleted successfully.`,
      })
      closeDeleteDialog() // Dùng closeDeleteDialog
    }, 500)
  }, [selectedPolicy, toast, closeDeleteDialog])

  // Update the handleSavePolicy function
  const handleSavePolicy = useCallback(
    (formData: any) => {
      setTimeout(() => {
        const currentDate = new Date().toISOString().split("T")[0]

        if (dialogMode === "create") { // Sửa từ policyDialogState.mode thành dialogMode
          const newPolicy: PolicyType = {
            policyId: `3fa85f64-5717-4562-b3fc-2c963f66afa${Date.now()}`,
            policyName: formData.policyName,
            description: formData.description,
            cancellationDeadline: Number.parseInt(formData.cancellationDeadline),
            penaltyFee: Number.parseFloat(formData.penaltyFee),
            createdAt: currentDate,
            updatedAt: currentDate,
          }

          setPolicies((prev) => [...prev, newPolicy])
          setTotalCount((prev) => prev + 1)

          toast({
            title: "Policy created",
            description: `${newPolicy.policyName} has been created successfully.`,
          })
        } else if (dialogMode === "edit" && selectedPolicy) { // Sửa từ policyDialogState.mode thành dialogMode
          const updatedPolicy = {
            ...selectedPolicy,
            policyName: formData.policyName,
            description: formData.description,
            cancellationDeadline: Number.parseInt(formData.cancellationDeadline),
            penaltyFee: Number.parseFloat(formData.penaltyFee),
            updatedAt: currentDate,
          }

          setPolicies((prev) =>
            prev.map((policy) => (policy.policyId === selectedPolicy.policyId ? updatedPolicy : policy)),
          )

          toast({
            title: "Policy updated",
            description: `${updatedPolicy.policyName} has been updated successfully.`,
          })
        }

        closeDialog() // Dùng closeDialog thay vì handleClosePolicyDialog
      }, 500)
    },
    [dialogMode, selectedPolicy, toast, closeDialog] // Cập nhật dependencies
  )

  const incrementVersion = (version: string) => {
    const parts = version.split(".")
    if (parts.length === 2) {
      const minor = Number.parseInt(parts[1]) + 1
      return `${parts[0]}.${minor}`
    }
    return version
  }

  const totalPages = Math.ceil(totalCount / pageSize)

  // Helper function to get category badge variant
  const getCategoryBadgeVariant = (category: PolicyCategory) => {
    switch (category) {
      case "privacy":
        return "bg-purple-100 text-purple-800 dark:bg-purple-500/20 dark:text-purple-400"
      case "security":
        return "bg-red-100 text-red-800 dark:bg-red-500/20 dark:text-red-400"
      case "compliance":
        return "bg-blue-100 text-blue-800 dark:bg-blue-500/20 dark:text-blue-400"
      case "operational":
        return "bg-amber-100 text-amber-800 dark:bg-amber-500/20 dark:text-amber-400"
      case "general":
      default:
        return "bg-gray-100 text-gray-800 dark:bg-gray-500/20 dark:text-gray-400"
    }
  }

  // Helper function to get status badge variant
  const getStatusBadgeVariant = (status: PolicyStatus) => {
    switch (status) {
      case "active":
        return "bg-green-100 text-green-800 dark:bg-green-500/20 dark:text-green-400"
      case "inactive":
        return "bg-red-100 text-red-800 dark:bg-red-500/20 dark:text-red-400"
      case "draft":
        return "bg-yellow-100 text-yellow-800 dark:bg-yellow-500/20 dark:text-yellow-400"
      case "archived":
        return "bg-gray-100 text-gray-800 dark:bg-gray-500/20 dark:text-gray-400"
      default:
        return "bg-gray-100 text-gray-800 dark:bg-gray-500/20 dark:text-gray-400"
    }
  }

  return (
    <div className="flex flex-col gap-6 p-6">
      <div className="flex items-center justify-between">
        <h1 className="text-2xl font-semibold">Policy Management</h1>
        <Button onClick={handleCreatePolicy} className="bg-blue-600 hover:bg-blue-700">
          <FilePlus className="mr-2 h-4 w-4" />
          Add New Policy
        </Button>
      </div>

      <div className="flex flex-col md:flex-row gap-4 mb-6">
        <div className="flex flex-1 gap-2">
          <div className="relative flex-1">
            <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
            <Input
              placeholder="Search policies..."
              value={searchName}
              onChange={(e) => setSearchName(e.target.value)}
              className="pl-9"
            />
          </div>
        </div>
      </div>

      <div className="rounded-md border bg-card overflow-hidden">
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead>
              <tr className="border-b bg-muted/50">
                <th className="px-4 py-3 text-left">Policy Name</th>
                <th className="px-4 py-3 text-left">Description</th>
                <th className="px-4 py-3 text-left">Cancellation Deadline (hours)</th>
                <th className="px-4 py-3 text-left">Penalty Fee ($)</th>
                <th className="w-[80px] px-4 py-3 text-right">Actions</th>
              </tr>
            </thead>
            <tbody>
              {isLoading ? (
                Array.from({ length: 5 }).map((_, index) => (
                  <tr key={`skeleton-${index}`} className="border-b animate-pulse">
                    <td className="px-4 py-3">
                      <div className="h-5 bg-gray-200 dark:bg-gray-700 rounded w-32" />
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
              ) : policies.length === 0 ? (
                <tr>
                  <td colSpan={5} className="px-4 py-8 text-center text-gray-500">
                    No policies found
                  </td>
                </tr>
              ) : (
                policies.map((policy) => (
                  <tr key={policy.policyId} className="border-b hover:bg-muted/50">
                    <td className="px-4 py-3">
                      <div className="font-medium">{policy.policyName}</div>
                    </td>
                    <td className="px-4 py-3">
                      <div className="text-sm text-muted-foreground truncate max-w-xs">{policy.description}</div>
                    </td>
                    <td className="px-4 py-3 text-muted-foreground">{policy.cancellationDeadline} hours</td>
                    <td className="px-4 py-3 text-muted-foreground">${policy.penaltyFee.toFixed(2)}</td>
                    <td className="px-4 py-3 text-right">
                      <DropdownMenu>
                        <DropdownMenuTrigger asChild>
                          <Button variant="ghost" size="icon" className="h-8 w-8">
                            <MoreHorizontal className="h-4 w-4" />
                          </Button>
                        </DropdownMenuTrigger>
                        <DropdownMenuContent align="end">
                          <DropdownMenuItem onClick={() => handleViewPolicy(policy)}>
                            <Eye className="mr-2 h-4 w-4" />
                            View Details
                          </DropdownMenuItem>
                          <DropdownMenuItem onClick={() => handleEditPolicy(policy)}>
                            <Pencil className="mr-2 h-4 w-4" />
                            Edit Policy
                          </DropdownMenuItem>
                          <DropdownMenuItem onClick={() => handleDeletePolicy(policy)} className="text-red-600">
                            <Trash2 className="mr-2 h-4 w-4" />
                            Delete Policy
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
                {(page - 1) * pageSize + 1}-{Math.min(page * pageSize, totalCount)} of {totalCount} policies
              </>
            ) : (
              "No policies"
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

      {/* Policy Detail Dialog */}
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
              {policyDialogState.mode === "view"
                ? "Policy Details"
                : policyDialogState.mode === "edit"
                  ? "Edit Policy"
                  : "Create New Policy"}
            </DialogTitle>
            <DialogDescription>
              {policyDialogState.mode === "view"
                ? "View policy information"
                : policyDialogState.mode === "edit"
                  ? "Make changes to policy information"
                  : "Add a new policy to the system"}
            </DialogDescription>
          </DialogHeader>

          {policyDialogState.mode === "view" && selectedPolicy ? (
            <div className="space-y-6">
              <div className="space-y-1">
                <h3 className="text-2xl font-semibold">{selectedPolicy.policyName}</h3>
              </div>

              <Tabs defaultValue="details">
                <TabsList className="grid w-full grid-cols-1">
                  <TabsTrigger value="details">Policy Details</TabsTrigger>
                </TabsList>
                <TabsContent value="details" className="space-y-4 pt-4">
                  <div className="space-y-4">
                    <div className="space-y-2">
                      <Label className="text-muted-foreground">Description</Label>
                      <div className="rounded-md border p-3 bg-muted/20">{selectedPolicy.description}</div>
                    </div>

                    <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
                      <div className="space-y-2">
                        <Label className="text-muted-foreground">Cancellation Deadline</Label>
                        <div className="flex items-center gap-2">
                          <Clock className="h-4 w-4 text-muted-foreground" />
                          <span>{selectedPolicy.cancellationDeadline} hours</span>
                        </div>
                      </div>
                      <div className="space-y-2">
                        <Label className="text-muted-foreground">Penalty Fee</Label>
                        <div className="flex items-center gap-2">
                          <DollarSign className="h-4 w-4 text-muted-foreground" />
                          <span>${selectedPolicy.penaltyFee.toFixed(2)}</span>
                        </div>
                      </div>
                    </div>

                    {selectedPolicy.createdAt && (
                      <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
                        <div className="space-y-2">
                          <Label className="text-muted-foreground">Created</Label>
                          <div className="flex items-center gap-2">
                            <Calendar className="h-4 w-4 text-muted-foreground" />
                            <span>{selectedPolicy.createdAt}</span>
                          </div>
                        </div>
                        {selectedPolicy.updatedAt && (
                          <div className="space-y-2">
                            <Label className="text-muted-foreground">Last Updated</Label>
                            <div className="flex items-center gap-2">
                              <RefreshCw className="h-4 w-4 text-muted-foreground" />
                              <span>{selectedPolicy.updatedAt}</span>
                            </div>
                          </div>
                        )}
                      </div>
                    )}

                    <div className="space-y-2">
                      <Label className="text-muted-foreground">Policy ID</Label>
                      <div className="flex items-center gap-2">
                        <Tag className="h-4 w-4 text-muted-foreground" />
                        <span className="text-xs font-mono">{selectedPolicy.policyId}</span>
                      </div>
                    </div>
                  </div>
                </TabsContent>
              </Tabs>
            </div>
          ) : (
            <form
              className="space-y-4"
              onSubmit={(e) => {
                e.preventDefault()
                const formData = new FormData(e.currentTarget)
                const data = {
                  policyName: formData.get("policyName") as string,
                  description: formData.get("description") as string,
                  cancellationDeadline: formData.get("cancellationDeadline") as string,
                  penaltyFee: formData.get("penaltyFee") as string,
                }
                handleSavePolicy(data)
              }}
            >
              <div className="grid grid-cols-1 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="policyName">Policy Name</Label>
                  <Input id="policyName" name="policyName" defaultValue={selectedPolicy?.policyName || ""} required />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="description">Description</Label>
                  <Textarea
                    id="description"
                    name="description"
                    rows={4}
                    defaultValue={selectedPolicy?.description || ""}
                    required
                  />
                </div>
                <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
                  <div className="space-y-2">
                    <Label htmlFor="cancellationDeadline">Cancellation Deadline (hours)</Label>
                    <Input
                      id="cancellationDeadline"
                      name="cancellationDeadline"
                      type="number"
                      min="0"
                      defaultValue={selectedPolicy?.cancellationDeadline || "24"}
                      required
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="penaltyFee">Penalty Fee ($)</Label>
                    <Input
                      id="penaltyFee"
                      name="penaltyFee"
                      type="number"
                      min="0"
                      step="0.01"
                      defaultValue={selectedPolicy?.penaltyFee || "25.00"}
                      required
                    />
                  </div>
                </div>
              </div>
              <DialogFooter>
                <Button type="button" variant="outline" onClick={closeDialog}>
                  Cancel
                </Button>
                <Button type="submit">{policyDialogState.mode === "create" ? "Create Policy" : "Save Changes"}</Button>
              </DialogFooter>
            </form>
          )}
        </DialogContent>
      </Dialog>

      {/* Delete Confirmation Dialog */}
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
              This action cannot be undone. This will permanently delete the policy
              {selectedPolicy && ` "${selectedPolicy.policyName}"`} and remove it from the system.
            </AlertDialogDescription>
          </AlertDialogHeader>
          <AlertDialogFooter>
            <AlertDialogCancel>Cancel</AlertDialogCancel>
            <AlertDialogAction onClick={confirmDeletePolicy} className="bg-red-600 hover:bg-red-700">
              Delete
            </AlertDialogAction>
          </AlertDialogFooter>
        </AlertDialogContent>
      </AlertDialog>
    </div>
  )
}

