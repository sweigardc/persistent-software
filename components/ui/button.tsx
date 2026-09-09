import * as React from "react";
import { Slot } from "@radix-ui/react-slot";
import { cva, type VariantProps } from "class-variance-authority";

import { cn } from "@/lib/utils";

const buttonVariants = cva(
  [
    "inline-flex shrink-0 items-center justify-center gap-2 whitespace-nowrap",
    "rounded-control border font-sans font-semibold leading-none",
    // Hover is a surface or border shift. Never a lift, a scale or a shadow bloom.
    "transition-[background-color,border-color,color] duration-[120ms] ease-[cubic-bezier(0.2,0,0,1)]",
    "outline-none focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-signal-500",
    "disabled:pointer-events-none disabled:opacity-40",
    "[&_svg]:pointer-events-none [&_svg]:shrink-0 [&_svg:not([class*='size-'])]:size-4"
  ].join(" "),
  {
    variants: {
      variant: {
        // The default action: graphite, not colour.
        default:
          "border-graphite-900 bg-graphite-900 text-graphite-0 hover:border-graphite-700 hover:bg-graphite-700",
        // The one primary action per view. Rationed.
        signal:
          "border-signal-500 bg-signal-500 font-bold text-signal-ink hover:border-signal-400 hover:bg-signal-400 active:border-signal-600 active:bg-signal-600",
        outline:
          "border-rule-strong bg-surface text-graphite-900 hover:border-graphite-900 hover:bg-sunk",
        // Outline on an ink band.
        inverse:
          "border-graphite-600 bg-transparent text-graphite-0 hover:border-graphite-300 hover:bg-graphite-800",
        ghost:
          "border-transparent bg-transparent text-graphite-500 hover:bg-sunk hover:text-graphite-900",
        destructive:
          "border-alert-500 bg-alert-500 text-graphite-0 hover:opacity-90",
        secondary:
          "border-rule bg-sunk text-graphite-900 hover:border-rule-strong",
        link: "border-transparent text-signal-700 underline-offset-4 hover:text-signal-600 hover:underline"
      },
      size: {
        sm: "h-8 px-3.5 text-[13px]",
        default: "h-11 px-[22px] text-[15px]",
        lg: "h-[54px] px-[30px] text-[17px]",
        icon: "size-11 px-0"
      }
    },
    defaultVariants: {
      variant: "default",
      size: "default"
    }
  }
);

function Button({
  className,
  variant,
  size,
  asChild = false,
  ...props
}: React.ComponentProps<"button"> &
  VariantProps<typeof buttonVariants> & {
    asChild?: boolean;
  }) {
  const Comp = asChild ? Slot : "button";

  return (
    <Comp
      data-slot="button"
      className={cn(buttonVariants({ variant, size, className }))}
      {...props}
    />
  );
}

export { Button, buttonVariants };
