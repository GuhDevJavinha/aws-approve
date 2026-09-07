import Link from "next/link";
import { BookOpen, Clock } from "lucide-react";
import { buttonVariants } from "@/components/ui/button";
import { Card, CardContent, CardFooter, CardHeader } from "@/components/ui/card";
import type { Certification } from "@/types/certification";

export function NoSimulado({
  certification,
  providerLabel,
}: {
  certification: Certification;
  providerLabel: string;
}) {
  return (
    <Card className="max-w-2xl">
      <CardHeader className="items-start gap-2">
        <Clock className="size-5 text-muted-foreground" />
        <h2 className="text-xl font-semibold text-foreground">Sem simulados</h2>
      </CardHeader>
      <CardContent className="flex flex-col gap-2">
        <p className="text-sm text-muted-foreground">
          Ainda não existe banco de questões para a certificação{" "}
          <span className="font-medium text-foreground">{certification.title}</span>. As outras
          certificações {providerLabel} podem já ter.
        </p>
        <p className="text-sm text-muted-foreground">
          Até lá, a documentação oficial é o melhor caminho.
        </p>
      </CardContent>
      <CardFooter className="flex-wrap gap-2">
        <a
          href={certification.studyUrl}
          target="_blank"
          rel="noreferrer noopener"
          className={buttonVariants({ size: "lg" })}
        >
          <BookOpen className="size-4" />
          Estudar na documentação
        </a>
        <Link
          href={`/certificacoes/${certification.provider}`}
          className={buttonVariants({ variant: "outline", size: "lg" })}
        >
          Ver certificações {providerLabel}
        </Link>
      </CardFooter>
    </Card>
  );
}
