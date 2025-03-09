"use client"

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Cell, Legend, Pie, PieChart, ResponsiveContainer, Tooltip } from "recharts"

// Sample age group vaccination coverage data
const data = [
  { name: "0-5 years", value: 85, color: "#3b82f6" }, // Blue
  { name: "6-18 years", value: 78, color: "#10b981" }, // Green
  { name: "19-49 years", value: 62, color: "#f59e0b" }, // Amber
  { name: "50-64 years", value: 70, color: "#8b5cf6" }, // Purple
  { name: "65+ years", value: 81, color: "#ec4899" }, // Pink
]

export function VaccinationAgeChart() {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Vaccination Coverage by Age Group</CardTitle>
        <CardDescription>Percentage of population vaccinated in each age group</CardDescription>
      </CardHeader>
      <CardContent>
        <div className="h-[300px]">
          <ResponsiveContainer width="100%" height="100%">
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
                label={({ name, value }) => `${name}: ${value}%`}
              >
                {data.map((entry, index) => (
                  <Cell key={`cell-${index}`} fill={entry.color} />
                ))}
              </Pie>
              <Tooltip
                formatter={(value) => [`${value}%`, "Coverage Rate"]}
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

