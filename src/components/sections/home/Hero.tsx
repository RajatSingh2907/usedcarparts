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
          initial={{ opacity: 0, y: 18, rotateX: -70 }}
          animate={{ opacity: 1, y: 0, rotateX: 0 }}
          transition={{
            delay: i * 0.018,
            duration: 0.45,
            ease: [0.2, 1, 0.3, 1],
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
  const yCopy = useTransform(scrollYProgress, [0, 1], [0, -40]);
  const heroActions = (
    <>
      <MagneticButton
        href="#vehicle-selector"
        label="Find A Part Now"
        className="bg-gradient-to-r from-cyan-300 via-blue-400 to-sky-700 shadow-[0_18px_36px_-14px_rgba(14,165,233,0.68)] hover:from-cyan-200 hover:via-blue-400 hover:to-sky-800 hover:shadow-[0_22px_44px_-16px_rgba(14,165,233,0.78)]"
      />

      <a
        href="tel:7705984665"
        className="inline-flex h-13 items-center justify-center gap-2.5 rounded-xl border border-primary/20 bg-primary/10 px-8 text-base font-bold text-primary shadow-xl shadow-primary/10 transition-all duration-200 hover:-translate-y-0.5 hover:bg-primary/15 active:scale-[0.98] dark:border-cyan-300/25 dark:bg-cyan-300/10 dark:text-cyan-100 dark:shadow-cyan-950/30 dark:hover:bg-cyan-300/15"
      >
        <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2} aria-hidden="true">
          <path strokeLinecap="round" strokeLinejoin="round" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
        </svg>
        Call (770) 598-4665
      </a>
    </>
  );

  return (
    <section
      ref={ref}
      className="relative min-h-[720px] overflow-hidden bg-slate-50 text-slate-950 dark:bg-slate-950 dark:text-white"
    >
      <motion.div
        style={{ y: yImage }}
        className="pointer-events-none absolute inset-0"
      >
        <Image
          src="/websiteImages/bg-4.jpg"
          alt="Premium used auto parts"
          fill
          className="object-cover opacity-15 dark:opacity-30"
          sizes="100vw"
          priority
        />
      </motion.div>

      <div className="absolute inset-0 bg-[linear-gradient(110deg,rgba(248,250,252,0.96),rgba(241,245,249,0.9),rgba(245,158,11,0.10))] dark:bg-[linear-gradient(110deg,rgba(2,6,23,0.95),rgba(2,6,23,0.85),rgba(14,165,233,0.18))]" />

      <Container className="relative py-16 sm:py-24 lg:py-28">
        <div className="grid gap-12 lg:grid-cols-[1.1fr_0.9fr] lg:items-center">
          <motion.div
            style={{ y: yCopy }}
            className="max-w-2xl"
          >
            <p className="text-xs font-semibold uppercase tracking-[0.24em] text-primary dark:text-cyan-300">
              Premium Used OEM Parts
            </p>

            <h1 className="mt-5 text-4xl font-extrabold leading-[1.05] sm:text-5xl lg:text-6xl">
              <SplitChars text={heading} />
            </h1>

            <p className="mt-6 text-base leading-8 text-slate-600 sm:text-lg dark:text-slate-200">
              Quality-tested, perfectly matched used parts for every major make
              and model, with fast shipping and a dedicated support team.
            </p>

            <div className="mt-9 hidden flex-col gap-4 sm:flex-row lg:flex lg:translate-x-6">
              {heroActions}
            </div>
          </motion.div>

          <motion.div
            id="vehicle-selector"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              duration: 0.65,
              ease: [0.2, 1, 0.3, 1],
              delay: 0.25,
            }}
            className="relative -top-10 lg:-top-20"
          >
            <VehicleSelectorForm theme="dark" />
          </motion.div>

          <div className="-mt-8 flex flex-col gap-4 sm:flex-row lg:hidden">
            {heroActions}
          </div>
        </div>
      </Container>
    </section>
  );
}
