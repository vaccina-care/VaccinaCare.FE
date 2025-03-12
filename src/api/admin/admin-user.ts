import axiosInstance from "@/api/axiosInstance";
import { ApiResponse } from "../apiResponse";

export type UserRole = "admin" | "staff" | "customer";
export type UserStatus = "active" | "inactive" | "pending";

export interface UserBase {
    id: string;
    fullName: string;
    email: string;
    gender: boolean | null;
    dateOfBirth: string | null;
    imageUrl: string | null;
    phoneNumber: string | null;
    roleName: UserRole;
    status: UserStatus;
    createdAt: string | null;
    lastLogin: string | null;
}

export interface UserListResponse {
    users: UserBase[];
    totalCount: number;
}

export interface GetUsersParams {
    page?: number;
    pageSize?: number;
    searchName?: string;
    searchEmail?: string;
    role?: UserRole | "all";
    status?: UserStatus | "all";
}

export const getAllUsers = async (params: GetUsersParams): Promise<ApiResponse<UserListResponse>> => {
    try {
        const response = await axiosInstance.get("/users", { params });
        console.log("API Response:", response.data);

        if (response.data.isSuccess) {
            const mappedUsers: UserBase[] = response.data.data.map((user: any) => ({
                id: user.id,
                fullName: user.fullName || "Unknown",
                email: user.email,
                gender: user.gender ?? null,
                dateOfBirth: user.dateOfBirth ? new Date(user.dateOfBirth).toISOString().split("T")[0] : null,
                imageUrl: user.imageUrl || null,
                phoneNumber: user.phoneNumber || null,
                roleName: user.roleName,
                status: user.status || "active",
                createdAt: user.createdAt ? new Date(user.createdAt).toISOString().split("T")[0] : null,
                lastLogin: user.lastLogin ? new Date(user.lastLogin).toISOString().split("T")[0] : null,
            }));

            return {
                isSuccess: true,
                data: {
                    users: mappedUsers,
                    totalCount: response.data.data.length,
                },
                message: response.data.message || "Success to fetch users"
            };
        } else {
            return {
                isSuccess: false,
                data: { users: [], totalCount: 0 },
                message: response.data.message || "Failed to fetch users",
            };
        }
    } catch (error) {
        console.error("Error fetching users:", error);
        throw error;
    }
};