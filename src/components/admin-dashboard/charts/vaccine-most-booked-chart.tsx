"use client"

import { Bar, BarChart, CartesianGrid, Legend, ResponsiveContainer, Tooltip, XAxis, YAxis } from "recharts"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"

const data = [
  { name: "COVID-19", bookings: 1245 },
  { name: "Influenza", bookings: 987 },
  { name: "Hepatitis B", bookings: 654 },
  { name: "Tetanus", bookings: 521 },
  { name: "HPV", bookings: 432 },
  { name: "Pneumococcal", bookings: 321 },
  { name: "MMR", bookings: 287 },
].sort((a, b) => b.bookings - a.bookings) 

export function VaccineMostBookedChart() {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Most Booked Vaccines</CardTitle>
        <CardDescription>Number of appointments by vaccine type</CardDescription>
      </CardHeader>
      <CardContent className="h-[300px]">
        <ResponsiveContainer width="100%" height="100%">
          <BarChart data={data} layout="vertical" margin={{ left: 20, right: 20, top: 10, bottom: 10 }}>
            <CartesianGrid strokeDasharray="3 3" className="stroke-muted" />
            <XAxis type="number" tick={{ fill: "var(--foreground)" }} />
            <YAxis dataKey="name" type="category" tick={{ fill: "var(--foreground)" }} width={100} />
            <Tooltip
              contentStyle={{
                backgroundColor: "var(--background)",
                borderColor: "var(--border)",
                color: "var(--foreground)",
              }}
              labelStyle={{ color: "var(--foreground)" }}
              itemStyle={{ color: "var(--foreground)" }}
              formatter={(value) => [`${value} appointments`, ""]}
            />
            <Legend formatter={(value) => <span className="text-foreground">Appointments</span>} />
            <Bar
              dataKey="bookings"
              name="Appointments"
              fill="#0ea5e9" 
              radius={[0, 4, 4, 0]}
            />
          </BarChart>
        </ResponsiveContainer>
      </CardContent>
    </Card>
  )
}

