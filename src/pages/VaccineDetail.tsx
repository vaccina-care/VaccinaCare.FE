"use client"

import { useEffect, useState } from "react"
import { useParams, useNavigate, Link } from "react-router-dom"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { ArrowLeft, Syringe } from "lucide-react"
import { getVaccineById, type Vaccine } from "@/api/vaccine"

export default function VaccineDetail() {
    const { id } = useParams<{ id: string }>()
    const navigate = useNavigate()
    const [vaccine, setVaccine] = useState<Vaccine | null>(null)
    const [isLoading, setIsLoading] = useState(true)

    useEffect(() => {
        const fetchVaccine = async () => {
            if (!id) return
            try {
                const data = await getVaccineById(id)
                setVaccine(data)
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
                        <h1 className="text-3xl font-bold text-[#1e1b4b] mb-6">{vaccine.vaccineName}</h1>
                        <p className="text-gray-600 mb-4">
                        Vaccine {vaccine.vaccineName} giúp phòng ngừa {vaccine.description}, tăng cường hệ miễn dịch và giảm nguy cơ lây nhiễm. 
                        Được khuyến nghị cho trẻ em, với {vaccine.requiredDoses} mũi tiêm, mỗi mũi cách nhau 10 ngày. 
                        
                        </p>
                        <p className="text-gray-600">
                        Phản ứng sau tiêm có thể bao gồm đau nhẹ, sốt hoặc mệt mỏi, hiếm khi có biến chứng nghiêm trọng. 
                        Đặt lịch ngay để bảo vệ sức khỏe!
                        </p>
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

                {/* Bottom Card */}
                <Card className="w-full bg-white shadow-lg">
                    <CardContent className="p-8">
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                            <div className="space-y-6">
                                <div>
                                    <h2 className="text-xl font-semibold mb-2">Vaccine Information</h2>
                                    <div className="space-y-4">
                                        <div>
                                            <label className="text-sm text-gray-500">Origin</label>
                                            <p className="font-medium">{vaccine.type}</p>
                                        </div>
                                        <div>
                                            <label className="text-sm text-gray-500">Required Doses</label>
                                            <p className="font-medium">{vaccine.requiredDoses} dose(s)</p>
                                        </div>
                                        <div>
                                            <label className="text-sm text-gray-500">Description</label>
                                            <p className="text-gray-700">{vaccine.description}</p>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className="flex flex-col justify-between">
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
                                </div>

                                <Button size="lg" className="w-full mt-6 bg-[#1e1b4b] hover:bg-[#1e1b4b]/90">
                                    <Syringe className="mr-2 h-5 w-5" />
                                    <Link to="/appointments">Schedule Vaccination</Link>
                                </Button>
                            </div>
                        </div>
                    </CardContent>
                </Card>
            </div>
        </div>
    )
}

