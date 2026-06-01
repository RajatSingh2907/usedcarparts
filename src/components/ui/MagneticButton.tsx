"use client";

import Link from "next/link";
import { useRef } from "react";

type MagneticButtonProps = {
  href: string;
  label: string;
  variant?: "primary" | "outline";
  className?: string;
};

function cx(...classes: Array<string | undefined>) {
  return classes.filter(Boolean).join(" ");
}

export default function MagneticButton({ href, label, variant = "primary", className }: MagneticButtonProps) {
  const inner = useRef<HTMLSpanElement | null>(null);

  const onMove = (event: React.MouseEvent<HTMLAnchorElement>) => {
    const el = event.currentTarget;
    const bounds = el.getBoundingClientRect();
    const dx = event.clientX - (bounds.left + bounds.width / 2);
    const dy = event.clientY - (bounds.top + bounds.height / 2);
    el.style.transform = `translate(${dx * 0.1}px, ${dy * 0.1}px)`;
    if (inner.current) inner.current.style.transform = `translate(${dx * 0.14}px, ${dy * 0.14}px)`;
  };

  const onLeave = (event: React.MouseEvent<HTMLAnchorElement>) => {
    event.currentTarget.style.transform = "";
    if (inner.current) inner.current.style.transform = "";
  };

  const classes = cx(
    variant === "primary"
      ? "inline-flex h-14 items-center justify-center rounded-xl bg-primary px-9 text-base font-semibold uppercase tracking-[0.08em] text-white shadow-[0_18px_36px_-14px_rgba(0,66,96,0.65)] ring-1 ring-white/10 transition-all duration-200 hover:-translate-y-0.5 hover:bg-primary-dark hover:shadow-[0_22px_44px_-16px_rgba(0,66,96,0.78)] active:scale-[0.98]"
      : "inline-flex h-14 items-center justify-center rounded-xl border border-primary/20 bg-primary/10 px-9 text-base font-semibold uppercase tracking-[0.08em] text-primary shadow-[0_16px_34px_-18px_rgba(0,66,96,0.58)] backdrop-blur-sm transition-transform duration-150 hover:border-primary/30 hover:bg-primary/15 hover:shadow-[0_20px_40px_-18px_rgba(0,66,96,0.68)] dark:border-white/25 dark:bg-white/10 dark:text-white dark:shadow-[0_18px_36px_-18px_rgba(14,165,233,0.42)]",
    className,
  );

  return (
    <Link href={href} onMouseMove={onMove} onMouseLeave={onLeave} className={classes}>
      <span ref={inner} className={variant === "primary" ? "text-white" : undefined}>
        {label}
      </span>
    </Link>
  );
}
