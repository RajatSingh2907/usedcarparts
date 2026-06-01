import Link from "next/link";
import type { ComponentPropsWithoutRef, ReactNode } from "react";

type ButtonVariant = "primary" | "secondary" | "outline" | "ghost";
type ButtonSize = "sm" | "md" | "lg" | "xl";

type BaseProps = {
  variant?: ButtonVariant;
  size?: ButtonSize;
  className?: string;
  children: ReactNode;
};

type ButtonAsButton = BaseProps & ComponentPropsWithoutRef<"button"> & { href?: never };
type ButtonAsLink = BaseProps & Omit<ComponentPropsWithoutRef<typeof Link>, "href"> & { href: string };

type ButtonProps = ButtonAsButton | ButtonAsLink;

const baseClasses =
  "relative inline-flex items-center justify-center font-semibold tracking-wide transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-primary disabled:pointer-events-none disabled:opacity-60 will-change-transform select-none overflow-hidden rounded-xl";

const variantClasses: Record<ButtonVariant, string> = {
  primary:
    "bg-gradient-to-r from-cyan-500 via-blue-500 to-sky-700 text-white shadow-lg shadow-cyan-500/25 hover:from-cyan-400 hover:via-blue-500 hover:to-sky-800 hover:shadow-xl hover:-translate-y-0.5 active:translate-y-0 active:scale-[0.98] after:absolute after:inset-0 after:rounded-xl after:ring-1 after:ring-inset after:ring-white/20",
  secondary:
    "border border-primary/20 bg-primary/10 text-primary shadow-sm shadow-primary/10 hover:border-primary/30 hover:bg-primary/15 hover:shadow-md hover:-translate-y-0.5 active:translate-y-0 active:scale-[0.98] dark:border-cyan-300/25 dark:bg-cyan-300/10 dark:text-cyan-100 dark:hover:bg-cyan-300/15",
  outline:
    "border border-slate-300 bg-white/70 text-slate-900 backdrop-blur-sm hover:border-slate-400 hover:bg-white hover:shadow-md hover:-translate-y-0.5 active:translate-y-0 active:scale-[0.98] dark:border-white/25 dark:bg-white/8 dark:text-white dark:hover:border-white/40 dark:hover:bg-white/15",
  ghost:
    "text-primary hover:text-primary-dark hover:bg-primary/10 active:scale-[0.98]",
};

const sizeClasses: Record<ButtonSize, string> = {
  sm: "h-9 px-4 text-xs gap-1.5",
  md: "h-11 px-5 text-sm gap-2",
  lg: "h-12 px-7 text-base gap-2",
  xl: "h-14 px-9 text-base md:text-lg gap-2.5",
};

function cx(...classes: Array<string | undefined>) {
  return classes.filter(Boolean).join(" ");
}

export default function Button(props: ButtonProps) {
  const { variant = "primary", size = "md", className, children } = props;
  const classNames = cx(baseClasses, variantClasses[variant], sizeClasses[size], className);

  if ("href" in props && props.href) {
    const { href, variant: _v, size: _s, ...linkProps } = props;
    void _v;
    void _s;
    return (
      <Link href={href} className={classNames} {...linkProps}>
        {children}
      </Link>
    );
  }

  const { variant: _v, size: _s, ...buttonProps } = props as ButtonAsButton;
  void _v;
  void _s;

  return (
    <button type="button" className={classNames} {...buttonProps}>
      {children}
    </button>
  );
}
