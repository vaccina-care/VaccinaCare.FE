"use client";

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import {
  Area,
  AreaChart,
  CartesianGrid,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
} from "recharts";
import { useEffect, useState } from "react";
import { getMonthlyRevenue } from "@/api/admin/dashboard";

export function RevenueChart() {
  const [revenueData, setRevenueData] = useState<{ month: string; revenue: number }[]>([]);

  useEffect(() => {
    const fetchRevenueData = async () => {
      try {
        const response = await getMonthlyRevenue();
        if (response.isSuccess) {
          setRevenueData(response.data);
        } else {
          console.error("Failed to fetch revenue data:", response.message);
          setRevenueData([]);
        }
      } catch (error) {
        console.error("Error fetching revenue data:", error);
        setRevenueData([]);
      }
    };

    fetchRevenueData();
  }, []);

  const maxRevenue = revenueData.length > 0 
    ? Math.max(...revenueData.map((d) => d.revenue)) 
    : 1000; 

  const formatYAxis = (value: number) => {
    if (value >= 1000000) return `$${(value / 1000000).toFixed(1)}M`;
    if (value >= 1000) return `$${(value / 1000).toFixed(1)}K`;
    return `$${value}`;
  };

  return (
    <Card>
      <CardHeader>
        <CardTitle>Monthly Revenue</CardTitle>
        <CardDescription>Total revenue over the past year</CardDescription>
      </CardHeader>
      <CardContent>
        <div className="h-[300px]">
          <ResponsiveContainer width="100%" height="100%">
            <AreaChart data={revenueData}>
              <CartesianGrid strokeDasharray="3 3" className="stroke-muted" />
              <XAxis dataKey="month" tick={{ fill: "var(--foreground)" }} />
              <YAxis
                tickFormatter={formatYAxis}
                tick={{ fill: "var(--foreground)" }}
                width={80}
                domain={[0, maxRevenue * 1.1]} 
                tickCount={6} 
              />
              <Tooltip
                formatter={(value) => [`$${(value as number).toLocaleString()}`, "Revenue"]}
                contentStyle={{
                  backgroundColor: "var(--background)",
                  borderColor: "var(--border)",
                  color: "var(--foreground)",
                }}
                labelStyle={{ color: "var(--foreground)" }}
                itemStyle={{ color: "var(--foreground)" }}
              />
              <Area
                type="monotone"
                dataKey="revenue"
                name="Revenue"
                stroke="#3b82f6"
                fill="rgba(59, 130, 246, 0.2)"
              />
            </AreaChart>
          </ResponsiveContainer>
        </div>
      </CardContent>
    </Card>
  );
}