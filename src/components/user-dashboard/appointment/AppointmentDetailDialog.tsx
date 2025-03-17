"use client"

import { useState, useEffect } from "react"
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { format, parseISO } from "date-fns"
import { Calendar, Clock, FileText, Syringe, Info, Banknote, CreditCard, Loader2 } from "lucide-react"
import { useNavigate } from "react-router-dom"
import type { AppointmentResponse } from "@/api/appointment"
import { getPaymentCheckoutUrl } from "@/api/payment"
import { useToast } from "@/hooks/use-toast"

interface AppointmentDetailDialogProps {
    appointment: AppointmentResponse | null
    isOpen: boolean
    onClose: () => void
}

export function AppointmentDetailDialog({ appointment, isOpen, onClose }: AppointmentDetailDialogProps) {
    const navigate = useNavigate()
    const { toast } = useToast()
    const [showPolicyButton, setShowPolicyButton] = useState(false)
    const [isProcessingPayment, setIsProcessingPayment] = useState(false)

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
        }
    }, [isOpen, appointment])

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
                    description: "Failed to get payment link. Please try again.",
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

    // Parse the ISO date string
    const appointmentDate = parseISO(appointment.appointmentDate)

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

                    {/* Appointment Info */}
                    <div className="space-y-4 mb-6">
                        {/* Date & Time */}
                        <div className="flex items-start gap-3 p-3 bg-gray-50 rounded-lg">
                            <Calendar className="h-5 w-5 text-gray-500 mt-0.5" />
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
                </div>

                {/* Action Buttons */}
                <div className="space-y-4 mt-4 pt-4 border-t border-gray-200">
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
                </div>
            </DialogContent>
        </Dialog>
    )
}

