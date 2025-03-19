"use client"

import { useState, useEffect } from "react"
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogFooter } from "@/components/ui/dialog"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { useToast } from "@/hooks/use-toast"
import { Loader2, Search, Calendar, AlertCircle, Syringe } from "lucide-react"
import { format } from "date-fns"
import { getVaccineList, type Vaccine } from "@/api/vaccine"
import { addVaccinationRecord } from "@/api/vaccineRecord"
import { useDebounce } from "@/hooks/use-debounce"
import { Badge } from "@/components/ui/badge"

interface VaccineRecordDialogProps {
    isOpen: boolean
    onClose: () => void
    childId: string
    childName: string
    onRecordAdded: () => void
}

export function VaccineRecordDialog({ isOpen, onClose, childId, childName, onRecordAdded }: VaccineRecordDialogProps) {
    const { toast } = useToast()
    const [searchQuery, setSearchQuery] = useState("")
    const debouncedSearch = useDebounce(searchQuery, 500)
    const [vaccines, setVaccines] = useState<Vaccine[]>([])
    const [selectedVaccine, setSelectedVaccine] = useState<Vaccine | null>(null)
    const [doseNumber, setDoseNumber] = useState<number>(1)
    const [vaccinationDate, setVaccinationDate] = useState<string>(format(new Date(), "yyyy-MM-dd"))
    const [reactionDetails, setReactionDetails] = useState<string>("")
    const [isSubmitting, setIsSubmitting] = useState(false)
    const [searchLoading, setSearchLoading] = useState(false)

    // Fetch vaccines when search query changes
    useEffect(() => {
        const fetchVaccines = async () => {
            if (!isOpen) return

            try {
                setSearchLoading(true)
                const response = await getVaccineList({
                    search: debouncedSearch,
                    pageSize: 10, 
                })

                if (response.isSuccess) {
                    setVaccines(response.data.vaccines)
                }
            } catch (error) {
                console.error("Error fetching vaccines:", error)
                toast({
                    title: "Error",
                    description: "Failed to load vaccines. Please try again.",
                    variant: "destructive",
                })
            } finally {
                setSearchLoading(false)
            }
        }

        if (isOpen) {
            fetchVaccines()
        }
    }, [debouncedSearch, isOpen, toast])

    // Reset form when dialog closes
    useEffect(() => {
        if (!isOpen) {
            setSearchQuery("")
            setSelectedVaccine(null)
            setDoseNumber(1)
            setVaccinationDate(format(new Date(), "yyyy-MM-dd"))
            setReactionDetails("")
        }
    }, [isOpen])

    const handleSubmit = async () => {
        if (!selectedVaccine) {
            toast({
                title: "Missing Information",
                description: "Please select a vaccine.",
                variant: "destructive",
            })
            return
        }

        if (!vaccinationDate) {
            toast({
                title: "Missing Information",
                description: "Please enter the vaccination date.",
                variant: "destructive",
            })
            return
        }

        try {
            setIsSubmitting(true)

            const recordData = {
                childId,
                vaccineId: selectedVaccine.id,
                vaccinationDate: new Date(vaccinationDate).toISOString(),
                doseNumber,
                reactionDetails: reactionDetails || undefined,
            }

            const response = await addVaccinationRecord(recordData)

            if (response.isSuccess) {
                toast({
                    title: "Success",
                    description: "Vaccination record added successfully.",
                    variant: "success"
                })
                onRecordAdded()
                onClose()
            } else {
                toast({
                    title: "Error",
                    description: response.message || "Failed to add vaccination record.",
                    variant: "destructive",
                })
            }
        } catch (error) {
            console.error("Error adding vaccination record:", error)
            toast({
                title: "Error",
                description: "An unexpected error occurred. Please try again.",
                variant: "destructive",
            })
        } finally {
            setIsSubmitting(false)
        }
    }

    // Group vaccines by type
    const groupedVaccines = vaccines.reduce(
        (acc, vaccine) => {
            if (!acc[vaccine.type]) {
                acc[vaccine.type] = []
            }
            acc[vaccine.type].push(vaccine)
            return acc
        },
        {} as Record<string, Vaccine[]>,
    )

    return (
        <Dialog open={isOpen} onOpenChange={(open) => !open && onClose()}>
            <DialogContent className="sm:max-w-[500px] max-h-[90vh] overflow-y-auto">
                <DialogHeader>
                    <DialogTitle className="text-xl">Add External Vaccination Record</DialogTitle>
                </DialogHeader>

                <div className="space-y-4 py-2">
                    <div>
                        <div className="mb-1 text-sm font-medium text-gray-700">Child</div>
                        <div className="p-2 bg-blue-50 rounded-md text-blue-800">{childName}</div>
                    </div>

                    {/* Vaccine Search */}
                    <div className="space-y-2">
                        <Label htmlFor="vaccine-search">Search Vaccine</Label>
                        <div className="relative">
                            <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-gray-500" />
                            <Input
                                id="vaccine-search"
                                placeholder="Search by vaccine name..."
                                className="pl-9"
                                value={searchQuery}
                                onChange={(e) => setSearchQuery(e.target.value)}
                            />
                            {searchLoading && <Loader2 className="absolute right-2.5 top-2.5 h-4 w-4 animate-spin text-gray-500" />}
                        </div>
                    </div>

                    {/* Grouped Vaccines */}
                    {Object.keys(groupedVaccines).length > 0 ? (
                        <div className="space-y-4">
                            {Object.entries(groupedVaccines).map(([type, typeVaccines]) => (
                                <div key={type} className="space-y-2">
                                    <div className="flex items-center gap-2">
                                        <Badge variant="outline" className="bg-blue-50 text-blue-700 border-blue-200">
                                            {type}
                                        </Badge>
                                    </div>
                                    <div className="grid grid-cols-1 gap-2 pl-2">
                                        {typeVaccines.map((vaccine) => (
                                            <div
                                                key={vaccine.id}
                                                className={`p-3 rounded-md border cursor-pointer transition-colors ${selectedVaccine?.id === vaccine.id
                                                        ? "bg-blue-50 border-blue-300"
                                                        : "hover:bg-gray-50 border-gray-200"
                                                    }`}
                                                onClick={() => setSelectedVaccine(vaccine)}
                                            >
                                                <div className="flex items-start justify-between">
                                                    <div>
                                                        <h4 className="font-medium text-gray-900">{vaccine.vaccineName}</h4>
                                                        <p className="text-xs text-gray-500 mt-1 line-clamp-2">{vaccine.description}</p>
                                                    </div>
                                                    <div className="flex items-center gap-1 text-xs bg-blue-100 text-blue-800 px-2 py-1 rounded-full">
                                                        <Syringe className="h-3 w-3" />
                                                        {vaccine.requiredDoses} {vaccine.requiredDoses > 1 ? "doses" : "dose"}
                                                    </div>
                                                </div>
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            ))}
                        </div>
                    ) : (
                        searchQuery &&
                        !searchLoading && (
                            <div className="text-center py-4 text-gray-500">No vaccines found matching "{searchQuery}"</div>
                        )
                    )}

                    {/* Selected Vaccine Info */}
                    {selectedVaccine && (
                        <div className="p-3 bg-blue-50 rounded-md border border-blue-200">
                            <h4 className="font-medium text-blue-900">Selected: {selectedVaccine.vaccineName}</h4>
                            <div className="flex items-center gap-2 mt-2 text-sm">
                                <span className="font-medium text-blue-800">Required Doses:</span>
                                <span className="text-blue-700">{selectedVaccine.requiredDoses}</span>
                            </div>
                            <div className="flex items-center gap-2 mt-1 text-sm">
                                <span className="font-medium text-blue-800">Price:</span>
                                <span className="text-blue-700">
                                    {new Intl.NumberFormat("vi-VN", {
                                        style: "currency",
                                        currency: "VND",
                                    }).format(selectedVaccine.price)}
                                </span>
                            </div>
                        </div>
                    )}

                    {/* Dose Number */}
                    {selectedVaccine && (
                        <div className="space-y-2">
                            <Label htmlFor="dose-number">Dose Number</Label>
                            <Select value={doseNumber.toString()} onValueChange={(value) => setDoseNumber(Number.parseInt(value))}>
                                <SelectTrigger id="dose-number">
                                    <SelectValue placeholder="Select dose number" />
                                </SelectTrigger>
                                <SelectContent>
                                    {Array.from({ length: selectedVaccine.requiredDoses }, (_, i) => (
                                        <SelectItem key={i + 1} value={(i + 1).toString()}>
                                            Dose {i + 1} of {selectedVaccine.requiredDoses}
                                        </SelectItem>
                                    ))}
                                </SelectContent>
                            </Select>
                        </div>
                    )}

                    {/* Vaccination Date */}
                    <div className="space-y-2">
                        <Label htmlFor="vaccination-date" className="flex items-center gap-1">
                            <Calendar className="h-4 w-4" />
                            Vaccination Date
                        </Label>
                        <Input
                            id="vaccination-date"
                            type="date"
                            value={vaccinationDate}
                            onChange={(e) => setVaccinationDate(e.target.value)}
                            max={format(new Date(), "yyyy-MM-dd")}
                        />
                    </div>

                    {/* Reaction Details */}
                    <div className="space-y-2">
                        <Label htmlFor="reaction-details" className="flex items-center gap-1">
                            <AlertCircle className="h-4 w-4" />
                            Reaction Details (Optional)
                        </Label>
                        <Textarea
                            id="reaction-details"
                            placeholder="Enter any reactions or side effects..."
                            value={reactionDetails}
                            onChange={(e) => setReactionDetails(e.target.value)}
                            rows={3}
                        />
                    </div>
                </div>

                <DialogFooter>
                    <Button variant="outline" onClick={onClose}>
                        Cancel
                    </Button>
                    <Button onClick={handleSubmit} disabled={isSubmitting || !selectedVaccine}>
                        {isSubmitting ? (
                            <>
                                <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                                Saving...
                            </>
                        ) : (
                            "Save Record"
                        )}
                    </Button>
                </DialogFooter>
            </DialogContent>
        </Dialog>
    )
}

