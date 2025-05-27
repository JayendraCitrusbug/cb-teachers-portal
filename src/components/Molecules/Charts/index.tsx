"use client";

import { TrendingUp } from "lucide-react";
import { Bar, BarChart, CartesianGrid, LabelList, XAxis } from "recharts";

import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  ChartConfig,
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
} from "@/components/ui/chart";
import React from "react";

const chartConfig = {
  desktop: {
    label: "Desktop",
    color: "hsl(var(--chart-1))",
  },
} satisfies ChartConfig;

interface BarChartProps {
  data: any[];
  config?: ChartConfig;
  footer?: {
    title?: string;
    content?: { label: string; color: string }[];
  };
  header?: {
    title: React.ReactNode;
  };
  className?: string;
  dateKeys: {
    key: string;
    label: string;
    color: string;
    suffix?: string;
    barConfig?: any;
  }[];
  barTops?: boolean;
}

export const BarChartComponent: React.FC<BarChartProps> = ({
  data,
  config,
  footer,
  header,
  className = "",
  dateKeys,
  barTops,
}) => {
  return (
    <Card className={`${className} h-full w-full relative py-3`}>
      <CardHeader>
        <CardDescription>{header?.title && header.title}</CardDescription>
      </CardHeader>
      <CardContent>
        <ChartContainer config={{ ...chartConfig, ...config }}>
          <BarChart accessibilityLayer data={data}>
            <CartesianGrid vertical={false} />
            <XAxis
              dataKey="month"
              tickLine={false}
              tickMargin={10}
              axisLine={false}
              tickFormatter={(value) => value.slice(0, 3)}
            />
            <ChartTooltip
              cursor={false}
              content={<ChartTooltipContent hideLabel />}
            />
            {dateKeys.map((key) => (
              <Bar
                key={key.label}
                dataKey={key.key}
                fill={key.color}
                radius={[3, 3, 3, 3]}
                {...(key.barConfig || {})}
              >
                {barTops && (
                  <LabelList
                    position="top"
                    className="fill-foreground font-sans text-xs font-medium"
                    fontSize={12}
                    formatter={(value: number) =>
                      key.suffix ? `${value}${key.suffix}` : value
                    }
                  />
                )}
              </Bar>
            ))}
          </BarChart>
        </ChartContainer>
      </CardContent>
      <CardFooter className="flex-col items-center gap-2 text-sm">
        {footer?.title && (
          <div className="text-[#474747E5] font-semibold">{footer.title}</div>
        )}
        {footer?.content && footer?.content?.length > 0 && (
          <div className="flex items-center justify-center gap-8 mt-2">
            {footer?.content?.map((item) => (
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
      </CardFooter>
    </Card>
  );
};
