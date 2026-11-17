import type { ReactElement, ReactNode } from "react";
import { cn } from "@/lib/utils";

type ContainerProps = { children: ReactNode; className?: string };

export function Container({ children, className }: ContainerProps): ReactElement {
  return <div className={cn("mx-auto w-full max-w-[1440px] px-5 md:px-16", className)}>{children}</div>;
}
