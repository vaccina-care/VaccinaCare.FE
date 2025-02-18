import axiosInstance from "./axiosInstance";

export interface Vaccine {
	vaccineName: string
	description: string
	picUrl: string | null
	type: string
	price: number
}

export interface VaccineResponse {
	isSuccess: boolean
	message: string
	data: {
		totalCount: number
		vaccines: Vaccine[]
	}
}

// GET cho VaccineSection trên landing page
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
				pageSize: params?.pageSize || 6, // Đặt 6 cho vaccine section
				page: params?.page || 1,
			},
		})
		return response.data
	} catch (error) {
		console.error("Error fetching vaccines:", error)
		throw error
	}
}



// DANH
export const getVaccines = async (page = 1, pageSize = 12) => {
	try {
		const response = await axiosInstance.get("/vaccine", {
			params: { page, pageSize }, 
		});
		if (response.data.isSuccess) {
			return response.data;
		} else {
			throw new Error(response.data.message)
		}
	} catch (error) {
		console.error("Error fetching vaccines:", error);
		throw error;
	}
};
