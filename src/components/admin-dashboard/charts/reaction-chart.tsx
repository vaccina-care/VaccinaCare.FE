"use client"

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Line, LineChart, CartesianGrid, Legend, ResponsiveContainer, Tooltip, XAxis, YAxis } from "recharts"

// Sample adverse reaction data over time
const data = [
  { month: "Jan", mild: 12, moderate: 5, severe: 1 },
  { month: "Feb", mild: 15, moderate: 6, severe: 2 },
  { month: "Mar", mild: 18, moderate: 7, severe: 1 },
  { month: "Apr", mild: 14, moderate: 4, severe: 0 },
  { month: "May", mild: 16, moderate: 5, severe: 1 },
  { month: "Jun", mild: 19, moderate: 8, severe: 2 },
  { month: "Jul", mild: 22, moderate: 9, severe: 3 },
  { month: "Aug", mild: 25, moderate: 10, severe: 2 },
  { month: "Sep", mild: 20, moderate: 7, severe: 1 },
  { month: "Oct", mild: 18, moderate: 6, severe: 1 },
  { month: "Nov", mild: 15, moderate: 5, severe: 0 },
  { month: "Dec", mild: 13, moderate: 4, severe: 1 },
]

export function ReactionsChart() {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Adverse Reactions Monitoring</CardTitle>
        <CardDescription>Reported adverse reactions by severity over time</CardDescription>
      </CardHeader>
      <CardContent>
        <div className="h-[300px]">
          <ResponsiveContainer width="100%" height="100%">
            <LineChart data={data}>
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
              <Legend formatter={(value, entry, index) => <span className="text-foreground">{value}</span>} />
              <Line type="monotone" dataKey="mild" name="Mild" stroke="#3b82f6" strokeWidth={2} /> {/* Blue */}
              <Line type="monotone" dataKey="moderate" name="Moderate" stroke="#f59e0b" strokeWidth={2} /> {/* Amber */}
              <Line type="monotone" dataKey="severe" name="Severe" stroke="#f43f5e" strokeWidth={2} /> {/* Red */}
            </LineChart>
          </ResponsiveContainer>
        </div>
      </CardContent>
    </Card>
  )
}

