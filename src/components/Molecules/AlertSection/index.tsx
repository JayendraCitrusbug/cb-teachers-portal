"use client";
import Image from "next/image";
import AlertCard from "@/components/Molecules/AlertCard";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { useIsMobile } from "@/hooks/use-mobile";
import { ALERT_ICONS } from "@/assets/images";
import { useRouter } from "next/navigation";

export default function AlertsSection() {
  const router = useRouter();
  const isMobile = useIsMobile();
  const cardItem = [
    {
      icon: ALERT_ICONS.ALERT_RED,
      title: "Students Progress Alert",
      description:
        "Sean is critically behind or regressing in multiple concept.",
      color: "REJECTED",
      hrefLink: "/progress-alert",
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

  const isOdd = cardItem.length % 2 !== 0;

  return (
    <section className="py-4 w-full">
      {isMobile ? (
        <div className="grid grid-cols-2 gap-4 pt-6 px-1 max-h-[400px] overflow-y-auto">
          {cardItem.map((alert, index) => {
            const isLast = index === cardItem.length - 1;
            const className = isOdd && isLast ? "col-span-2" : "col-span-1";
            return (
              <div key={index} className={`rounded-2xl ${className}`}>
                <AlertCard
                  key={`alert_${index}_${alert.title}`}
                  icon={
                    <Image
                      src={alert.icon}
                      alt="Alert"
                      width={28}
                      height={28}
                    />
                  }
                  hrefLink={alert?.hrefLink}
                  title={alert.title}
                  description={alert.description}
                  color={
                    alert.color as
                      | "SUCCESS"
                      | "WARNING"
                      | "REJECTED"
                      | "PRIMARY"
                  }
                />
              </div>
            );
          })}
        </div>
      ) : (
        <>
          <div className="flex items-center justify-between">
            <h2 className="text-lg font-semibold text-gray-800">Alerts</h2>
          </div>
          <div className="flex items-center gap-3 justify-center">
            <Carousel opts={{ slidesToScroll: 1 }} className="w-[90%]">
              <CarouselContent className="min-h-fit py-10">
                {cardItem.map((alert, index) => (
                  <CarouselItem
                    key={index}
                    className="md:basis-1/2 lg:basis-1/4 rounded-xl"
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
                      hrefLink={alert?.hrefLink}
                      title={alert.title}
                      description={alert.description}
                      color={
                        alert.color as
                          | "SUCCESS"
                          | "WARNING"
                          | "REJECTED"
                          | "PRIMARY"
                      }
                    />
                  </CarouselItem>
                ))}
              </CarouselContent>
              <CarouselPrevious />
              <CarouselNext />
            </Carousel>
          </div>
        </>
      )}
    </section>
  );
}
