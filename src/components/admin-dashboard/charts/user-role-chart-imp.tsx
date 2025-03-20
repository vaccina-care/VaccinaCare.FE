"use client"

import { useState, useEffect } from "react"
import { Cell, Legend, Pie, PieChart, ResponsiveContainer, Sector } from "recharts"

interface ChartData {
  name: string
  value: number
  color: string
}

interface UserRoleChartProps {
  data: ChartData[]
}

const renderActiveShape = (props: any) => {
  const { cx, cy, innerRadius, outerRadius, startAngle, endAngle, fill, payload, value, percent } = props

  const hoverInnerRadius = innerRadius - 5
  const hoverOuterRadius = outerRadius + 5

  return (
    <g>
      <defs>
        <filter id="shadow" x="-20%" y="-20%" width="140%" height="140%">
          <feDropShadow dx="0" dy="0" stdDeviation="5" floodColor={fill} floodOpacity="0.6" />
        </filter>
      </defs>
      <Sector
        cx={cx}
        cy={cy}
        innerRadius={hoverInnerRadius}
        outerRadius={hoverOuterRadius}
        startAngle={startAngle}
        endAngle={endAngle}
        fill={fill}
        filter="url(#shadow)"
        style={{ transition: "all 0.3s ease-in-out" }}
      />
      <Sector
        cx={cx}
        cy={cy}
        innerRadius={innerRadius}
        outerRadius={outerRadius}
        startAngle={startAngle}
        endAngle={endAngle}
        fill={fill}
        style={{ transition: "all 0.3s ease-in-out" }}
      />
      <text x={cx} y={cy - 15} textAnchor="middle" fill={fill} className="font-bold text-base">{payload.name}</text>
      <text x={cx} y={cy + 5} textAnchor="middle" fill={fill} className="font-medium">{value}</text>
      <text x={cx} y={cy + 25} textAnchor="middle" fill={fill} className="text-sm">{`(${(percent * 100).toFixed(0)}%)`}</text>
    </g>
  )
}

export function UserRoleChartImp({ data }: UserRoleChartProps) {
  const [activeIndex, setActiveIndex] = useState<number | null>(null)
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted || !data || data.length === 0) return <div>No data available</div>

  const onPieEnter = (_: any, index: number) => setActiveIndex(index)
  const onPieLeave = () => setActiveIndex(null)

  const onLegendEnter = (entry: any) => {
    const index = data.findIndex((item) => item.name === entry.value)
    if (index !== -1) setActiveIndex(index)
  }

  const onLegendLeave = () => setActiveIndex(null)

  return (
    <ResponsiveContainer width="100%" height="100%">
      <PieChart>
        <Pie
          activeIndex={activeIndex ?? undefined}
          activeShape={renderActiveShape}
          data={data}
          cx="50%"
          cy="50%"
          innerRadius={60}
          outerRadius={90}
          dataKey="value"
          nameKey="name"
          onMouseEnter={onPieEnter}
          onMouseLeave={onPieLeave}
          paddingAngle={4}
          stroke="none"
        >
          {data.map((entry, index) => (
            <Cell key={`cell-${index}`} fill={entry.color} stroke="none" />
          ))}
        </Pie>
        <Legend
          layout="vertical"
          verticalAlign="middle"
          align="right"
          iconSize={0}
          onMouseEnter={onLegendEnter}
          onMouseLeave={onLegendLeave}
          formatter={(value) => {
            const entry = data.find((item) => item.name === value)
            const color = entry?.color || "#000000"
            return (
              <span className="text-foreground cursor-pointer flex items-center">
                <span className="inline-block w-3 h-3 mr-2 rounded-sm" style={{ backgroundColor: color }} />
                {value}
              </span>
            )
          }}
        />
      </PieChart>
    </ResponsiveContainer>
  )
}