import type { ReactElement } from "react";
import { Container } from "./container";
import { FEATURES } from "./landing-content";
import { Reveal } from "./reveal";
import { SectionHeading } from "./section-heading";

function formatIndex(index: number): string {
  return String(index + 1).padStart(2, "0");
}

export function FeaturesSection(): ReactElement {
  return (
    <section id="recursos" aria-labelledby="recursos-title" className="scroll-mt-24 py-16 md:py-20">
      <Container>
        <SectionHeading id="recursos-title" label="Recursos" className="max-w-xl">
          Tudo o que a prova cobra, em um só lugar.
        </SectionHeading>
        <ul className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3 md:mt-14">
          {FEATURES.map((feature, index) => (
            <li key={feature.title}>
              <Reveal delay={(index % 3) * 0.08} className="h-full">
                <article className="h-full rounded-[20px] border border-border bg-card p-6 transition-colors hover:border-glow/40 md:p-7">
                  <p aria-hidden="true" className="font-mono text-xs tracking-[0.16em] text-glow">
                    {formatIndex(index)}
                  </p>
                  <h3 className="mt-4 text-base font-bold text-foreground">{feature.title}</h3>
                  <p className="mt-2 text-sm leading-6 text-muted-foreground">{feature.description}</p>
                </article>
              </Reveal>
            </li>
          ))}
        </ul>
      </Container>
    </section>
  );
}
