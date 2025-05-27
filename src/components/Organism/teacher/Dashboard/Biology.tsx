import React, { useState } from "react";
import Image from "next/image";

import { AIAssessmentContent } from "@/components/Molecules/ai-assessment/AIAssessmentContent";
import { PieChartSection } from "@/components/Molecules/graph-section/Section";
import { Badge } from "@/components/ui/badge";
import Table from "@/components/Molecules/Table";
import { CriticalStudentCard } from "@/components/Molecules/Table/TableCard";
import AIChatInput from "../../../Molecules/AIChatInput";
import { LessonPlanCard } from "@/components/Molecules/AlertCard/LessonPlanCard";

import { useIsMobile } from "@/hooks/use-mobile";

import IMAGES from "@/assets/images";

import { COLORS } from "@/constants";

const studentsData = [
  { label: "Critical", value: 3, color: "bg-red-500", fill: COLORS.REJECTED },
  {
    label: "Need Attention",
    value: 5,
    color: "bg-orange-400",
    fill: COLORS.WARNING,
  },
  { label: "Good", value: 10, color: "bg-green-400", fill: COLORS.SUCCESS },
  { label: "Excellent", value: 7, color: "bg-cyan-400", fill: COLORS.AI_BLUE },
];

const criticalStudents = [
  {
    name: <span className="text-[#1D1D1D]  cursor-pointer">Alex Johnson</span>,
    assessment: (
      <div
        className="inline-flex w-8 h-8 items-center justify-center rounded text-white"
        style={{ backgroundColor: COLORS.SUCCESS }}
      >
        90
      </div>
    ),
    status: "Struggling with Krebs Cycle",
    trend: (
      <Badge
        className="px-3.5 py-2 font-medium"
        variant="outline"
        style={{
          backgroundColor: "#FEE2E2",
          color: "#E61F23",
        }}
      >
        Trending Down
      </Badge>
    ),
    action: (
      <Image
        alt="action"
        src={IMAGES.HAMBURGER}
        height={24}
        width={24}
        className="cursor-pointer text-center m-auto"
      />
    ),
  },
  {
    name: <span className="text-[#1D1D1D]  cursor-pointer">Sara Khan</span>,
    assessment: (
      <div
        className="inline-flex w-8 h-8 items-center justify-center rounded text-white"
        style={{ backgroundColor: COLORS.REJECTED }}
      >
        45
      </div>
    ),
    status: "Needs Attention on ETC",
    trend: (
      <Badge
        className="px-3.5 py-2 font-medium"
        variant="outline"
        style={{
          backgroundColor: "#FEF3C7",
          color: "#D97706",
        }}
      >
        Needs Attention
      </Badge>
    ),
    action: (
      <Image
        alt="action"
        src={IMAGES.HAMBURGER}
        height={24}
        width={24}
        className="cursor-pointer text-center m-auto"
      />
    ),
  },
  {
    name: <span className="text-[#1D1D1D]  cursor-pointer">David SK</span>,
    assessment: (
      <div
        className="inline-flex w-8 h-8 items-center justify-center rounded text-white"
        style={{ backgroundColor: COLORS.WARNING }}
      >
        65
      </div>
    ),
    status: "Good Understanding",
    trend: (
      <Badge
        className="px-3.5 py-2 font-medium"
        variant="outline"
        style={{
          backgroundColor: "#E0E7FF",
          color: "#6366F1",
        }}
      >
        Top Performance
      </Badge>
    ),
    action: (
      <Image
        alt="action"
        src={IMAGES.HAMBURGER}
        height={24}
        width={24}
        className="cursor-pointer text-center m-auto"
      />
    ),
  },
];

const headers = [
  { label: "Student Name", key: "name" },
  { label: "AI Assessment", key: "assessment" },
  { label: "Status", key: "status" },
  { label: "Trend", key: "trend" },
];

const Biology = () => {
  const isMobile = useIsMobile();
  const [value, setValue] = useState<string>("");

  return (
    <div className="p-3 sm:p-5 bg-[#F4F7FA] rounded-xl flex flex-col gap-6 min-h-screen">
      {/* Header Section - Assessment + Pie Chart */}
      <div className="flex flex-col lg:flex-row gap-6">
        <div className="w-full lg:w-2/5">
          <AIAssessmentContent
            theme={isMobile ? "blue" : "ai-blue"}
            content={
              <p className="text-white text-[16px] leading-[22px] font-medium tracking-[0.16px] mt-2">
                Overall Class mastery on 'Unit 4: Photosynthesis' is 78%. 4
                Students show improvement since last week.
              </p>
            }
            className="h-full rounded-xl p-6"
          />
        </div>
        <div className="w-full lg:w-3/5">
          <PieChartSection
            className="h-full p-6 flex flex-col gap-4 rounded-xl shadow border bg-white"
            title="Total Students"
            data={studentsData}
          />
        </div>
      </div>

      <h1 className="text-[var(--color-rejected)] font-semibold text-xl mt-2">
        Critical Students ({criticalStudents.length})
      </h1>

      {!isMobile ? (
        <Table title="Topics" headers={headers} data={criticalStudents} />
      ) : (
        <>
          {criticalStudents.map((row, i) => (
            <CriticalStudentCard headers={headers} row={row} key={i} />
          ))}
        </>
      )}

      <LessonPlanCard
        plans={[
          "Redo Lesson on Crib Cycle",
          "Show video of ABC",
          "Focus group with Alex Johnson + Sarah Khan + David AK",
          "Congratulate Timmy on progress",
        ]}
        className="w-full"
      />
      {/* Chat input - full width, sticky on bottom on mobile if desired */}
      <div className="w-full">
        <AIChatInput
          prefixIcon="AI_ROBOT"
          onChange={({ target: { value } }) => setValue(value)}
          value={value}
          placeholder="Chat about this class"
          onVoiceInput={() => {}}
          containerStyle={{
            border: "1px #9F9F9FA8 solid",
            padding: "8px 24px",
            alignSelf: "center",
            width: "100%",
            background: "#fff",
          }}
        />
      </div>
    </div>
  );
};

export default Biology;
