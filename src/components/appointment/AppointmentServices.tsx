import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Label } from "@/components/ui/label"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"

export function AppointmentServices() {
  return (
    <Card className="mt-6">
      <CardHeader>
        <CardTitle className="text-lg font-semibold">THÔNG TIN DỊCH VỤ</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="space-y-4">
          <div className="space-y-2">
            <Label className="text-base">
              Loại dịch vụ muốn đăng ký <span className="text-red-500">*</span>
            </Label>
            <RadioGroup defaultValue="consultation" className="grid grid-cols-3 gap-4">
              <Label
                htmlFor="package"
                className="flex cursor-pointer items-center justify-center rounded-md border-2 border-muted bg-popover p-4 hover:bg-accent hover:text-accent-foreground [&:has([data-state=checked])]:border-primary"
              >
                <RadioGroupItem value="package" id="package" className="sr-only" />
                <span>Book vaccine gói</span>
              </Label>
              <Label
                htmlFor="single"
                className="flex cursor-pointer items-center justify-center rounded-md border-2 border-muted bg-popover p-4 hover:bg-accent hover:text-accent-foreground [&:has([data-state=checked])]:border-primary"
              >
                <RadioGroupItem value="single" id="single" className="sr-only" />
                <span>Book vaccine lẻ</span>
              </Label>
            </RadioGroup>
          </div>
        </div>
      </CardContent>
    </Card>
  )
}

