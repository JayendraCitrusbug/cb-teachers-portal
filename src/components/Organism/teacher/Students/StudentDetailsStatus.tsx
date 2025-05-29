import React from "react";

import { Button } from "@/components/ui/button";
import { Card, CardContent, CardTitle } from "@/components/ui/card";
import { BarChartComponent } from "@/components/Molecules/Charts";

import { ChartConfig } from "@/components/ui/chart";
import { COLORS } from "@/constants";

const engagementMetrics = [
  { label: "Time Spent (Last 6d)", value: "3h 15m" },
  { label: "Task Completed", value: "8/10" },
  { label: "Interaction Frequency", value: "High" },
];

const recentTutorInteractions = [
  {
    title: "Session",
    value: "Photosynthesis Practice",
    time: "15 min ago",
    status: "Completed",
  },
  {
    title: "Topic",
    value: "Cellular Respiration Intro",
    time: "30 min ago",
    status: "In Progress",
  },
  {
    title: "Topic",
    value: "Cellular Respiration Intro",
    time: "30 min ago",
    status: "In Progress",
  },
  {
    title: "Topic",
    value: "Cellular Respiration Intro",
    time: "30 min ago",
    status: "In Progress",
  },
  {
    title: "Activity",
    value: "Algebra Equations Set 1",
    time: "30 min ago",
    status: "In Progress",
  },
];

const StudentDetailsStatus = () => {
  return (
    <section className="flex flex-col items-start gap-6 w-full mt-1">
      <div className="grid grid-cols-1 md:grid-cols-1 lg:grid-cols-1 gap-6 w-full">
        <div className="w-full flex shadow-shadow-sm border border-[#E4E4E7] rounded-lg h-full justify-between md:flex-no-wrap flex-wrap">
          <CardContent className="p-6 flex flex-col gap-5">
            <div className="flex flex-col gap-1 w-full">
              <CardTitle className="text-zinc-950 text-2xl font-semibold tracking-tight leading-6">
                Engagement Metrics
              </CardTitle>
              <p className="text-sm text-zinc-500 font-normal">
                Based on assigned materials
              </p>
            </div>
            {engagementMetrics.map((item, index) => (
              <div key={index} className="flex flex-col gap-1 w-full">
                <span className="text-zinc-900 text-sm font-medium">
                  {item.label}
                </span>
                <p className="text-sm font-normal text-zinc-900">
                  {item.value}
                </p>
              </div>
            ))}
          </CardContent>
          <BarChartComponent
            data={[
              { month: "Mon", timeSpent: 186, taskCompleted: 305 },
              { month: "Tue", timeSpent: 305, taskCompleted: 237 },
              { month: "Wed", timeSpent: 237, taskCompleted: 73 },
              { month: "Thu", timeSpent: 73, taskCompleted: 209 },
              { month: "Fri", timeSpent: 209, taskCompleted: 214 },
              { month: "Sat", timeSpent: 214, taskCompleted: 186 },
            ]}
            className={
              "max-w-[500px] bg-transparent border-none border-0 shadow-none"
            }
            footer={{
              content: [
                { label: "Time Spent", color: "#00235A" },
                { label: "Task Completed", color: "#00B2D6" },
              ],
            }}
            config={{
              mobile: {
                label: "Mobile",
                color: "hsl(var(--chart-2))",
              },
            }}
            dateKeys={[
              {
                key: "timeSpent",
                label: "Time Spent",
                color: COLORS.PRIMARY,
                suffix: "m",
              },
              {
                key: "taskCompleted",
                label: "Task completed",
                color: COLORS.AI_BLUE,
              },
            ]}
            barTops
          />
        </div>
        <Card className="w-full shadow-shadow-sm border border-[#E4E4E7] rounded-lg h-full">
          <CardContent className="p-6 w-full h-full flex flex-col items-start gap-[20px] justify-between">
            <div className="flex items-start justify-between w-full gap-1 flex-col">
              <CardTitle className="text-zinc-950 text-[24px] tracking-[-0.40px] leading-[26px] font-semibold">
                Recent AI Tutor Interactions
              </CardTitle>
              <p className="text-sm text-[#71717A] font-regular">
                Based on assigned materials
              </p>
            </div>
            <div className="flex items-start w-full gap-5 flex-col">
              {recentTutorInteractions.map((item, index) => (
                <div
                  key={`${item.title}-${index}`}
                  className="flex justify-between gap-5 w-full"
                >
                  <div className="flex flex-col items-start gap-[2px] w-full">
                    <span className="text-[#18181B] text-[14px] font-medium">
                      {item?.title}
                    </span>
                    <p className="text-[14px] font-regular text-[#18181B]">
                      {item?.value}
                    </p>
                  </div>
                  <div>
                    <span className="text-[#18181B] w-full block min-w-max font-normal font-sans text-sm text-center">
                      {item?.time}
                    </span>
                    <p className="text-[#18181B] font-normal font-sans text-sm leading-snug text-center">
                      {item?.status}
                    </p>
                  </div>
                </div>
              ))}
            </div>
            <Button
              variant="outline"
              className="h-10 mt-auto cursor-pointer border border-[#00235A] bg-[#00235A] text-white"
            >
              View All Log
            </Button>
          </CardContent>
        </Card>
      </div>
    </section>
  );
};

export default StudentDetailsStatus;
