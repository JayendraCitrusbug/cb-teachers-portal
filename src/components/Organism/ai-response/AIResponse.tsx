"use client";
import React, { useState } from "react";
import { useRouter } from "next/navigation";

import { Bell, ArrowLeft, Search, Video, Pencil, Users } from "lucide-react";

import { useSearchParams } from "next/navigation";

import "./style.css";

function AiResponseHeader() {
  const router = useRouter();
  return (
    <div className="flex flex-col border-b pb-6 gap-7">
      <div className="w-full flex justify-between items-center gap-4 ai-response-header">
        <h2 className="text-2xl font-semibold">AI Response</h2>
        <div className="text-start text-[16px] text-gray-800 font-medium">
          Make a Plan to Help Students Overcome Learning Gaps
        </div>
        <div className="h-full p-1 rounded-md shadow">
          <Bell className="w-6 h-6 text-gray-400" />
        </div>
      </div>

      <div className="w-full flex justify-between items-center gap-4 flex-wrap ai-response-student-header">
        <div className="flex flex-wrap w-[400px] gap-6">
          <button className="h-[40px] px-4 py-1 border border-red-500 text-red-500 rounded-md text-sm font-medium">
            Critical Students
          </button>
          <button className="h-[40px] px-4 py-1 border border-[#E4E4E7] text-black rounded-md text-sm font-medium">
            Period 1: Biology
          </button>
        </div>
        <button
          onClick={() => router.push("/overview")}
          className="h-[40px] flex items-center gap-2 bg-blue-900 text-white px-4 py-1.5 rounded-md text-sm font-medium cursor-pointer"
        >
          <ArrowLeft className="w-4 h-4" />
          Back to Dashboard
        </button>
      </div>
    </div>
  );
}

function LearningPlan() {
  return (
    <>
      {/* Subtitle */}
      <p className="text-gray-700 text-sm mb-6 leading-relaxed">
        To support students struggling with topics like cellular respiration,
        you can follow a structured action plan powered by AI insights. This
        plan combines personalized learning, smart engagement strategies, and
        consistent support.
      </p>

      {/* Action Plan Sections */}
      <div className="space-y-6 text-sm text-gray-800">
        {[
          {
            title: "1. Identify Specific Struggles",
            items: [
              "Use AI data to pinpoint exact problem areas (e.g., Krebs cycle, ETC).",
              "Analyze quiz scores and engagement logs to recognize learning gaps.",
              "Detect behavioral trends such as skipping prep modules or low interaction time.",
            ],
          },
          {
            title: "2. Assign Personalized Visual Learning Aids",
            items: [
              "Recommend short, animated videos explaining complex topics visually.",
              "Offer interactive simulations or drag-and-drop diagrams of the electron transport chain.",
              "Include real-world examples to make abstract ideas relatable.",
            ],
          },
          {
            title: "3. Create a Micro-Learning Routine",
            items: [
              "Break the topic into 5-minute daily modules with auto-generated quizzes.",
              "Use spaced repetition to reinforce memory over the week.",
              "Send smart reminders to students via app notifications or email.",
            ],
          },
          {
            title: "4. Encourage Peer Collaboration",
            items: [
              "Form AI-recommended peer groups where stronger students assist weaker ones.",
              "Assign group-based problem-solving activities or mini-presentations.",
              "Add a reward system for collaborative progress.",
            ],
          },
          {
            title: "5. Reassign Content In A Different Format",
            items: [
              "Audio lessons",
              "🎮 Gamified challenges",
              "📖 Story-based learning with characters",
            ],
          },
        ].map((section, idx) => (
          <div key={idx}>
            <h2 className="font-bold text-xl mb-1 font-[family-name:var(--font-geist-sans)]">
              {section.title}
            </h2>
            <ul className="list-disc pl-5 space-y-1">
              {section.items.map((item, i) => (
                <li
                  className="font-[family-name:var(--font-geist-sans)]"
                  key={i}
                >
                  {item}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </>
  );
}

const suggestions = [
  {
    icon: <Search className="w-4 h-4 text-gray-500" />,
    text: "“Can You Simplify The Krebs Cycle For My 9th Graders?”",
  },
  {
    icon: <Video className="w-4 h-4 text-gray-500" />,
    text: "“Show Me An Animation That Explains The Electron Transport Chain.”",
  },
  {
    icon: <Pencil className="w-4 h-4 text-green-600" />,
    text: "“Create A 3-Question Quiz On ATP Production.”",
  },
  {
    icon: <Users className="w-4 h-4 text-blue-600" />,
    text: "“Form Groups Of Students For Peer Learning Based On Performance.”",
  },
];

function RelatedSuggestions() {
  return (
    <div className="w-full mx-auto mt-8">
      <h2 className="text-2xl font-semibold text-gray-800 mb-4">Related</h2>
      <div className="space-y-3">
        {suggestions.map((item, index) => (
          <div
            key={index}
            className="text-xl font-semibold flex items-center justify-between px-4 py-3 border border-gray-200 rounded hover:bg-gray-50 transition"
          >
            <div className="flex items-center gap-2 text-sm text-gray-700">
              {item.icon}
              <span>{item.text}</span>
            </div>
            <button className="text-blue-600 font-semibold text-lg leading-none">
              +
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}

const AIResponse = () => {
  const router = useRouter();
  const searchParams = useSearchParams();

  const [activeTab, setActiveTab] = useState<"answers" | "sources">("answers");
  return (
    <>
      <div className="ai-response-content-wrapper mx-auto p-6 bg-white">
        <section className="flex flex-col gap-y-6 mt-2">
          <AiResponseHeader />
          <div className="max-w-6xl mx-auto p-6 bg-white rounded shadow-lg">
            <h1 className="text-[42px] font-bold mb-4">
              {searchParams.get("prompt")}
            </h1>

            {/* Tabs */}
            <div className="flex gap-2 mb-4">
              <div className="flex gap-2 mb-4">
                <button
                  className={`px-4 py-1.5 rounded font-medium text-sm ${
                    activeTab === "answers"
                      ? "bg-sky-500 text-white"
                      : "bg-gray-100 text-gray-600"
                  }`}
                  onClick={() => setActiveTab("answers")}
                  type="button"
                >
                  Answers
                </button>
                <button
                  className={`px-4 py-1.5 rounded font-medium text-sm ${
                    activeTab === "sources"
                      ? "bg-sky-500 text-white"
                      : "bg-gray-100 text-gray-600"
                  }`}
                  onClick={() => setActiveTab("sources")}
                  type="button"
                >
                  Sources
                </button>
              </div>
            </div>
            <LearningPlan />
          </div>
        </section>
        <div className="max-w-6xl mt-5 mx-auto bg-white rounded">
          <RelatedSuggestions />
        </div>
      </div>
    </>
  );
};

export default AIResponse;
