"use client";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";

import { ChevronLeft } from "lucide-react";

import {
  Sidebar as SidebarComponent,
  SidebarContent,
  SidebarFooter,
  useSidebar,
} from "@/components/ui/sidebar";

import { useIsMobile } from "@/hooks/use-mobile";

import IMAGES, { SIDEBAR_ICONS } from "@/assets/images";

import "./sidebar.css";
import MobileBottomBar from "./bottombar";

export default function Sidebar() {
  const isMobile = useIsMobile();
  const pathname = usePathname();
  const { setOpen, open } = useSidebar();

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
    {
      label: "Settings",
      icon: {
        active: SIDEBAR_ICONS.SETTINGS_ACTIVE,
        inactive: SIDEBAR_ICONS.SETTINGS,
      },
      href: "/settings",
      is_active: pathname.includes("/settings"),
    },
  ];

  if (isMobile) {
    return <MobileBottomBar />;
  }

  return (
    <SidebarComponent
      collapsible="icon"
      className="w-60 h-full border-none flex flex-col justify-between drop-shadow-2xl rounded-md p-2"
    >
      <SidebarContent className="bg-[var(--color-primary)] rounded-t-xl relative overflow-visible">
        <div
          className={`collapse-icon ${open ? "expanded" : "collapsed"} hidden`}
          onClick={() => {
            setOpen(!open);
          }}
        >
          <ChevronLeft color="white" />
        </div>
        <div className="p-6 flex items-center space-x-2">
          <Image src={IMAGES.LOGO_WHITE} alt="Logo" width={138} height={37} />
        </div>

        <nav className="mt-6 flex flex-col gap-4">
          {menuItems.map((item) => (
            <Link
              key={item.label}
              href={item.href}
              className={`font-[family-name:var(--font-poppins)] sidebar-link flex items-center justify-start px-6 space-x-3 p-1 mx-3 rounded-lg hover:bg-gray-100 transition ${
                item.is_active ? "active" : ""
              }`}
            >
              <Image
                src={item.is_active ? item.icon.active : item.icon.inactive}
                alt="logo"
                height={18}
                width={18}
              />
              {open && (
                <span className="text-lg font-normal self-end">
                  {item.label}
                </span>
              )}
            </Link>
          ))}
        </nav>
      </SidebarContent>
      <SidebarFooter className="p-4 flex items-center justify-center flex-row space-x-3 bg-[var(--color-primary)] rounded-b-xl">
        <div className="flex items-center gap-2 space-x-2 mb-10">
          <Image src={IMAGES.PROFILE_ICON} alt="Logo" />
          <p className="text-white font-poppins font-semibold text-[16.95px] leading-[100%] tracking-normal text-center">
            Michal
          </p>
        </div>
        {/* <div className="w-10 h-10 rounded-full bg-yellow-400 flex items-center justify-center text-white font-bold">
          M
        </div>
        <div className="flex flex-row items-center">
          <div>
            <p className="text-sm font-semibold font-[family-name:var(--font-poppins)]">
              Michal
            </p>
            <Tooltip>
              <TooltipTrigger>
                <p className="text-xs text-gray-500 truncate font-[family-name:var(--font-poppins)]">
                  jhonmichal@gmail...
                </p>
              </TooltipTrigger>
              <TooltipContent
                align="center"
                style={{
                  width: "max-content",
                  backgroundColor: "#00235A",
                  color: "white",
                }}
              >
                <p className="text-xs text-white-500 truncate font-[family-name:var(--font-poppins)]">
                  jhonmichal@gmail.com
                </p>
              </TooltipContent>
            </Tooltip>
          </div>
          <div>
            <ChevronDown color="#363D4A" />
          </div>
        </div> */}
      </SidebarFooter>

      {/* User Profile */}
    </SidebarComponent>
  );
}
