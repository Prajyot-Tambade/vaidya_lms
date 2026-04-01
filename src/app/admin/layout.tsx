import { DashboardHeader } from "@/components/sidebar/dashboard-header";
import { SidebarInset, SidebarProvider } from "@/components/ui/sidebar";
import React from "react";
import { AdminSidebar } from "./_components/admin-sidebar";

const AdminLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <section>
      <SidebarProvider>
        <AdminSidebar variant="inset" />
        <SidebarInset className="border-2 border-border ml-0!">
          <DashboardHeader />
          <div className="p-4">{children}</div>
        </SidebarInset>
      </SidebarProvider>
    </section>
  );
};

export default AdminLayout;
