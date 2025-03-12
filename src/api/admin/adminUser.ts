import axiosInstance from "../axiosInstance"
import type { ApiResponse } from "@/api/apiResponse"

export interface UserBase {
    id: string
    fullName: string | null
    email: string | null
    imageUrl?: string
    phoneNumber: string | null
    roleName: "Admin" | "Staff" | "Customer" 
    dateOfBirth: string | null
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
        const response = await axiosInstance.get("/users", { params })
        console.log("API Response:", response.data)
        return response.data
    } catch (error) {
        console.error("Error fetching users:", error)
        throw error
    }
}