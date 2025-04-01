"use client";

import { Bar, BarChart, CartesianGrid, Legend, ResponsiveContainer, Tooltip, XAxis, YAxis } from "recharts";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

export interface VaccineBookingDto {
  vaccineName: string;
  bookingCount: number;
}

export interface VaccineMostBookedChartProps {
  data: VaccineBookingDto[];
}

export function VaccineMostBookedChart({ data }: VaccineMostBookedChartProps) {
  const chartData = data.slice(0, 5).map((item) => ({
    name: item.vaccineName,
    bookings: item.bookingCount,
  }));

  const maxBookings = Math.max(...chartData.map((item) => item.bookings), 0);
  const tickInterval = 5;
  const ticks = Array.from({ length: Math.ceil(maxBookings / tickInterval) + 1 }, (_, i) => i * tickInterval);

  return (
    <Card>
      <CardHeader>
        <CardTitle>Top 5 Most Booked Vaccines</CardTitle>
        <CardDescription>Number of bookings per vaccine</CardDescription>
      </CardHeader>
      <CardContent className="h-[350px]">
        {chartData.length > 0 ? (
          <ResponsiveContainer width="100%" height="100%">
            <BarChart
              data={chartData}
              layout="vertical"
              margin={{ top: 10, right: 20, left: 20, bottom: 40 }}
            >
              <CartesianGrid strokeDasharray="3 3" className="stroke-muted" />
              <XAxis
                type="number"
                tick={{ className: "fill-foreground" }}
                ticks={ticks}
                domain={[0, ticks[ticks.length - 1] + 5]}
              />
              <YAxis
                dataKey="name"
                type="category"
                tick={{ className: "fill-foreground" }} 
                width={120}
              />
              <Tooltip
                contentStyle={{
                  backgroundColor: "var(--background)",
                  borderColor: "var(--border)",
                  borderRadius: "4px",
                  color: "var(--foreground)",
                }}
                labelStyle={{
                  color: "var(--foreground)",
                }}
                itemStyle={{
                  color: "var(--foreground)",
                }}
                formatter={(value) => [`${value} bookings`, "Bookings"]}
              />
              <Legend
                verticalAlign="bottom"
                height={36}
                wrapperStyle={{ paddingTop: 10 }}
                formatter={() => <span className="text-foreground">Bookings</span>}
              />
              <Bar
                dataKey="bookings"
                name="Bookings"
                fill="#0ea5e9"
                radius={[0, 4, 4, 0]}
                barSize={30}
              />
            </BarChart>
          </ResponsiveContainer>
        ) : (
          <div className="flex items-center justify-center h-full text-muted-foreground">
            No booking data available
          </div>
        )}
      </CardContent>
    </Card>
  );
}
