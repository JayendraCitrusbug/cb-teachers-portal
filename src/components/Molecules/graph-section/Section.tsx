"use client";

import * as React from "react";
import { Pie, PieChart, Label } from "recharts";
import { cn } from "@/lib/utils";
import { Card } from "@/components/ui/card";

type StudentStatus = {
  label: string;
  value: number;
  color: string; // Tailwind color e.g. 'bg-red-500'
  fill: string; // Color for recharts, e.g. '#F87171'
};

interface PieChartSectionProps {
  title?: string;
  data: StudentStatus[];
  className?: string;
}

const CHART_SIZE = 180;
const INNER_RADIUS = 50;
const OUTER_RADIUS = 85;

export function PieChartSection({
  title = "Total Students",
  data,
  className,
}: PieChartSectionProps) {
  const total = React.useMemo(
    () => data.reduce((acc, cur) => acc + cur.value, 0),
    [data]
  );

  return (
    <Card
      className={`w-full p-6 flex flex-col gap-4 rounded-xl shadow border ${className}`}
    >
      <div className="text-xl font-semibold">{title}</div>
      <div className="flex items-center gap-8 flex-wrap">
        {/* Donut Chart */}
        <PieChart width={CHART_SIZE} height={CHART_SIZE}>
          <Pie
            data={data}
            dataKey="value"
            nameKey="label"
            cx="50%"
            cy="50%"
            innerRadius={INNER_RADIUS}
            outerRadius={OUTER_RADIUS}
            stroke="white"
            strokeWidth={2}
          >
            <Label
              position="center"
              content={({ viewBox }) => {
                if (!viewBox) return null;
                const { cx, cy } = viewBox as any;
                return (
                  <text
                    x={cx}
                    y={cy}
                    textAnchor="middle"
                    dominantBaseline="middle"
                  >
                    <tspan className="fill-black text-3xl font-bold">
                      {total}
                    </tspan>
                    <tspan
                      x={cx}
                      y={cy + 20}
                      className="fill-gray-400 text-base font-normal"
                    >
                      Students
                    </tspan>
                  </text>
                );
              }}
            />
          </Pie>
        </PieChart>

        {/* Legend */}
        <div className="flex flex-wrap justify-center gap-4">
          {data.map((item, index) => (
            <div
              key={`${item.label}_${index}`}
              className="flex items-center gap-2 text-sm font-medium"
            >
              <span className={cn("h-3 w-3 rounded-xs", item.color)} />
              <span>
                {item.label} ({item.value})
              </span>
            </div>
          ))}
        </div>
      </div>
    </Card>
  );
}
