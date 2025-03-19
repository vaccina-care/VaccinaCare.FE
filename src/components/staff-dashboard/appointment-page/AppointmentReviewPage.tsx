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
import { Loader2 } from "lucide-react"
import { useDebounce } from "@/hooks/use-debounce"

export default function AppointmentReviewPage() {
    // State management
    const [pageIndex, setPageIndex] = useState(1)
    const [pageSize, setPageSize] = useState(10)
    const [appointments, setAppointments] = useState<AppointmentReviewData[]>([])
    const [totalCount, setTotalCount] = useState(0)
    const [loading, setLoading] = useState(true)
    const [searchTerm, setSearchTerm] = useState("")
    const [selectedAppointment, setSelectedAppointment] = useState<AppointmentReviewData | null>(null)
    const [isUpdateDialogOpen, setIsUpdateDialogOpen] = useState(false)
    const { toast } = useToast()

    // Apply debounce to search term with 500ms delay
    const debouncedSearchTerm = useDebounce(searchTerm, 500)

    // Fetch appointments
    const fetchAppointments = async () => {
        setLoading(true)
        try {
            const response = await getAllAppointments(pageIndex, pageSize, debouncedSearchTerm)
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
        }
    }

    // Initial fetch and when dependencies change
    useEffect(() => {
        fetchAppointments()
    }, [pageIndex, pageSize, debouncedSearchTerm]) // Use debouncedSearchTerm instead of searchTerm

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
                    variant: "success"
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
        appointments.forEach((appointment) => {
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
                        <CardTitle>Search Appointments</CardTitle>
                    </CardHeader>
                    <CardContent>
                        <div className="flex gap-2">
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
                    </CardContent>
                </Card>
            </div>

            {/* Appointment List */}
            <Card>
                <CardHeader>
                    <CardTitle>Appointments</CardTitle>
                    <CardDescription>
                        Showing {appointments.length} of {totalCount} appointments
                    </CardDescription>
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

