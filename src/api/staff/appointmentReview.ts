/* eslint-disable @typescript-eslint/no-explicit-any */

import axiosInstance from "@/api/axiosInstance"
import type { ApiResponse } from "@/api/apiResponse"

// Interface for appointment data
export interface AppointmentReviewData {
    appointmentId: string
    childId: string
    childName: string
    userId: string
    userName: string
    appointmentDate: string
    status: string
    vaccineName: string
    doseNumber: number
    totalPrice: number
    notes: string
}

// Interface for paginated appointments response
export interface PaginatedAppointmentsResponse {
    totalCount: number
    appointments: AppointmentReviewData[]
}

export interface PaginatedAppointmentsResponse {
    items: any[]
    totalCount: number
    pageIndex: number
    pageSize: number
}

export const getAllAppointments = async (
    pageIndex = 1,
    pageSize = 10,
    searchTerm?: string,
    status?: string,
): Promise<ApiResponse<PaginatedAppointmentsResponse>> => {
    try {
        const params: Record<string, any> = {
            PageIndex: pageIndex,
            PageSize: pageSize,
        }

        if (searchTerm) {
            params.searchTerm = searchTerm
        }

        // Add status filter parameter if provided
        if (status && status !== "all") {
            params.status = status
        }

        const response = await axiosInstance.get("/appointments", { params })
        return response.data
    } catch (error) {
        console.error("Error fetching appointments:", error)
        throw error
    }
}

export const updateAppointmentStatus = async (
    appointmentId: string,
    newStatus: string,
    cancellationReason?: string,
): Promise<ApiResponse<AppointmentReviewData>> => {
    try {
        // Create form data
        const formData = new FormData()
        formData.append("NewStatus", newStatus)

        // Only append cancellation reason if provided
        if (cancellationReason) {
            formData.append("CancellationReason", cancellationReason)
        }

        const response = await axiosInstance.put(`/appointments/${appointmentId}/status`, formData, {
            headers: {
                "Content-Type": "multipart/form-data",
            },
        })

        return response.data
    } catch (error) {
        console.error("Error updating appointment status:", error)
        throw error
    }
}

