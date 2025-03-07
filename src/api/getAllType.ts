import axiosInstance from "./axiosInstance"
import type { ApiResponse } from "./apiResponse"
import type { VaccineBase } from "@/api/staff/vaccineStaff"
import type { VaccinePackage } from "./package"

// Response data structure
interface GetAllTypesResponse {
    items: Array<{
        vaccines: VaccineBase[]
        vaccinePackages: VaccinePackage[]
    }>
    totalCount: number
    page: number
    pageSize: number
    totalPages: number
}

// Request parameters interface
interface GetAllTypesParams {
    searchName?: string
    searchDescription?: string
    pageNumber?: number
    pageSize?: number
}

// Main function to fetch all types
export const getAllTypes = async (params: GetAllTypesParams): Promise<ApiResponse<GetAllTypesResponse>> => {
    try {
        const response = await axiosInstance.get("/api/packages/all-types", {
            params: {
                searchName: params.searchName || "",
                searchDescription: params.searchDescription || "",
                pageNumber: params.pageNumber || 1,
                pageSize: params.pageSize || 10,
            },
        })
        return response.data
    } catch (error) {
        console.error("Error fetching all types:", error)
        throw error
    }
}

