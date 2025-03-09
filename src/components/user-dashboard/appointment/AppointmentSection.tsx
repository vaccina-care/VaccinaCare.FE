"use client"

import { useEffect, useState } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Badge } from "@/components/ui/badge"
import { Calendar, Clock, DollarSign, Eye } from "lucide-react"
import { Button } from "@/components/ui/button"
import { format } from "date-fns"
import { getChildAppointments, getAppointmentDetails, type AppointmentResponse } from "@/api/appointment"
import { getChildren, type ChildData } from "@/api/children"
import { AppointmentDetailDialog } from "@/components/user-dashboard/appointment/AppointmentDetailDialog"
import { useToast } from "@/hooks/use-toast"

export default function AppointmentsSection() {
    const [children, setChildren] = useState<ChildData[]>([])
    const [appointments, setAppointments] = useState<Record<string, AppointmentResponse[]>>({})
    const [selectedChild, setSelectedChild] = useState<string>("")
    const [selectedAppointment, setSelectedAppointment] = useState<AppointmentResponse | null>(null)
    const [isDetailOpen, setIsDetailOpen] = useState(false)
    const [isLoading, setIsLoading] = useState(true)
    const { toast } = useToast()

    // Fetch children data
    useEffect(() => {
        const fetchChildren = async () => {
            try {
                const childrenData = await getChildren()
                setChildren(childrenData)
                if (childrenData.length > 0) {
                    setSelectedChild(childrenData[0].id)
                }
            } catch (error) {
                console.error("Failed to fetch children:", error)
                toast({
                    title: "Error",
                    description: "Failed to load children data",
                    variant: "destructive",
                })
            }
        }

        fetchChildren()
    }, [toast])

    // Fetch appointments for selected child
    useEffect(() => {
        const fetchAppointments = async () => {
            if (!selectedChild) return

            try {
                setIsLoading(true)
                const response = await getChildAppointments(selectedChild)
                if (response.isSuccess) {
                    setAppointments((prev) => ({
                        ...prev,
                        [selectedChild]: response.data,
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
                setIsLoading(false)
            }
        }

        if (selectedChild && !appointments[selectedChild]) {
            fetchAppointments()
        } else {
            setIsLoading(false)
        }
    }, [selectedChild, appointments, toast])

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

    const getStatusColor = (status: string) => {
        switch (status.toLowerCase()) {
            case "confirmed":
                return "bg-green-100 text-green-800"
            case "pending":
                return "bg-yellow-100 text-yellow-800"
            case "cancelled":
                return "bg-red-100 text-red-800"
            default:
                return "bg-gray-100 text-gray-800"
        }
    }

    return (
        <div className="space-y-6">
            <div>
                <h2 className="text-2xl font-bold tracking-tight">Appointments</h2>
                <p className="text-muted-foreground">View and manage your children's vaccination appointments.</p>
            </div>

            <Tabs defaultValue={children[0]?.id} value={selectedChild} onValueChange={setSelectedChild}>
                <TabsList className="w-full justify-start">
                    {children.map((child) => (
                        <TabsTrigger key={child.id} value={child.id} className="flex-1">
                            {child.fullName}
                        </TabsTrigger>
                    ))}
                </TabsList>

                {children.map((child) => (
                    <TabsContent key={child.id} value={child.id}>
                        <Card>
                            <CardHeader>
                                <CardTitle>Appointments for {child.fullName}</CardTitle>
                            </CardHeader>
                            <CardContent>
                                {isLoading ? (
                                    <div className="space-y-4">
                                        {[1, 2, 3].map((i) => (
                                            <div key={i} className="animate-pulse">
                                                <div className="h-24 bg-gray-100 rounded-lg" />
                                            </div>
                                        ))}
                                    </div>
                                ) : appointments[child.id]?.length ? (
                                    <div className="space-y-4">
                                        {appointments[child.id].map((appointment) => (
                                            <div
                                                key={appointment.appointmentId}
                                                className="flex flex-col md:flex-row items-start md:items-center justify-between gap-4 p-4 bg-gray-50 rounded-lg"
                                            >
                                                <div className="flex-1 space-y-4 md:space-y-0 md:flex md:items-center md:gap-6">
                                                    {/* Status */}
                                                    <Badge variant="secondary" className={`${getStatusColor(appointment.status)}`}>
                                                        {appointment.status}
                                                    </Badge>

                                                    {/* Date & Time */}
                                                    <div className="flex items-center gap-2">
                                                        <Calendar className="h-4 w-4 text-gray-500" />
                                                        <span className="text-sm">
                                                            {format(new Date(appointment.appointmentDate), "MMM d, yyyy")}
                                                        </span>
                                                        <Clock className="h-4 w-4 text-gray-500 ml-2" />
                                                        <span className="text-sm">{format(new Date(appointment.appointmentDate), "h:mm a")}</span>
                                                    </div>

                                                    {/* Vaccine Info */}
                                                    <div className="text-sm">
                                                        <span className="font-medium">{appointment.vaccineName}</span>
                                                        <span className="text-gray-500 ml-2">Dose {appointment.doseNumber}</span>
                                                    </div>

                                                    {/* Price */}
                                                    <div className="flex items-center gap-2">
                                                        <DollarSign className="h-4 w-4 text-gray-500" />
                                                        <span className="text-sm font-medium">
                                                            {new Intl.NumberFormat("vi-VN", {
                                                                style: "currency",
                                                                currency: "VND",
                                                            }).format(appointment.totalPrice)}
                                                        </span>
                                                    </div>
                                                </div>

                                                {/* Actions */}
                                                <Button
                                                    variant="outline"
                                                    size="sm"
                                                    onClick={() => handleViewDetails(appointment.appointmentId)}
                                                >
                                                    <Eye className="h-4 w-4 mr-2" />
                                                    View Details
                                                </Button>
                                            </div>
                                        ))}
                                    </div>
                                ) : (
                                    <div className="text-center py-8 text-gray-500">No appointments found</div>
                                )}
                            </CardContent>
                        </Card>
                    </TabsContent>
                ))}
            </Tabs>

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

