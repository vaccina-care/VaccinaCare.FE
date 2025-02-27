import * as React from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Label } from "@/components/ui/label"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { Checkbox } from "@/components/ui/checkbox"
import { Button } from "@/components/ui/button"

interface VaccineOption {
  id: string
  name: string
  price: number
  category?: string
  description?: string
}

const singleVaccines: VaccineOption[] = [
  {
    id: "vaxigrip",
    name: "VẮC XIN CÚM TỨ GIÁ VAXIGRIP TETRA",
    price: 356000,
    category: "Cúm",
  },
  {
    id: "influvac",
    name: "VẮC XIN CÚM TỨ GIÁ INFLUVAC TETRA",
    price: 356000,
    category: "Cúm",
  },
  {
    id: "ivacflu",
    name: "VẮC XIN IVACFLU-S 0,5ml (VIỆT NAM) PHÒNG BỆNH CÚM",
    price: 315000,
    category: "Cúm",
  },
  // Add other single vaccines...
]

const vaccinePackages: VaccineOption[] = [
  {
    id: "hexaxim-0-6",
    name: "Gói vắc xin Hexaxim – Rotarix – Varilrix (0 - 6 tháng)",
    price: 13434900,
    description: "Gói vắc xin Hexaxim–Rotarix–Varilrix (0-6 tháng) cần thiết bảo vệ trẻ trong 6 tháng đầu đời",
  },
  {
    id: "hexaxim-0-9",
    name: "Gói vắc xin Hexaxim – Rotarix – Varilrix (0 - 9 tháng)",
    price: 17897976,
    description: "Gói vắc xin Hexaxim–Rotarix–Varilrix (0-9 tháng) có đủ các vắc xin cho trẻ ở 9 tháng đầu đời",
  },
  {
    id: "hexaxim-rotateq",
    name: "Gói vắc xin Hexaxim – Rotateq – Varilrix (0 - 6 tháng)",
    price: 13828200,
    description: "Gói vắc xin Hexaxim – Rotateq – Varilrix (0 - 6 tháng)",
  },
]

export function ServiceSelection() {
  const [serviceType, setServiceType] = React.useState<"single" | "package">("single")
  const [selectedVaccines, setSelectedVaccines] = React.useState<string[]>([])
  const [selectedPackage, setSelectedPackage] = React.useState<string>("")

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
              Select vaccine <span className="text-red-500">*</span>
            </Label>

            {serviceType === "single" ? (
              <div className="grid grid-cols-3 gap-4">
                {singleVaccines.map((vaccine) => (
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
                          {vaccine.name}
                        </label>
                        <p className="text-sm text-muted-foreground mt-1">{vaccine.category}</p>
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
              <RadioGroup value={selectedPackage} onValueChange={setSelectedPackage} className="grid grid-cols-3 gap-4">
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
                          {pkg.name}
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
        <Button className="bg-[#204d94] hover:bg-[#204d94]/90 text-white px-8 py-2 rounded-md text-base" size="lg">
          Book Appointment
        </Button>
      </div>
    </div>
  )
}

