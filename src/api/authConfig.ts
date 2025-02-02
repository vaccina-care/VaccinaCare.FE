import axiosInstance from "./axiosInstance"

// Export the axiosInstance (BaseURL) to be used in other files
export { axiosInstance }

// You can add any auth-specific functions here
export const login = async (credentials: { email: string; password: string }) => {
  try {
    const response = await axiosInstance.post("/auth/login", credentials)
    if (response.data.isSuccess) {
      localStorage.setItem("accessToken", response.data.data.accessToken)
      return response.data
    } else {
      throw new Error(response.data.message)
    }
  } catch (error) {
    console.error("Login error:", error)
    throw error
  }
}

// Add other auth-related functions as needed

