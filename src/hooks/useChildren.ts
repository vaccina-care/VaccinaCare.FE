"use client"

import { useState, useCallback, useEffect } from "react"
import { useToast } from "./use-toast"
import { getChildren, type ChildData } from "@/api/children"

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

  return {
    children,
    loading,
    fetchChildren,
  }
}

