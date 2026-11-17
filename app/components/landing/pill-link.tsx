import Link from "next/link";
import type { ReactElement, ReactNode } from "react";
import { buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";

type PillVariant = "primary" | "light" | "outline";
type PillSize = "md" | "sm";

type PillLinkProps = {
  href: string;
  children: ReactNode;
  variant?: PillVariant;
  size?: PillSize;
  className?: string;
};

const VARIANT_CLASSES: Record<PillVariant, string> = {
  primary: "bg-glow text-background hover:bg-glow/85",
  light: "bg-foreground text-background hover:bg-foreground/85",
  outline: "border-white/20 bg-transparent text-foreground hover:bg-white/10 dark:bg-transparent dark:hover:bg-white/10",
};

const SIZE_CLASSES: Record<PillSize, string> = {
  md: "h-11 px-6 text-sm font-semibold",
  sm: "h-9 px-4 text-sm font-semibold",
};

export function PillLink({ href, children, variant = "primary", size = "md", className }: PillLinkProps): ReactElement {
  return (
    <Link
      href={href}
      className={cn(buttonVariants({ variant: "default" }), "rounded-full", SIZE_CLASSES[size], VARIANT_CLASSES[variant], className)}
    >
      {children}
    </Link>
  );
}
