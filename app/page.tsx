import { redirect } from "next/navigation";
import { getSession } from "@/lib/auth/dal";

export default async function HomePage() {
  const session = await getSession();
  redirect(session ? "/hub" : "/login");
}
