import axiosInstance from "../axiosInstance"
import type { ApiResponse } from "@/api/apiResponse"

export interface UserBase {
    userId: string
    fullName?: string
    email?: string 
    phoneNumber?: string
    roleName: "Admin" | "Staff" | "Customer" 
    createdAt: string 
}

export interface UserListResponse {
    users: UserBase[] 
    totalCount: number
}

export interface GetUsersParams {
    searchTerm?: string 
    role?: string
    pageIndex?: number
    pageSize?: number
}

export interface CreateUserData {
    fullName?: string
    email?: string
    password: string
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

export const createUser = async (data: CreateUserData): Promise<ApiResponse<UserBase>> => {
    try {
        const response = await axiosInstance.post("admin/users/staff", data)
        return response.data
    } catch (error) {
        console.error("Error creating staff:", error)
        throw error
    }
}

export const updateUser = async (id: string, data: Partial<UserBase>): Promise<ApiResponse<UserBase>> => {
    try {
        const response = await axiosInstance.put(`/admin/users/${id}`, data)
        console.log("API Response from updateUser:", response.data)
        return response.data
    } catch (error) {
        console.error("Error updating user:", error)
        throw error
    }
}

export const deleteUser = async (id: string): Promise<ApiResponse<UserBase>> => {
    try {
        const response = await axiosInstance.delete(`/admin/users/${id}`)
        return response.data
    } catch (error) {
        console.error("Error deleting user:", error)
        throw error
    }
}
