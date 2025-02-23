/* eslint-disable @typescript-eslint/no-unused-vars */
import axios from "axios"
import axiosInstance from "./axiosInstance"

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
		const response = await axiosInstance.post("/children", childData, {
			headers: {
				"Content-Type": "application/json",
			},
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

export const updateChild = async (childId: string, childData: Partial<ChildData>): Promise<ChildData> => {
	try {
		// Get the current child data first
		const currentChild = await getChildren().then((children) => children.find((child) => child.id === childId))

		if (!currentChild) {
			throw new Error("Child not found")
		}

		// Merge current data with updates
		const { id, ...dataWithoutId } = {
			...currentChild,
			...childData,
		}

		// Format date to YYYY-MM-DD
		const updatedData = {
			...dataWithoutId,
			dateOfBirth: dataWithoutId.dateOfBirth.split("T")[0],
		}

		// Debug logs
		console.log("Child ID:", childId)
		console.log("Update Payload:", JSON.stringify(updatedData, null, 2))

		const response = await axiosInstance.put(`/children/${childId}`, updatedData, {
			headers: {
				"Content-Type": "application/json",
			},
		})

		// Debug response
		console.log("API Response:", response.data)

		if (response.data.isSuccess) {
			return response.data.data
		} else {
			throw new Error(response.data.message)
		}
	} catch (error) {
		if (axios.isAxiosError(error)) {
			// Log the full error response
			console.error("Full error response:", error.response?.data)

			if (error.response?.status === 404) {
				throw new Error("Child not found")
			} else if (error.response?.status === 400) {
				throw new Error(`Bad request: ${error.response?.data?.message || "Unknown error"}`)
			}
		}
		console.error("Error updating child:", error)
		throw error
	}
}


export const deleteChild = async (childId: string): Promise<void> => {
	try {
		const response = await axiosInstance.delete(`/children/${childId}`)
		if (!response.data.isSuccess) {
			throw new Error(response.data.message)
		}
	} catch (error) {
		console.error("Error deleting child:", error)
		throw error
	}
}

