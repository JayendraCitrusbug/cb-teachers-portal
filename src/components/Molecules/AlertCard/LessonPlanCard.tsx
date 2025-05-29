import React, { useState } from "react";
import Image from "next/image";
import { ArrowRight } from "lucide-react";

import { cn } from "@/lib/utils";
import IMAGES from "@/assets/images";
import { COLORS } from "@/constants";

interface LessonPlanCardProps {
  plans: string[];
  onViewModify?: () => void;
  className?: string;
}
export const LessonPlanCard = ({
  plans,
  onViewModify,
  className,
}: LessonPlanCardProps) => {
  return (
    <div
      className={cn(
        "bg-blue-50 rounded-xl p-5 flex flex-wrap justify-between items-start md:items-center gap-2 shadow-sm border border-blue-100",
        className
      )}
    >
      {/* Left side: Icon, Title, Plan List */}
      <div className="flex-1 flex flex-col gap-2">
        <div className="flex items-center gap-2 mb-1">
          <Image
            src={IMAGES.CLIPBOARD_PEN}
            className="w-5 h-5"
            alt="clipboard"
          />
          <span className="font-semibold text-lg text-[var(--color-primary)]">
            Lesson Plan
          </span>
        </div>

        <div className="flex items-center justify-between relative">
          <ul className="list-disc ml-7 text-[#474747] text-xs font-medium font-sans">
            {plans.map((item, idx) => (
              <li className="text-[#474747]" key={idx}>
                {item}
              </li>
            ))}
          </ul>

          <button
            className="font-sans text-xs font-semibold text-[var(--color-primary)] flex items-center gap-1 hover:underline mt-auto focus:outline-none focus:ring-2 focus:ring-blue-500 rounded cursor-pointer"
            onClick={onViewModify}
          >
            VIEW & MODIFY
            <ArrowRight className="w-4 h-4" color={COLORS.PRIMARY} />
          </button>

          <Image
            width={50}
            height={50}
            src={IMAGES.LESSON_ICON}
            alt="Lesson Icon"
            className="absolute right-0 top-0"
            style={{
              transform: "translateY(-50%)",
            }}
          />
        </div>
      </div>
    </div>
  );
};
