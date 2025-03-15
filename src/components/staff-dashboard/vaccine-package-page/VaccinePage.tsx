/* eslint-disable @typescript-eslint/no-unused-vars */
"use client"

import { useEffect, useState, useCallback } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Badge } from "@/components/ui/badge"
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu"
import {
    Package,
    Plus,
    Search,
    Syringe,
    MoreHorizontal,
    Eye,
    Pencil,
    Trash2,
    ChevronLeft,
    ChevronRight,
} from "lucide-react"
import {
    createVaccine,
    updateVaccine,
    deleteVaccine,
    type VaccineBase,
    type VaccineDetail,
    type VaccineFormData,
} from "@/api/staff/vaccineStaff"
import {
    createVaccinePackage,
    updateVaccinePackage,
    deleteVaccinePackage,
    type VaccinePackage,
    type CreatePackageRequest,
} from "@/api/staff/packageStaff"
import { getAllTypes } from "@/api/getAllType"
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
import { VaccineDetailDialog } from "@/components/staff-dashboard/vaccine-package-page/VaccineDetailDialog"
import { PackageDetailDialog } from "@/components/staff-dashboard/vaccine-package-page/PackageDetailDialog"
import { CreateSelectionDialog } from "@/components/staff-dashboard/vaccine-package-page/CreateDialog"

type FilterType = "all" | "single" | "package"
type DialogMode = "view" | "edit" | "create"

