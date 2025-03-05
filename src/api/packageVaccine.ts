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


export const getVaccinePackages = async (): Promise<VaccinePackage[]> => {
	try {
		const response = await axiosInstance.get<{ isSuccess: boolean; message: string; data: VaccinePackage[] }>(
			"/packages",
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

export const getVaccinePackageById = async (id: string): Promise<VaccinePackage> => {
	try {
		const response = await axiosInstance.get<{ isSuccess: boolean; message: string; data: VaccinePackage }>(
			`/packages/${id}`,
		)
		if (response.data.isSuccess) {
			return response.data.data
		} else {
			throw new Error(response.data.message)
		}
	} catch (error) {
		console.error(`Error fetching vaccine package with id ${id}:`, error)
		throw error
	}
}


