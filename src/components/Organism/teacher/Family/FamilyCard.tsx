import React from "react";

import Image from "next/image";

import ActionCard from "@/components/Molecules/actionCard";

import IMAGES from "@/assets/images";

const FamilyCard = () => {
  return (
    <div className="flex flex-col md:flex-row items-center gap-6 w-full">
      <ActionCard
        title="Performance"
        icon={
          <Image
            src={IMAGES.GRAPH_DOWNWARDS}
            alt="Performance"
            height={23}
            width={24}
          />
        }
        iconBgColor="#ff3b301a"
        heading="3"
        subHeading="Period 1 Biology"
        buttonLabel="Fix"
        buttonColor="#ff3b30"
      />
      <ActionCard
        title="Email Parents"
        icon={<Image src={IMAGES.MAIL} alt="Email" height={23} width={24} />}
        iconBgColor="#FF95001A"
        heading="2"
        subHeading="Period 3 Chemistry"
        buttonLabel="Create"
        buttonColor="#FF9500"
      />
      <ActionCard
        title="Students Insight"
        icon={
          <Image src={IMAGES.INSIGHTS} alt="Insights" height={23} width={24} />
        }
        iconBgColor="#34C7591A"
        heading="Jamie"
        subHeading="Period 2 Math's"
        buttonLabel="View"
        buttonColor="#34C759"
      />
    </div>
  );
};

export default FamilyCard;
