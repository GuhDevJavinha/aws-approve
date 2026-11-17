"use client";

import { animate, motion, useMotionValue, useTransform, type AnimationPlaybackControls } from "motion/react";
import { Sparkle } from "lucide-react";
import { useEffect, useRef, type ReactElement } from "react";
import { cn } from "@/lib/utils";
import { MARQUEE_PROVIDERS } from "./landing-content";
import { usePrefersReducedMotion } from "./use-media-query";

const COPIES = 4;
const LOOP_SECONDS = 48;

function ProviderList({ hidden }: { hidden?: boolean }): ReactElement {
  return (
    <ul aria-hidden={hidden} className="flex shrink-0 items-center gap-8 pr-8 md:gap-12 md:pr-12">
      {MARQUEE_PROVIDERS.map((provider, index) => (
        <li key={provider} className="flex items-center gap-8 md:gap-12">
          <span
            className={cn(
              "font-display text-xl font-semibold tracking-[-0.02em] whitespace-nowrap md:text-3xl",
              index % 2 === 0 ? "text-foreground" : "text-muted-foreground"
            )}
          >
            {provider}
          </span>
          <Sparkle className="size-4 shrink-0 fill-glow text-glow" aria-hidden="true" />
        </li>
      ))}
    </ul>
  );
}

export function ProvidersMarquee(): ReactElement {
  const reducedMotion = usePrefersReducedMotion();
  const progress = useMotionValue(0);
  const x = useTransform(progress, [0, 1], ["0%", `${-100 / COPIES}%`]);
  const controlsRef = useRef<AnimationPlaybackControls | null>(null);

  useEffect(() => {
    if (reducedMotion) return;
    const controls = animate(progress, 1, { duration: LOOP_SECONDS, ease: "linear", repeat: Infinity });
    controlsRef.current = controls;
    return () => controls.stop();
  }, [reducedMotion, progress]);

  return (
    <section aria-label="Provedores de certificação" className="border-y border-border py-6 md:py-8">
      {reducedMotion ? (
        <ul className="mx-auto flex max-w-[1440px] flex-wrap items-center justify-center gap-x-10 gap-y-3 px-5">
          {MARQUEE_PROVIDERS.map((provider) => (
            <li key={provider} className="font-display text-xl font-semibold tracking-[-0.02em] md:text-3xl">
              {provider}
            </li>
          ))}
        </ul>
      ) : (
        <div
          className="overflow-hidden [mask-image:linear-gradient(to_right,transparent,#000_8%,#000_92%,transparent)]"
          onPointerEnter={() => controlsRef.current?.pause()}
          onPointerLeave={() => controlsRef.current?.play()}
        >
          <motion.div className="flex w-max" style={{ x }}>
            {Array.from({ length: COPIES }, (_, copy) => (
              <ProviderList key={copy} hidden={copy > 0} />
            ))}
          </motion.div>
        </div>
      )}
    </section>
  );
}
