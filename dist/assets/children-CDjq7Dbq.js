import { a0 as axiosInstance, aF as axios } from './index-BxW4NEkE.js';

const getChildren = async () => {
  try {
    const response = await axiosInstance.get("/children");
    if (response.data.isSuccess) {
      return response.data.data;
    } else {
      throw new Error(response.data.message);
    }
  } catch (error) {
    console.error("Error fetching children:", error);
    throw error;
  }
};
const createChild = async (childData) => {
  try {
    const response = await axiosInstance.post("/children", childData, {
      headers: {
        "Content-Type": "application/json"
      }
    });
    if (response.data.isSuccess) {
      return response.data.data;
    } else {
      throw new Error(response.data.message);
    }
  } catch (error) {
    console.error("Error creating child:", error);
    throw error;
  }
};
const updateChild = async (childId, childData) => {
  try {
    const currentChild = await getChildren().then((children) => children.find((child) => child.id === childId));
    if (!currentChild) {
      throw new Error("Child not found");
    }
    const { id, ...dataWithoutId } = {
      ...currentChild,
      ...childData
    };
    const updatedData = {
      ...dataWithoutId,
      dateOfBirth: dataWithoutId.dateOfBirth.split("T")[0]
    };
    console.log("Child ID:", childId);
    console.log("Update Payload:", JSON.stringify(updatedData, null, 2));
    const response = await axiosInstance.put(`/children/${childId}`, updatedData, {
      headers: {
        "Content-Type": "application/json"
      }
    });
    console.log("API Response:", response.data);
    if (response.data.isSuccess) {
      return response.data.data;
    } else {
      throw new Error(response.data.message);
    }
  } catch (error) {
    if (axios.isAxiosError(error)) {
      console.error("Full error response:", error.response?.data);
      if (error.response?.status === 404) {
        throw new Error("Child not found");
      } else if (error.response?.status === 400) {
        throw new Error(`Bad request: ${error.response?.data?.message || "Unknown error"}`);
      }
    }
    console.error("Error updating child:", error);
    throw error;
  }
};
const deleteChild = async (childId) => {
  try {
    const response = await axiosInstance.delete(`/children/${childId}`);
    if (!response.data.isSuccess) {
      throw new Error(response.data.message);
    }
  } catch (error) {
    console.error("Error deleting child:", error);
    throw error;
  }
};

export { createChild as c, deleteChild as d, getChildren as g, updateChild as u };
