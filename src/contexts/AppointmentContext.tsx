"use client"

import { createContext, useContext, useState, type ReactNode, useCallback } from "react"

interface AppointmentContextType {
    selectedChild: string
    setSelectedChild: (id: string) => void
    notes: string
    setNotes: (notes: string) => void
    appointmentDate: Date | undefined
    setAppointmentDate: (date: Date | undefined) => void
    appointmentTime: string | undefined
    setAppointmentTime: (time: string | undefined) => void
    serviceType: "single" | "package"
    setServiceType: (type: "single" | "package") => void
    selectedVaccine: string
    setSelectedVaccine: (id: string) => void
    selectedPackage: string
    setSelectedPackage: (id: string) => void
    isSubmitting: boolean
    setIsSubmitting: (isSubmitting: boolean) => void
    resetAppointmentState: () => void // New reset function
}

const AppointmentContext = createContext<AppointmentContextType | undefined>(undefined)

export function AppointmentProvider({ children }: { children: ReactNode }) {
    const [selectedChild, setSelectedChild] = useState<string>("")
    const [notes, setNotes] = useState<string>("")
    const [appointmentDate, setAppointmentDate] = useState<Date | undefined>(undefined)
    const [appointmentTime, setAppointmentTime] = useState<string | undefined>(undefined)
    const [serviceType, setServiceType] = useState<"single" | "package">("single")
    const [selectedVaccine, setSelectedVaccine] = useState<string>("")
    const [selectedPackage, setSelectedPackage] = useState<string>("")
    const [isSubmitting, setIsSubmitting] = useState<boolean>(false)

    // Add a function to reset all appointment state
    const resetAppointmentState = useCallback(() => {
        setNotes("")
        setAppointmentDate(undefined)
        setAppointmentTime(undefined)
        setServiceType("single")
        setSelectedVaccine("")
        setSelectedPackage("")
        setIsSubmitting(false)
        // Note: We don't reset selectedChild as that's a user preference that should persist
    }, [])

    return (
        <AppointmentContext.Provider
            value={{
                selectedChild,
                setSelectedChild,
                notes,
                setNotes,
                appointmentDate,
                setAppointmentDate,
                appointmentTime,
                setAppointmentTime,
                serviceType,
                setServiceType,
                selectedVaccine,
                setSelectedVaccine,
                selectedPackage,
                setSelectedPackage,
                isSubmitting,
                setIsSubmitting,
                resetAppointmentState,
            }}
        >
            {children}
        </AppointmentContext.Provider>
    )
}

// eslint-disable-next-line react-refresh/only-export-components
export function useAppointmentContext() {
    const context = useContext(AppointmentContext)
    if (context === undefined) {
        throw new Error("useAppointmentContext must be used within an AppointmentProvider")
    }
    return context
}

