"use client";
import React from "react";
import { useRouter } from "next/navigation";

import { MoveLeft } from "lucide-react";

import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs";

import { Button } from "@/components/ui/button";

interface StudentDetailsHeaderProps {
  activeTab: "learning_insights" | "overview" | "status";
  setActiveTab: React.Dispatch<React.SetStateAction<"learning_insights" | "overview" | "status">>;
}

const StudentDetailsHeader: React.FC<StudentDetailsHeaderProps> = ({ setActiveTab, activeTab }) => {

  const router = useRouter();

  return (
    <>
      <div className="flex flex-col md:flex-row gap-2 w-full items-center justify-between">
        <Tabs value={activeTab} onValueChange={(value) => setActiveTab(value as any)} className="max-w-[555px] w-full">
          <TabsList className="justify-between bg-[#F4F4F5] w-full max-w-[555px] h-[44px] rounded-[6px]">
            {[
              { label: "Overview", value: "overview" },
              { label: "Learning Insights", value: "learning_insights" },
              { label: "Status", value: "status" },
            ].map(({ label, value }) => (
              <TabsTrigger
                key={value}
                className="w-full text-left p-2 cursor-pointer"
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
        <div className="flex flex-wrap items-center gap-3 justify-end w-full">
          <Button onClick={() => router.push("/students")} variant="outline" className="h-10 mt-auto cursor-pointer border border-[#00235A] bg-[#00235A] text-white">
            <MoveLeft />
            Back to Dashboard
          </Button>
          <Button variant="outline" className="h-10 mt-auto cursor-pointer border border-[#ccc]">
            Manage Classes
          </Button>
        </div>
      </div>
    </>

  );
};


export default StudentDetailsHeader;
