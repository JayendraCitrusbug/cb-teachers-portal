import Link from "next/link";

import { ArrowRight } from "lucide-react";
import { COLORS } from "@/constants";

type AlertCardProps = {
  icon: React.ReactNode;
  title: string;
  description: string;
  color: keyof typeof COLORS;
  hrefLink?: string;
};

function AlertCard({
  icon,
  title,
  description,
  color,
  hrefLink,
}: AlertCardProps) {
  return (
    <div className="bg-white p-4 rounded-xl shadow hover:shadow-md transition-all h-full">
      <div className="flex flex-col items-start justify-between h-full mb-4">
        <div className="flex items-center gap-2 mb-2">
          <div className="w-6 h-6">{icon}</div>
          <h3
            className={`font-semibold text-lg`}
            style={{ color: COLORS[color] }}
          >
            {title}
          </h3>
        </div>
        <p className="text-xs font-semibold text-gray-600 mb-4">
          {description}
        </p>
        <Link
          href={hrefLink || "#"}
          className={`text-xs font-semibold flex items-center self-end gap-1`}
          style={{ color: COLORS[color] }}
        >
          MORE <ArrowRight className="w-3 h-3" />
        </Link>
      </div>
    </div>
  );
}

export default AlertCard;
