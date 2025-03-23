/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable @typescript-eslint/no-unused-vars */
"use client"

import { useState, useEffect } from "react"
import { getAllAppointments, updateAppointmentStatus } from "@/api/staff/appointmentReview"
import type { AppointmentReviewData } from "@/api/staff/appointmentReview"
import { AppointmentStatusChart } from "./AppointmentStatusChart"
import { AppointmentList } from "./AppointmentList"
import { UpdateStatusDialog } from "./UpdateStatusDialog"
import { useToast } from "@/hooks/use-toast"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Loader2, RefreshCw } from "lucide-react"
import { useDebounce } from "@/hooks/use-debounce"
import { Button } from "@/components/ui/button"

export default function AppointmentReviewPage() {
    // State management
    const [pageIndex, setPageIndex] = useState(1)
    const [pageSize] = useState(10)
    const [appointments, setAppointments] = useState<AppointmentReviewData[]>([])
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
            // Now passing the status filter to the API
            const response = await getAllAppointments(pageIndex, pageSize, debouncedSearchTerm, statusFilter)

            if (response.isSuccess && response.data) {
                setAppointments(response.data.appointments)
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
    }, [pageIndex, pageSize, debouncedSearchTerm, statusFilter])

    // Handle status update
    const handleUpdateStatus = async (appointmentId: string, newStatus: string, cancellationReason?: string) => {
        try {
            const response = await updateAppointmentStatus(appointmentId, newStatus, cancellationReason)
            if (response.isSuccess && response.data) {
                // Update the appointment in the list
                setAppointments((prevAppointments) =>
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

    // Calculate status counts for chart and statistics
    const getStatusCounts = () => {
        const statusCounts: Record<string, number> = {}

        appointments.forEach((appointment) => {
            // Normalize status to ensure consistent casing
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
                        <CardDescription>Find and manage vaccination appointments</CardDescription>
                    </CardHeader>
                    <CardContent className="space-y-4">
                        {/* Search bar and refresh button */}
                        <div className="flex flex-col md:flex-row gap-4">
                            <div className="flex gap-2 flex-1">
                                <Input
                                    placeholder="Search by vaccine name & child name"
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

                            <Button
                                variant="outline"
                                onClick={handleRefresh}
                                disabled={refreshing}
                                title="Refresh appointments"
                                className="min-w-[100px]"
                            >
                                <RefreshCw className={`h-4 w-4 mr-2 ${refreshing ? "animate-spin" : ""}`} />
                                Refresh
                            </Button>
                        </div>

                        {/* Quick filter buttons */}
                        <div className="flex flex-wrap gap-2 pt-2">
                            <Button
                                variant={statusFilter === "all" ? "default" : "outline"}
                                size="sm"
                                onClick={() => setStatusFilter("all")}
                                className="rounded-full"
                            >
                                All
                            </Button>
                            <Button
                                variant={statusFilter === "Pending" ? "default" : "outline"}
                                size="sm"
                                onClick={() => setStatusFilter("Pending")}
                                className="rounded-full bg-yellow-500 text-white hover:bg-yellow-600 hover:text-white"
                            >
                                Pending
                            </Button>
                            <Button
                                variant={statusFilter === "Confirmed" ? "default" : "outline"}
                                size="sm"
                                onClick={() => setStatusFilter("Confirmed")}
                                className="rounded-full bg-blue-500 text-white hover:bg-blue-600 hover:text-white"
                            >
                                Confirmed
                            </Button>
                            <Button
                                variant={statusFilter === "Completed" ? "default" : "outline"}
                                size="sm"
                                onClick={() => setStatusFilter("Completed")}
                                className="rounded-full bg-green-500 text-white hover:bg-green-600 hover:text-white"
                            >
                                Completed
                            </Button>
                            <Button
                                variant={statusFilter === "Cancelled" ? "default" : "outline"}
                                size="sm"
                                onClick={() => setStatusFilter("Cancelled")}
                                className="rounded-full bg-red-500 text-white hover:bg-red-600 hover:text-white"
                            >
                                Cancelled
                            </Button>
                        </div>

                        {/* Statistics summary */}
                        <div className="grid grid-cols-2 md:grid-cols-5 gap-4 pt-2">
                            <div className="bg-gray-50 p-3 rounded-lg border border-gray-100">
                                <div className="text-sm text-gray-500">Total</div>
                                <div className="text-2xl font-semibold">{totalCount}</div>
                            </div>
                            <div className="bg-yellow-50 p-3 rounded-lg border border-yellow-100">
                                <div className="text-sm text-yellow-600">Pending</div>
                                <div className="text-2xl font-semibold">
                                    {Object.entries(getStatusCounts()).find(([status]) => status.toLowerCase() === "pending")?.[1] || 0}
                                </div>
                            </div>
                            <div className="bg-blue-50 p-3 rounded-lg border border-blue-100">
                                <div className="text-sm text-blue-600">Confirmed</div>
                                <div className="text-2xl font-semibold">
                                    {Object.entries(getStatusCounts()).find(([status]) => status.toLowerCase() === "confirmed")?.[1] || 0}
                                </div>
                            </div>
                            <div className="bg-green-50 p-3 rounded-lg border border-green-100">
                                <div className="text-sm text-green-600">Completed</div>
                                <div className="text-2xl font-semibold">
                                    {Object.entries(getStatusCounts()).find(([status]) => status.toLowerCase() === "completed")?.[1] || 0}
                                </div>
                            </div>
                            <div className="bg-red-50 p-3 rounded-lg border border-red-100">
                                <div className="text-sm text-red-600">Cancelled</div>
                                <div className="text-2xl font-semibold">
                                    {Object.entries(getStatusCounts()).find(([status]) => status.toLowerCase() === "cancelled")?.[1] || 0}
                                </div>
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
                            Showing {appointments.length} of {totalCount} appointments
                            {statusFilter !== "all" && ` • Filtered by: ${statusFilter}`}
                        </CardDescription>
                    </div>
                </CardHeader>
                <CardContent>
                    <AppointmentList
                        appointments={appointments}
                        loading={loading}
                        onUpdateStatus={openUpdateDialog}
                        pageIndex={pageIndex}
                        pageSize={pageSize}
                        totalCount={totalCount}
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

