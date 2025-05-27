import { PieChart, Pie, Cell } from "recharts";
import { useState } from "react";
import { ChevronDown } from "lucide-react";

// Dropdown
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

// Common chart card
export default function InsightChartCard({
  title,
  type,
  data,
  legend = [],
  showDropdown = false,
}: {
  title: string;
  type: "pie" | "bar" | "line";
  data: any[];
  legend?: { label: string; color: string }[];
  showDropdown?: boolean;
}) {
  return (
    <div className="w-full rounded-xl border border-gray-200 px-6 py-5 bg-white">
      {/* Header */}
      <div className="flex gap-4 items-start justify-between mb-2">
        <h2 className="text-2xl font-semibold text-[#222] leading-tight mt-1">
          {title}
        </h2>
        {showDropdown && <PeriodDropdown />}
      </div>

      {/* Chart */}
      <div className="flex flex-col items-center justify-center w-full">
        {type === "pie" && (
          <PieChart width={320} height={240}>
            <Pie
              data={data}
              cx={160}
              cy={110}
              innerRadius={0}
              outerRadius={90}
              paddingAngle={1}
              dataKey="value"
              startAngle={90}
              endAngle={-270}
              isAnimationActive={false}
              stroke="#fff"
              strokeWidth={2}
              label
            >
              {data.map((entry, idx) => (
                <Cell key={entry.name} fill={entry.color} />
              ))}
            </Pie>
          </PieChart>
        )}

        {/* Add more chart types later here */}
        {type !== "pie" && (
          <div className="text-sm text-gray-500">
            Chart type "{type}" not yet supported.
          </div>
        )}
      </div>

      {/* Legend */}
      {legend.length > 0 && (
        <div className="flex items-center justify-center gap-8 mt-2">
          {legend.map((item) => (
            <div className="flex items-center gap-1" key={item.label}>
              <span
                className="inline-block w-3 h-3 rounded-full"
                style={{ backgroundColor: item.color }}
              />
              <span className="text-sm font-medium text-gray-700">
                {item.label}
              </span>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
