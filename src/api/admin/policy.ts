import axiosInstance from "../axiosInstance"
import type { ApiResponse } from "@/api/apiResponse"

export interface PolicyBase {
    policyId: string
    policyName: string
    description: string
    cancellationDeadline: number
    penaltyFee: number
    createdAt?: string
    updatedAt?: string
}

export interface PolicyListResponse {
    // totalCount: number
    // policies: PolicyBase[]
}

export interface GetPoliciesParams {
    search?: string
    page?: number
    pageSize?: number
}

export interface CreatePolicyData {
    policyName: string
    description: string
    cancellationDeadline: number
    penaltyFee: number
}

export const getAllPolicies = async (params: GetPoliciesParams): Promise<ApiResponse<PolicyBase[]>> => {
    try {
        const response = await axiosInstance.get("/policies", { params })
        return response.data
    } catch (error) {
        console.error("Error fetching policies:", error)
        throw error
    }
}

export const getPolicyById = async (id: string): Promise<ApiResponse<PolicyBase>> => {
    try {
        const response = await axiosInstance.get(`/policies/${id}`)
        return response.data
    } catch (error) {
        console.error("Error fetching policy:", error)
        throw error
    }
}

export const createPolicy = async (data: CreatePolicyData): Promise<ApiResponse<PolicyBase>> => {
    try {
        const response = await axiosInstance.post("/policies", data)
        return response.data
    } catch (error) {
        console.error("Error creating policy:", error)
        throw error
    }
}

export const updatePolicy = async (id: string, data: PolicyBase): Promise<ApiResponse<PolicyBase>> => {
    try {
        const response = await axiosInstance.put(`/policies/${id}`, data)
        return response.data
    } catch (error) {
        console.error("Error updating policy:", error)
        throw error
    }
}

export const deletePolicy = async (id: string): Promise<ApiResponse<PolicyBase>> => {
    try {
        const response = await axiosInstance.delete(`/policies/${id}`)
        return response.data
    } catch (error) {
        console.error("Error deleting policy:", error)
        throw error
    }
}