import React from "react";
import Image from "next/image";

import IMAGES from "@/assets/images";

interface AIAssessmentProps {
  className?: string;
  title?: string;
  content?: React.ReactNode;
  theme?: "red" | "blue" | "ai-blue";
}

const themeColor = {
  red: {
    className: "bg-[#FF34280F]",
    iconBgColor: "bg-[#FF3B30]",
    fontColor: "#FF3B30",
  },
  blue: {
    className: "bg-[#00235a]",
    iconBgColor: "bg-[#EEF5FF33]",
    fontColor: "#ffffff",
  },
  "ai-blue": {
    className: "bg-[var(--color-ai-blue)]",
    iconBgColor: "bg-[#EEF5FF33]",
    fontColor: "#ffffff",
  },
};

export const AIAssessmentContent: React.FC<AIAssessmentProps> = ({
  content,
  title,
  theme = "blue",
  className,
}) => {
  const currentTheme = themeColor[theme];
  return (
    <div
      className={`shadow-shadow-sm rounded-[8px] px-[24px] py-[18px] w-full max-w-[100%] ${currentTheme.className} ${className}`}
    >
      <div className="flex items-center justify-between w-full gap-1 text-white text-[22px] tracking-[-0.40px] leading-[22px]">
        <span
          className={`text-[${currentTheme.fontColor}] font-sans font-semibold`}
        >
          {title || "AI Assessment"}
        </span>
        <div
          className={`w-10 h-10 rounded overflow-hidden flex items-center justify-center ${currentTheme.iconBgColor}`}
        >
          <Image
            className="w-[23px] h-6"
            alt="G"
            src={IMAGES.AI_ICON}
            height={23}
            width={24}
          />
        </div>
      </div>
      {content ? (
        content
      ) : (
        <p
          className={`${currentTheme.fontColor} text-[16px] leading-[22px] font-medium tracking-[0.16px] mt-2`}
        >
          Doing well another subject but biology. Recommend Specking to in
          person about how you might help.
        </p>
      )}
    </div>
  );
};
