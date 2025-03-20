import { a0 as axiosInstance } from './index-BxW4NEkE.js';

const getAllTypes = async (params) => {
  try {
    const response = await axiosInstance.get("/packages/all-types", {
      params: {
        searchName: params.searchName || "",
        searchDescription: params.searchDescription || "",
        pageNumber: params.pageNumber || 1,
        pageSize: params.pageSize || 10
      }
    });
    return response.data;
  } catch (error) {
    console.error("Error fetching all types:", error);
    throw error;
  }
};

export { getAllTypes as g };
