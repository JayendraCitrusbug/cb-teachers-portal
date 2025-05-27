import { CircularProgressbar, buildStyles } from "react-circular-progressbar";

import { COLORS } from "@/constants";

import "react-circular-progressbar/dist/styles.css";

type CircleIndicatorProps = {
  label: string;
  percent: number;
  color: keyof typeof COLORS;
  className?: string;
  strokeWidth?: number;
};

export function CircleIndicator({
  label,
  percent,
  color,
  className,
  strokeWidth,
}: CircleIndicatorProps) {
  return (
    <div
      className={`flex flex-col items-center justify-center space-y-1 w-[140px] h-[140px] ${className}`}
    >
      <CircularProgressbar
        value={percent}
        text={`${percent}%`}
        strokeWidth={strokeWidth || 10}
        styles={buildStyles({
          textSize: "28px",
          pathColor: COLORS[color],
          textColor: COLORS[color],
          trailColor: COLORS.SECONDARY,
        })}
      />
      <span className="font-[family-name:var(--font-geist-sans)] font-bold text-xs text-muted-foreground mt-1 text-center">
        {label}
      </span>
    </div>
  );
}
