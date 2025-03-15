/* eslint-disable @typescript-eslint/no-unused-vars */
"use client"

import type React from "react"
import { useState, useEffect, useCallback, useRef } from "react"
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Loader2, Package, Syringe, Search, Trash2, ArrowUp, ArrowDown, Landmark, Info } from "lucide-react"
import { getVaccinePackageById, type VaccineDetail } from "@/api/staff/packageStaff"
import { getAllVaccines, getVaccineById, type VaccineBase } from "@/api/staff/vaccineStaff"
import { useToast } from "@/hooks/use-toast"
import { motion, AnimatePresence } from "framer-motion"
import { Badge } from "@/components/ui/badge"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Card, CardContent, CardDescription, CardHeader, CardTitle, CardFooter } from "@/components/ui/card"
import { ScrollArea } from "@/components/ui/scroll-area"
import { Separator } from "@/components/ui/separator"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"

interface PackageDetailDialogProps {
    packageId: string | null
    isOpen: boolean
    onClose: () => void
    onSave: (data: CreatePackageRequest) => Promise<void>
    mode: "view" | "edit" | "create"
}

interface CreatePackageRequest {
    packageName: string
    description: string
    vaccineDetails: VaccineDetail[]
}

const initialFormState: CreatePackageRequest = {
    packageName: "",
    description: "",
    vaccineDetails: [],
}

