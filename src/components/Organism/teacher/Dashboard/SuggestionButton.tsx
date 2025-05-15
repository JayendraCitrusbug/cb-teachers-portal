"use client";
// components/AIHelpPanel.tsx
import { ChartNoAxesCombined, Users2, Notebook, LineChart } from "lucide-react";
import AIChatInput from "./AIChatInput";

export default function AIHelpPanel() {
  return (
    <div className="w-full max-w-3xl mx-auto py-10 text-center">
      {/* Title */}
      <div className="flex flex-col gap-y-4 items-center">
        <h1 className="font-[family-name:var(--font-geist-sans)] font-medium text-5xl leading-tight tracking-wide">
          What can I{" "}
          <span className="text-[#3E71C0] font-bold font-[family-name:var(--font-geist-sans)]">
            Help you with
          </span>
        </h1>
        <p className="font-[family-name:var(--font-geist-sans)] font-normal text-base leading-6 tracking-wide">
          The power of AI at your service - Tame the knowledge!
        </p>
      </div>

      <div className="mt-8">
        <AIChatInput
          onChange={() => {}}
          onSend={() => {}}
          value=""
          onVoiceInput={() => {}}
        />
      </div>

      {/* Suggestions Title */}
      <h2 className="mt-10 text-lg font-semibold text-[#0a2540]">Suggestions</h2>

      {/* Suggestion Buttons */}
      <div className="mt-4 grid grid-cols-1 sm:grid-cols-2 gap-4 px-4">
        <SuggestionButton
          text="How Many Students Below 50%"
          icon={<ChartNoAxesCombined  className="w-4 h-4" />}
          
        />
        <SuggestionButton
          text="Group Teaching Recommendations"
          icon={<Users2 className="w-4 h-4" />}
        />
        <SuggestionButton
          text="Create Next Lesson & Homework"
          icon={<Notebook className="w-4 h-4" />}
        />
        <SuggestionButton
          text="Generate Weekly Report"
          icon={<LineChart className="w-4 h-4" />}
        />
      </div>
    </div>
  );
}

interface SuggestionButtonProps {
  text: string;
  icon: React.ReactNode;
}

const SuggestionButton = ({ text, icon }: SuggestionButtonProps) => {
  return (
    <button className="flex justify-center items-center border-[2px] border-blue-500 text-blue-600 font-medium text-sm px-4 py-4 rounded-xl hover:bg-blue-50 transition gap-3 cursor-pointer">
      {text}
      <span>{icon}</span>
    </button>
  );
};
