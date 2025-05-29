"use client";

import React, { useState } from "react";
import Image from "next/image";
import { ChevronLeft } from "lucide-react";

import Table from "@/components/Molecules/Table";
import AIChatInput from "@/components/Molecules/AIChatInput";

import IMAGES from "@/assets/images";

const tableData = [
  {
    subject: "PI: Biology",
    lesson: "Cellular respiration",
    score: 40,
  },
  {
    subject: "PI: Biology",
    lesson: "Photosynthesis",
    score: 45,
  },
  {
    subject: "PI: Biology",
    lesson: "DNA structure",
    score: 38,
  },
];

export default function ProgressAlertPage() {
  const [value, setValue] = useState<string>("");

  return (
    <div className="min-h-screen bg-white text-gray-800 px-4 py-3">
      {/* Header */}
      <header className="text-black flex justify-between items-center">
        <ChevronLeft />
        <h1 className="text-lg font-semibold">Sean Progress Alert</h1>
        <div className="w-5"></div>
      </header>

      {/* Alert Text */}
      <div className="p-4 mt-4">
        <p className="text-sm font-semibold mb-4">
          Sean is Has A Critical Alert in PI: Biology And Is Critically Behind
          Or Regressing in Multiple Concepts.
        </p>

        {/* Table */}
        <Table
          title="AI Assessment"
          headers={[
            { label: "Subject", key: "subject" },
            { label: "Lesson", key: "lesson" },
            { label: "Score", key: "score" },
          ]}
          data={tableData.map((item) => ({
            subject: (
              <span className="font-medium text-sm text-[#1E293B]">
                {item.subject}
              </span>
            ),
            lesson: (
              <span className="font-medium text-sm text-[#1E293B]">
                {item.lesson}
              </span>
            ),
            score: (
              <div className="flex justify-center">
                <span className="bg-red-500 text-white text-xs px-2 py-1 rounded">
                  {item.score}
                </span>
              </div>
            ),
          }))}
        />

        <h2 className="text-sm mb-4 mt-4">
          Please Review And Select Your Response:
        </h2>

        {/* Tool Cards */}
        <div className="space-y-4">
          {/* Tool: Lesson Planner */}
          <div className="border border-green-500 bg-green-50 rounded-md p-4">
            <p className="text-sm flex items-center gap-2 text-[#34C759] font-inter font-semibold text-[18px] leading-100% tracking-0% capitalize mb-2">
              <Image src={IMAGES.TOOL_ICON} alt="Tool Icon" />{" "}
              <span>Tool: Lesson Planner</span>
            </p>
            <ul className="text-sm list-disc pl-5 mb-3">
              <li>Make some time with Sean tomorrow to discuss these topics</li>
              <li>Pair with Julie who shows mastery</li>
            </ul>
            <div className="flex items-center justify-end">
              <button className="text-sm bg-green-500 text-white px-3 py-1.5 rounded">
                Add to my lesson plan for tomorrow
              </button>
            </div>
          </div>

          {/* Tool: Homework Generator */}
          <div className="border border-green-500 bg-green-50 rounded-md p-4">
            <p className="text-sm flex items-center gap-2 text-[#34C759] font-inter font-semibold text-[18px] leading-100% tracking-0% capitalize mb-2">
              <Image src={IMAGES.HOME_WORK_ICON} alt="Tool Icon" />{" "}
              <span>Tool: Homework Generator </span>
            </p>
            <p className="text-sm mb-3">
              Create a specific homework assignment for Sean for tonight.
            </p>
            <div className="flex items-center justify-end">
              <button className="text-sm bg-green-500 text-white px-3 py-1.5 rounded">
                Generate Homework
              </button>
            </div>
          </div>

          {/* Tool: Email Parent */}
          <div className="border border-green-500 bg-green-50 rounded-md p-4">
            <p className="text-sm flex items-center gap-2 text-[#34C759] font-inter font-semibold text-[18px] leading-100% tracking-0% capitalize mb-2">
              <Image src={IMAGES.EMAIL_PARENT_ICON} alt="Tool Icon" />{" "}
              <span>Tool: Email Parent</span>
            </p>
            <div className="text-sm mb-3">
              <p className="font-medium inline">To:</p>
              <p className="font-medium inline">Sean’s Parents</p>
              <p className="font-medium mt-2">Message: Biology Update</p>
              <p className="text-gray-600">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam
                ullamcorper imperdiet rhoncus. Fusce lorem varius, mollis metus
                quis, ultricies risus. Ut sodales lorem nisl. Curabitur
                magnarem, felis quis.
              </p>
              <p className="mt-1">Teacher</p>
            </div>
            <div className="flex items-center justify-end">
              <button className="text-sm bg-green-500 text-white px-3 py-1.5 rounded">
                Send Email
              </button>
            </div>
          </div>
        </div>
      </div>

      <div className="sticky bottom-1 flex flex-col gap-4 bg-white">
        <div className="mt-6 flex items-center justify-center gap-4">
          <button className="bg-gray-300 min-w-[140px] px-4 py-2 text-sm rounded">
            Redo
          </button>
          <button className="bg-blue-900 min-w-[140px] text-white px-4 py-2 text-sm rounded">
            Do All Above
          </button>
        </div>
        <AIChatInput
          prefixIcon="AI_GRAY"
          onChange={({ target: { value } }) => setValue(value)}
          value={value}
          placeholder="Chat about this class"
          onVoiceInput={() => {}}
          onSend={() => {}}
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
}
