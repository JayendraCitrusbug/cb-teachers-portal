import React from "react";

import { PerformceOverview } from "@/components/Organism/teacher/Students";
import { Button } from "@/components/ui/button";
import { MoveLeft } from "lucide-react";

const page = () => {
  return (
    <div>
      <div className="flex flex-col p-4 gap-y-6">
        <section className="flex flex-col gap-y-6 mt-2">
          <div className="flex items-center justify-between w-full flex-wrap gap-2">
            <h2 className="font-semibold text-zinc-950 text-xl tracking-[-0.40px] leading-5">
              P1 Biology: Cellular Respiration - 3 Students Critical
            </h2>
          </div>
          <div className="flex items-center gap-2 justify-end w-full">
            <Button
              variant="outline"
              className="h-10 mt-auto cursor-pointer border border-[#00235A] bg-[#00235A] text-white"
            >
              <MoveLeft />
              Back to P1 Biology
            </Button>
          </div>

          <PerformceOverview />
        </section>
      </div>
    </div>
  );
};

export default page;
