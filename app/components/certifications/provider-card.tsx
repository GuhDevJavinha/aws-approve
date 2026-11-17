import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { Card, CardContent, CardFooter, CardHeader } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import type { ProviderMeta } from "@/types/certification";

export function ProviderCard({
  provider,
  href,
  countLabel,
  isEmpty = false,
}: {
  provider: ProviderMeta;
  href: string;
  countLabel: string;
  isEmpty?: boolean;
}) {
  return (
    <Link href={href} className="group block h-full focus-visible:outline-none">
      <Card className="h-full gap-6 transition-colors [--card-spacing:--spacing(6)] group-hover:ring-primary/50 group-focus-visible:ring-2 group-focus-visible:ring-ring">
        <CardHeader>
          <h2 className="font-display text-xl tracking-[-0.02em] text-foreground">{provider.label}</h2>
        </CardHeader>
        <CardContent className="flex-1">
          <p className="text-sm text-muted-foreground">{provider.description}</p>
        </CardContent>
        <CardFooter className="items-center justify-between gap-2 border-0 bg-transparent pt-0">
          <Badge variant={isEmpty ? "outline" : "secondary"}>{countLabel}</Badge>
          <ArrowRight className="size-4 text-primary transition-transform group-hover:translate-x-0.5 dark:text-glow" />
        </CardFooter>
      </Card>
    </Link>
  );
}
