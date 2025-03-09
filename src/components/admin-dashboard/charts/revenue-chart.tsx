"use client"

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Area, AreaChart, CartesianGrid, Legend, ResponsiveContainer, Tooltip, XAxis, YAxis } from "recharts"

const months = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"]

const data = months.map((month, index) => {
  const baseRevenue = 8000 + index * 800 
  const revenue = Math.floor(baseRevenue + (Math.random() * 2000 - 1000)) 

  const expenses = Math.floor(revenue * (0.4 + Math.random() * 0.15))
  const profit = revenue - expenses

  return {
    month,
    revenue,
    expenses,
    profit,
  }
})

export function RevenueChart() {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Monthly Financial Performance</CardTitle>
        <CardDescription>Revenue, expenses, and profit over the past year</CardDescription>
      </CardHeader>
      <CardContent>
        <div className="h-[300px]">
          <ResponsiveContainer width="100%" height="100%">
            <AreaChart data={data}>
              <CartesianGrid strokeDasharray="3 3" className="stroke-muted" />
              <XAxis dataKey="month" tick={{ fill: "var(--foreground)" }} />
              <YAxis tickFormatter={(value) => `$${value.toLocaleString()}`} tick={{ fill: "var(--foreground)" }} />
              <Tooltip
                formatter={(value) => [`$${(value as number).toLocaleString()}`, ""]}
                contentStyle={{
                  backgroundColor: "var(--background)",
                  borderColor: "var(--border)",
                  color: "var(--foreground)",
                }}
                labelStyle={{ color: "var(--foreground)" }}
                itemStyle={{ color: "var(--foreground)" }}
              />
              <Legend formatter={(value, entry, index) => <span className="text-foreground">{value}</span>} />
              <Area
                type="monotone"
                dataKey="revenue"
                name="Revenue"
                stackId="1"
                stroke="#3b82f6" 
                fill="rgba(59, 130, 246, 0.2)"
              />
              <Area
                type="monotone"
                dataKey="expenses"
                name="Expenses"
                stackId="2"
                stroke="#f43f5e" 
                fill="rgba(244, 63, 94, 0.2)"
              />
              <Area
                type="monotone"
                dataKey="profit"
                name="Profit"
                stackId="3"
                stroke="#10b981" 
                fill="rgba(16, 185, 129, 0.2)"
              />
            </AreaChart>
          </ResponsiveContainer>
        </div>
      </CardContent>
    </Card>
  )
}

