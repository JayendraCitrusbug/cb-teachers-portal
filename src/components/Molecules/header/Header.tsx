"use client";
import React from "react";
import { useRouter } from "next/navigation";

import { MoveLeft } from "lucide-react";

import { Button } from "@/components/ui/button";

interface HeaderProps {
  title: string;
  children: React.ReactNode;
  extraContent: React.ReactNode;
  backButton: {
    text: string;
    clickHandler: "to_dashboard";
  };
}

const Header: React.FC<HeaderProps> = ({
  title,
  children,
  extraContent,
  backButton,
}) => {
  const router = useRouter();

  const onBackClick = () => {
    if (backButton.clickHandler === "to_dashboard") {
      router.push("/");
    }
  };

  return (
    <section className="flex flex-col gap-y-6 mt-2">
      <div className="flex items-center justify-between w-full flex-wrap gap-2">
        <h2 className="font-semibold text-zinc-950 text-xl tracking-[-0.40px] leading-5">
          {title}
        </h2>
      </div>
      <div className="flex items-center gap-2 justify-between w-full flex-wrap">
        {extraContent}
        <Button
          variant="outline"
          className="h-10 mt-auto cursor-pointer border border-[#00235A] bg-[#00235A] text-white"
          onClick={onBackClick}
        >
          <MoveLeft />
          {backButton.text}
        </Button>
      </div>
      {children}
    </section>
  );
};

export default Header;
