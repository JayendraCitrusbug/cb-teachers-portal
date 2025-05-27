import Image from "next/image";

import { Progress } from "@/components/ui/progress";
import { CircleIndicator } from "@/components/Molecules/CirleProgres";

import { useIsMobile } from "@/hooks/use-mobile";

import { COLORS } from "@/constants";
import IMAGES from "@/assets/images";

const NightlyProgress = () => {
  const isMobile = useIsMobile();

  if (isMobile) {
    return (
      <div className="flex p-5 rounded-lg mt-10 flex-wrap md:flex-nowrap shadow justify-between gap-10 lg:flex-row sm:flex-col bg-white">
        <div className="flex flex-col justify-around w-full">
          <div className="flex items-center gap-2 mb-2">
            <Image
              src={IMAGES.MOON_BLUE}
              alt="moon"
              width={24}
              height={24}
              className="w-6 h-6"
            />
            <h2 className="text-[var(--color-primary)] font-semibold text-xl">
              Student Nightly Report
            </h2>
          </div>
        </div>
        <div className="flex flex-col gap-4">
          <div className="flex flex-wrap gap-2">
            <div className="rounded-full w-[calc(100%/3-8px)]">
              <CircleIndicator
                label="Activity"
                percent={78}
                color="SUCCESS"
                className="!min-w-[80px] w-full"
              />
            </div>
            <div className="rounded-full w-[calc(100%/3-8px)]">
              <CircleIndicator
                label="Homework"
                percent={48}
                color="REJECTED"
                className="!min-w-[80px] w-full"
              />
            </div>
            <div className="rounded-full w-[calc(100%/3-8px)]">
              <CircleIndicator
                label="Mastery"
                percent={68}
                color="WARNING"
                className="!min-w-[80px] w-full"
              />
            </div>
          </div>
        </div>
        <p className="text-sm text-[#474747CC]">
          <strong>Unit 4:</strong> Photosynthesis
          <br />
          Students are still struggling to fully understand the key concepts of
          this unit.
        </p>
      </div>
    );
  }

  return (
    <div className="flex py-10 px-10 rounded-lg mt-10 flex-wrap md:flex-nowrap justify-between gap-10 lg:flex-row sm:flex-col">
      <div className="flex flex-col justify-around w-full">
        <div className="flex items-center gap-2 mb-2">
          <Image
            src={IMAGES.MOON_BLUE}
            alt="moon"
            width={24}
            height={24}
            className="w-6 h-6"
          />
          <h2 className="text-[var(--color-primary)] font-semibold text-xl">
            Student Nightly Report
          </h2>
        </div>

        <p className="text-sm text-[#474747CC]">
          <strong>Unit 4:</strong> Photosynthesis
          <br />
          Students are still struggling to fully understand the key concepts of
          this unit.
        </p>

        <div>
          <p className="text-sm text-[#474747CC] mt-2">
            <strong className="text-gray">Concept Clarity:</strong> Many
            students found the material challenging, particularly in the latest
            homework.
          </p>

          <p className="text-sm text-[#474747CC] mt-2">
            <strong className="text-gray">Teacher Insight:</strong> Consider
            reviewing key points in class or providing simpler examples.
          </p>
        </div>
      </div>
      <div className="flex flex-col gap-4">
        <div className="flex gap-4 flex-wrap sm:flex-nowrap">
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
  );
};

export default NightlyProgress;
