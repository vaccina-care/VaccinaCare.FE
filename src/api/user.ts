import axiosInstance from "./axiosInstance"

export interface UserData {
	fullName: string
	email: string
	gender: boolean
	address: string
	dateOfBirth: string
	imageUrl: string
	phoneNumber: string
	roleName: string
}

export const fetchUserData = async (): Promise<UserData> => {
	try {
		const response = await axiosInstance.get("/users/me")
		if (response.data.isSuccess) {
			return response.data.data
		} else {
			throw new Error(response.data.message)
		}
	} catch (error) {
		console.error("Error fetching user data:", error)
		throw error
	}
}

export const updateUserProfile = async (userData: Partial<UserData>, image?: File): Promise<UserData> => {
	try {
		const formData = new FormData()

		// Safely append user data, only if it exists
		Object.entries(userData).forEach(([key, value]) => {
			if (value !== null && value !== undefined) {
				// Handle boolean values specifically
				if (typeof value === "boolean") {
					formData.append(key, value ? "true" : "false")
				} else {
					formData.append(key, String(value))
				}
			}
		})

		// Append image if provided
		if (image instanceof File) {
			formData.append("image", image)
		}

		const response = await axiosInstance.put("/users/me", formData, {
			headers: {
				"Content-Type": "multipart/form-data",
			},
		})

		if (response.data.isSuccess) {
			return response.data.data
		} else {
			throw new Error(response.data.message)
		}
	} catch (error) {
		console.error("Error updating user profile:", error)
		throw error
	}
}

