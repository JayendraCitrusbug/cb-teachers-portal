import React from "react";
import Image from "next/image";

import { Plus } from "lucide-react";
import {
  ChevronLeft,
  ChevronRight,
  AlertCircle,
  BookOpen,
  Users,
  MessageSquare,
} from "lucide-react";

import { Button } from "@/components/ui/button";
import { Card, CardContent, CardTitle } from "@/components/ui/card";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { StudentsTable } from "@/components/Organism/teacher/Students";
import AlertCard from "@/components/Molecules/AlertCard";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

import IMAGES, { ALERT_ICONS } from "@/assets/images";
import ActionCard from "@/components/Molecules/actionCard";
import { AIAssessmentContent } from "@/components/Molecules/ai-assessment/AIAssessmentContent";

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

const Students: React.FC = () => {
  return (
    <section className="flex flex-col p-4 gap-y-6">
      <header className="flex items-center justify-between relative self-stretch w-full">
        <h1 className="font-semibold text-zinc-950 text-2xl tracking-[-0.40px] leading-6 whitespace-nowrap">
          Students
        </h1>

        <div className="inline-flex items-center gap-[11px]">
          <div className="inline-flex h-[42px] items-center justify-center gap-6"></div>
        </div>
      </header>

      <div className="flex flex-col md:flex-row items-start gap-6 relative self-stretch w-full">
        <div className="flex flex-col w-full md:w-[538px] items-start gap-3">
          <label className="font-semibold text-zinc-900 text-xl leading-5">
            Class
          </label>

          <Select>
            <SelectTrigger className="w-full bg-white focus:offset-0 outline-0 border border-[#ccc] shadow-none focus:ring-0 cursor-pointer">
              <SelectValue placeholder="Select Class" />
            </SelectTrigger>
            <SelectContent
              style={{ background: "white" }}
              className="shadow-sm"
            >
              <SelectItem
                value="class1"
                className="cursor-pointer font-regular"
              >
                Class 1
              </SelectItem>
              <SelectItem
                value="class2"
                className="cursor-pointer font-regular"
              >
                Class 2
              </SelectItem>
              <SelectItem
                value="class3"
                className="cursor-pointer font-regular"
              >
                Class 3
              </SelectItem>
            </SelectContent>
          </Select>
        </div>

        <div className="flex flex-col w-full md:w-[538px] items-start gap-3">
          <label className="font-semibold text-zinc-900 text-xl leading-5">
            Students
          </label>

          <Select>
            <SelectTrigger className="w-full bg-white focus:offset-0 outline-0 border border-[#ccc] shadow-none focus:ring-0 cursor-pointer">
              <SelectValue placeholder="Select Student" />
            </SelectTrigger>
            <SelectContent
              style={{ background: "white" }}
              className="shadow-sm"
            >
              <SelectItem
                value="student1"
                className="cursor-pointer font-regular"
              >
                Alex Johnson
              </SelectItem>
              <SelectItem
                value="student2"
                className="cursor-pointer font-regular"
              >
                Sarah Khan
              </SelectItem>
              <SelectItem
                value="student3"
                className="cursor-pointer font-regular"
              >
                David SK
              </SelectItem>
              <SelectItem
                value="student4"
                className="cursor-pointer font-regular"
              >
                Jhon Michal
              </SelectItem>
            </SelectContent>
          </Select>
        </div>

        <Button
          variant="outline"
          className="h-10 cursor-pointer border border-[#ccc]"
        >
          Manage Classes
        </Button>
      </div>

      <AIAssessmentContent
        theme="ai-blue"
        className="w-full md:max-w-[538px]"
        content={
          <p className="text-white text-[16px] leading-[22px] font-medium tracking-[0.16px] mt-2">
            Overall class mastery on Unit 4: Photosynthesis` is 78%.4 students
            show improvement since last week.While 2 students require additional
            attention.
          </p>
        }
      />
      <section className="">
        <div className="flex items-center justify-between">
          <h2 className="text-lg font-semibold text-gray-800">Alerts</h2>
        </div>

        <div className="flex items-center gap-3 justify-center">
          {/* Left Arrow */}
          <Carousel
            opts={{
              slidesToScroll: 1,
            }}
            className="w-[90%]"
          >
            <CarouselContent className="min-h-fit py-10">
              {alerts.map((alert, index) => (
                <CarouselItem
                  key={index}
                  className="md:basis-1/4 lg:basis-1/4 rounded-xl"
                >
                  <AlertCard
                    key={`alert_${index}_${alert.title}`}
                    icon={
                      <Image
                        src={alert.icon}
                        alt="Alert"
                        width={24}
                        height={24}
                      />
                    }
                    title={alert.title}
                    description={alert.description}
                    color={alert.color as "SUCCESS" | "WARNING" | "REJECTED"}
                  />
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious />
            <CarouselNext />
          </Carousel>

          {/* Cards */}
        </div>
      </section>

      <section className="flex flex-col items-start gap-6 w-full">
        <div className="flex flex-col items-end gap-5 w-full">
          <StudentsTable />
        </div>
      </section>
    </section>
  );
};

export default Students;
