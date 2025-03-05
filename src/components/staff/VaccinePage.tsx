/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable no-useless-catch */
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
    getAllVaccines,
    createVaccine,
    updateVaccine,
    deleteVaccine,
    type VaccineBase,
    type VaccineDetail,
    type VaccineFormData,
} from "@/api/vaccineStaff"
import { getVaccinePackages, type VaccinePackage } from "@/api/packageVaccine"
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
import { VaccineDetailDialog } from "@/components/staff/VaccineDetailDialog"

type FilterType = "all" | "single" | "package"

export default function VaccinesPage() {
    const [vaccines, setVaccines] = useState<VaccineBase[]>([])
    const [packages, setPackages] = useState<VaccinePackage[]>([])
    const [totalCount, setTotalCount] = useState(0)
    const [isLoading, setIsLoading] = useState(true)
    const [searchTerm, setSearchTerm] = useState("")
    const [filterType, setFilterType] = useState<FilterType>("all")
    const [page, setPage] = useState(1)
    const [pageSize] = useState(10)
    const [selectedVaccine, setSelectedVaccine] = useState<VaccineDetail | null>(null)
    const [deleteConfirmOpen, setDeleteConfirmOpen] = useState(false)
    const { toast } = useToast()

    // Update the dialog state management
    const [dialogState, setDialogState] = useState<{
        isOpen: boolean
        mode: "view" | "edit" | "create"
        vaccineId: string | null
    }>({
        isOpen: false,
        mode: "view",
        vaccineId: null,
    })

    const handleCloseDialog = useCallback(() => {
        setDialogState({
            isOpen: false,
            mode: "view",
            vaccineId: null,
        })
    }, [])

    // Fetch both vaccines and packages
    const fetchData = useCallback(async () => {
        try {
            setIsLoading(true)
            const [vaccineResponse, packagesResponse] = await Promise.all([
                getAllVaccines({
                    search: searchTerm,
                    page,
                    pageSize,
                }),
                getVaccinePackages(),
            ])

            if (vaccineResponse.isSuccess) {
                setVaccines(vaccineResponse.data.vaccines)
                setTotalCount(vaccineResponse.data.totalCount)
            }

            setPackages(packagesResponse)
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
    }, [searchTerm, page, pageSize, toast])

    useEffect(() => {
        fetchData()
    }, [fetchData])

    // Filter data based on type
    const filteredData =
        filterType === "package" ? packages : filterType === "single" ? vaccines : [...vaccines, ...packages]

    // Update the dialog open handlers
    const handleView = useCallback((item: VaccineBase) => {
        setDialogState({
            isOpen: true,
            mode: "view",
            vaccineId: item.id,
        })
    }, [])

    const handleEdit = useCallback((item: VaccineBase) => {
        setDialogState({
            isOpen: true,
            mode: "edit",
            vaccineId: item.id,
        })
    }, [])

    const handleCreate = useCallback(() => {
        setDialogState({
            isOpen: true,
            mode: "create",
            vaccineId: null,
        })
    }, [])

    // Handle delete action
    const handleDelete = async (item: VaccineBase) => {
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

    // Handle save action
    const handleSave = async (data: VaccineFormData) => {
        try {
            if (dialogState.mode === "create") {
                await createVaccine(data)
            } else if (dialogState.mode === "edit" && dialogState.vaccineId) {
                await updateVaccine(dialogState.vaccineId, data)
            }
            fetchData()
        } catch (error) {
            throw error
        }
    }

    const totalPages = Math.ceil(totalCount / pageSize)

    // Update the dialog close handler

    return (
        <div className="flex flex-col gap-6 p-6">
            <div className="flex items-center justify-between">
                <h1 className="text-2xl font-semibold">Vaccines & Packages</h1>
                <Button onClick={handleCreate} className="bg-blue-600 hover:bg-blue-700">
                    <Plus className="mr-2 h-4 w-4" />
                    Add New
                </Button>
            </div>

            <div className="flex flex-col md:flex-row gap-4">
                <div className="relative flex-1">
                    <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
                    <Input
                        placeholder="Filter titles..."
                        value={searchTerm}
                        onChange={(e) => setSearchTerm(e.target.value)}
                        className="pl-9"
                    />
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
                                                        <DropdownMenuItem
                                                            onClick={() => {
                                                                /* Handle package view */
                                                            }}
                                                        >
                                                            <Eye className="mr-2 h-4 w-4" />
                                                            View Package
                                                        </DropdownMenuItem>
                                                    ) : (
                                                        <>
                                                            <DropdownMenuItem onClick={() => handleView(item)}>
                                                                <Eye className="mr-2 h-4 w-4" />
                                                                View
                                                            </DropdownMenuItem>
                                                            <DropdownMenuItem onClick={() => handleEdit(item)}>
                                                                <Pencil className="mr-2 h-4 w-4" />
                                                                Edit
                                                            </DropdownMenuItem>
                                                            <DropdownMenuItem
                                                                onClick={() => {
                                                                    setSelectedVaccine(item as VaccineDetail)
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

            {/* Update the dialog component usage */}
            <VaccineDetailDialog
                vaccineId={dialogState.vaccineId}
                isOpen={dialogState.isOpen}
                mode={dialogState.mode}
                onClose={handleCloseDialog}
                onSave={async (data) => {
                    await handleSave(data)
                    handleCloseDialog()
                    await fetchData()
                }}
            />

            <AlertDialog
                open={deleteConfirmOpen}
                onOpenChange={(open) => {
                    if (!open) {
                        setDeleteConfirmOpen(false);
                        setSelectedVaccine(null);

                        // Ensure pointer events are restored after a slight delay
                        setTimeout(() => {
                            document.body.style.pointerEvents = "auto";
                        }, 300);
                    }
                }}
            >

                <AlertDialogContent>
                    <AlertDialogHeader>
                        <AlertDialogTitle>Are you sure?</AlertDialogTitle>
                        <AlertDialogDescription>
                            This action cannot be undone. This will permanently delete the vaccine.
                        </AlertDialogDescription>
                    </AlertDialogHeader>
                    <AlertDialogFooter>
                        <AlertDialogCancel>Cancel</AlertDialogCancel>
                        <AlertDialogAction
                            onClick={() => {
                                if (selectedVaccine) {
                                    handleDelete(selectedVaccine)
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

