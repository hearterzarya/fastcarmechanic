import * as React from "react";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/lib/utils";

const buttonVariants = cva(
  "inline-flex items-center justify-center whitespace-nowrap rounded-2xl text-sm font-semibold ring-offset-background transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 active:scale-95",
  {
    variants: {
      variant: {
        default:
          "bg-amber-400 text-white hover:bg-amber-500 shadow-glow-amber hover:shadow-glow-amber hover:shadow-lg",
        secondary:
          "bg-charcoal-200 text-white hover:bg-charcoal-50 border border-silver-300",
        outline:
          "border-2 border-charcoal-200 bg-transparent text-charcoal-200 hover:bg-charcoal-200 hover:text-white",
        ghost: "hover:bg-charcoal-50 text-charcoal-200",
        emergency:
          "bg-amber-400 text-white hover:bg-amber-500 shadow-glow-amber text-lg font-bold px-8 py-4",
      },
      size: {
        default: "h-12 px-6 py-3",
        sm: "h-10 px-4 text-xs",
        lg: "h-14 px-8 text-base",
        icon: "h-12 w-12",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  }
);

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  asChild?: boolean;
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, ...props }, ref) => {
    return (
      <button
        className={cn(buttonVariants({ variant, size, className }))}
        ref={ref}
        {...props}
      />
    );
  }
);
Button.displayName = "Button";

export { Button, buttonVariants };
