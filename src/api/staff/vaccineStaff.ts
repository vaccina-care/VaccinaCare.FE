import axiosInstance from "../axiosInstance"

// Common API response type
export interface ApiResponse<T> {
    isSuccess: boolean
    message: string
    data: T
}

// Base vaccine interface with common properties
export interface VaccineBase {
    id: string
    vaccineName: string
    description: string
    picUrl: string | null
    type: string
    price: number
    requiredDoses: number
}

// Full vaccine details interface
export interface VaccineDetail extends VaccineBase {
    doseIntervalDays: number
    forBloodType: string | null
    avoidChronic: boolean
    avoidAllergy: boolean
    hasDrugInteraction: boolean
    hasSpecialWarning: boolean
}

// List response interface
export interface VaccineListResponse {
    totalCount: number
    vaccines: VaccineBase[]
}

// Query parameters for getting vaccine list
export interface GetVaccinesParams {
    search?: string
    type?: string
    sortBy?: string
    isDescending?: boolean
    page?: number
    pageSize?: number
}

// Create/Update vaccine DTO
export interface VaccineFormData extends VaccineBase {
    doseIntervalDays: number;
    forBloodType: string;
    avoidChronic: boolean;
    avoidAllergy: boolean;
    hasDrugInteraction: boolean;
    hasSpecialWarning: boolean;
    vaccinePictureFile?: File; // Optional file upload field
}


// Helper function to convert base64 to File
export const base64ToFile = (base64String: string, filename = "image.jpg"): File => {
    const byteString = atob(base64String)
    const ab = new ArrayBuffer(byteString.length)
    const ia = new Uint8Array(ab)
    for (let i = 0; i < byteString.length; i++) {
        ia[i] = byteString.charCodeAt(i)
    }
    return new File([ab], filename, { type: "image/jpeg" })
}

export const getAllVaccines = async (params: GetVaccinesParams): Promise<ApiResponse<VaccineListResponse>> => {
    try {
        const response = await axiosInstance.get("/vaccines", { params })
        return response.data
    } catch (error) {
        console.error("Error fetching vaccines:", error)
        throw error
    }
}

export const getVaccineById = async (id: string): Promise<ApiResponse<VaccineDetail>> => {
    try {
        const response = await axiosInstance.get(`/vaccines/${id}`)
        return response.data
    } catch (error) {
        console.error("Error fetching vaccine:", error)
        throw error
    }
}

export const createVaccine = async (data: VaccineFormData): Promise<ApiResponse<VaccineDetail>> => {
    try {
        const formData = new FormData();

        // Ensure the correct data is appended
        Object.entries(data).forEach(([key, value]) => {
            if (key === "vaccinePictureFile" && value instanceof File) {
                formData.append("vaccinePictureFile", value);
            } else if (typeof value === "boolean") {
                formData.append(key, value.toString()); // Convert boolean to string
            } else if (value !== undefined && value !== null) {
                formData.append(key, value.toString());
            }
        });

        const response = await axiosInstance.post("/vaccines", formData, {
            headers: {
                "Content-Type": "multipart/form-data",
            },
        });
        return response.data;
    } catch (error) {
        console.error("Error creating vaccine:", error);
        throw error;
    }
};

export const updateVaccine = async (id: string, data: VaccineFormData): Promise<ApiResponse<VaccineDetail>> => {
    try {
        const formData = new FormData();

        // Append all fields EXCEPT vaccinePictureFile
        Object.entries(data).forEach(([key, value]) => {
            if (key !== "vaccinePictureFile") { 
                formData.append(key, value.toString()); // Convert all values to string
            }
        });

        // ✅ If a new file is uploaded, send it
        if (data.vaccinePictureFile instanceof File) {
            formData.append("vaccinePictureFile", data.vaccinePictureFile);
        } else {
            // ✅ If no new file, send an empty Blob() as a placeholder
            formData.append("vaccinePictureFile", new Blob(), "empty.jpg");
        }

        console.log("Final Payload being sent:");
        for (const pair of formData.entries()) {
            console.log(`${pair[0]}:`, pair[1]);
        }

        const response = await axiosInstance.put(`/vaccines/${id}`, formData, {
            headers: {
                "Content-Type": "multipart/form-data",
            },
        });

        return response.data;
    } catch (error) {
        console.error("Error updating vaccine:", error);
        throw error;
    }
};




export const deleteVaccine = async (id: string): Promise<ApiResponse<VaccineDetail>> => {
    try {
        const response = await axiosInstance.delete(`/vaccines/${id}`)
        return response.data
    } catch (error) {
        console.error("Error deleting vaccine:", error)
        throw error
    }
}

