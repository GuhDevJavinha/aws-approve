import type { Metadata } from "next";
import { redirect } from "next/navigation";
import type { ReactElement } from "react";
import { ExamPreviewSection } from "@/components/landing/exam-preview-section";
import { FaqSection } from "@/components/landing/faq-section";
import { FeaturesSection } from "@/components/landing/features-section";
import { FinalCtaSection } from "@/components/landing/final-cta-section";
import { HeroSection } from "@/components/landing/hero-section";
import { HowItWorksSection } from "@/components/landing/how-it-works-section";
import { LandingFooter } from "@/components/landing/landing-footer";
import { LandingNav } from "@/components/landing/landing-nav";
import { LandingShell } from "@/components/landing/landing-shell";
import { ProvidersMarquee } from "@/components/landing/providers-marquee";
import { SimuladosSection } from "@/components/landing/simulados-section";
import { getSession } from "@/lib/auth/dal";

const TITLE = "AWS Approve — Simulados de certificação AWS, Google Cloud e GitHub";
const DESCRIPTION =
  "Treine para certificações de nuvem com simulados no formato oficial: cronômetro, nota de corte e gabarito na hora.";

// TODO: definir metadataBase no layout raiz com o domínio de produção para resolver a imagem Open Graph
export const metadata: Metadata = {
  title: TITLE,
  description: DESCRIPTION,
  openGraph: {
    title: TITLE,
    description: DESCRIPTION,
    type: "website",
    locale: "pt_BR",
    siteName: "AWS Approve",
    images: [
      {
        url: "/landing/hero-art.png",
        width: 1536,
        height: 1024,
        alt: "Figura encapuzada segurando um núcleo de luz violeta, arte do AWS Approve.",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: TITLE,
    description: DESCRIPTION,
    images: ["/landing/hero-art.png"],
  },
};

export default async function HomePage(): Promise<ReactElement> {
  const session = await getSession();
  if (session) redirect("/certificacoes");

  return (
    <LandingShell>
      <LandingNav />
      <main id="conteudo">
        <HeroSection />
        <ProvidersMarquee />
        <ExamPreviewSection />
        <FeaturesSection />
        <HowItWorksSection />
        <SimuladosSection />
        <FaqSection />
        <FinalCtaSection />
      </main>
      <LandingFooter />
    </LandingShell>
  );
}
