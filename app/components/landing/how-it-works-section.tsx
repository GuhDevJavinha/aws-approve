"use client";

import { motion, useScroll } from "motion/react";
import { useEffect, useRef, useState, type ReactElement } from "react";
import { cn } from "@/lib/utils";
import { Container } from "./container";
import { STEPS } from "./landing-content";
import { SectionHeading } from "./section-heading";

function stepForProgress(progress: number): number {
  return Math.min(STEPS.length - 1, Math.max(0, Math.floor(progress * STEPS.length)));
}

export function HowItWorksSection(): ReactElement {
  const trackRef = useRef<HTMLElement>(null);
  const [activeStep, setActiveStep] = useState(0);
  const { scrollYProgress } = useScroll({ target: trackRef, offset: ["start start", "end end"] });

  useEffect(() => scrollYProgress.on("change", (progress) => setActiveStep(stepForProgress(progress))), [scrollYProgress]);

  return (
    <section
      id="como-funciona"
      ref={trackRef}
      aria-labelledby="como-funciona-title"
      className="relative scroll-mt-24 motion-safe:h-[260vh]"
    >
      <div className="flex flex-col justify-center py-16 md:py-20 motion-safe:sticky motion-safe:top-0 motion-safe:min-h-svh">
        <Container className="w-full">
          <SectionHeading id="como-funciona-title" label="3 passos">
            Como funciona
          </SectionHeading>

          <div aria-hidden="true" className="mt-10 h-px bg-border motion-reduce:hidden md:mt-14">
            <motion.div className="h-full origin-left bg-glow" style={{ scaleX: scrollYProgress }} />
          </div>

          <ol className="mt-8 grid gap-8 md:mt-10 md:grid-cols-3 md:gap-0">
            {STEPS.map((step, index) => (
              <li
                key={step.title}
                data-active={index === activeStep}
                className={cn(
                  "group/step md:border-l md:border-border md:pl-8 md:first:border-l-0 md:first:pl-0",
                  "grid grid-cols-[3.75rem_1fr] items-start gap-x-3 md:block"
                )}
              >
                <span
                  aria-hidden="true"
                  className="font-display text-6xl leading-none font-medium text-glow transition-colors duration-500 md:text-7xl motion-safe:group-data-[active=false]/step:text-glow/25"
                >
                  {index + 1}
                </span>
                <div>
                  <h3 className="font-bold text-foreground transition-colors duration-500 md:mt-6 motion-safe:group-data-[active=false]/step:text-foreground/60">
                    {step.title}
                  </h3>
                  <p className="mt-2 max-w-xs text-sm leading-6 text-muted-foreground transition-colors duration-500 motion-safe:group-data-[active=false]/step:text-muted-foreground/80">
                    {step.description}
                  </p>
                </div>
              </li>
            ))}
          </ol>
        </Container>
      </div>
    </section>
  );
}
