import type { ReactElement } from "react";
import { PillLink } from "./pill-link";

export function WhyTrain(): ReactElement {
  return (
    <div className="grid gap-6 pb-14 md:grid-cols-[1fr_1.4fr_1fr] md:items-end md:gap-12 md:pb-20">
      <h2 className="font-display text-[1.75rem] leading-[1.1] font-medium tracking-[-0.02em] text-balance first-letter:text-[1.28em] md:text-[2rem]">
        Por que treinar aqui?
      </h2>
      <p className="max-w-lg text-base leading-7 text-foreground/90 first-letter:text-[2.2em] first-letter:leading-none">
        A prova cobra tempo, formato e detalhe. Aqui você pratica as três coisas: questões no estilo oficial, contra o relógio, com a nota de corte da certificação.
      </p>
      <div>
        <p className="font-display text-xl leading-tight font-medium tracking-[-0.02em] text-balance md:text-2xl">
          Comece hoje, de graça.
        </p>
        <div className="mt-5 flex flex-wrap gap-3">
          <PillLink href="/cadastro">Criar conta grátis</PillLink>
          <PillLink href="/login" variant="outline">
            Entrar
          </PillLink>
        </div>
      </div>
    </div>
  );
}
