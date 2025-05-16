"use client";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { ChevronDown } from "lucide-react"

import {
  Home,
  BookOpen,
  Users,
  Settings,
  User,
  ChevronLeft,
} from "lucide-react";

import { Tooltip, TooltipTrigger, TooltipContent } from "@/components/ui/tooltip";
import {
  Sidebar as SidebarComponent,
  SidebarContent,
  SidebarFooter,
  useSidebar,
} from "@/components/ui/sidebar";

import IMAGES from "@/assets/images";

import "./sidebar.css";


export default function Sidebar() {
  const pathname = usePathname();
  const { setOpen, open } = useSidebar();

  const menuItems = [
    { label: "Home", icon: <Home />, href: "/", is_active: pathname.includes("/") && !pathname.includes("/lessons") && !pathname.includes("/students") && !pathname.includes("/family") && !pathname.includes("/settings") },
    { label: "Lessons", icon: <BookOpen />, href: "/lessons", is_active: pathname.includes("/lessons") },
    { label: "Students", icon: <Users />, href: "/students", is_active: pathname.includes("/students") },
    { label: "Family", icon: <User />, href: "/family", is_active: pathname.includes("/family") },
    { label: "Settings", icon: <Settings />, href: "/settings", is_active: pathname.includes("/settings") },
  ];

  return (
    <SidebarComponent
      collapsible="icon"
      className="w-60 h-screen bg-white border-r border-gray-200 flex flex-col justify-between"
    >
      <div
        className={`collapse-icon ${open ? "expanded" : "collapsed"} hidden`}
        onClick={() => {
          setOpen(!open);
        }}
      >
        <ChevronLeft color="white" />
      </div>
      <SidebarContent>
        {/* Logo */}
        <div className="p-6 flex items-center space-x-2">
          <Image src={IMAGES.LOGO} alt="Logo" width={138} height={37} />
        </div>

        {/* Menu */}
        <nav className="mt-6">
          {menuItems.map((item) => (
            <Link
              key={item.label}
              href={item.href}
              className={`sidebar-item-link flex items-center space-x-3 p-3 mx-3 rounded-lg text-gray-700 hover:bg-gray-100 transition ${item.is_active ? "active" : ""
                }`}
            >
              {item.icon}
              {open && <span className="text-base">{item.label}</span>}
            </Link>
          ))}
        </nav>
      </SidebarContent>

      {/* User Profile */}
      <SidebarFooter className="p-4 border-t border-gray-200 flex items-center flex-row space-x-3">
        <div className="w-10 h-10 rounded-full bg-yellow-400 flex items-center justify-center text-white font-bold">
          M
        </div>
        <div className="flex flex-row items-center">
          <div>
            <p className="text-sm font-semibold font-[family-name:var(--font-poppins)]">Michal</p>
            <Tooltip>
              <TooltipTrigger >
                <p className="text-xs text-gray-500 truncate font-[family-name:var(--font-poppins)]">jhonmichal@gmail...</p>
              </TooltipTrigger>
              <TooltipContent align="center" style={{ width: "max-content", backgroundColor: "#00235A", color: "white" }}>
                <p className="text-xs text-white-500 truncate font-[family-name:var(--font-poppins)]">jhonmichal@gmail.com</p>
              </TooltipContent>
            </Tooltip>
          </div><div><ChevronDown color="#363D4A" /></div>
        </div>
      </SidebarFooter>
    </SidebarComponent>
  );
}
