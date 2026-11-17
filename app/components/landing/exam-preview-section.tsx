import type { ReactElement } from "react";
import { Container } from "./container";
import { QuestionPreview } from "./question-preview";
import { Reveal } from "./reveal";

export function ExamPreviewSection(): ReactElement {
  return (
    <section id="proposta" aria-labelledby="proposta-title" className="scroll-mt-24 py-16 md:py-20">
      <Container>
        <Reveal className="mx-auto max-w-[1160px]">
          <div className="grid overflow-hidden rounded-[20px] border border-border bg-card md:grid-cols-2">
            <div className="flex flex-col gap-6 p-8 md:p-14">
              <h2
                id="proposta-title"
                className="font-display text-[1.75rem] leading-[1.15] tracking-[-0.02em] uppercase md:text-4xl"
              >
                <span className="block font-normal">Não é só um</span>{" "}
                <span className="block font-bold">banco de questões</span>
              </h2>
              <span aria-hidden="true" className="h-0.5 w-24 bg-glow" />
              <p className="max-w-md text-sm leading-6 text-muted-foreground md:text-[0.9375rem] md:leading-7">
                Ler resposta não é o mesmo que fazer prova. O AWS Approve monta o exame com a quantidade oficial de questões, embaralha tudo e corta no tempo certo. Quando acaba, você vê nota, acertos por questão e o que revisar.
              </p>
              <p aria-hidden="true" className="mt-auto pt-6 font-display text-lg font-semibold md:pt-16">
                01
              </p>
            </div>
            <div className="relative grid place-items-center overflow-hidden bg-[linear-gradient(135deg,#2e1065_0%,#6d28d9_55%,#a855f7_100%)] p-6 md:p-12">
              <span
                aria-hidden="true"
                className="pointer-events-none absolute -top-24 -right-24 size-80 rounded-full bg-glow/40 blur-3xl"
              />
              <div className="relative w-full max-w-md">
                <QuestionPreview />
              </div>
            </div>
          </div>
        </Reveal>
      </Container>
    </section>
  );
}
