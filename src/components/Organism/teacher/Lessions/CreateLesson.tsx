"use client";
import React, { useRef, useState, useEffect } from "react";

import { RotateCw } from "lucide-react";
import dayjs from "dayjs";
import { TimePicker } from "antd";

import AIChatInput from "../../../Molecules/AIChatInput";

import { DatePicker } from "@/components/Molecules/CalendarHeader";

import { cn } from "@/lib/utils";

function LessonPlanCard({
  title,
  focus,
  activities,
  date,
  time,
  onAddToCalendar,
}: {
  title: string;
  focus: string;
  activities: string[];
  date: string;
  time: string;
  onAddToCalendar?: () => void;
}) {
  return (
    <div className="bg-[#edfff1] border border-[#34C759] rounded-xl p-6 mt-5 flex flex-col ">
      <div className="text-[#565656] text-lg font-medium text-center">
        {title}
      </div>
      <hr className="border-[#34C759] opacity-40 my-3" />
      <div className="text-[#18181B] text-[15px] mb-2">
        <span className="font-medium text-[#18181B]">Focus:</span> {focus}
      </div>
      <div className="mb-3">
        <span className="font-normal text-[#18181B]">Activities:</span>
        <ul className="list-disc pl-6 mt-1 text-[#18181B] text-[15px] space-y-1">
          {activities.map((a, i) => (
            <li key={i}>{a}</li>
          ))}
        </ul>
      </div>
      <div className="flex gap-3 justify-end mt-4 flex-wrap">
        <div className="bg-white border border-[#34C759] flex items-center justify-center rounded-lg px-3 text-[16px] font-semibold text-[#18181B] min-w-[130px] text-center">
          {onAddToCalendar ? (
            <DatePicker
              defaultDate={new Date(date)}
              buttonProps={{
                varient: "ghost",
                className: "bg-transparent shadow-none font-semibold font-sans",
              }}
            />
          ) : (
            <div className="font-semibold font-sans py-2">
              {dayjs(date, "DD MMM YYYY").format("MMM D, YYYY")}
            </div>
          )}
        </div>

        <div className="font-sans bg-white border border-[#34C759] rounded-lg px-3 justify-center flex items-center text-[16px] font-semibold text-[#18181B] min-w-[110px] text-center">
          {onAddToCalendar ? (
            <TimePicker
              variant="borderless"
              suffixIcon={false}
              className="font-semibold font-sans cursor-pointer"
              use12Hours
              format="h:mm A"
              allowClear={false}
              defaultValue={dayjs(time, "HH:mm")}
            />
          ) : (
            <div className="font-semibold font-sans">{time}</div>
          )}
        </div>
        {onAddToCalendar && (
          <button
            onClick={onAddToCalendar}
            className="cursor-pointer font-sans bg-[#2B2B2B] text-white rounded-lg px-6 py-2 text-[16px] font-semibold min-w-[180px] hover:bg-[#444] transition"
          >
            Add to Calendar List
          </button>
        )}
      </div>
    </div>
  );
}

