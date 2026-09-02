"use client";

import { useActionState } from "react";
import { motion } from "motion/react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { ThemeToggle } from "@/components/theme-toggle";
import { login, type LoginState } from "./actions";

const initialState: LoginState = { error: null };

export default function LoginPage() {
  const [state, formAction, isPending] = useActionState(login, initialState);

  return (
    <div className="min-h-screen flex items-center justify-center bg-background px-4 relative">
      <div className="absolute top-4 right-4">
        <ThemeToggle />
      </div>
      <div className="flex w-full max-w-sm flex-col items-center">
        <motion.div
          initial={{ opacity: 0, y: -16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4, ease: "easeOut" }}
          className="mb-8 text-center"
        >
          <h1 className="text-4xl font-bold tracking-tight text-foreground">AWS Approve</h1>
          <p className="mt-1 text-sm text-muted-foreground">by BSP Prompt</p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3, delay: 0.15, ease: "easeOut" }}
          className="w-full"
        >
          <Card>
            <CardHeader>
              <p className="text-[10px] tracking-[.16em] uppercase text-muted-foreground font-bold">
                AWS Certification · Exame de prática
              </p>
              <h2 className="text-2xl font-semibold text-foreground">Entrar</h2>
            </CardHeader>
            <CardContent>
              <form action={formAction} className="flex flex-col gap-4">
                <div className="flex flex-col gap-1.5">
                  <label className="text-sm font-medium" htmlFor="email">
                    Email
                  </label>
                  <Input id="email" name="email" type="email" required />
                </div>

                <div className="flex flex-col gap-1.5">
                  <label className="text-sm font-medium" htmlFor="password">
                    Senha
                  </label>
                  <Input id="password" name="password" type="password" required />
                </div>

                {state.error ? (
                  <motion.p
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: "auto" }}
                    className="text-sm text-destructive"
                  >
                    {state.error}
                  </motion.p>
                ) : null}

                <Button type="submit" disabled={isPending} className="w-full">
                  {isPending ? "Entrando…" : "Entrar"}
                </Button>
              </form>
            </CardContent>
          </Card>
        </motion.div>
      </div>
    </div>
  );
}
