import React from "react";
import {
  ActionCenter,
  SuggestionButton,
} from "@/components/Organism/teacher/Dashboard";

const page = () => {
  return (
    <div className="flex flex-col p-4 gap-y-6">
      <h1 className="font-semibold text-2xl">Home</h1>
      <ActionCenter />
      <div className="flex flex-col gap-y-5">
        <SuggestionButton />
      </div>
    </div>
  );
};

export default page;
