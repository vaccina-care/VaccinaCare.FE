"use client"

import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog"
import { Badge } from "@/components/ui/badge"
import { format } from "date-fns"
import { Calendar, Clock, DollarSign, FileText, Syringe } from "lucide-react"
import type { AppointmentResponse } from "@/api/appointment"

interface AppointmentDetailDialogProps {
    appointment: AppointmentResponse | null
    isOpen: boolean
    onClose: () => void
}

export function AppointmentDetailDialog({ appointment, isOpen, onClose }: AppointmentDetailDialogProps) {
    if (!appointment) return null

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

    return (
        <Dialog open={isOpen} onOpenChange={(open) => !open && onClose()}>
            <DialogContent className="sm:max-w-[500px]">
                <DialogHeader>
                    <DialogTitle className="text-xl font-semibold">Appointment Details</DialogTitle>
                </DialogHeader>
                <div className="space-y-6">
                    {/* Status Badge */}
                    <div className="flex justify-center">
                        <Badge variant="outline" className={`px-4 py-1 text-sm ${getStatusColor(appointment.status)}`}>
                            {appointment.status}
                        </Badge>
                    </div>

                    {/* Appointment Info */}
                    <div className="space-y-4">
                        {/* Date & Time */}
                        <div className="flex items-start gap-3 p-3 bg-gray-50 rounded-lg">
                            <Calendar className="h-5 w-5 text-gray-500 mt-0.5" />
                            <div>
                                <p className="font-medium">Appointment Date</p>
                                <p className="text-sm text-gray-600">
                                    {format(new Date(appointment.appointmentDate), "EEEE, MMMM d, yyyy")}
                                </p>
                                <div className="flex items-center gap-2 mt-1 text-sm text-gray-600">
                                    <Clock className="h-4 w-4" />
                                    {format(new Date(appointment.appointmentDate), "h:mm a")}
                                </div>
                            </div>
                        </div>

                        {/* Vaccine Info */}
                        <div className="flex items-start gap-3 p-3 bg-gray-50 rounded-lg">
                            <Syringe className="h-5 w-5 text-gray-500 mt-0.5" />
                            <div>
                                <p className="font-medium">Vaccine</p>
                                <p className="text-sm text-gray-600">{appointment.vaccineName}</p>
                                <p className="text-sm text-gray-600">Dose {appointment.doseNumber}</p>
                            </div>
                        </div>

                        {/* Price */}
                        <div className="flex items-start gap-3 p-3 bg-gray-50 rounded-lg">
                            <DollarSign className="h-5 w-5 text-gray-500 mt-0.5" />
                            <div>
                                <p className="font-medium">Total Price</p>
                                <p className="text-sm text-gray-600">
                                    {new Intl.NumberFormat("vi-VN", {
                                        style: "currency",
                                        currency: "VND",
                                    }).format(appointment.totalPrice)}
                                </p>
                            </div>
                        </div>

                        {/* Notes */}
                        {appointment.notes && (
                            <div className="flex items-start gap-3 p-3 bg-gray-50 rounded-lg">
                                <FileText className="h-5 w-5 text-gray-500 mt-0.5" />
                                <div>
                                    <p className="font-medium">Notes</p>
                                    <p className="text-sm text-gray-600">{appointment.notes}</p>
                                </div>
                            </div>
                        )}
                    </div>
                </div>
            </DialogContent>
        </Dialog>
    )
}

