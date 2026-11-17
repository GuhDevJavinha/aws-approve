import type { ReactElement } from "react";
import { cn } from "@/lib/utils";
import { Container } from "./container";
import { PROVIDER_STATS, type ProviderStat } from "./landing-content";
import { Reveal } from "./reveal";
import { SectionHeading } from "./section-heading";

function ProviderCard({ provider }: { provider: ProviderStat }): ReactElement {
  const available = provider.count !== null;

  return (
    <article
      className={cn(
        "flex h-full flex-col rounded-[20px] border p-6",
        provider.featured
          ? "border-glow/50 bg-[linear-gradient(165deg,#2e1065_0%,#120d1f_75%)]"
          : "border-border bg-card"
      )}
    >
      <h3 className="inline-flex self-start rounded-md border border-border px-2 py-1 font-mono text-xs tracking-[0.16em] text-muted-foreground uppercase">
        {provider.name}
      </h3>
      <p className="mt-6 flex items-baseline gap-2">
        <span className="font-display text-6xl leading-none font-medium">{available ? provider.count : "—"}</span>
        <span className="text-sm text-muted-foreground">
          {available ? (provider.count === 1 ? "simulado" : "simulados") : "em breve"}
        </span>
      </p>
      {provider.examples.length > 0 ? (
        <ul className="mt-6 space-y-1.5 text-sm leading-5 text-foreground/80">
          {provider.examples.map((example) => (
            <li key={example}>{example}</li>
          ))}
          {"moreCount" in provider ? (
            <li className="pt-1 font-medium text-glow">+ {provider.moreCount} simulados</li>
          ) : null}
        </ul>
      ) : null}
      {"note" in provider ? <p className="mt-6 text-sm leading-6 text-muted-foreground">{provider.note}</p> : null}
    </article>
  );
}

export function SimuladosSection(): ReactElement {
  return (
    <section id="simulados" aria-labelledby="simulados-title" className="scroll-mt-24 py-16 md:py-20">
      <Container>
        <SectionHeading id="simulados-title" label="Catálogo" className="max-w-2xl">
          14 simulados prontos. Mais a caminho.
        </SectionHeading>
        <ul className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-4 md:mt-14">
          {PROVIDER_STATS.map((provider, index) => (
            <li key={provider.id}>
              <Reveal delay={index * 0.08} className="h-full">
                <ProviderCard provider={provider} />
              </Reveal>
            </li>
          ))}
        </ul>
      </Container>
    </section>
  );
}
