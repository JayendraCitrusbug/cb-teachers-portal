import { useState } from "react";
import { ArrowRight, Megaphone } from "lucide-react";
import { Card } from "@/components/ui/card";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import Image from "next/image";
import IMAGES from "@/assets/images";
import { Button } from "@/components/ui/button";

export default function ComposeMessage() {
  const [message, setMessage] = useState(
    "Alex Johnson has shown impressive growth in math this week. Keep up the great support at home!"
  );

  return (
    <>
      <div className="w-full flex flex-col gap-4">
        <div className="space-y-2">
          <label
            htmlFor="to"
            className="block text-[14px] font-medium text-[#18181B]"
          >
            To
          </label>
          <Select>
            <SelectTrigger className="w-full border border-[#E4E4E7]">
              <SelectValue placeholder="Select" />
            </SelectTrigger>
            <SelectContent className="bg-white border border-[#E4E4E7]">
              <SelectItem value="parent">Parent</SelectItem>
              <SelectItem value="student">Student</SelectItem>
            </SelectContent>
          </Select>
        </div>
        <label
          htmlFor="message"
          className="block text-[14px] font-medium text-[#18181B]"
        >
          Message
        </label>
        <div className="space-y-2 border border-[#E4E4E7] rounded-md p-3.5 w-full">
          <Card className="rounded-md bg-[#EEEEEE] p-3 flex items-center gap-3 border-none">
            <Image
              src={IMAGES.ANNOUNCEMENT}
              alt="compose"
              width={20}
              height={20}
            />
            <p className="text-[16px] text-[#18181B] font-regular">
              Triggered from concept Mastery Alert - Period 2 Maths
            </p>
          </Card>
          <textarea
            defaultValue={message}
            className="compose-message w-full resize-none p-2 h-[335px]"
          />
        </div>
      </div>
      <div className="flex gap-3 pt-4 self-end action-buttons">
        <Button className="bg-[#00235A] text-white hover:bg-[#00235A] cursor-pointer w-full">
          Accept & Send <ArrowRight className="w-4 h-4 ml-2" />
        </Button>
        <Button variant="ghost" className="text-decoration-none cursor-pointer">
          Regenerate
        </Button>
        <Button variant="ghost" className="text-decoration-none cursor-pointer">
          Write Own
        </Button>
      </div>
    </>
  );
}
