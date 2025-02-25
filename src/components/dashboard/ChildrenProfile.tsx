"use client"

import { useState } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Switch } from "@/components/ui/switch"
import { Button } from "@/components/ui/button"
import { DatePicker } from "@/components/DatePicker"
import { Pencil, User, Calendar, Droplet, FileText, AlertTriangle, Pill, Activity, Trash2 } from "lucide-react"
import { useChildren } from "@/hooks/useChildren"
import { createChild, updateChild, deleteChild } from "@/api/children"
import type { ChildData } from "@/api/children"
import { useToast } from "@/hooks/use-toast"
import {
	AlertDialog,
	AlertDialogAction,
	AlertDialogCancel,
	AlertDialogContent,
	AlertDialogDescription,
	AlertDialogFooter,
	AlertDialogHeader,
	AlertDialogTitle,
	AlertDialogTrigger,
} from "@/components/ui/alert-dialog"
import { AddChildDialog } from "./AddChildDialog"

const ChildCard = ({
	child,
	isEditing,
	onEdit,
	onSave,
	onDelete,
	childNumber,
}: {
	child: ChildData
	isEditing: boolean
	onEdit: () => void
	onSave: (updatedChild: ChildData) => void
	onDelete: (childId: string) => void
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
			<CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
				<CardTitle className="text-xl font-semibold text-blue-600">Child #{childNumber}</CardTitle>
				<div className="flex space-x-2">
					<Button variant="outline" size="sm" onClick={onEdit}>
						<Pencil className="h-4 w-4 mr-2" />
						{isEditing ? "Cancel" : "Edit"}
					</Button>
					<AlertDialog>
						<AlertDialogTrigger asChild>
							<Button variant="outline" size="sm" className="bg-red-100 hover:bg-red-200 text-red-600">
								<Trash2 className="h-4 w-4 mr-2" />
								Delete
							</Button>
						</AlertDialogTrigger>
						<AlertDialogContent>
							<AlertDialogHeader>
								<AlertDialogTitle>Are you sure you want to delete this child's profile?</AlertDialogTitle>
								<AlertDialogDescription>
									This action cannot be undone. This will permanently delete the child's profile and remove all
									associated data.
								</AlertDialogDescription>
							</AlertDialogHeader>
							<AlertDialogFooter>
								<AlertDialogCancel>Cancel</AlertDialogCancel>
								<AlertDialogAction
									onClick={() => onDelete(child.id)}
									className="bg-red-600 text-white hover:bg-red-700"
								>
									Delete
								</AlertDialogAction>
							</AlertDialogFooter>
						</AlertDialogContent>
					</AlertDialog>
				</div>
			</CardHeader>
			<CardContent className="pt-6">
				<div className="space-y-6">
					<div className="space-y-2">
						<Label htmlFor="fullName" className="flex items-center space-x-2">
							<User className="h-4 w-4" />
							<span>Full Name</span>
						</Label>
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
							<Label htmlFor="dateOfBirth" className="flex items-center space-x-2">
								<Calendar className="h-4 w-4" />
								<span>Date of Birth</span>
							</Label>
							<DatePicker date={dateOfBirth} setDate={handleDateChange} disabled={!isEditing} />
						</div>
						<div className="space-y-2">
							<Label htmlFor="gender" className="flex items-center space-x-2">
								<User className="h-4 w-4" />
								<span>Gender</span>
							</Label>
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
						<Label htmlFor="bloodType" className="flex items-center space-x-2">
							<Droplet className="h-4 w-4" />
							<span>Blood Type</span>
						</Label>
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
						<Label htmlFor="medicalHistory" className="flex items-center space-x-2">
							<FileText className="h-4 w-4" />
							<span>Medical History</span>
						</Label>
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
							<Label htmlFor="chronicIllnesses" className="flex items-center space-x-2">
								<Activity className="h-4 w-4" />
								<span>Chronic Illnesses</span>
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
							<Label htmlFor="allergies" className="flex items-center space-x-2">
								<AlertTriangle className="h-4 w-4" />
								<span>Allergies</span>
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
							<Label htmlFor="recentMedication" className="flex items-center space-x-2">
								<Pill className="h-4 w-4" />
								<span>Recent Medication</span>
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
							<Label htmlFor="otherConditions" className="flex items-center space-x-2">
								<Activity className="h-4 w-4" />
								<span>Other Special Conditions</span>
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
							<Button onClick={handleSave} className="bg-blue-600 hover:bg-blue-700">
								Save changes
							</Button>
						</div>
					)}
				</div>
			</CardContent>
		</Card>
	)
}

export function ChildrenProfile() {
	const { children, loading, fetchChildren } = useChildren()
	const [editingId, setEditingId] = useState<string | null>(null)
	const { toast } = useToast()

	const handleSaveChild = async (updatedChild: ChildData) => {
		try {
			await updateChild(updatedChild.id, updatedChild)
			setEditingId(null)
			await fetchChildren()
			toast({
				title: "Success",
				description: "Child information updated successfully",
			})
		} catch (error) {
			console.error("Failed to save child:", error)
			toast({
				title: "Error",
				description: "Failed to save child information. Please try again.",
				variant: "destructive",
			})
		}
	}

	const handleAddChild = async (childData: Omit<ChildData, "id">) => {
		try {
			await createChild(childData)
			await fetchChildren()
			toast({
				title: "Success",
				description: "New child added successfully",
			})
		} catch (error) {
			console.error("Failed to add new child:", error)
			toast({
				title: "Error",
				description: error instanceof Error ? error.message : "Failed to add new child",
				variant: "destructive",
			})
		}
	}

	const handleDeleteChild = async (childId: string) => {
		try {
			await deleteChild(childId)
			await fetchChildren()
			toast({
				title: "Success",
				description: "Child profile deleted successfully",
			})
		} catch (error) {
			console.error("Failed to delete child:", error)
			toast({
				title: "Error",
				description: "Failed to delete child profile. Please try again.",
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
				<AddChildDialog onSubmit={handleAddChild} />
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
							onDelete={handleDeleteChild}
							childNumber={index + 1}
						/>
					))}
				</div>
			)}
		</div>
	)
}

export default ChildrenProfile