function LessonPlanMaterialsSection({
  materialsTitle = "Materials/Resources (Used Throughout the week):",
  materials = [],
  differentiationTitle = "Differentiation / Accommodations:",
  differentiationDescription = "",
  differentiation = [],
}: {
  materialsTitle?: string;
  materials: string[];
  differentiationTitle?: string;
  differentiationDescription: string;
  differentiation: {
    label?: string;
    text: string;
  }[];
}) {
  return (
    <div className="rounded-xl mt-5 text-[#222]">
      <div>
        <span className="font-medium  text-[#18181B]">{materialsTitle}</span>
        <ul className="list-disc pl-6 mt-1 text-[16px] ">
          {materials.map((item, i) => (
            <li key={i}>{item}</li>
          ))}
        </ul>
      </div>
      <div className="mt-5">
        <span className="font-medium text-[#18181B]">
          {differentiationTitle}
        </span>
        <div className="mt-1 text-[16px] ">{differentiationDescription}</div>
        <ul className="list-disc pl-8 mt-2 space-y-2">
          {differentiation.map((item, idx) => (
            <li key={idx}>
              {item.label && (
                <span className="font-normal text-[#18181B] ">
                  {item.label}
                </span>
              )}
              {item.text}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

function LessonPlanHeader({
  title,
  subtitle,
  standards,
  weeklyObjective,
  essentialQuestions,
  lessons = [],
  materials = [],
  materialsTitle = "Materials/Resources (Used Throughout the week):",
  differentiationTitle = "Differentiation / Accommodations:",
  differentiationDescription = "",
  differentiation = [],
}: {
  title: string;
  subtitle: string;
  standards: string[][];
  weeklyObjective: string;
  essentialQuestions: string[];
  lessons?: {
    title: string;
    focus: string;
    activities: string[];
    date: string;
    time: string;
    onAddToCalendar?: () => void;
  }[];
  // --- new props below! ---
  materials?: string[];
  materialsTitle?: string;
  differentiationTitle?: string;
  differentiationDescription?: string;
  differentiation?: {
    label?: string;
    text: string;
  }[];
}) {
  return (
    <div className="bg-[#DEF6FFD4] border border-[#DEF6FFD4] rounded-xl p-6 max-w-3xl mt-3 ">
      {/* Header */}
      <div className="flex flex-col gap-1 items-center">
        <div className="text-[var(--primary)] text-xl font-semibold text-center">
          {title}
        </div>
        <div className="text-[var(--primary)] text-lg font-medium text-center">
          {subtitle}
        </div>
      </div>
      <hr className="border-[var(--primary)] opacity-40 my-3" />
      {/* Standards */}
      <div className="flex items-center gap-3 flex-wrap">
        <span className="font-semibold text-[#181818] text-[16px]">
          Standards:
        </span>
        <div className="flex gap-2 flex-wrap">
          {standards.map((group, idx) =>
            group.map((std, i) => (
              <span
                key={std + i}
                className="inline-block bg-[#00235A] text-white px-3 py-0.5 rounded-md font-semibold text-[15px]"
              >
                {std}
              </span>
            ))
          )}
        </div>
      </div>
      {/* Objective */}
      <div className="mt-4">
        <div className="font-semibold text-[#1a1a1a] mb-0.5">
          Weekly Objective:
        </div>
        <div className="text-[#232323] text-[15px] leading-snug">
          {weeklyObjective}
        </div>
      </div>
      {/* Essential Questions */}
      <div className="mt-4">
        <div className="font-semibold text-[#1a1a1a] mb-1">
          Essential Questions:
        </div>
        <ul className="list-disc pl-5 text-[#232323] text-[15px] space-y-1">
          {essentialQuestions.map((q, idx) => (
            <li key={idx}>{q}</li>
          ))}
        </ul>
      </div>
      {/* Lessons */}
      {lessons.map((lesson, idx) => (
        <LessonPlanCard {...lesson} key={idx} />
      ))}
      {/* Materials/Resources & Differentiation */}
      {(materials.length > 0 || differentiation.length > 0) && (
        <LessonPlanMaterialsSection
          materialsTitle={materialsTitle}
          materials={materials}
          differentiationTitle={differentiationTitle}
          differentiationDescription={differentiationDescription}
          differentiation={differentiation}
        />
      )}
    </div>
  );
}

export function LessonPlanSuggestionButtons({
  options = [],
  onOptionClick,
  className,
}: {
  options: string[];
  onOptionClick?: (option: string, idx: number) => void;
  className?: string;
}) {
  return (
    <div
      className={cn(
        "w-full flex flex-col items-center",
        className
      )}
    >
      <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-4 gap-6 w-full max-w-5xl h-full mb-6">
        {options.map((option, idx) => (
          <button
            key={option}
            className="bg-[#2B2B2B] text-white text-sm font-medium rounded-2xl px-8 py-3 min-h-[1rem] min-w-fit text-center transition focus:outline-none cursor-pointer"
            style={{
              boxShadow: "0px 4px 16px 0px rgba(3, 182, 221, 0.07)",
              wordBreak: "break-word",
            }}
            onClick={() => onOptionClick?.(option, idx)}
          >
            {option}
          </button>
        ))}
      </div>
    </div>
  );
}

const mockChatStages = [
  {
    id: 1,
    messages: [
      {
        type: "user",
        text: (
          <>
            <p>
              Hi there, teacher friend! Thanks for taking time out of your busy
              day to plan something meaningful for your students. That already
              makes you amazing. I’m here to help you build a complete, clear,
              and professional-quality lesson plan. Let’s make something great
              together – with efficiency.
            </p>
            <p className="mt-2">
              You can paste in anything you’re working from: idea, a chunk of a
              curriculum guide, a topic copied lesson from a program, a table of
              contents from your book, a standard, a messy draft, whatever
              you’ve got. I’ll do the organizing and polishing.
            </p>
          </>
        ),
      },
    ],
    inputPlaceholder: "Ask anything...",
  },
  {
    id: 2,
    messages: [
      {
        type: "user",
        text: `Workin on Eureka math lessons for Monday to Friday next week. Doin Find whole-number quotients and remainders! Here’s my curriculum:\n
- 4.NBT.B.6 - 2.4.2 Divide two- and three-digit multiples of 10 by one-digit numbers 2.C.11 Divide by using familiar strategies 2.C.12 Divide two-digit numbers by one-digit numbers by using an area model 2.C.13 Divide three-digit numbers by one-digit numbers by using an area model 2.C.14 Divide two-digit numbers by one-digit numbers by using the place value strategies 2.C.15 Divide three-digit numbers by one-digit numbers by using place value strategies 2.C.16 Divide by using the break apart and distributive strategy 3.A.1 Divide multiples of 100 and 1000 3.B.4 Apply place value strategies to divide hundreds, tens and ones 3.B.5 Apply place value strategies to divide thousands, hundreds, tens and ones 3.B.6 Connect pictorial representations of division to long division 3.B.7 Represent division by using partial quotients 3.B.8 Choose`,
      },
      {
        type: "bot",
        text: (
          <>
            <div>
              <strong>
                Thanks! Just a quick clarification so I can tailor your plan:
              </strong>
              <ul className="list-disc ml-5 mt-2 space-y-1">
                <li>What grade level is this for?</li>
                <li>About how long is each class period?</li>
              </ul>
            </div>
          </>
        ),
      },
      {
        type: "user",
        text: "4th grade. We have 55 minutes for math",
      },
    ],
    inputPlaceholder: "Ask anything...",
  },
  {
    id: 3,
    messages: [
      {
        type: "final_response",
        text: (
          <LessonPlanHeader
            title="Lesson Plan (5 lesson, 55 mins each)"
            subtitle="Division Strategies (whole-Number Quotients and Remainders)"
            standards={[
              ["2.3.4, 2.C.11-2.C.16"],
              ["3.A.1, 3.B.4-3.B.8"],
              ["4.NBT.B6"],
            ]}
            weeklyObjective="Students will divide two- and three-digit numbers by one-digit divisors using area models, place value strategies, partial quotients, and the Distributive Property, and interpret remainders based on the context of a problem."
            essentialQuestions={[
              "How can different model help us divide larger numbers?",
              "What does a remainder mean in a real-world situation?",
              "How can place value understanding make division easier?",
            ]}
            lessons={[
              {
                title:
                  "Lesson 1: Divide by multiples of 10 (Intro to Patterns)",
                focus:
                  "Divide two-and three-digit numbers using place value and known facts.",
                activities: [
                  "Fluency: Sprint with multiplication facts and multiples of 10",
                ],
                date: "20 May 2025",
                time: "09:30 AM",
              },
              {
                title:
                  "Lesson 2: Area Model Division ( Two-Digit by one-Digit )",
                focus:
                  "Use area models to divide two-digit numbers (e.g., 84 / 4)",
                activities: [
                  "Fluency: Equation card warm-up with matching models",
                ],
                date: "20 May 2025",
                time: "09:30 AM",
                onAddToCalendar: () => {},
              },
            ]}
            materials={[
              "Dry Erase Boards & Markers",
              "Place Value Chart (digital & physical)",
            ]}
            differentiationDescription="Reading Disabilities: Provide visual models, templates, and worked examples. Use numberless word problems for conceptual understanding."
            differentiation={[
              {
                label: "Attention Challenges (504/ADHD)",
                text: "Use timers for sprints, offer seated and movement-based options, break down multi-step problems into chunks.",
              },
              {
                label: "ELLS",
                text: "Anchor visuals for key vocab (e.g., quotient, remainder), provide sentence frames, allow drawing in place of written response during first pass.",
              },
              {
                label: "Advanced Learners",
                text: "Encourage multiple solution paths, challenge to create and explain their own word problems using large numbers.",
              },
            ]}
          />
        ),
      },
    ],
    inputPlaceholder: "Ask anything...",
  },
];

interface ChatBubbleProps {
  avatar?: React.ReactNode;
  message: string | React.ReactNode | (string | React.ReactNode)[];
  side?: "left" | "right";
  className?: string;
}

function UserMessage({ message, className }: ChatBubbleProps) {
  const paragraphs = Array.isArray(message) ? message : [message];

  return (
    <div
      className={cn("flex gap-4 w-[80%] items-center justify-end", className)}
    >
      <div
        className={cn(
          "bg-[#F7F8FA] rounded-lg px-5 py-3 shadow-sm text-[15px] text-[#222] leading-[1.3] font-normal",
          "whitespace-pre-line",
          "w-fit max-w-[800px]"
        )}
      >
        {paragraphs.map((p, idx) => (
          <div className={idx > 0 ? "mt-2" : ""} key={idx}>
            {p}
          </div>
        ))}
      </div>
    </div>
  );
}

function AIMessage({
  title,
  onRefresh,
}: {
  title: string | React.ReactNode;
  onRefresh?: () => void;
}) {
  return (
    <div className="relative w-[82%] max-w-[730px]">
      <div className="bg-white rounded-2xl py-5 flex flex-col">
        <span className="text-[#162D57] font-medium text-[15px] leading-snug mb-3">
          {title}
        </span>
      </div>
      {onRefresh && (
        <button
          type="button"
          onClick={onRefresh}
          className="absolute top-1/2 -right-12 transform -translate-y-1/2 w-10 h-10 flex items-center justify-center bg-white rounded-full shadow-lg hover:bg-blue-50 active:scale-95 transition"
          aria-label="Refresh"
        >
          <RotateCw className="w-5 h-5 text-[#162D57]" />
        </button>
      )}
    </div>
  );
}

export default function LessonPlanChat() {
  const [stage, setStage] = useState(0);
  const [input, setInput] = useState("");
  const chatBottomRef = useRef<HTMLDivElement | null>(null);

  const [chatMessages, setChatMessages] = useState(mockChatStages[0].messages);

  useEffect(() => {
    if (chatBottomRef.current)
      chatBottomRef.current.scrollIntoView({ behavior: "smooth" });
  }, [stage]);

  function handleSend() {
    if (input.trim()) {
      if (stage < mockChatStages.length - 1) {
        setStage((prev) => prev + 1);
        setChatMessages((prev) => [
          ...prev,
          ...mockChatStages[stage + 1].messages,
        ]);
      }
      setInput("");
    }
  }

  return (
    <div className="max-h-screen overflow-y-auto bg-[#F4F7FA] py-0 sm:py-4 flex flex-col items-center w-full">
      <div
        className="w-full bg-white rounded-2xl mx-auto shadow-sm pb-30 px-4 md:px-7 pt-6 md:pb-3 flex flex-col h-full justify-center items-center"
        style={{
          minHeight: "calc(100dvh - 100px)",
        }}
      >
        <h1 className="font-semibold text-4xl text-[#3B3B3E] self-center">
          New Lesson Plan
        </h1>

        {/* MESSAGES LOOP */}
        <div className="flex flex-col gap-4 mt-6 mb-8 max-w-5xl max-h-full overflow-y-auto">
          {chatMessages.map((msg, idx) =>
            msg.type === "bot" ? (
              <AIMessage key={idx} title={msg.text} />
            ) : msg.type === "final_response" ? (
              <React.Fragment key={idx}>{msg.text}</React.Fragment>
            ) : (
              <UserMessage
                key={idx}
                message={msg.text}
                className={`${msg.type === "bot" ? "self-start" : "self-end"}`}
              />
            )
          )}
          {chatMessages.slice(-1)[0].type === "final_response" && (
            <div className="text-start text-[#232323] text-[18px] font-medium mb-6">
              Would you like me to generate:
            </div>
          )}
          <div ref={chatBottomRef} />
        </div>
        {chatMessages.slice(-1)[0].type === "final_response" && (
          <LessonPlanSuggestionButtons
            options={[
              "A Daily Exit Ticket",
              "A Set Of Differentiated Task Cards",
              "A Visual Another Chart For Division Strategies",
              "Prep Your Next Wee's Follow-Up Lessons",
            ]}
            onOptionClick={(option, idx) => handleSend()}
          />
        )}

        <div className="w-full max-w-[800px] flex items-center gap-2 rounded-lg bg-white shadow-xl mt-auto mb-1 sticky bottom-0">
          <AIChatInput
            prefixIcon="AI_GRAY"
            onChange={({ target: { value } }) => setInput(value)}
            onSend={handleSend}
            onVoiceInput={() => {}}
            value={input}
            containerStyle={{
              border: "1px #9F9F9FA8 solid",
              padding: "8px 24px",
              alignSelf: "center",
              borderRadius: "12px",
            }}
            placeholder="Ask anything..."
          />
        </div>
      </div>
    </div>
  );
}
