"use client";

import React, { useState } from "react";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { Check, MoveLeft, MoveRight } from "lucide-react";

import AIChatInput from "@/components/Molecules/AIChatInput";

import IMAGES, { ALERT_ICONS } from "@/assets/images";
import { Button } from "@/components/ui/button";
import LessonPlanner from "@/components/Molecules/LessonPlannerCard";

export default function ProgressAlertPage() {
  const [value, setValue] = useState<string>("");
  const router = useRouter();

  return (
    <div className="mt-4 bg-white rounded-xl">
      <div className="rounded-xl min-h-screen flex flex-col bg-white text-[var(--color-primary)] px-4 py-3">
        <header className="text-black flex flex-col flex-wrap gap-5 md:flex-row justify-between items-center">
          <Button
            variant="outline"
            className="h-10 mt-auto cursor-pointer border border-[#00235A] text-[var(--color-primary)] font-sans font-medium"
            onClick={() => router.push("/")}
          >
            <MoveLeft />
            Back to Home
          </Button>

          <Button
            variant="outline"
            className="h-10 mt-auto cursor-pointer border border-[#00235A] bg-[#00235A] text-white font-sans font-medium lg:hidden sm:flex"
            onClick={() => router.push("/")}
          >
            View Student
            <MoveRight />
          </Button>

          <h1 className="text-[32px] font-semibold text-[var(--color-rejected)]">
            Student: Alert Jalen
          </h1>
          <Button
            variant="outline"
            className="lg:flex hidden h-10 mt-auto cursor-pointer border border-[#00235A] bg-[#00235A] text-white font-sans font-medium"
            onClick={() => router.push("/")}
          >
            View Student
            <MoveRight />
          </Button>
        </header>

        <div className="p-4 mt-4 max-w-4xl self-center w-full">
          <p className="text-sm font-semibold mb-4">
            Jalen may not yet grasp how the model represents equivalent parts.
            I've suggested a quick warm-up review of visual models to start
            today's lesson. Would you like to check in with him one-on-one
            during this time?
          </p>

          <div className="flex flex-col gap-6">
            <LessonPlanner
              icon={<Image src={IMAGES.LESSON_PLANNER} alt="Tool Icon" />}
              title="Tool: Lesson planner"
              subTitle="Today 11:15: Math's period 2"
              content={
                <ul className="mb-4 space-y-1 ml-3">
                  {[
                    "Add warm-up to daily lesson plan",
                    "Check in directly with Jalen",
                  ].map((item, i) => (
                    <li key={i} className="flex items-center gap-2">
                      <span className="w-5 h-5 flex items-center justify-center bg-[var(--color-ai-blue)] rounded text-white">
                        <Check className="w-[18px] h-[18px]" />
                      </span>
                      <span className="text-[#18181B] text-sm font-normal font-sans">
                        {item}
                      </span>
                    </li>
                  ))}
                </ul>
              }
              action={
                <Button
                  variant="default"
                  className="h-10 mt-auto cursor-pointer bg-[#2B2B2B] text-white"
                >
                  Add to today&apos;s plan
                </Button>
              }
            />

            <LessonPlanner
              icon={<Image src={ALERT_ICONS.MESSAGE_GREEN} alt="Tool Icon" />}
              title="Tool: Email parent"
              subTitle=""
              content={
                <div className="mb-2 text-[#18181B] font-sans font-normal text-sm">
                  <div>
                    <span>To:</span> Jalen's parents
                  </div>
                  <div>
                    <span>Message:</span> Family tip
                  </div>
                  <div>
                    <span>Body:</span>
                    <p>
                      I noticed Jalen is having a little trouble with
                      multiplication and division strategies. Jalen likes to
                      learn math from visual models. You can help him with the
                      arrays that you can find in the worktext 86. I am going to
                      work with Jalen in class today also. As a team, we can
                      help him succeed!
                    </p>
                  </div>
                </div>
              }
              action={
                <Button
                  variant="default"
                  className="h-10 mt-auto cursor-pointer bg-[#2B2B2B] text-white"
                >
                  Send Email
                </Button>
              }
            />

            {/* Tool: Email Parent */}
            <LessonPlanner
              icon={<Image src={IMAGES.LESSON_PLANNER} alt="Tool Icon" />}
              title="Tool: Lesson planner"
              subTitle="Wed 2:15 : Math's period 3"
              content={
                <ul className="mb-4 space-y-1 ml-3">
                  {[
                    "Follow-up-Formative task",
                    "Check in directly with Jalen",
                  ].map((item, i) => (
                    <li key={i} className="flex items-center gap-2">
                      <span className="w-5 h-5 flex items-center justify-center bg-[var(--color-ai-blue)] rounded text-white">
                        <Check className="w-4 h-4" />
                      </span>
                      <span className="text-gray-800">{item}</span>
                    </li>
                  ))}
                </ul>
              }
              action={
                <Button
                  variant="default"
                  className="h-10 mt-auto cursor-pointer bg-[#2B2B2B] text-white"
                >
                  Add to tomorrow&apos;s plan
                </Button>
              }
            />
          </div>
        </div>

        <div className="sticky bottom-2 flex flex-col gap-4 bg-white">
          <div className="mt-6 flex items-center justify-center gap-4">
            <Button
              variant="default"
              className="h-10 w-[192px] mt-auto cursor-pointer bg-[#2B2B2B] text-white rounded-[12px]"
            >
              Regenerate All
            </Button>
            <Button
              variant="default"
              className="h-10 w-[192px] mt-auto cursor-pointer bg-[#2B2B2B] text-white rounded-[12px]"
            >
              Do All Above
            </Button>
          </div>
          <AIChatInput
            prefixIcon="AI_GRAY"
            onChange={({ target: { value } }) => setValue(value)}
            value={value}
            placeholder="Ask anything..."
            onVoiceInput={() => {}}
            onSend={() => {}}
            containerStyle={{
              border: "1px #9F9F9FA8 solid",
              padding: "8px 24px",
              alignSelf: "center",
              maxWidth: "730px",
              width: "100%",
              background: "#fff",
              borderRadius: "12px",
              boxShadow: "0 10px 10px 0 rgb(0 0 0 / 0.05)",
            }}
          />
        </div>
      </div>
    </div>
  );
}
