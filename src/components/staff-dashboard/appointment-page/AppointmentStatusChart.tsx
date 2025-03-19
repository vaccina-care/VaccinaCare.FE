"use client"

import { useEffect, useRef } from "react"
import { Chart, registerables } from "chart.js"

// Register Chart.js components
Chart.register(...registerables)

interface AppointmentStatusChartProps {
    statusCounts: Record<string, number>
}

export function AppointmentStatusChart({ statusCounts }: AppointmentStatusChartProps) {
    const chartRef = useRef<HTMLCanvasElement>(null)
    const chartInstance = useRef<Chart | null>(null)

    useEffect(() => {
        if (!chartRef.current) return

        // Destroy previous chart if it exists
        if (chartInstance.current) {
            chartInstance.current.destroy()
        }

        // Prepare data for chart
        const labels = Object.keys(statusCounts)
        const data = Object.values(statusCounts)

        // Define colors for different statuses
        const getStatusColor = (status: string) => {
            switch (status.toLowerCase()) {
                case "confirmed":
                    return "rgba(59, 130, 246, 0.8)" // blue
                case "completed":
                    return "rgba(34, 197, 94, 0.8)" // green
                case "cancelled":
                    return "rgba(239, 68, 68, 0.8)" // red
                case "pending":
                    return "rgba(234, 179, 8, 0.8)" // yellow
                default:
                    return "rgba(107, 114, 128, 0.8)" // gray
            }
        }

        // Create new chart
        const ctx = chartRef.current.getContext("2d")
        if (ctx) {
            chartInstance.current = new Chart(ctx, {
                type: "pie",
                data: {
                    labels,
                    datasets: [
                        {
                            data,
                            backgroundColor: labels.map(getStatusColor),
                            borderColor: labels.map((status) => getStatusColor(status).replace("0.8", "1")),
                            borderWidth: 1,
                        },
                    ],
                },
                options: {
                    responsive: true,
                    plugins: {
                        legend: {
                            position: "bottom",
                        },
                        tooltip: {
                            callbacks: {
                                label: (context) => {
                                    const label = context.label || ""
                                    const value = context.raw as number
                                    const total = data.reduce((a, b) => a + b, 0)
                                    const percentage = Math.round((value / total) * 100)
                                    return `${label}: ${value} (${percentage}%)`
                                },
                            },
                        },
                    },
                },
            })
        }

        // Cleanup on unmount
        return () => {
            if (chartInstance.current) {
                chartInstance.current.destroy()
            }
        }
    }, [statusCounts])

    return (
        <div className="w-full h-64 flex items-center justify-center">
            {Object.keys(statusCounts).length === 0 ? (
                <p className="text-muted-foreground">No data available</p>
            ) : (
                <canvas ref={chartRef} />
            )}
        </div>
    )
}

