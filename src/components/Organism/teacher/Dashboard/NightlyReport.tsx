import { Moon } from "lucide-react";

import { Progress } from "@/components/ui/progress";
import { CircleIndicator } from "@/components/Molecules/CirleProgres";
import { BarChartComponent } from "@/components/Molecules/Charts";

import { COLORS } from "@/constants";

export default function StudentNightlyReport() {
  return (
    <div className="bg-white rounded-lg">
      <div className="flex py-10 px-10 rounded-lg mt-10 justify-between gap-10 lg:flex-row sm:flex-col">
        <div className="flex flex-col justify-around w-full">
          <div className="flex items-center gap-2 mb-2">
            <Moon color={COLORS.PRIMARY} />
            <h2 className="text-[var(--color-primary)] font-semibold text-xl">
              Student Nightly Report
            </h2>
          </div>

          <p className="text-sm text-[#474747CC]">
            <strong>Unit 4:</strong> Photosynthesis
            <br />
            Students are still struggling to fully understand the key concepts
            of this unit.
          </p>
          <div>
            <p className="text-sm text-[#474747CC] mt-2">
              <strong className="text-gray">Concept Clarity:</strong> Many
              students found the material challenging, particularly in the
              latest homework.
            </p>

            <p className="text-sm text-[#474747CC] mt-2">
              <strong className="text-gray">Teacher Insight:</strong> Consider
              reviewing key points in class or providing simpler examples.
            </p>
          </div>
        </div>
        <div className="flex flex-col gap-4">
          <div className="flex gap-4">
            <CircleIndicator label="Activity" percent={78} color="SUCCESS" />
            <CircleIndicator label="Homework" percent={48} color="REJECTED" />
            <CircleIndicator label="Mastery" percent={68} color="WARNING" />
          </div>

          <div className="w-full text-start flex justify-between">
            <p className="text-xl font-semibold text-gray-700">
              Capsule Progress
            </p>
            <p className="text-xl font-semibold text-gray-700">33%</p>
          </div>
          <div className="w-full bg-gray-200 h-2 rounded-full mt-1">
            <Progress color={COLORS.WARNING} value={33} />
          </div>
        </div>
      </div>

      <div className="grid lg:grid-cols-2 xl:grid-cols-4 gap-4 py-10 px-10 rounded-md">
        <BarChartComponent
          data={[
            { month: "January", desktop: 186 },
            { month: "February", desktop: 305 },
            { month: "March", desktop: 237 },
            { month: "April", desktop: 73 },
            { month: "May", desktop: 209 },
            { month: "June", desktop: 214 },
          ]}
          footer={{
            title: "Period 1: Biology",
          }}
          dateKeys={[
            {
              key: "desktop",
              label: "Desktop",
              color: COLORS.AI_BLUE,
              barConfig: { radius: [5, 5, 5, 5] },
            },
          ]}
        />
        <BarChartComponent
          data={[
            { month: "January", desktop: 186 },
            { month: "February", desktop: 305 },
            { month: "March", desktop: 237 },
            { month: "April", desktop: 73 },
            { month: "May", desktop: 209 },
            { month: "June", desktop: 214 },
          ]}
          footer={{
            title: "Period 1: Maths",
          }}
          header={{
            title: (
              <p className="absolute right-2 bg-[#34C75980] w-[138px] h-[24px] text-[#fff] text-[12px] flex items-center justify-center rounded-sm">
                Lesson Plan Updated
              </p>
            ),
          }}
          dateKeys={[
            {
              key: "desktop",
              label: "Desktop",
              color: COLORS.AI_BLUE,
              barConfig: { radius: [5, 5, 5, 5] },
            },
          ]}
        />
        <BarChartComponent
          data={[
            { month: "January", desktop: 186 },
            { month: "February", desktop: 305 },
            { month: "March", desktop: 237 },
            { month: "April", desktop: 73 },
            { month: "May", desktop: 209 },
            { month: "June", desktop: 214 },
          ]}
          footer={{
            title: "Period 1: History",
          }}
          dateKeys={[
            {
              key: "desktop",
              label: "Desktop",
              color: COLORS.AI_BLUE,
              barConfig: { radius: [5, 5, 5, 5] },
            },
          ]}
        />

        <BarChartComponent
          data={[
            { month: "January", desktop: 186 },
            { month: "February", desktop: 305 },
            { month: "March", desktop: 237 },
            { month: "April", desktop: 73 },
            { month: "May", desktop: 209 },
            { month: "June", desktop: 214 },
          ]}
          footer={{
            title: "Period 1: Chemistry",
          }}
          header={{
            title: (
              <p className="absolute right-2 bg-[#34C75980] w-[138px] h-[24px] text-[#fff] text-[12px] flex items-center justify-center rounded-sm">
                Lesson Plan Updated
              </p>
            ),
          }}
          dateKeys={[
            {
              key: "desktop",
              label: "Desktop",
              color: COLORS.AI_BLUE,
              barConfig: { radius: [5, 5, 5, 5] },
            },
          ]}
        />
      </div>
    </div>
  );
}
