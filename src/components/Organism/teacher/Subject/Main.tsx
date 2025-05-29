"use client";
import Image from "next/image";
import { useRouter } from "next/navigation";

import { MoveLeft } from "lucide-react";

import ActionCard from "@/components/Molecules/actionCard";
import { Badge } from "@/components/ui/badge";
import Table from "@/components/Molecules/Table";
import { Button } from "@/components/ui/button";
import { AIAssessmentContent } from "@/components/Molecules/ai-assessment/AIAssessmentContent";
import { LessonPlanCard } from "@/components/Molecules/AlertCard/LessonPlanCard";
import { PieChartSection } from "@/components/Molecules/graph-section/Section";
import SubjectDetails from "./SubjectDetails";
import AlertCard from "@/components/Molecules/AlertCard";

import { ALERT_ICONS } from "@/assets/images";

import { COLORS } from "@/constants";

import IMAGES from "@/assets/images";

import "./main.css";

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

const lessonInsights = [
  {
    title: "Common Misconceptions",
    content:
      "Students often confuse the inputs and outputs of the Krebs Cycle.",
  },
  {
    title: "Teaching Recommendations",
    content: [
      "Consider using a flow chart to visualize the stages of cellular respiration.",
      "Provide a mnemonic for the Krebs Cycle steps.",
    ],
  },
  {
    title: "Extension Activities",
    content:
      "For students who have mastered the topic, assign a research project on anaerobic respiration.",
  },
];

