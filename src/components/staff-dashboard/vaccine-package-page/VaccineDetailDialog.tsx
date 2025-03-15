/* eslint-disable @typescript-eslint/no-unused-vars */
"use client"

import type React from "react"
import { useState, useEffect, useCallback } from "react"
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Switch } from "@/components/ui/switch"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import {
    Plus,
    Upload,
    Loader2,
    AlertTriangle,
    Syringe,
    Calendar,
    Droplets,
    Globe,
    Pill,
    ShieldAlert,
    Info,
    Landmark,
} from "lucide-react"
import { getVaccineById, type VaccineFormData } from "@/api/staff/vaccineStaff"
import { useToast } from "@/hooks/use-toast"
import { motion, AnimatePresence } from "framer-motion"
import { Badge } from "@/components/ui/badge"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Separator } from "@/components/ui/separator"

interface VaccineDetailDialogProps {
    vaccineId: string | null
    isOpen: boolean
    onClose: () => void
    onSave: (data: VaccineFormData) => Promise<void>
    mode: "view" | "edit" | "create"
}

const initialFormState: VaccineFormData = {
    id: "",
    vaccineName: "",
    description: "",
    type: "",
    price: 0,
    picUrl: "",
    requiredDoses: 1,
    doseIntervalDays: 0,
    forBloodType: "Unknown",
    avoidChronic: false,
    avoidAllergy: false,
    hasDrugInteraction: false,
    hasSpecialWarning: false,
    vaccinePictureFile: undefined,
}

