"use client"

import { useEffect, useState } from "react"
import { useNavigate } from "react-router-dom"
import { getAllPolicies, type Policy } from "@/api/policy"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { ArrowLeft, Clock, AlertTriangle, Info, FileText } from "lucide-react"
import { Skeleton } from "@/components/ui/skeleton"
import { Separator } from "@/components/ui/separator"

export default function PolicyPage() {
    const [policies, setPolicies] = useState<Policy[]>([])
    const [loading, setLoading] = useState(true)
    const [error, setError] = useState<string | null>(null)
    const navigate = useNavigate()

    useEffect(() => {
        const fetchPolicies = async () => {
            try {
                setLoading(true)
                const data = await getAllPolicies()
                setPolicies(data)
                setError(null)
            } catch (err) {
                setError("Failed to load policies. Please try again later.")
                console.error(err)
            } finally {
                setLoading(false)
            }
        }

        fetchPolicies()
    }, [])

    const handleGoBack = () => {
        navigate(-1)
    }

    return (
        <div className="container mx-auto py-10 px-4 max-w-4xl">
            <div className="flex items-center mb-8">
                <Button variant="ghost" className="mr-2" onClick={handleGoBack}>
                    <ArrowLeft className="h-4 w-4 mr-2" />
                    Go Back
                </Button>
                <h1 className="text-2xl font-bold">Cancellation & Rescheduling Policies</h1>
            </div>

            {loading ? (
                <div className="space-y-8">
                    {[1, 2].map((i) => (
                        <Card key={i} className="w-full">
                            <CardHeader>
                                <Skeleton className="h-8 w-3/4" />
                                <Skeleton className="h-4 w-1/2" />
                            </CardHeader>
                            <CardContent>
                                <Skeleton className="h-24 w-full" />
                            </CardContent>
                        </Card>
                    ))}
                </div>
            ) : error ? (
                <div className="bg-red-50 p-6 rounded-lg border border-red-200">
                    <div className="flex items-center">
                        <AlertTriangle className="h-5 w-5 text-red-500 mr-3" />
                        <p className="text-red-700">{error}</p>
                    </div>
                </div>
            ) : (
                <div className="space-y-10">
                    {policies.length === 0 ? (
                        <div className="text-center p-10 bg-gray-50 rounded-lg">
                            <Info className="h-10 w-10 text-gray-400 mx-auto mb-4" />
                            <p className="text-gray-500 text-lg">No policies found.</p>
                        </div>
                    ) : (
                        policies.map((policy) => (
                            <Card key={policy.policyId} className="w-full shadow-md overflow-hidden">
                                <CardHeader className="bg-gray-50 pb-6">
                                    <div className="flex flex-col md:flex-row md:justify-between md:items-center gap-4">
                                        <div>
                                            <CardTitle className="text-xl mb-1">{policy.policyName}</CardTitle>
                                            <p className="text-sm text-gray-500">Policy ID: {policy.policyId}</p>
                                        </div>
                                        <div className="flex flex-wrap gap-2">
                                            <Badge className="bg-blue-100 text-blue-800 border-blue-200 hover:bg-blue-200 px-3 py-1.5 text-sm">
                                                <Clock className="h-3.5 w-3.5 mr-1.5" />
                                                {policy.cancellationDeadline} hours notice
                                            </Badge>
                                            <Badge className="bg-amber-100 text-amber-800 border-amber-200 hover:bg-amber-200 px-3 py-1.5 text-sm">
                                                <AlertTriangle className="h-3.5 w-3.5 mr-1.5" />
                                                {policy.penaltyFee}% penalty fee
                                            </Badge>
                                        </div>
                                    </div>
                                </CardHeader>

                                <CardContent className="pt-6 pb-8">
                                    {/* Key Information Section */}
                                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8">
                                        <div className="bg-blue-50 p-5 rounded-lg border border-blue-100">
                                            <h3 className="flex items-center text-blue-800 font-medium mb-2">
                                                <Clock className="h-5 w-5 mr-2 text-blue-600" />
                                                Cancellation Deadline
                                            </h3>
                                            <p className="text-blue-700">
                                                You must cancel or reschedule your appointment at least
                                                <span className="font-bold text-lg mx-1">{policy.cancellationDeadline} hours</span>
                                                before the scheduled time.
                                            </p>
                                        </div>

                                        <div className="bg-amber-50 p-5 rounded-lg border border-amber-100">
                                            <h3 className="flex items-center text-amber-800 font-medium mb-2">
                                                <AlertTriangle className="h-5 w-5 mr-2 text-amber-600" />
                                                Penalty Fee
                                            </h3>
                                            <p className="text-amber-700">
                                                {policy.penaltyFee === 0 ? (
                                                    <>
                                                        There is <span className="font-bold">no penalty fee</span> if you cancel before the
                                                        deadline.
                                                    </>
                                                ) : (
                                                    <>
                                                        A <span className="font-bold text-lg">{policy.penaltyFee}%</span> penalty fee will be
                                                        charged if you cancel after the deadline.
                                                    </>
                                                )}
                                            </p>
                                        </div>
                                    </div>

                                    <Separator className="my-6" />

                                    {/* Full Policy Description */}
                                    <div className="mt-6">
                                        <h3 className="flex items-center text-gray-700 font-medium mb-4">
                                            <FileText className="h-5 w-5 mr-2 text-gray-500" />
                                            Full Policy Description
                                        </h3>
                                        <div className="bg-gray-50 p-6 rounded-lg border border-gray-100">
                                            <p className="text-gray-700 leading-relaxed whitespace-pre-line">{policy.description}</p>
                                        </div>
                                    </div>
                                </CardContent>
                            </Card>
                        ))
                    )}
                </div>
            )}
        </div>
    )
}

