import type { ReactNode } from "react";

export function ExamTopbar({
  examCode,
  title,
  progress,
  children,
}: {
  examCode: string;
  title: string;
  progress?: number;
  children?: ReactNode;
}) {
  return (
    <header className="sticky top-0 z-20 w-full border-b border-border bg-background/85 backdrop-blur">
      <div className="flex h-14 items-center gap-3 px-4 sm:px-6">
        <span className="font-display text-xs uppercase tracking-[-0.02em] text-foreground">AWS Approve</span>
        <span aria-hidden className="h-4 w-px shrink-0 bg-border max-sm:hidden" />
        <p className="min-w-0 truncate font-mono text-xs text-muted-foreground max-sm:hidden">
          {examCode} · {title}
        </p>
        <div className="ml-auto flex shrink-0 items-center gap-2">{children}</div>
      </div>
      {progress === undefined ? null : (
        <div aria-hidden className="h-0.5 bg-border">
          <div className="h-full rounded-r-full bg-primary transition-[width] duration-300" style={{ width: `${progress}%` }} />
        </div>
      )}
    </header>
  );
}
