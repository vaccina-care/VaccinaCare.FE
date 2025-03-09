/* eslint-disable @typescript-eslint/no-explicit-any */
"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Separator } from "@/components/ui/separator"
import { format } from "date-fns"
import {
    ArrowLeft,
    ArrowRight,
    Calendar,
    CheckCircle,
    Clock,
    Edit,
    Loader2,
    User,
    FileText,
    Syringe,
    Package2,
} from "lucide-react"
import { useAppointmentContext } from "@/contexts/AppointmentContext"
import { useToast } from "@/hooks/use-toast"
import { bookSingleVaccine } from "@/api/appointment"
import { getPaymentCheckoutUrl } from "@/api/payment"
import { motion } from "framer-motion"

interface AppointmentConfirmationProps {
    onBack: () => void
    vaccineDetails?: any // Replace with proper type
    packageDetails?: any // Replace with proper type
    childDetails?: any // Replace with proper type
}

export function AppointmentConfirmation({
    onBack,
    vaccineDetails,
    packageDetails,
    childDetails,
}: AppointmentConfirmationProps) {
    const [isProcessing, setIsProcessing] = useState(false)
    const { toast } = useToast()
    const {
        selectedChild,
        appointmentDate,
        appointmentTime,
        notes,
        serviceType,
        selectedVaccine,
        resetAppointmentState,
    } = useAppointmentContext()

    const handleConfirmAppointment = async () => {
        if (!appointmentDate || !appointmentTime || !selectedChild) {
            toast({
                title: "Missing information",
                description: "Please ensure all required fields are filled",
                variant: "destructive",
            })
            return
        }

        try {
            setIsProcessing(true)

            // Format date and time for API
            const timeObj = new Date()
            const [hours, minutes] = appointmentTime.split(":").map(Number)
            timeObj.setHours(hours)
            timeObj.setMinutes(minutes)

            const appointmentDateTime = new Date(appointmentDate)
            appointmentDateTime.setHours(timeObj.getHours())
            appointmentDateTime.setMinutes(timeObj.getMinutes())

            const formattedDate = appointmentDateTime.toISOString()

            if (serviceType === "single") {
                // Book single vaccine appointment
                const bookingData = {
                    vaccineId: selectedVaccine,
                    childId: selectedChild,
                    startDate: formattedDate,
                    notes: notes || undefined,
                }

                const response = await bookSingleVaccine(bookingData)

                if (response.isSuccess && response.data.length > 0) {
                    // Get the first appointment ID (there should be only one for single vaccine)
                    const appointmentId = response.data[0].appointmentId

                    // Get payment checkout URL
                    const paymentResponse = await getPaymentCheckoutUrl(appointmentId)

                    if (paymentResponse.isSuccess) {
                        // Reset state before redirecting
                        resetAppointmentState()

                        // Redirect to payment page
                        window.location.href = paymentResponse.data
                    } else {
                        toast({
                            title: "Payment Error",
                            description: "Failed to get payment link. Please try again.",
                            variant: "destructive",
                        })
                        setIsProcessing(false)
                    }
                } else {
                    toast({
                        title: "Booking Error",
                        description: "Failed to book appointment. Please try again.",
                        variant: "destructive",
                    })
                    setIsProcessing(false)
                }
            } else {
                // Package booking implementation
                toast({
                    title: "Not Implemented",
                    description: "Package booking is not available yet.",
                    variant: "destructive",
                })
                setIsProcessing(false)
            }
        } catch (error) {
            console.error("Error booking appointment:", error)
            toast({
                title: "Booking Error",
                description: "An unexpected error occurred. Please try again.",
                variant: "destructive",
            })
            setIsProcessing(false)
        }
    }

    // Format price with VND currency
    const formatPrice = (price: number) => {
        return new Intl.NumberFormat("vi-VN", {
            style: "currency",
            currency: "VND",
        }).format(price)
    }

    return (
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3 }}
            className="space-y-6"
        >
            <div className="w-full bg-gray-50">
                <div className="max-w-[800px] mx-auto py-4">
                    <h1 className="text-2xl font-bold text-center text-[#204d94]">CONFIRM YOUR APPOINTMENT</h1>
                </div>
            </div>

            <div className="max-w-[800px] mx-auto">
                <Card className="border-2 border-blue-100">
                    <CardHeader className="bg-gradient-to-r from-blue-50 to-white">
                        <div className="flex items-center justify-between">
                            <CardTitle className="text-xl text-[#204d94] flex items-center">
                                <CheckCircle className="mr-2 h-5 w-5 text-green-500" />
                                Appointment Summary
                            </CardTitle>
                            <Button variant="outline" size="sm" onClick={onBack} disabled={isProcessing}>
                                <Edit className="mr-2 h-4 w-4" />
                                Edit Details
                            </Button>
                        </div>
                    </CardHeader>

                    <CardContent className="p-6 space-y-6">
                        {/* Patient Information */}
                        <div className="space-y-4">
                            <h3 className="font-semibold text-[#204d94] flex items-center">
                                <User className="mr-2 h-5 w-5" />
                                Patient Information
                            </h3>
                            <div className="bg-blue-50/50 rounded-lg p-4">
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                    <div>
                                        <p className="text-sm text-gray-500">Patient Name</p>
                                        <p className="font-medium">{childDetails?.fullName || "Not specified"}</p>
                                    </div>
                                    <div>
                                        <p className="text-sm text-gray-500">Date of Birth</p>
                                        <p className="font-medium">
                                            {childDetails?.dateOfBirth
                                                ? format(new Date(childDetails.dateOfBirth), "MMMM d, yyyy")
                                                : "Not specified"}
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <Separator />

                        {/* Appointment Details */}
                        <div className="space-y-4">
                            <h3 className="font-semibold text-[#204d94] flex items-center">
                                <Calendar className="mr-2 h-5 w-5" />
                                Appointment Details
                            </h3>
                            <div className="bg-blue-50/50 rounded-lg p-4">
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                    <div>
                                        <p className="text-sm text-gray-500">Date</p>
                                        <p className="font-medium flex items-center">
                                            <Calendar className="mr-2 h-4 w-4 text-gray-400" />
                                            {appointmentDate ? format(appointmentDate, "EEEE, MMMM d, yyyy") : "Not specified"}
                                        </p>
                                    </div>
                                    <div>
                                        <p className="text-sm text-gray-500">Time</p>
                                        <p className="font-medium flex items-center">
                                            <Clock className="mr-2 h-4 w-4 text-gray-400" />
                                            {appointmentTime || "Not specified"}
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <Separator />

                        {/* Service Details */}
                        <div className="space-y-4">
                            <h3 className="font-semibold text-[#204d94] flex items-center">
                                {serviceType === "single" ? (
                                    <Syringe className="mr-2 h-5 w-5" />
                                ) : (
                                    <Package2 className="mr-2 h-5 w-5" />
                                )}
                                {serviceType === "single" ? "Vaccine Details" : "Package Details"}
                            </h3>
                            <div className="bg-blue-50/50 rounded-lg p-4">
                                {serviceType === "single" && vaccineDetails ? (
                                    <div className="space-y-4">
                                        <div className="flex items-center gap-4">
                                            {vaccineDetails.picUrl ? (
                                                <img
                                                    src={vaccineDetails.picUrl || "/placeholder.svg"}
                                                    alt={vaccineDetails.vaccineName}
                                                    className="w-16 h-16 object-cover rounded-md border"
                                                />
                                            ) : (
                                                <div className="w-16 h-16 bg-gray-100 rounded-md flex items-center justify-center">
                                                    <Syringe className="h-8 w-8 text-gray-400" />
                                                </div>
                                            )}
                                            <div>
                                                <h4 className="font-medium">{vaccineDetails.vaccineName}</h4>
                                                <p className="text-sm text-gray-500">{vaccineDetails.type}</p>
                                            </div>
                                        </div>
                                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                            <div>
                                                <p className="text-sm text-gray-500">Price per Dose</p>
                                                <p className="font-medium text-blue-600">{formatPrice(vaccineDetails.price)}</p>
                                            </div>
                                            <div>
                                                <p className="text-sm text-gray-500">Required Doses</p>
                                                <p className="font-medium">{vaccineDetails.requiredDoses}</p>
                                            </div>
                                        </div>
                                        <div>
                                            <p className="text-sm text-gray-500">Description</p>
                                            <p className="text-sm">{vaccineDetails.description}</p>
                                        </div>
                                    </div>
                                ) : serviceType === "package" && packageDetails ? (
                                    <div className="space-y-4">
                                        <h4 className="font-medium">{packageDetails.packageName}</h4>
                                        <div>
                                            <p className="text-sm text-gray-500">Price</p>
                                            <p className="font-medium text-blue-600">{formatPrice(packageDetails.price)}</p>
                                        </div>
                                        <div>
                                            <p className="text-sm text-gray-500">Description</p>
                                            <p className="text-sm">{packageDetails.description}</p>
                                        </div>
                                        <div>
                                            <p className="text-sm text-gray-500">Included Vaccines</p>
                                            <p className="text-sm">{packageDetails.vaccineDetails?.length || 0} vaccines</p>
                                        </div>
                                    </div>
                                ) : (
                                    <p className="text-gray-500">No service selected</p>
                                )}
                            </div>
                        </div>

                        {/* Notes */}
                        {notes && (
                            <>
                                <Separator />
                                <div className="space-y-4">
                                    <h3 className="font-semibold text-[#204d94] flex items-center">
                                        <FileText className="mr-2 h-5 w-5" />
                                        Additional Notes
                                    </h3>
                                    <div className="bg-blue-50/50 rounded-lg p-4">
                                        <p className="text-sm">{notes}</p>
                                    </div>
                                </div>
                            </>
                        )}
                    </CardContent>

                    <CardFooter className="flex flex-col sm:flex-row gap-4 justify-between p-6 bg-gray-50">
                        <Button variant="outline" onClick={onBack} disabled={isProcessing} className="w-full sm:w-auto">
                            <ArrowLeft className="mr-2 h-4 w-4" />
                            Back
                        </Button>
                        <Button
                            onClick={handleConfirmAppointment}
                            disabled={isProcessing}
                            className="w-full sm:w-auto bg-[#1e1b4b] hover:bg-[#1e1b4b]/90"
                        >
                            {isProcessing ? (
                                <>
                                    <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                                    Processing...
                                </>
                            ) : (
                                <>
                                    Proceed to Payment
                                    <ArrowRight className="ml-2 h-4 w-4" />
                                </>
                            )}
                        </Button>
                    </CardFooter>
                </Card>
            </div>
        </motion.div>
    )
}

