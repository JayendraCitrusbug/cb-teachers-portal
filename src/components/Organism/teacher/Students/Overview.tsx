import Image from "next/image";

import { Badge } from "@/components/ui/badge";
import Table from "@/components/Molecules/Table";
import { AIAssesmentContent } from "./AIAssesment";

import IMAGES from "@/assets/images";

export default function PerformceOverview() {
  return (
    <>
      <AIAssesmentContent
        theme="red"
        content={
          <div className="flex flex-col gap-2 text-[16px]">
            <p>
              3 students (Alex Johnson, Jamie Smith, Taylor Wilson) have shown a
              significant drop in understanding or are critically struggling
              with the 'Cellular Respiration' lesson. This is based on their
              recent quiz scores and interaction patterns with the learning
              module.
            </p>
            <p>
              Potential Reasons: These students consistently struggled with
              questions related to the Electron Transport Chain. Low engagement
              with the preparatory material for this lesson was observed for
              these students.
            </p>
          </div>
        }
      />

      <Table
        title="Topics"
        headers={[
          { label: "Student Name", key: "name" },
          { label: "AI Assessment", key: "assessment" },
          { label: "Status", key: "status" },
          { label: "Trend", key: "trend" },
          { label: "Action", key: "action" },
        ]}
        data={[
          {
            name: (
              <span className="text-[#1D1D1D] underline cursor-pointer">
                Alex Johnson
              </span>
            ),
            assessment: (
              <div
                className="inline-flex w-8 h-8 items-center justify-center rounded text-white"
                style={{ backgroundColor: "#22C55E" }}
              >
                90
              </div>
            ),
            status: "Struggling with Krebs Cycle",
            trend: (
              <Badge
                className="px-3.5 py-2 font-medium"
                variant="outline"
                style={{
                  backgroundColor: "#FEE2E2",
                  color: "#E61F23",
                  borderColor: "#E61F23",
                }}
              >
                Trending Down
              </Badge>
            ),
            action: (
              <Image
                alt="action"
                src={IMAGES.HAMBURGER}
                height={24}
                width={24}
                className="cursor-pointer text-center m-auto"
              />
            ),
          },
          {
            name: (
              <span className="text-[#1D1D1D] underline cursor-pointer">
                Sara Khan
              </span>
            ),
            assessment: (
              <div
                className="inline-flex w-8 h-8 items-center justify-center rounded text-white"
                style={{ backgroundColor: "#EF4444" }}
              >
                45
              </div>
            ),
            status: "Needs Attention on ETC",
            trend: (
              <Badge
                className="px-3.5 py-2 font-medium"
                variant="outline"
                style={{
                  backgroundColor: "#FEF3C7",
                  color: "#D97706",
                  borderColor: "#FBBF24",
                }}
              >
                Needs Attention
              </Badge>
            ),
            action: (
              <Image
                alt="action"
                src={IMAGES.HAMBURGER}
                height={24}
                width={24}
                className="cursor-pointer text-center m-auto"
              />
            ),
          },
          {
            name: (
              <span className="text-[#1D1D1D] underline cursor-pointer">
                David SK
              </span>
            ),
            assessment: (
              <div
                className="inline-flex w-8 h-8 items-center justify-center rounded text-white"
                style={{ backgroundColor: "#F97316" }}
              >
                65
              </div>
            ),
            status: "Good Understanding",
            trend: (
              <Badge
                className="px-3.5 py-2 font-medium"
                variant="outline"
                style={{
                  backgroundColor: "#E0E7FF",
                  color: "#6366F1",
                  borderColor: "#6366F1",
                }}
              >
                Top Performance
              </Badge>
            ),
            action: (
              <Image
                alt="action"
                src={IMAGES.HAMBURGER}
                height={24}
                width={24}
                className="cursor-pointer text-center m-auto"
              />
            ),
          },
          {
            name: (
              <span className="text-[#1D1D1D] underline cursor-pointer">
                Jhon Michael
              </span>
            ),
            assessment: (
              <div
                className="inline-flex w-8 h-8 items-center justify-center rounded text-white"
                style={{ backgroundColor: "#EF4444" }}
              >
                45
              </div>
            ),
            status: "Mastered",
            trend: (
              <Badge
                className="px-3.5 py-2 font-medium"
                variant="outline"
                style={{
                  backgroundColor: "#DCFCE7",
                  color: "#16A34A",
                  borderColor: "#16A34A",
                }}
              >
                Trending Up
              </Badge>
            ),
            action: (
              <Image
                alt="action"
                src={IMAGES.HAMBURGER}
                height={24}
                width={24}
                className="cursor-pointer text-center m-auto"
              />
            ),
          },
          {
            name: (
              <span className="text-[#1D1D1D] underline cursor-pointer">
                Alex Johnson
              </span>
            ),
            assessment: (
              <div
                className="inline-flex w-8 h-8 items-center justify-center rounded text-white"
                style={{ backgroundColor: "#22C55E" }}
              >
                90
              </div>
            ),
            status: "Mastered",
            trend: (
              <Badge
                className="px-3.5 py-2 font-medium"
                variant="outline"
                style={{
                  backgroundColor: "#FEF3C7",
                  color: "#D97706",
                  borderColor: "#FBBF24",
                }}
              >
                Needs Attention
              </Badge>
            ),
            action: (
              <Image
                alt="action"
                src={IMAGES.HAMBURGER}
                height={24}
                width={24}
                className="cursor-pointer text-center m-auto"
              />
            ),
          },
        ]}
      />

      <div className="mt-10 pt-6 rounded-md bg-white shadow-sm p-4">
        <h3 className="text-red-600 font-semibold text-lg mb-4">
          AI-Powered Intervention Strategies
        </h3>

        <hr style={{ color: "grey" }} />

        <div className="my-4">
          <p className="font-semibold">Suggested Group Activity:</p>
          <p>
            Form a small group with Alex, Jamie, and Taylor to collaboratively
            create a concept map for Cellular Respiration.
          </p>
        </div>

        <div className="mb-4">
          <p className="font-semibold">Recommended Resources:</p>
          <ul className="list-disc list-inside space-y-1 text-blue-600" style={{ 
            listStyle: "none"
          }}>
            <li>
              <p className="text-[#3682F9]">
                Video: Cellular Respiration Explained Simply
              </p>
            </li>
            <li>
              <p className="text-[#3682F9]">
                Interactive Quiz: Key Stages of Respiration
              </p>
            </li>
          </ul>
        </div>

        <div>
          <p className="font-semibold">Instructional Tips:</p>
          <p>
            Use analogies to explain complex processes like the ETC. Break down
            the Krebs cycle into smaller, digestible steps with quick checks for
            understanding.
          </p>
        </div>
      </div>
    </>
  );
}
