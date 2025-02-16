"use client"

import { useState, useCallback, useEffect } from "react"
import { useToast } from "./use-toast"
import { createChild, getChildren, type ChildData } from "@/api/children"

export const useChildren = () => {
	const [children, setChildren] = useState<ChildData[]>([])
	const [loading, setLoading] = useState(true)
	const { toast } = useToast()

	const fetchChildren = useCallback(async () => {
		try {
			setLoading(true)
			console.log("Fetching children...")
			const data = await getChildren()
			console.log("Fetched children:", data)
			setChildren(data)
		} catch (error) {
			console.error("Error fetching children:", error)
			toast({
				title: "Error",
				description: error instanceof Error ? error.message : "Failed to fetch children data",
				variant: "destructive",
			})
		} finally {
			setLoading(false)
		}
	}, [toast])

	useEffect(() => {
		fetchChildren()
	}, [fetchChildren])

	const addChild = useCallback(
		async (childData: Omit<ChildData, "id">) => {
			try {
				const newChild = await createChild(childData)
				setChildren((prevChildren) => [...prevChildren, newChild])
				toast({
					title: "Success",
					description: "New child added successfully",
				})
				return newChild
			} catch (error) {
				console.error("Error adding child:", error)
				toast({
					title: "Error",
					description: error instanceof Error ? error.message : "Failed to add new child",
					variant: "destructive",
				})
				throw error
			}
		},
		[toast],
	)

	return {
		children,
		loading,
		fetchChildren,
		addChild,
	}
}

