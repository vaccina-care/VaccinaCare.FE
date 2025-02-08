import { axiosInstance } from "./authConfig"


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


export const updateUserProfile = async (userData: Partial<UserData>): Promise<UserData> => {
  try {
    const response = await axiosInstance.put("/users/me", userData)
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
