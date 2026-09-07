import type { ReactNode } from "react";
import { groupByTier, isSimuladoAvailable } from "@/lib/certifications/catalog";
import type { Certification } from "@/types/certification";
import { CertificationCard } from "./certification-card";

export function CertificationGrid({
  certifications,
  showStudyLink,
  emptyState,
}: {
  certifications: Certification[];
  showStudyLink: boolean;
  emptyState: ReactNode;
}) {
  if (certifications.length === 0) return <>{emptyState}</>;

  const groups = groupByTier(certifications);
  const sections = groups.map((group, position) => ({
    ...group,
    firstIndex: groups
      .slice(0, position)
      .reduce((count, previous) => count + previous.certifications.length, 0),
  }));

  return (
    <div className="flex flex-col gap-8">
      {sections.map((section) => (
        <section key={section.tier} className="flex flex-col gap-3">
          <div className="flex items-center gap-3">
            <h2 className="text-[10px] tracking-[.16em] uppercase text-muted-foreground font-bold">
              {section.label}
            </h2>
            <span className="text-xs text-muted-foreground">
              {section.certifications.length}
            </span>
            <span aria-hidden className="h-px flex-1 bg-border" />
          </div>

          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {section.certifications.map((certification, indexInSection) => (
              <CertificationCard
                key={certification.id}
                certification={certification}
                href={`/simulados/${certification.provider}/${certification.id}`}
                isAvailable={isSimuladoAvailable(certification)}
                showStudyLink={showStudyLink}
                index={section.firstIndex + indexInSection}
              />
            ))}
          </div>
        </section>
      ))}
    </div>
  );
}
