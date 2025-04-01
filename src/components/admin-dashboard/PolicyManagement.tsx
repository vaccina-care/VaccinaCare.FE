/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable @typescript-eslint/no-explicit-any */
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
  Clock,
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
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { createPolicy, CreatePolicyData, deletePolicy, getAllPolicies, getPolicyById, updatePolicy, type PolicyBase } from "@/api/admin/policy" // Import từ policyStaff

type DialogMode = "view" | "edit" | "create"

export function PolicyManagement() {
  const [policies, setPolicies] = useState<PolicyBase[]>([])
  const [totalCount, setTotalCount] = useState(0)
  const [isLoading, setIsLoading] = useState(true)
  const [searchName, setSearchName] = useState("")
  const [pageIndex, setPage] = useState(1)
  const [pageSize] = useState(10)
  const [selectedPolicy, setSelectedPolicy] = useState<PolicyBase | null>(null)
  const { toast } = useToast()
  const [dialogOpen, setDialogOpen] = useState(false)
  const [dialogMode, setDialogMode] = useState<DialogMode>("view")
  const [deleteDialogOpen, setDeleteDialogOpen] = useState(false)

  // Add debounced search values
  const debouncedSearchName = useDebounce(searchName, 1000)

  const openDialog = useCallback((mode: DialogMode, policy: PolicyBase | null = null) => {
    setDialogMode(mode)
    setSelectedPolicy(policy)
    setDialogOpen(true)
  }, [])

  const closeDialog = useCallback(() => {
    setDialogOpen(false)
    setTimeout(() => {
      setSelectedPolicy(null)
      setDialogMode("view")
      document.body.style.pointerEvents = "auto"
    }, 300)
  }, [])

  const openDeleteDialog = useCallback((policy: PolicyBase) => {
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

  // Fetch policies từ API
  const fetchPolicies = useCallback(async () => {
    try {
      setIsLoading(true)
      const response = await getAllPolicies({
        searchTerm: debouncedSearchName,
        pageIndex,
        pageSize,
      })
      console.log("API Response:", response)
      if (response.isSuccess) {
        const policiesData = response.data.policies || []
        const total = response.data.totalCount || policiesData.length
        setPolicies(policiesData)
        setTotalCount(total)
        console.log("PageIndex:", pageIndex, "Policies:", policiesData, "TotalCount:", total)
      } else {
        console.error("API call failed:", response)
        setPolicies([])
        setTotalCount(0)
        toast({
          title: "Warning",
          description: "No policies returned from the server",
          variant: "destructive",
        })
      }
    } catch (error) {
      console.error("Error fetching policies:", error)
      toast({
        title: "Error",
        description: "Failed to fetch policies",
        variant: "destructive",
      })
      setPolicies([])
      setTotalCount(0)
    } finally {
      setIsLoading(false)
    }
  }, [debouncedSearchName, pageIndex, pageSize, toast])

  useEffect(() => {
    fetchPolicies()
  }, [fetchPolicies])

  // Dialog handlers
  const handleViewPolicy = useCallback(async (policy: PolicyBase) => {
    try {
      const response = await getPolicyById(policy.policyId)
      if (response.isSuccess) {
        setSelectedPolicy(response.data)
        openDialog("view", response.data)
      } else {
        toast({
          title: "Error",
          description: "Failed to fetch policy details",
          variant: "destructive",
        })
      }
    } catch (error) {
      console.error("Error fetching policy details:", error)
      toast({
        title: "Error",
        description: "Failed to fetch policy details",
        variant: "destructive",
      })
    }
  }, [openDialog, toast])

  const handleEditPolicy = useCallback((policy: PolicyBase) => {
    openDialog("edit", policy)
  }, [openDialog])

  const handleCreatePolicy = useCallback(() => {
    openDialog("create", null)
  }, [openDialog])

  const handleDeletePolicy = useCallback((policy: PolicyBase) => {
    openDeleteDialog(policy)
  }, [openDeleteDialog])

  const confirmDeletePolicy = useCallback(async () => {
    if (!selectedPolicy) return
    try {
      const response = await deletePolicy(selectedPolicy.policyId)
      if (response.isSuccess) {
        setPolicies((prev) => prev.filter((policy) => policy.policyId !== selectedPolicy.policyId))
        setTotalCount((prev) => prev - 1)
        toast({
          title: "Policy deleted",
          description: `${selectedPolicy.policyName} has been deleted successfully.`,
          variant: "success",
        })
        closeDeleteDialog()
        await fetchPolicies()
      } else {
        toast({
          title: "Error",
          description: "Failed to delete policy: " + (response.message || "Unknown error"),
          variant: "destructive",
        })
      }
    } catch (error) {
      console.error("Error deleting policy:", error)
      toast({
        title: "Error",
        description: "Failed to delete policy",
        variant: "destructive",
      })
    }
  }, [selectedPolicy, toast, closeDeleteDialog])

  const handleSavePolicy = useCallback(
    async (formData: any) => {
      try {
        const policyData: CreatePolicyData = {
          policyName: formData.policyName,
          description: formData.description,
          cancellationDeadline: Number.parseInt(formData.cancellationDeadline),
          penaltyFee: Number.parseFloat(formData.penaltyFee),
        }

        if (dialogMode === "create") {
          const response = await createPolicy(policyData)
          if (response.isSuccess) {
            const newPolicy = response.data
            setPolicies((prev) => [...prev, newPolicy])
            setTotalCount((prev) => prev + 1)
            toast({
              title: "Policy created",
              description: `${newPolicy.policyName} has been created successfully.`,
              variant: "success",
            })
            closeDialog()
            await fetchPolicies()
          } else {
            toast({
              title: "Error",
              description: "Failed to create policy: " + (response.message || "Unknown error"),
              variant: "destructive",
            })
          }
        } else if (dialogMode === "edit" && selectedPolicy) {
          const updatedPolicy: PolicyBase = {
            ...selectedPolicy,
            policyName: formData.policyName,
            description: formData.description,
            cancellationDeadline: Number.parseInt(formData.cancellationDeadline),
            penaltyFee: Number.parseFloat(formData.penaltyFee),
            updatedAt: new Date().toISOString().split("T")[0],
          }
          const response = await updatePolicy(selectedPolicy.policyId, updatedPolicy)
          if (response.isSuccess) {
            setPolicies((prev) =>
              prev.map((policy) => (policy.policyId === selectedPolicy.policyId ? response.data : policy))
            )
            toast({
              title: "Policy updated",
              description: `${response.data.policyName} has been updated successfully.`,
              variant: "success",
            })
            closeDialog()
            await fetchPolicies()
          } else {
            toast({
              title: "Error",
              description: "Failed to update policy: " + (response.message || "Unknown error"),
              variant: "destructive",
            })
          }
        }
      } catch (error) {
        console.error("Error saving policy:", error)
        toast({
          title: "Error",
          description: `Failed to ${dialogMode === "create" ? "create" : "update"} policy.`,
          variant: "destructive",
        })
      }
    },
    [dialogMode, selectedPolicy, toast, closeDialog]
  )

  const totalPages = Math.ceil(totalCount / pageSize)

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
          <div className="relative w-1/3">
            <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
            <Input
              placeholder="Search policies..."
              value={searchName}
              onChange={(e) => setSearchName(e.target.value)}
              className="pl-9"
            />
            {searchName && searchName !== debouncedSearchName && (
              <span className="absolute right-3 top-1/2 -translate-y-1/2 text-sm text-red-600">Searching...</span>
            )}
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
                <th className="px-4 py-3 text-left">Penalty Fee (đ)</th>
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
              ) : !policies || policies.length === 0 ? (
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
                    <td className="px-4 py-3 text-muted-foreground">{policy.penaltyFee.toLocaleString('vi-VN')}đ</td>
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

        <div className="flex items-center justify-between px-4 py-3 border-t">
          <div className="text-sm text-gray-500">
            {totalCount > 0 ? (
              <>
                {(pageIndex - 1) * pageSize + 1}-{Math.min(pageIndex * pageSize, totalCount)} of {totalCount} policies
              </>
            ) : (
              "No policies"
            )}
          </div>
          <div className="flex items-center gap-2">
            <span className="text-sm text-gray-500">
              Page {pageIndex} of {totalPages}
            </span>
            <Button
              variant="outline"
              size="icon"
              onClick={() => setPage((prev) => Math.max(prev - 1, 1))}
              disabled={pageIndex === 1}
              className="h-8 w-8"
            >
              <ChevronLeft className="h-4 w-4" />
            </Button>
            <Button
              variant="outline"
              size="icon"
              onClick={() => setPage((prev) => Math.min(prev + 1, totalPages))}
              disabled={pageIndex >= totalPages}
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
              {dialogMode === "view" ? "Policy Details" : dialogMode === "edit" ? "Edit Policy" : "Create New Policy"}
            </DialogTitle>
            <DialogDescription>
              {dialogMode === "view"
                ? "View policy information"
                : dialogMode === "edit"
                  ? "Make changes to policy information"
                  : "Add a new policy to the system"}
            </DialogDescription>
          </DialogHeader>

          {dialogMode === "view" && selectedPolicy ? (
            <div className="space-y-6">
              <div className="space-y-1">
                <h3 className="text-2xl font-semibold">{selectedPolicy.policyName}</h3>
              </div>


              <div className="space-y-4 pt-4">
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
                        <span className="text-muted-foreground">VND</span>
                        <span>{selectedPolicy.penaltyFee.toLocaleString('vi-VN')}đ</span>
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
                  )}</div>
              </div>
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
                    <Label htmlFor="penaltyFee">Penalty Fee (đ)</Label>
                    <Input
                      id="penaltyFee"
                      name="penaltyFee"
                      type="number"
                      min="0"
                      step="0.01"
                      defaultValue={selectedPolicy?.penaltyFee || "100000"}
                      required
                    />
                  </div>
                </div>
              </div>
              <DialogFooter>
                <Button type="button" variant="outline" onClick={closeDialog}>
                  Cancel
                </Button>
                <Button type="submit">{dialogMode === "create" ? "Create Policy" : "Save Changes"}</Button>
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