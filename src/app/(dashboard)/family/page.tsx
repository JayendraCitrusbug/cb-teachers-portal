import React from "react";

import {
  ChatSection,
  FamilySection,
} from "@/components/Organism/teacher/Family";

const page = () => {
  return (
    <>
      <div className="flex flex-col p-4 gap-y-6">
        <h1 className="font-semibold text-2xl">Family</h1>
        <FamilySection />
      </div>
      <div className="flex flex-col p-4 gap-y-6">
        <h1 className="font-semibold text-2xl">Messages</h1>
        <ChatSection />
      </div>
    </>
  );
};

export default page;
