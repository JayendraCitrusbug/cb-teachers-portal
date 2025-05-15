"use client";
import React, { useState } from "react";

import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs";

const StudentDetailsHeader = () => {
  const [activeTab, setActiveTab] = useState("learning_insights");

  return (
    <Tabs value={activeTab} onValueChange={setActiveTab}>
      <TabsList className="justify-between bg-[#F4F4F5] w-full max-w-[400px] h-[48px]">
        {[
          { label: "Overview", value: "overview" },
          { label: "Learning Insights", value: "learning_insights" },
          { label: "Status", value: "status" },
        ].map(({ label, value }) => (
          <TabsTrigger
            key={value}
            className="w-full text-left p-2"
            style={{
              backgroundColor: activeTab === value ? "#FFFFFF" : "#F4F4F5",
              color: activeTab === value ? "#18181B" : "#71717A",
            }}
            value={value}
          >
            {label}
          </TabsTrigger>
        ))}
      </TabsList>
    </Tabs>
  );
};

const StudentDetails = () => {
  return <StudentDetailsHeader />;
};

export default StudentDetails;
