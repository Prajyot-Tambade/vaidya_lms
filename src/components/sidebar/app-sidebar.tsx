"use client";
import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
} from "@/components/ui/sidebar";
import Link from "next/link";

import {
  BookOpenText,
  FolderGit2,
  LayoutDashboard,
  MessageCircle,
  PlusCircleIcon,
} from "lucide-react";
import { usePathname } from "next/navigation";
import { NavUser } from "./nav-user";
import { useTheme } from "next-themes";
import { toast } from "sonner";

const Nav = [
  {
    title: "Dashboard",
    url: "#",
    icon: LayoutDashboard,
  },
  {
    title: "Courses",
    url: "#",
    icon: BookOpenText,
  },
  {
    title: "Projects",
    url: "#",
    icon: FolderGit2,
  },
  {
    title: "Chat",
    url: "#",
    icon: MessageCircle,
  },
];

const Logo = () => {
    return (
      <svg
        width="941"
        height="864"
        viewBox="0 0 941 864"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M317.159 863.902L0 0H200.421C258.875 0 310.956 36.9133 330.319 92.0669C408.47 314.681 601.281 863.902 601.281 863.902H317.159Z"
          fill="currentColor"
        />
        <path
          d="M505.473 457.667L636.961 837.861L940.245 0H747.677C687.746 0 634.808 39.0515 617.116 96.3123C575.639 230.562 505.473 457.667 505.473 457.667Z"
          fill="#3268FC"
        />
      </svg>
    );

};

export function AppSidebar({ ...props }: React.ComponentProps<typeof Sidebar>) {
  const path = usePathname();
  const {themes} = useTheme()
  console.log(themes);
  
  return (
    <Sidebar collapsible="icon" {...props}>
      <SidebarHeader>
        <SidebarMenu>
          <SidebarMenuItem>
            <SidebarMenuButton
              asChild
              className="data-[slot=sidebar-menu-button]:p-1.5!"
            >
              <Link href="#">
                <Logo />
                <span className="text-base font-semibold">Vaidya LMS</span>
              </Link>
            </SidebarMenuButton>
          </SidebarMenuItem>
        </SidebarMenu>
      </SidebarHeader>

      <SidebarContent>
        {/* Primary Navigation */}
        <SidebarGroup>
          <SidebarGroupLabel>Workspace</SidebarGroupLabel>
          <SidebarGroupContent>
            <SidebarMenu>
              <SidebarMenuItem className="flex items-center gap-2">
                <SidebarMenuButton
                  tooltip="Quick Create"
                  className="min-w-8 bg-primary text-primary-foreground duration-200 ease-linear hover:bg-primary/90 hover:text-primary-foreground active:bg-primary/90 active:text-primary-foreground"
                >
                  <PlusCircleIcon />
                  <span className="font-semibold">Quick Create</span>
                </SidebarMenuButton>
              </SidebarMenuItem>
            </SidebarMenu>
            <SidebarMenu>
              {Nav.map((navItem) => (
                <SidebarMenuItem key={navItem.title}>
                  <Link href={navItem.url}>
                    <SidebarMenuButton
                      tooltip={navItem.title}
                      isActive={path === navItem.url}
                    >
                      {navItem.icon && <navItem.icon />}
                      <span>{navItem.title}</span>
                    </SidebarMenuButton>
                  </Link>
                </SidebarMenuItem>
              ))}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarContent>

      <SidebarFooter>
        <NavUser />
      </SidebarFooter>
    </Sidebar>
  );
}
