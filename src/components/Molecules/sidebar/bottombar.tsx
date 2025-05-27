"use client";
import Image from "next/image";
import { useRouter, usePathname } from "next/navigation";

import IMAGES, { SIDEBAR_ICONS } from "@/assets/images";
import { Home, FileText, Users, MessageCircle } from "lucide-react";
import { useState } from "react";
import Link from "next/link";

// Accept menuItems as a prop, so you can use the same array for desktop/mobile.
export default function MobileBottomBar() {
  const pathname = usePathname();

  const menuItems = [
    {
      label: "Home",
      icon: {
        active: SIDEBAR_ICONS.SIDEBAR_HOME_ACTIVE,
        inactive: SIDEBAR_ICONS.SIDEBAR_HOME,
      },
      href: "/",
      is_active:
        pathname.includes("/") &&
        !pathname.includes("/lessons") &&
        !pathname.includes("/students") &&
        !pathname.includes("/family") &&
        !pathname.includes("/settings"),
    },
    {
      label: "Lessons",
      icon: {
        active: SIDEBAR_ICONS.LESSONS_ACTIVE,
        inactive: SIDEBAR_ICONS.LESSONS,
      },
      href: "/lessons",
      is_active: pathname.includes("/lessons"),
    },
    {
      label: "Students",
      icon: {
        active: SIDEBAR_ICONS.STUDENTS_ACTIVE,
        inactive: SIDEBAR_ICONS.STUDENTS,
      },
      href: "/students",
      is_active: pathname.includes("/students"),
    },
    {
      label: "Family",
      icon: {
        active: SIDEBAR_ICONS.FAMILY_ACTIVE,
        inactive: SIDEBAR_ICONS.FAMILY,
      },
      href: "/family/chat/",
      is_active: pathname.includes("/family"),
    },
  ];

  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <div className="fixed bottom-0 left-0 right-0 z-50 bg-[#f7f8f9]">
      <div className="navigation">
        <ul className="listWrap relative flex justify-between">
          {menuItems.map((item, index) => (
            <li
              key={index}
              className={`list ${item.is_active ? "active" : ""}`}
              onClick={() => setActiveIndex(index)}
            >
              <Link href={item.href}>
                <div className="flex flex-col items-center pt-[29px] gap-[6px]">
                  <Image
                    src={item.is_active ? item.icon.active : item.icon.inactive}
                    alt="logo"
                    height={18}
                    width={18}
                    className={`icon1 ${item.is_active ? "brightness-0 invert" : "opacity-50"}`}
                  />
                  <span className={`text ${item.is_active ? "brightness-0 invert" : "opacity-50"}`}>{item.label}</span>
                </div>
              </Link>
            </li>
          ))}
          <li className="indicator absolute transition-all duration-300 flex items-center justify-center">
            <div className="dot"></div>
          </li>
        </ul>
      </div>
    </div>
  );
}
