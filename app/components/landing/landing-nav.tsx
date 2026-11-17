"use client";

import Link from "next/link";
import { useState, type ReactElement } from "react";
import { AnimatePresence, motion } from "motion/react";
import { Menu, X } from "lucide-react";
import { cn } from "@/lib/utils";
import { NAV_LINKS, NAV_SECTION_IDS } from "./landing-content";
import { PillLink } from "./pill-link";
import { usePrefersReducedMotion } from "./use-media-query";
import { useActiveSection } from "./use-active-section";

const DESKTOP_LINK_CLASSES =
  "inline-flex h-9 items-center rounded-full px-4 text-sm font-medium text-foreground/80 transition-colors outline-none hover:text-foreground focus-visible:ring-2 focus-visible:ring-glow";

const MOBILE_LINK_CLASSES =
  "flex h-12 items-center rounded-xl px-3 text-base font-medium text-[#1a1226] outline-none hover:bg-[#efeaf8] focus-visible:ring-2 focus-visible:ring-[#7c3aed]";

export function LandingNav(): ReactElement {
  const [menuOpen, setMenuOpen] = useState(false);
  const activeId = useActiveSection(NAV_SECTION_IDS, "inicio");
  const reducedMotion = usePrefersReducedMotion();

  return (
    <header className="fixed inset-x-0 top-0 z-50 px-4 pt-4 md:px-12 md:pt-5">
      <nav
        aria-label="Principal"
        className="mx-auto max-w-[1440px]"
        onKeyDown={(event) => {
          if (event.key === "Escape") setMenuOpen(false);
        }}
      >
        <div className="flex items-start justify-between gap-4">
          <ul className="hidden items-center gap-1 rounded-full border border-white/15 bg-card/60 p-1.5 backdrop-blur-xl md:flex">
            {NAV_LINKS.map((link) => {
              const active = link.href === `#${activeId}`;
              return (
                <li key={link.href}>
                  <a
                    href={link.href}
                    aria-current={active ? "location" : undefined}
                    className={cn(DESKTOP_LINK_CLASSES, active && "bg-foreground text-background hover:text-background")}
                  >
                    {link.label}
                  </a>
                </li>
              );
            })}
          </ul>

          <div className="hidden items-center gap-1 rounded-full border border-white/15 bg-card/60 p-1.5 backdrop-blur-xl md:flex">
            <Link href="/login" className={DESKTOP_LINK_CLASSES}>
              Entrar
            </Link>
            <PillLink href="/cadastro" variant="light" size="sm">
              Criar conta
            </PillLink>
          </div>

          <div className="flex w-full items-center justify-between rounded-full bg-white/95 py-2 pr-2 pl-5 shadow-lg backdrop-blur-xl md:hidden">
            <a
              href="#inicio"
              className="rounded-md font-display text-xs font-semibold tracking-[0.04em] text-[#2e1065] uppercase outline-none focus-visible:ring-2 focus-visible:ring-[#7c3aed]"
            >
              AWS Approve
            </a>
            <div className="flex items-center gap-2">
              <PillLink href="/cadastro" size="sm">
                Criar conta
              </PillLink>
              <button
                type="button"
                aria-expanded={menuOpen}
                aria-controls="menu-mobile"
                aria-label={menuOpen ? "Fechar menu" : "Abrir menu"}
                onClick={() => setMenuOpen((open) => !open)}
                className="grid size-9 place-items-center rounded-full border border-[#2e1065]/15 text-[#2e1065] outline-none focus-visible:ring-2 focus-visible:ring-[#7c3aed]"
              >
                {menuOpen ? <X className="size-4" aria-hidden="true" /> : <Menu className="size-4" aria-hidden="true" />}
              </button>
            </div>
          </div>
        </div>

        <AnimatePresence>
          {menuOpen ? (
            <motion.div
              id="menu-mobile"
              initial={reducedMotion ? false : { opacity: 0, y: -8 }}
              animate={{ opacity: 1, y: 0 }}
              exit={reducedMotion ? { opacity: 0 } : { opacity: 0, y: -8 }}
              transition={{ duration: 0.18, ease: "easeOut" }}
              className="mt-2 rounded-3xl bg-white p-3 shadow-xl md:hidden"
            >
              <ul>
                {NAV_LINKS.map((link) => (
                  <li key={link.href}>
                    <a href={link.href} onClick={() => setMenuOpen(false)} className={MOBILE_LINK_CLASSES}>
                      {link.label}
                    </a>
                  </li>
                ))}
                <li>
                  <Link href="/login" className={MOBILE_LINK_CLASSES}>
                    Entrar
                  </Link>
                </li>
              </ul>
            </motion.div>
          ) : null}
        </AnimatePresence>
      </nav>
    </header>
  );
}
