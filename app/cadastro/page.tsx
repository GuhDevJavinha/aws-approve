import { SignUpForm } from "./signup-form";

export default async function SignUpPage({ searchParams }: PageProps<"/cadastro">) {
  const { email } = await searchParams;
  return <SignUpForm confirmEmail={typeof email === "string" && email ? email : null} />;
}