export function VaccineDetailDialog({ vaccineId, isOpen, onClose, onSave, mode }: VaccineDetailDialogProps) {
    const [isLoading, setIsLoading] = useState(false)
    const [isFetching, setIsFetching] = useState(false)
    const { toast } = useToast()
    const [formData, setFormData] = useState<VaccineFormData>(initialFormState)
    const [previewImage, setPreviewImage] = useState<string | null>(null)
    const [activeTab, setActiveTab] = useState<string>("general")

    const resetForm = useCallback(() => {
        setFormData(initialFormState)
        setPreviewImage(null)
        setIsLoading(false)
        setIsFetching(false)
        setActiveTab("general")
    }, [])

    const fetchVaccineData = useCallback(async () => {
        if (!vaccineId || mode === "create" || !isOpen) {
            resetForm();
            return;
        }

        try {
            setIsFetching(true);
            const response = await getVaccineById(vaccineId);
            if (response.isSuccess) {
                setFormData({
                    ...response.data,
                    forBloodType: response.data.forBloodType || "Unknown", // Ensure it's always a string
                    vaccinePictureFile: undefined, // Reset file input
                });

                setPreviewImage(response.data.picUrl); // Set preview image
            } else {
                toast({
                    title: "Error",
                    description: "Failed to fetch vaccine details",
                    variant: "destructive",
                });
            }
        } catch (error) {
            console.error("Error fetching vaccine:", error);
            toast({
                title: "Error",
                description: "Failed to fetch vaccine details",
                variant: "destructive",
            });
        } finally {
            setIsFetching(false);
        }
    }, [vaccineId, mode, isOpen, toast, resetForm]);

    useEffect(() => {
        if (isOpen && mode !== "create") {
            fetchVaccineData();
        } else {
            resetForm();
        }

        return () => {
            document.body.style.pointerEvents = "auto";
        };
    }, [isOpen, mode, resetForm, fetchVaccineData]);


    const isViewMode = mode === "view"
    const title = mode === "create" ? "CREATE VACCINE" : mode === "edit" ? "EDIT VACCINE" : "VACCINE DETAILS"

    const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const file = e.target.files?.[0];

        if (file) {
            const reader = new FileReader();
            reader.onloadend = () => {
                setPreviewImage(reader.result as string); // Update preview image
            };
            reader.readAsDataURL(file);

            setFormData((prev) => ({
                ...prev,
                vaccinePictureFile: file, // Attach the file
                picUrl: prev.picUrl || "", // Retain existing image if no new file is uploaded
            }));
        }
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        try {
            setIsLoading(true);

            const { picUrl, vaccinePictureFile, ...restData } = formData;

            const submissionData: VaccineFormData = {
                ...restData,
                vaccinePictureFile,
                picUrl
            };

            await onSave(submissionData);

            toast({
                title: "Success",
                description: `Vaccine ${mode === "create" ? "created" : "updated"} successfully.`,
                variant: "success",
            });

            // **Delay to ensure all state updates complete**
            setTimeout(() => {
                resetForm();
                onClose();
                document.body.style.pointerEvents = "auto"; // Ensure interactivity is restored
            }, 100);

        } catch (error) {
            toast({
                title: "Error",
                description: `Failed to ${mode === "create" ? "create" : "update"} vaccine.`,
                variant: "destructive",
            });
        } finally {
            setIsLoading(false);
        }
    };


    const hasWarnings =
        formData.avoidChronic || formData.avoidAllergy || formData.hasDrugInteraction || formData.hasSpecialWarning

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
                aria-hidden={false}
                aria-describedby="dialog-description"
                className="max-w-4xl max-h-[90vh] overflow-y-auto p-0"
                onPointerDownOutside={(e) => {
                    const target = e.target as HTMLElement
                    if (target.closest('[role="dialog"]') || target.closest('[role="listbox"]') || isLoading || isFetching) {
                        e.preventDefault()
                    }
                }}
                onEscapeKeyDown={(e) => {
                    if (isLoading || isFetching) {
                        e.preventDefault()
                    }
                }}
            >
                <DialogHeader
                    className={`p-6 ${mode === "view" ? "bg-blue-50 dark:bg-blue-950/30" : mode === "edit" ? "bg-amber-50 dark:bg-amber-950/30" : "bg-green-50 dark:bg-green-950/30"}`}
                >
                    <DialogTitle className="flex items-center justify-center gap-2 text-xl font-bold">
                        <Syringe
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

                <AnimatePresence mode="wait" onExitComplete={() => {
                    document.body.style.pointerEvents = "auto";
                    resetForm();
                }}>
                    {isFetching ? (
                        <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                            className="flex items-center justify-center p-12"
                        >
                            <div className="text-center">
                                <Loader2 className="h-10 w-10 animate-spin text-primary mx-auto mb-4" />
                                <p className="text-muted-foreground">Loading vaccine information...</p>
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
                            {/* View Mode Header with Key Information */}
                            {isViewMode && (
                                <div className="p-6 bg-card border-b">
                                    <div className="flex flex-col md:flex-row gap-6 items-center">
                                        <div className="relative w-32 h-32 rounded-lg overflow-hidden border shadow-sm flex-shrink-0">
                                            <img
                                                src={previewImage || "/placeholder.svg?height=128&width=128"}
                                                alt={formData.vaccineName}
                                                className="w-full h-full object-cover"
                                            />
                                        </div>
                                        <div className="flex-1 space-y-2 text-center md:text-left">
                                            <div className="flex flex-col md:flex-row md:items-center gap-2">
                                                <h2 className="text-2xl font-bold">{formData.vaccineName}</h2>
                                                <Badge variant="outline" className="md:ml-2 w-fit mx-auto md:mx-0">
                                                    {formData.type}
                                                </Badge>
                                            </div>
                                            <p className="text-muted-foreground line-clamp-2">{formData.description}</p>
                                            <div className="flex flex-wrap gap-3 justify-center md:justify-start">
                                                <Badge variant="secondary" className="flex items-center gap-1">
                                                    <Landmark className="h-3 w-3" />
                                                    {new Intl.NumberFormat("vi-VN", {
                                                        style: "currency",
                                                        currency: "VND",
                                                    }).format(formData.price)}
                                                </Badge>
                                                <Badge variant="secondary" className="flex items-center gap-1">
                                                    <Syringe className="h-3 w-3" />
                                                    {formData.requiredDoses} dose(s)
                                                </Badge>
                                                <Badge variant="secondary" className="flex items-center gap-1">
                                                    <Calendar className="h-3 w-3" />
                                                    {formData.doseIntervalDays} days interval
                                                </Badge>
                                                {hasWarnings && (
                                                    <Badge variant="destructive" className="flex items-center gap-1">
                                                        <AlertTriangle className="h-3 w-3" />
                                                        Has warnings
                                                    </Badge>
                                                )}
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            )}

                            {/* Tabs for View Mode */}
                            {isViewMode ? (
                                <div className="p-6">
                                    <Tabs defaultValue="general" value={activeTab} onValueChange={setActiveTab}>
                                        <TabsList className="grid grid-cols-3 mb-6">
                                            <TabsTrigger value="general">General Info</TabsTrigger>
                                            <TabsTrigger value="medical">Medical Details</TabsTrigger>
                                            <TabsTrigger value="warnings">Warnings & Precautions</TabsTrigger>
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
                                                            <h4 className="font-medium text-sm text-muted-foreground">Vaccine Name</h4>
                                                            <p className="font-medium">{formData.vaccineName}</p>
                                                        </div>
                                                        <div className="space-y-2">
                                                            <h4 className="font-medium text-sm text-muted-foreground">Origin</h4>
                                                            <p className="font-medium">{formData.type}</p>
                                                        </div>
                                                        <div className="space-y-2">
                                                            <h4 className="font-medium text-sm text-muted-foreground">Price</h4>
                                                            <p className="font-medium text-blue-600">
                                                                {new Intl.NumberFormat("vi-VN", {
                                                                    style: "currency",
                                                                    currency: "VND",
                                                                }).format(formData.price)}
                                                            </p>
                                                        </div>
                                                        <div className="space-y-2">
                                                            <h4 className="font-medium text-sm text-muted-foreground">Blood Type Compatibility</h4>
                                                            <p className="font-medium">
                                                                {formData.forBloodType === "Unknown" ? "All blood types" : formData.forBloodType}
                                                            </p>
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

                                        <TabsContent value="medical" className="space-y-4">
                                            <Card>
                                                <CardHeader>
                                                    <CardTitle className="flex items-center gap-2">
                                                        <Syringe className="h-5 w-5 text-blue-500" />
                                                        Dosage Information
                                                    </CardTitle>
                                                </CardHeader>
                                                <CardContent>
                                                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                                        <div className="flex items-center gap-3 p-4 bg-blue-50 dark:bg-blue-950/30 rounded-lg">
                                                            <div className="bg-blue-100 dark:bg-blue-900 p-3 rounded-full">
                                                                <Syringe className="h-6 w-6 text-blue-600 dark:text-blue-400" />
                                                            </div>
                                                            <div>
                                                                <h4 className="font-medium">Required Doses</h4>
                                                                <p className="text-2xl font-bold text-blue-600 dark:text-blue-400">
                                                                    {formData.requiredDoses}
                                                                </p>
                                                            </div>
                                                        </div>
                                                        <div className="flex items-center gap-3 p-4 bg-blue-50 dark:bg-blue-950/30 rounded-lg">
                                                            <div className="bg-blue-100 dark:bg-blue-900 p-3 rounded-full">
                                                                <Calendar className="h-6 w-6 text-blue-600 dark:text-blue-400" />
                                                            </div>
                                                            <div>
                                                                <h4 className="font-medium">Interval Between Doses</h4>
                                                                <p className="text-2xl font-bold text-blue-600 dark:text-blue-400">
                                                                    {formData.doseIntervalDays} days
                                                                </p>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </CardContent>
                                            </Card>
                                        </TabsContent>

                                        <TabsContent value="warnings" className="space-y-4">
                                            <Card>
                                                <CardHeader>
                                                    <CardTitle className="flex items-center gap-2">
                                                        <AlertTriangle className="h-5 w-5 text-amber-500" />
                                                        Warnings & Precautions
                                                    </CardTitle>
                                                    <CardDescription>Important medical considerations for this vaccine</CardDescription>
                                                </CardHeader>
                                                <CardContent>
                                                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                                        <div
                                                            className={`p-4 rounded-lg border ${formData.avoidChronic ? "bg-red-50 dark:bg-red-950/30 border-red-200 dark:border-red-800" : "bg-green-50 dark:bg-green-950/30 border-green-200 dark:border-green-800"}`}
                                                        >
                                                            <div className="flex items-center gap-2 mb-2">
                                                                <AlertTriangle
                                                                    className={`h-5 w-5 ${formData.avoidChronic ? "text-red-500" : "text-green-500"}`}
                                                                />
                                                                <h4 className="font-medium">Chronic Conditions</h4>
                                                            </div>
                                                            <p className="text-sm">
                                                                {formData.avoidChronic
                                                                    ? "This vaccine may be contraindicated for patients with chronic conditions. Medical consultation required."
                                                                    : "No known contraindications for patients with chronic conditions."}
                                                            </p>
                                                        </div>

                                                        <div
                                                            className={`p-4 rounded-lg border ${formData.avoidAllergy ? "bg-red-50 dark:bg-red-950/30 border-red-200 dark:border-red-800" : "bg-green-50 dark:bg-green-950/30 border-green-200 dark:border-green-800"}`}
                                                        >
                                                            <div className="flex items-center gap-2 mb-2">
                                                                <Droplets
                                                                    className={`h-5 w-5 ${formData.avoidAllergy ? "text-red-500" : "text-green-500"}`}
                                                                />
                                                                <h4 className="font-medium">Allergy Risk</h4>
                                                            </div>
                                                            <p className="text-sm">
                                                                {formData.avoidAllergy
                                                                    ? "This vaccine may cause allergic reactions in some patients. Caution advised."
                                                                    : "No significant allergy risks reported with this vaccine."}
                                                            </p>
                                                        </div>

                                                        <div
                                                            className={`p-4 rounded-lg border ${formData.hasDrugInteraction ? "bg-amber-50 dark:bg-amber-950/30 border-amber-200 dark:border-amber-800" : "bg-green-50 dark:bg-green-950/30 border-green-200 dark:border-green-800"}`}
                                                        >
                                                            <div className="flex items-center gap-2 mb-2">
                                                                <Pill
                                                                    className={`h-5 w-5 ${formData.hasDrugInteraction ? "text-amber-500" : "text-green-500"}`}
                                                                />
                                                                <h4 className="font-medium">Drug Interactions</h4>
                                                            </div>
                                                            <p className="text-sm">
                                                                {formData.hasDrugInteraction
                                                                    ? "This vaccine may interact with certain medications. Review patient's current medications."
                                                                    : "No significant drug interactions reported with this vaccine."}
                                                            </p>
                                                        </div>

                                                        <div
                                                            className={`p-4 rounded-lg border ${formData.hasSpecialWarning ? "bg-amber-50 dark:bg-amber-950/30 border-amber-200 dark:border-amber-800" : "bg-green-50 dark:bg-green-950/30 border-green-200 dark:border-green-800"}`}
                                                        >
                                                            <div className="flex items-center gap-2 mb-2">
                                                                <ShieldAlert
                                                                    className={`h-5 w-5 ${formData.hasSpecialWarning ? "text-amber-500" : "text-green-500"}`}
                                                                />
                                                                <h4 className="font-medium">Special Warnings</h4>
                                                            </div>
                                                            <p className="text-sm">
                                                                {formData.hasSpecialWarning
                                                                    ? "This vaccine has special warnings. Medical consultation required before administration."
                                                                    : "No special warnings for this vaccine."}
                                                            </p>
                                                        </div>
                                                    </div>
                                                </CardContent>
                                            </Card>
                                        </TabsContent>
                                    </Tabs>
                                </div>
                            ) : (
                                // Edit/Create Mode Form
                                <div className="p-6">
                                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                                        {/* Left side - Image upload */}
                                        <div className="space-y-4">
                                            <div className="relative aspect-square border-2 border-dashed rounded-lg overflow-hidden flex items-center justify-center bg-gray-50 dark:bg-gray-900 hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors">
                                                {previewImage ? (
                                                    <div className="relative w-full h-full group">
                                                        <img
                                                            src={previewImage || "/placeholder.svg"}
                                                            alt="Vaccine preview"
                                                            className="w-full h-full object-contain"
                                                        />
                                                        <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                                                            <label
                                                                htmlFor="vaccine-image"
                                                                className="cursor-pointer p-2 bg-white rounded-full hover:bg-gray-100"
                                                                title="Change image"
                                                            >
                                                                <Upload className="h-6 w-6" />
                                                            </label>
                                                        </div>
                                                    </div>
                                                ) : (
                                                    <label
                                                        htmlFor="vaccine-image"
                                                        className="cursor-pointer flex flex-col items-center justify-center p-4 text-center"
                                                    >
                                                        <motion.div
                                                            whileHover={{ scale: 1.1 }}
                                                            whileTap={{ scale: 0.95 }}
                                                            className="w-20 h-20 rounded-full border-2 border-gray-300 flex items-center justify-center mb-4"
                                                        >
                                                            <Plus className="h-10 w-10 text-gray-400" />
                                                        </motion.div>
                                                        <p className="text-sm text-gray-500">Click to upload vaccine image</p>
                                                    </label>
                                                )}
                                                <input
                                                    id="vaccine-image"
                                                    type="file"
                                                    accept="image/*"
                                                    className="hidden"
                                                    onChange={handleImageChange}
                                                />
                                            </div>

                                            {/* Price and Origin Card */}
                                            <Card>
                                                <CardHeader className="pb-3">
                                                    <CardTitle className="text-base flex items-center gap-2">
                                                        <Globe className="h-4 w-4 text-blue-500" />
                                                        Origin & Pricing
                                                    </CardTitle>
                                                </CardHeader>
                                                <CardContent className="space-y-4">
                                                    <div>
                                                        <Label htmlFor="type" className="text-sm">
                                                            Origin
                                                        </Label>
                                                        <Input
                                                            id="type"
                                                            value={formData.type}
                                                            onChange={(e) => setFormData({ ...formData, type: e.target.value })}
                                                            required
                                                            className="mt-1"
                                                            placeholder="e.g., USA, France, Japan"
                                                        />
                                                    </div>
                                                    <div>
                                                        <Label htmlFor="price" className="text-sm">
                                                            Price (VND)
                                                        </Label>
                                                        <div className="relative mt-1">
                                                            <Landmark className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                                                            <Input
                                                                id="price"
                                                                type="number"
                                                                value={formData.price}
                                                                onChange={(e) => setFormData({ ...formData, price: Number(e.target.value) })}
                                                                required
                                                                min={0}
                                                                className="pl-9"
                                                                placeholder="Enter price in VND"
                                                            />
                                                        </div>
                                                    </div>
                                                </CardContent>
                                            </Card>

                                            {/* Dosage Card */}
                                            <Card>
                                                <CardHeader className="pb-3">
                                                    <CardTitle className="text-base flex items-center gap-2">
                                                        <Syringe className="h-4 w-4 text-blue-500" />
                                                        Dosage Information
                                                    </CardTitle>
                                                </CardHeader>
                                                <CardContent className="space-y-4">
                                                    <div className="grid grid-cols-2 gap-4">
                                                        <div>
                                                            <Label htmlFor="requiredDoses" className="text-sm">
                                                                Required Doses
                                                            </Label>
                                                            <Input
                                                                id="requiredDoses"
                                                                type="number"
                                                                value={formData.requiredDoses}
                                                                onChange={(e) => setFormData({ ...formData, requiredDoses: Number(e.target.value) })}
                                                                required
                                                                min={1}
                                                                className="mt-1"
                                                            />
                                                        </div>
                                                        <div>
                                                            <Label htmlFor="doseIntervalDays" className="text-sm">
                                                                Interval (Days)
                                                            </Label>
                                                            <Input
                                                                id="doseIntervalDays"
                                                                type="number"
                                                                value={formData.doseIntervalDays}
                                                                onChange={(e) => setFormData({ ...formData, doseIntervalDays: Number(e.target.value) })}
                                                                required
                                                                min={0}
                                                                className="mt-1"
                                                            />
                                                        </div>
                                                    </div>
                                                    <div>
                                                        <Label htmlFor="forBloodType" className="text-sm">
                                                            Blood Type Compatibility
                                                        </Label>
                                                        <Select
                                                            value={formData.forBloodType}
                                                            onValueChange={(value) => setFormData({ ...formData, forBloodType: value })}
                                                        >
                                                            <SelectTrigger className="mt-1">
                                                                <SelectValue placeholder="Select blood type" />
                                                            </SelectTrigger>
                                                            <SelectContent>
                                                                <SelectItem value="Unknown">All blood types</SelectItem>
                                                                <SelectItem value="A">A</SelectItem>
                                                                <SelectItem value="B">B</SelectItem>
                                                                <SelectItem value="AB">AB</SelectItem>
                                                                <SelectItem value="O">O</SelectItem>
                                                            </SelectContent>
                                                        </Select>
                                                    </div>
                                                </CardContent>
                                            </Card>
                                        </div>

                                        {/* Right side - Form fields */}
                                        <div className="space-y-6">
                                            {/* Basic Info Card */}
                                            <Card>
                                                <CardHeader className="pb-3">
                                                    <CardTitle className="text-base flex items-center gap-2">
                                                        <Info className="h-4 w-4 text-blue-500" />
                                                        Basic Information
                                                    </CardTitle>
                                                </CardHeader>
                                                <CardContent className="space-y-4">
                                                    <div>
                                                        <Label htmlFor="vaccineName" className="text-sm">
                                                            Vaccine Name
                                                        </Label>
                                                        <Input
                                                            id="vaccineName"
                                                            value={formData.vaccineName}
                                                            onChange={(e) => setFormData({ ...formData, vaccineName: e.target.value })}
                                                            required
                                                            className="mt-1"
                                                            placeholder="Enter vaccine name"
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
                                                            placeholder="Enter vaccine description, including what diseases it prevents"
                                                        />
                                                    </div>
                                                </CardContent>
                                            </Card>

                                            {/* Warnings Card */}
                                            <Card>
                                                <CardHeader className="pb-3">
                                                    <CardTitle className="text-base flex items-center gap-2">
                                                        <AlertTriangle className="h-4 w-4 text-amber-500" />
                                                        Warnings & Precautions
                                                    </CardTitle>
                                                    <CardDescription>Select all that apply to this vaccine</CardDescription>
                                                </CardHeader>
                                                <CardContent className="space-y-4">
                                                    <div className="grid grid-cols-1 gap-3">
                                                        <div
                                                            className={`p-3 rounded-lg border flex items-center justify-between ${formData.avoidChronic ? "bg-red-50 dark:bg-red-950/30 border-red-200 dark:border-red-800" : "bg-gray-50 dark:bg-gray-900 border-gray-200 dark:border-gray-800"}`}
                                                        >
                                                            <Label htmlFor="avoidChronic" className="cursor-pointer flex items-center gap-2">
                                                                <AlertTriangle
                                                                    className={`h-4 w-4 ${formData.avoidChronic ? "text-red-500" : "text-gray-400"}`}
                                                                />
                                                                <span>Avoid Chronic Conditions</span>
                                                            </Label>
                                                            <Switch
                                                                id="avoidChronic"
                                                                checked={formData.avoidChronic}
                                                                onCheckedChange={(checked) => setFormData({ ...formData, avoidChronic: checked })}
                                                            />
                                                        </div>

                                                        <div
                                                            className={`p-3 rounded-lg border flex items-center justify-between ${formData.avoidAllergy ? "bg-red-50 dark:bg-red-950/30 border-red-200 dark:border-red-800" : "bg-gray-50 dark:bg-gray-900 border-gray-200 dark:border-gray-800"}`}
                                                        >
                                                            <Label htmlFor="avoidAllergy" className="cursor-pointer flex items-center gap-2">
                                                                <Droplets
                                                                    className={`h-4 w-4 ${formData.avoidAllergy ? "text-red-500" : "text-gray-400"}`}
                                                                />
                                                                <span>Avoid Allergy</span>
                                                            </Label>
                                                            <Switch
                                                                id="avoidAllergy"
                                                                checked={formData.avoidAllergy}
                                                                onCheckedChange={(checked) => setFormData({ ...formData, avoidAllergy: checked })}
                                                            />
                                                        </div>

                                                        <div
                                                            className={`p-3 rounded-lg border flex items-center justify-between ${formData.hasDrugInteraction ? "bg-amber-50 dark:bg-amber-950/30 border-amber-200 dark:border-amber-800" : "bg-gray-50 dark:bg-gray-900 border-gray-200 dark:border-gray-800"}`}
                                                        >
                                                            <Label htmlFor="hasDrugInteraction" className="cursor-pointer flex items-center gap-2">
                                                                <Pill
                                                                    className={`h-4 w-4 ${formData.hasDrugInteraction ? "text-amber-500" : "text-gray-400"}`}
                                                                />
                                                                <span>Has Drug Interaction</span>
                                                            </Label>
                                                            <Switch
                                                                id="hasDrugInteraction"
                                                                checked={formData.hasDrugInteraction}
                                                                onCheckedChange={(checked) => setFormData({ ...formData, hasDrugInteraction: checked })}
                                                            />
                                                        </div>

                                                        <div
                                                            className={`p-3 rounded-lg border flex items-center justify-between ${formData.hasSpecialWarning ? "bg-amber-50 dark:bg-amber-950/30 border-amber-200 dark:border-amber-800" : "bg-gray-50 dark:bg-gray-900 border-gray-200 dark:border-gray-800"}`}
                                                        >
                                                            <Label htmlFor="hasSpecialWarning" className="cursor-pointer flex items-center gap-2">
                                                                <ShieldAlert
                                                                    className={`h-4 w-4 ${formData.hasSpecialWarning ? "text-amber-500" : "text-gray-400"}`}
                                                                />
                                                                <span>Has Special Warning</span>
                                                            </Label>
                                                            <Switch
                                                                id="hasSpecialWarning"
                                                                checked={formData.hasSpecialWarning}
                                                                onCheckedChange={(checked) => setFormData({ ...formData, hasSpecialWarning: checked })}
                                                            />
                                                        </div>
                                                    </div>
                                                </CardContent>
                                            </Card>
                                        </div>
                                    </div>

                                    <div className="flex justify-end gap-2 mt-8">
                                        <Button
                                            type="button"
                                            variant="outline"
                                            onClick={() => {
                                                setIsFetching(false);
                                                setIsLoading(false);
                                                resetForm();
                                                setTimeout(() => {
                                                    document.body.style.pointerEvents = "auto"; // Ensure interactivity is restored
                                                }, 300);
                                                onClose();
                                            }}
                                        >
                                            Cancel
                                        </Button>

                                        <Button
                                            type="submit"
                                            disabled={isLoading}
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
                                                "Create Vaccine"
                                            ) : (
                                                "Update Vaccine"
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

