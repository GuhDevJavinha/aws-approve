"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import {
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarGroupContent,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
} from "@/components/ui/sidebar";
import { isNavItemActive, NAV_ITEMS } from "@/lib/navigation/items";

export function AppSidebar() {
  const pathname = usePathname();

  return (
    <Sidebar>
      <SidebarHeader className="gap-1 px-5 pt-6 pb-5">
        <Link href="/certificacoes" className="flex flex-col">
          <span className="font-display text-sm uppercase tracking-[-0.02em] text-sidebar-foreground">
            AWS Approve
          </span>
        </Link>
        <a
          href="https://www.guhdev.me/"
          target="_blank"
          rel="noopener noreferrer"
          className="font-mono text-[10px] text-sidebar-foreground/55 transition-colors hover:text-sidebar-foreground"
        >
          by Gustavo Ribeiro
        </a>
      </SidebarHeader>
      <SidebarContent>
        <SidebarGroup className="px-3">
          <SidebarGroupContent>
            <SidebarMenu className="gap-1">
              {NAV_ITEMS.map((item) => (
                <SidebarMenuItem key={item.href}>
                  <SidebarMenuButton
                    isActive={isNavItemActive(pathname, item.href)}
                    render={<Link href={item.href} />}
                    className="h-10 gap-3 rounded-xl px-3 text-sidebar-foreground/70 data-active:ring-1 data-active:ring-primary/40"
                  >
                    <item.icon className="size-4" />
                    <span>{item.label}</span>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              ))}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarContent>
    </Sidebar>
  );
}
