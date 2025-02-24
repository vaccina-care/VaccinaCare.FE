"use client"

import * as React from "react"
import { Calendar } from "@/components/ui/calendar"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Label } from "@/components/ui/label"

const generateTimeSlots = () => {
  const slots = []
  for (let hour = 8; hour <= 17; hour++) {
    for (const minute of [0, 30]) {
      if (hour === 17 && minute === 30) continue // Skip 17:30
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

          <div className="space-y-4 w-full max-w-xs">
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
        </div>
      </CardContent>
    </Card>
  )
}

