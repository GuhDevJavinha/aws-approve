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
      <Card className="h-full flex flex-col transition-colors group-hover:border-primary/40 group-focus-visible:border-primary">
        <CardHeader>
          <h2 className="text-lg font-semibold text-foreground">{provider.label}</h2>
        </CardHeader>
        <CardContent className="flex-1">
          <p className="text-sm text-muted-foreground">{provider.description}</p>
        </CardContent>
        <CardFooter className="items-center justify-between gap-2">
          <Badge variant={isEmpty ? "outline" : "secondary"}>{countLabel}</Badge>
          <ArrowRight className="size-4 text-muted-foreground transition-transform group-hover:translate-x-0.5" />
        </CardFooter>
      </Card>
    </Link>
  );
}
