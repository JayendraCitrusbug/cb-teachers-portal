import React from "react";
import Image from "next/image";

import { LabelList, Pie, PieChart } from "recharts";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";

import { Card, CardContent, CardTitle } from "@/components/ui/card";
import AIAssesment from "./AIAssesment";
import {
  ChartConfig,
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
} from "@/components/ui/chart";
import { AIAssessmentContent } from "@/components/Molecules/ai-assessment/AIAssessmentContent";
import InsightChartCard from "@/components/Molecules/insightChartCard";

import IMAGES from "@/assets/images";

import { COLORS } from "@/constants";

import { useState } from "react";
import { Cell, Label } from "recharts";
import { cn } from "@/lib/utils";

ChartJS.register(ArcElement, Tooltip, Legend);

const options: any = {
  plugins: {
    legend: {
      display: true,
      position: "bottom",
      labels: {
        boxWidth: 20,
        padding: 15,
      },
    },
  },
  maintainAspectRatio: false,
};

const emotionalData = [
  { name: "Confident", value: 48, color: "#22C55E" },
  { name: "Engagement", value: 32, color: "#FDB022" },
  { name: "Frustration", value: 20, color: "#F04438" },
];

const legend = [
  { label: "Confidence", color: "#22C55E" },
  { label: "Engagement", color: "#FDB022" },
  { label: "Frustration", color: "#F04438" },
];

const chartConfig = {
  visitors: {
    label: "Visitors",
  },
  chrome: {
    label: "Chrome",
    color: COLORS.WARNING,
  },
  safari: {
    label: "Safari",
    color: "hsl(var(--chart-2))",
  },
  firefox: {
    label: "Firefox",
    color: "hsl(var(--chart-3))",
  },
  edge: {
    label: "Edge",
    color: "hsl(var(--chart-4))",
  },
  other: {
    label: "Other",
    color: "hsl(var(--chart-5))",
  },
} satisfies ChartConfig;

const StudentDetailsLearningInsights = () => {
  return (
    <section className="flex flex-col gap-y-6 mt-2 w-full">
      <AIAssessmentContent
        theme="ai-blue"
        className="w-full md:max-w-3/5 lg:max-w-2/5"
        content={
          <p className="text-white text-[16px] leading-[22px] font-medium tracking-[0.16px] mt-2">
            Alex likes to learn by repetition using examples from their
            hobbies.Prefers visual examples, benefits from step-by-step
            instructions.May need encouragement on complex problem-solving
            tasks.
          </p>
        }
      />
      <section className="flex flex-col items-start gap-6 w-full">
        <div className="flex flex-col items-start gap-5 w-full">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-6 w-full">
            <Card className="w-full shadow-shadow-sm border border-[#34C759] rounded-lg h-full bg-[#56FF801A]">
              <CardContent className="px-6 py-4 w-full h-full flex flex-col items-start gap-[12px] justify-between">
                <div className="flex items-center justify-between w-full gap-1">
                  <CardTitle className="text-[#34C759] text-[22px] tracking-[-0.40px] leading-[22px] font-medium">
                    Strengths
                  </CardTitle>
                  <div className="bg-white w-10 h-10 rounded-[4px] overflow-hidden flex items-center justify-center">
                    <Image
                      src={IMAGES.GRAPH_UP}
                      alt="G"
                      height={22}
                      width={24}
                    />
                  </div>
                </div>

                <div className="w-full">
                  <ul className="list-disc pl-[20px] flex flex-col gap-2">
                    <li className="text-[#09090B] text-[16px] leading-[22px] font-regular tracking-[0.16px]">
                      Strong grasp of basic photosynthesis steps.
                    </li>
                    <li className="text-[#09090B] text-[16px] leading-[22px] font-regular tracking-[0.16px]">
                      Quickly identifies variables in simple equations.
                    </li>
                  </ul>
                </div>
              </CardContent>
            </Card>
            <Card className="w-full shadow-shadow-sm border border-[#FF3B30] rounded-lg h-full bg-[#FF34280F]">
              <CardContent className="px-6 py-4 w-full h-full flex flex-col items-start gap-[12px] justify-between">
                <div className="flex items-center justify-between w-full gap-1">
                  <CardTitle className="text-[#FF3B30] text-[22px] tracking-[-0.40px] leading-[22px] font-medium">
                    Weaknesses
                  </CardTitle>
                  <div className="bg-white w-10 h-10 rounded-[4px] overflow-hidden flex items-center justify-center">
                    <Image
                      src={IMAGES.GRAPH_DOWNWARDS}
                      alt="G"
                      height={22}
                      width={24}
                    />
                  </div>
                </div>

                <div className="w-full">
                  <ul className="list-disc pl-[20px] flex flex-col gap-2">
                    <li className="text-[#09090B] text-[16px] leading-[22px] font-regular tracking-[0.16px]">
                      Difficultly applying cellular respiration concepts to word
                      problems.
                    </li>
                    <li className="text-[#09090B] text-[16px] leading-[22px] font-regular tracking-[0.16px]">
                      Frequent calculation errors in Multi-Step algebraic
                      problems.
                    </li>
                  </ul>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-6 w-full">
        <InsightChartCard
          title="Emotional Insights"
          type="pie"
          data={emotionalData}
          legend={legend}
          showDropdown
        />
        <Card className="w-full shadow-shadow-sm border border-[#E4E4E7] rounded-lg h-full">
          <CardContent className="p-6 w-full h-full flex flex-col items-start gap-[30px] justify-between">
            <div className="flex items-start justify-between w-full gap-1 flex-col">
              <CardTitle className="text-zinc-950 text-[22px] tracking-[-0.40px] leading-[22px] font-medium">
                Error Analysis (AI Identified)
              </CardTitle>
              <p className="text-sm text-[#71717A] font-regular">
                Based on interactions with assigned materials
              </p>
            </div>
            <div className="flex items-start w-full gap-6 flex-col">
              {[
                {
                  type: "Misconception",
                  color: "#FF3B30",
                  text: "Confuses reactants and products in photosynthesis equation.",
                },
                {
                  type: "Pattern",
                  color: "#18181B",
                  text: "Consistently forgets to carry the one in addition.",
                },
                {
                  type: "Misconception",
                  color: "#FF3B30",
                  text: "Confuses reactants and products in photosynthesis equation.",
                },
                {
                  type: "Pattern",
                  color: "#18181B",
                  text: "Consistently forgets to carry the one in addition.",
                },
              ].map((item, idx) => (
                <div
                  className="flex flex-col items-start gap-[2px] w-full"
                  key={idx}
                >
                  <span
                    className="text-[14px] font-medium"
                    style={{ color: item.color }}
                  >
                    {item.type}
                  </span>
                  <p className="text-[14px] font-regular text-[#18181B]">
                    {item.text}
                  </p>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  );
};

export default StudentDetailsLearningInsights;
