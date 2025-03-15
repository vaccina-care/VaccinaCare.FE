import axiosInstance from "./axiosInstance"

export interface Policy {
    policyId: string
    policyName: string
    description: string
    cancellationDeadline: number
    penaltyFee: number
}

export interface PolicyResponse {
    isSuccess: boolean
    message: string
    data: Policy[]
}

export const getAllPolicies = async (): Promise<Policy[]> => {
    try {
        const response = await axiosInstance.get("/policies")
        if (response.data.isSuccess) {
            return response.data.data
        } else {
            throw new Error(response.data.message)
        }
    } catch (error) {
        console.error("Error fetching policies:", error)
        throw error
    }
}

export const getPolicyById = async (policyId: string): Promise<Policy> => {
    try {
        const response = await axiosInstance.get(`/policies/${policyId}`)
        if (response.data.isSuccess) {
            return response.data.data
        } else {
            throw new Error(response.data.message)
        }
    } catch (error) {
        console.error(`Error fetching policy with ID ${policyId}:`, error)
        throw error
    }
}

