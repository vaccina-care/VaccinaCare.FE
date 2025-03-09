/* eslint-disable @typescript-eslint/no-unused-vars */
"use client"

import { Select, SelectContent, SelectGroup, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { DateTimePicker } from "./AppointmentDate"
import { ServiceSelection } from "./AppointmentServices"
import { getChildren, type ChildData } from "@/api/children"
import { useEffect, useState } from "react"
import { useLocation, useNavigate } from "react-router-dom"
import { Button } from "../ui/button"
import { ArrowLeft } from "lucide-react"
import { useAppointmentContext } from "@/contexts/AppointmentContext"

export function AppointmentForm() {
  const [children, setChildren] = useState<ChildData[]>([])
  const [loading, setLoading] = useState<boolean>(true)
  const navigate = useNavigate()
  const location = useLocation()

  const { selectedChild, setSelectedChild, notes, setNotes, isSubmitting, resetAppointmentState } =
    useAppointmentContext()

  // Extract state from location directly - don't modify it
  const vaccineId = location.state?.vaccineId || null
  const vaccinepackageId = location.state?.vaccinepackageId || null
  const fromVaccineDetail = location.state?.fromVaccineDetail || false
  const fromVaccinePackageDetail = location.state?.fromVaccinePackageDetail || false

  // Reset appointment state when component mounts
  useEffect(() => {
    // Reset the appointment state first
    resetAppointmentState()

    // Scroll to top
  window.scrollTo(0, 0)

    // DO NOT modify the location state here as it causes the vaccineId to be lost
    // We'll only clean up state when navigating away
  }, [resetAppointmentState])

  useEffect(() => {
    const fetchChildren = async () => {
      try {
        setLoading(true)
        const childrenData = await getChildren()
        setChildren(childrenData)
        if (childrenData.length > 0 && !selectedChild) {
          setSelectedChild(childrenData[0].id)
        }
      } catch (err) {
        console.error("Failed to fetch children data")
      } finally {
        setLoading(false)
      }
    }

    fetchChildren()
  }, [setSelectedChild, selectedChild])

  const handleBack = () => {
    if (vaccineId) {
      navigate(`/vaccine/${vaccineId}`)
    } else if (vaccinepackageId) {
      navigate(`/vaccine-package/${vaccinepackageId}`)
    } else {
      navigate(-1)
    }
  }

  return (
    <div className="container mx-auto py-8 px-4">
      <div className="space-y-6">
        {/* Back Button */}
        {(fromVaccineDetail || fromVaccinePackageDetail) && (
          <Button variant="ghost" onClick={handleBack} className="hover:bg-gray-100" disabled={isSubmitting}>
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
                    <p>No children found</p>
                  ) : (
                    <Select value={selectedChild} onValueChange={setSelectedChild} disabled={isSubmitting}>
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
                    disabled={isSubmitting}
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

