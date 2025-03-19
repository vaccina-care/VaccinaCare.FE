/* eslint-disable react-hooks/exhaustive-deps */
"use client"

import { useEffect, useState, useCallback } from "react"
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Calendar, User, ChevronDown, ChevronUp, Syringe, AlertCircle, Plus, RefreshCw, FileText } from "lucide-react"
import { Button } from "@/components/ui/button"
import { format, parseISO } from "date-fns"
import { getChildVaccinationRecords, type VaccinationRecordResponse } from "@/api/vaccineRecord"
import { getChildren, type ChildData } from "@/api/children"
import { getVaccineById, type Vaccine } from "@/api/vaccine"
import { useToast } from "@/hooks/use-toast"
import { Skeleton } from "@/components/ui/skeleton"
import { motion, AnimatePresence } from "framer-motion"
import { VaccineRecordDialog } from "./VaccineRecordDialog"

export default function VaccineRecordSection() {
    const [children, setChildren] = useState<ChildData[]>([])
    const [vaccineRecords, setVaccineRecords] = useState<Record<string, VaccinationRecordResponse[]>>({})
    const [expandedChild, setExpandedChild] = useState<string | null>(null)
    const [loadingChildren, setLoadingChildren] = useState(true)
    const [loadingRecords, setLoadingRecords] = useState<Record<string, boolean>>({})
    const [isDialogOpen, setIsDialogOpen] = useState(false)
    const [selectedChild, setSelectedChild] = useState<{ id: string; name: string } | null>(null)
    const [refreshing, setRefreshing] = useState<string | null>(null)
    const [vaccineDetails, setVaccineDetails] = useState<Record<string, Vaccine>>({})
    const [loadingVaccines, setLoadingVaccines] = useState<Record<string, boolean>>({})
    const { toast } = useToast()

    // Fetch children data
    useEffect(() => {
        const fetchChildren = async () => {
            try {
                setLoadingChildren(true)
                const childrenData = await getChildren()
                setChildren(childrenData)
                if (childrenData.length > 0) {
                    setExpandedChild(childrenData[0].id)
                }
            } catch (error) {
                console.error("Failed to fetch children:", error)
                toast({
                    title: "Error",
                    description: "Failed to load children data",
                    variant: "destructive",
                })
            } finally {
                setLoadingChildren(false)
            }
        }

        fetchChildren()
    }, [toast])

    // Fetch vaccine records for expanded child
    useEffect(() => {
        const fetchVaccineRecords = async (childId: string) => {
            if (!childId) return

            try {
                setLoadingRecords((prev) => ({ ...prev, [childId]: true }))
                const response = await getChildVaccinationRecords(childId)
                if (response.isSuccess) {
                    setVaccineRecords((prev) => ({
                        ...prev,
                        [childId]: response.data,
                    }))

                    // Extract unique vaccine IDs to fetch details
                    const vaccineIds = new Set(response.data.map((record) => record.vaccineId))
                    fetchVaccineDetails(Array.from(vaccineIds))
                }
            } catch (error) {
                console.error("Failed to fetch vaccine records:", error)
                toast({
                    title: "Error",
                    description: "Failed to load vaccination records",
                    variant: "destructive",
                })
            } finally {
                setLoadingRecords((prev) => ({ ...prev, [childId]: false }))
            }
        }

        if (expandedChild && (!vaccineRecords[expandedChild] || refreshing === expandedChild)) {
            fetchVaccineRecords(expandedChild)
            if (refreshing === expandedChild) {
                setRefreshing(null)
            }
        }
    }, [expandedChild, vaccineRecords, toast, refreshing])

    // Fetch vaccine details
    const fetchVaccineDetails = useCallback(
        async (vaccineIds: string[]) => {
            const idsToFetch = vaccineIds.filter((id) => !vaccineDetails[id] && !loadingVaccines[id])

            if (idsToFetch.length === 0) return

            // Update loading state for these vaccines
            setLoadingVaccines((prev) => {
                const newState = { ...prev }
                idsToFetch.forEach((id) => {
                    newState[id] = true
                })
                return newState
            })

            // Fetch each vaccine's details
            const fetchPromises = idsToFetch.map(async (id) => {
                try {
                    const vaccine = await getVaccineById(id)
                    return { id, vaccine }
                } catch (error) {
                    console.error(`Failed to fetch vaccine details for ID ${id}:`, error)
                    return { id, error }
                }
            })

            const results = await Promise.allSettled(fetchPromises)

            // Update vaccine details and loading state
            const newVaccineDetails = { ...vaccineDetails }
            const newLoadingState = { ...loadingVaccines }

            results.forEach((result) => {
                if (result.status === "fulfilled") {
                    const { id, vaccine, error } = result.value
                    if (!error && vaccine) {
                        newVaccineDetails[id] = vaccine
                    }
                    newLoadingState[id] = false
                }
            })

            setVaccineDetails(newVaccineDetails)
            setLoadingVaccines(newLoadingState)
        },
        [vaccineDetails, loadingVaccines],
    )

    const toggleChildExpansion = (childId: string) => {
        setExpandedChild(expandedChild === childId ? null : childId)
    }

    const handleAddRecord = (childId: string, childName: string) => {
        setSelectedChild({ id: childId, name: childName })
        setIsDialogOpen(true)
    }

    const handleRecordAdded = () => {
        if (selectedChild) {
            setRefreshing(selectedChild.id)
        }
    }

    const handleRefresh = (childId: string) => {
        setRefreshing(childId)
    }

    // Group records by vaccine
    const groupRecordsByVaccine = (records: VaccinationRecordResponse[]) => {
        const grouped: Record<string, VaccinationRecordResponse[]> = {}

        records.forEach((record) => {
            const vaccineId = record.vaccineId
            if (!grouped[vaccineId]) {
                grouped[vaccineId] = []
            }
            grouped[vaccineId].push(record)
        })

        // Sort each group by dose number
        Object.keys(grouped).forEach((vaccineId) => {
            grouped[vaccineId].sort((a, b) => a.doseNumber - b.doseNumber)
        })

        return grouped
    }

    // Get vaccine name from details or fallback
    const getVaccineName = (vaccineId: string, fallbackName: string | null) => {
        if (vaccineDetails[vaccineId]) {
            return vaccineDetails[vaccineId].vaccineName
        }
        return fallbackName || "Loading vaccine name..."
    }

    return (
        <div className="space-y-8">
            <div className="flex justify-between items-center">
                <div>
                    <h2 className="text-2xl font-bold tracking-tight">Vaccination Records</h2>
                    <p className="text-muted-foreground mt-1">
                        Track vaccination history for your children, including doses received at other centers
                    </p>
                </div>
            </div>

            {loadingChildren ? (
                <div className="space-y-4">
                    {[1, 2].map((i) => (
                        <Card key={i} className="animate-pulse">
                            <CardHeader>
                                <Skeleton className="h-6 w-48" />
                                <Skeleton className="h-4 w-72 mt-2" />
                            </CardHeader>
                            <CardContent>
                                <Skeleton className="h-24 w-full" />
                            </CardContent>
                        </Card>
                    ))}
                </div>
            ) : children.length > 0 ? (
                <div className="space-y-6">
                    {children.map((child) => (
                        <Card key={child.id} className={expandedChild === child.id ? "border-blue-200" : ""}>
                            <CardHeader
                                className={`cursor-pointer hover:bg-gray-50 ${expandedChild === child.id ? "bg-blue-50/50" : ""}`}
                                onClick={() => toggleChildExpansion(child.id)}
                            >
                                <div className="flex items-center justify-between">
                                    <div className="flex items-center gap-3">
                                        <div className="bg-blue-100 p-2 rounded-full">
                                            <User className="h-5 w-5 text-blue-600" />
                                        </div>
                                        <div>
                                            <CardTitle className="text-lg">{child.fullName}</CardTitle>
                                            <CardDescription>
                                                {child.dateOfBirth ? format(new Date(child.dateOfBirth), "MMMM d, yyyy") : "No birth date"}
                                            </CardDescription>
                                        </div>
                                    </div>
                                    <Button variant="ghost" size="icon">
                                        {expandedChild === child.id ? (
                                            <ChevronUp className="h-5 w-5" />
                                        ) : (
                                            <ChevronDown className="h-5 w-5" />
                                        )}
                                    </Button>
                                </div>
                            </CardHeader>

                            <AnimatePresence>
                                {expandedChild === child.id && (
                                    <motion.div
                                        initial={{ height: 0, opacity: 0 }}
                                        animate={{ height: "auto", opacity: 1 }}
                                        exit={{ height: 0, opacity: 0 }}
                                        transition={{ duration: 0.3 }}
                                    >
                                        <CardContent className="pt-4">
                                            <div className="flex justify-between mb-4">
                                                <Button
                                                    variant="outline"
                                                    size="sm"
                                                    onClick={() => handleAddRecord(child.id, child.fullName)}
                                                    className="text-blue-600 border-blue-200 hover:bg-blue-50"
                                                >
                                                    <Plus className="h-4 w-4 mr-1" />
                                                    Add External Record
                                                </Button>
                                                <Button
                                                    variant="ghost"
                                                    size="sm"
                                                    onClick={() => handleRefresh(child.id)}
                                                    disabled={loadingRecords[child.id] || refreshing === child.id}
                                                >
                                                    <RefreshCw className={`h-4 w-4 mr-1 ${refreshing === child.id ? "animate-spin" : ""}`} />
                                                    Refresh
                                                </Button>
                                            </div>

                                            {loadingRecords[child.id] ? (
                                                <div className="space-y-4">
                                                    {[1, 2, 3].map((i) => (
                                                        <Skeleton key={i} className="h-24 w-full" />
                                                    ))}
                                                </div>
                                            ) : vaccineRecords[child.id]?.length ? (
                                                <div className="space-y-6">
                                                    {Object.entries(groupRecordsByVaccine(vaccineRecords[child.id])).map(
                                                        ([vaccineId, records]) => {
                                                            // Get the vaccine name from our fetched details
                                                            const vaccineName = getVaccineName(vaccineId, records[0].vaccineName)
                                                            const isLoading = loadingVaccines[vaccineId]

                                                            return (
                                                                <div key={vaccineId} className="space-y-3">
                                                                    <div className="flex items-center gap-2">
                                                                        <Syringe className="h-4 w-4 text-blue-600" />
                                                                        {isLoading ? (
                                                                            <Skeleton className="h-5 w-40" />
                                                                        ) : (
                                                                            <h3 className="font-medium text-blue-800">{vaccineName}</h3>
                                                                        )}
                                                                    </div>

                                                                    <div className="space-y-3 pl-6">
                                                                        {records.map((record) => {
                                                                            // Parse the ISO date string
                                                                            const vaccinationDate = parseISO(record.vaccinationDate)

                                                                            return (
                                                                                <div
                                                                                    key={record.id}
                                                                                    className="rounded-lg border border-blue-200 bg-blue-50/50 p-4"
                                                                                >
                                                                                    <div className="space-y-3">
                                                                                        {/* Dose Badge */}
                                                                                        <div className="flex items-center gap-2">
                                                                                            <Badge className="bg-blue-100 text-blue-800 border-blue-200">
                                                                                                Dose {record.doseNumber}
                                                                                            </Badge>

                                                                                            {vaccineDetails[vaccineId] && (
                                                                                                <span className="text-xs text-gray-500">
                                                                                                    of {vaccineDetails[vaccineId].requiredDoses} required
                                                                                                </span>
                                                                                            )}
                                                                                        </div>

                                                                                        {/* Date */}
                                                                                        <div className="flex items-center gap-2 text-sm">
                                                                                            <Calendar className="h-3.5 w-3.5 text-gray-500" />
                                                                                            <span className="text-gray-700">
                                                                                                {format(vaccinationDate, "MMMM d, yyyy")}
                                                                                            </span>
                                                                                        </div>

                                                                                        {/* Reaction Details */}
                                                                                        {record.reactionDetails && (
                                                                                            <div className="flex items-start gap-2 text-sm">
                                                                                                <AlertCircle className="h-3.5 w-3.5 text-amber-500 mt-0.5" />
                                                                                                <div>
                                                                                                    <span className="font-medium text-amber-700">Reaction:</span>
                                                                                                    <p className="text-gray-700 mt-0.5">{record.reactionDetails}</p>
                                                                                                </div>
                                                                                            </div>
                                                                                        )}
                                                                                    </div>
                                                                                </div>
                                                                            )
                                                                        })}
                                                                    </div>
                                                                </div>
                                                            )
                                                        },
                                                    )}
                                                </div>
                                            ) : (
                                                <div className="text-center py-12 bg-gray-50 rounded-lg">
                                                    <FileText className="h-12 w-12 text-gray-300 mx-auto mb-3" />
                                                    <h3 className="text-lg font-medium text-gray-900">No vaccination records found</h3>
                                                    <p className="text-gray-500 mt-1">
                                                        Add external vaccination records or book appointments to start tracking
                                                    </p>
                                                    <Button
                                                        variant="outline"
                                                        className="mt-4"
                                                        onClick={() => handleAddRecord(child.id, child.fullName)}
                                                    >
                                                        <Plus className="h-4 w-4 mr-1" />
                                                        Add External Record
                                                    </Button>
                                                </div>
                                            )}
                                        </CardContent>
                                    </motion.div>
                                )}
                            </AnimatePresence>
                        </Card>
                    ))}
                </div>
            ) : (
                <Card>
                    <CardContent className="text-center py-12">
                        <User className="h-12 w-12 text-gray-300 mx-auto mb-3" />
                        <h3 className="text-lg font-medium text-gray-900">No children found</h3>
                        <p className="text-gray-500 mt-1">Add a child profile to track vaccination records</p>
                    </CardContent>
                </Card>
            )}

            {selectedChild && (
                <VaccineRecordDialog
                    isOpen={isDialogOpen}
                    onClose={() => setIsDialogOpen(false)}
                    childId={selectedChild.id}
                    childName={selectedChild.name}
                    onRecordAdded={handleRecordAdded}
                />
            )}
        </div>
    )
}

