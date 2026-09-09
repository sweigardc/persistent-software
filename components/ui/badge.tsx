import * as React from "react";
import { Slot } from "@radix-ui/react-slot";
import { cva, type VariantProps } from "class-variance-authority";

import { cn } from "./utils";

// Tags are mono — they are metadata, not voice.
const badgeVariants = cva(
  "inline-flex h-[26px] w-fit shrink-0 items-center justify-center gap-1 whitespace-nowrap rounded-[3px] border px-2.5 font-mono text-[13px] font-medium leading-none [&>svg]:size-3 [&>svg]:pointer-events-none",
  {
    variants: {
      variant: {
        default: "border-rule bg-sunk text-graphite-700",
        secondary: "border-rule bg-sunk text-graphite-700",
        signal: "border-signal-200 bg-signal-50 text-signal-800",
        ink: "border-graphite-900 bg-graphite-900 text-graphite-0",
        outline: "border-rule-strong bg-transparent text-graphite-500",
        destructive: "border-alert-500 bg-alert-500 text-graphite-0"
      }
    },
    defaultVariants: {
      variant: "default"
    }
  }
);

function Badge({
  className,
  variant,
  asChild = false,
  ...props
}: React.ComponentProps<"span"> &
  VariantProps<typeof badgeVariants> & { asChild?: boolean }) {
  const Comp = asChild ? Slot : "span";

  return (
    <Comp
      data-slot="badge"
      className={cn(badgeVariants({ variant }), className)}
      {...props}
    />
  );
}

export { Badge, badgeVariants };
