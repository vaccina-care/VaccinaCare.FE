"use client"

import { useState } from "react"
import { Card, CardContent } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Switch } from "@/components/ui/switch"
import { Button } from "@/components/ui/button"
import { DatePicker } from "@/components/DatePicker"
import { Pencil, Plus } from "lucide-react"
import { useChildren } from "@/hooks/useChildren"
import type { ChildData } from "@/api/children"
import type React from "react"
import { useToast } from "@/hooks/use-toast"
import { createChild } from "@/api/children"

const ChildCard = ({
  child,
  isEditing,
  onEdit,
  onSave,
  childNumber,
}: {
  child: ChildData
  isEditing: boolean
  onEdit: () => void
  onSave: (updatedChild: ChildData) => void
  childNumber: number
}) => {
  const [editedChild, setEditedChild] = useState<ChildData>(child)
  const [dateOfBirth, setDateOfBirth] = useState<Date | undefined>(new Date(child.dateOfBirth))

  const handleInputChange = (field: keyof ChildData, value: string | boolean) => {
    setEditedChild((prev) => ({ ...prev, [field]: value }))
  }

  const handleDateChange = (newDate: Date | undefined) => {
    setDateOfBirth(newDate)
    if (newDate) {
      handleInputChange("dateOfBirth", newDate.toISOString())
    }
  }

  const handleSave = () => {
    onSave({ ...editedChild, dateOfBirth: dateOfBirth ? dateOfBirth.toISOString() : child.dateOfBirth })
  }

  return (
    <Card>
      <CardContent className="p-6">
        <div className="flex justify-between items-start mb-6">
          <div>
            <h3 className="text-lg font-semibold">Child #{childNumber} Profile</h3>
            <p className="text-sm text-muted-foreground">Manage your child's information</p>
          </div>
          <Button variant="outline" size="sm" onClick={onEdit}>
            <Pencil className="h-4 w-4 mr-2" />
            {isEditing ? "Cancel" : "Edit"}
          </Button>
        </div>

        <div className="space-y-6">
          <div className="space-y-2">
            <Label htmlFor="fullName">Full Name</Label>
            <Input
              id="fullName"
              value={editedChild.fullName}
              onChange={(e) => handleInputChange("fullName", e.target.value)}
              disabled={!isEditing}
              className="bg-transparent"
            />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="space-y-2">
              <Label htmlFor="dateOfBirth">Date of Birth</Label>
              <DatePicker date={dateOfBirth} setDate={handleDateChange} disabled={!isEditing} />
            </div>
            <div className="space-y-2">
              <Label htmlFor="gender">Gender</Label>
              <Select
                disabled={!isEditing}
                value={editedChild.gender ? "true" : "false"}
                onValueChange={(value) => handleInputChange("gender", value === "true")}
              >
                <SelectTrigger>
                  <SelectValue placeholder="Select gender" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="true">Male</SelectItem>
                  <SelectItem value="false">Female</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </div>

          <div className="space-y-2">
            <Label htmlFor="bloodType">Blood Type</Label>
            <Select
              disabled={!isEditing}
              value={editedChild.bloodType}
              onValueChange={(value) => handleInputChange("bloodType", value)}
            >
              <SelectTrigger>
                <SelectValue placeholder="Select blood type" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="A">A</SelectItem>
                <SelectItem value="B">B</SelectItem>
                <SelectItem value="AB">AB</SelectItem>
                <SelectItem value="O">O</SelectItem>
                <SelectItem value="Unknown">Unknown</SelectItem>
              </SelectContent>
            </Select>
          </div>

          <div className="space-y-2">
            <Label htmlFor="medicalHistory">Medical History</Label>
            <Textarea
              id="medicalHistory"
              value={editedChild.medicalHistory}
              onChange={(e) => handleInputChange("medicalHistory", e.target.value)}
              disabled={!isEditing}
              className="min-h-[100px] bg-transparent"
            />
          </div>

          <div className="space-y-4 border-t pt-4">
            <div className="flex items-center justify-between">
              <Label htmlFor="chronicIllnesses" className="text-lg font-semibold">
                Chronic Illnesses
              </Label>
              <Switch
                id="chronicIllnesses"
                checked={editedChild.hasChronicIllnesses}
                onCheckedChange={(checked) => handleInputChange("hasChronicIllnesses", checked)}
                disabled={!isEditing}
              />
            </div>
            {editedChild.hasChronicIllnesses && (
              <Textarea
                id="chronicIllnessesDescription"
                value={editedChild.chronicIllnessesDescription}
                onChange={(e) => handleInputChange("chronicIllnessesDescription", e.target.value)}
                placeholder="Describe any chronic illnesses"
                className="mt-2 min-h-[100px]"
                disabled={!isEditing}
              />
            )}
          </div>

          <div className="space-y-4 border-t pt-4">
            <div className="flex items-center justify-between">
              <Label htmlFor="allergies" className="text-lg font-semibold">
                Allergies
              </Label>
              <Switch
                id="allergies"
                checked={editedChild.hasAllergies}
                onCheckedChange={(checked) => handleInputChange("hasAllergies", checked)}
                disabled={!isEditing}
              />
            </div>
            {editedChild.hasAllergies && (
              <Textarea
                id="allergiesDescription"
                value={editedChild.allergiesDescription}
                onChange={(e) => handleInputChange("allergiesDescription", e.target.value)}
                placeholder="Describe any allergies"
                className="mt-2 min-h-[100px]"
                disabled={!isEditing}
              />
            )}
          </div>

          <div className="space-y-4 border-t pt-4">
            <div className="flex items-center justify-between">
              <Label htmlFor="recentMedication" className="text-lg font-semibold">
                Recent Medication
              </Label>
              <Switch
                id="recentMedication"
                checked={editedChild.hasRecentMedication}
                onCheckedChange={(checked) => handleInputChange("hasRecentMedication", checked)}
                disabled={!isEditing}
              />
            </div>
            {editedChild.hasRecentMedication && (
              <Textarea
                id="recentMedicationDescription"
                value={editedChild.recentMedicationDescription}
                onChange={(e) => handleInputChange("recentMedicationDescription", e.target.value)}
                placeholder="Describe any recent medication"
                className="mt-2 min-h-[100px]"
                disabled={!isEditing}
              />
            )}
          </div>

          <div className="space-y-4 border-t pt-4">
            <div className="flex items-center justify-between">
              <Label htmlFor="otherConditions" className="text-lg font-semibold">
                Other Special Conditions
              </Label>
              <Switch
                id="otherConditions"
                checked={editedChild.hasOtherSpecialCondition}
                onCheckedChange={(checked) => handleInputChange("hasOtherSpecialCondition", checked)}
                disabled={!isEditing}
              />
            </div>
            {editedChild.hasOtherSpecialCondition && (
              <Textarea
                id="otherConditionsDescription"
                value={editedChild.otherSpecialConditionDescription}
                onChange={(e) => handleInputChange("otherSpecialConditionDescription", e.target.value)}
                placeholder="Describe any other special conditions"
                className="mt-2 min-h-[100px]"
                disabled={!isEditing}
              />
            )}
          </div>

          {isEditing && (
            <div className="flex justify-end">
              <Button onClick={handleSave} className="bg-[#1e1b4b] hover:bg-[#1e1b4b]/90">
                Save changes
              </Button>
            </div>
          )}
        </div>
      </CardContent>
    </Card>
  )
}

