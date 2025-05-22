import React from "react";

import { MoveLeft } from "lucide-react";

import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { PerofrmanceOverview } from "@/components/Organism/teacher/Dashboard";
import Header from "@/components/Molecules/header/Header";

const page = () => {
  return (
    <div className="flex flex-col p-4 gap-y-6">
      {/* <section className="flex flex-col gap-y-6 mt-2">
        <div className="flex items-center justify-between w-full flex-wrap gap-2">
          <h2 className="font-semibold text-zinc-950 text-xl tracking-[-0.40px] leading-5">
            Cellular Respiration - 3 Students
          </h2>
        </div>
        <div className="flex items-center gap-2 justify-between w-full flex-wrap">
          <Button
            variant="outline"
            className="h-10 mt-auto cursor-pointer border border-[#00235A] bg-[#00235A] text-white"
          >
            <MoveLeft />
            Back to Dashboard
          </Button>
        </div>
        <PerofrmanceOverview />
      </section> */}
      <Header
        title="Cellular Respiration - 3 Students"
        backButton={{
          text: "Back to Dashboard",
          clickHandler: "to_dashboard",
        }}
        children={<PerofrmanceOverview />}
        extraContent={
          <div className="w-[350px] flex items-center gap-6 justify-between">
            <Badge
              className="px-3.5 py-3 font-medium w-full font-sans"
              variant="outline"
              style={{
                backgroundColor: "#FEE2E2",
                color: "#E61F23",
                borderColor: "#E61F23",
              }}
            >
              Critical Alert
            </Badge>
            <Badge
              className="px-3.5 py-3 font-medium w-full border border-[#E4E4E7] font-sans"
              variant="outline"
            >
              Period 1: Biology
            </Badge>
          </div>
        }
      />
    </div>
  );
};

export default page;
