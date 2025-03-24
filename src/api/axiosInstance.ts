/* eslint-disable @typescript-eslint/no-unused-vars */
import axios from "axios"

// Instance to use global
const API_URL = "https://ae-tao-fullstack-api.site/api"
const axiosInstance = axios.create({
  baseURL: API_URL,
  headers: {
    "Content-Type": "application/json",
  },
})

// Gán accessToken vào header với mỗi request cần
axiosInstance.interceptors.request.use(
  (config) => {
    const token = localStorage.getItem("accessToken")
    if (token) {
      config.headers["Authorization"] = `Bearer ${token}`
    }
    return config
  },
  (error) => {
    return Promise.reject(error)
  },
)

// Add response interceptor for handling 401 errors and token refresh
axiosInstance.interceptors.response.use(
  (response) => response,
  async (error) => {
    const originalRequest = error.config

    // If the error is 401 and we haven't already tried to refresh the token
    if (error.response?.status === 401 && !originalRequest._retry) {
      originalRequest._retry = true

      try {
        // Refresh the token
        const refreshToken = localStorage.getItem("refreshToken")
        const response = await axios.post(`${API_URL}/auth/refresh-token`, { refreshToken })

        if (response.data.accessToken) {
          localStorage.setItem("accessToken", response.data.accessToken)
          axiosInstance.defaults.headers.common["Authorization"] = `Bearer ${response.data.accessToken}`
          return axiosInstance(originalRequest)
        }

      
      } catch (refreshError) {
        localStorage.removeItem("accessToken")
        localStorage.removeItem("refreshToken")
        window.location.href = "/login"
      }
    }

    return Promise.reject(error)
  },
)

export default axiosInstance

