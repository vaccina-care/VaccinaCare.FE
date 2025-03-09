import axiosInstance from "./axiosInstance"
import type { ApiResponse } from "./apiResponse"

// Request interface for booking single vaccine
export interface SingleVaccineBookingRequest {
    vaccineId: string
    childId: string
    startDate: string
}

// Response interface for appointment data
export interface AppointmentResponse {
    appointmentId: string
    childId: string
    appointmentDate: string
    status: string
    vaccineName: string
    doseNumber: number
    totalPrice: number
    notes: string
}

// Book single vaccine appointment
export const bookSingleVaccine = async (
    data: SingleVaccineBookingRequest,
): Promise<ApiResponse<AppointmentResponse[]>> => {
    try {
        const response = await axiosInstance.post("/appointments/booking/single-vaccines", data)
        return response.data
    } catch (error) {
        console.error("Error booking single vaccine:", error)
        throw error
    }
}

// Get all appointments for a child
export const getChildAppointments = async (childId: string): Promise<ApiResponse<AppointmentResponse[]>> => {
    try {
        const response = await axiosInstance.get(`/appointments`, {
            params: { childId },
        })
        return response.data
    } catch (error) {
        console.error("Error fetching child appointments:", error)
        throw error
    }
}

// Get appointment details
export const getAppointmentDetails = async (appointmentId: string): Promise<ApiResponse<AppointmentResponse>> => {
    try {
        const response = await axiosInstance.get(`/appointments/${appointmentId}`)
        return response.data
    } catch (error) {
        console.error("Error fetching appointment details:", error)
        throw error
    }
}

