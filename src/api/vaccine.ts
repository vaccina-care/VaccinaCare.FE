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

export interface VaccineDetail {
	id: string
	vaccineName: string
	description: string
	picUrl: string | null
	type: string
	price: number
	requiredDoses: number
	doseIntervalDays: 0 
	forBloodType: string
	avoidChronic: boolean
	avoidAllergy: boolean
	hasDrugInteraction: boolean
	hasSpecialWarning: boolean
}

export interface SingleVaccineResponse {
	isSuccess: boolean
	message: string
	data: VaccineDetail
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
		const response = await axiosInstance.get<VaccineResponse>("/vaccines", {
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

export const getVaccineList = async (params?: {
	search?: string
	type?: string
	sortBy?: string
	isDescending?: boolean
	page?: number
	pageSize?: number
}) => {
	try {
		const response = await axiosInstance.get<VaccineResponse>("/vaccines", {
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

export const getVaccineById = async (id: string): Promise<Vaccine> => {
	try {
		const response = await axiosInstance.get<SingleVaccineResponse>(`/vaccines/${id}`)
		if (response.data.isSuccess) {
			return response.data.data
		} else {
			throw new Error(response.data.message)
		}
	} catch (error) {
		console.error(`Error fetching vaccine with id ${id}:`, error)
		throw error
	}
}

