"use client"

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Bar, BarChart, CartesianGrid, Legend, ResponsiveContainer, Tooltip, XAxis, YAxis } from "recharts"

// Interface cho dữ liệu biểu đồ
export interface AppointmentByMonth {
  month: string;
  Pending: number;
  Completed: number;
  Cancelled: number;
}

interface AppointmentChartProps {
  data: AppointmentByMonth[];
  chartKey: string;
}

export function AppointmentChart({ data, chartKey }: AppointmentChartProps) {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Monthly Appointments</CardTitle>
        <CardDescription>Number of appointments by month and status</CardDescription>
      </CardHeader>
      <CardContent>
        <div className="h-[300px]">
          <ResponsiveContainer width="100%" height="100%" key={chartKey}>
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
              <Bar dataKey="Completed" name="Completed" fill="#10b981" />
              <Bar dataKey="Cancelled" name="Cancelled" fill="#f43f5e" />
              <Bar dataKey="Pending" name="Pending" fill="#f59e0b" />
            </BarChart>
          </ResponsiveContainer>
        </div>
      </CardContent>
    </Card>
  )
}