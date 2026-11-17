import type { ReactElement, ReactNode } from "react";

export function LandingShell({ children }: { children: ReactNode }): ReactElement {
  return (
    <div className="dark relative isolate w-full overflow-x-clip bg-background font-sans text-foreground selection:bg-glow/30">
      <a
        href="#conteudo"
        className="sr-only z-[60] rounded-full bg-foreground px-4 py-2 text-sm font-semibold text-background focus:not-sr-only focus:fixed focus:top-4 focus:left-4"
      >
        Pular para o conteúdo
      </a>
      <div aria-hidden="true" className="pointer-events-none absolute inset-0 z-20">
        <span className="absolute inset-y-0 left-[6%] border-l border-dashed border-white/10 md:left-1/4" />
        <span className="absolute inset-y-0 left-[94%] border-l border-dashed border-white/10 md:left-3/4" />
      </div>
      {children}
    </div>
  );
}
