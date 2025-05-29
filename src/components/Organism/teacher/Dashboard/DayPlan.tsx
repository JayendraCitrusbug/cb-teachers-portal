import { useState } from "react";
import Image from "next/image";

import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

import { useIsMobile } from "@/hooks/use-mobile";

import StudentNightlyReport from "./NightlyReport";
import Biology from "./Biology";

import IMAGES from "@/assets/images";

export default function DayPlan() {
  const [activeTab, setActiveTab] = useState<string>("nightly-report");
  const isMobile = useIsMobile();
  const tabs = [
    {
      isNightlyReport: true,
      title: (
        <div className="flex justify-between w-full px-3 items-center">
          <Image
            src={
              activeTab !== "nightly-report" ? IMAGES.MOON_GRAY : IMAGES.MOON
            }
            width={24}
            height={24}
            alt="moon"
          />
          <p>Nightly Report</p>
        </div>
      ),
      accordionTitle: "Nightly Report",
      content: <StudentNightlyReport />,
      accordionContent: (
        <span className="text-xs text-[#00235A] ml-2 font-inter font-medium leading-5 ">
          Cellular Respiration
        </span>
      ),
      value: "nightly-report",
    },
    {
      title: "09:00 P1: Biology",
      accordionTitle: "09:00 P1: Biology",
      content: <Biology />,
      accordionContent: (
        <div className="flex space-x-2">
          <div className="w-4 h-4 rounded-full border-2 border-red-500"></div>
          <div className="w-4 h-4 rounded-full border-2 border-orange-400"></div>
          <div className="w-4 h-4 rounded-full border-2 border-orange-400"></div>
        </div>
      ),
      value: "biology",
    },
    {
      title: "09:45 P2: English",
      accordionTitle: "09:45 P2: English",
      content: <Biology />,
      accordionContent: (
        <div className="flex space-x-2">
          <div className="w-4 h-4 rounded-full border-2 border-red-500"></div>
          <div className="w-4 h-4 rounded-full border-2 border-orange-400"></div>
          <div className="w-4 h-4 rounded-full border-2 border-orange-400"></div>
        </div>
      ),
      value: "english",
    },
    {
      title: "10:30 P3: Math",
      accordionTitle: "10:30 P3: Math",
      accordionContent: (
        <div className="flex space-x-2">
          <div className="w-4 h-4 rounded-full border-2 border-red-500"></div>
          <div className="w-4 h-4 rounded-full border-2 border-orange-400"></div>
          <div className="w-4 h-4 rounded-full border-2 border-orange-400"></div>
        </div>
      ),
      content: <Biology />,
      value: "math",
    },
  ];

  return (
    <section className="py-4 w-full">
      <div className="flex items-center justify-between mb-5">
        <h2 className="text-lg font-semibold text-gray-800">My Day</h2>
      </div>

      {isMobile ? (
        <div className="block md:hidden">
          <Accordion type="single" collapsible className="w-full flex flex-col gap-3">
            {tabs.filter(tab => !tab.isNightlyReport).map((item) => (
              <AccordionItem key={item.value} value={item.value} className="shadow-sm">
                <AccordionTrigger className="flex justify-between items-center p-4 hover:bg-gray-50 transition-colors">
                  <div className="w-full flex items-center gap-2 justify-between">
                    <p className="font-inter text-[#202025] font-medium text-[14px] leading-[100%] tracking-[-0.41px]">
                      {item.accordionTitle}
                    </p>
                    {item?.accordionContent && item?.accordionContent}
                  </div>
                </AccordionTrigger>
                <AccordionContent>{item.content}</AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      ) : (
        <div className="flex flex-wrap items-center p-6 gap-3 justify-start bg-[var(--color-secondary)] rounded-xl">
          <Tabs defaultValue="account" className="w-full" value={activeTab}>
            <TabsList className="h-[56px] py-1.5 px-2.5 max-w-[400px] sm:max-w-[600px] overflow-x-auto md:max-w-[800px] ">
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
              <TabsContent
                key={item.value}
                value={item.value}
                className="w-full"
              >
                {item.content}
              </TabsContent>
            ))}
          </Tabs>
        </div>
      )}
    </section>
  );
}
