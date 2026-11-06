import type { ComponentProps } from "react";
import { Input } from "@/components/ui/input";

export function FormField({ id, label, hint, ...inputProps }: ComponentProps<typeof Input> & { id: string; label: string; hint?: string }) {
  return (
    <div className="flex flex-col gap-1.5">
      <label className="text-sm font-medium" htmlFor={id}>
        {label}
      </label>
      <Input id={id} name={id} {...inputProps} />
      {hint ? <p className="text-xs text-muted-foreground">{hint}</p> : null}
    </div>
  );
}
