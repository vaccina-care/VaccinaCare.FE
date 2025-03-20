import { a0 as axiosInstance } from './index-BxW4NEkE.js';

const getVaccineSection = async (params) => {
  try {
    const response = await axiosInstance.get("/vaccines", {
      params: {
        ...params,
        pageSize: params?.pageSize || 6,
        // Set 6 for vaccine section
        page: params?.page || 1
      }
    });
    return response.data;
  } catch (error) {
    console.error("Error fetching vaccines:", error);
    throw error;
  }
};
const getVaccineList = async (params) => {
  try {
    const response = await axiosInstance.get("/vaccines", {
      params: {
        ...params,
        pageSize: params?.pageSize || 12,
        page: params?.page || 1
      }
    });
    return response.data;
  } catch (error) {
    console.error("Error fetching vaccine list:", error);
    throw error;
  }
};
const getVaccineById = async (id) => {
  try {
    const response = await axiosInstance.get(`/vaccines/${id}`);
    if (response.data.isSuccess) {
      return response.data.data;
    } else {
      throw new Error(response.data.message);
    }
  } catch (error) {
    console.error(`Error fetching vaccine with id ${id}:`, error);
    throw error;
  }
};

export { getVaccineList as a, getVaccineById as b, getVaccineSection as g };
