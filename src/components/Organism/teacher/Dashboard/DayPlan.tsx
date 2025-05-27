import { useState } from "react";
import Image from "next/image";

import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

import StudentNightlyReport from "./NightlyReport";
import Biology from "./Biology";

import IMAGES from "@/assets/images";

export default function DayPlan() {
  const [activeTab, setActiveTab] = useState<string>("nightly-report");
  const tabs = [
    {
      title: (
        <div className="flex justify-between w-full px-3">
          <Image
            src={
              activeTab !== "nightly-report" ? IMAGES.MOON_BLUE : IMAGES.MOON
            }
            width={24}
            height={24}
            alt="moon"
          />
          <p>Nightly Report</p>
        </div>
      ),
      content: <StudentNightlyReport />,
      value: "nightly-report",
    },
    {
      title: "09:00 P1: Biology",
      content: <Biology />,
      value: "biology",
    },
    {
      title: "09:45 P2: English",
      content: <Biology />,
      value: "english",
    },
    {
      title: "10:30 P3: Math",
      content: <Biology />,
      value: "math",
    },
  ];

  return (
    <section className="py-4 w-full">
      <div className="flex items-center justify-between mb-5">
        <h2 className="text-lg font-semibold text-gray-800">My Day</h2>
      </div>

      <div className="flex items-center p-6 gap-3 justify-start bg-[var(--color-secondary)] rounded-xl">
        <Tabs defaultValue="account" className="w-full" value={activeTab}>
          <TabsList className="h-[56px] py-1.5 px-2.5">
            {tabs.map((item) => (
              <TabsTrigger
                key={item.value}
                className="w-[180px] rounded-sm"
                value={item.value}
                onClick={() => setActiveTab(item.value)}
              >
                {item.title}
              </TabsTrigger>
            ))}
          </TabsList>

          {tabs.map((item) => (
            <TabsContent key={item.value} value={item.value} className="w-full">
              {item.content}
            </TabsContent>
          ))}
        </Tabs>
      </div>
    </section>
  );
}
