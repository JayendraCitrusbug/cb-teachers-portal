import React from "react";

import { Header, LessonTable } from "@/components/Organism/teacher/Lessions";

const page = () => {
  return (
    <div className="flex flex-col p-4 gap-y-6">
      <LessonTable />
    </div>
  );
};

export default page;
