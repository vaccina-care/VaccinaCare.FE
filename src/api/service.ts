import axiosInstance from "./axiosInstance";

export interface VaccineData {
  id: string; // Id dạng GUID
  vaccineName: string;
  description: string;
  type: string;
}

export interface VaccinePackage {
  id: string; // Id dạng GUID
  packageName: string;
  description: string;
  vaccineIds: string[]; 
}

export const getVaccinePackages = async (): Promise<VaccinePackage[]> => {
  try {
    const response = await axiosInstance.get("/VaccinePackage");
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

export const getVaccineById = async (id: string): Promise<VaccineData> => {
  try {
    const response = await axiosInstance.get(`/Vaccine/${id}`);
    if (response.data.isSuccess) {
      return response.data.data;
    } else {
      throw new Error(response.data.message);
    }
  } catch (error) {
    console.error(`Error fetching vaccine with ID ${id}:`, error);
    throw error;
  }
};
