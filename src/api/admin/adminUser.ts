import axiosInstance from "../axiosInstance"
import type { ApiResponse } from "@/api/apiResponse"

export interface UserBase {
    userId: string
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

export interface CreateUserData {
    fullName?: string
    email?: string
    address?: string
    phoneNumber?: string
    dateOfBirth?: string
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

// API tạo mới user
export const createUser = async (data: CreateUserData): Promise<ApiResponse<UserBase>> => {
    try {
        const response = await axiosInstance.post("admin/users/staff", data)
        return response.data
    } catch (error) {
        console.error("Error creating staff:", error)
        throw error
    }
}

// API cập nhật user
export const updateUser = async (id: string, data: UserBase): Promise<ApiResponse<UserBase>> => {
    try {
        const response = await axiosInstance.put(`/admin/users/${id}`, data)
        return response.data
    } catch (error) {
        console.error("Error updating user:", error)
        throw error
    }
}

// API xóa user
export const deleteUser = async (id: string): Promise<ApiResponse<UserBase>> => {
    try {
        const response = await axiosInstance.delete(`/admin/users/${id}`)
        return response.data
    } catch (error) {
        console.error("Error deleting user:", error)
        throw error
    }
}