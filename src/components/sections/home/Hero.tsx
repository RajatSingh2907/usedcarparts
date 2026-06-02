"use client";

import Image from "next/image";
import MagneticButton from "@/components/ui/MagneticButton";
import VehicleSelectorForm from "@/components/forms/VehicleSelectorForm";
import Container from "@/components/ui/Container";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

const heading = "Reliable OEM Parts. Real Value. Real Fast";

function SplitChars({ text }: { text: string }) {
  return (
    <span aria-label={text} role="text" className="inline-block">
      {text.split("").map((ch, i) => (
        <motion.span
          key={`${ch}-${i}`}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{
            delay: i * 0.018,
            duration: 0.45,
          }}
          className="inline-block"
        >
          {ch === " " ? "\u00A0" : ch}
        </motion.span>
      ))}
    </span>
  );
}

export default function Hero() {
  const ref = useRef<HTMLElement | null>(null);

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });

  const yImage = useTransform(scrollYProgress, [0, 1], [0, 120]);
  const yContent = useTransform(scrollYProgress, [0, 1], [0, -40]);

  const heroActions = (
    <>
      <MagneticButton
        href="#vehicle-selector"
        label="Find A Part Now"
      />

      <a
        href="tel:7705984665"
        className="inline-flex h-14 items-center justify-center gap-2 rounded-xl border border-primary/20 bg-primary/10 px-7 text-sm font-bold text-primary transition-all duration-300 hover:-translate-y-1 hover:bg-primary/15"
      >
        <svg
          className="h-5 w-5"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          strokeWidth={2}
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
          />
        </svg>

        Call (770) 598-4665
      </a>
    </>
  );

  return (
    <section
      ref={ref}
      className="relative overflow-hidden bg-slate-50 dark:bg-slate-950"
    >
      {/* Background Image */}
      <motion.div
        style={{ y: yImage }}
        className="absolute inset-0"
      >
        <Image
          src="/websiteImages/bg-4.jpg"
          alt="OEM Used Auto Parts"
          fill
          priority
          sizes="100vw"
          className="object-cover opacity-30 dark:opacity-25"
        />
      </motion.div>

      {/* Overlay */}
      <div className="absolute inset-0 bg-gradient-to-r from-white/92 via-slate-50/82 to-cyan-50/55 dark:from-slate-950/95 dark:via-slate-950/90 dark:to-cyan-950/30" />

      {/* Glow */}
      <div className="pointer-events-none absolute left-1/2 top-0 h-[700px] w-[700px] -translate-x-1/2 rounded-full bg-cyan-500/10 blur-[160px]" />

      <Container className="relative z-10 py-10 sm:py-14 lg:flex lg:min-h-[calc(100svh-72px)] lg:items-center lg:py-8">
        <div className="grid w-full gap-8 lg:grid-cols-[1.08fr_0.92fr] lg:items-center">
          {/* Left Side */}
          <motion.div
            style={{ y: yContent }}
            className="max-w-3xl"
          >
            {/* Trust Badge */}
            <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-cyan-500/20 bg-cyan-500/10 px-4 py-2 text-xs font-semibold uppercase tracking-wider text-cyan-600 dark:text-cyan-300">
              <span className="h-2 w-2 rounded-full bg-cyan-500" />
              Premium OEM Auto Parts
            </div>

            {/* Heading */}
            <h1 className="bg-gradient-to-r from-cyan-500 via-blue-500 to-sky-700 bg-clip-text text-4xl font-black leading-[1.05] text-transparent sm:text-5xl lg:text-6xl dark:from-cyan-300 dark:via-blue-400 dark:to-sky-500">
              <SplitChars text={heading} />
            </h1>

            {/* Description */}
            <p className="mt-4 max-w-2xl text-base leading-7 text-slate-700 dark:text-slate-200 sm:text-lg">
              Quality-tested OEM engines, transmissions, headlights,
              radiators and more. Fast nationwide shipping,
              transparent pricing and expert support.
            </p>

            {/* Trust Stats */}
            <div className="mt-6 flex flex-wrap gap-6">
              <div>
                <div className="text-2xl font-black text-slate-950 dark:text-white">
                  50K+
                </div>
                <div className="text-sm text-slate-500">
                  Parts Available
                </div>
              </div>

              <div>
                <div className="text-2xl font-black text-slate-950 dark:text-white">
                  60-Day
                </div>
                <div className="text-sm text-slate-500">
                  Warranty
                </div>
              </div>

              <div>
                <div className="text-2xl font-black text-slate-950 dark:text-white">
                  Fast
                </div>
                <div className="text-sm text-slate-500">
                  Nationwide Delivery
                </div>
              </div>
            </div>

            {/* Buttons */}
            <div className="mt-7 hidden flex-wrap gap-4 lg:flex">
              {heroActions}
            </div>
          </motion.div>

          {/* Right Side Form */}
          <motion.div
            id="vehicle-selector"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              duration: 0.7,
              delay: 0.2,
            }}
            className="relative"
          >
            <div className="absolute inset-0 rounded-[32px] bg-cyan-500/20 blur-3xl" />

            <div className="relative">
              <VehicleSelectorForm theme="dark" />
            </div>
          </motion.div>

          {/* Mobile Buttons */}
          <div className="flex flex-col gap-4 lg:hidden">
            {heroActions}
          </div>
        </div>
      </Container>
    </section>
  );
}
