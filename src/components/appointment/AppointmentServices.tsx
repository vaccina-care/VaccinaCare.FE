import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Label } from "@/components/ui/label"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { Button } from "@/components/ui/button"
import { Checkbox } from "@/components/ui/checkbox"
import { getVaccinePackages, VaccinePackage } from "@/api/packageVaccine"
import { getVaccineList, Vaccine } from "@/api/vaccine"
import { useEffect, useState } from "react"

export function ServiceSelection() {
  const [serviceType, setServiceType] = useState<"single" | "package">("single")
  const [vaccines, setVaccines] = useState<Vaccine[]>([]) 
  const [vaccinePackages, setVaccinePackages] = useState<VaccinePackage[]>([]) 
  const [selectedVaccines, setSelectedVaccines] = useState<string[]>([])
  const [selectedPackage, setSelectedPackage] = useState<string>("") 

  useEffect(() => {
    // Fetch all vaccines when component mounts
    const fetchVaccines = async () => {
      try {
        const response = await getVaccineList()
        setVaccines(response.data.vaccines)
      } catch (error) {
        console.error("Error fetching vaccines:", error)
      }
    }
    fetchVaccines()

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

  return (
    <div className="space-y-12 py-5">
      <Card>
        <CardHeader>
          <CardTitle className="text-lg font-semibold">SERVICE INFORMATION</CardTitle>
        </CardHeader>
        <CardContent className="space-y-8">
          <div className="space-y-4">
            <Label className="text-base">
              Type of service to register <span className="text-red-500">*</span>
            </Label>
            <RadioGroup
              defaultValue="single"
              className="grid grid-cols-2 gap-4"
              onValueChange={(value) => setServiceType(value as "single" | "package")}
            >
              <Label
                htmlFor="single"
                className="flex cursor-pointer items-center justify-center rounded-md border-2 border-muted bg-popover p-4 hover:bg-accent hover:text-accent-foreground [&:has([data-state=checked])]:border-primary"
              >
                <RadioGroupItem value="single" id="single" className="sr-only" />
                <span>Single Vaccine</span>
              </Label>
              <Label
                htmlFor="package"
                className="flex cursor-pointer items-center justify-center rounded-md border-2 border-muted bg-popover p-4 hover:bg-accent hover:text-accent-foreground [&:has([data-state=checked])]:border-primary"
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

            {serviceType === "single" ? (
              <div className="grid grid-cols-3 gap-4">
                {vaccines.map((vaccine) => (
                  <div
                    key={vaccine.id}
                    className="group relative rounded-lg border p-4 space-y-3 transition-colors hover:border-primary hover:bg-accent/5 cursor-pointer"
                    onClick={() => {
                      const isSelected = selectedVaccines.includes(vaccine.id)
                      if (isSelected) {
                        setSelectedVaccines(selectedVaccines.filter((id) => id !== vaccine.id))
                      } else {
                        setSelectedVaccines([...selectedVaccines, vaccine.id])
                      }
                    }}
                  >
                    <div className="flex items-start gap-3">
                      <Checkbox
                        id={vaccine.id}
                        checked={selectedVaccines.includes(vaccine.id)}
                        className="translate-y-1"
                      />
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
              </div>
            ) : (
              <RadioGroup
                value={selectedPackage}
                onValueChange={setSelectedPackage}
                className="grid grid-cols-3 gap-4"
              >
                {vaccinePackages.map((pkg) => (
                  <div
                    key={pkg.id}
                    className="group relative rounded-lg border p-4 space-y-3 transition-colors hover:border-primary hover:bg-accent/5 cursor-pointer"
                    onClick={() => setSelectedPackage(pkg.id)}
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
        </CardContent>
      </Card>

      <div className="flex justify-center pb-12">
        <Button className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-2 rounded-md text-base" size="lg">
          Book Appointment
        </Button>
      </div>
    </div>
  )
}
