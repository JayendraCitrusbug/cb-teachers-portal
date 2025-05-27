import React from "react";

import { AIAssessmentContent } from "@/components/Molecules/ai-assessment/AIAssessmentContent";

const SubjectDetails = () => {
  return (
    <AIAssessmentContent
      theme="ai-blue"
      content={
        <p
          className={`text-white text-[16px] leading-[22px] font-medium tracking-[0.16px] mt-2`}
        >
          Overall class mastery on 'Cellular Respiration' is 65%.5 students are
          excelling, while 4 are finding a few concept challenging particularly
          the Krebs Cycle.
        </p>
      }
    />
  );
};

export default SubjectDetails;
