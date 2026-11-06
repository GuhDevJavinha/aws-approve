import { LoginForm } from "./login-form";

const NOTICES: Record<string, string> = {
  "conta-confirmada": "Conta confirmada! Entre com seu email e senha.",
  "senha-redefinida": "Senha redefinida! Entre com a nova senha.",
};

export default async function LoginPage({ searchParams }: PageProps<"/login">) {
  const { aviso } = await searchParams;
  return <LoginForm notice={typeof aviso === "string" ? (NOTICES[aviso] ?? null) : null} />;
}
