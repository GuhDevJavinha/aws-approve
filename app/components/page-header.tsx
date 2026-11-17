import type { ReactNode } from "react";
import { MONO_LABEL_CLASS } from "@/lib/styles";
import { cn } from "@/lib/utils";

export function PageHeader({
  eyebrow,
  title,
  children,
}: {
  eyebrow?: string;
  title: string;
  children?: ReactNode;
}) {
  return (
    <header className="flex flex-col items-start gap-3">
      {eyebrow ? (
        <p className={cn(MONO_LABEL_CLASS, "rounded-full border border-border px-3 py-1")}>{eyebrow}</p>
      ) : null}
      <h1 className="font-display text-3xl tracking-[-0.02em] text-foreground sm:text-4xl">{title}</h1>
      {children ? <p className="max-w-2xl text-sm text-muted-foreground">{children}</p> : null}
    </header>
  );
}
