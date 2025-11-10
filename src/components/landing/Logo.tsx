import { cn } from "@/lib/utils";
import type { HTMLAttributes } from 'react';

export function Logo({ className, ...props }: HTMLAttributes<HTMLSpanElement>) {
  return (
    <span className={cn("font-black text-2xl text-primary tracking-tighter", className)} {...props}>
      HEALSKIN
    </span>
  );
}