const Main = () => {
  const router = useRouter();

  return (
    <div className="flex flex-col p-4 gap-y-6">
      <section className="flex flex-col gap-y-6 mt-2">
        <section className="flex flex-col items-start gap-6 w-full">
          <div className="flex items-center justify-between w-full flex-wrap gap-2">
            <h2 className="font-semibold text-zinc-950 text-xl tracking-[-0.40px] leading-5">
              P1 Biology: Cellular Respiration
            </h2>
          </div>
          <div className="flex items-center gap-2 justify-end w-full">
            <Button
              variant="outline"
              className="h-10 mt-auto cursor-pointer border border-[#00235A] bg-[#00235A] text-white"
            >
              <MoveLeft />
              Back to Students
            </Button>
          </div>
          <div className="subject-detail-wrapper flex justify-between gap-6 w-full flex-col lg:flex-row">
            <div className="w-full flex gap-6 flex-wrap xl:flex-nowrap">
              <div className="flex flex-col gap-6 w-full xl:max-w-3/5">
                <SubjectDetails />
                <p className="font-semibold text-[20px] text-[#09090B] leading-normal tracking-[-0.4px]">
                  Action Center
                </p>
                <div className="flex gap-5 flex-wrap 2xl:flex-nowrap">
                  <div className="w-full h-auto">
                    <AlertCard
                      icon={
                        <Image
                          src={ALERT_ICONS.ALERT_RED}
                          alt="Alert"
                          width={24}
                          height={24}
                        />
                      }
                      title={"Students Progress Alert"}
                      description="Sean is critically behind or regressing in multiple concept,"
                      color={"REJECTED"}
                    />
                    {/* <ActionCard
                      title="Performance"
                      icon={
                        <Image
                          src={IMAGES.GRAPH_DOWNWARDS}
                          alt="Performance"
                          height={23}
                          width={24}
                        />
                      }
                      iconBgColor="#ff3b301a"
                      heading="3"
                      subHeading="Period 1 Biology"
                      buttonLabel="Fix"
                      buttonColor="#ff3b30"
                      buttonClickHandler={() =>
                        router.push("/students/overview/")
                      }
                    /> */}
                  </div>
                  <div className="w-full h-auto">
                    <LessonPlanCard
                      plans={[
                        "Redo Lesson on Crib Cycle",
                        "Show video of ABC",
                        "Focus group with Alex Johnson + Sarah Khan + David AK",
                        "Congratulate Timmy on progress",
                      ]}
                      className="w-full"
                    />
                  </div>
                </div>
              </div>
              <PieChartSection
                className="h-full p-6 flex flex-col items-center gap-4 rounded-xl shadow border bg-white mb-14 xl:mb-0 xl:w-1/2 max-h-[440px] w-full"
                title="Class Mastery"
                data={studentsData}
                showDropdown
                chartContainClassName="flex-col"
              />
            </div>
          </div>

          <div className="student-table-wrapper w-full">
            <Table
              title="Topics"
              headers={[
                { label: "Student Name", key: "name" },
                { label: "AI Assessment", key: "assessment" },
                { label: "Status", key: "status" },
                { label: "Trend", key: "trend" },
                // { label: "Action", key: "action" },
              ]}
              data={[
                {
                  name: (
                    <span className="font-medium text-base leading-6 text-center text-[#3E71C0]">
                      Alex Johnson
                    </span>
                  ),
                  assessment: (
                    <div
                      className="inline-flex w-8 h-8 items-center justify-center rounded text-white"
                      style={{ backgroundColor: "#22C55E" }}
                    >
                      90
                    </div>
                  ),
                  status: (
                    <span
                      className="font-inter font-medium text-base leading-6 text-[#71717A]"
                      style={{ fontSize: "14px", lineHeight: "20px" }}
                    >
                      Struggling with Krebs Cycle
                    </span>
                  ),
                  trend: (
                    <Badge
                      className="px-3.5 py-2 font-medium"
                      variant="outline"
                      style={{
                        backgroundColor: "#FF3B3099",
                        color: "#FFFFFF",
                        borderColor: "#ff3b30",
                        justifyContent: "center",
                      }}
                    >
                      Trending Down
                    </Badge>
                  ),
                  // action: (
                  //   <Image
                  //     alt="action"
                  //     src={IMAGES.HAMBURGER}
                  //     height={24}
                  //     width={24}
                  //     className="cursor-pointer text-center m-auto"
                  //   />
                  // ),
                },
                {
                  name: (
                    <span className="font-medium text-base leading-6 text-center text-[#3E71C0]">
                      Sara Khan
                    </span>
                  ),
                  assessment: (
                    <div
                      className="inline-flex w-8 h-8 items-center justify-center rounded text-white"
                      style={{ backgroundColor: "#EF4444" }}
                    >
                      45
                    </div>
                  ),
                  status: (
                    <span
                      className="font-inter font-medium text-base leading-6 text-[#71717A]"
                      style={{ fontSize: "14px", lineHeight: "20px" }}
                    >
                      Needs Attention on ETC
                    </span>
                  ),
                  trend: (
                    <Badge
                      className="px-3.5 py-2 font-medium"
                      variant="outline"
                      style={{
                        backgroundColor: "#FF950099",
                        color: "#FFFFFF",
                        borderColor: "#ff9500",
                        justifyContent: "center",
                      }}
                    >
                      Needs Attention
                    </Badge>
                  ),
                  // action: (
                  //   <Image
                  //     alt="action"
                  //     src={IMAGES.HAMBURGER}
                  //     height={24}
                  //     width={24}
                  //     className="cursor-pointer text-center m-auto"
                  //   />
                  // ),
                },
                {
                  name: (
                    <span className="font-medium text-base leading-6 text-center text-[#3E71C0]">
                      David SK
                    </span>
                  ),
                  assessment: (
                    <div
                      className="inline-flex w-8 h-8 items-center justify-center rounded text-white"
                      style={{ backgroundColor: "#F97316" }}
                    >
                      65
                    </div>
                  ),
                  status: (
                    <span
                      className="font-inter font-medium text-base leading-6 text-[#71717A]"
                      style={{ fontSize: "14px", lineHeight: "20px" }}
                    >
                      Good Understanding
                    </span>
                  ),
                  trend: (
                    <Badge
                      className="px-3.5 py-2 font-medium"
                      variant="outline"
                      style={{
                        backgroundColor: "#5856D699",
                        color: "#FFFFFF",
                        borderColor: "#5856d6",
                        justifyContent: "center",
                      }}
                    >
                      Top Performance
                    </Badge>
                  ),
                  // action: (
                  //   <Image
                  //     alt="action"
                  //     src={IMAGES.HAMBURGER}
                  //     height={24}
                  //     width={24}
                  //     className="cursor-pointer text-center m-auto"
                  //   />
                  // ),
                },
                {
                  name: (
                    <span className="font-medium text-base leading-6 text-center text-[#3E71C0]">
                      Jhon Michael
                    </span>
                  ),
                  assessment: (
                    <div
                      className="inline-flex w-8 h-8 items-center justify-center rounded text-white"
                      style={{ backgroundColor: "#EF4444" }}
                    >
                      45
                    </div>
                  ),
                  status: (
                    <span
                      className="font-inter font-medium text-base leading-6 text-[#71717A]"
                      style={{ fontSize: "14px", lineHeight: "20px" }}
                    >
                      Mastered
                    </span>
                  ),
                  trend: (
                    <Badge
                      className="px-3.5 py-2 font-medium min-w-[130px] max-w-[130px]"
                      variant="outline"
                      style={{
                        backgroundColor: "#FF950099",
                        color: "#FFFFFF",
                        borderColor: "#ff9500",
                        justifyContent: "center",
                      }}
                    >
                      Trending Up
                    </Badge>
                  ),
                  // action: (
                  //   <Image
                  //     alt="action"
                  //     src={IMAGES.HAMBURGER}
                  //     height={24}
                  //     width={24}
                  //     className="cursor-pointer text-center m-auto"
                  //   />
                  // ),
                },
                {
                  name: (
                    <span className="font-medium text-base leading-6 text-center text-[#3E71C0]">
                      Alex Johnson
                    </span>
                  ),
                  assessment: (
                    <div
                      className="inline-flex w-8 h-8 items-center justify-center rounded text-white"
                      style={{ backgroundColor: "#22C55E" }}
                    >
                      90
                    </div>
                  ),
                  status: (
                    <span
                      className="font-inter font-medium text-base leading-6 text-[#71717A]"
                      style={{ fontSize: "14px", lineHeight: "20px" }}
                    >
                      Mastered
                    </span>
                  ),
                  trend: (
                    <Badge
                      className="px-3.5 py-2 font-medium"
                      variant="outline"
                      style={{
                        backgroundColor: "#FEF3C7",
                        color: "#D97706",
                        borderColor: "#FBBF24",
                        justifyContent: "center",
                      }}
                    >
                      Needs Attention
                    </Badge>
                  ),
                  // action: (
                  //   <Image
                  //     alt="action"
                  //     src={IMAGES.HAMBURGER}
                  //     height={24}
                  //     width={24}
                  //     className="cursor-pointer text-center m-auto"
                  //   />
                  // ),
                },
              ]}
            />
          </div>
          <div className="topics-wrapper flex w-full gap-6 flex-col lg:flex-row flex-wrap xl:flex-nowrap">
            <div className="w-full xl:w-7/12">
              <Table
                title="Topics"
                className="min-w-[200px] 2xl:min-w-[700px] xl:min-w-[600px] lg:min-w-[500px]"
                headers={[
                  {
                    label: "Topics",
                    key: "topic",
                    className:
                      "flex items-center pl-4 xl:max-w-[200px] 2xl:max-w-[240px]",
                  },
                  {
                    label: "Progress",
                    key: "progress",
                    className: "xl:min-w-[200px] 2xl:min-w-[240px]",
                  },
                ]}
                data={[
                  {
                    topic: "Glycolysis",
                    progress: (
                      <div className="text-left">
                        <div className="text-xs text-gray-500">Progress:</div>
                        <div className="flex items-center gap-2">
                          <div className="w-full bg-gray-200 rounded h-2">
                            <div
                              className="h-2 rounded bg-orange-500"
                              style={{ width: "100%" }}
                            ></div>
                          </div>
                          <span className="text-sm font-medium text-gray-800">
                            72%
                          </span>
                        </div>
                      </div>
                    ),
                  },
                  {
                    topic: "Krebs Cycle",
                    progress: (
                      <div className="text-left">
                        <div className="text-xs text-gray-500">Progress:</div>
                        <div className="flex items-center gap-2">
                          <div className="w-full bg-gray-200 rounded h-2">
                            <div
                              className="h-2 rounded bg-red-500"
                              style={{ width: "46%" }}
                            ></div>
                          </div>
                          <span className="text-sm font-medium text-gray-800">
                            46%
                          </span>
                        </div>
                      </div>
                    ),
                  },
                  {
                    topic: "Electron Transport Chain (ETC)",
                    progress: (
                      <div className="text-left">
                        <div className="text-xs text-gray-500">Progress:</div>
                        <div className="flex items-center gap-2">
                          <div className="w-full bg-gray-200 rounded h-2">
                            <div
                              className="h-2 rounded bg-green-500"
                              style={{ width: "88%" }}
                            ></div>
                          </div>
                          <span className="text-sm font-medium text-gray-800">
                            88%
                          </span>
                        </div>
                      </div>
                    ),
                  },
                  {
                    topic: "DNA Structure",
                    progress: (
                      <div className="text-left">
                        <div className="text-xs text-gray-500">Progress:</div>
                        <div className="flex items-center gap-2">
                          <div className="w-full bg-gray-200 rounded h-2">
                            <div
                              className="h-2 rounded bg-red-500"
                              style={{ width: "42%" }}
                            ></div>
                          </div>
                          <span className="text-sm font-medium text-gray-800">
                            42%
                          </span>
                        </div>
                      </div>
                    ),
                  },
                  {
                    topic: "Protein Synthesis",
                    progress: (
                      <div className="text-left">
                        <div className="text-xs text-gray-500">Progress:</div>
                        <div className="flex items-center gap-2">
                          <div className="w-full bg-gray-200 rounded h-2">
                            <div
                              className="h-2 rounded bg-green-500"
                              style={{ width: "94%" }}
                            ></div>
                          </div>
                          <span className="text-sm font-medium text-gray-800">
                            94%
                          </span>
                        </div>
                      </div>
                    ),
                  },
                ]}
              />
            </div>
            <div className="w-full xl:w-5/12">
              <AIAssessmentContent
                theme="ai-blue"
                title="Al-Generated Insights & Recommendations"
                content={
                  <section className="text-white flex flex-col gap-4 justify-between">
                    {lessonInsights.map((section, idx) => (
                      <div key={section.title || idx}>
                        <h2 className="font-semibold mb-2">{section.title}:</h2>
                        {Array.isArray(section.content) ? (
                          <ul className="list-disc pl-5 space-y-1">
                            {section.content.map((item, i) => (
                              <li key={i}>{item}</li>
                            ))}
                          </ul>
                        ) : (
                          <p>{section.content}</p>
                        )}
                      </div>
                    ))}
                  </section>
                }
              />
            </div>
          </div>
        </section>
      </section>
    </div>
  );
};

export default Main;
