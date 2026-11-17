import Link from "next/link";
import type { ReactElement } from "react";
import { Container } from "./container";
import { DISCLAIMER, FOOTER_LINKS } from "./landing-content";

const FOOTER_LINK_CLASSES =
  "rounded-md text-sm text-muted-foreground outline-none transition-colors hover:text-foreground focus-visible:ring-2 focus-visible:ring-glow";

export function LandingFooter(): ReactElement {
  return (
    <footer className="border-t border-border py-10">
      <Container className="grid gap-8 md:grid-cols-[1fr_auto_1fr] md:items-center">
        <div>
          <p className="font-display text-sm font-semibold tracking-[0.02em] uppercase">AWS Approve</p>
          <p className="mt-1 text-xs text-muted-foreground">
            by{" "}
            <a
              href="https://www.guhdev.me/"
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-sm underline-offset-4 outline-none hover:text-foreground hover:underline focus-visible:ring-2 focus-visible:ring-glow"
            >
              Gustavo Ribeiro
            </a>
            {" · guhdev.me"}
          </p>
        </div>
        <nav aria-label="Rodapé">
          <ul className="flex flex-wrap gap-x-6 gap-y-2">
            {FOOTER_LINKS.map((link) => (
              <li key={link.href}>
                <Link href={link.href} className={FOOTER_LINK_CLASSES}>
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
        <p className="text-xs text-muted-foreground md:text-right">{DISCLAIMER}</p>
      </Container>
    </footer>
  );
}
