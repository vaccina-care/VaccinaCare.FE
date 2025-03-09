"use client"

import type React from "react"
import { useState, useEffect, useCallback } from "react"
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogFooter } from "@/components/ui/dialog"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Switch } from "@/components/ui/switch"
import { Loader2, Search } from "lucide-react"
import { useToast } from "@/hooks/use-toast"
import { Card, CardContent } from "@/components/ui/card"
import { ScrollArea } from "@/components/ui/scroll-area"
import { getAllVaccines, getVaccineById, type VaccineBase } from "@/api/staff/vaccineStaff"
import type { VaccineIntervalRule, VaccineIntervalRuleRequest } from "@/api/staff/vaccineIntervalRules"

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
}: VaccineIntervalRuleDialogProps) {
    const [isLoading, setIsLoading] = useState(false)
    const { toast } = useToast()
    const [formData, setFormData] = useState<VaccineIntervalRuleRequest>({
        vaccineId: "",
        relatedVaccineId: "",
        minIntervalDays: 0,
        canBeGivenTogether: false,
    })

    // Search states
    const [firstVaccineSearch, setFirstVaccineSearch] = useState("")
    const [secondVaccineSearch, setSecondVaccineSearch] = useState("")
    const [firstVaccineResults, setFirstVaccineResults] = useState<VaccineBase[]>([])
    const [secondVaccineResults, setSecondVaccineResults] = useState<VaccineBase[]>([])
    const [showFirstResults, setShowFirstResults] = useState(false)
    const [showSecondResults, setShowSecondResults] = useState(false)
    const [isSearchingFirst, setIsSearchingFirst] = useState(false)
    const [isSearchingSecond, setIsSearchingSecond] = useState(false)

    // Store the complete vaccine objects, not just names
    const [firstVaccine, setFirstVaccine] = useState<VaccineBase | null>(null)
    const [secondVaccine, setSecondVaccine] = useState<VaccineBase | null>(null)

    // Reset form when dialog opens/closes or selected rule changes
    useEffect(() => {
        if (isOpen) {
            setTimeout(() => {
                if (selectedRule) {
                    setFormData({
                        vaccineId: selectedRule.vaccineId,
                        relatedVaccineId: selectedRule.relatedVaccineId,
                        minIntervalDays: selectedRule.minIntervalDays,
                        canBeGivenTogether: selectedRule.canBeGivenTogether,
                    })

                    // Fetch complete vaccine data for both vaccines
                    const loadVaccineDetails = async () => {
                        try {
                            const [firstVaccineResponse, secondVaccineResponse] = await Promise.all([
                                getVaccineById(selectedRule.vaccineId),
                                getVaccineById(selectedRule.relatedVaccineId),
                            ])

                            if (firstVaccineResponse.isSuccess) {
                                setFirstVaccine(firstVaccineResponse.data)
                            }

                            if (secondVaccineResponse.isSuccess) {
                                setSecondVaccine(secondVaccineResponse.data)
                            }
                        } catch (error) {
                            console.error("Error fetching vaccine details:", error)
                            toast({
                                title: "Error",
                                description: "Failed to load vaccine details",
                                variant: "destructive",
                            })
                        }
                    }

                    loadVaccineDetails()
                } else {
                    setFormData({
                        vaccineId: "",
                        relatedVaccineId: "",
                        minIntervalDays: 0,
                        canBeGivenTogether: false,
                    })
                    setFirstVaccine(null)
                    setSecondVaccine(null)
                }

                // Reset search states
                setFirstVaccineSearch("")
                setSecondVaccineSearch("")
                setFirstVaccineResults([])
                setSecondVaccineResults([])
                setShowFirstResults(false)
                setShowSecondResults(false)

                // Restore pointer events when dialog is open
                document.body.style.pointerEvents = "auto"
            }, 50)
        }
    }, [isOpen, selectedRule, toast])

    // Fetch vaccines from API based on search term
    const fetchVaccines = useCallback(
        async (searchTerm: string, isFirstVaccine: boolean) => {
            if (!searchTerm.trim()) {
                if (isFirstVaccine) {
                    setFirstVaccineResults([])
                    setShowFirstResults(false)
                } else {
                    setSecondVaccineResults([])
                    setShowSecondResults(false)
                }
                return
            }

            try {
                if (isFirstVaccine) {
                    setIsSearchingFirst(true)
                } else {
                    setIsSearchingSecond(true)
                }

                // Call the API to get vaccines based on search term
                const response = await getAllVaccines({
                    search: searchTerm,
                    page: 1,
                    pageSize: 10,
                })

                if (response.isSuccess) {
                    if (isFirstVaccine) {
                        setFirstVaccineResults(response.data.vaccines)
                        setShowFirstResults(true)
                    } else {
                        setSecondVaccineResults(response.data.vaccines)
                        setShowSecondResults(true)
                    }
                }
            } catch (error) {
                console.error("Error fetching vaccines:", error)
                toast({
                    title: "Error",
                    description: "Failed to fetch vaccines",
                    variant: "destructive",
                })
            } finally {
                if (isFirstVaccine) {
                    setIsSearchingFirst(false)
                } else {
                    setIsSearchingSecond(false)
                }
            }
        },
        [toast],
    )

    // Handle vaccine selection - store the complete vaccine object
    const handleVaccineSelect = (vaccine: VaccineBase, isFirstVaccine: boolean) => {
        if (isFirstVaccine) {
            setFormData((prev) => ({ ...prev, vaccineId: vaccine.id }))
            setFirstVaccine(vaccine)
            setFirstVaccineSearch("")
            setShowFirstResults(false)
        } else {
            setFormData((prev) => ({ ...prev, relatedVaccineId: vaccine.id }))
            setSecondVaccine(vaccine)
            setSecondVaccineSearch("")
            setShowSecondResults(false)
        }
    }

    // Debounce search to avoid too many API calls
    useEffect(() => {
        const timer = setTimeout(() => {
            if (firstVaccineSearch) {
                fetchVaccines(firstVaccineSearch, true)
            }
        }, 300)

        return () => clearTimeout(timer)
    }, [firstVaccineSearch, fetchVaccines])

    useEffect(() => {
        const timer = setTimeout(() => {
            if (secondVaccineSearch) {
                fetchVaccines(secondVaccineSearch, false)
            }
        }, 300)

        return () => clearTimeout(timer)
    }, [secondVaccineSearch, fetchVaccines])

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

    // Handle click outside search results
    useEffect(() => {
        const handleClickOutside = (event: MouseEvent) => {
            const target = event.target as HTMLElement
            if (!target.closest("#firstVaccineSearch") && !target.closest("#firstVaccineResults")) {
                setShowFirstResults(false)
            }
            if (!target.closest("#secondVaccineSearch") && !target.closest("#secondVaccineResults")) {
                setShowSecondResults(false)
            }
        }

        document.addEventListener("mousedown", handleClickOutside)
        return () => {
            document.removeEventListener("mousedown", handleClickOutside)
        }
    }, [])

    return (
        <Dialog open={isOpen} onOpenChange={(open) => !open && onClose()}>
            <DialogContent
                key={selectedRule?.id || "new"}
                className="sm:max-w-md"
                onPointerDownOutside={(e) => {
                    if (isLoading) {
                        e.preventDefault() // Prevent closing while loading
                    } else {
                        setTimeout(() => {
                            document.body.style.pointerEvents = "auto"
                        }, 100)
                    }
                }}
                onEscapeKeyDown={(e) => {
                    if (isLoading) {
                        e.preventDefault() // Prevent closing while saving
                    } else {
                        setTimeout(() => {
                            document.body.style.pointerEvents = "auto"
                        }, 100)
                    }
                }}
            >
                <DialogHeader>
                    <DialogTitle>{selectedRule ? "Edit Vaccine Interval Rule" : "Create Vaccine Interval Rule"}</DialogTitle>
                </DialogHeader>
                <form onSubmit={handleSubmit}>
                    <div className="grid gap-4 py-4">
                        {/* First Vaccine Search */}
                        <div className="grid gap-2">
                            <Label htmlFor="firstVaccineSearch">First Vaccine</Label>
                            <div className="relative">
                                <div className="relative">
                                    <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
                                    <Input
                                        id="firstVaccineSearch"
                                        placeholder={firstVaccine?.vaccineName || "Search for a vaccine..."}
                                        value={firstVaccineSearch}
                                        onChange={(e) => setFirstVaccineSearch(e.target.value)}
                                        onFocus={() => {
                                            if (firstVaccineSearch) {
                                                setShowFirstResults(true)
                                            }
                                        }}
                                        className="pl-9"
                                    />
                                    {isSearchingFirst && (
                                        <Loader2 className="absolute right-3 top-1/2 h-4 w-4 -translate-y-1/2 animate-spin text-muted-foreground" />
                                    )}
                                </div>
                                {showFirstResults && firstVaccineResults.length > 0 && (
                                    <Card id="firstVaccineResults" className="absolute z-10 w-full mt-1">
                                        <CardContent className="p-0">
                                            <ScrollArea className="h-[200px]">
                                                <div className="p-2">
                                                    {firstVaccineResults.map((vaccine) => (
                                                        <div
                                                            key={vaccine.id}
                                                            className="flex items-center gap-2 p-2 hover:bg-muted rounded-md cursor-pointer"
                                                            onClick={() => handleVaccineSelect(vaccine, true)}
                                                        >
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
                                                    ))}
                                                </div>
                                            </ScrollArea>
                                        </CardContent>
                                    </Card>
                                )}
                                {showFirstResults && firstVaccineSearch && firstVaccineResults.length === 0 && !isSearchingFirst && (
                                    <Card className="absolute z-10 w-full mt-1">
                                        <CardContent className="p-4 text-center">
                                            <p className="text-sm text-muted-foreground">No vaccines found</p>
                                        </CardContent>
                                    </Card>
                                )}
                            </div>
                            {firstVaccine && (
                                <div className="flex items-center gap-2 p-2 bg-muted/50 rounded-md">
                                    <div className="h-6 w-6 rounded-md overflow-hidden border">
                                        <img
                                            src={firstVaccine.picUrl || "/placeholder.svg?height=24&width=24"}
                                            alt={firstVaccine.vaccineName}
                                            className="h-full w-full object-cover"
                                        />
                                    </div>
                                    <p className="text-sm font-medium">{firstVaccine.vaccineName}</p>
                                    <Button
                                        type="button"
                                        variant="ghost"
                                        size="sm"
                                        className="ml-auto h-6 w-6 p-0"
                                        onClick={() => {
                                            setFormData((prev) => ({ ...prev, vaccineId: "" }))
                                            setFirstVaccine(null)
                                        }}
                                    >
                                        &times;
                                    </Button>
                                </div>
                            )}
                        </div>

                        {/* Second Vaccine Search */}
                        <div className="grid gap-2">
                            <Label htmlFor="secondVaccineSearch">Second Vaccine</Label>
                            <div className="relative">
                                <div className="relative">
                                    <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
                                    <Input
                                        id="secondVaccineSearch"
                                        placeholder={secondVaccine?.vaccineName || "Search for a vaccine..."}
                                        value={secondVaccineSearch}
                                        onChange={(e) => setSecondVaccineSearch(e.target.value)}
                                        onFocus={() => {
                                            if (secondVaccineSearch) {
                                                setShowSecondResults(true)
                                            }
                                        }}
                                        className="pl-9"
                                    />
                                    {isSearchingSecond && (
                                        <Loader2 className="absolute right-3 top-1/2 h-4 w-4 -translate-y-1/2 animate-spin text-muted-foreground" />
                                    )}
                                </div>
                                {showSecondResults && secondVaccineResults.length > 0 && (
                                    <Card id="secondVaccineResults" className="absolute z-10 w-full mt-1">
                                        <CardContent className="p-0">
                                            <ScrollArea className="h-[200px]">
                                                <div className="p-2">
                                                    {secondVaccineResults.map((vaccine) => (
                                                        <div
                                                            key={vaccine.id}
                                                            className="flex items-center gap-2 p-2 hover:bg-muted rounded-md cursor-pointer"
                                                            onClick={() => handleVaccineSelect(vaccine, false)}
                                                        >
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
                                                    ))}
                                                </div>
                                            </ScrollArea>
                                        </CardContent>
                                    </Card>
                                )}
                                {showSecondResults &&
                                    secondVaccineSearch &&
                                    secondVaccineResults.length === 0 &&
                                    !isSearchingSecond && (
                                        <Card className="absolute z-10 w-full mt-1">
                                            <CardContent className="p-4 text-center">
                                                <p className="text-sm text-muted-foreground">No vaccines found</p>
                                            </CardContent>
                                        </Card>
                                    )}
                            </div>
                            {secondVaccine && (
                                <div className="flex items-center gap-2 p-2 bg-muted/50 rounded-md">
                                    <div className="h-6 w-6 rounded-md overflow-hidden border">
                                        <img
                                            src={secondVaccine.picUrl || "/placeholder.svg?height=24&width=24"}
                                            alt={secondVaccine.vaccineName}
                                            className="h-full w-full object-cover"
                                        />
                                    </div>
                                    <p className="text-sm font-medium">{secondVaccine.vaccineName}</p>
                                    <Button
                                        type="button"
                                        variant="ghost"
                                        size="sm"
                                        className="ml-auto h-6 w-6 p-0"
                                        onClick={() => {
                                            setFormData((prev) => ({ ...prev, relatedVaccineId: "" }))
                                            setSecondVaccine(null)
                                        }}
                                    >
                                        &times;
                                    </Button>
                                </div>
                            )}
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

