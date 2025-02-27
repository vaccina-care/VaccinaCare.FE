import { Select, SelectContent, SelectGroup, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { DateTimePicker } from "./AppointmentDate"
import { ServiceSelection } from "./AppointmentServices"
import { getChildren, ChildData } from "@/api/children"
import { useEffect, useState } from "react"

export function AppointmentForm() {
  const [children, setChildren] = useState<ChildData[]>([])
  const [selectedChild, setSelectedChild] = useState<string>("")
  const [notes, setNotes] = useState<string>("")
  const [loading, setLoading] = useState<boolean>(true)
  const [error, setError] = useState<string | null>(null)

  useEffect(() => {
    const fetchChildren = async () => {
      try {
        setLoading(true)
        const childrenData = await getChildren()
        setChildren(childrenData)
        if (childrenData.length > 0) {
          setSelectedChild(childrenData[0].id)
        }
      } catch (err) {
        setError("Failed to fetch children data")
      } finally {
        setLoading(false)
      }
    }

    fetchChildren()
  }, [])

  return (
    <div className="space-y-6">
      <div className="w-full bg-gray-50">
        <div className="max-w-[800px] mx-auto py-4">
          <h1 className="text-2xl font-bold text-center text-[#204d94]">REGISTER FOR VACCINATION</h1>
        </div>
      </div>

      <div className="max-w-[1000px] mx-auto px-4">
        <p className="text-gray-600 mb-8">
          Register vaccination information to save time when checking in at the Reception desk for customers.
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
                {loading ? (
                  <p>Loading children...</p>
                ) : error ? (
                  <p className="text-red-500">{error}</p>
                ) : (
                  <Select value={selectedChild} onValueChange={setSelectedChild}>
                    <SelectTrigger>
                      <SelectValue placeholder="Select a child" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectGroup>
                        {children.map((child) => (
                          <SelectItem key={child.id} value={child.id}>
                            {child.fullName}
                          </SelectItem>
                        ))}
                      </SelectGroup>
                    </SelectContent>
                  </Select>
                )}
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
