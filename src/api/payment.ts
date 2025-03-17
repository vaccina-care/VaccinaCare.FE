import axiosInstance from "./axiosInstance"
import type { ApiResponse } from "./apiResponse"

// Response interface for payment checkout
export interface PaymentCheckoutResponse {
    link: string
}

// Get payment checkout URL
export const getPaymentCheckoutUrl = async (appointmentId: string): Promise<ApiResponse<string>> => {
    try {
        const response = await axiosInstance.get(`/payments/checkout/${appointmentId}`)
        return response.data
    } catch (error) {
        console.error("Error getting payment checkout URL:", error)
        throw error
    }
}

