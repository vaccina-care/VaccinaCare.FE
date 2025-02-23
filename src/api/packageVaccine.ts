import axiosInstance from "./axiosInstance"


export interface VaccineDetail {
	vaccineId: string
	doseOrder: number
}

export interface VaccinePackage {
	id: string
	packageName: string
	description: string
	price: number
	vaccineDetails: VaccineDetail[]
}

export interface Vaccine {
	id: string
	vaccineName: string
	description: string
	type: string
	requiredDoses: number
}


export const getVaccinePackages = async (): Promise<VaccinePackage[]> => {
	try {
		const response = await axiosInstance.get<{ isSuccess: boolean; message: string; data: VaccinePackage[] }>(
			"/VaccinePackage",
		)
		if (response.data.isSuccess) {
			return response.data.data
		} else {
			throw new Error(response.data.message)
		}
	} catch (error) {
		console.error("Error fetching vaccine packages:", error)
		throw error
	}
}

export const getVaccineById = async (id: string): Promise<Vaccine> => {
	try {
		const response = await axiosInstance.get<{ isSuccess: boolean; message: string; data: Vaccine }>(`/Vaccine/${id}`)
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

