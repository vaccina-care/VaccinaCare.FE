import { axiosInstance } from "./authConfig"

export interface ChildData {
	id: string
	fullName: string
	dateOfBirth: string
	gender: boolean
	medicalHistory: string
	bloodType: string
	hasChronicIllnesses: boolean
	chronicIllnessesDescription: string
	hasAllergies: boolean
	allergiesDescription: string
	hasRecentMedication: boolean
	recentMedicationDescription: string
	hasOtherSpecialCondition: boolean
	otherSpecialConditionDescription: string
}


export const getChildren = async (): Promise<ChildData[]> => {
	try {
		const response = await axiosInstance.get("/children")
		if (response.data.isSuccess) {
			return response.data.data
		} else {
			throw new Error(response.data.message)
		}
	} catch (error) {
		console.error("Error fetching children:", error)
		throw error
	}
}

export const createChild = async (childData: Omit<ChildData, "id">): Promise<ChildData> => {
	try {
		const formData = new FormData()

		// Append each field to FormData with proper string conversion
		Object.entries(childData).forEach(([key, value]) => {
			// Convert các dòng từ boolean -> string
			if (typeof value === "boolean") {
				formData.append(key, value ? "true" : "false")
			}
			// Handle tất cả các value bằng string
			else {
				formData.append(key, String(value))
			}
		})

		// Log FormData contents for debugging
		for (const pair of formData.entries()) {
			console.log(`${pair[0]}: ${pair[1]}`)
		}

		const response = await axiosInstance.post("/children", formData, {
			headers: {
				"Content-Type": "multipart/form-data",
			},
			transformRequest: [(data) => data],
		})

		if (response.data.isSuccess) {
			return response.data.data
		} else {
			throw new Error(response.data.message)
		}
	} catch (error) {
		console.error("Error creating child:", error)
		throw error
	}
}

