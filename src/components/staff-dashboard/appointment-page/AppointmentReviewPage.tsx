/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable @typescript-eslint/no-unused-vars */
"use client"

import { useState, useEffect, useMemo } from "react"
import { getAllAppointments, updateAppointmentStatus } from "@/api/staff/appointmentReview"
import type { AppointmentReviewData } from "@/api/staff/appointmentReview"
import { AppointmentStatusChart } from "./AppointmentStatusChart"
import { AppointmentList } from "./AppointmentList"
import { UpdateStatusDialog } from "./UpdateStatusDialog"
import { useToast } from "@/hooks/use-toast"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Loader2, RefreshCw, Filter } from "lucide-react"
import { useDebounce } from "@/hooks/use-debounce"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Button } from "@/components/ui/button"

export default function AppointmentReviewPage() {
    // State management
    const [pageIndex, setPageIndex] = useState(1)
    const [pageSize] = useState(10)
    const [allAppointments, setAllAppointments] = useState<AppointmentReviewData[]>([])
    const [totalCount, setTotalCount] = useState(0)
    const [loading, setLoading] = useState(true)
    const [refreshing, setRefreshing] = useState(false)
    const [searchTerm, setSearchTerm] = useState("")
    const [statusFilter, setStatusFilter] = useState<string>("all")
    const [selectedAppointment, setSelectedAppointment] = useState<AppointmentReviewData | null>(null)
    const [isUpdateDialogOpen, setIsUpdateDialogOpen] = useState(false)
    const { toast } = useToast()

    // Apply debounce to search term with 500ms delay
    const debouncedSearchTerm = useDebounce(searchTerm, 500)

    // Fetch appointments
    const fetchAppointments = async (isRefreshing = false) => {
        if (isRefreshing) {
            setRefreshing(true)
        } else {
            setLoading(true)
        }

        try {
            const response = await getAllAppointments(pageIndex, pageSize, debouncedSearchTerm)
            if (response.isSuccess && response.data) {
                const appointments = response.data.appointments

                // Log unique status values to help debug
                if (appointments.length > 0) {
                    const uniqueStatuses = [...new Set(appointments.map((a) => a.status))]
                    console.log("Available status values:", uniqueStatuses)
                }

                setAllAppointments(appointments)
                setTotalCount(response.data.totalCount)
            } else {
                toast({
                    title: "Error",
                    description: response.message || "Failed to fetch appointments",
                    variant: "destructive",
                })
            }
        } catch (error) {
            toast({
                title: "Error",
                description: "An error occurred while fetching appointments",
                variant: "destructive",
            })
            console.error("Fetch error:", error)
        } finally {
            setLoading(false)
            setRefreshing(false)
        }
    }

    // Handle manual refresh
    const handleRefresh = () => {
        fetchAppointments(true)
    }

    // Initial fetch and when dependencies change
    useEffect(() => {
        fetchAppointments()
    }, [pageIndex, pageSize, debouncedSearchTerm])

    // Filter appointments based on status
    const filteredAppointments = useMemo(() => {
        if (statusFilter === "all") {
            return allAppointments
        }

        // More robust filtering that handles case, whitespace, and partial matches
        return allAppointments.filter((appointment) => {
            const appointmentStatus = appointment.status.toLowerCase().trim()
            const filterValue = statusFilter.toLowerCase().trim()

            // Log to debug specific status issues
            if (filterValue === "pending" && appointmentStatus.includes("pend")) {
                console.log("Found pending-like status:", appointmentStatus)
            }

            // Check if the status contains the filter value (for partial matches)
            return appointmentStatus.includes(filterValue)
        })
    }, [allAppointments, statusFilter])

    // Handle status update
    const handleUpdateStatus = async (appointmentId: string, newStatus: string, cancellationReason?: string) => {
        try {
            const response = await updateAppointmentStatus(appointmentId, newStatus, cancellationReason)
            if (response.isSuccess && response.data) {
                // Update the appointment in the list
                setAllAppointments((prevAppointments) =>
                    prevAppointments.map((appointment) =>
                        appointment.appointmentId === appointmentId ? { ...appointment, status: newStatus } : appointment,
                    ),
                )

                toast({
                    title: "Success",
                    description: `Appointment status updated to ${newStatus}`,
                    variant: "success",
                })

                setIsUpdateDialogOpen(false)
            } else {
                toast({
                    title: "Error",
                    description: response.message || "Failed to update appointment status",
                    variant: "destructive",
                })
            }
        } catch (error) {
            toast({
                title: "Error",
                description: "An error occurred while updating appointment status",
                variant: "destructive",
            })
        }
    }

    // Open update dialog
    const openUpdateDialog = (appointment: AppointmentReviewData) => {
        setSelectedAppointment(appointment)
        setIsUpdateDialogOpen(true)
    }

    // Calculate status counts for chart
    const getStatusCounts = () => {
        const statusCounts: Record<string, number> = {}
        filteredAppointments.forEach((appointment) => {
            const status = appointment.status
            statusCounts[status] = (statusCounts[status] || 0) + 1
        })
        return statusCounts
    }

    return (
        <div className="container mx-auto p-4 space-y-6">
            <h1 className="text-2xl font-bold">Appointment Management</h1>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {/* Status Chart */}
                <Card className="md:col-span-1">
                    <CardHeader>
                        <CardTitle>Appointment Status</CardTitle>
                        <CardDescription>Distribution of appointment statuses</CardDescription>
                    </CardHeader>
                    <CardContent>
                        <AppointmentStatusChart statusCounts={getStatusCounts()} />
                    </CardContent>
                </Card>

                {/* Search and Filters */}
                <Card className="md:col-span-2">
                    <CardHeader>
                        <CardTitle>Search & Filter Appointments</CardTitle>
                    </CardHeader>
                    <CardContent>
                        <div className="flex flex-col md:flex-row gap-4">
                            <div className="flex gap-2 flex-1">
                                <Input
                                    placeholder="Search by vaccine name, child name..."
                                    value={searchTerm}
                                    onChange={(e) => {
                                        setSearchTerm(e.target.value)
                                        if (pageIndex !== 1) {
                                            setPageIndex(1) // Reset to first page when search term changes
                                        }
                                    }}
                                    className="flex-1"
                                />
                                {loading && <Loader2 className="h-4 w-4 animate-spin mt-3" />}
                            </div>

                            <div className="flex gap-2">
                                <div className="flex items-center gap-2">
                                    <Filter className="h-4 w-4 text-muted-foreground" />
                                    <Select
                                        value={statusFilter}
                                        onValueChange={(value) => {
                                            setStatusFilter(value)
                                            setPageIndex(1) // Reset to first page when filter changes
                                        }}
                                    >
                                        <SelectTrigger className="w-[180px]">
                                            <SelectValue placeholder="Filter by status" />
                                        </SelectTrigger>
                                        <SelectContent>
                                            <SelectItem value="all">All Statuses</SelectItem>
                                            <SelectItem value="pending">Pending</SelectItem>
                                            <SelectItem value="confirmed">Confirmed</SelectItem>
                                            <SelectItem value="completed">Completed</SelectItem>
                                            <SelectItem value="cancelled">Cancelled</SelectItem>
                                        </SelectContent>
                                    </Select>
                                </div>

                                <Button
                                    variant="outline"
                                    size="icon"
                                    onClick={handleRefresh}
                                    disabled={refreshing}
                                    title="Refresh appointments"
                                >
                                    <RefreshCw className={`h-4 w-4 ${refreshing ? "animate-spin" : ""}`} />
                                </Button>
                            </div>
                        </div>
                    </CardContent>
                </Card>
            </div>

            {/* Appointment List */}
            <Card>
                <CardHeader className="flex flex-row items-center justify-between">
                    <div>
                        <CardTitle>Appointments</CardTitle>
                        <CardDescription>
                            Showing {filteredAppointments.length} of {totalCount} appointments
                            {statusFilter !== "all" && ` • Filtered by: ${statusFilter}`}
                        </CardDescription>
                    </div>
                </CardHeader>
                <CardContent>
                    <AppointmentList
                        appointments={filteredAppointments}
                        loading={loading}
                        onUpdateStatus={openUpdateDialog}
                        pageIndex={pageIndex}
                        pageSize={pageSize}
                        totalCount={statusFilter === "all" ? totalCount : filteredAppointments.length}
                        onPageChange={setPageIndex}
                    />
                </CardContent>
            </Card>

            {/* Update Status Dialog */}
            {selectedAppointment && (
                <UpdateStatusDialog
                    appointment={selectedAppointment}
                    isOpen={isUpdateDialogOpen}
                    onClose={() => setIsUpdateDialogOpen(false)}
                    onUpdateStatus={handleUpdateStatus}
                />
            )}
        </div>
    )
}

