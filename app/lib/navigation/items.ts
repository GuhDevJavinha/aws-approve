import { Award, ClipboardList } from "lucide-react";
import type { NavItem } from "@/types/navigation";

export const NAV_ITEMS: NavItem[] = [
  { label: "Certificações", href: "/certificacoes", icon: Award },
  { label: "Simulados", href: "/simulados", icon: ClipboardList },
];

export function isNavItemActive(pathname: string, href: string): boolean {
  return pathname === href || pathname.startsWith(`${href}/`);
}
