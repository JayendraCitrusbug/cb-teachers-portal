import Image from "next/image";

import { Card, CardContent, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

import IMAGES from "@/assets/images";

interface PerformanceCardProps {
  title: string;
  tag: string | number;
  period: string;
  color: string;
  bgColor: string;
  icon: keyof typeof IMAGES;
  description: string;
  buttonText: string;
}

export default function PerformanceCard({
  title,
  tag,
  period,
  bgColor,
  color,
  icon,
  description,
  buttonText,
}: PerformanceCardProps): React.ReactElement {
  return (
    <Card className="w-full shadow-shadow-sm h-full border-[#ccc]">
      <CardContent className="p-6">
        <div className="flex items-center justify-between mb-6">
          <CardTitle className="text-zinc-950 text-[22px] tracking-[-0.40px] leading-[22px]">
            {title}
          </CardTitle>
          <div
            className="bg-[#ff3b301a] w-10 h-10 rounded overflow-hidden flex items-center justify-center"
            style={{ backgroundColor: bgColor }}
          >
            <Image
              src={IMAGES[icon]}
              alt="G"
              height={23}
              width={24}
            />
          </div>
        </div>
        <div className="flex items-end justify-between">
          <div className="flex flex-col items-start gap-3">
            <div className="flex items-center gap-6">
              <div className="w-full h-[31px]">
                <div className="font-normal text-zinc-900 text-[27.7px] leading-[30.7px]">
                  <span className="font-bold">{tag}</span>
                  <span className="text-sm ml-1">{description}</span>
                </div>
              </div>  
            </div>
            <div className="font-medium text-zinc-500 text-md leading-5">
              Period {period}
            </div>
          </div>
          <Button
            className="bg-[#ff3b30] hover:bg-[#ff3b30]/90 cursor-pointer text-white w-[80px] h-[30px] rounded-[4px]"
            style={{ backgroundColor: color }}
          >
            {buttonText}
          </Button>
        </div>
      </CardContent>
    </Card>
  );
}

