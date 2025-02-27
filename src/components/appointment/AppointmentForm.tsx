import * as React from "react"
import { Select, SelectContent, SelectGroup, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { DateTimePicker } from "./AppointmentDate"
import { ServiceSelection } from "./AppointmentServices"

interface Child {
  id: string
  name: string
}

const children: Child[] = [
  { id: "1", name: "NegaChild #1" },
  { id: "2", name: "NegaChild #2" },
  { id: "3", name: "NegaChild #3" },
]

export function AppointmentForm() {
  const [selectedChild, setSelectedChild] = React.useState<string>("")
  const [notes, setNotes] = React.useState<string>("")

  return (
    <div className="space-y-6">
      <div className="w-full bg-gray-50">
        <div className="max-w-[800px] mx-auto py-4">
          <h1 className="text-2xl font-bold text-center text-[#204d94]">REGISTER FOR VACCINATION</h1>
        </div>
      </div>

      <div className="max-w-[1000px] mx-auto px-4">
        <p className="text-gray-600 mb-8">Register vaccination information to save time when checking in at the Reception desk for customers.
Registering vaccination information does not yet support accurate hourly appointment scheduling.
        </p>

        <div className="grid grid-cols-5 gap-6">
          <Card className="col-span-2 h-full">
            <CardHeader>
              <CardTitle className="text-lg font-semibold text-center">Patient Information</CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="space-y-4">
                <Label htmlFor="child-select">Choose Children</Label>
                <Select value={selectedChild} onValueChange={setSelectedChild}>
                  <SelectTrigger>
                    <SelectValue placeholder="Select a child" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectGroup>
                      {children.map((child) => (
                        <SelectItem key={child.id} value={child.id}>
                          {child.name}
                        </SelectItem>
                      ))}
                    </SelectGroup>
                  </SelectContent>
                </Select>
              </div>

              <div className="space-y-4">
                <Label htmlFor="notes">Notes</Label>
                <Textarea
                  id="notes"
                  value={notes}
                  onChange={(e) => setNotes(e.target.value)}
                  placeholder="Enter any additional notes here..."
                  className="min-h-[100px]"
                />
              </div>
            </CardContent>
          </Card>
          <div className="col-span-3">
            <DateTimePicker />
          </div>
        </div>

        <ServiceSelection />
      </div>
    </div>
  )
}

