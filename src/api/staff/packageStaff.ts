import axiosInstance from "@/api/axiosInstance"
import type { VaccinePackage, VaccineDetail } from "@/api/package"
import type { ApiResponse } from "@/api/apiResponse"

// Request types
export interface CreatePackageRequest {
    packageName: string
    description: string
    price: number
    vaccineDetails: VaccineDetail[]
}

export interface UpdatePackageRequest extends CreatePackageRequest {
    id: string
}

// Create a new vaccine package
export const createVaccinePackage = async (data: CreatePackageRequest): Promise<ApiResponse<VaccinePackage>> => {
    try {
        const response = await axiosInstance.post<ApiResponse<VaccinePackage>>("/packages", data)
        return response.data
    } catch (error) {
        console.error("Error creating vaccine package:", error)
        throw error
    }
}

// Update an existing vaccine package
export const updateVaccinePackage = async (
    id: string,
    data: CreatePackageRequest,
): Promise<ApiResponse<VaccinePackage>> => {
    try {
        const response = await axiosInstance.put<ApiResponse<VaccinePackage>>(`/packages/${id}`, data)
        return response.data
    } catch (error) {
        console.error("Error updating vaccine package:", error)
        throw error
    }
}

// Delete a vaccine package
export const deleteVaccinePackage = async (id: string): Promise<ApiResponse<null>> => {
    try {
        const response = await axiosInstance.delete<ApiResponse<null>>(`/packages/${id}`)
        return response.data
    } catch (error) {
        console.error("Error deleting vaccine package:", error)
        throw error
    }
}

// Re-export 2 get function từ package 
export { getVaccinePackages, getVaccinePackageById } from "@/api/package"
export type { VaccinePackage, VaccineDetail }

