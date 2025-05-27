"use client";
import React, { useState } from "react";

import { DatePicker } from "@/components/Molecules/CalendarHeader";
import AlertsSection from "@/components/Molecules/AlertSection";
import AIChatInput from "@/components/Molecules/AIChatInput";
import DayPlan from "./DayPlan";

const ActionCenter = () => {
  const [value, setValue] = useState<string>("");

  return (
    <div className="flex flex-col items-start">
      <div className="self-center">
        <DatePicker />
      </div>
      <AlertsSection />
      <AIChatInput
        prefixIcon="AI_ROBOT"
        onChange={({ target: { value } }) => {
          setValue(value);
        }}
        onSend={() => {}}
        value={value}
        onVoiceInput={() => {}}
        containerStyle={{
          width: "730px",
          border: "1px #9F9F9FA8 solid",
          padding: "8px 24px",
          alignSelf: "center",
        }}
        placeholder="Ask anything..."
      />
      <DayPlan />
    </div>
  );
};

export default ActionCenter;
