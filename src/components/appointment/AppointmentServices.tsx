"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Label } from "@/components/ui/label"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { Button } from "@/components/ui/button"
import { getVaccinePackages, type VaccinePackage } from "@/api/package"
import { getVaccineList, type Vaccine } from "@/api/vaccine"
import { useEffect, useState } from "react"
import { ChevronLeft, ChevronRight, Loader2 } from "lucide-react"
import { Input } from "../ui/input"
import { useAppointmentContext } from "@/contexts/AppointmentContext"
import { bookSingleVaccine } from "@/api/appointment"
import { getPaymentCheckoutUrl } from "@/api/payment"
import { useToast } from "@/hooks/use-toast"
import { format, parse } from "date-fns"

interface ServiceSelectionProps {
  preSelectedVaccineId?: string | null
  preSelectedPackageId?: string | null
}

export function ServiceSelection({ preSelectedVaccineId, preSelectedPackageId }: ServiceSelectionProps) {
  const {
    serviceType,
    setServiceType,
    selectedVaccine,
    setSelectedVaccine,
    selectedPackage,
    setSelectedPackage,
    selectedChild,
    appointmentDate,
    appointmentTime,
    isSubmitting,
    setIsSubmitting,
    resetAppointmentState,
  } = useAppointmentContext()

  const [vaccines, setVaccines] = useState<Vaccine[]>([])
  const [vaccinePackages, setVaccinePackages] = useState<VaccinePackage[]>([])
  const [currentPage, setCurrentPage] = useState(1)
  const [totalPages, setTotalPages] = useState(1)
  const [isLoading, setIsLoading] = useState(true)
  const [searchTerm, setSearchTerm] = useState("")
  const pageSize = 12
  const { toast } = useToast()

  // Reset isSubmitting state when component mounts
  useEffect(() => {
    setIsSubmitting(false)
  }, [setIsSubmitting])

  useEffect(() => {
    // Set initial service type based on preselected IDs
    if (preSelectedPackageId) {
      setServiceType("package")
      setSelectedPackage(preSelectedPackageId)
    } else if (preSelectedVaccineId) {
      setServiceType("single")
      setSelectedVaccine(preSelectedVaccineId)
    }
  }, [preSelectedVaccineId, preSelectedPackageId, setServiceType, setSelectedPackage, setSelectedVaccine])

  useEffect(() => {
    // Fetch all vaccines when component mounts
    const fetchVaccines = async () => {
      try {
        setIsLoading(true)
        const response = await getVaccineList({
          page: currentPage,
          pageSize,
          search: searchTerm,
        })
        if (response.isSuccess) {
          setVaccines(response.data.vaccines)
          setTotalPages(Math.ceil(response.data.totalCount / pageSize))

          if (preSelectedVaccineId && currentPage === 1) {
            const allVaccines = await getVaccineList({ page: 1, pageSize: response.data.totalCount })
            if (allVaccines.isSuccess) {
              const vaccineIndex = allVaccines.data.vaccines.findIndex((vaccine) => vaccine.id === preSelectedVaccineId)
              if (vaccineIndex !== -1) {
                const targetPage = Math.ceil((vaccineIndex + 1) / pageSize)
                if (targetPage !== currentPage) {
                  setCurrentPage(targetPage)
                }
              }
            }
          }
        }
      } catch (error) {
        console.error("Error fetching vaccines:", error)
      } finally {
        setIsLoading(false)
      }
    }
    const debounceTimer = setTimeout(fetchVaccines, 300)
    return () => clearTimeout(debounceTimer)
  }, [currentPage, searchTerm, preSelectedPackageId, preSelectedVaccineId])

  useEffect(() => {
    // Fetch all vaccine packages when component mounts
    const fetchVaccinePackages = async () => {
      try {
        const response = await getVaccinePackages()
        setVaccinePackages(response)
      } catch (error) {
        console.error("Error fetching vaccine packages:", error)
      }
    }
    fetchVaccinePackages()
  }, [])

  const handleBookAppointment = async () => {
    // Validate form
    if (!selectedChild) {
      toast({
        title: "Missing information",
        description: "Please select a child for the appointment",
        variant: "destructive",
      })
      return
    }

    if (!appointmentDate || !appointmentTime) {
      toast({
        title: "Missing information",
        description: "Please select a date and time for the appointment",
        variant: "destructive",
      })
      return
    }

    if (serviceType === "single" && !selectedVaccine) {
      toast({
        title: "Missing information",
        description: "Please select a vaccine",
        variant: "destructive",
      })
      return
    }

    if (serviceType === "package" && !selectedPackage) {
      toast({
        title: "Missing information",
        description: "Please select a vaccine package",
        variant: "destructive",
      })
      return
    }

    try {
      setIsSubmitting(true)

      // Format date and time for API
      const timeObj = parse(appointmentTime, "HH:mm", new Date())
      const appointmentDateTime = new Date(appointmentDate)
      appointmentDateTime.setHours(timeObj.getHours())
      appointmentDateTime.setMinutes(timeObj.getMinutes())

      const formattedDate = format(appointmentDateTime, "yyyy-MM-dd'T'HH:mm:ss")

      if (serviceType === "single") {
        // Book single vaccine appointment
        const bookingData = {
          vaccineId: selectedVaccine,
          childId: selectedChild,
          startDate: formattedDate,
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
            setIsSubmitting(false)
          }
        } else {
          toast({
            title: "Booking Error",
            description: "Failed to book appointment. Please try again.",
            variant: "destructive",
          })
          setIsSubmitting(false)
        }
      } else {
        // Package booking is not implemented yet
        toast({
          title: "Not Implemented",
          description: "Package booking is not available yet.",
          variant: "destructive",
        })
        setIsSubmitting(false)
      }
    } catch (error) {
      console.error("Error booking appointment:", error)
      toast({
        title: "Booking Error",
        description: "An unexpected error occurred. Please try again.",
        variant: "destructive",
      })
      setIsSubmitting(false)
    }
  }

  return (
    <div className="space-y-12 py-5">
      <Card>
        <CardHeader>
          <div className="flex justify-between items-center w-full">
            <CardTitle className="text-lg font-semibold">SERVICE INFORMATION</CardTitle>
            <Input
              type="search"
              placeholder="Search for vaccine..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full sm:w-[300px]"
              disabled={isSubmitting}
            />
          </div>
        </CardHeader>

        <CardContent className="space-y-8">
          <div className="space-y-4">
            <Label className="text-base">
              Type of service to register <span className="text-red-500">*</span>
            </Label>
            <RadioGroup
              value={serviceType}
              className="grid grid-cols-2 gap-4"
              onValueChange={(value) => setServiceType(value as "single" | "package")}
              disabled={isSubmitting}
            >
              <Label
                htmlFor="single"
                className={`flex cursor-pointer items-center justify-center rounded-md border-2 border-muted bg-popover p-4 hover:bg-accent hover:text-accent-foreground [&:has([data-state=checked])]:border-primary ${isSubmitting ? "opacity-50 cursor-not-allowed" : ""}`}
              >
                <RadioGroupItem value="single" id="single" className="sr-only" />
                <span>Single Vaccine</span>
              </Label>
              <Label
                htmlFor="package"
                className={`flex cursor-pointer items-center justify-center rounded-md border-2 border-muted bg-popover p-4 hover:bg-accent hover:text-accent-foreground [&:has([data-state=checked])]:border-primary ${isSubmitting ? "opacity-50 cursor-not-allowed" : ""}`}
              >
                <RadioGroupItem value="package" id="package" className="sr-only" />
                <span>Vaccine Package</span>
              </Label>
            </RadioGroup>
          </div>

          <div className="space-y-4">
            <Label className="text-base">
              Select vaccine {serviceType === "single" ? "" : "Package"} <span className="text-red-500">*</span>
            </Label>
            {isLoading ? (
              <div className="text-center text-gray-500">Loading...</div>
            ) : serviceType === "single" ? (
              <RadioGroup
                value={selectedVaccine}
                onValueChange={setSelectedVaccine}
                className="grid grid-cols-3 gap-4"
                disabled={isSubmitting}
              >
                {vaccines.map((vaccine) => (
                  <div
                    key={vaccine.id}
                    className={`group relative rounded-lg border p-4 space-y-3 transition-colors hover:border-primary hover:bg-accent/5 cursor-pointer ${isSubmitting ? "opacity-50 cursor-not-allowed" : ""}`}
                    onClick={() => !isSubmitting && setSelectedVaccine(vaccine.id)}
                  >
                    <div className="flex items-start gap-3">
                      <RadioGroupItem value={vaccine.id} id={vaccine.id} className="translate-y-1" />
                      <div className="flex-1 min-w-0">
                        <label
                          htmlFor={vaccine.id}
                          className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                        >
                          {vaccine.vaccineName}
                        </label>
                        <p className="text-sm text-muted-foreground mt-1">{vaccine.description}</p>
                      </div>
                    </div>
                    <div className="text-right border-t pt-2 mt-2">
                      <span className="text-base font-semibold text-primary">
                        {new Intl.NumberFormat("en-US", {
                          style: "currency",
                          currency: "VND",
                          minimumFractionDigits: 0,
                          maximumFractionDigits: 0,
                        }).format(vaccine.price)}
                      </span>
                    </div>
                  </div>
                ))}
              </RadioGroup>
            ) : (
              <RadioGroup
                value={selectedPackage}
                onValueChange={setSelectedPackage}
                className="grid grid-cols-3 gap-4"
                disabled={isSubmitting}
              >
                {vaccinePackages.map((pkg) => (
                  <div
                    key={pkg.id}
                    className={`group relative rounded-lg border p-4 space-y-3 transition-colors hover:border-primary hover:bg-accent/5 cursor-pointer ${isSubmitting ? "opacity-50 cursor-not-allowed" : ""}`}
                    onClick={() => !isSubmitting && setSelectedPackage(pkg.id)}
                  >
                    <div className="flex items-start gap-3">
                      <RadioGroupItem value={pkg.id} id={pkg.id} className="translate-y-1" />
                      <div className="flex-1 min-w-0">
                        <label
                          htmlFor={pkg.id}
                          className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                        >
                          {pkg.packageName}
                        </label>
                        <p className="text-sm text-muted-foreground mt-2">{pkg.description}</p>
                      </div>
                    </div>
                    <div className="text-right border-t pt-2 mt-2">
                      <span className="text-base font-semibold text-primary">
                        {new Intl.NumberFormat("en-US", {
                          style: "currency",
                          currency: "VND",
                          minimumFractionDigits: 0,
                          maximumFractionDigits: 0,
                        }).format(pkg.price)}
                      </span>
                    </div>
                  </div>
                ))}
              </RadioGroup>
            )}
          </div>

          {/* Pagination */}
          {serviceType === "single" && (
            <div className="flex justify-center items-center gap-2">
              <Button
                variant="outline"
                size="icon"
                onClick={() => setCurrentPage((prev) => Math.max(prev - 1, 1))}
                disabled={currentPage === 1 || isSubmitting}
              >
                <ChevronLeft className="h-4 w-4" />
              </Button>
              <span className="text-sm">
                Page {currentPage} / {totalPages}
              </span>
              <Button
                variant="outline"
                size="icon"
                onClick={() => setCurrentPage((prev) => Math.min(prev + 1, totalPages))}
                disabled={currentPage >= totalPages || isSubmitting}
              >
                <ChevronRight className="h-4 w-4" />
              </Button>
            </div>
          )}
        </CardContent>
      </Card>

      <div className="flex justify-center pb-12">
        <Button
          className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-2 rounded-md text-base"
          size="lg"
          onClick={handleBookAppointment}
          disabled={isSubmitting}
        >
          {isSubmitting ? (
            <>
              <Loader2 className="mr-2 h-5 w-5 animate-spin" />
              Processing...
            </>
          ) : (
            "Book Appointment"
          )}
        </Button>
      </div>
    </div>
  )
}