export function PackageDetailDialog({ packageId, isOpen, onClose, onSave, mode }: PackageDetailDialogProps) {
    const [isLoading, setIsLoading] = useState(false)
    const [isFetching, setIsFetching] = useState(false)
    const { toast } = useToast()
    const [formData, setFormData] = useState<CreatePackageRequest>(initialFormState)
    const [activeTab, setActiveTab] = useState<string>("general")
    const [searchTerm, setSearchTerm] = useState("")
    const [searchResults, setSearchResults] = useState<VaccineBase[]>([])
    const [isSearching, setIsSearching] = useState(false)
    const [vaccineDetails, setVaccineDetails] = useState<(VaccineBase & { doseOrder: number })[]>([])
    const [contentType, setContentType] = useState<"package" | "vaccine">("package")

    // Use a ref to track if the component is mounted
    const isMounted = useRef(true)

    // Track internal open state to handle cleanup properly
    const [internalOpen, setInternalOpen] = useState(false)

    // Synchronize internal state with prop
    useEffect(() => {
        if (isOpen && !internalOpen) {
            setInternalOpen(true)
        }
    }, [isOpen, internalOpen])

    const resetForm = useCallback(() => {
        if (isMounted.current) {
            setFormData(initialFormState)
            setIsLoading(false)
            setIsFetching(false)
            setActiveTab("general")
            setSearchTerm("")
            setSearchResults([])
            setVaccineDetails([])
            setContentType("package")
        }
    }, [])

    const fetchPackageData = useCallback(async () => {
        if (!packageId || mode === "create" || !isOpen) {
            resetForm()
            return
        }

        try {
            setIsFetching(true)
            const packageData = await getVaccinePackageById(packageId)

            if (!isMounted.current) return

            // Extract vaccine IDs
            const vaccineIds = packageData.vaccineDetails.map((detail) => detail.vaccineId)

            // Fetch vaccine details for each ID in parallel
            const vaccineDetailsPromises = vaccineIds.map(async (id) => {
                try {
                    const response = await getVaccineById(id)
                    if (response.isSuccess) {
                        return response.data
                    }
                    return null
                } catch (error) {
                    console.error(`Error fetching vaccine ${id}:`, error)
                    return null
                }
            })

            const vaccineDetailsResults = await Promise.all(vaccineDetailsPromises)
            const validVaccineDetails = vaccineDetailsResults.filter(Boolean)

            // Map vaccine details to include dose order from package
            const detailedVaccines = packageData.vaccineDetails
                .map((detail) => {
                    const vaccineInfo = validVaccineDetails.find((v) => v && v.id === detail.vaccineId)
                    return vaccineInfo ? { ...vaccineInfo, doseOrder: detail.doseOrder } : null
                })
                .filter(Boolean) as (VaccineBase & { doseOrder: number })[]

            // Sort vaccines by dose order
            detailedVaccines.sort((a, b) => a.doseOrder - b.doseOrder)

            // Update state with fetched data
            setVaccineDetails(detailedVaccines)
            setFormData({
                packageName: packageData.packageName,
                description: packageData.description,
                vaccineDetails: packageData.vaccineDetails,
            })
        } catch (error) {
            if (!isMounted.current) return

            console.error("Error fetching package:", error)
            toast({
                title: "Error",
                description: "Failed to fetch package details",
                variant: "destructive",
            })
            handleClose()
        } finally {
            if (isMounted.current) {
                setIsFetching(false)
            }
        }
    }, [packageId, mode, isOpen, toast, resetForm])

    // Set up mount/unmount effect
    useEffect(() => {
        isMounted.current = true

        return () => {
            isMounted.current = false
        }
    }, [])

    // Handle dialog open/close
    useEffect(() => {
        if (isOpen) {
            fetchPackageData()
        }
    }, [isOpen, fetchPackageData])

    const isViewMode = mode === "view"
    const title = mode === "create" ? "CREATE PACKAGE" : mode === "edit" ? "EDIT PACKAGE" : "PACKAGE DETAILS"

    const handleSearchVaccines = async () => {
        if (!searchTerm.trim()) {
            setSearchResults([])
            return
        }

        try {
            setIsSearching(true)
            const response = await getAllVaccines({ search: searchTerm })
            if (response.isSuccess) {
                setSearchResults(response.data.vaccines)
            }
        } catch (error) {
            console.error("Error searching vaccines:", error)
            toast({
                title: "Error",
                description: "Failed to search vaccines",
                variant: "destructive",
            })
        } finally {
            setIsSearching(false)
        }
    }

    const handleAddVaccine = (vaccine: VaccineBase) => {
        // Find the highest dose order
        const highestDoseOrder = vaccineDetails.length > 0 ? Math.max(...vaccineDetails.map((v) => v.doseOrder)) : 0

        // Add the vaccine to the list with the next dose order
        const newVaccineDetail = {
            ...vaccine,
            doseOrder: highestDoseOrder + 1,
        }

        setVaccineDetails((prev) => [...prev, newVaccineDetail])

        // Update the form data
        setFormData((prev) => ({
            ...prev,
            vaccineDetails: [...prev.vaccineDetails, { vaccineId: vaccine.id, doseOrder: highestDoseOrder + 1 }],
        }))

        // Clear search results
        setSearchResults([])
        setSearchTerm("")
    }

    const handleRemoveVaccine = (index: number) => {
        const newVaccineDetails = [...vaccineDetails]
        newVaccineDetails.splice(index, 1)

        // Reorder the remaining vaccines
        const reorderedVaccineDetails = newVaccineDetails.map((vaccine, idx) => ({
            ...vaccine,
            doseOrder: idx + 1,
        }))

        setVaccineDetails(reorderedVaccineDetails)

        // Update the form data
        setFormData((prev) => ({
            ...prev,
            vaccineDetails: reorderedVaccineDetails.map((v) => ({
                vaccineId: v.id,
                doseOrder: v.doseOrder,
            })),
        }))
    }

    const handleMoveVaccine = (index: number, direction: "up" | "down") => {
        if ((direction === "up" && index === 0) || (direction === "down" && index === vaccineDetails.length - 1)) {
            return
        }

        const newVaccineDetails = [...vaccineDetails]
        const targetIndex = direction === "up" ? index - 1 : index + 1

            // Swap the vaccines
            ;[newVaccineDetails[index], newVaccineDetails[targetIndex]] = [
                newVaccineDetails[targetIndex],
                newVaccineDetails[index],
            ]

        // Update dose orders
        const reorderedVaccineDetails = newVaccineDetails.map((vaccine, idx) => ({
            ...vaccine,
            doseOrder: idx + 1,
        }))

        setVaccineDetails(reorderedVaccineDetails)

        // Update the form data
        setFormData((prev) => ({
            ...prev,
            vaccineDetails: reorderedVaccineDetails.map((v) => ({
                vaccineId: v.id,
                doseOrder: v.doseOrder,
            })),
        }))
    }

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault()
        try {
            setIsLoading(true)

            // Validate form data
            if (!formData.packageName.trim()) {
                toast({
                    title: "Validation Error",
                    description: "Package name is required",
                    variant: "destructive",
                })
                setIsLoading(false)
                return
            }

            if (formData.vaccineDetails.length === 0) {
                toast({
                    title: "Validation Error",
                    description: "Package must contain at least one vaccine",
                    variant: "destructive",
                })
                setIsLoading(false)
                return
            }

            await onSave({
                packageName: formData.packageName,
                description: formData.description,
                vaccineDetails: formData.vaccineDetails,
            })

            // Only update state and show toast if still mounted
            if (isMounted.current) {
                toast({
                    title: "Success",
                    description: `Package ${mode === "create" ? "created" : "updated"} successfully.`,
                    variant: "success",
                })
            }

            handleClose()
        } catch (error) {
            // Only update state and show toast if still mounted
            if (isMounted.current) {
                toast({
                    title: "Error",
                    description: `Failed to ${mode === "create" ? "create" : "update"} package.`,
                    variant: "destructive",
                })
                setIsLoading(false)
            }
        }
    }

    const handleClose = useCallback(() => {
        setInternalOpen(false);

        setTimeout(() => {
            if (isMounted.current) {
                resetForm();
                onClose();
                document.body.style.pointerEvents = "auto";

                // Restore focus to the previously focused element
                const triggerButton = document.querySelector("#open-dialog-button");
                if (triggerButton) {
                    (triggerButton as HTMLElement).focus();
                }
            }
        }, 100);

    }, [onClose, resetForm]);


    // Calculate total price
    const totalPrice = vaccineDetails.reduce((sum, vaccine) => sum + vaccine.price, 0)

    // If the dialog is not open according to props, don't render anything
    if (!isOpen && !internalOpen) {
        return null
    }

    return (
        <Dialog
            open={isOpen}
            onOpenChange={(open) => {
                if (!open) {
                    setIsFetching(false); 
                    setIsLoading(false); 
                    resetForm();
                    setTimeout(() => {
                        document.body.style.pointerEvents = "auto"; // Restore interactivity
                    }, 300); // Small delay for state updates
                    onClose();
                }
            }}
        >
            <DialogContent
                className="max-w-5xl max-h-[90vh] overflow-y-auto p-0"
                onPointerDownOutside={(e) => {
                    if (isLoading || isFetching) {
                        e.preventDefault();
                    } else {
                        document.body.style.pointerEvents = "auto"; // Ensure pointer events are restored
                    }
                }}
                onEscapeKeyDown={(e) => {
                    if (isLoading || isFetching) {
                        e.preventDefault();
                    } else {
                        document.body.style.pointerEvents = "auto";
                    }
                }}
            >

                <DialogHeader
                    className={`p-6 ${mode === "view" ? "bg-blue-50 dark:bg-blue-950/30" : mode === "edit" ? "bg-amber-50 dark:bg-amber-950/30" : "bg-green-50 dark:bg-green-950/30"}`}
                >
                    <DialogTitle className="flex items-center justify-center gap-2 text-xl font-bold">
                        <Package
                            className={`h-5 w-5 ${mode === "view" ? "text-blue-600" : mode === "edit" ? "text-amber-600" : "text-green-600"}`}
                        />
                        <span
                            className={
                                mode === "view"
                                    ? "text-blue-700 dark:text-blue-400"
                                    : mode === "edit"
                                        ? "text-amber-700 dark:text-amber-400"
                                        : "text-green-700 dark:text-green-400"
                            }
                        >
                            {title}
                        </span>
                    </DialogTitle>
                </DialogHeader>

                <AnimatePresence mode="wait" initial={false}>
                    {isFetching ? (
                        <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                            className="flex items-center justify-center p-12"
                        >
                            <div className="text-center">
                                <Loader2 className="h-10 w-10 animate-spin text-primary mx-auto mb-4" />
                                <p className="text-muted-foreground">Loading package information...</p>
                            </div>
                        </motion.div>
                    ) : (
                        <motion.form
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                            onSubmit={handleSubmit}
                            className="p-0"
                        >
                            {!isViewMode && (
                                <div className="border-b">
                                    <Tabs value={contentType} onValueChange={(value) => setContentType(value as "package" | "vaccine")}>
                                        <div className="px-6 pt-4">
                                            <TabsList className="grid w-full grid-cols-2">
                                                <TabsTrigger value="package">Package</TabsTrigger>
                                                <TabsTrigger value="vaccine">Vaccines</TabsTrigger>
                                            </TabsList>
                                        </div>
                                    </Tabs>
                                </div>
                            )}

                            {/* View Mode Header with Key Information */}
                            {isViewMode && (
                                <div className="p-6 bg-card border-b">
                                    <div className="flex flex-col gap-4">
                                        <div className="flex flex-col md:flex-row md:items-center gap-2">
                                            <h2 className="text-2xl font-bold">{formData.packageName}</h2>
                                            <Badge variant="outline" className="md:ml-2 w-fit mx-auto md:mx-0">
                                                Package
                                            </Badge>
                                        </div>
                                        <p className="text-muted-foreground">{formData.description}</p>
                                        <div className="flex flex-wrap gap-3">
                                            <Badge variant="secondary" className="flex items-center gap-1">
                                                <Landmark className="h-3 w-3" />
                                                {new Intl.NumberFormat("vi-VN", {
                                                    style: "currency",
                                                    currency: "VND",
                                                }).format(totalPrice * 0.9)}
                                            </Badge>
                                            <Badge variant="secondary" className="flex items-center gap-1">
                                                <Syringe className="h-3 w-3" />
                                                {vaccineDetails.length} vaccine(s)
                                            </Badge>
                                        </div>
                                    </div>
                                </div>
                            )}

                            {/* Content based on mode and tab */}
                            {isViewMode ? (
                                <div className="p-6">
                                    <Tabs defaultValue="general" value={activeTab} onValueChange={setActiveTab}>
                                        <TabsList className="grid grid-cols-2 mb-6">
                                            <TabsTrigger value="general">General Info</TabsTrigger>
                                            <TabsTrigger value="vaccines">Vaccines</TabsTrigger>
                                        </TabsList>

                                        <TabsContent value="general" className="space-y-4">
                                            <Card>
                                                <CardHeader>
                                                    <CardTitle className="flex items-center gap-2">
                                                        <Info className="h-5 w-5 text-blue-500" />
                                                        General Information
                                                    </CardTitle>
                                                </CardHeader>
                                                <CardContent className="space-y-4">
                                                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                                        <div className="space-y-2">
                                                            <h4 className="font-medium text-sm text-muted-foreground">Package Name</h4>
                                                            <p className="font-medium">{formData.packageName}</p>
                                                        </div>
                                                        <div className="space-y-2">
                                                            <h4 className="font-medium text-sm text-muted-foreground">Price</h4>
                                                            <div className="space-y-1">
                                                                <p className="font-medium text-blue-600">
                                                                    {new Intl.NumberFormat("vi-VN", {
                                                                        style: "currency",
                                                                        currency: "VND",
                                                                    }).format(totalPrice * 0.9)}
                                                                </p>
                                                                <p className="text-xs text-muted-foreground">
                                                                    (Vaccines:{" "}
                                                                    {new Intl.NumberFormat("vi-VN", {
                                                                        style: "currency",
                                                                        currency: "VND",
                                                                    }).format(totalPrice)}{" "}
                                                                    - 10% discount)
                                                                </p>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <Separator />
                                                    <div className="space-y-2">
                                                        <h4 className="font-medium text-sm text-muted-foreground">Description</h4>
                                                        <p>{formData.description}</p>
                                                    </div>
                                                </CardContent>
                                            </Card>
                                        </TabsContent>

                                        <TabsContent value="vaccines" className="space-y-4">
                                            <Card>
                                                <CardHeader>
                                                    <CardTitle className="flex items-center gap-2">
                                                        <Syringe className="h-5 w-5 text-blue-500" />
                                                        Vaccines in Package
                                                    </CardTitle>
                                                    <CardDescription>This package contains {vaccineDetails.length} vaccine(s)</CardDescription>
                                                </CardHeader>
                                                <CardContent>
                                                    {vaccineDetails.length === 0 ? (
                                                        <div className="text-center py-8 text-muted-foreground">No vaccines in this package</div>
                                                    ) : (
                                                        <div className="space-y-6">
                                                            {/* Vaccine Images */}
                                                            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4">
                                                                {vaccineDetails.map((vaccine, index) => (
                                                                    <div key={`img-${vaccine.id}-${index}`} className="relative group">
                                                                        <div className="absolute top-0 right-0 bg-background rounded-full w-6 h-6 flex items-center justify-center border">
                                                                            <span className="text-xs font-medium">{vaccine.doseOrder}</span>
                                                                        </div>
                                                                        <div className="aspect-square rounded-md overflow-hidden border">
                                                                            <img
                                                                                src={vaccine.picUrl || "/placeholder.svg?height=100&width=100"}
                                                                                alt={vaccine.vaccineName}
                                                                                className="w-full h-full object-cover"
                                                                            />
                                                                        </div>
                                                                        <p className="text-xs mt-1 text-center truncate">{vaccine.vaccineName}</p>
                                                                    </div>
                                                                ))}
                                                            </div>

                                                            <Separator />

                                                            {/* Vaccine Table */}
                                                            <div className="rounded-md border">
                                                                <Table>
                                                                    <TableHeader>
                                                                        <TableRow>
                                                                            <TableHead className="w-12">Order</TableHead>
                                                                            <TableHead>Vaccine Name</TableHead>
                                                                            <TableHead>Origin</TableHead>
                                                                            <TableHead className="text-right">Price</TableHead>
                                                                        </TableRow>
                                                                    </TableHeader>
                                                                    <TableBody>
                                                                        {vaccineDetails.map((vaccine, index) => (
                                                                            <TableRow key={`table-${vaccine.id}-${index}`}>
                                                                                <TableCell className="font-medium">{vaccine.doseOrder}</TableCell>
                                                                                <TableCell>{vaccine.vaccineName}</TableCell>
                                                                                <TableCell>{vaccine.type}</TableCell>
                                                                                <TableCell className="text-right">
                                                                                    {new Intl.NumberFormat("vi-VN", {
                                                                                        style: "currency",
                                                                                        currency: "VND",
                                                                                    }).format(vaccine.price)}
                                                                                </TableCell>
                                                                            </TableRow>
                                                                        ))}
                                                                        <TableRow>
                                                                            <TableCell colSpan={3} className="font-bold">
                                                                                Total
                                                                            </TableCell>
                                                                            <TableCell className="text-right font-bold">
                                                                                {new Intl.NumberFormat("vi-VN", {
                                                                                    style: "currency",
                                                                                    currency: "VND",
                                                                                }).format(totalPrice)}
                                                                            </TableCell>
                                                                        </TableRow>
                                                                    </TableBody>
                                                                </Table>
                                                            </div>
                                                        </div>
                                                    )}
                                                </CardContent>
                                            </Card>
                                        </TabsContent>
                                    </Tabs>
                                </div>
                            ) : (
                                // Edit/Create Mode Form
                                <div className="p-6">
                                    {contentType === "package" ? (
                                        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                                            {/* Left side - Package Info */}
                                            <div className="space-y-6">
                                                <Card>
                                                    <CardHeader className="pb-3">
                                                        <CardTitle className="text-base flex items-center gap-2">
                                                            <Info className="h-4 w-4 text-blue-500" />
                                                            Package Information
                                                        </CardTitle>
                                                    </CardHeader>
                                                    <CardContent className="space-y-4">
                                                        <div>
                                                            <Label htmlFor="packageName" className="text-sm">
                                                                Package Name
                                                            </Label>
                                                            <Input
                                                                id="packageName"
                                                                value={formData.packageName}
                                                                onChange={(e) => setFormData({ ...formData, packageName: e.target.value })}
                                                                required
                                                                className="mt-1"
                                                                placeholder="Enter package name"
                                                            />
                                                        </div>
                                                        <div>
                                                            <Label htmlFor="description" className="text-sm">
                                                                Description
                                                            </Label>
                                                            <Textarea
                                                                id="description"
                                                                value={formData.description}
                                                                onChange={(e) => setFormData({ ...formData, description: e.target.value })}
                                                                required
                                                                className="mt-1 min-h-[120px]"
                                                                placeholder="Enter package description"
                                                            />
                                                        </div>
                                                        <div>
                                                            <Label htmlFor="calculatedPrice" className="text-sm">
                                                                Package Price (VND)
                                                            </Label>
                                                            <div className="mt-1 p-3 bg-blue-50 dark:bg-blue-900/20 rounded-md border border-blue-100 dark:border-blue-800">
                                                                <div className="flex flex-col gap-1">
                                                                    <div className="flex justify-between items-center">
                                                                        <span className="text-sm text-muted-foreground">Total vaccines price:</span>
                                                                        <span className="font-medium">
                                                                            {new Intl.NumberFormat("vi-VN", {
                                                                                style: "currency",
                                                                                currency: "VND",
                                                                            }).format(totalPrice)}
                                                                        </span>
                                                                    </div>
                                                                    <div className="flex justify-between items-center">
                                                                        <span className="text-sm text-muted-foreground">Discount voucher (10%):</span>
                                                                        <span className="font-medium text-red-500">
                                                                            -
                                                                            {new Intl.NumberFormat("vi-VN", {
                                                                                style: "currency",
                                                                                currency: "VND",
                                                                            }).format(totalPrice * 0.1)}
                                                                        </span>
                                                                    </div>
                                                                    <Separator className="my-1" />
                                                                    <div className="flex justify-between items-center">
                                                                        <span className="text-sm font-medium">Final package price:</span>
                                                                        <span className="text-lg font-bold text-blue-500">
                                                                            {new Intl.NumberFormat("vi-VN", {
                                                                                style: "currency",
                                                                                currency: "VND",
                                                                            }).format(totalPrice * 0.9)}
                                                                        </span>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                            <p className="text-xs text-muted-foreground mt-1">
                                                                Price is automatically calculated as the sum of all vaccines minus a 10% discount
                                                                voucher
                                                            </p>
                                                        </div>
                                                    </CardContent>
                                                </Card>
                                            </div>

                                            {/* Right side - Vaccines */}
                                            <div className="space-y-6">
                                                <Card>
                                                    <CardHeader className="pb-3">
                                                        <CardTitle className="text-base flex items-center gap-2">
                                                            <Syringe className="h-4 w-4 text-blue-500" />
                                                            Vaccines in Package
                                                        </CardTitle>
                                                        <CardDescription>{vaccineDetails.length} vaccine(s) included</CardDescription>
                                                    </CardHeader>
                                                    <CardContent className="space-y-4">
                                                        <div className="flex items-center gap-2">
                                                            <div className="relative flex-1">
                                                                <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
                                                                <Input
                                                                    placeholder="Search vaccines..."
                                                                    value={searchTerm}
                                                                    onChange={(e) => setSearchTerm(e.target.value)}
                                                                    className="pl-9"
                                                                />
                                                            </div>
                                                            <Button
                                                                type="button"
                                                                onClick={handleSearchVaccines}
                                                                disabled={isSearching || !searchTerm.trim()}
                                                            >
                                                                {isSearching ? <Loader2 className="h-4 w-4 animate-spin" /> : "Search"}
                                                            </Button>
                                                        </div>

                                                        {/* Search Results */}
                                                        {searchResults.length > 0 && (
                                                            <Card className="border-dashed">
                                                                <CardHeader className="py-2 px-3">
                                                                    <CardTitle className="text-sm">Search Results</CardTitle>
                                                                </CardHeader>
                                                                <CardContent className="p-0">
                                                                    <ScrollArea className="h-[200px]">
                                                                        <div className="p-3 space-y-2">
                                                                            {searchResults.map((vaccine) => (
                                                                                <div
                                                                                    key={vaccine.id}
                                                                                    className="flex items-center justify-between p-2 rounded-md hover:bg-muted/50"
                                                                                >
                                                                                    <div className="flex items-center gap-3">
                                                                                        <div className="h-10 w-10 rounded-md overflow-hidden border">
                                                                                            <img
                                                                                                src={vaccine.picUrl || "/placeholder.svg?height=40&width=40"}
                                                                                                alt={vaccine.vaccineName}
                                                                                                className="h-full w-full object-cover"
                                                                                            />
                                                                                        </div>
                                                                                        <div>
                                                                                            <p className="text-sm font-medium">{vaccine.vaccineName}</p>
                                                                                            <p className="text-xs text-muted-foreground">{vaccine.type}</p>
                                                                                        </div>
                                                                                    </div>
                                                                                    <Button type="button" size="sm" onClick={() => handleAddVaccine(vaccine)}>
                                                                                        Add
                                                                                    </Button>
                                                                                </div>
                                                                            ))}
                                                                        </div>
                                                                    </ScrollArea>
                                                                </CardContent>
                                                            </Card>
                                                        )}

                                                        {/* Selected Vaccines */}
                                                        <div className="rounded-md border">
                                                            <Table>
                                                                <TableHeader>
                                                                    <TableRow>
                                                                        <TableHead className="w-12">Order</TableHead>
                                                                        <TableHead>Vaccine</TableHead>
                                                                        <TableHead className="text-right">Actions</TableHead>
                                                                    </TableRow>
                                                                </TableHeader>
                                                                <TableBody>
                                                                    {vaccineDetails.length === 0 ? (
                                                                        <TableRow>
                                                                            <TableCell colSpan={3} className="text-center text-muted-foreground py-6">
                                                                                No vaccines added yet. Search and add vaccines above.
                                                                            </TableCell>
                                                                        </TableRow>
                                                                    ) : (
                                                                        vaccineDetails.map((vaccine, index) => (
                                                                            <TableRow key={`selected-${vaccine.id}-${index}`}>
                                                                                <TableCell className="font-medium">{vaccine.doseOrder}</TableCell>
                                                                                <TableCell>
                                                                                    <div className="flex items-center gap-3">
                                                                                        <div className="h-8 w-8 rounded-md overflow-hidden border">
                                                                                            <img
                                                                                                src={vaccine.picUrl || "/placeholder.svg?height=32&width=32"}
                                                                                                alt={vaccine.vaccineName}
                                                                                                className="h-full w-full object-cover"
                                                                                            />
                                                                                        </div>
                                                                                        <div>
                                                                                            <p className="text-sm font-medium">{vaccine.vaccineName}</p>
                                                                                            <p className="text-xs text-muted-foreground">{vaccine.type}</p>
                                                                                        </div>
                                                                                    </div>
                                                                                </TableCell>
                                                                                <TableCell className="text-right">
                                                                                    <div className="flex items-center justify-end gap-1">
                                                                                        <Button
                                                                                            type="button"
                                                                                            variant="ghost"
                                                                                            size="icon"
                                                                                            onClick={() => handleMoveVaccine(index, "up")}
                                                                                            disabled={index === 0}
                                                                                            className="h-7 w-7"
                                                                                        >
                                                                                            <ArrowUp className="h-4 w-4" />
                                                                                        </Button>
                                                                                        <Button
                                                                                            type="button"
                                                                                            variant="ghost"
                                                                                            size="icon"
                                                                                            onClick={() => handleMoveVaccine(index, "down")}
                                                                                            disabled={index === vaccineDetails.length - 1}
                                                                                            className="h-7 w-7"
                                                                                        >
                                                                                            <ArrowDown className="h-4 w-4" />
                                                                                        </Button>
                                                                                        <Button
                                                                                            type="button"
                                                                                            variant="ghost"
                                                                                            size="icon"
                                                                                            onClick={() => handleRemoveVaccine(index)}
                                                                                            className="h-7 w-7 text-red-500 hover:text-red-600"
                                                                                        >
                                                                                            <Trash2 className="h-4 w-4" />
                                                                                        </Button>
                                                                                    </div>
                                                                                </TableCell>
                                                                            </TableRow>
                                                                        ))
                                                                    )}
                                                                </TableBody>
                                                            </Table>
                                                        </div>
                                                    </CardContent>
                                                    <CardFooter className="flex justify-between border-t pt-4">
                                                        <div>
                                                            <p className="text-sm font-medium">Total Vaccines: {vaccineDetails.length}</p>
                                                            <p className="text-xs text-muted-foreground">
                                                                Total Value:{" "}
                                                                {new Intl.NumberFormat("vi-VN", {
                                                                    style: "currency",
                                                                    currency: "VND",
                                                                }).format(totalPrice)}{" "}
                                                                <span className="text-red-500">
                                                                    (After 10% discount:{" "}
                                                                    {new Intl.NumberFormat("vi-VN", {
                                                                        style: "currency",
                                                                        currency: "VND",
                                                                    }).format(totalPrice * 0.9)}
                                                                    )
                                                                </span>
                                                            </p>
                                                        </div>
                                                    </CardFooter>
                                                </Card>
                                            </div>
                                        </div>
                                    ) : (
                                        <div className="flex flex-col items-center justify-center py-12 text-center">
                                            <Package className="h-16 w-16 text-muted-foreground mb-4" />
                                            <h3 className="text-xl font-semibold mb-2">Vaccine Management</h3>
                                            <p className="text-muted-foreground max-w-md mb-6">
                                                To manage individual vaccines, please use the Vaccine management interface. Return to the
                                                package tab to continue creating or editing your package.
                                            </p>
                                            <Button type="button" onClick={() => setContentType("package")}>
                                                <Package className="mr-2 h-4 w-4" />
                                                Return to Package
                                            </Button>
                                        </div>
                                    )}

                                    <div className="flex justify-end gap-2 mt-8">
                                        <Button type="button" variant="outline" onClick={handleClose}>
                                            Cancel
                                        </Button>
                                        <Button
                                            type="submit"
                                            disabled={isLoading || contentType !== "package"}
                                            className={
                                                mode === "create"
                                                    ? "bg-green-600 hover:bg-green-700 text-white"
                                                    : "bg-amber-600 hover:bg-amber-700 text-white"
                                            }
                                        >
                                            {isLoading ? (
                                                <>
                                                    <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                                                    {mode === "create" ? "Creating..." : "Updating..."}
                                                </>
                                            ) : mode === "create" ? (
                                                "Create Package"
                                            ) : (
                                                "Update Package"
                                            )}
                                        </Button>
                                    </div>
                                </div>
                            )}
                        </motion.form>
                    )}
                </AnimatePresence>
            </DialogContent>
        </Dialog>
    )
}

