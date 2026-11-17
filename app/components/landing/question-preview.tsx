import { Check } from "lucide-react";
import type { ReactElement } from "react";
import { cn } from "@/lib/utils";

const OPTIONS = [
  { letter: "A", text: "Variáveis de ambiente em texto puro", selected: false },
  { letter: "B", text: "AWS Secrets Manager com permissão IAM na função", selected: true },
  { letter: "C", text: "Arquivo .env empacotado no deploy", selected: false },
] as const;

export function QuestionPreview(): ReactElement {
  return (
    <div
      role="img"
      aria-label="Prévia da tela de prova: questão 33 de 65, cronômetro em 01:24:07 e três alternativas, com a B selecionada."
      className="w-full max-w-md rounded-2xl border border-white/10 bg-card p-5 shadow-[0_32px_80px_-16px_rgb(0_0_0/0.65)] md:p-6"
    >
      <div className="flex items-center justify-between gap-3 font-mono text-[10px] tracking-[0.08em] text-muted-foreground uppercase md:gap-4 md:text-[11px] md:tracking-[0.12em]">
        <span>DVA-C02 · Questão 33 de 65</span>
        <span className="flex items-center gap-2 text-foreground">
          <span className="size-1.5 rounded-full bg-success" />
          01:24:07
        </span>
      </div>
      <p className="mt-5 text-sm leading-6 text-foreground">
        Uma função Lambda precisa ler a senha do banco sem expor credenciais no código. Qual é a solução mais segura?
      </p>
      <ul className="mt-5 space-y-2.5">
        {OPTIONS.map((option) => (
          <li
            key={option.letter}
            className={cn(
              "flex items-center gap-3 rounded-xl border px-3 py-3 text-[13px] leading-5",
              option.selected
                ? "border-transparent bg-[#7c3aed] font-medium text-white"
                : "border-white/10 bg-secondary/60 text-foreground/90"
            )}
          >
            <span
              className={cn(
                "grid size-6 shrink-0 place-items-center rounded-md border font-mono text-[11px]",
                option.selected ? "border-white/60 bg-white/20" : "border-white/15"
              )}
            >
              {option.selected ? <Check className="size-3.5" aria-hidden="true" /> : option.letter}
            </span>
            {option.text}
          </li>
        ))}
      </ul>
    </div>
  );
}
