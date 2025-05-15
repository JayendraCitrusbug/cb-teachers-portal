"use client";
import Link from "next/link";
import Image from "next/image";

import {
  Home,
  BookOpen,
  Users,
  Settings,
  User,
  ChevronLeft,
} from "lucide-react";

import {
  Sidebar as SidebarComponent,
  SidebarContent,
  SidebarFooter,
  useSidebar,
} from "@/components/ui/sidebar";

import IMAGES from "@/assets/images";
import { usePathname } from "next/navigation";



export default function Sidebar() {
  const pathname = usePathname();
  const { setOpen, open } = useSidebar();

  const menuItems = [
    { label: "Home", icon: <Home />, href: "/dashboard", is_active: pathname.includes("/dashboard") && !pathname.includes("/dashboard/lessons") && !pathname.includes("/dashboard/students") && !pathname.includes("/dashboard/family") && !pathname.includes("/dashboard/settings") },
    { label: "Lessons", icon: <BookOpen />, href: "/dashboard/lessons", is_active: pathname.includes("/dashboard/lessons") },
    { label: "Students", icon: <Users />, href: "/dashboard/students", is_active: pathname.includes("/dashboard/students") },
    { label: "Family", icon: <User />, href: "/dashboard/family", is_active: pathname.includes("/dashboard/family") },
    { label: "Settings", icon: <Settings />, href: "/dashboard/settings", is_active: pathname.includes("/dashboard/settings") },
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
              className={`flex items-center space-x-3 p-3 mx-3 rounded-lg text-gray-700 hover:bg-gray-100 transition ${
              item.is_active ? "bg-gray-100 font-semibold text-primary" : ""
              }`}
            >
              {item.icon}
              {open && <span className="text-base">{item.label}</span>}
            </Link>
          ))}
        </nav>
      </SidebarContent>

      {/* User Profile */}
      <SidebarFooter className="p-4 border-t border-gray-200 flex items-center space-x-3">
        <div className="w-10 h-10 rounded-full bg-yellow-400 flex items-center justify-center text-white font-bold">
          M
        </div>
        <div className="flex-1">
          <p className="text-sm font-semibold">Michal</p>
          <p className="text-xs text-gray-500 truncate">jhonmichal@gmail...</p>
        </div>
      </SidebarFooter>
    </SidebarComponent>
  );
}
