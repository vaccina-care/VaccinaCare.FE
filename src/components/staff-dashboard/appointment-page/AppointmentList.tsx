"use client"

import { format } from "date-fns"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import {
    Pagination,
    PaginationContent,
    PaginationItem,
    PaginationLink,
    PaginationNext,
    PaginationPrevious,
} from "@/components/ui/pagination"
import { Loader2 } from 'lucide-react'
import type { AppointmentReviewData } from "@/api/staff/appointmentReview"

interface AppointmentListProps {
    appointments: AppointmentReviewData[]
    loading: boolean
    onUpdateStatus: (appointment: AppointmentReviewData) => void
    pageIndex: number
    pageSize: number
    totalCount: number
    onPageChange: (page: number) => void
}

export function AppointmentList({
    appointments,
    loading,
    onUpdateStatus,
    pageIndex,
    pageSize,
    totalCount,
    onPageChange,
}: AppointmentListProps) {
    // Format currency
    const formatCurrency = (amount: number) => {
        return new Intl.NumberFormat("vi-VN", { style: "currency", currency: "VND" }).format(amount)
    }

    // Get status badge color
    const getStatusBadge = (status: string) => {
        switch (status.toLowerCase()) {
            case "confirmed":
                return <Badge className="bg-blue-500">Confirmed</Badge>
            case "completed":
                return <Badge className="bg-green-500">Completed</Badge>
            case "cancelled":
                return <Badge className="bg-red-500">Cancelled</Badge>
            case "pending":
                return <Badge className="bg-yellow-500">Pending</Badge>
            default:
                return <Badge>{status}</Badge>
        }
    }

    // Calculate total pages
    const totalPages = Math.ceil(totalCount / pageSize)

    if (loading) {
        return (
            <div className="flex justify-center items-center h-40">
                <Loader2 className="h-8 w-8 animate-spin text-primary" />
            </div>
        )
    }

    if (appointments.length === 0) {
        return <div className="text-center py-8 text-muted-foreground">No appointments found</div>
    }

    return (
        <div className="space-y-4">
            <div className="rounded-md border">
                <Table>
                    <TableHeader>
                        <TableRow>
                            <TableHead>Vaccine</TableHead>
                            <TableHead>Dose</TableHead>
                            <TableHead>Date</TableHead>
                            <TableHead>Price</TableHead>
                            <TableHead>Status</TableHead>
                            <TableHead>Actions</TableHead>
                        </TableRow>
                    </TableHeader>
                    <TableBody>
                        {appointments.map((appointment) => (
                            <TableRow key={appointment.appointmentId}>
                                <TableCell className="font-medium">{appointment.vaccineName}</TableCell>
                                <TableCell>{appointment.doseNumber}</TableCell>
                                <TableCell>{format(new Date(appointment.appointmentDate), "dd/MM/yyyy HH:mm")}</TableCell>
                                <TableCell>{formatCurrency(appointment.totalPrice)}</TableCell>
                                <TableCell>{getStatusBadge(appointment.status)}</TableCell>
                                <TableCell>
                                    <Button
                                        variant="outline"
                                        size="sm"
                                        onClick={() => onUpdateStatus(appointment)}
                                        disabled={appointment.status === "Completed" || appointment.status === "Cancelled"}
                                    >
                                        Update Status
                                    </Button>
                                </TableCell>
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
            </div>

            {/* Pagination */}
            <Pagination>
                <PaginationContent>
                    <PaginationItem>
                        {pageIndex <= 1 ? (
                            <PaginationPrevious className="pointer-events-none opacity-50" />
                        ) : (
                            <PaginationPrevious onClick={() => onPageChange(pageIndex - 1)} />
                        )}
                    </PaginationItem>

                    {Array.from({ length: Math.min(5, totalPages) }, (_, i) => {
                        // Show current page and surrounding pages
                        // Adjusted for 1-based pagination
                        const pageToShow = pageIndex < 3
                            ? i + 1
                            : pageIndex > totalPages - 2
                                ? totalPages - 4 + i
                                : pageIndex - 2 + i

                        if (pageToShow >= 1 && pageToShow <= totalPages) {
                            return (
                                <PaginationItem key={pageToShow}>
                                    <PaginationLink
                                        isActive={pageIndex === pageToShow}
                                        onClick={() => onPageChange(pageToShow)}
                                    >
                                        {pageToShow}
                                    </PaginationLink>
                                </PaginationItem>
                            )
                        }
                        return null
                    })}

                    <PaginationItem>
                        {pageIndex >= totalPages ? (
                            <PaginationNext className="pointer-events-none opacity-50" />
                        ) : (
                            <PaginationNext onClick={() => onPageChange(pageIndex + 1)} />
                        )}
                    </PaginationItem>
                </PaginationContent>
            </Pagination>
        </div>
    )
}

