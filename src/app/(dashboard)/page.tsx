import React from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

import { Button } from "@/components/ui/button";
import {
  PerformanceCard,
  SuggestionButton,
} from "@/components/Organism/teacher/Dashboard";

const page = () => {
  return (
    <div className="flex flex-col p-4 gap-y-6">
      <h1 className="font-semibold text-2xl">Home</h1>
      <div className="flex flex-col gap-y-5">
        <h1 className="font-semibold">Action Center</h1>
        <div className="flex flex-col md:flex-row items-center gap-6 w-full">
          <PerformanceCard
            title="Performance"
            tag={10}
            period="1 Biology"
            color={"#FF3B30"}
            bgColor={"#FF3B301A"}
            icon={"GRAPH_DOWNWARDS"}
            description="Students"
            buttonText="Fix"
          />
          <PerformanceCard
            title="Email Parents"
            tag={2}
            period="3 Chemistry"
            color={"#FF9500"}
            bgColor={"#FF95001A"}
            description="Students needs help"
            icon={"MAIL"}
            buttonText="Create"
          />
          <PerformanceCard
            title="Students Insight"
            tag={"Jamie"}
            period="2 Math's"
            color={"#34C759"}
            bgColor={"#34C7591A"}
            description={"has Improved"}
            icon={"INSIGHTS"}
            buttonText="View"
          />
        </div>

        <div className="w-full flex gap-[14px] justify-end">
          <Button className="border-[1.6px] w-[28px] h-[28px] border-[#00235A] p-0 flex items-center justify-center cursor-pointer">
            <ChevronLeft className="text-[#00235A]" />
          </Button>
          <Button className="border-[1.6px] w-[28px] h-[28px] border-[#00235A] bg-[#00235A] p-0 flex items-center justify-center cursor-pointer">
            <ChevronRight className="text-[#FFFFFF]" />
          </Button>
        </div>
      </div>
      <div className="flex flex-col gap-y-5">
        <SuggestionButton />
      </div>
    </div>
  );
};

export default page;
