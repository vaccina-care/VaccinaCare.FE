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

export interface UpdateUserData {
    fullName?: string;
    email?: string;
    gender?: boolean;
    address?: string;
    dateOfBirth?: string;
    image?: File | null;
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

export const updateUserProfile = async (userData: UpdateUserData): Promise<UserData> => {
    try {
        const formData = new FormData();

        Object.entries(userData).forEach(([key, value]) => {
            if (value !== null && value !== undefined) {
                if (key === "image" && value instanceof File) {
                    formData.append("imageFile", value); // Ensure correct key
                } else {
                    formData.append(key, String(value));
                }
            }
        });

        const response = await axiosInstance.put("/users/me", formData, {
            headers: { "Content-Type": "multipart/form-data" },
        });

        if (response.data.isSuccess) {
            return response.data.data;
        } else {
            throw new Error(response.data.message);
        }
    } catch (error) {
        console.error("Error updating user profile:", error);
        throw error;
    }
};