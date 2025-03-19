/* eslint-disable @typescript-eslint/no-explicit-any */
"use client"

import { useState, useEffect } from "react"
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { format, parseISO } from "date-fns"
import {
    CalendarIcon,
    Clock,
    FileText,
    Syringe,
    Info,
    Banknote,
    CreditCard,
    Loader2,
    CalendarDays,
    X,
} from "lucide-react"
import { useNavigate } from "react-router-dom"
import { rescheduleAppointment, type AppointmentResponse } from "@/api/appointment"
import { getPaymentCheckoutUrl } from "@/api/payment"
import { useToast } from "@/hooks/use-toast"
import { Label } from "@/components/ui/label"
import { DateInput } from "@heroui/date-input"
import { TimeInput } from "@heroui/date-input"
import { CalendarDate, Time } from "@internationalized/date"

interface AppointmentDetailDialogProps {
    appointment: AppointmentResponse | null
    isOpen: boolean
    onClose: () => void
    onAppointmentUpdated?: () => void
}

export function AppointmentDetailDialog({
    appointment,
    isOpen,
    onClose,
    onAppointmentUpdated,
}: AppointmentDetailDialogProps) {
    console.log("Dialog props:", { appointment, isOpen })

    const navigate = useNavigate()
    const { toast } = useToast()
    const [showPolicyButton, setShowPolicyButton] = useState(false)
    const [isProcessingPayment, setIsProcessingPayment] = useState(false)
    const [isRescheduling, setIsRescheduling] = useState(false)
    const [showRescheduleForm, setShowRescheduleForm] = useState(false)
    const [newDate, setNewDate] = useState<CalendarDate | null>(null)
    const [newTime, setNewTime] = useState<Time | null>(null)
    const [dateError, setDateError] = useState("")
    const [timeError, setTimeError] = useState("")

    // Use effect to set the button visibility after component mounts
    useEffect(() => {
        if (isOpen && appointment) {
            // Small delay to ensure dialog is fully rendered
            const timer = setTimeout(() => {
                setShowPolicyButton(true)
            }, 100)
            return () => clearTimeout(timer)
        } else {
            setShowPolicyButton(false)
            // Reset reschedule form when dialog closes
            setShowRescheduleForm(false)
            setNewDate(null)
            setNewTime(null)
            setDateError("")
            setTimeError("")
        }
    }, [isOpen, appointment])

    // Set default date and time when showing reschedule form
    useEffect(() => {
        if (showRescheduleForm && appointment) {
            const appointmentDate = parseISO(appointment.appointmentDate)

            // Set default date to current appointment date
            setNewDate(
                new CalendarDate(
                    appointmentDate.getFullYear(),
                    appointmentDate.getMonth() + 1, // Month is 0-indexed in JS Date but 1-indexed in CalendarDate
                    appointmentDate.getDate(),
                ),
            )

            // Set default time to current appointment time
            setNewTime(new Time(appointmentDate.getHours(), appointmentDate.getMinutes()))
        }
    }, [showRescheduleForm, appointment])

    if (!appointment) return null

    const getStatusColor = (status: string) => {
        switch (status.toLowerCase()) {
            case "completed":
                return "bg-green-700 text-black-800 border-green-700"
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

    const handleViewPolicies = () => {
        onClose()
        setTimeout(() => {
            navigate("/policies")
        }, 100)
    }

    const handleCheckout = async () => {
        if (!appointment) return

        try {
            setIsProcessingPayment(true)
            const response = await getPaymentCheckoutUrl(appointment.appointmentId)

            if (response.isSuccess) {
                // Redirect to payment page
                window.location.href = response.data
            } else {
                toast({
                    title: "Payment Error",
                    description: response.message || "Failed to get payment link. Please try again.",
                    variant: "destructive",
                })
            }
        } catch (error) {
            console.error("Error getting payment link:", error)
            toast({
                title: "Payment Error",
                description: "An unexpected error occurred. Please try again.",
                variant: "destructive",
            })
        } finally {
            setIsProcessingPayment(false)
        }
    }

    const validateInputs = () => {
        let isValid = true

        // Reset errors
        setDateError("")
        setTimeError("")

        // Validate date
        if (!newDate) {
            setDateError("Date is required")
            isValid = false
        }

        // Validate time
        if (!newTime) {
            setTimeError("Time is required")
            isValid = false
        } else {
            // Check if time is within business hours (6:00 - 18:00)
            const hour = newTime.hour
            if (hour < 6 || hour > 18) {
                setTimeError("Time must be between 6:00 AM and 18:00 PM")
                isValid = false
            }
        }

        return isValid
    }

    const handleReschedule = async () => {
        if (!appointment) return

        if (!validateInputs()) {
            return
        }

        try {
            setIsRescheduling(true)

            // Format date and time for API
            const year = newDate!.year
            const month = newDate!.month.toString().padStart(2, "0")
            const day = newDate!.day.toString().padStart(2, "0")
            const hour = newTime!.hour.toString().padStart(2, "0")
            const minute = newTime!.minute.toString().padStart(2, "0")

            // Create ISO string format: YYYY-MM-DDThh:mm:00
            const dateTimeString = `${year}-${month}-${day}T${hour}:${minute}:00`

            const response = await rescheduleAppointment(appointment.appointmentId, dateTimeString)

            if (response.isSuccess) {
                toast({
                    title: "Appointment Rescheduled",
                    description: response.message || "Your appointment has been successfully rescheduled.",
                    variant: "success",
                })

                // Reset form and close it
                setShowRescheduleForm(false)
                setNewDate(null)
                setNewTime(null)

                // Refresh appointment data
                if (onAppointmentUpdated) {
                    onAppointmentUpdated()
                }

                // Close the dialog
                onClose()
            } else {
                toast({
                    title: "Rescheduling Failed",
                    description: response.message || "Failed to reschedule appointment. Please try again.",
                    variant: "destructive",
                })
            }
        } catch (error: any) {
            console.error("Error rescheduling appointment:", error)
            toast({
                title: "Rescheduling Error",
                description: error?.response?.data?.message || "An unexpected error occurred. Please try again.",
                variant: "destructive",
            })
        } finally {
            setIsRescheduling(false)
        }
    }

    // Parse the ISO date string
    const appointmentDate = parseISO(appointment.appointmentDate)

    // Determine if appointment can be rescheduled
    // Can reschedule if status is Confirmed or Pending, but not if Completed or Cancelled
    const canReschedule = ["confirmed", "pending"].includes(appointment.status.toLowerCase())

    return (
        <Dialog open={isOpen} onOpenChange={(open) => !open && onClose()}>
            <DialogContent className="sm:max-w-[500px] flex flex-col">
                <DialogHeader>
                    <DialogTitle className="text-xl font-semibold">Appointment Details</DialogTitle>
                </DialogHeader>

                {/* Main Content */}
                <div className="flex-1 overflow-auto">
                    {/* Status Badge */}
                    <div className="flex justify-center mb-6">
                        <Badge variant="outline" className={`px-4 py-1 text-sm ${getStatusColor(appointment.status)}`}>
                            {appointment.status}
                        </Badge>
                    </div>

                    {showRescheduleForm ? (
                        <div className="space-y-4 mb-6">
                            <div className="flex justify-between items-center">
                                <h3 className="font-medium">Reschedule Appointment</h3>
                                <Button variant="ghost" size="icon" onClick={() => setShowRescheduleForm(false)} className="h-8 w-8">
                                    <X className="h-4 w-4" />
                                </Button>
                            </div>

                            <div className="space-y-4 p-4 bg-blue-50 rounded-lg">
                                {/* Current appointment info */}
                                <div className="p-3 bg-white rounded-lg border border-blue-100">
                                    <p className="text-sm font-medium text-blue-800">Current Appointment</p>
                                    <div className="flex items-center gap-2 mt-1 text-sm">
                                        <CalendarIcon className="h-3.5 w-3.5 text-gray-500" />
                                        <span>{format(appointmentDate, "EEEE, MMMM d, yyyy")}</span>
                                    </div>
                                    <div className="flex items-center gap-2 mt-1 text-sm">
                                        <Clock className="h-3.5 w-3.5 text-gray-500" />
                                        <span>{format(appointmentDate, "h:mm a")}</span>
                                    </div>
                                </div>

                                <div className="space-y-2">
                                    <Label htmlFor="date">New Date</Label>
                                    <DateInput
                                        id="date"
                                        className="w-full"
                                        value={newDate || undefined}
                                        onChange={setNewDate}
                                        isInvalid={!!dateError}
                                    />
                                    {dateError && <p className="text-xs text-red-500 mt-1">{dateError}</p>}
                                </div>

                                <div className="space-y-2">
                                    <Label htmlFor="time">New Time</Label>
                                    <TimeInput
                                        id="time"
                                        className="w-full"
                                        value={newTime || undefined}
                                        onChange={setNewTime}
                                        isInvalid={!!timeError}
                                    />
                                    {timeError && <p className="text-xs text-red-500 mt-1">{timeError}</p>}
                                    <p className="text-xs text-gray-500 mt-1">Business hours: 8:00 AM - 6:00 PM</p>
                                </div>
                            </div>

                            <div className="flex justify-end gap-2 mt-4">
                                <Button variant="outline" onClick={() => setShowRescheduleForm(false)} disabled={isRescheduling}>
                                    Cancel
                                </Button>
                                <Button onClick={handleReschedule} disabled={isRescheduling} className="bg-blue-600 hover:bg-blue-700">
                                    {isRescheduling ? (
                                        <>
                                            <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                                            Processing...
                                        </>
                                    ) : (
                                        "Confirm Reschedule"
                                    )}
                                </Button>
                            </div>
                        </div>
                    ) : (
                        <div className="space-y-4 mb-6">
                            {/* Date & Time */}
                            <div className="flex items-start gap-3 p-3 bg-gray-50 rounded-lg">
                                <CalendarIcon className="h-5 w-5 text-gray-500 mt-0.5" />
                                <div>
                                    <p className="font-medium">Appointment Date</p>
                                    <p className="text-sm text-gray-600">{format(appointmentDate, "EEEE, MMMM d, yyyy")}</p>
                                    <div className="flex items-center gap-2 mt-1 text-sm text-gray-600">
                                        <Clock className="h-4 w-4" />
                                        {format(appointmentDate, "h:mm a")}
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
                                <Banknote className="h-5 w-5 text-gray-500 mt-0.5" />
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
                    )}
                </div>

                {/* Action Buttons */}
                <div className="space-y-4 mt-4 pt-4 border-t border-gray-200">
                    {/* Buttons only shown when not in reschedule mode */}
                    {!showRescheduleForm && (
                        <>
                            {/* Checkout Button - Only show for pending appointments */}
                            {appointment.status.toLowerCase() === "pending" && (
                                <Button
                                    onClick={handleCheckout}
                                    disabled={isProcessingPayment}
                                    className="w-full bg-green-600 hover:bg-green-700 text-white"
                                >
                                    {isProcessingPayment ? (
                                        <>
                                            <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                                            Processing...
                                        </>
                                    ) : (
                                        <>
                                            <CreditCard className="mr-2 h-4 w-4" />
                                            Proceed to Payment
                                        </>
                                    )}
                                </Button>
                            )}

                            {/* Reschedule Button - Show for confirmed and pending appointments */}
                            {canReschedule && (
                                <Button
                                    variant="outline"
                                    onClick={() => setShowRescheduleForm(true)}
                                    className="w-full border-blue-200 hover:bg-blue-50"
                                >
                                    <CalendarDays className="mr-2 h-4 w-4 text-blue-600" />
                                    Reschedule Appointment
                                </Button>
                            )}

                            {/* Policy Button */}
                            {showPolicyButton && (
                                <Button
                                    variant="outline"
                                    onClick={handleViewPolicies}
                                    className="w-full flex items-center justify-center gap-2"
                                >
                                    <Info className="h-4 w-4" />
                                    View Cancellation & Rescheduling Policies
                                </Button>
                            )}
                        </>
                    )}
                </div>
            </DialogContent>
        </Dialog>
    )
}

