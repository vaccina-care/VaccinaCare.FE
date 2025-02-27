"use client"

import { useEffect, useState } from "react"
import { useParams, useNavigate, Link } from "react-router-dom"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert"
import { Badge } from "@/components/ui/badge"
import {
    ArrowLeft,
    Syringe,
    Calendar,
    AlertTriangle,
    Pill,
    HeartPulse,
    Droplets,
    Clock,
    Ban,
    ShieldAlert,
    Info,
} from "lucide-react"
import { getVaccineById, type VaccineDetail } from "@/api/vaccine"

export default function VaccineDetail() {
    const { id } = useParams<{ id: string }>()
    const navigate = useNavigate()
    const [vaccine, setVaccine] = useState<VaccineDetail | null>(null)
    const [isLoading, setIsLoading] = useState(true)

    useEffect(() => {
        const fetchVaccine = async () => {
            if (!id) return
            try {
                const data = await getVaccineById(id)
                setVaccine(data as VaccineDetail)
            } catch (error) {
                console.error("Error fetching vaccine:", error)
            } finally {
                setIsLoading(false)
            }
        }

        fetchVaccine()
    }, [id])

    if (isLoading) {
        return (
            <div className="container mx-auto py-8 px-4">
                <div className="animate-pulse space-y-8">
                    <div className="h-8 bg-gray-200 rounded w-1/4" />
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                        <div className="space-y-4">
                            <div className="h-4 bg-gray-200 rounded w-3/4" />
                            <div className="h-4 bg-gray-200 rounded w-full" />
                            <div className="h-4 bg-gray-200 rounded w-2/3" />
                        </div>
                        <div className="h-64 bg-gray-200 rounded" />
                    </div>
                    <div className="h-96 bg-gray-200 rounded" />
                </div>
            </div>
        )
    }

    if (!vaccine) {
        return (
            <div className="container mx-auto py-8 px-4">
                <div className="text-center">
                    <p className="text-xl text-gray-600">Vaccine not found</p>
                    <Button onClick={() => navigate(-1)} className="mt-4">
                        <ArrowLeft className="mr-2 h-4 w-4" /> Go Back
                    </Button>
                </div>
            </div>
        )
    }

    return (
        <div className="min-h-screen bg-gray-50">
            <div className="container mx-auto py-8 px-4">
                {/* Back Button */}
                <Button variant="ghost" onClick={() => navigate(-1)} className="mb-8 hover:bg-gray-100">
                    <ArrowLeft className="mr-2 h-4 w-4" /> Back to Vaccine List
                </Button>

                {/* Top Section */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
                    {/* Description */}
                    <div className="prose max-w-none">
                        <div className="flex items-center gap-4 mb-4">
                            <h1 className="text-3xl font-bold text-[#1e1b4b] m-0">{vaccine.vaccineName}</h1>
                            <Badge variant="secondary" className="h-fit">
                                {vaccine.type}
                            </Badge>
                        </div>
                        <p className="text-gray-600 mb-4">
                            Vaccine {vaccine.vaccineName} helps prevent {vaccine.description}, strengthens the immune system, and reduces the risk of infection.
                            It is recommended for children, with {vaccine.requiredDoses} doses, each spaced 10 days apart.
                        </p>
                        <p className="text-gray-600">
                            Post-vaccination reactions may include mild pain, fever, or fatigue, with severe complications being rare.
                            Book an appointment now to protect your health!
                        </p>

                        {/* Warnings Section */}
                        {(vaccine.avoidChronic ||
                            vaccine.avoidAllergy ||
                            vaccine.hasDrugInteraction ||
                            vaccine.hasSpecialWarning) && (
                                <Alert variant="destructive" className="mt-4">
                                    <AlertTriangle className="h-4 w-4" />
                                    <AlertTitle>Important Warnings</AlertTitle>
                                    <AlertDescription>
                                        This vaccine has special considerations. Please consult with your healthcare provider.
                                    </AlertDescription>
                                </Alert>
                            )}
                    </div>

                    {/* Image */}
                    <div className="relative h-[300px] rounded-lg overflow-hidden bg-white shadow-lg">
                        <img
                            src={vaccine.picUrl || "/placeholder.svg?height=300&width=400"}
                            alt={vaccine.vaccineName}
                            className="w-full h-full object-contain"
                        />
                    </div>
                </div>

                {/* Bottom Cards */}
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
                    {/* Main Information Card */}
                    <Card className="lg:col-span-2">
                        <CardContent className="p-6">
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                {/* Dosage Information */}
                                <div className="space-y-4">
                                    <h2 className="text-xl font-semibold flex items-center gap-2">
                                        <Syringe className="h-5 w-5" />
                                        Dosage Information
                                    </h2>
                                    <div className="space-y-3">
                                        <div className="flex items-start gap-2">
                                            <Calendar className="h-4 w-4 mt-1 text-gray-500" />
                                            <div>
                                                <p className="font-medium">Required Doses</p>
                                                <p className="text-sm text-gray-600">{vaccine.requiredDoses} dose(s)</p>
                                            </div>
                                        </div>
                                        <div className="flex items-start gap-2">
                                            <Clock className="h-4 w-4 mt-1 text-gray-500" />
                                            <div>
                                                <p className="font-medium">Interval Between Doses</p>
                                                <p className="text-sm text-gray-600">{vaccine.doseIntervalDays} days</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                {/* Medical Considerations */}
                                <div className="space-y-4">
                                    <h2 className="text-xl font-semibold flex items-center gap-2">
                                        <HeartPulse className="h-5 w-5" />
                                        Medical Considerations
                                    </h2>
                                    <div className="space-y-3">
                                        <div className="flex items-start gap-2">
                                            <Droplets className="h-4 w-4 mt-1 text-gray-500" />
                                            <div>
                                                <p className="font-medium">Blood Type Compatibility</p>
                                                <p className="text-sm text-gray-600">{vaccine.forBloodType || "All blood types"}</p>
                                            </div>
                                        </div>
                                        {vaccine.avoidChronic && (
                                            <div className="flex items-start gap-2">
                                                <Ban className="h-4 w-4 mt-1 text-red-500" />
                                                <div>
                                                    <p className="font-medium text-red-600">Chronic Conditions</p>
                                                    <p className="text-sm text-gray-600">May be contraindicated for chronic conditions</p>
                                                </div>
                                            </div>
                                        )}
                                        {vaccine.avoidAllergy && (
                                            <div className="flex items-start gap-2">
                                                <AlertTriangle className="h-4 w-4 mt-1 text-red-500" />
                                                <div>
                                                    <p className="font-medium text-red-600">Allergy Warning</p>
                                                    <p className="text-sm text-gray-600">May cause allergic reactions</p>
                                                </div>
                                            </div>
                                        )}
                                        {vaccine.hasDrugInteraction && (
                                            <div className="flex items-start gap-2">
                                                <Pill className="h-4 w-4 mt-1 text-amber-500" />
                                                <div>
                                                    <p className="font-medium text-amber-600">Drug Interactions</p>
                                                    <p className="text-sm text-gray-600">May interact with other medications</p>
                                                </div>
                                            </div>
                                        )}
                                    </div>
                                </div>
                            </div>

                            {/* Special Warnings */}
                            {vaccine.hasSpecialWarning && (
                                <div className="mt-6 p-4 bg-amber-50 rounded-lg border border-amber-200">
                                    <div className="flex items-center gap-2 text-amber-800">
                                        <ShieldAlert className="h-5 w-5" />
                                        <h3 className="font-semibold">Special Warnings</h3>
                                    </div>
                                    <p className="mt-2 text-sm text-amber-700">
                                        This vaccine requires special medical consideration. Please consult with your healthcare provider
                                        before proceeding.
                                    </p>
                                </div>
                            )}
                        </CardContent>
                    </Card>

                    {/* Pricing and Booking Card */}
                    <Card>
                        <CardContent className="p-6">
                            <div className="space-y-6">
                                <div className="bg-blue-50 p-6 rounded-lg">
                                    <h3 className="text-lg font-semibold text-blue-900 mb-2">Price per Dose</h3>
                                    <div className="flex items-baseline space-x-2">
                                        <span className="text-3xl font-bold text-blue-600">
                                            {new Intl.NumberFormat("vi-VN", {
                                                style: "currency",
                                                currency: "VND",
                                            }).format(vaccine.price)}
                                        </span>
                                        <span className="text-sm text-blue-600">/dose</span>
                                    </div>
                                    <p className="text-sm text-blue-600 mt-2">
                                        Total for {vaccine.requiredDoses} doses:{" "}
                                        {new Intl.NumberFormat("vi-VN", {
                                            style: "currency",
                                            currency: "VND",
                                        }).format(vaccine.price * vaccine.requiredDoses)}
                                    </p>
                                </div>

                                <div className="space-y-4">
                                    <div className="flex items-start gap-2 text-gray-600">
                                        <Info className="h-4 w-4 mt-1" />
                                        <p className="text-sm">
                                            Schedule includes {vaccine.requiredDoses} doses with {vaccine.doseIntervalDays} days between each
                                            dose
                                        </p>
                                    </div>

                                    <Button size="lg" className="w-full bg-[#1e1b4b] hover:bg-[#1e1b4b]/90">
                                        <Syringe className="mr-2 h-5 w-5" />
                                        <Link to="/appointments">Book Appointment</Link>
                                    </Button>
                                </div>
                            </div>
                        </CardContent>
                    </Card>
                </div>
            </div>
        </div>
    )
}

