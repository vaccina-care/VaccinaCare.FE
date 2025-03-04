/* eslint-disable @typescript-eslint/no-unused-vars */
"use client"

import type React from "react"
import { useState, useEffect } from "react"
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Switch } from "@/components/ui/switch"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Plus, Upload, Loader2 } from "lucide-react"
import { getVaccineById, type VaccineFormData } from "@/api/vaccineStaff"
import { useToast } from "@/hooks/use-toast"
import { motion, AnimatePresence } from "framer-motion"

interface VaccineDetailDialogProps {
    vaccineId: string | null
    isOpen: boolean
    onClose: () => void
    onSave: (data: VaccineFormData) => Promise<void>
    mode: "view" | "edit" | "create"
}

const initialFormState: VaccineFormData = {
    vaccineName: "",
    description: "",
    type: "",
    price: 0,
    requiredDoses: 1,
    doseIntervalDays: 0,
    forBloodType: "Unknown",
    avoidChronic: false,
    avoidAllergy: false,
    hasDrugInteraction: false,
    hasSpecialWarning: false,
}

export function VaccineDetailDialog({ vaccineId, isOpen, onClose, onSave, mode }: VaccineDetailDialogProps) {
    const [isLoading, setIsLoading] = useState(false)
    const [isFetching, setIsFetching] = useState(false)
    const { toast } = useToast()
    const [formData, setFormData] = useState<VaccineFormData>(initialFormState)
    const [previewImage, setPreviewImage] = useState<string | null>(null)

    useEffect(() => {
        const fetchVaccineData = async () => {
            if (!vaccineId || mode === "create") {
                setFormData(initialFormState)
                setPreviewImage(null)
                return
            }

            try {
                setIsFetching(true)
                const response = await getVaccineById(vaccineId)
                if (response.isSuccess) {
                    const vaccineData = response.data
                    setFormData({
                        vaccineName: vaccineData.vaccineName,
                        description: vaccineData.description,
                        type: vaccineData.type,
                        price: vaccineData.price,
                        requiredDoses: vaccineData.requiredDoses,
                        doseIntervalDays: vaccineData.doseIntervalDays,
                        forBloodType: vaccineData.forBloodType || "Unknown",
                        avoidChronic: vaccineData.avoidChronic,
                        avoidAllergy: vaccineData.avoidAllergy,
                        hasDrugInteraction: vaccineData.hasDrugInteraction,
                        hasSpecialWarning: vaccineData.hasSpecialWarning,
                    })
                    setPreviewImage(vaccineData.picUrl)
                } else {
                    toast({
                        title: "Error",
                        description: "Failed to fetch vaccine details",
                        variant: "destructive",
                    })
                    onClose()
                }
            } catch (error) {
                console.error("Error fetching vaccine:", error)
                toast({
                    title: "Error",
                    description: "Failed to fetch vaccine details",
                    variant: "destructive",
                })
                onClose()
            } finally {
                setIsFetching(false)
            }
        }

        if (isOpen) {
            fetchVaccineData()
        }

        return () => {
            document.body.style.pointerEvents = "auto"; // Ensure pointer events are restored
        };

    }, [vaccineId, isOpen, mode, onClose, toast])

    const isViewMode = mode === "view"
    const title = mode === "create" ? "CREATE VACCINE" : mode === "edit" ? "EDIT VACCINE" : "VACCINE DETAILS"

    const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const file = e.target.files?.[0]
        if (file) {
            const reader = new FileReader()
            reader.onloadend = () => {
                setPreviewImage(reader.result as string)
            }
            reader.readAsDataURL(file)
            setFormData({ ...formData, vaccinePictureFile: file })
        }
    }

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault()
        try {
            setIsLoading(true)
            await onSave(formData)
            toast({
                title: "Success",
                description: `Vaccine ${mode === "create" ? "created" : "updated"} successfully.`,
                variant: "success",
            })
            onClose()
        } catch (error) {
            toast({
                title: "Error",
                description: `Failed to ${mode === "create" ? "create" : "update"} vaccine.`,
                variant: "destructive",
            })
        } finally {
            setIsLoading(false)
        }
    }

    return (
        <Dialog
            open={isOpen}
            onOpenChange={(open) => {
                if (!open) {
                    setTimeout(() => {
                        document.body.style.pointerEvents = "auto"; // Reset pointer events
                    }, 100);
                    setFormData(initialFormState);
                    setPreviewImage(null);
                    setIsLoading(false);
                    setIsFetching(false);
                    onClose();
                }
            }}
        >

            <DialogContent
                aria-describedby="dialog-description"
                className="max-w-4xl max-h-[90vh] overflow-y-auto p-0"
                onPointerDownOutside={(e) => {
                    // Prevent closing when clicking on select dropdowns or dialog content
                    const target = e.target as HTMLElement
                    if (target.closest('[role="dialog"]') || target.closest('[role="listbox"]')) {
                        e.preventDefault()
                    }
                }}
                onInteractOutside={(e) => {
                    // Prevent any outside interactions while dialog is open
                    if (isLoading || isFetching) {
                        e.preventDefault()
                    }
                }}
            >
                <DialogHeader className="p-6 border-b">
                    <DialogTitle className="text-center text-xl font-bold text-red-500">{title}</DialogTitle>
                </DialogHeader>

                <AnimatePresence mode="wait">
                    {isFetching ? (
                        <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                            className="flex items-center justify-center p-8"
                        >
                            <Loader2 className="h-8 w-8 animate-spin text-gray-400" />
                        </motion.div>
                    ) : (
                        <motion.form
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                            onSubmit={handleSubmit}
                            className="p-6"
                        >
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                                {/* Left side - Image upload */}
                                <div className="space-y-4">
                                    <div className="relative aspect-square border-2 border-dashed rounded-lg overflow-hidden flex items-center justify-center bg-gray-50 hover:bg-gray-100 transition-colors">
                                        {previewImage ? (
                                            <div className="relative w-full h-full group">
                                                <img
                                                    src={previewImage || "/placeholder.svg"}
                                                    alt="Vaccine preview"
                                                    className="w-full h-full object-contain"
                                                />
                                                {!isViewMode && (
                                                    <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                                                        <label
                                                            htmlFor="vaccine-image"
                                                            className="cursor-pointer p-2 bg-white rounded-full hover:bg-gray-100"
                                                            title="Change image"
                                                        >
                                                            <Upload className="h-6 w-6" />
                                                        </label>
                                                    </div>
                                                )}
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
                                            disabled={isViewMode}
                                        />
                                    </div>
                                </div>

                                {/* Right side - Form fields */}
                                <div className="space-y-6">
                                    <div>
                                        <Label htmlFor="vaccineName">Vaccine Name</Label>
                                        <Input
                                            id="vaccineName"
                                            value={formData.vaccineName}
                                            onChange={(e) => setFormData({ ...formData, vaccineName: e.target.value })}
                                            disabled={isViewMode}
                                            required
                                            className="mt-1"
                                        />
                                    </div>

                                    <div>
                                        <Label htmlFor="description">Description</Label>
                                        <Textarea
                                            id="description"
                                            value={formData.description}
                                            onChange={(e) => setFormData({ ...formData, description: e.target.value })}
                                            disabled={isViewMode}
                                            required
                                            className="mt-1"
                                        />
                                    </div>

                                    <div className="grid grid-cols-2 gap-4">
                                        <div>
                                            <Label htmlFor="type">Origin</Label>
                                            <Input
                                                id="type"
                                                value={formData.type}
                                                onChange={(e) => setFormData({ ...formData, type: e.target.value })}
                                                disabled={isViewMode}
                                                required
                                                className="mt-1"
                                            />
                                        </div>
                                        <div>
                                            <Label htmlFor="price">Price (VND)</Label>
                                            <Input
                                                id="price"
                                                type="number"
                                                value={formData.price}
                                                onChange={(e) => setFormData({ ...formData, price: Number(e.target.value) })}
                                                disabled={isViewMode}
                                                required
                                                min={0}
                                                className="mt-1"
                                            />
                                        </div>
                                    </div>

                                    <div>
                                        <Label htmlFor="forBloodType">Blood Type</Label>
                                        <Select
                                            value={formData.forBloodType}
                                            onValueChange={(value) => setFormData({ ...formData, forBloodType: value })}
                                            disabled={isViewMode}
                                        >
                                            <SelectTrigger className="mt-1">
                                                <SelectValue placeholder="Select blood type" />
                                            </SelectTrigger>
                                            <SelectContent>
                                                <SelectItem value="Unknown">Unknown</SelectItem>
                                                <SelectItem value="A">A</SelectItem>
                                                <SelectItem value="B">B</SelectItem>
                                                <SelectItem value="AB">AB</SelectItem>
                                                <SelectItem value="O">O</SelectItem>
                                            </SelectContent>
                                        </Select>
                                    </div>

                                    <div className="grid grid-cols-2 gap-4">
                                        <div>
                                            <Label htmlFor="requiredDoses">Required Doses</Label>
                                            <Input
                                                id="requiredDoses"
                                                type="number"
                                                value={formData.requiredDoses}
                                                onChange={(e) => setFormData({ ...formData, requiredDoses: Number(e.target.value) })}
                                                disabled={isViewMode}
                                                required
                                                min={1}
                                                className="mt-1"
                                            />
                                        </div>
                                        <div>
                                            <Label htmlFor="doseIntervalDays">Dose Interval (Days)</Label>
                                            <Input
                                                id="doseIntervalDays"
                                                type="number"
                                                value={formData.doseIntervalDays}
                                                onChange={(e) => setFormData({ ...formData, doseIntervalDays: Number(e.target.value) })}
                                                disabled={isViewMode}
                                                required
                                                min={0}
                                                className="mt-1"
                                            />
                                        </div>
                                    </div>

                                    <div className="space-y-3 pt-2">
                                        <div className="flex items-center justify-between">
                                            <Label htmlFor="avoidChronic" className="cursor-pointer">
                                                Avoid Chronic Conditions
                                            </Label>
                                            <Switch
                                                id="avoidChronic"
                                                checked={formData.avoidChronic}
                                                onCheckedChange={(checked) => setFormData({ ...formData, avoidChronic: checked })}
                                                disabled={isViewMode}
                                            />
                                        </div>

                                        <div className="flex items-center justify-between">
                                            <Label htmlFor="avoidAllergy" className="cursor-pointer">
                                                Avoid Allergy
                                            </Label>
                                            <Switch
                                                id="avoidAllergy"
                                                checked={formData.avoidAllergy}
                                                onCheckedChange={(checked) => setFormData({ ...formData, avoidAllergy: checked })}
                                                disabled={isViewMode}
                                            />
                                        </div>

                                        <div className="flex items-center justify-between">
                                            <Label htmlFor="hasDrugInteraction" className="cursor-pointer">
                                                Has Drug Interaction
                                            </Label>
                                            <Switch
                                                id="hasDrugInteraction"
                                                checked={formData.hasDrugInteraction}
                                                onCheckedChange={(checked) => setFormData({ ...formData, hasDrugInteraction: checked })}
                                                disabled={isViewMode}
                                            />
                                        </div>

                                        <div className="flex items-center justify-between">
                                            <Label htmlFor="hasSpecialWarning" className="cursor-pointer">
                                                Has Special Warning
                                            </Label>
                                            <Switch
                                                id="hasSpecialWarning"
                                                checked={formData.hasSpecialWarning}
                                                onCheckedChange={(checked) => setFormData({ ...formData, hasSpecialWarning: checked })}
                                                disabled={isViewMode}
                                            />
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className="flex justify-end gap-2 mt-8">
                                <Button type="button" variant="outline" onClick={onClose}>
                                    {isViewMode ? "Close" : "Cancel"}
                                </Button>
                                {!isViewMode && (
                                    <Button type="submit" disabled={isLoading} className="bg-red-500 hover:bg-red-600 text-white">
                                        {isLoading ? "Saving..." : "Save"}
                                    </Button>
                                )}
                            </div>
                        </motion.form>
                    )}
                </AnimatePresence>
            </DialogContent>
        </Dialog>
    )
}

