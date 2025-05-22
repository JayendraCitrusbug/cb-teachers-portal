"use client";
import React from "react";
import { useRouter } from "next/navigation";
import IMAGES from "@/assets/images";
import { ChevronLeft, ChevronRight } from "lucide-react";

import ActionCard from "@/components/Molecules/actionCard";
import { Button } from "@/components/ui/button";

import Image from "next/image";

const ActionCenter = () => {
  const router = useRouter();
  return (
    <div className="flex flex-col gap-y-5">
      <h1 className="font-semibold">Action Center</h1>
      <div className="flex flex-col md:flex-row items-center gap-6 w-full">
        <ActionCard
          title="Performance"
          icon={
            <Image
              src={IMAGES.GRAPH_DOWNWARDS}
              alt="Performance"
              height={23}
              width={24}
            />
          }
          iconBgColor="#ff3b301a"
          heading="3"
          subHeading="Period 1 Biology"
          buttonLabel="Fix"
          buttonColor="#ff3b30"
          buttonClickHandler={() => router.push("/overview")}
        />
        <ActionCard
          title="Email Parents"
          icon={<Image src={IMAGES.MAIL} alt="Email" height={23} width={24} />}
          iconBgColor="#FF95001A"
          heading="2"
          subHeading="Period 3 Chemistry"
          buttonLabel="Create"
          buttonColor="#FF9500"
        />
        <ActionCard
          title="Students Insight"
          icon={
            <Image
              src={IMAGES.INSIGHTS}
              alt="Insights"
              height={23}
              width={24}
            />
          }
          iconBgColor="#34C7591A"
          heading="Jamie"
          subHeading="Period 2 Math's"
          buttonLabel="View"
          buttonColor="#34C759"
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
  );
};

export default ActionCenter;
