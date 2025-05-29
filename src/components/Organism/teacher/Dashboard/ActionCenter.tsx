"use client";
import React, { useState } from "react";

import { DatePicker } from "@/components/Molecules/CalendarHeader";
import AlertsSection from "@/components/Molecules/AlertSection";
import AIChatInput from "@/components/Molecules/AIChatInput";
import DayPlan from "./DayPlan";
import NightlyProgress from "./NightlyProgress";
import { useIsMobile } from "@/hooks/use-mobile";
import Image from "next/image";
import IMAGES from "@/assets/images";

const ActionCenter = () => {
  const isMobile = useIsMobile();
  const [value, setValue] = useState<string>("");

  return (
    <div className="flex flex-col items-start w-full">
      <div className="self-center flex items-center gap-4 w-full justify-between sm:justify-center">
      <Image src={IMAGES.PROFILE_ICON} alt="Logo" className="block sm:hidden"/>
      <DatePicker withNavigation />
      </div>
      {isMobile && <NightlyProgress />}
      <AlertsSection />
      <AIChatInput
      prefixIcon="AI_GRAY"
      onChange={({ target: { value } }) => {
        setValue(value);
      }}
      onSend={() => {}}
      value={value}
      onVoiceInput={() => {}}
      containerStyle={{
        maxWidth: "730px",
        width: "100%",
        border: "1px #9F9F9FA8 solid",
        padding: "8px 24px",
        alignSelf: "center",
        boxShadow: "0 5px 5px 0 rgb(0 0 0 / 0.05)",
      }}
      placeholder="Ask anything..."
      />
      <DayPlan />
    </div>
  );
};

export default ActionCenter;
