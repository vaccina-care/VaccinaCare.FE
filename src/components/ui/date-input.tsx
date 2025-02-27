"use client"

import type React from "react"

import { Input } from "@/components/ui/input"
import { cn } from "@/lib/utils"

interface DateInputProps extends React.InputHTMLAttributes<HTMLInputElement> {
    date: Date | undefined
    setDate: (date: Date | undefined) => void
    className?: string
}

export function DateInput({ date, setDate, className, ...props }: DateInputProps) {
    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const value = e.target.value
        if (value) {
            setDate(new Date(value))
        } else {
            setDate(undefined)
        }
    }

    return (
        <Input
            type="date"
            value={date ? date.toISOString().split("T")[0] : ""}
            onChange={handleChange}
            className={cn("w-full", className)}
            {...props}
        />
    )
}

