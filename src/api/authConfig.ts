import axios from "axios"

const axiosInstance = axios.create({
  baseURL: "http://localhost:5000/api", 
})

// Request interceptor
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

// Response interceptor
// axiosInstance.interceptors.response.use(
//   (response) => response,
//   async (error: AxiosError) => {
//     const originalRequest = error.config
//     if (error.response?.status === 401 && !originalRequest._retry) {
//       originalRequest._retry = true

//       try {
//         const refreshToken = localStorage.getItem("refreshToken")
//         if (!refreshToken) {
//           throw new Error("No refresh token available")
//         }

//         const response = await Auth.refreshToken(refreshToken)
//         if (response.isSuccess) {
//           localStorage.setItem("accessToken", response.data.accessToken)
//           axiosInstance.defaults.headers.common["Authorization"] = `Bearer ${response.data.accessToken}`
//           return axiosInstance(originalRequest)
//         } else {
//           throw new Error("Token refresh failed")
//         }
//       } catch (refreshError) {
//         // If refresh fails, log out the user
//         localStorage.removeItem("accessToken")
//         localStorage.removeItem("refreshToken")
//         window.location.href = "/login"
//         return Promise.reject(refreshError)
//       }
//     }
//     return Promise.reject(error)
//   },
// )

export default axiosInstance

