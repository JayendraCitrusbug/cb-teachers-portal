import { BarChartComponent } from "@/components/Molecules/Charts";

import { COLORS } from "@/constants";
import NightlyProgress from "./NightlyProgress";

export default function StudentNightlyReport() {
  return (
    <div className="bg-white rounded-lg">
      <NightlyProgress />

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
