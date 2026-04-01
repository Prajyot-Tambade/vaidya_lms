import { AppSidebar } from "@/components/sidebar/app-sidebar";
import { DashboardHeader } from "@/components/sidebar/dashboard-header";
import { SidebarInset, SidebarProvider } from "@/components/ui/sidebar";
import React from "react";

const TeacherLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <section>
      <SidebarProvider>
        <AppSidebar variant="inset" />
        <SidebarInset className="border-2 border-border ml-0!">
          <DashboardHeader />
          <div className="p-4">{children}</div>
        </SidebarInset>
      </SidebarProvider>
    </section>
  );
};

export default TeacherLayout;
