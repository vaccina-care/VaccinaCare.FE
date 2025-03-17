/* eslint-disable @typescript-eslint/no-unused-vars */
import { Select, SelectContent, SelectGroup, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { DateTimePicker } from "./AppointmentDate"
import { ServiceSelection } from "./AppointmentServices"
import { getChildren, ChildData, createChild } from "@/api/children"
import { useEffect, useState } from "react"
import { useLocation, useNavigate } from "react-router-dom"
import { Button } from "../ui/button"
import { ArrowLeft } from "lucide-react"
import { AddChildDialog } from "@/components/user-dashboard/child-profile/AddChildDialog"
import { toast } from "@/hooks/use-toast"

export function AppointmentForm() {
  const [children, setChildren] = useState<ChildData[]>([])
  const [selectedChild, setSelectedChild] = useState<string>("")
  const [notes, setNotes] = useState<string>("")
  const [loading, setLoading] = useState<boolean>(true)
  const navigate = useNavigate()
  const location = useLocation()

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
        console.error("Failed to fetch children data")
      } finally {
        setLoading(false)
      }
    }

    fetchChildren()
  }, [])

  const vaccineId = location.state?.vaccineId || null;
  const vaccinepackageId = location.state?.vaccinepackageId || null;

  const handleBack = () => {
    if (vaccineId) {
      navigate(`/vaccine/${vaccineId}`);
    } else if (vaccinepackageId) {
      navigate(`/vaccine-package/${vaccinepackageId}`);
    }
    else {
      navigate(-1);
    }
  }

  const handleAddChild = async (childData: Omit<ChildData, "id">) => {
    try {
      const newChild = await createChild(childData);
      setChildren((prev) => [...prev, newChild]);
      setSelectedChild(newChild.id);
      toast({
        title: "Success",
        description: "New child added successfully",
      })
    } catch (error) {
      console.error("Failed to add new child:", error)
      toast({
        title: "Error",
        description: error instanceof Error ? error.message : "Failed to add new child",
        variant: "destructive",
      })
    }
  }

  return (
    <div className="container mx-auto py-8 px-4">
      <div className="space-y-6">
        {/* Back Button */}
        {(location.state?.fromVaccineDetail || location.state?.fromVaccinePackageDetail) && (
          <Button
            variant="ghost"
            onClick={handleBack}
            className="hover:bg-gray-100"
          >
            <ArrowLeft className="mr-2 h-4 w-4" /> Back to Vaccine Page
          </Button>
        )}

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
                  ) : children.length === 0 ? (
                    <div className="space-y-4">
                      <p>No children found. Click the "Add Child" button to add a new child.</p>
                      <AddChildDialog onSubmit={handleAddChild} />
                    </div>
                  ) : (
                    <div className="space-y-4">
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
                      <AddChildDialog onSubmit={handleAddChild} />
                    </div>
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

          <ServiceSelection preSelectedVaccineId={vaccineId} preSelectedPackageId={vaccinepackageId} />
        </div>
      </div>
    </div>
  )
}