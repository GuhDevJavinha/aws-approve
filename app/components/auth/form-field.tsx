import type { ComponentProps } from "react";
import { Input } from "@/components/ui/input";
import { cn } from "@/lib/utils";

export function FormField({
  id,
  label,
  hint,
  className,
  ...inputProps
}: ComponentProps<typeof Input> & { id: string; label: string; hint?: string }) {
  return (
    <div className="flex flex-col gap-2">
      <label className="text-[13px] font-medium text-foreground" htmlFor={id}>
        {label}
      </label>
      <Input
        id={id}
        name={id}
        className={cn("h-12 rounded-xl bg-background/60 px-4 dark:bg-background/60", className)}
        {...inputProps}
      />
      {hint ? <p className="text-xs text-muted-foreground">{hint}</p> : null}
    </div>
  );
}
