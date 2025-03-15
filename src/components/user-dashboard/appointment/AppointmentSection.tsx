"use client"

import { useEffect, useState } from "react"
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import {
    Calendar,
    Clock,
    Eye,
    ChevronDown,
    ChevronUp,
    Syringe,
    Package2,
    User,
    CalendarClock,
    Banknote,
} from "lucide-react"
import { Button } from "@/components/ui/button"
import { format } from "date-fns"
import { getChildAppointments, getAppointmentDetails, type AppointmentResponse } from "@/api/appointment"
import { getChildren, type ChildData } from "@/api/children"
import { AppointmentDetailDialog } from "@/components/user-dashboard/appointment/AppointmentDetailDialog"
import { useToast } from "@/hooks/use-toast"
import { Skeleton } from "@/components/ui/skeleton"
import { motion, AnimatePresence } from "framer-motion"

export default function AppointmentsSection() {
    const [children, setChildren] = useState<ChildData[]>([])
    const [appointments, setAppointments] = useState<Record<string, AppointmentResponse[]>>({})
    const [expandedChild, setExpandedChild] = useState<string | null>(null)
    const [selectedAppointment, setSelectedAppointment] = useState<AppointmentResponse | null>(null)
    const [isDetailOpen, setIsDetailOpen] = useState(false)
    const [loadingChildren, setLoadingChildren] = useState(true)
    const [loadingAppointments, setLoadingAppointments] = useState<Record<string, boolean>>({})
    const { toast } = useToast()

    // Fetch children data
    useEffect(() => {
        const fetchChildren = async () => {
            try {
                setLoadingChildren(true)
                const childrenData = await getChildren()
                setChildren(childrenData)
                if (childrenData.length > 0) {
                    setExpandedChild(childrenData[0].id)
                }
            } catch (error) {
                console.error("Failed to fetch children:", error)
                toast({
                    title: "Error",
                    description: "Failed to load children data",
                    variant: "destructive",
                })
            } finally {
                setLoadingChildren(false)
            }
        }

        fetchChildren()
    }, [toast])

    // Fetch appointments for expanded child
    useEffect(() => {
        const fetchAppointments = async (childId: string) => {
            if (!childId) return

            try {
                setLoadingAppointments((prev) => ({ ...prev, [childId]: true }))
                const response = await getChildAppointments(childId)
                if (response.isSuccess) {
                    setAppointments((prev) => ({
                        ...prev,
                        [childId]: response.data,
                    }))
                }
            } catch (error) {
                console.error("Failed to fetch appointments:", error)
                toast({
                    title: "Error",
                    description: "Failed to load appointments",
                    variant: "destructive",
                })
            } finally {
                setLoadingAppointments((prev) => ({ ...prev, [childId]: false }))
            }
        }

        if (expandedChild && !appointments[expandedChild]) {
            fetchAppointments(expandedChild)
        }
    }, [expandedChild, appointments, toast])

    const handleViewDetails = async (appointmentId: string) => {
        try {
            const response = await getAppointmentDetails(appointmentId)
            if (response.isSuccess) {
                setSelectedAppointment(response.data)
                setIsDetailOpen(true)
            }
        } catch (error) {
            console.error("Failed to fetch appointment details:", error)
            toast({
                title: "Error",
                description: "Failed to load appointment details",
                variant: "destructive",
            })
        }
    }

    const toggleChildExpansion = (childId: string) => {
        setExpandedChild(expandedChild === childId ? null : childId)
    }

    const getStatusColor = (status: string) => {
        switch (status.toLowerCase()) {
            case "confirmed":
                return "bg-green-100 text-green-800 border-green-200"
            case "pending":
                return "bg-yellow-100 text-yellow-800 border-yellow-200"
            case "cancelled":
                return "bg-red-100 text-red-800 border-red-200"
            default:
                return "bg-gray-100 text-gray-800 border-gray-200"
        }
    }

    // Determine if an appointment is part of a package
    const isPackageAppointment = (appointment: AppointmentResponse) => {
        return (
            appointment.notes?.toLowerCase().includes("package") ||
            appointment.notes?.includes("Mũi") ||
            appointment.notes?.includes("/")
        )
    }

    // Group appointments by date
    const groupAppointmentsByDate = (appointments: AppointmentResponse[]) => {
        const grouped: Record<string, AppointmentResponse[]> = {}

        appointments.forEach((appointment) => {
            const dateKey = format(new Date(appointment.appointmentDate), "yyyy-MM-dd")
            if (!grouped[dateKey]) {
                grouped[dateKey] = []
            }
            grouped[dateKey].push(appointment)
        })

        return grouped
    }

    return (
        <div className="space-y-8">
            <div>
                <h2 className="text-2xl font-bold tracking-tight">Your Appointments</h2>
                <p className="text-muted-foreground mt-1">View and manage vaccination appointments for your children</p>
            </div>

            {loadingChildren ? (
                <div className="space-y-4">
                    {[1, 2].map((i) => (
                        <Card key={i} className="animate-pulse">
                            <CardHeader>
                                <Skeleton className="h-6 w-48" />
                                <Skeleton className="h-4 w-72 mt-2" />
                            </CardHeader>
                            <CardContent>
                                <Skeleton className="h-24 w-full" />
                            </CardContent>
                        </Card>
                    ))}
                </div>
            ) : children.length > 0 ? (
                <div className="space-y-6">
                    {children.map((child) => (
                        <Card key={child.id} className={expandedChild === child.id ? "border-blue-200" : ""}>
                            <CardHeader
                                className={`cursor-pointer hover:bg-gray-50 ${expandedChild === child.id ? "bg-blue-50/50" : ""}`}
                                onClick={() => toggleChildExpansion(child.id)}
                            >
                                <div className="flex items-center justify-between">
                                    <div className="flex items-center gap-3">
                                        <div className="bg-blue-100 p-2 rounded-full">
                                            <User className="h-5 w-5 text-blue-600" />
                                        </div>
                                        <div>
                                            <CardTitle className="text-lg">{child.fullName}</CardTitle>
                                            <CardDescription>
                                                {child.dateOfBirth ? format(new Date(child.dateOfBirth), "MMMM d, yyyy") : "No birth date"}
                                            </CardDescription>
                                        </div>
                                    </div>
                                    <Button variant="ghost" size="icon">
                                        {expandedChild === child.id ? (
                                            <ChevronUp className="h-5 w-5" />
                                        ) : (
                                            <ChevronDown className="h-5 w-5" />
                                        )}
                                    </Button>
                                </div>
                            </CardHeader>

                            <AnimatePresence>
                                {expandedChild === child.id && (
                                    <motion.div
                                        initial={{ height: 0, opacity: 0 }}
                                        animate={{ height: "auto", opacity: 1 }}
                                        exit={{ height: 0, opacity: 0 }}
                                        transition={{ duration: 0.3 }}
                                    >
                                        <CardContent className="pt-4">
                                            {loadingAppointments[child.id] ? (
                                                <div className="space-y-4">
                                                    {[1, 2, 3].map((i) => (
                                                        <Skeleton key={i} className="h-24 w-full" />
                                                    ))}
                                                </div>
                                            ) : appointments[child.id]?.length ? (
                                                <div className="space-y-6">
                                                    {Object.entries(groupAppointmentsByDate(appointments[child.id])).map(
                                                        ([dateKey, dateAppointments]) => (
                                                            <div key={dateKey} className="space-y-3">
                                                                <div className="flex items-center gap-2">
                                                                    <CalendarClock className="h-4 w-4 text-blue-600" />
                                                                    <h3 className="font-medium text-blue-800">
                                                                        {format(new Date(dateKey), "EEEE, MMMM d, yyyy")}
                                                                    </h3>
                                                                </div>

                                                                <div className="space-y-3 pl-6">
                                                                    {dateAppointments.map((appointment) => {
                                                                        const isPackage = isPackageAppointment(appointment)

                                                                        return (
                                                                            <div
                                                                                key={appointment.appointmentId}
                                                                                className={`rounded-lg border ${isPackage ? "border-purple-200 bg-purple-50/50" : "border-blue-200 bg-blue-50/50"} p-4`}
                                                                            >
                                                                                <div className="flex flex-col md:flex-row gap-4">
                                                                                    {/* Left side - appointment info */}
                                                                                    <div className="flex-1 space-y-3">
                                                                                        {/* Type and Status */}
                                                                                        <div className="flex flex-wrap items-center gap-2">
                                                                                            <Badge
                                                                                                variant="outline"
                                                                                                className={`${isPackage ? "bg-purple-100 text-purple-800 border-purple-200" : "bg-blue-100 text-blue-800 border-blue-200"}`}
                                                                                            >
                                                                                                {isPackage ? (
                                                                                                    <>
                                                                                                        <Package2 className="h-3 w-3 mr-1" /> Package
                                                                                                    </>
                                                                                                ) : (
                                                                                                    <>
                                                                                                        <Syringe className="h-3 w-3 mr-1" /> Single Vaccine
                                                                                                    </>
                                                                                                )}
                                                                                            </Badge>

                                                                                            <Badge variant="outline" className={getStatusColor(appointment.status)}>
                                                                                                {appointment.status}
                                                                                            </Badge>
                                                                                        </div>

                                                                                        {/* Vaccine Name and Dose */}
                                                                                        <div>
                                                                                            <h4 className="font-medium text-gray-900">{appointment.vaccineName}</h4>
                                                                                            <div className="flex items-center gap-2 mt-1">
                                                                                                <Syringe className="h-3.5 w-3.5 text-gray-500" />
                                                                                                <span className="text-sm text-gray-600">
                                                                                                    Dose {appointment.doseNumber}
                                                                                                    {appointment.notes && (
                                                                                                        <span className="ml-1 text-gray-500">({appointment.notes})</span>
                                                                                                    )}
                                                                                                </span>
                                                                                            </div>
                                                                                        </div>

                                                                                        {/* Time and Price */}
                                                                                        <div className="flex flex-wrap items-center gap-x-6 gap-y-2 text-sm">
                                                                                            <div className="flex items-center gap-1.5">
                                                                                                <Clock className="h-3.5 w-3.5 text-gray-500" />
                                                                                                <span className="text-gray-600">
                                                                                                    {format(new Date(appointment.appointmentDate), "h:mm a")}
                                                                                                </span>
                                                                                            </div>

                                                                                            <div className="flex items-center gap-1.5">
                                                                                                <Banknote className="h-3.5 w-3.5 text-gray-500" />
                                                                                                <span className="font-medium text-gray-900">
                                                                                                    {new Intl.NumberFormat("vi-VN", {
                                                                                                        style: "currency",
                                                                                                        currency: "VND",
                                                                                                    }).format(appointment.totalPrice)}
                                                                                                </span>
                                                                                            </div>
                                                                                        </div>
                                                                                    </div>

                                                                                    {/* Right side - actions */}
                                                                                    <div className="flex items-center">
                                                                                        <Button
                                                                                            variant="outline"
                                                                                            size="sm"
                                                                                            onClick={() => handleViewDetails(appointment.appointmentId)}
                                                                                            className={
                                                                                                isPackage
                                                                                                    ? "border-purple-300 hover:bg-purple-100"
                                                                                                    : "border-blue-300 hover:bg-blue-100"
                                                                                            }
                                                                                        >
                                                                                            <Eye className="h-3.5 w-3.5 mr-1.5" />
                                                                                            View Details
                                                                                        </Button>
                                                                                    </div>
                                                                                </div>
                                                                            </div>
                                                                        )
                                                                    })}
                                                                </div>
                                                            </div>
                                                        ),
                                                    )}
                                                </div>
                                            ) : (
                                                <div className="text-center py-12 bg-gray-50 rounded-lg">
                                                    <Calendar className="h-12 w-12 text-gray-300 mx-auto mb-3" />
                                                    <h3 className="text-lg font-medium text-gray-900">No appointments found</h3>
                                                    <p className="text-gray-500 mt-1">This child doesn't have any scheduled appointments</p>
                                                    <Button
                                                        variant="outline"
                                                        className="mt-4"
                                                        onClick={() => (window.location.href = "/appointment")}
                                                    >
                                                        Book an Appointment
                                                    </Button>
                                                </div>
                                            )}
                                        </CardContent>
                                    </motion.div>
                                )}
                            </AnimatePresence>
                        </Card>
                    ))}
                </div>
            ) : (
                <Card>
                    <CardContent className="text-center py-12">
                        <User className="h-12 w-12 text-gray-300 mx-auto mb-3" />
                        <h3 className="text-lg font-medium text-gray-900">No children found</h3>
                        <p className="text-gray-500 mt-1">Add a child profile to book vaccination appointments</p>
                    </CardContent>
                </Card>
            )}

            <AppointmentDetailDialog
                appointment={selectedAppointment}
                isOpen={isDetailOpen}
                onClose={() => {
                    setIsDetailOpen(false)
                    setSelectedAppointment(null)
                }}
            />
        </div>
    )
}

