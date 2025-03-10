import axiosInstance from "@/api/axiosInstance"
import type { ApiResponse } from "@/api/apiResponse"

// Interfaces
export interface VaccineIntervalRule {
    id: string
    vaccineId: string
    relatedVaccineId: string
    minIntervalDays: number
    canBeGivenTogether: boolean
}

export interface VaccineIntervalRuleRequest {
    vaccineId: string
    relatedVaccineId: string
    minIntervalDays: number
    canBeGivenTogether: boolean
}

export interface VaccineIntervalRuleUpdateRequest extends VaccineIntervalRuleRequest {
    id: string
}

// API Functions
export const getVaccineIntervalRules = async (): Promise<ApiResponse<VaccineIntervalRule[]>> => {
    try {
        const response = await axiosInstance.get("/interval-rules")
        return response.data
    } catch (error) {
        console.error("Error fetching vaccine interval rules:", error)
        throw error
    }
}

export const createVaccineIntervalRule = async (
    data: VaccineIntervalRuleRequest,
): Promise<ApiResponse<VaccineIntervalRule>> => {
    try {
        const response = await axiosInstance.post("/interval-rules", data)
        return response.data
    } catch (error) {
        console.error("Error creating vaccine interval rule:", error)
        throw error
    }
}

export const updateVaccineIntervalRule = async (
    id: string,
    data: VaccineIntervalRuleRequest,
): Promise<ApiResponse<null>> => {
    try {
        const response = await axiosInstance.put(`/interval-rules/${id}`, data)
        return response.data
    } catch (error) {
        console.error("Error updating vaccine interval rule:", error)
        throw error 
    }
}

export const deleteVaccineIntervalRule = async (id: string): Promise<ApiResponse<null>> => {
    try {
        const response = await axiosInstance.delete(`/interval-rules/${id}`)
        return response.data
    } catch (error) {
        console.error("Error deleting vaccine interval rule:", error)
        throw error
    }
}

