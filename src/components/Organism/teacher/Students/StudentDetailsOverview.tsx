import React from "react";

import Image from "next/image";

import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import SubjectTable from "./SubjectTable";

import IMAGES, { ALERT_ICONS } from "@/assets/images";
import ActionCard from "@/components/Molecules/actionCard";
import { AIAssessmentContent } from "@/components/Molecules/ai-assessment/AIAssessmentContent";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import AlertCard from "@/components/Molecules/AlertCard";
import { AlertsSection } from "../Dashboard";

const alerts = [
  {
    icon: ALERT_ICONS.ALERT_RED,
    title: "Students Progress Alert",
    description: "Sean is critically behind or regressing in multiple concept.",
    color: "REJECTED",
  },
  {
    icon: ALERT_ICONS.MASTER_YELLOW,
    title: "Concept Mastery Alert",
    description: "Mixed understanding in recent assessments. Monitor needed.",
    color: "WARNING",
  },
  {
    icon: ALERT_ICONS.SOCIAL_RED,
    title: "Engagement Alert",
    description: "Several students are disengaged from assignments.",
    color: "REJECTED",
  },
  {
    icon: ALERT_ICONS.SOCIAL_RED,
    title: "Family Newsletter",
    description: "Time to share class highlights with P1: Biology.",
    color: "SUCCESS",
  },
  {
    icon: ALERT_ICONS.SOCIAL_RED,
    title: "Family Newsletter",
    description: "Time to share class highlights with P1: Biology.",
    color: "SUCCESS",
  },
];

const StudentDetailsOverview = () => {
  return (
    <section className="flex flex-col gap-y-6 mt-2">
      <AIAssessmentContent
        theme="ai-blue"
        className="w-full md:max-w-[538px]"
        content={
          <p className="text-white text-[16px] leading-[22px] font-medium tracking-[0.16px] mt-2">
            Doing well another subject but biology. Recommend Specking to in
            person about how you might help.
          </p>
        }
      />

      <section className="flex flex-col items-start gap-6 w-full">
        <div className="flex flex-col items-start gap-5 w-full">
          <section className="">
            <div className="flex items-center justify-between">
              <h2 className="text-lg font-semibold text-gray-800">Alerts</h2>
            </div>

            <div className="flex items-center gap-3 justify-center">
              {/* Left Arrow */}
              <AlertsSection />

              {/* Cards */}
            </div>
          </section>
        </div>

        <div className="flex flex-col items-end gap-5 w-full">
          <SubjectTable />
        </div>
      </section>
    </section>
  );
};

export default StudentDetailsOverview;
