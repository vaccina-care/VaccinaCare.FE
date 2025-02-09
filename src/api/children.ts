import { axiosInstance } from "./authConfig"

export interface ChildData {
  id: string
  fullName: string
  dateOfBirth: string
  gender: boolean
  medicalHistory: string
  bloodType: string
  hasChronicIllnesses: boolean
  chronicIllnessesDescription: string
  hasAllergies: boolean
  allergiesDescription: string
  hasRecentMedication: boolean
  recentMedicationDescription: string
  hasOtherSpecialCondition: boolean
  otherSpecialConditionDescription: string
}

export const getChildren = async (): Promise<ChildData[]> => {
  try {
    const response = await axiosInstance.get("/children")
    if (response.data.isSuccess) {
      return response.data.data
    } else {
      throw new Error(response.data.message)
    }
  } catch (error) {
    console.error("Error fetching children:", error)
    throw error
  }
}


