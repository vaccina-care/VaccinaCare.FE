import axiosInstance from "../axiosInstance"
import type { ApiResponse } from "@/api/apiResponse"

export interface UserBase {
    id: string
    fullName?: string
    email?: string 
    address?: string
    phoneNumber?: string
    roleName: "Admin" | "Staff" | "Customer" 
    dateOfBirth?: string
    createdAt: string 
}

export interface UserListResponse {
    users: UserBase[] 
    totalCount: number
}

export interface GetUsersParams {
    searchName?: string
    searchEmail?: string
    role?: string
    pageNumber?: number
    pageSize?: number
}

export const getAllUsers = async (params: GetUsersParams): Promise<ApiResponse<UserListResponse>> => {
    try {
        const response = await axiosInstance.get("/admin/users", { params })
        console.log("API Response:", response.data)
        return response.data
    } catch (error) {
        console.error("Error fetching users:", error)
        throw error
    }
}