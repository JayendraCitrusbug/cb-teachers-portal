"use client";

import * as React from "react";
import { format } from "date-fns";
import { ArrowLeft, ArrowRight } from "lucide-react";

import { CalendarIcon } from "lucide-react";

import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { Calendar } from "@/components/ui/calendar";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";

import { COLORS } from "@/constants";

export const DatePicker: React.FC = () => {
  const [date, setDate] = React.useState<Date>();

  return (
    <Popover>
      <div className="flex items-center h-[40px] gap-2.5">
        <div className="bg-[var(--color-secondary)] h-full w-[40px] flex items-center justify-center rounded-xs">
          <ArrowLeft color={COLORS.PRIMARY} />
        </div>
        <PopoverTrigger asChild>
          <Button
            variant="default"
            className={cn(
              "w-[140px] font-normal bg-[var(--color-primary)] rounded-xs h-full"
            )}
          >
            {date ? format(date, "PPP") : <span>Today</span>}
          </Button>
        </PopoverTrigger>
        <div className="bg-[var(--color-secondary)] h-full w-[40px] flex items-center justify-center rounded-xs">
          <ArrowRight color={COLORS.PRIMARY} />
        </div>
      </div>
      <PopoverContent className="w-auto p-0" align="start">
        <Calendar
          mode="single"
          selected={date}
          onSelect={setDate}
          initialFocus
        />
      </PopoverContent>
    </Popover>
  );
};
