"use client"

import { Calendar } from "@/components/ui/calendar"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Label } from "@/components/ui/label"
import { format, addHours, isBefore, startOfDay, parse } from "date-fns"
import { enUS } from "date-fns/locale"
import { useAppointmentContext } from "@/contexts/AppointmentContext"

const generateTimeSlots = () => {
  const slots = []
  for (let hour = 8; hour <= 17; hour++) {
    for (const minute of [0, 30]) {
      if (hour === 17 && minute === 30) continue
      const timeString = `${hour.toString().padStart(2, "0")}:${minute.toString().padStart(2, "0")}`
      slots.push(timeString)
    }
  }
  return slots
}

const timeSlots = generateTimeSlots()

export function DateTimePicker() {
  const { appointmentDate, setAppointmentDate, appointmentTime, setAppointmentTime, isSubmitting } =
    useAppointmentContext()

  const now = new Date()
  const minSelectableDate = addHours(now, 24)

  const isDateDisabled = (day: Date) => {
    return isBefore(startOfDay(day), startOfDay(minSelectableDate))
  }

  const isTimeDisabled = (timeString: string) => {
    if (!appointmentDate) return true

    const selectedDateTime = parse(timeString, "HH:mm", appointmentDate)

    return isBefore(selectedDateTime, minSelectableDate)
  }

  return (
    <Card className="h-full">
      <CardHeader>
        <CardTitle className="text-lg font-semibold text-center">Select Appointment Time</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="flex gap-6">
          <Calendar
            mode="single"
            selected={appointmentDate}
            onSelect={setAppointmentDate}
            className="rounded-md border"
            disabled={(date) => isDateDisabled(date) || isSubmitting}
          />

          <div className="space-y-4 min-w-[200px]">
            <div className="space-y-2">
              <Label htmlFor="time">Time</Label>
              <Select
                value={appointmentTime}
                onValueChange={setAppointmentTime}
                disabled={!appointmentDate || isSubmitting}
              >
                <SelectTrigger id="time">
                  <SelectValue placeholder="Select time" />
                </SelectTrigger>
                <SelectContent>
                  {timeSlots.map((slot) => (
                    <SelectItem key={slot} value={slot} disabled={isTimeDisabled(slot)}>
                      {slot}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>

            {(appointmentDate || appointmentTime) && (
              <div className="rounded-lg border p-4 bg-muted/50">
                <h3 className="font-medium mb-2">Selected time:</h3>
                <div className="space-y-1 text-sm">
                  {appointmentDate && <p>Day: {format(appointmentDate, "EEEE, dd/MM/yyyy", { locale: enUS })}</p>}
                  {appointmentTime && <p>Time: {appointmentTime}</p>}
                </div>
              </div>
            )}
          </div>
        </div>
      </CardContent>
    </Card>
  )
}

