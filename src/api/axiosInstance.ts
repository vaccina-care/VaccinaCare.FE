import axios from "axios"

// Instance to use global - using BaseURL from BE API
const API_URL = "http://localhost:5000/api" 
const axiosInstance = axios.create({
  baseURL: API_URL,
  headers: {
    "Content-Type": "application/json",
  },
})

export default axiosInstance

