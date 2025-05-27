"use client";
import React, { useState } from "react";

import { useRouter } from "next/navigation";

import { Badge } from "@/components/ui/badge";
import Table from "@/components/Molecules/Table";
import { SuggestionButton } from "./SuggestionButton";
import AIChatInput from "../../../Molecules/AIChatInput";

const HeadContent = () => {
  return (
    <>
      <h2 className="font-semibold text-xl">Teachers Pet</h2>
      <div className="flex flex-col gap-2 text-[16px]">
        <p>
          3 students (Alex Johnson, Jamie Smith, Taylor Wilson) have shown a
          significant drop in understanding or are critically struggling with
          the 'Cellular Respiration' lesson. This is based on their recent quiz
          scores and interaction patterns with the learning module.
        </p>
        <p>
          Potential Reasons: These students consistently struggled with
          questions related to the Electron Transport Chain. Low engagement with
          the preparatory material for this lesson was observed for these
          students.
        </p>
      </div>
    </>
  );
};

const CriticalStudentsTable = () => {
  return (
    <Table
      title="Topics"
      headers={[
        { label: "Student Name", key: "name" },
        { label: "AI Assessment", key: "assessment" },
        { label: "Status", key: "status" },
        { label: "Trend", key: "trend" },
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
        },
      ]}
    />
  );
};

const PerofrmanceOverview = () => {
  const router = useRouter();

  const [prompt, setPrompt] = useState<string>("");
  return (
    <>
      <HeadContent />
      <CriticalStudentsTable />
      <div className="w-full max-w-3xl mx-auto py-10 text-center">
        <div className="mt-4 grid grid-cols-1 sm:grid-cols-2 gap-4 px-4">
          {[
            {
              text: "Show me what i can do in class",
              icon: <></>,
            },
            {
              text: "Adjust AI Tutor Assigments",
              icon: <></>,
            },
          ].map((suggestion, idx) => (
            <SuggestionButton
              key={idx}
              text={suggestion.text}
              icon={suggestion.icon}
              clickHandler={() => setPrompt(suggestion.text)}
            />
          ))}
        </div>
        <div className="mt-8">
          <AIChatInput
            onChange={() => {}}
            onSend={() => router.push("/ai-response/?prompt=" + prompt)}
            value={prompt}
            onVoiceInput={() => {}}
          />
        </div>
      </div>
    </>
  );
};

export default PerofrmanceOverview;
