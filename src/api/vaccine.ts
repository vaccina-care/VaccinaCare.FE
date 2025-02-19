import axiosInstance from "./axiosInstance"

export interface Vaccine {
	id: string
	vaccineName: string
	description: string
	picUrl: string | null
	type: string
	price: number
	requiredDoses: number
}

export interface VaccineResponse {
	isSuccess: boolean
	message: string
	data: {
		totalCount: number
		vaccines: Vaccine[]
	}
}

// GET for VaccineSection on landing page
export const getVaccineSection = async (params?: {
	search?: string
	type?: string
	sortBy?: string
	isDescending?: boolean
	page?: number
	pageSize?: number
}) => {
	try {
		const response = await axiosInstance.get<VaccineResponse>("/vaccine", {
			params: {
				...params,
				pageSize: params?.pageSize || 6, // Set 6 for vaccine section
				page: params?.page || 1,
			},
		})
		return response.data
	} catch (error) {
		console.error("Error fetching vaccines:", error)
		throw error
	}
}

// GET for VaccineList page with filtering and search
export const getVaccineList = async (params?: {
	search?: string
	type?: string
	sortBy?: string
	isDescending?: boolean
	page?: number
	pageSize?: number
}) => {
	try {
		const response = await axiosInstance.get<VaccineResponse>("/vaccine", {
			params: {
				...params,
				pageSize: params?.pageSize || 12,
				page: params?.page || 1,
			},
		})
		return response.data
	} catch (error) {
		console.error("Error fetching vaccine list:", error)
		throw error
	}
}

