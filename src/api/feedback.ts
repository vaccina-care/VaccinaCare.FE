import axiosInstance from "./axiosInstance"
import type { ApiResponse } from "./apiResponse"

// Feedback interfaces
export interface Feedback {
    id: string
    appointmentId: string
    rating: number
    comments: string
}

export interface FeedbackCreateRequest {
    appointmentId: string
    rating: number
    comments: string
}

export interface FeedbackUpdateRequest {
    rating: number
    comments: string
}

// Create a new feedback
export const createFeedback = async (data: FeedbackCreateRequest): Promise<ApiResponse<FeedbackCreateRequest>> => {
    try {
        const response = await axiosInstance.post("/feedbacks", data)
        return response.data
    } catch (error) {
        console.error("Error creating feedback:", error)
        throw error
    }
}

// Get all feedbacks for the current user
export const getUserFeedbacks = async (): Promise<ApiResponse<Feedback[]>> => {
    try {
        const response = await axiosInstance.get("/feedbacks/user")
        return response.data
    } catch (error) {
        console.error("Error fetching user feedbacks:", error)
        throw error
    }
}

// Update an existing feedback
export const updateFeedback = async (
    feedbackId: string,
    data: FeedbackUpdateRequest,
): Promise<ApiResponse<FeedbackCreateRequest>> => {
    try {
        const response = await axiosInstance.put(`/feedbacks/${feedbackId}`, data)
        return response.data
    } catch (error) {
        console.error("Error updating feedback:", error)
        throw error
    }
}

// Delete a feedback
export const deleteFeedback = async (feedbackId: string): Promise<ApiResponse<null>> => {
    try {
        const response = await axiosInstance.delete(`/feedbacks/${feedbackId}`)
        return response.data
    } catch (error) {
        console.error("Error deleting feedback:", error)
        throw error
    }
}

// Optional: Get feedback by ID (if needed)
export const getFeedbackById = async (feedbackId: string): Promise<ApiResponse<Feedback>> => {
    try {
        const response = await axiosInstance.get(`/feedbacks/${feedbackId}`)
        return response.data
    } catch (error) {
        console.error("Error fetching feedback:", error)
        throw error
    }
}

