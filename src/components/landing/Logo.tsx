import { cn } from "@/lib/utils";
import Image from "next/image";
import type { HTMLAttributes } from 'react';

export function Logo({ className, ...props }: HTMLAttributes<HTMLDivElement>) {
  return (
    <div className={cn("flex items-center gap-3", className)} {...props}>
      <Image
        src="/healskin-logo.png"
        alt="HEALSKIN Logo"
        width={120}
        height={40}
        className="h-6 sm:h-8 w-auto object-contain"
        unoptimized
        priority
      />
      <span className="font-black text-xl sm:text-2xl text-primary tracking-tighter">
        HEALSKIN
      </span>
    </div>
  );
}
