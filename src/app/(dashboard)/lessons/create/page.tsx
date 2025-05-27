import React from "react";

import { ArrowLeft } from "lucide-react";

import { LessonPlanChat } from "@/components/Organism/teacher/Lessions";
import { Button } from "@/components/ui/button";
import Link from "next/link";

const CreateLessonPage = () => {
  return (
    <div className="flex flex-col items-start w-full max-h-screen overflow-y-auto">
      <div className="w-full flex justify-end mt-[24px]">
        <Link
          href="/lessons/"
          className="bg-[var(--color-primary)] text-white rounded-sm px-4 py-2 flex items-center gap-2"
        >
          <ArrowLeft className="mr-2 h-4 w-4" />
          <span className="text-sm">Back to Student</span>
        </Link>
      </div>
      <LessonPlanChat />
    </div>
  );
};

export default CreateLessonPage;
