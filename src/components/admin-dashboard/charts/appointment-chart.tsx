
"use client"

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Bar, BarChart, CartesianGrid, Legend, ResponsiveContainer, Tooltip, XAxis, YAxis } from "recharts"

const months = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"]

const data = months.map((month) => {
  const completed = Math.floor(Math.random() * 80) + 20
  const cancelled = Math.floor(Math.random() * 20)
  const rescheduled = Math.floor(Math.random() * 30)

  return {
    month,
    completed,
    cancelled,
    rescheduled,
    total: completed + cancelled + rescheduled,
  }
})

export function AppointmentChart() {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Monthly Appointments</CardTitle>
        <CardDescription>Number of appointments by month and status</CardDescription>
      </CardHeader>
      <CardContent>
        <div className="h-[300px]">
          <ResponsiveContainer width="100%" height="100%">
            <BarChart data={data}>
              <CartesianGrid strokeDasharray="3 3" className="stroke-muted" />
              <XAxis dataKey="month" tick={{ fill: "var(--foreground)" }} />
              <YAxis tick={{ fill: "var(--foreground)" }} />
              <Tooltip
                contentStyle={{
                  backgroundColor: "var(--background)",
                  borderColor: "var(--border)",
                  color: "var(--foreground)",
                }}
                labelStyle={{ color: "var(--foreground)" }}
                itemStyle={{ color: "var(--foreground)" }}
              />
              <Legend formatter={(value) => <span className="text-foreground">{value}</span>} />
              <Bar dataKey="completed" name="Completed" fill="#10b981" />
              <Bar dataKey="cancelled" name="Cancelled" fill="#f43f5e" />
              <Bar dataKey="rescheduled" name="Rescheduled" fill="#f59e0b" />
            </BarChart>
          </ResponsiveContainer>
        </div>
      </CardContent>
    </Card>
  )
}

