/* eslint-disable @typescript-eslint/no-namespace */
import axiosInstance from "./axiosInstance";

const LOGIN_API = "/auth/login"
const REGISTER_API = "/auth/register"

export namespace Auth {

	//REGISTER
	export interface RegisterPayload {
		email: string;
		password: string;
	}
	export interface RegisterResponseData {
		userId: number;
		email: string;
		fullname: string | null
	}
	export interface RegisterResponse {
		isSuccess: boolean;
		message: string;
		data: RegisterResponseData;
	}

	//lOGIN
	export interface LoginResponseData {
		accessToken: string;
		refreshToken: string;
	}
	export interface LoginResponse {
		isSuccess: boolean;
		message: string;
		data: LoginResponseData
	}
	export interface LoginPayload {
		email: string;
		password: string;
	}

	//FETCH FUNCTION
	export async function login(payload: LoginPayload): Promise<LoginResponse> {
		const response = await axiosInstance.post<LoginResponse>(LOGIN_API, payload);
		if (response.data.isSuccess) {
			localStorage.setItem("accessToken", response.data.data.accessToken)
			localStorage.setItem("refreshToken", response.data.data.refreshToken)
		}
		return response.data;
	}

	export async function register(payload: RegisterPayload): Promise<RegisterResponse> {
		const response = await axiosInstance.post<RegisterResponse>(REGISTER_API, payload,);
		return response.data;
	}

	// // Cần bỏ accessToken param sau khi API sửa - ko cần truyền access 1 lần nữa
	// export async function refreshToken(): Promise<LoginResponse> {
	// 	const accessToken = localStorage.getItem("accessToken")	
	// 	const refreshToken = localStorage.getItem("refreshToken")
	// 	if (!refreshToken && !accessToken) throw new Error("No refresh token available")
	// 	const response = await axiosInstance.post<LoginResponse>("/auth/refresh-token", {
	// 		refreshToken
	// 	})
	// 	return response.data
	// }

	export function logout(): void {
		localStorage.removeItem("accessToken")
		localStorage.removeItem("refreshToken")
	}

	export function getToken(): string | null {
		return localStorage.getItem("accessToken")
	}

	export function setToken(token: string): void {
		localStorage.setItem("accessToken", token)
	}


}
