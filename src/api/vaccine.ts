import axiosInstance from "./axiosInstance";

export const getVaccines = async (page = 1, pageSize = 12) => {
  try {
    const response = await axiosInstance.get("/vaccine", {
      params: { page, pageSize }, 
    });
    if (response.data.isSuccess) {
      return response.data;
    } else {
      throw new Error(response.data.message)
    }
  } catch (error) {
    console.error("Error fetching vaccines:", error);
    throw error;
  }
};
