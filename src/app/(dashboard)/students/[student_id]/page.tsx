import React from "react";

import StudentDetailsMain from "@/components/Organism/teacher/Students/StudentDetailsMain";

const page = async ({ params }: any) => {
  const { student_id } = await params;
  return (
    <>
      <div className="flex flex-col p-4 gap-y-6">
        <section className="flex flex-col gap-y-6 mt-2">
          <div className="flex items-center justify-between w-full flex-wrap gap-2">
            <h2 className="font-semibold text-zinc-950 text-xl tracking-[-0.40px] leading-5">
              {decodeURI(student_id)}
            </h2>
          </div>
          <StudentDetailsMain />
        </section>
      </div>
    </>
  );
};

export default page;
