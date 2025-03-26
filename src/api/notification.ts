import axiosInstance from "./axiosInstance"
import type { ApiResponse } from "./apiResponse"

export interface Notification {
    id: string
    title: string
    content: string
    url: string | null
    isRead: boolean
    role: string
    createdAt: string
    appointmentId: string | null
}

// Get all notifications for the current user
export const getUserNotifications = async (): Promise<ApiResponse<Notification[]>> => {
    try {
        const response = await axiosInstance.get("/notifications/me")
        return response.data
    } catch (error) {
        console.error("Error fetching notifications:", error)
        throw error
    }
}