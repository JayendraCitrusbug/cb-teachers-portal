"use client";

import * as React from "react";
import { addDays, subDays, format } from "date-fns";
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

interface DatePickerProps {
  withNavigation?: boolean;
  defaultDate?: Date;
  buttonProps?: {
    varient:
      | "link"
      | "default"
      | "destructive"
      | "outline"
      | "secondary"
      | "ghost"
      | null
      | undefined;
    className?: string;
  };
  TriggerComponent?: React.ReactNode;
}

export const DatePicker: React.FC<DatePickerProps> = ({
  withNavigation,
  defaultDate,
  buttonProps,
  TriggerComponent,
}) => {
  const [date, setDate] = React.useState<Date | undefined>(defaultDate);

  return (
    <Popover>
      <div className="flex items-center h-[40px] gap-2.5">
        {withNavigation && (
          <div className="bg-[var(--color-secondary)] h-full w-[40px] flex items-center justify-center rounded-xs">
            <ArrowLeft
              color={COLORS.PRIMARY}
              onClick={() => setDate((prev) => subDays(prev ?? new Date(), 1))}
            />
          </div>
        )}
        <PopoverTrigger asChild>
          {TriggerComponent ? (
            TriggerComponent
          ) : (
            <Button
              variant={buttonProps?.varient || "default"}
              className={cn(
                "w-[140px] font-normal bg-[var(--color-primary)] rounded-xs h-full",
                buttonProps?.className
              )}
            >
              {date ? format(date, "PPP") : <span>Today</span>}
            </Button>
          )}
        </PopoverTrigger>
        {withNavigation && (
          <div className="bg-[var(--color-secondary)] h-full w-[40px] flex items-center justify-center rounded-xs">
            <ArrowRight
              color={COLORS.PRIMARY}
              onClick={() => setDate((prev) => addDays(prev ?? new Date(), 1))}
            />
          </div>
        )}
      </div>
      <PopoverContent className="w-auto p-0" align="start">
        <Calendar
          mode="single"
          selected={date}
          onSelect={setDate}
          initialFocus
          className="custom-calendar"
        />
      </PopoverContent>
    </Popover>
  );
};
