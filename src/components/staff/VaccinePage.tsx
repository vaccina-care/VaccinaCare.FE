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
    ArrowUp,
    ArrowDown,
} from "lucide-react"
import {
    getAllVaccines,
    getVaccineById,
    createVaccine,
    updateVaccine,
    deleteVaccine,
    type VaccineBase,
    type VaccineDetail,
    type VaccineFormData,
} from "@/api/vaccineStaff"
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
type DialogMode = "view" | "edit" | "create"
type SortField = "vaccineName" | "type" | "price" | "requiredDoses"
type SortDirection = "asc" | "desc"

export default function VaccinesPage() {
    const [vaccines, setVaccines] = useState<VaccineBase[]>([])
    const [totalCount, setTotalCount] = useState(0)
    const [isLoading, setIsLoading] = useState(true)
    const [searchTerm, setSearchTerm] = useState("")
    const [filterType, setFilterType] = useState<FilterType>("all")
    const [page, setPage] = useState(1)
    const [pageSize] = useState(10)
    const [selectedVaccine, setSelectedVaccine] = useState<VaccineDetail | null>(null)
    const [dialogMode, setDialogMode] = useState<DialogMode>("view")
    const [isDialogOpen, setIsDialogOpen] = useState(false)
    const [deleteConfirmOpen, setDeleteConfirmOpen] = useState(false)
    const [sortField, setSortField] = useState<SortField>("vaccineName")
    const [sortDirection, setSortDirection] = useState<SortDirection>("asc")
    const { toast } = useToast()

    const handleSort = (field: SortField) => {
        if (sortField === field) {
            setSortDirection(sortDirection === "asc" ? "desc" : "asc")
        } else {
            setSortField(field)
            setSortDirection("asc")
        }
    }

    const fetchVaccines = useCallback(async () => {
        try {
            setIsLoading(true)
            const response = await getAllVaccines({
                search: searchTerm,
                type: filterType === "all" ? undefined : filterType,
                page,
                pageSize,
                sortBy: sortField,
                isDescending: sortDirection === "desc",
            })

            if (response.isSuccess) {
                setVaccines(response.data.vaccines)
                setTotalCount(response.data.totalCount)
            } else {
                toast({
                    title: "Error",
                    description: response.message || "Failed to fetch vaccines",
                    variant: "destructive",
                })
            }
        } catch (error) {
            console.error("Error fetching vaccines:", error)
            toast({
                title: "Error",
                description: "Failed to fetch vaccines",
                variant: "destructive",
            })
        } finally {
            setIsLoading(false)
        }
    }, [searchTerm, filterType, page, pageSize, sortField, sortDirection, toast])

    useEffect(() => {
        fetchVaccines()
    }, [fetchVaccines])

    const handleView = async (vaccine: VaccineBase) => {
        try {
            const response = await getVaccineById(vaccine.id)
            if (response.isSuccess) {
                setSelectedVaccine(response.data)
                setDialogMode("view")
                setIsDialogOpen(true)
            }
        } catch (error) {
            toast({
                title: "Error",
                description: "Failed to fetch vaccine details",
                variant: "destructive",
            })
        }
    }

    const handleEdit = async (vaccine: VaccineBase) => {
        try {
            const response = await getVaccineById(vaccine.id)
            if (response.isSuccess) {
                setSelectedVaccine(response.data)
                setDialogMode("edit")
                setIsDialogOpen(true)
            }
        } catch (error) {
            toast({
                title: "Error",
                description: "Failed to fetch vaccine details",
                variant: "destructive",
            })
        }
    }

    const handleDelete = async (vaccine: VaccineBase) => {
        try {
            const response = await deleteVaccine(vaccine.id)
            if (response.isSuccess) {
                toast({
                    title: "Success",
                    description: "Vaccine deleted successfully",
                    variant: "success",
                })
                fetchVaccines()
            }
        } catch (error) {
            toast({
                title: "Error",
                description: "Failed to delete vaccine",
                variant: "destructive",
            })
        }
    }

    const handleSave = async (data: VaccineFormData) => {
        try {
            if (dialogMode === "create") {
                await createVaccine(data)
            } else if (dialogMode === "edit" && selectedVaccine) {
                await updateVaccine(selectedVaccine.id, data)
            }
            fetchVaccines()
        } catch (error) {
            throw error
        }
    }

    const getSortIcon = (field: SortField) => {
        if (sortField !== field) return null
        return sortDirection === "asc" ? <ArrowUp className="h-4 w-4" /> : <ArrowDown className="h-4 w-4" />
    }

    const totalPages = Math.ceil(totalCount / pageSize)

    return (
        <div className="flex flex-col gap-6 p-6">
            <div className="flex items-center justify-between">
                <h1 className="text-2xl font-semibold">Vaccines & Packages</h1>
                <Button
                    onClick={() => {
                        setSelectedVaccine(null)
                        setDialogMode("create")
                        setIsDialogOpen(true)
                    }}
                    className="bg-blue-600 hover:bg-blue-700"
                >
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

            <div className="rounded-md border bg-white overflow-hidden">
                <div className="overflow-x-auto">
                    <table className="w-full">
                        <thead>
                            <tr className="border-b bg-gray-50">
                                <th className="w-[50px] px-4 py-3 text-left">
                                    <input type="checkbox" className="rounded border-gray-300" />
                                </th>
                                <th
                                    className="px-4 py-3 text-left cursor-pointer hover:bg-gray-100"
                                    onClick={() => handleSort("vaccineName")}
                                >
                                    <div className="flex items-center gap-1">
                                        <span>Title</span>
                                        {getSortIcon("vaccineName")}
                                    </div>
                                </th>
                                <th className="px-4 py-3 text-left cursor-pointer hover:bg-gray-100" onClick={() => handleSort("type")}>
                                    <div className="flex items-center gap-1">
                                        <span>Status</span>
                                        {getSortIcon("type")}
                                    </div>
                                </th>
                                <th
                                    className="px-4 py-3 text-left cursor-pointer hover:bg-gray-100"
                                    onClick={() => handleSort("price")}
                                >
                                    <div className="flex items-center gap-1">
                                        <span>Priority</span>
                                        {getSortIcon("price")}
                                    </div>
                                </th>
                                <th
                                    className="px-4 py-3 text-left cursor-pointer hover:bg-gray-100"
                                    onClick={() => handleSort("requiredDoses")}
                                >
                                    <div className="flex items-center gap-1">
                                        <span>Archived</span>
                                        {getSortIcon("requiredDoses")}
                                    </div>
                                </th>
                                <th className="px-4 py-3 text-left">Created At</th>
                                <th className="w-[80px] px-4 py-3 text-right">Actions</th>
                            </tr>
                        </thead>
                        <tbody>
                            {isLoading ? (
                                Array.from({ length: 5 }).map((_, index) => (
                                    <tr key={`skeleton-${index}`} className="border-b animate-pulse">
                                        <td className="px-4 py-3">
                                            <div className="h-4 w-4 bg-gray-200 rounded" />
                                        </td>
                                        <td className="px-4 py-3">
                                            <div className="h-5 bg-gray-200 rounded w-3/4" />
                                        </td>
                                        <td className="px-4 py-3">
                                            <div className="h-5 bg-gray-200 rounded w-20" />
                                        </td>
                                        <td className="px-4 py-3">
                                            <div className="h-5 bg-gray-200 rounded w-16" />
                                        </td>
                                        <td className="px-4 py-3">
                                            <div className="h-5 bg-gray-200 rounded w-12" />
                                        </td>
                                        <td className="px-4 py-3">
                                            <div className="h-5 bg-gray-200 rounded w-24" />
                                        </td>
                                        <td className="px-4 py-3 text-right">
                                            <div className="h-8 bg-gray-200 rounded w-8 ml-auto" />
                                        </td>
                                    </tr>
                                ))
                            ) : vaccines.length === 0 ? (
                                <tr>
                                    <td colSpan={7} className="px-4 py-8 text-center text-gray-500">
                                        No vaccines found
                                    </td>
                                </tr>
                            ) : (
                                vaccines.map((vaccine) => (
                                    <tr key={vaccine.id} className="border-b hover:bg-gray-50">
                                        <td className="px-4 py-3">
                                            <input type="checkbox" className="rounded border-gray-300" />
                                        </td>
                                        <td className="px-4 py-3 font-medium">
                                            <div className="flex items-center gap-2">
                                                <span className="truncate max-w-[300px]">{vaccine.vaccineName}</span>
                                            </div>
                                        </td>
                                        <td className="px-4 py-3">
                                            <Badge variant="outline" className="bg-gray-100 hover:bg-gray-200 border-0">
                                                {vaccine.type}
                                            </Badge>
                                        </td>
                                        <td className="px-4 py-3">
                                            <div className="flex items-center">
                                                {vaccine.price > 500000 ? (
                                                    <Badge className="bg-amber-100 text-amber-800 hover:bg-amber-200 border-0">High</Badge>
                                                ) : vaccine.price > 200000 ? (
                                                    <Badge className="bg-blue-100 text-blue-800 hover:bg-blue-200 border-0">Medium</Badge>
                                                ) : (
                                                    <Badge className="bg-green-100 text-green-800 hover:bg-green-200 border-0">Low</Badge>
                                                )}
                                            </div>
                                        </td>
                                        <td className="px-4 py-3">
                                            <Badge variant="outline" className="bg-gray-100 hover:bg-gray-200 border-0">
                                                No
                                            </Badge>
                                        </td>
                                        <td className="px-4 py-3 text-gray-500 text-sm">{new Date().toLocaleDateString()}</td>
                                        <td className="px-4 py-3 text-right">
                                            <DropdownMenu>
                                                <DropdownMenuTrigger asChild>
                                                    <Button variant="ghost" size="icon" className="h-8 w-8">
                                                        <MoreHorizontal className="h-4 w-4" />
                                                    </Button>
                                                </DropdownMenuTrigger>
                                                <DropdownMenuContent align="end">
                                                    <DropdownMenuItem onClick={() => handleView(vaccine)}>
                                                        <Eye className="mr-2 h-4 w-4" />
                                                        View
                                                    </DropdownMenuItem>
                                                    <DropdownMenuItem onClick={() => handleEdit(vaccine)}>
                                                        <Pencil className="mr-2 h-4 w-4" />
                                                        Edit
                                                    </DropdownMenuItem>
                                                    <DropdownMenuItem
                                                        onClick={() => {
                                                            setSelectedVaccine(vaccine as VaccineDetail)
                                                            setDeleteConfirmOpen(true)
                                                        }}
                                                        className="text-red-600"
                                                    >
                                                        <Trash2 className="mr-2 h-4 w-4" />
                                                        Delete
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
                                {(page - 1) * pageSize + 1}-{Math.min(page * pageSize, totalCount)} of {totalCount} row(s) selected.
                            </>
                        ) : (
                            "0 rows selected."
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

            <VaccineDetailDialog
                vaccine={selectedVaccine}
                isOpen={isDialogOpen}
                onClose={() => setIsDialogOpen(false)}
                onSave={handleSave}
                mode={dialogMode}
            />

            <AlertDialog open={deleteConfirmOpen} onOpenChange={setDeleteConfirmOpen}>
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

