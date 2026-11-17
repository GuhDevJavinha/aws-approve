import { Minus, Plus } from "lucide-react";
import type { ReactElement } from "react";
import { Container } from "./container";
import { FAQ_ITEMS } from "./landing-content";
import { Reveal } from "./reveal";
import { SectionHeading } from "./section-heading";

export function FaqSection(): ReactElement {
  return (
    <section id="faq" aria-labelledby="faq-title" className="scroll-mt-24 py-16 md:py-20">
      <Container className="grid gap-10 md:grid-cols-[1fr_1.5fr] md:gap-16">
        <SectionHeading id="faq-title">Perguntas frequentes</SectionHeading>
        <Reveal>
          <div className="divide-y divide-border border-y border-border">
            {FAQ_ITEMS.map((item) => (
              <details
                key={item.question}
                name="faq"
                open={"defaultOpen" in item ? item.defaultOpen : undefined}
                className="group py-5"
              >
                <summary className="flex cursor-pointer list-none items-center justify-between gap-6 rounded-md py-1 text-left font-medium outline-none transition-colors group-open:text-glow focus-visible:ring-2 focus-visible:ring-glow [&::-webkit-details-marker]:hidden">
                  {item.question}
                  <Plus className="size-4 shrink-0 group-open:hidden" aria-hidden="true" />
                  <Minus className="hidden size-4 shrink-0 group-open:block" aria-hidden="true" />
                </summary>
                <p className="mt-3 max-w-prose text-sm leading-6 text-muted-foreground">{item.answer}</p>
              </details>
            ))}
          </div>
        </Reveal>
      </Container>
    </section>
  );
}
