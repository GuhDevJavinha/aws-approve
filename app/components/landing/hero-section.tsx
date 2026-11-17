import Image from "next/image";
import Link from "next/link";
import { ArrowDown, ArrowRight } from "lucide-react";
import type { ReactElement } from "react";
import { CircleCta } from "./circle-cta";
import { Container } from "./container";
import { DepthLayer } from "./depth-layer";
import { PointerLayer } from "./pointer-layer";
import { WhyTrain } from "./why-train";

const ART_ALT =
  "Figura encapuzada de mãos abertas segurando um núcleo de luz violeta, cercada por nuvens e fragmentos flutuando.";

function HeroArt(): ReactElement {
  return (
    <div className="absolute inset-x-0 top-0 z-0 h-[48rem] overflow-hidden md:inset-0 md:h-auto">
      <DepthLayer travel={10}>
        <PointerLayer strength={-14} className="absolute -inset-x-[3%] -inset-y-[12%]">
          <Image
            src="/landing/hero-art.png"
            alt={ART_ALT}
            fill
            preload
            sizes="100vw"
            className="object-cover object-[50%_30%] md:origin-[50%_58%] md:scale-[1.12]"
          />
        </PointerLayer>
      </DepthLayer>
      <div aria-hidden="true" className="pointer-events-none absolute inset-0 bg-background/20" />
      <div aria-hidden="true" className="pointer-events-none absolute inset-x-0 top-0 h-48 bg-linear-to-b from-background/80 to-transparent" />
      <div aria-hidden="true" className="pointer-events-none absolute inset-x-0 bottom-0 h-[48%] bg-linear-to-t from-background via-background/85 to-transparent" />
    </div>
  );
}

export function HeroSection(): ReactElement {
  return (
    <section
      id="inicio"
      aria-labelledby="hero-title"
      className="relative isolate flex min-h-[min(max(100svh,52rem),64rem)] flex-col overflow-hidden"
    >
      <HeroArt />
      <Container className="relative z-10 flex flex-1 flex-col pt-24 md:pt-28">
        <div className="grid xl:grid-cols-[12rem_minmax(0,1fr)_12rem] xl:items-start xl:gap-6">
          <h1
            id="hero-title"
            className="text-center font-display tracking-[-0.02em] uppercase [text-shadow:0_2px_24px_rgb(7_5_13/0.55)] xl:col-start-2 xl:row-start-1"
          >
            <span className="block text-[clamp(2.5rem,13.2vw,4.25rem)] leading-[0.98] font-semibold md:text-[clamp(4rem,7vw,7.5rem)] xl:text-[clamp(4rem,5.5vw,5.6rem)]">
              AWS<br className="md:hidden" /> Approve
            </span>
            <span className="sr-only">: </span>
            <span className="mt-4 block font-sans text-lg font-medium tracking-normal text-balance normal-case md:mt-5 md:text-2xl">
              Entre na prova sabendo como ela é.
            </span>
          </h1>
          <p className="hidden text-sm leading-6 text-foreground/90 first-letter:text-[1.9em] first-letter:leading-none xl:col-start-1 xl:row-start-1 xl:mt-10 xl:block">
            Onde o estudo vira prática e a prova vira rotina.
          </p>
          <p className="hidden justify-self-end text-right font-mono text-xs leading-5 tracking-[0.16em] text-muted-foreground uppercase text-balance xl:col-start-3 xl:row-start-1 xl:mt-10 xl:block">
            <span className="block">Simulados de certificação</span>
            <span className="block">AWS · Google Cloud · GitHub</span>
          </p>
        </div>

        <p className="mx-auto mt-4 max-w-sm text-center text-sm leading-6 text-foreground/80 text-balance [text-shadow:0_1px_16px_rgb(7_5_13/0.8)] md:mt-5 md:max-w-md">
          Simulados no formato oficial, com cronômetro, nota de corte e gabarito na hora. Treine até a aprovação deixar de ser surpresa.
        </p>

        <div className="relative flex flex-1 flex-col items-center justify-center gap-5 py-8 md:py-10">
          <CircleCta parallax={22} />
          <Link
            href="/login"
            className="inline-flex items-center gap-1.5 rounded-md text-sm font-medium text-foreground/80 outline-none transition-colors hover:text-foreground focus-visible:ring-2 focus-visible:ring-glow"
          >
            Já tenho conta
            <ArrowRight className="size-3.5" aria-hidden="true" />
          </Link>
          <a
            href="#proposta"
            className="absolute right-0 bottom-6 hidden flex-col items-center gap-1 rounded-md font-mono text-xs text-foreground/80 outline-none hover:text-foreground focus-visible:ring-2 focus-visible:ring-glow md:flex"
          >
            <ArrowDown className="size-3.5" aria-hidden="true" />
            Role para explorar
          </a>
        </div>

        <WhyTrain />
      </Container>
    </section>
  );
}
