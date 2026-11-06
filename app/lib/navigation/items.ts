import { Award, ClipboardList, UserRound } from "lucide-react";
import type { NavItem } from "@/types/navigation";

export const NAV_ITEMS: NavItem[] = [
  { label: "Certificações", href: "/certificacoes", icon: Award },
  { label: "Simulados", href: "/simulados", icon: ClipboardList },
  { label: "Minha conta", href: "/conta", icon: UserRound },
];

export function isNavItemActive(pathname: string, href: string): boolean {
  return pathname === href || pathname.startsWith(`${href}/`);
}
