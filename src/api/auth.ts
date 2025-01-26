import axiosInstance from "./axiosInstance";


export namespace Auth {


//REGISTER
  //Payload gửi đi tới API
  export interface RegisterPayload {
    email: string;
    password: string;
  }
  //User data - register response trả về
  export interface RegisterResponseData {
    userId: number;
    email: string;
    fullname: string | null
  }
  //Response: API trả về
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

  export async function login(payload: LoginPayload): Promise<LoginResponse> {
    const response = await axiosInstance.post<LoginResponse>('/auth/login', payload);
    return response.data; // Return the structured response data
  }

  export async function register(payload: RegisterPayload): Promise<RegisterResponse> {
    const response = await axiosInstance.post<RegisterResponse>('/auth/register',payload,);
    return response.data; // Return the response data directly
  }
}
