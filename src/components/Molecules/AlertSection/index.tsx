import Image from "next/image";

import AlertCard from "@/components/Molecules/AlertCard";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

import { ALERT_ICONS } from "@/assets/images";

export default function AlertsSection() {
  const cardItem = [
    {
      icon: ALERT_ICONS.ALERT_RED,
      title: "Students Progress Alert",
      description:
        "Sean is critically behind or regressing in multiple concept.",
      color: "REJECTED",
    },
    {
      icon: ALERT_ICONS.MASTER_YELLOW,
      title: "Concept Mastery Alert",
      description: "Mixed understanding in recent assessments. Monitor needed.",
      color: "WARNING",
    },
    {
      icon: ALERT_ICONS.SOCIAL_RED,
      title: "Engagement Alert",
      description: "Several students are disengaged from assignments.",
      color: "REJECTED",
    },
    {
      icon: ALERT_ICONS.SOCIAL_RED,
      title: "Family Newsletter",
      description: "Time to share class highlights with P1: Biology.",
      color: "SUCCESS",
    },
    {
      icon: ALERT_ICONS.SOCIAL_RED,
      title: "Family Newsletter",
      description: "Time to share class highlights with P1: Biology.",
      color: "SUCCESS",
    },
  ];

  return (
    <section className="py-4">
      <div className="flex items-center justify-between">
        <h2 className="text-lg font-semibold text-gray-800">Alerts</h2>
      </div>

      <div className="flex items-center gap-3 justify-center">
        <Carousel
          opts={{
            slidesToScroll: 1,
          }}
          className="w-[90%]"
        >
          <CarouselContent className="min-h-fit py-10">
            {cardItem.map((alert, index) => (
              <CarouselItem
                key={index}
                className="md:basis-1/4 lg:basis-1/4 rounded-xl"
              >
                <AlertCard
                  key={`alert_${index}_${alert.title}`}
                  icon={
                    <Image
                      src={alert.icon}
                      alt="Alert"
                      width={24}
                      height={24}
                    />
                  }
                  title={alert.title}
                  description={alert.description}
                  color={alert.color as "SUCCESS" | "WARNING" | "REJECTED"}
                />
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious />
          <CarouselNext />
        </Carousel>
      </div>
    </section>
  );
}
