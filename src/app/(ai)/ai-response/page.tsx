import React, { Suspense } from "react";

import { AIResponse } from "@/components/Organism/ai-response";

const page = () => {
  return (
    <div className="p-4">
      <Suspense fallback={<div>Loading...</div>}>
        <AIResponse />
      </Suspense>
    </div>
  );
};

export default page;
