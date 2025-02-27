"use client"

import * as React from "react"
import { Calendar } from "@/components/ui/calendar"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Label } from "@/components/ui/label"
import { format } from "date-fns"
import { enUS } from "date-fns/locale"

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
  const [date, setDate] = React.useState<Date>()
  const [time, setTime] = React.useState<string>()

  return (
    <Card className="h-full">
      <CardHeader>
        <CardTitle className="text-lg font-semibold text-center">Select Appointment Time</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="flex gap-6">
          <Calendar mode="single" selected={date} onSelect={setDate} className="rounded-md border" />

          <div className="space-y-4 min-w-[200px]">
            <div className="space-y-2">
              <Label htmlFor="time">Time</Label>
              <Select value={time} onValueChange={setTime}>
                <SelectTrigger id="time">
                  <SelectValue placeholder="Select time" />
                </SelectTrigger>
                <SelectContent>
                  {timeSlots.map((slot) => (
                    <SelectItem key={slot} value={slot}>
                      {slot}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>

            {(date || time) && (
              <div className="rounded-lg border p-4 bg-muted/50">
                <h3 className="font-medium mb-2">Selected time:</h3>
                <div className="space-y-1 text-sm">
                  {date && <p>Day: {format(date, "EEEE, dd/MM/yyyy", { locale: enUS })}</p>}
                  {time && <p>Time: {time}</p>}
                </div>
              </div>
            )}
          </div>
        </div>
      </CardContent>
    </Card>
  )
}

