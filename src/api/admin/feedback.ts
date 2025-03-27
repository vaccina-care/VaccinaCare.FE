import axiosInstance from "../axiosInstance"
import type { ApiResponse } from "@/api/apiResponse"

export interface FeedbackBase {
  id: string
  appointmentId: string
  rating: number
  comments: string
}

export interface FeedbackListResponse {
  totalCount: number
  feedbacks: FeedbackBase[]
}

export interface GetFeedbacksParams {
  searchTerm?: string
  pageIndex?: number
  pageSize?: number
}

export const getAllFeedbacks = async (params: GetFeedbacksParams): Promise<ApiResponse<FeedbackListResponse>> => {
  try {
    const response = await axiosInstance.get("/feedbacks", { params })
    console.log(response.data)
    return response.data
  } catch (error) {
    console.error("Error fetching feedbacks:", error)
    throw error
  }
}