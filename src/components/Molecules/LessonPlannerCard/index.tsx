import React from "react";

interface LessonPlannerProps {
  icon: React.ReactNode;
  title: string;
  datetime?: string;
  content?: React.ReactNode;
  action?: React.ReactNode;
  subTitle?: string;
}

const LessonPlanner: React.FC<LessonPlannerProps> = ({
  icon,
  title,
  subTitle,
  content,
  action,
}) => (
  <div className="border border-green-500 bg-green-50 rounded-lg p-4 flex flex-col gap-5">
    <div className="flex justify-between items-center flex-wrap">
      <p className="text-sm flex items-center gap-2 text-[#34C759] font-inter font-semibold text-[18px] leading-100% tracking-0% capitalize mb-2">
        {icon}
        <span className="text-[var(--color-success)] font-semibold text-xl">
          {title}
        </span>
      </p>
      <p className="text-[#71717A] text-sm">{subTitle}</p>
    </div>
    <div className="content">{content}</div>
    <div className="flex items-center justify-end">{action}</div>
  </div>
);

export default LessonPlanner;