const defaultChildData: Omit<ChildData, "id"> = {
  fullName: "",
  dateOfBirth: new Date().toISOString().split("T")[0], // Format as YYYY-MM-DD
  gender: true,
  medicalHistory: "",
  bloodType: "Unknown",
  hasChronicIllnesses: false,
  chronicIllnessesDescription: "",
  hasAllergies: false,
  allergiesDescription: "",
  hasRecentMedication: false,
  recentMedicationDescription: "",
  hasOtherSpecialCondition: false,
  otherSpecialConditionDescription: "",
}

const ChildProfile: React.FC = () => {
  const { children, loading, fetchChildren } = useChildren()
  const [editingId, setEditingId] = useState<string | null>(null)
  const { toast } = useToast()

  const handleSaveChild = async (updatedChild: ChildData) => {
    try {
      console.log("Saving updated child:", updatedChild)
      // Here you would typically call an API to update the child's data
      // For now, we'll just update the local state
      setEditingId(null)
      // Refresh the children list after saving
      await fetchChildren()
      toast({
        title: "Success",
        description: "Child information updated successfully",
      })
    } catch (error) {
      console.error("Failed to save child:", error)
      toast({
        title: "Error",
        description: "Failed to save child information. Please check the console for more details.",
        variant: "destructive",
      })
    }
  }

  const handleAddChild = async () => {
    try {
      await createChild(defaultChildData)
      await fetchChildren() // Refresh the children list
      toast({
        title: "Success",
        description: "New child added successfully",
      })
    } catch (error: unknown) {
      console.error("Failed to add new child:", error)
      if (error && typeof error === "object" && "response" in error) {
        const axiosError = error as { response: { data: unknown; status: number; headers: unknown } }
        console.error("Response data:", axiosError.response.data)
        console.error("Response status:", axiosError.response.status)
        console.error("Response headers:", axiosError.response.headers)
      }
      toast({
        title: "Error",
        description: error instanceof Error ? error.message : "Failed to add new child",
        variant: "destructive",
      })
    }
  }

  if (loading) {
    return <div>Loading children information...</div>
  }

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <h2 className="text-2xl font-bold">Children Information</h2>
        <Button onClick={handleAddChild}>
          <Plus className="h-4 w-4 mr-2" />
          Add Child
        </Button>
      </div>

      {children.length === 0 ? (
        <p>No children found. Click the "Add Child" button to add a new child.</p>
      ) : (
        <div className="space-y-6">
          {children.map((child, index) => (
            <ChildCard
              key={child.id}
              child={child}
              isEditing={editingId === child.id}
              onEdit={() => setEditingId(editingId === child.id ? null : child.id)}
              onSave={handleSaveChild}
              childNumber={index + 1}
            />
          ))}
        </div>
      )}
    </div>
  )
}

export default ChildProfile

