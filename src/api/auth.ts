import axiosInstance from "./axiosInstance";


export namespace Auth {

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

  

  export async function register(payload: RegisterPayload): Promise<RegisterResponse> {
    const response = await axiosInstance.post<RegisterResponse>('/auth/register',payload,);
    return response.data; // Return the response data directly
  }
}
