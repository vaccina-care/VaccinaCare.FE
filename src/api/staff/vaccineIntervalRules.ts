import axiosInstance from "@/api/axiosInstance"
import type { ApiResponse } from "@/api/apiResponse"

// Interfaces
export interface VaccineIntervalRule {
    vaccineIntervalRUID: string
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
    vaccineIntervalRUID?: string
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
    vaccineIntervalRUID: string,
    data: VaccineIntervalRuleRequest,
): Promise<ApiResponse<null>> => {
    try {
        // Ensure we have an ID
        if (!vaccineIntervalRUID) {
            console.error("Missing rule ID for update")
            throw new Error("Missing rule ID for update")
        }

        console.log(`Updating rule with ID: ${vaccineIntervalRUID}`, data)

        const response = await axiosInstance.put(`/interval-rules/${vaccineIntervalRUID}`, data)
        return response.data
    } catch (error) {
        console.error("Error updating vaccine interval rule:", error)
        throw error
    }
}

export const deleteVaccineIntervalRule = async (vaccineIntervalRUID: string): Promise<ApiResponse<null>> => {
    try {
        // Ensure we have an ID
        if (!vaccineIntervalRUID) {
            console.error("Missing rule ID for delete")
            throw new Error("Missing rule ID for delete")
        }

        console.log(`Deleting rule with ID: ${vaccineIntervalRUID}`)

        const response = await axiosInstance.delete(`/interval-rules/${vaccineIntervalRUID}`)
        return response.data
    } catch (error) {
        console.error("Error deleting vaccine interval rule:", error)
        throw error
    }
}

