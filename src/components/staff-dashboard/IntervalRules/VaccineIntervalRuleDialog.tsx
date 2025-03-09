"use client"

import type React from "react"

import { useState, useEffect } from "react"
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogFooter } from "@/components/ui/dialog"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Switch } from "@/components/ui/switch"
import { Loader2 } from "lucide-react"
import { useToast } from "@/hooks/use-toast"
import type { VaccineBase } from "@/api/staff/vaccineStaff"
import type { VaccineIntervalRule, VaccineIntervalRuleRequest } from "@/api/staff/"

interface VaccineIntervalRuleDialogProps {
    isOpen: boolean
    onClose: () => void
    onSave: (data: VaccineIntervalRuleRequest) => Promise<void>
    selectedRule: VaccineIntervalRule | null
    vaccines: VaccineBase[]
}

export function VaccineIntervalRuleDialog({
    isOpen,
    onClose,
    onSave,
    selectedRule,
    vaccines,
}: VaccineIntervalRuleDialogProps) {
    const [isLoading, setIsLoading] = useState(false)
    const { toast } = useToast()
    const [formData, setFormData] = useState<VaccineIntervalRuleRequest>({
        vaccineId: "",
        relatedVaccineId: "",
        minIntervalDays: 0,
        canBeGivenTogether: false,
    })

    // Reset form when dialog opens/closes or selected rule changes
    useEffect(() => {
        if (isOpen) {
            if (selectedRule) {
                setFormData({
                    vaccineId: selectedRule.vaccineId,
                    relatedVaccineId: selectedRule.relatedVaccineId,
                    minIntervalDays: selectedRule.minIntervalDays,
                    canBeGivenTogether: selectedRule.canBeGivenTogether,
                })
            } else {
                setFormData({
                    vaccineId: "",
                    relatedVaccineId: "",
                    minIntervalDays: 0,
                    canBeGivenTogether: false,
                })
            }
        }
    }, [isOpen, selectedRule])


    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault()

        // Validation
        if (formData.vaccineId === formData.relatedVaccineId) {
            toast({
                title: "Validation Error",
                description: "The two vaccines must be different",
                variant: "destructive",
            })
            return
        }

        if (formData.vaccineId === "" || formData.relatedVaccineId === "") {
            toast({
                title: "Validation Error",
                description: "Please select both vaccines",
                variant: "destructive",
            })
            return
        }

        if (formData.canBeGivenTogether && formData.minIntervalDays > 0) {
            toast({
                title: "Validation Error",
                description: "If vaccines can be given together, minimum interval days should be 0",
                variant: "destructive",
            })
            return
        }

        try {
            setIsLoading(true)
            await onSave(formData)
            onClose()
        } catch (error) {
            console.error("Error saving rule:", error)
        } finally {
            setIsLoading(false)
        }
    }

    // Find vaccine names for display
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    const getVaccineName = (id: string) => {
        const vaccine = vaccines.find((v) => v.id === id)
        return vaccine ? vaccine.vaccineName : "Unknown Vaccine"
    }

    return (
        <Dialog open={isOpen} onOpenChange={(open) => !open && onClose()}>
            <DialogContent className="sm:max-w-md">
                <DialogHeader>
                    <DialogTitle>{selectedRule ? "Edit Vaccine Interval Rule" : "Create Vaccine Interval Rule"}</DialogTitle>
                </DialogHeader>
                <form onSubmit={handleSubmit}>
                    <div className="grid gap-4 py-4">
                        <div className="grid gap-2">
                            <Label htmlFor="vaccineId">First Vaccine</Label>
                            <select
                                id="vaccineId"
                                value={formData.vaccineId}
                                onChange={(e) => setFormData({ ...formData, vaccineId: e.target.value })}
                                className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                            >
                                <option value="">Select a vaccine</option>
                                {vaccines.map((vaccine) => (
                                    <option key={`first-${vaccine.id}`} value={vaccine.id}>
                                        {vaccine.vaccineName}
                                    </option>
                                ))}
                            </select>
                        </div>

                        <div className="grid gap-2">
                            <Label htmlFor="relatedVaccineId">Second Vaccine</Label>
                            <select
                                id="relatedVaccineId"
                                value={formData.relatedVaccineId}
                                onChange={(e) => setFormData({ ...formData, relatedVaccineId: e.target.value })}
                                className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                            >
                                <option value="">Select a vaccine</option>
                                {vaccines.map((vaccine) => (
                                    <option key={`second-${vaccine.id}`} value={vaccine.id}>
                                        {vaccine.vaccineName}
                                    </option>
                                ))}
                            </select>
                        </div>

                        <div className="grid gap-2">
                            <Label htmlFor="canBeGivenTogether">Can Be Given Together</Label>
                            <div className="flex items-center space-x-2">
                                <Switch
                                    id="canBeGivenTogether"
                                    checked={formData.canBeGivenTogether}
                                    onCheckedChange={(checked) => {
                                        setFormData({
                                            ...formData,
                                            canBeGivenTogether: checked,
                                            // If toggling to "can be given together", set interval to 0
                                            minIntervalDays: checked ? 0 : formData.minIntervalDays,
                                        })
                                    }}
                                />
                                <Label htmlFor="canBeGivenTogether" className="cursor-pointer">
                                    {formData.canBeGivenTogether ? "Yes" : "No"}
                                </Label>
                            </div>
                        </div>

                        <div className="grid gap-2">
                            <Label htmlFor="minIntervalDays">Minimum Interval Days</Label>
                            <Input
                                id="minIntervalDays"
                                type="number"
                                min={0}
                                value={formData.minIntervalDays}
                                onChange={(e) => setFormData({ ...formData, minIntervalDays: Number.parseInt(e.target.value) || 0 })}
                                disabled={formData.canBeGivenTogether}
                            />
                            {formData.canBeGivenTogether && (
                                <p className="text-xs text-muted-foreground">
                                    Interval days set to 0 when vaccines can be given together
                                </p>
                            )}
                        </div>
                    </div>

                    <DialogFooter>
                        <Button type="button" variant="outline" onClick={onClose} disabled={isLoading}>
                            Cancel
                        </Button>
                        <Button type="submit" disabled={isLoading}>
                            {isLoading ? (
                                <>
                                    <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                                    Saving...
                                </>
                            ) : (
                                "Save"
                            )}
                        </Button>
                    </DialogFooter>
                </form>
            </DialogContent>
        </Dialog>
    )
}

