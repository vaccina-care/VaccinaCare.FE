"use client"

import { useState, useEffect } from "react"
import { Line, LineChart, CartesianGrid, Legend, ResponsiveContainer, Tooltip, XAxis, YAxis } from "recharts"

// Define the data structure type
interface TrendData {
  month: string;
  "Average Rating": number;
  Service: number;
  Vaccine: number;
  Staff: number;
  Facility: number;
}

// Generate mock data for rating trends
const generateMockTrendData = (): TrendData[] => {
  const months = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"]
  const currentMonth = new Date().getMonth()

  // Get the last 6 months
  const last6Months = []
  for (let i = 5; i >= 0; i--) {
    const monthIndex = (currentMonth - i + 12) % 12
    last6Months.push(months[monthIndex])
  }

  return last6Months.map((month) => {
    const baseRating = 3.5 + Math.random() * 1.3

    return {
      month,
      "Average Rating": Number.parseFloat(baseRating.toFixed(1)),
      Service: Number.parseFloat((baseRating + (Math.random() * 0.6 - 0.3)).toFixed(1)),
      Vaccine: Number.parseFloat((baseRating + (Math.random() * 0.6 - 0.3)).toFixed(1)),
      Staff: Number.parseFloat((baseRating + (Math.random() * 0.6 - 0.3)).toFixed(1)),
      Facility: Number.parseFloat((baseRating + (Math.random() * 0.6 - 0.3)).toFixed(1)),
    }
  })
}

export function RatingTrendChart() {
  // Add type annotation to useState
  const [data, setData] = useState<TrendData[]>([])
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
    setData(generateMockTrendData())
  }, [])

  if (!mounted) return null

  return (
    <ResponsiveContainer width="100%" height="100%">
      <LineChart data={data} margin={{ left: 0, right: 20, top: 20, bottom: 0 }}>
        <CartesianGrid strokeDasharray="3 3" className="stroke-muted" />
        <XAxis dataKey="month" tick={{ className: "text-black dark:text-white" }} />
        <YAxis domain={[0, 5]} ticks={[0, 1, 2, 3, 4, 5]} tick={{ className: "text-black dark:text-white" }} />
        <Tooltip
          contentStyle={{
            backgroundColor: "var(--background)",
            borderColor: "var(--border)",
            color: "var(--foreground)",
          }}
          labelStyle={{ color: "var(--foreground)" }}
          itemStyle={{ color: "var(--foreground)" }}
          formatter={(value: number) => [value, ""]}
        />
        <Legend formatter={(value) => <span className="text-foreground">{value}</span>} />
        <Line
          type="monotone"
          dataKey="Average Rating"
          stroke="#8884d8"
          strokeWidth={3}
          dot={{ r: 4 }}
          activeDot={{ r: 6 }}
        />
        <Line type="monotone" dataKey="Service" stroke="#3b82f6" strokeWidth={1.5} />
        <Line type="monotone" dataKey="Vaccine" stroke="#10b981" strokeWidth={1.5} />
        <Line type="monotone" dataKey="Staff" stroke="#8b5cf6" strokeWidth={1.5} />
        <Line type="monotone" dataKey="Facility" stroke="#f59e0b" strokeWidth={1.5} />
      </LineChart>
    </ResponsiveContainer>
  )
}