export default function VaccinePage() {
    const [vaccines, setVaccines] = useState<VaccineBase[]>([])
    const [packages, setPackages] = useState<VaccinePackage[]>([])
    const [totalCount, setTotalCount] = useState(0)
    const [isLoading, setIsLoading] = useState(true)
    const [searchName, setSearchName] = useState("")
    const [searchDescription, setSearchDescription] = useState("")
    const [filterType, setFilterType] = useState<FilterType>("all")
    const [page, setPage] = useState(1)
    const [pageSize] = useState(10)
    const [selectedVaccine, setSelectedVaccine] = useState<VaccineDetail | null>(null)
    const [selectedPackage, setSelectedPackage] = useState<VaccinePackage | null>(null)
    const [deleteConfirmOpen, setDeleteConfirmOpen] = useState(false)
    const [isPackageDelete, setIsPackageDelete] = useState(false)
    const [selectionDialogOpen, setSelectionDialogOpen] = useState(false)
    const { toast } = useToast()

    // Add debounced search values
    const debouncedSearchName = useDebounce(searchName, 300)
    const debouncedSearchDescription = useDebounce(searchDescription, 300)

    // Update the dialog state management
    const [vaccineDialogState, setVaccineDialogState] = useState<{
        isOpen: boolean
        mode: DialogMode
        vaccineId: string | null
    }>({
        isOpen: false,
        mode: "view",
        vaccineId: null,
    })

    const [packageDialogState, setPackageDialogState] = useState<{
        isOpen: boolean
        mode: DialogMode
        packageId: string | null
    }>({
        isOpen: false,
        mode: "view",
        packageId: null,
    })

    const handleCloseVaccineDialog = useCallback(() => {
        setVaccineDialogState({
            isOpen: false,
            mode: "view",
            vaccineId: null,
        })
    }, [])

    const handleClosePackageDialog = useCallback(() => {
        setPackageDialogState({
            isOpen: false,
            mode: "view",
            packageId: null,
        })
    }, [])

    const handleCloseSelectionDialog = useCallback(() => {
        setSelectionDialogOpen(false)
    }, [])

    // Fetch both vaccines and packages
    const fetchData = useCallback(async () => {
        try {
            setIsLoading(true)

            // Use the combined API with debounced search values
            const response = await getAllTypes({
                searchName: debouncedSearchName,
                searchDescription: debouncedSearchDescription,
                pageNumber: page,
                pageSize,
            })

            if (response.isSuccess) {
                const data = response.data.items[0]

                // Filter based on type
                if (filterType === "package") {
                    setPackages(data.vaccinePackages)
                    setVaccines([])
                } else if (filterType === "single") {
                    setVaccines(data.vaccines)
                    setPackages([])
                } else {
                    setVaccines(data.vaccines)
                    setPackages(data.vaccinePackages)
                }

                setTotalCount(response.data.totalCount)
            }
        } catch (error) {
            console.error("Error fetching data:", error)
            toast({
                title: "Error",
                description: "Failed to fetch data",
                variant: "destructive",
            })
        } finally {
            setIsLoading(false)
        }
    }, [debouncedSearchName, debouncedSearchDescription, page, pageSize, filterType, toast])

    useEffect(() => {
        fetchData()
    }, [fetchData])

    // Filter data based on type
    const filteredData =
        filterType === "package" ? packages : filterType === "single" ? vaccines : [...vaccines, ...packages]

    // Update the dialog open handlers for vaccines
    const handleViewVaccine = useCallback((item: VaccineBase) => {
        setVaccineDialogState({
            isOpen: true,
            mode: "view",
            vaccineId: item.id,
        })
    }, [])

    const handleEditVaccine = useCallback((item: VaccineBase) => {
        setVaccineDialogState({
            isOpen: true,
            mode: "edit",
            vaccineId: item.id,
        })
    }, [])

    const handleCreateVaccine = useCallback(() => {
        setVaccineDialogState({
            isOpen: true,
            mode: "create",
            vaccineId: null,
        })
        setSelectionDialogOpen(false)
    }, [])

    // Update the dialog open handlers for packages
    const handleViewPackage = useCallback((item: VaccinePackage) => {
        setPackageDialogState({
            isOpen: true,
            mode: "view",
            packageId: item.id,
        })
    }, [])

    const handleEditPackage = useCallback((item: VaccinePackage) => {
        setPackageDialogState({
            isOpen: true,
            mode: "edit",
            packageId: item.id,
        })
    }, [])

    const handleCreatePackage = useCallback(() => {
        setPackageDialogState({
            isOpen: true,
            mode: "create",
            packageId: null,
        })
        setSelectionDialogOpen(false)
    }, [])

    // Handle create new (open the selection dialog)
    const handleCreateNew = useCallback(() => {
        setSelectionDialogOpen(true)
    }, [])

    // Handle delete action for vaccine
    const handleDeleteVaccine = async (item: VaccineBase) => {
        try {
            const response = await deleteVaccine(item.id)
            if (response.isSuccess) {
                toast({
                    title: "Success",
                    description: "Vaccine deleted successfully",
                    variant: "success",
                })
                fetchData()
            }
        } catch (error) {
            toast({
                title: "Error",
                description: "Failed to delete vaccine",
                variant: "destructive",
            })
        }
    }

    // Handle delete action for package
    const handleDeletePackage = async (item: VaccinePackage) => {
        try {
            const response = await deleteVaccinePackage(item.id)
            if (response.isSuccess) {
                toast({
                    title: "Success",
                    description: "Package deleted successfully",
                    variant: "success",
                })
                fetchData()
            }
        } catch (error) {
            toast({
                title: "Error",
                description: "Failed to delete package",
                variant: "destructive",
            })
        }
    }

    // Handle save action for vaccine
    const handleSaveVaccine = async (data: VaccineFormData) => {
        try {
            let response
            if (vaccineDialogState.mode === "create") {
                response = await createVaccine(data)
            } else if (vaccineDialogState.mode === "edit" && vaccineDialogState.vaccineId) {
                response = await updateVaccine(vaccineDialogState.vaccineId, data)
            }

            if (response?.isSuccess) {
                toast({
                    title: "Success",
                    description: `Vaccine ${vaccineDialogState.mode === "create" ? "created" : "updated"} successfully.`,
                    variant: "success",
                })
                await fetchData()
                handleCloseVaccineDialog()
            } else {
                toast({
                    title: "Error",
                    description: "Something went wrong.",
                    variant: "destructive",
                })
            }
        } catch (error) {
            console.error("Error saving vaccine:", error)
            toast({
                title: "Error",
                description: `Failed to ${vaccineDialogState.mode === "create" ? "create" : "update"} vaccine.`,
                variant: "destructive",
            })
        }
    }

    // Handle save action for package
    const handleSavePackage = async (data: CreatePackageRequest) => {
        try {
            let response
            if (packageDialogState.mode === "create") {
                response = await createVaccinePackage(data)
            } else if (packageDialogState.mode === "edit" && packageDialogState.packageId) {
                response = await updateVaccinePackage(packageDialogState.packageId, data)
            }

            if (response?.isSuccess) {
                toast({
                    title: "Success",
                    description: `Package ${packageDialogState.mode === "create" ? "created" : "updated"} successfully.`,
                    variant: "success",
                })
                await fetchData()
                handleClosePackageDialog()
            } else {
                toast({
                    title: "Error",
                    description: "Something went wrong.",
                    variant: "destructive",
                })
            }
        } catch (error) {
            console.error("Error saving package:", error)
            toast({
                title: "Error",
                description: `Failed to ${packageDialogState.mode === "create" ? "create" : "update"} package.`,
                variant: "destructive",
            })
        }
    }

    const totalPages = Math.ceil(totalCount / pageSize)

    return (
        <div className="flex flex-col gap-6 p-6">
            <div className="flex items-center justify-between">
                <h1 className="text-2xl font-semibold">Vaccines & Packages</h1>
                <Button onClick={handleCreateNew} className="bg-blue-600 hover:bg-blue-700">
                    <Plus className="mr-2 h-4 w-4" />
                    Add New
                </Button>
            </div>

            <div className="flex flex-col md:flex-row gap-4">
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
                        <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
                        <Input
                            placeholder="Search by description..."
                            value={searchDescription}
                            onChange={(e) => setSearchDescription(e.target.value)}
                            className="pl-9"
                        />
                    </div>
                </div>
                <Select value={filterType} onValueChange={(value: FilterType) => setFilterType(value)}>
                    <SelectTrigger className="w-[180px]">
                        <SelectValue placeholder="Status" />
                    </SelectTrigger>
                    <SelectContent>
                        <SelectItem value="all">
                            <div className="flex items-center gap-2">
                                <span>All Types</span>
                            </div>
                        </SelectItem>
                        <SelectItem value="single">
                            <div className="flex items-center gap-2">
                                <Syringe className="h-4 w-4" />
                                <span>Single Vaccines</span>
                            </div>
                        </SelectItem>
                        <SelectItem value="package">
                            <div className="flex items-center gap-2">
                                <Package className="h-4 w-4" />
                                <span>Vaccine Packages</span>
                            </div>
                        </SelectItem>
                    </SelectContent>
                </Select>
            </div>

            <div className="rounded-md border bg-card overflow-hidden">
                <div className="overflow-x-auto">
                    <table className="w-full">
                        <thead>
                            <tr className="border-b bg-muted/50">
                                <th className="px-4 py-3 text-left">Name</th>
                                <th className="px-4 py-3 text-left">Type</th>
                                <th className="px-4 py-3 text-left">Price</th>
                                <th className="px-4 py-3 text-left">Required Doses</th>
                                <th className="w-[80px] px-4 py-3 text-right">Actions</th>
                            </tr>
                        </thead>
                        <tbody>
                            {isLoading ? (
                                Array.from({ length: 5 }).map((_, index) => (
                                    <tr key={`skeleton-${index}`} className="border-b animate-pulse">
                                        <td className="px-4 py-3">
                                            <div className="h-5 bg-gray-200 dark:bg-gray-700 rounded w-3/4" />
                                        </td>
                                        <td className="px-4 py-3">
                                            <div className="h-5 bg-gray-200 dark:bg-gray-700 rounded w-20" />
                                        </td>
                                        <td className="px-4 py-3">
                                            <div className="h-5 bg-gray-200 dark:bg-gray-700 rounded w-16" />
                                        </td>
                                        <td className="px-4 py-3">
                                            <div className="h-5 bg-gray-200 dark:bg-gray-700 rounded w-12" />
                                        </td>
                                        <td className="px-4 py-3 text-right">
                                            <div className="h-8 bg-gray-200 dark:bg-gray-700 rounded w-8 ml-auto" />
                                        </td>
                                    </tr>
                                ))
                            ) : filteredData.length === 0 ? (
                                <tr>
                                    <td colSpan={6} className="px-4 py-8 text-center text-gray-500">
                                        No items found
                                    </td>
                                </tr>
                            ) : (
                                filteredData.map((item) => (
                                    <tr key={item.id} className="border-b hover:bg-muted/50">
                                        <td className="px-4 py-3 font-medium">
                                            <div className="flex items-center gap-2">
                                                <span className="truncate max-w-[300px]">
                                                    {"packageName" in item ? item.packageName : item.vaccineName}
                                                </span>
                                            </div>
                                        </td>
                                        <td className="px-4 py-3">
                                            <Badge
                                                variant="outline"
                                                className="bg-gray-100 dark:bg-gray-800 hover:bg-gray-200 dark:hover:bg-gray-700 border-0"
                                            >
                                                {"packageName" in item ? "Package" : item.type}
                                            </Badge>
                                        </td>
                                        <td className="px-4 py-3">
                                            {new Intl.NumberFormat("vi-VN", {
                                                style: "currency",
                                                currency: "VND",
                                            }).format(item.price)}
                                        </td>
                                        <td className="px-4 py-3">{"packageName" in item ? "-" : item.requiredDoses}</td>
                                        <td className="px-4 py-3 text-right">
                                            <DropdownMenu>
                                                <DropdownMenuTrigger asChild>
                                                    <Button variant="ghost" size="icon" className="h-8 w-8">
                                                        <MoreHorizontal className="h-4 w-4" />
                                                    </Button>
                                                </DropdownMenuTrigger>
                                                <DropdownMenuContent align="end">
                                                    {"packageName" in item ? (
                                                        <>
                                                            <DropdownMenuItem onClick={() => handleViewPackage(item)}>
                                                                <Eye className="mr-2 h-4 w-4" />
                                                                View Package
                                                            </DropdownMenuItem>
                                                            <DropdownMenuItem onClick={() => handleEditPackage(item)}>
                                                                <Pencil className="mr-2 h-4 w-4" />
                                                                Edit Package
                                                            </DropdownMenuItem>
                                                            <DropdownMenuItem
                                                                onClick={() => {
                                                                    setSelectedPackage(item)
                                                                    setIsPackageDelete(true)
                                                                    setDeleteConfirmOpen(true)
                                                                }}
                                                                className="text-red-600"
                                                            >
                                                                <Trash2 className="mr-2 h-4 w-4" />
                                                                Delete Package
                                                            </DropdownMenuItem>
                                                        </>
                                                    ) : (
                                                        <>
                                                            <DropdownMenuItem onClick={() => handleViewVaccine(item)}>
                                                                <Eye className="mr-2 h-4 w-4" />
                                                                View
                                                            </DropdownMenuItem>
                                                            <DropdownMenuItem onClick={() => handleEditVaccine(item)}>
                                                                <Pencil className="mr-2 h-4 w-4" />
                                                                Edit
                                                            </DropdownMenuItem>
                                                            <DropdownMenuItem
                                                                onClick={() => {
                                                                    setSelectedVaccine(item as VaccineDetail)
                                                                    setIsPackageDelete(false)
                                                                    setDeleteConfirmOpen(true)
                                                                }}
                                                                className="text-red-600"
                                                            >
                                                                <Trash2 className="mr-2 h-4 w-4" />
                                                                Delete
                                                            </DropdownMenuItem>
                                                        </>
                                                    )}
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
                                {(page - 1) * pageSize + 1}-{Math.min(page * pageSize, totalCount)} of {totalCount} items
                            </>
                        ) : (
                            "No items"
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

            {/* Selection Dialog */}
            <CreateSelectionDialog
                isOpen={selectionDialogOpen}
                onClose={handleCloseSelectionDialog}
                onSelectVaccine={handleCreateVaccine}
                onSelectPackage={handleCreatePackage}
            />

            {/* Vaccine Dialog for View/Edit/Create */}
            <VaccineDetailDialog
                vaccineId={vaccineDialogState.vaccineId}
                isOpen={vaccineDialogState.isOpen}
                mode={vaccineDialogState.mode}
                onClose={handleCloseVaccineDialog}
                onSave={handleSaveVaccine}
            />

            {/* Package Dialog for View/Edit/Create */}
            <PackageDetailDialog
                packageId={packageDialogState.packageId}
                isOpen={packageDialogState.isOpen}
                mode={packageDialogState.mode}
                onClose={handleClosePackageDialog}
                onSave={handleSavePackage}
            />

            <AlertDialog
                open={deleteConfirmOpen}
                onOpenChange={(open) => {
                    if (!open) {
                        setDeleteConfirmOpen(false)
                        setSelectedVaccine(null)
                        setSelectedPackage(null)

                        // Ensure pointer events are restored after a slight delay
                        setTimeout(() => {
                            document.body.style.pointerEvents = "auto"
                        }, 300)
                    }
                }}
            >
                <AlertDialogContent>
                    <AlertDialogHeader>
                        <AlertDialogTitle>Are you sure?</AlertDialogTitle>
                        <AlertDialogDescription>
                            This action cannot be undone. This will permanently delete the {isPackageDelete ? "package" : "vaccine"}.
                        </AlertDialogDescription>
                    </AlertDialogHeader>
                    <AlertDialogFooter>
                        <AlertDialogCancel>Cancel</AlertDialogCancel>
                        <AlertDialogAction
                            onClick={() => {
                                if (isPackageDelete && selectedPackage) {
                                    handleDeletePackage(selectedPackage)
                                } else if (!isPackageDelete && selectedVaccine) {
                                    handleDeleteVaccine(selectedVaccine)
                                }
                                setDeleteConfirmOpen(false)
                            }}
                            className="bg-red-600 hover:bg-red-700"
                        >
                            Delete
                        </AlertDialogAction>
                    </AlertDialogFooter>
                </AlertDialogContent>
            </AlertDialog>
        </div>
    )
}

