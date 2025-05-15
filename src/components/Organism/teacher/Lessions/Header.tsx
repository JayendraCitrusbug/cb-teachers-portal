"use client";
import React, { useState } from "react";

import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs";

const Header = () => {
  const [activeTab, setActiveTab] = useState("create");

  return (
    <Tabs value={activeTab} onValueChange={setActiveTab}>
      <TabsList className="justify-between bg-[#F4F4F5] w-full max-w-[400px] h-[48px]">
        {[
          { label: "Create New", value: "create" },
          { label: "Lessons List", value: "lessons" },
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

export default Header;
