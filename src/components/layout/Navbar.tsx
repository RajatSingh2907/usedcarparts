"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useCallback, useState, useEffect } from "react";

import Container from "@/components/ui/Container";
import MobileMenu from "@/components/layout/MobileMenu";
import ThemeToggle from "@/components/ui/ThemeToggle";

const navItems = [
  { label: "Home", href: "/" },
  { label: "Used Auto Parts", href: "/used-auto-parts" },
  { label: "Used Transmissions", href: "/used-transmissions" },
  { label: "Used Engines", href: "/used-engines" },
  { label: "Contact", href: "/contact" },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const pathname = usePathname();
  const closeMenu = useCallback(() => setIsOpen(false), []);

  useEffect(() => {
    function onScroll() {
      setIsScrolled(window.scrollY > 8);
    }
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={[
        "sticky top-0 z-40 transition-all duration-300",
        isScrolled
          ? "border-b border-slate-200 bg-white/90 shadow-lg shadow-slate-900/10 backdrop-blur-xl dark:border-white/5 dark:bg-slate-950/90 dark:shadow-2xl dark:shadow-black/40"
          : "border-b border-slate-200 bg-white dark:border-white/8 dark:bg-slate-950",
      ].join(" ")}
    >
      <Container className="flex h-[72px] items-center justify-between gap-8">
        {/* Logo */}
        <Link
          href="/"
          className="group flex h-14 shrink-0 items-center overflow-hidden"
        >
          <Image
            src="/Logo/Logo%20(2).png"
            alt="Parts Central logo"
            width={260}
            height={40}
            className="h-10 w-[200px] object-contain transition-opacity duration-200 group-hover:opacity-90 dark:hidden"
            priority
          />
          <Image
            src="/navlogo%20(1).png"
            alt="Parts Central logo"
            width={200}
            height={44}
            className="hidden h-10 w-[200px] object-contain transition-opacity duration-200 group-hover:opacity-90 dark:block"
            priority
          />
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden items-center gap-1 lg:flex">
          {navItems.map((item) => {
            const isActive = pathname === item.href;
            return (
              <Link
                key={item.href}
                href={item.href}
                className={[
                  "relative px-3.5 py-2 text-sm font-medium rounded-lg transition-all duration-200",
                  "hover:bg-slate-100 hover:text-slate-950 dark:hover:bg-white/10 dark:hover:text-white",
                  isActive
                    ? "bg-slate-100 text-slate-950 dark:bg-white/10 dark:text-white"
                    : "text-slate-700 dark:text-white",
                ].join(" ")}
              >
                {item.label}
                {isActive && (
                  <span className="absolute bottom-0 left-1/2 h-0.5 w-5 -translate-x-1/2 rounded-full bg-slate-950 dark:bg-white" />
                )}
              </Link>
            );
          })}
        </nav>

        {/* CTA + Hamburger */}
        <div className="flex items-center gap-3">
          <div className="hidden lg:block">
            <ThemeToggle />
          </div>

          <a
            href="tel:7705984665"
            className="hidden h-10 items-center gap-2 rounded-xl border border-primary/20 bg-primary/10 px-5 text-sm font-semibold text-primary shadow-lg shadow-primary/10 transition-all duration-200 hover:-translate-y-0.5 hover:bg-primary/15 active:scale-[0.98] dark:border-cyan-300/25 dark:bg-cyan-300/10 dark:text-cyan-100 dark:shadow-cyan-950/30 dark:hover:bg-cyan-300/15 lg:inline-flex"
          >
            <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2} aria-hidden="true">
              <path strokeLinecap="round" strokeLinejoin="round" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
            </svg>
            (770) 598-4665
          </a>

          <div className="lg:hidden">
            <ThemeToggle />
          </div>

          <button
            type="button"
            className="inline-flex h-10 w-10 items-center justify-center rounded-xl border border-slate-200 bg-slate-50 text-slate-900 transition-all duration-200 hover:border-slate-300 hover:bg-slate-100 dark:border-white/10 dark:bg-white/5 dark:text-white dark:hover:border-white/20 dark:hover:bg-white/12 lg:hidden"
            onClick={() => setIsOpen(true)}
            aria-label="Open navigation menu"
          >
            <svg className="h-5 w-5" viewBox="0 0 24 24" fill="none" aria-hidden="true">
              <path d="M4 7h16M4 12h16M4 17h16" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
            </svg>
          </button>
        </div>
      </Container>

      <MobileMenu isOpen={isOpen} onClose={closeMenu} />
    </header>
  );
}
