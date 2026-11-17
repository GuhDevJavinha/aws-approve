import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import type { ReactElement } from "react";
import { CircleCta } from "./circle-cta";
import { Container } from "./container";
import { DepthLayer } from "./depth-layer";
import { Reveal } from "./reveal";

export function FinalCtaSection(): ReactElement {
  return (
    <section
      aria-labelledby="cta-final-title"
      className="relative isolate flex min-h-[34rem] items-center overflow-hidden py-24 md:min-h-[40rem] md:py-32"
    >
      <DepthLayer travel={12} className="z-0 md:left-[28%]">
        <div className="absolute -inset-y-[12%] inset-x-0 [mask-image:linear-gradient(to_right,transparent,#000_35%)]">
          <Image
            src="/landing/hero-art.png"
            alt=""
            fill
            sizes="(min-width: 768px) 72vw, 100vw"
            className="object-cover object-[50%_20%] opacity-60 md:opacity-100"
          />
        </div>
      </DepthLayer>
      <div aria-hidden="true" className="pointer-events-none absolute inset-x-0 top-0 z-[1] h-32 bg-linear-to-b from-background to-transparent" />
      <div aria-hidden="true" className="pointer-events-none absolute inset-x-0 bottom-0 z-[1] h-32 bg-linear-to-t from-background to-transparent" />
      <Container className="relative z-10">
        <Reveal>
          <h2
            id="cta-final-title"
            className="max-w-3xl font-display text-[2rem] leading-[1.12] font-medium tracking-[-0.02em] text-balance first-letter:text-[1.28em] md:text-6xl"
          >
            Sua próxima certificação começa no próximo simulado.
          </h2>
        </Reveal>
        <div className="mt-10 flex flex-wrap items-center gap-x-8 gap-y-6 md:mt-14">
          <CircleCta className="ml-6 md:ml-10" />
          <Link
            href="/login"
            className="inline-flex items-center gap-1.5 rounded-md text-sm font-medium text-foreground/80 outline-none transition-colors hover:text-foreground focus-visible:ring-2 focus-visible:ring-glow"
          >
            Já tenho conta
            <ArrowRight className="size-3.5" aria-hidden="true" />
          </Link>
        </div>
      </Container>
    </section>
  );
}
