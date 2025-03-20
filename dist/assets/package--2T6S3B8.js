import { a0 as axiosInstance } from './index-BxW4NEkE.js';

const getVaccinePackages = async () => {
  try {
    const response = await axiosInstance.get(
      "/packages"
    );
    if (response.data.isSuccess) {
      return response.data.data;
    } else {
      throw new Error(response.data.message);
    }
  } catch (error) {
    console.error("Error fetching vaccine packages:", error);
    throw error;
  }
};
const getVaccinePackageById = async (id) => {
  try {
    const response = await axiosInstance.get(
      `/packages/${id}`
    );
    if (response.data.isSuccess) {
      return response.data.data;
    } else {
      throw new Error(response.data.message);
    }
  } catch (error) {
    console.error(`Error fetching vaccine package with id ${id}:`, error);
    throw error;
  }
};

export { getVaccinePackageById as a, getVaccinePackages as g };
