import { redirect } from "next/navigation";
import { getSession } from "@/lib/auth/dal";
import { simulados } from "@/_data";
import { SimuladoCard } from "@/components/hub/simulado-card";
import { ThemeToggle } from "@/components/theme-toggle";
import { LogoutButton } from "@/components/logout-button";

export default async function HubPage() {
  const session = await getSession();
  if (!session) redirect("/login");

  return (
    <div className="min-h-screen bg-background">
      <header className="border-b border-border bg-secondary text-secondary-foreground">
        <div className="max-w-5xl mx-auto px-6 py-4 flex items-center justify-between">
          <div>
            <p className="text-[10px] tracking-[.16em] uppercase text-secondary-foreground/70 font-bold">
              AWS Certification
            </p>
            <h1 className="text-lg font-bold">Simulados disponíveis</h1>
          </div>
          <div className="flex items-center gap-2">
            <ThemeToggle />
            <LogoutButton />
          </div>
        </div>
      </header>

      <main className="max-w-5xl mx-auto px-6 py-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {simulados.map((simulado, index) => (
          <SimuladoCard key={simulado.slug} simulado={simulado} index={index} />
        ))}
      </main>
    </div>
  );
}
