"use client"

import { Bar, BarChart, CartesianGrid, Legend, ResponsiveContainer, Tooltip, XAxis, YAxis, Cell } from "recharts"

interface RatingDistributionProps {
  data: {
    rating: string
    count: number
  }[]
}

export function RatingDistributionChart({ data }: RatingDistributionProps) {
  const getBarColor = (rating: string) => {
    switch (rating) {
      case "5 Stars":
        return "#fbbf24"
      case "4 Stars":
        return "#f59e0b"
      case "3 Stars":
        return "#d97706"
      case "2 Stars":
        return "#b45309"
      case "1 Star":
        return "#92400e"
      default:
        return "#fbbf24"
    }
  }

  return (
    <ResponsiveContainer width="100%" height="100%">
      <BarChart data={data} layout="vertical" margin={{ left: 20, right: 20, top: 20, bottom: 20 }}>
        <CartesianGrid strokeDasharray="3 3" className="stroke-muted" />
        <XAxis
          type="number"
          tick={{ className: "text-black dark:text-white" }}
        />
        <YAxis
          dataKey="rating"
          type="category"
          tick={{ className: "text-black dark:text-white" }}
          width={70}
        />
        <Tooltip
          contentStyle={{
            backgroundColor: "var(--background)",
            borderColor: "var(--border)",
            color: "var(--foreground)",
          }}
          labelStyle={{ color: "var(--foreground)" }}
          itemStyle={{ color: "var(--foreground)" }}
          formatter={(value) => [`${value} ratings`, ""]}
        />
        <Legend
          formatter={(_value, _entry, _index) => (
            <span className="text-black dark:text-white">Number of Ratings</span>
          )}
          iconSize={0}
        />
        <Bar dataKey="count" name="Number of Ratings" radius={[0, 4, 4, 0]}>
          {data.map((entry, index) => (
            <Cell key={`cell-${index}`} fill={getBarColor(entry.rating)} />
          ))}
        </Bar>
      </BarChart>
    </ResponsiveContainer>
  )
}