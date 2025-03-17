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

// Add the onProceed prop to the interface
interface ServiceSelectionProps {
  preSelectedVaccineId?: string | null
  preSelectedPackageId?: string | null
  onProceed?: () => void
}

// Update the component to accept the onProceed prop
export function ServiceSelection({ preSelectedVaccineId, preSelectedPackageId, onProceed }: ServiceSelectionProps) {
  const {
    serviceType,
    setServiceType,
    selectedVaccine,
    setSelectedVaccine,
    selectedPackage,
    setSelectedPackage,
    isSubmitting,
    setIsSubmitting,
  } = useAppointmentContext()

  const [vaccines, setVaccines] = useState<Vaccine[]>([])
  const [vaccinePackages, setVaccinePackages] = useState<VaccinePackage[]>([])
  const [currentPage, setCurrentPage] = useState(1)
  const [totalPages, setTotalPages] = useState(1)
  const [isLoading, setIsLoading] = useState(true)
  const [searchTerm, setSearchTerm] = useState("")
  const [targetVaccineFound, setTargetVaccineFound] = useState(false)
  const [initialPageSet, setInitialPageSet] = useState(false)
  const pageSize = 12

  // Reset isSubmitting state when component mounts
  useEffect(() => {
    setIsSubmitting(false)
  }, [setIsSubmitting])

  // Set initial service type and selection based on preselected IDs
  useEffect(() => {
    console.log("Preselected IDs:", { preSelectedVaccineId, preSelectedPackageId })

    if (preSelectedPackageId) {
      setServiceType("package")
      setSelectedPackage(preSelectedPackageId)
    } else if (preSelectedVaccineId) {
      setServiceType("single")
      setSelectedVaccine(preSelectedVaccineId)
    }
  }, [preSelectedVaccineId, preSelectedPackageId, setServiceType, setSelectedPackage, setSelectedVaccine])

  // Find the page containing the preselected vaccine
  useEffect(() => {
    const findVaccinePage = async () => {
      if (!preSelectedVaccineId || serviceType !== "single" || initialPageSet) return

      try {
        setIsLoading(true)
        console.log("Searching for vaccine ID:", preSelectedVaccineId)

        // Get all vaccines to find the index of the preselected one
        const allVaccinesResponse = await getVaccineList({
          page: 1,
          pageSize: 1000, // Large number to get all vaccines
          search: "",
        })

        if (allVaccinesResponse.isSuccess) {
          const vaccineIndex = allVaccinesResponse.data.vaccines.findIndex((v) => v.id === preSelectedVaccineId)

          console.log("Vaccine index:", vaccineIndex)

          if (vaccineIndex !== -1) {
            // Calculate which page this vaccine is on
            const targetPage = Math.floor(vaccineIndex / pageSize) + 1
            console.log("Setting page to:", targetPage)
            setCurrentPage(targetPage)
            setInitialPageSet(true)
          }
        }
      } catch (error) {
        console.error("Error finding vaccine page:", error)
      } finally {
        setIsLoading(false)
      }
    }

    findVaccinePage()
  }, [preSelectedVaccineId, serviceType, pageSize, initialPageSet])

  // Fetch vaccines for the current page and handle preselection
  useEffect(() => {
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

          // Check if our target vaccine is in this page
          if (preSelectedVaccineId && !targetVaccineFound) {
            const found = response.data.vaccines.some((v) => v.id === preSelectedVaccineId)
            if (found) {
              setTargetVaccineFound(true)
              setSelectedVaccine(preSelectedVaccineId) // Ensure the vaccine is selected
              console.log("Target vaccine found and selected on page", currentPage)
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
  }, [currentPage, searchTerm, pageSize, preSelectedVaccineId, targetVaccineFound, setSelectedVaccine])

  // Fetch packages and handle preselection
  useEffect(() => {
    const fetchVaccinePackages = async () => {
      try {
        const response = await getVaccinePackages()
        setVaccinePackages(response)

        // If we have a preselected package, ensure it's selected
        if (preSelectedPackageId) {
          setSelectedPackage(preSelectedPackageId)
        }
      } catch (error) {
        console.error("Error fetching vaccine packages:", error)
      }
    }
    fetchVaccinePackages()
  }, [preSelectedPackageId, setSelectedPackage])

  // Replace the handleBookAppointment function with this:
  const handleProceedToConfirmation = () => {
    if (onProceed) {
      onProceed()
    }
  }

  // Replace the button at the bottom with this:
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
                defaultValue={preSelectedVaccineId || undefined}
              >
                {vaccines.map((vaccine) => (
                  <div
                    key={vaccine.id}
                    className={`group relative rounded-lg border p-4 space-y-3 transition-colors hover:border-primary hover:bg-accent/5 cursor-pointer ${vaccine.id === selectedVaccine ? "border-primary bg-accent/10" : ""
                      } ${isSubmitting ? "opacity-50 cursor-not-allowed" : ""}`}
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
                defaultValue={preSelectedPackageId || undefined}
              >
                {vaccinePackages.map((pkg) => (
                  <div
                    key={pkg.id}
                    className={`group relative rounded-lg border p-4 space-y-3 transition-colors hover:border-primary hover:bg-accent/5 cursor-pointer ${pkg.id === preSelectedPackageId ? "border-primary bg-accent/10" : ""
                      } ${isSubmitting ? "opacity-50 cursor-not-allowed" : ""}`}
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
          onClick={handleProceedToConfirmation}
          disabled={isSubmitting}
        >
          {isSubmitting ? (
            <>
              <Loader2 className="mr-2 h-5 w-5 animate-spin" />
              Processing...
            </>
          ) : (
            "Review & Confirm"
          )}
        </Button>
      </div>
    </div>
  )
}

