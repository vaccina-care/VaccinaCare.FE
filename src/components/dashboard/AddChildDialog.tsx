"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Switch } from "@/components/ui/switch"
import { DatePicker } from "@/components/DatePicker"
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog"
import { User, Calendar, Droplet, FileText, AlertTriangle, Pill, Activity, Plus } from "lucide-react"
import type { ChildData } from "@/api/children"

interface AddChildDialogProps {
    onSubmit: (childData: Omit<ChildData, "id">) => Promise<void>
}

export function AddChildDialog({ onSubmit }: AddChildDialogProps) {
    const [open, setOpen] = useState(false)
    const [dateOfBirth, setDateOfBirth] = useState<Date | undefined>(new Date())
    const [formData, setFormData] = useState<Omit<ChildData, "id">>({
        fullName: "",
        dateOfBirth: new Date().toISOString().split("T")[0], // Format as YYYY-MM-DD
        gender: true,
        medicalHistory: "",
        bloodType: "Unknown",
        hasChronicIllnesses: false,
        chronicIllnessesDescription: "",
        hasAllergies: false,
        allergiesDescription: "",
        hasRecentMedication: false,
        recentMedicationDescription: "",
        hasOtherSpecialCondition: false,
        otherSpecialConditionDescription: "",
    })

    const resetForm = () => {
        setFormData({
            fullName: "",
            dateOfBirth: new Date().toISOString().split("T")[0],
            gender: true,
            medicalHistory: "",
            bloodType: "Unknown",
            hasChronicIllnesses: false,
            chronicIllnessesDescription: "",
            hasAllergies: false,
            allergiesDescription: "",
            hasRecentMedication: false,
            recentMedicationDescription: "",
            hasOtherSpecialCondition: false,
            otherSpecialConditionDescription: "",
        })
        setDateOfBirth(new Date())
    }

    const handleInputChange = (field: keyof Omit<ChildData, "id">, value: string | boolean) => {
        setFormData((prev) => ({ ...prev, [field]: value }))
    }

    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    // const handleDateChange = (newDate: Date | undefined) => {
    //     if (newDate) {
    //         setDateOfBirth(newDate)
    //         // Format date as YYYY-MM-DD
    //         const formattedDate = newDate.toISOString().split("T")[0]
    //         handleInputChange("dateOfBirth", formattedDate)
    //     }
    // }

    const handleDateChange = (newDate: Date | undefined) => {
		setDateOfBirth(newDate)
		if (newDate) {
			handleInputChange("dateOfBirth", newDate.toISOString())
		}
	}

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault()
        try {
            // Ensure the date is in the correct format before submitting
            const submissionData = {
                ...formData,
                dateOfBirth: dateOfBirth?.toISOString().split("T")[0] || new Date().toISOString().split("T")[0],
            }
            await onSubmit(submissionData)
            setOpen(false)
            resetForm()
        } catch (error) {
            console.error("Error submitting form:", error)
        }
    }

    const handleOpenChange = (newOpen: boolean) => {
        setOpen(newOpen)
        if (!newOpen) {
            resetForm()
        }
    }

    return (
        <Dialog open={open} onOpenChange={handleOpenChange}>
            <DialogTrigger asChild>
                <Button className="bg-blue-600 hover:bg-blue-700">
                    <Plus className="h-4 w-4 mr-2" />
                    Add Child
                </Button>
            </DialogTrigger>
            <DialogContent
                className="max-w-3xl overflow-visible"
                onPointerDownOutside={(e) => {
                    // Prevent closing when clicking on date picker or select popups
                    const target = e.target as HTMLElement
                    if (target.closest('[role="dialog"]') || target.closest('[role="listbox"]')) {
                        e.preventDefault()
                    }
                }}
            >
                <DialogHeader>
                    <DialogTitle>Add New Child</DialogTitle>
                </DialogHeader>
                <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="space-y-2">
                        <Label htmlFor="fullName" className="flex items-center space-x-2">
                            <User className="h-4 w-4" />
                            <span>Full Name</span>
                        </Label>
                        <Input
                            id="fullName"
                            value={formData.fullName}
                            onChange={(e) => handleInputChange("fullName", e.target.value)}
                            required
                            className="bg-transparent"
                        />
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div className="space-y-2">
                            <Label htmlFor="dateOfBirth" className="flex items-center space-x-2">
                                <Calendar className="h-4 w-4" />
                                <span>Date of Birth</span>
                            </Label>
                            <div onClick={(e) => e.stopPropagation()}>
                                <DatePicker
                                    date={dateOfBirth}
                                    setDate={handleDateChange}
                                />
                            </div>
                        </div>
                        <div className="space-y-2">
                            <Label htmlFor="gender" className="flex items-center space-x-2">
                                <User className="h-4 w-4" />
                                <span>Gender</span>
                            </Label>
                            <Select
                                value={formData.gender ? "true" : "false"}
                                onValueChange={(value) => handleInputChange("gender", value === "true")}
                            >
                                <SelectTrigger className="w-full">
                                    <SelectValue>{formData.gender ? "Male" : "Female"}</SelectValue>
                                </SelectTrigger>
                                <SelectContent position="popper">
                                    <SelectItem value="true">Male</SelectItem>
                                    <SelectItem value="false">Female</SelectItem>
                                </SelectContent>
                            </Select>
                        </div>
                    </div>

                    <div className="space-y-2">
                        <Label htmlFor="bloodType" className="flex items-center space-x-2">
                            <Droplet className="h-4 w-4" />
                            <span>Blood Type</span>
                        </Label>
                        <Select
                            value={formData.bloodType}
                            onValueChange={(value) => {
                                handleInputChange("bloodType", value)
                                // Force a re-render to update the display
                                setFormData((prev) => ({ ...prev, bloodType: value }))
                            }}
                        >
                            <SelectTrigger className="w-full">
                                <SelectValue>{formData.bloodType}</SelectValue>
                            </SelectTrigger>
                            <SelectContent position="popper">
                                <SelectItem value="A">A</SelectItem>
                                <SelectItem value="B">B</SelectItem>
                                <SelectItem value="AB">AB</SelectItem>
                                <SelectItem value="O">O</SelectItem>
                                <SelectItem value="Unknown">Unknown</SelectItem>
                            </SelectContent>
                        </Select>
                    </div>

                    <div className="space-y-2">
                        <Label htmlFor="medicalHistory" className="flex items-center space-x-2">
                            <FileText className="h-4 w-4" />
                            <span>Medical History</span>
                        </Label>
                        <Textarea
                            id="medicalHistory"
                            value={formData.medicalHistory}
                            onChange={(e) => handleInputChange("medicalHistory", e.target.value)}
                            className="min-h-[100px] bg-transparent"
                        />
                    </div>

                    <div className="space-y-4 border-t pt-4">
                        <div className="flex items-center justify-between">
                            <Label htmlFor="chronicIllnesses" className="flex items-center space-x-2">
                                <Activity className="h-4 w-4" />
                                <span>Chronic Illnesses</span>
                            </Label>
                            <Switch
                                id="chronicIllnesses"
                                checked={formData.hasChronicIllnesses}
                                onCheckedChange={(checked) => handleInputChange("hasChronicIllnesses", checked)}
                            />
                        </div>
                        {formData.hasChronicIllnesses && (
                            <Textarea
                                id="chronicIllnessesDescription"
                                value={formData.chronicIllnessesDescription}
                                onChange={(e) => handleInputChange("chronicIllnessesDescription", e.target.value)}
                                placeholder="Describe any chronic illnesses"
                                className="mt-2 min-h-[100px]"
                                required
                            />
                        )}
                    </div>

                    <div className="space-y-4 border-t pt-4">
                        <div className="flex items-center justify-between">
                            <Label htmlFor="allergies" className="flex items-center space-x-2">
                                <AlertTriangle className="h-4 w-4" />
                                <span>Allergies</span>
                            </Label>
                            <Switch
                                id="allergies"
                                checked={formData.hasAllergies}
                                onCheckedChange={(checked) => handleInputChange("hasAllergies", checked)}
                            />
                        </div>
                        {formData.hasAllergies && (
                            <Textarea
                                id="allergiesDescription"
                                value={formData.allergiesDescription}
                                onChange={(e) => handleInputChange("allergiesDescription", e.target.value)}
                                placeholder="Describe any allergies"
                                className="mt-2 min-h-[100px]"
                                required
                            />
                        )}
                    </div>

                    <div className="space-y-4 border-t pt-4">
                        <div className="flex items-center justify-between">
                            <Label htmlFor="recentMedication" className="flex items-center space-x-2">
                                <Pill className="h-4 w-4" />
                                <span>Recent Medication</span>
                            </Label>
                            <Switch
                                id="recentMedication"
                                checked={formData.hasRecentMedication}
                                onCheckedChange={(checked) => handleInputChange("hasRecentMedication", checked)}
                            />
                        </div>
                        {formData.hasRecentMedication && (
                            <Textarea
                                id="recentMedicationDescription"
                                value={formData.recentMedicationDescription}
                                onChange={(e) => handleInputChange("recentMedicationDescription", e.target.value)}
                                placeholder="Describe any recent medication"
                                className="mt-2 min-h-[100px]"
                                required
                            />
                        )}
                    </div>

                    <div className="space-y-4 border-t pt-4">
                        <div className="flex items-center justify-between">
                            <Label htmlFor="otherConditions" className="flex items-center space-x-2">
                                <Activity className="h-4 w-4" />
                                <span>Other Special Conditions</span>
                            </Label>
                            <Switch
                                id="otherConditions"
                                checked={formData.hasOtherSpecialCondition}
                                onCheckedChange={(checked) => handleInputChange("hasOtherSpecialCondition", checked)}
                            />
                        </div>
                        {formData.hasOtherSpecialCondition && (
                            <Textarea
                                id="otherConditionsDescription"
                                value={formData.otherSpecialConditionDescription}
                                onChange={(e) => handleInputChange("otherSpecialConditionDescription", e.target.value)}
                                placeholder="Describe any other special conditions"
                                className="mt-2 min-h-[100px]"
                                required
                            />
                        )}
                    </div>

                    <div className="flex justify-end space-x-2">
                        <Button type="button" variant="outline" onClick={() => setOpen(false)}>
                            Cancel
                        </Button>
                        <Button type="submit" className="bg-blue-600 hover:bg-blue-700">
                            Add Child
                        </Button>
                    </div>
                </form>
            </DialogContent>
        </Dialog>
    )
}

