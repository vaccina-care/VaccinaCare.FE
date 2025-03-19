import axiosInstance from "./axiosInstance"
import type { ApiResponse } from "./apiResponse"

// INTERFACE
export interface VaccinationRecordRequest {
    childId: string
    vaccineId: string
    vaccinationDate: string
    reactionDetails?: string
    doseNumber: number
}

export interface VaccinationRecordResponse {
    id: string
    childId: string
    vaccineId: string
    vaccinationDate: string
    reactionDetails: string | null
    doseNumber: number
    vaccineName: string | null
    childFullName: string | null
}

// For user to add vaccination record from difference center
export const addVaccinationRecord = async (
    data: VaccinationRecordRequest,
): Promise<ApiResponse<VaccinationRecordResponse>> => {
    try {
        const response = await axiosInstance.post("/vaccination/records", data)
        return response.data
    } catch (error) {
        console.error("Error adding vaccination record:", error)
        throw error
    }
}

// Get vaccine record base on child ID 
export const getChildVaccinationRecords = async (
    childId: string,
): Promise<ApiResponse<VaccinationRecordResponse[]>> => {
    try {
        const response = await axiosInstance.get(`/vaccination/records/${childId}`)
        return response.data
    } catch (error) {
        console.error("Error fetching vaccination records:", error)
        throw error
    }
}
