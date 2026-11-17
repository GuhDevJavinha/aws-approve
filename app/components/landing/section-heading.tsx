import type { ReactElement, ReactNode } from "react";
import { cn } from "@/lib/utils";
import { Reveal } from "./reveal";

type SectionHeadingProps = {
  id: string;
  label?: string;
  children: ReactNode;
  className?: string;
};

export function SectionHeading({ id, label, children, className }: SectionHeadingProps): ReactElement {
  return (
    <Reveal className={className}>
      {label ? (
        <p className="mb-5 inline-flex rounded-md border border-border px-2 py-1 font-mono text-xs tracking-[0.16em] text-muted-foreground uppercase">
          {label}
        </p>
      ) : null}
      <h2
        id={id}
        className={cn(
          "font-display text-[2rem] leading-[1.12] font-medium tracking-[-0.02em] text-balance md:text-5xl",
          "first-letter:text-[1.28em]"
        )}
      >
        {children}
      </h2>
    </Reveal>
  );
}
