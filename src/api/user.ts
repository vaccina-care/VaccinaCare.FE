import axiosInstance from "./axiosInstance"

export type UserRole = "admin" | "staff" | "customer"; 
export type UserStatus = "active" | "inactive" | "pending";

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

export interface GetUserData {
    id: string;
    fullName: string;
    email: string;
    gender: boolean;
    address?: string; 
    dateOfBirth: string;
    imageUrl: string | null;
    phoneNumber?: string; 
    roleName: UserRole;
    status?: UserStatus; 
    createdAt?: string;
    lastLogin?: string;
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


export const fetchAllUsers = async (
  page: number = 1,
  pageSize: number = 10,
  searchName?: string,
  searchEmail?: string,
  role?: UserRole | "all",
  status?: UserStatus | "all"
): Promise<{ users: GetUserData[], totalCount: number }> => {
  try {
    const params = {
      page,
      pageSize,
      fullName: searchName || undefined,
      email: searchEmail || undefined,
      roleName: role !== "all" ? role : undefined,
      status: status !== "all" ? status : undefined,
    };

    const response = await axiosInstance.get("/users", { params });
    console.log("API Response:", response.data);

    if (response.data.isSuccess) {
      return {
        users: response.data.data,
        totalCount: response.data.data.length,
      };
    } else {
      throw new Error(response.data.message);
    }
  } catch (error) {
    console.error("Error fetching all users:", error);
    throw error;
  }
};

