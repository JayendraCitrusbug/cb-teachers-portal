import React from "react";
import { ArrowRight } from "lucide-react";
import { cn } from "@/lib/utils"; // Use your utility if you have one

type TableHeader = {
  label: string;
  key: string;
};

type CriticalStudentCardProps = {
  headers: TableHeader[];
  row: Record<string, React.ReactNode>;
};

export const CriticalStudentCard: React.FC<CriticalStudentCardProps> = ({
  headers,
  row,
}) => (
  <div className="bg-white rounded-xl p-5 shadow border border-gray-100 max-w-md w-full">
    {headers.map((header, idx) => (
      <div
        className={cn(
          "flex items-center justify-between",
          idx !== headers.length - 1 && "mb-2"
        )}
        key={header.key}
      >
        <div className="font-semibold text-[#64676C] min-w-[130px]">
          {header.label}
        </div>
        <div className="flex-1 text-[15px] flex items-center justify-end gap-2">
          {header.key === "name" ? (
            <span className="text-[var(--color-primary)] font-semibold flex items-center gap-1 cursor-pointer">
              {row[header.key]}
              <ArrowRight className="w-4 h-4" />
            </span>
          ) : (
            row[header.key]
          )}
        </div>
      </div>
    ))}
  </div>
);
