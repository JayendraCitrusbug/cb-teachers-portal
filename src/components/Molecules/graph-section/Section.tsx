"use client";

import * as React from "react";
import { Pie, PieChart, Label } from "recharts";
import { cn } from "@/lib/utils";
import { Card } from "@/components/ui/card";
import { useState } from "react";
import { ChevronDown } from "lucide-react";

export const PeriodDropdown = ({
  options = ["Time Period", "Last Week", "This Month"],
}) => {
  const [selected, setSelected] = useState(options[0]);
  return (
    <div className="relative">
      <button className="border flex items-center gap-4 border-gray-200 rounded-lg py-2 px-4 bg-white text-gray-700 text-[15px] min-w-[120px] text-left shadow-sm focus:ring-2 focus:ring-blue-200 transition-all">
        <span>{selected}</span>
        <ChevronDown className="h-4 w-4 text-gray-500" />
      </button>
    </div>
  );
};

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
  showDropdown?: boolean;
}

const CHART_SIZE = 180;
const INNER_RADIUS = 50;
const OUTER_RADIUS = 85;

export function PieChartSection({
  title = "Total Students",
  data,
  className,
  showDropdown = false,
}: PieChartSectionProps) {
  const total = React.useMemo(
    () => data.reduce((acc, cur) => acc + cur.value, 0),
    [data]
  );

  return (
    <Card
      className={`w-full p-6 flex flex-col gap-4 rounded-xl shadow border ${className}`}
    >
      <div className="flex w-full items-center gap-4 justify-between mb-2">
        <div className="text-xl font-semibold">{title}</div>
        {showDropdown && <PeriodDropdown />}
      </div>
      <div className="flex flex-col items-center justify-center gap-8 flex-wrap">
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
        <div className="flex flex-wrap justify-center gap-4 max-w-[400px]">
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
