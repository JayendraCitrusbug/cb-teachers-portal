import React from "react";
import Sidebar from "@/components/Molecules/sidebar";

import { SidebarProvider } from "@/components/ui/sidebar";

import "./dashboard.css";

const layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <SidebarProvider>
      <div className="flex">
        <Sidebar />
        <div className="content w-[calc((100dvw-300px))]">{children}</div>
      </div>
    </SidebarProvider>
  );
};

export default layout;
