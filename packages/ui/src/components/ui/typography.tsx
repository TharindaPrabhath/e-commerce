import * as React from "react";
import { Slot } from "@radix-ui/react-slot";
import { cva, type VariantProps } from "class-variance-authority";

import { cn } from "../../lib/utils";

const typographyVariants = cva("", {
  variants: {
    variant: {
      h1: "scroll-m-20 text-4xl font-extrabold tracking-tight lg:text-5xl",
      h2: "scroll-m-20 text-3xl font-semibold tracking-tight transition-colors first:mt-0",
      h3: "scroll-m-20 text-2xl font-semibold tracking-tight",
      h4: "scroll-m-20 text-xl font-semibold tracking-tight",
      p: "leading-7",
      muted: "text-sm text-muted-foreground",
    },
  },
  defaultVariants: {
    variant: "p",
  },
});

export interface TypographyProps
  extends React.ButtonHTMLAttributes<HTMLElement>,
    VariantProps<typeof typographyVariants> {
  asChild?: boolean;
}

const Typography = React.forwardRef<HTMLElement, TypographyProps>(
  ({ className, variant, asChild = false, ...props }, ref) => {
    let component = variant;
    if (component === null || component === undefined || component === "muted")
      component = "p";
    const Comp = asChild ? Slot : component;

    return (
      <Comp
        className={cn(typographyVariants({ variant, className }))}
        {...props}
      />
    );
  },
);
Typography.displayName = "Typography";

export { Typography, typographyVariants };
