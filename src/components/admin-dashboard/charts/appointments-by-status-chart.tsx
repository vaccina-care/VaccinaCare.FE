"use client"

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Cell, Legend, Pie, PieChart, ResponsiveContainer, Tooltip } from "recharts"

export interface AppointmentStatusDistribution {
  name: string
  value: number
  color: string
}

interface AppointmentsByStatusChartProps {
  data: AppointmentStatusDistribution[]
  chartKey: string;
}

export function AppointmentsByStatusChart({ data, chartKey }: AppointmentsByStatusChartProps) {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Appointments by Status</CardTitle>
        <CardDescription>Distribution of appointments by their status</CardDescription>
      </CardHeader>
      <CardContent>
        <div className="h-[300px]">
          <ResponsiveContainer width="100%" height="100%" key={chartKey}>
            <PieChart>
              <Pie
                data={data}
                cx="50%"
                cy="50%"
                labelLine={true}
                outerRadius={80}
                fill="#8884d8"
                dataKey="value"
                nameKey="name"
                label={({ name, value }) => `${name}: ${value}`}
              >
                {data.map((entry, index) => (
                  <Cell key={`cell-${index}`} fill={entry.color} />
                ))}
              </Pie>
              <Tooltip
                formatter={(value, name) => [`${value} Appointments`, name]}
                contentStyle={{
                  backgroundColor: "var(--background)",
                  borderColor: "var(--border)",
                  color: "var(--foreground)",
                }}
                itemStyle={{ color: "var(--foreground)" }}
                labelStyle={{ color: "var(--foreground)" }}
              />
              <Legend formatter={(value) => <span className="text-foreground">{value}</span>} />
            </PieChart>
          </ResponsiveContainer>
        </div>
      </CardContent>
    </Card>
  )
}