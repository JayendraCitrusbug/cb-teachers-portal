"use client"
import Image from "next/image";
import { useRouter } from "next/navigation";

import ActionCard from "@/components/Molecules/actionCard";
import SubectDetails from "./SubjectDetails";
import DonoughSection from "@/components/Molecules/graph-section/Section";
import { AIAssesmentContent } from "../Students/AIAssesment";
import { Badge } from "@/components/ui/badge";
import Table from "@/components/Molecules/Table";

import IMAGES from "@/assets/images";

import "./main.css";
import { Button } from "@/components/ui/button";
import { MoveLeft } from "lucide-react";
const Main = () => {

  const router = useRouter()
     
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
            <Button  variant="outline" className="h-10 mt-auto cursor-pointer border border-[#00235A] bg-[#00235A] text-white">
            <MoveLeft />
            Back to Dashboard
          </Button>
          </div>
          <div className="subject-detail-wrapper flex justify-between gap-6 w-full flex-col lg:flex-row">
            <div className="w-full">
              <div className="flex flex-col gap-6 max-w-[90%]">
                <SubectDetails />
                <p className="font-semibold text-[20px] text-[#09090B] leading-normal tracking-[-0.4px]">Action Center</p>
                <div className="w-full max-w-[390px] h-auto">
                  <ActionCard
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
                    buttonClickHandler={() => router.push("/students/overview/")}
                  />
                </div>
              </div>
            </div>
            <div className="w-full max-w-[400px] border border-[#E4E4E7] rounded-[8px] bg-white shadow-shadow-sm p-6">
                <div className="flex items-center justify-between w-full gap-1 mb-2">
                    <h4 className="text-[20px] font-medium text-[#09090B] leading-normal tracking-[-0.4px]">Class Mastery</h4>
                </div>
              <DonoughSection
                title=""
                type="donough"
                graphConfigration={{
                  data: {
                    labels: ["Red", "Blue", "Yellow"],
                    datasets: [
                      {
                        label: "Votes",
                        data: [12, 19, 3],
                        backgroundColor: [
                          "rgba(255, 99, 132, 0.6)",
                          "rgba(54, 162, 235, 0.6)",
                          "rgba(255, 206, 86, 0.6)",
                        ],
                        borderColor: [
                          "rgba(255,99,132,1)",
                          "rgba(54,162,235,1)",
                          "rgba(255,206,86,1)",
                        ],
                        borderWidth: 1,
                      },
                    ],
                  },
                  options: {
                    responsive: true,
                    plugins: {
                      legend: {
                        position: "bottom" as const,
                      },
                    },
                  },
                }}
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
                { label: "Action", key: "action" },
              ]}
              data={[
                {
                  name: (
                    <span className="text-[#1D1D1D] underline cursor-pointer">
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
                  status: "Struggling with Krebs Cycle",
                  trend: (
                    <Badge
                      className="px-3.5 py-2 font-medium"
                      variant="outline"
                      style={{
                        backgroundColor: "#FEE2E2",
                        color: "#E61F23",
                        borderColor: "#E61F23",
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
                  name: (
                    <span className="text-[#1D1D1D] underline cursor-pointer">
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
                  status: "Needs Attention on ETC",
                  trend: (
                    <Badge
                      className="px-3.5 py-2 font-medium"
                      variant="outline"
                      style={{
                        backgroundColor: "#FEF3C7",
                        color: "#D97706",
                        borderColor: "#FBBF24",
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
                  name: (
                    <span className="text-[#1D1D1D] underline cursor-pointer">
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
                  status: "Good Understanding",
                  trend: (
                    <Badge
                      className="px-3.5 py-2 font-medium"
                      variant="outline"
                      style={{
                        backgroundColor: "#E0E7FF",
                        color: "#6366F1",
                        borderColor: "#6366F1",
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
                {
                  name: (
                    <span className="text-[#1D1D1D] underline cursor-pointer">
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
                  status: "Mastered",
                  trend: (
                    <Badge
                      className="px-3.5 py-2 font-medium"
                      variant="outline"
                      style={{
                        backgroundColor: "#DCFCE7",
                        color: "#16A34A",
                        borderColor: "#16A34A",
                      }}
                    >
                      Trending Up
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
                  name: (
                    <span className="text-[#1D1D1D] underline cursor-pointer">
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
                  status: "Mastered",
                  trend: (
                    <Badge
                      className="px-3.5 py-2 font-medium"
                      variant="outline"
                      style={{
                        backgroundColor: "#FEF3C7",
                        color: "#D97706",
                        borderColor: "#FBBF24",
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
              ]}
            />
          </div>
          <div className="topics-wrapper flex w-full gap-6 flex-col lg:flex-row">
            <Table
              title="Topics"
              headers={[
                { label: "Topics", key: "topic", className: "max-w-[240px]" },
                { label: "Progress", key: "progress" },
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
                            style={{ width: "72%" }}
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
            <AIAssesmentContent
              title="Al-Generated Insights & Recommendations"
              content={
                <section className="text-white">
                  <h2>Common Misconceptions</h2>
                  <p>
                    Students often confuse the inputs and outputs of the Krebs
                    Cycle.
                  </p>

                  <h2>Teaching Recommendations</h2>
                  <ul>
                    <li>
                      Consider using a flow chart to visualize the stages of
                      cellular respiration.
                    </li>
                    <li>Provide a mnemonic for the Krebs Cycle steps.</li>
                  </ul>

                  <h2>Extension Activities</h2>
                  <p>
                    For students who have mastered the topic, assign a research
                    project on anaerobic respiration.
                  </p>
                </section>
              }
            />
          </div>
        </section>
      </section>
    </div>
  );
};

export default Main;
