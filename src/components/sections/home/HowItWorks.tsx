import Image from "next/image";

import Container from "@/components/ui/Container";
import Reveal from "@/components/ui/Reveal";

const steps = [
  {
    number: "01",
    title: "Tell Us What You Need",
    description:
      "Share your year, make, model, and required part using our quick form.",
    icon: (
      <svg
        className="h-5 w-5"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
        strokeWidth={1.8}
        aria-hidden="true"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2"
        />
      </svg>
    ),
  },
  {
    number: "02",
    title: "Get Quote Support",
    description:
      "Our team reviews fitment details and available OEM replacement options.",
    icon: (
      <svg
        className="h-5 w-5"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
        strokeWidth={1.8}
        aria-hidden="true"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M21 21l-4.35-4.35M11 19a8 8 0 100-16 8 8 0 000 16z"
        />
      </svg>
    ),
  },
  {
    number: "03",
    title: "Confirm Details",
    description:
      "Review pricing, warranty terms, and delivery expectations before checkout.",
    icon: (
      <svg
        className="h-5 w-5"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
        strokeWidth={1.8}
        aria-hidden="true"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
        />
      </svg>
    ),
  },
  {
    number: "04",
    title: "Shipping & Peace of Mind",
    description:
      "Your order is prepared for delivery with clear support from quote to arrival.",
    icon: (
      <svg
        className="h-5 w-5"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
        strokeWidth={1.8}
        aria-hidden="true"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M5 8h14M5 8a2 2 0 110-4h14a2 2 0 110 4M5 8v10a2 2 0 002 2h10a2 2 0 002-2V8m-9 4h4"
        />
      </svg>
    ),
  },
];

export default function HowItWorks() {
  return (
    <section className="relative overflow-hidden border-t border-slate-200 bg-slate-50 py-24 dark:border-white/5 dark:bg-slate-900">
      <Image
        src="/optimized/bg-process.webp"
        alt=""
        fill
        sizes="100vw"
        quality={70}
        className="pointer-events-none object-cover object-center opacity-85 dark:opacity-70"
      />
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-white/35 via-white/10 to-white/45 dark:from-slate-950/45 dark:via-slate-950/15 dark:to-slate-950/55" />

      {/* Ambient glow */}
      <div className="pointer-events-none absolute left-1/2 top-1/2 h-[600px] w-[600px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-cyan-600/5 blur-[120px]" />

      <Container className="relative z-10">
        <Reveal>
          <div className="mx-auto mb-14 max-w-3xl rounded-3xl border border-white/70 bg-white/82 p-6 text-center shadow-xl shadow-slate-900/10 backdrop-blur-md dark:border-white/10 dark:bg-slate-950/78 dark:shadow-black/25">
            <div className="mb-4 flex justify-center">
              <span className="inline-flex items-center gap-2 rounded-full border border-cyan-500/20 bg-cyan-500/8 px-3.5 py-1.5 text-xs font-semibold uppercase tracking-widest text-cyan-700 dark:text-cyan-400">
                How It Works
              </span>
            </div>

            <h2 className="bg-gradient-to-r from-cyan-500 via-blue-500 to-sky-700 bg-clip-text text-3xl font-extrabold tracking-tight text-transparent sm:text-4xl dark:from-cyan-300 dark:via-blue-400 dark:to-sky-500">
              A Simple 4-Step Process
            </h2>

            <p className="mx-auto mt-4 max-w-xl text-base text-slate-600 dark:text-slate-400">
              From request to delivery, we keep the details clear and practical.
            </p>
          </div>
        </Reveal>

        <div className="relative grid gap-5 md:grid-cols-2 lg:grid-cols-4">
          <div className="pointer-events-none absolute left-[12%] right-[12%] top-10 hidden h-px bg-gradient-to-r from-transparent via-cyan-400/45 to-transparent lg:block" />
          {steps.map((step, i) => (
            <Reveal key={step.number} delay={i * 0.08}>
              <article className="group relative flex h-full flex-col rounded-3xl border border-slate-200 bg-white/92 p-6 shadow-lg shadow-slate-900/6 backdrop-blur transition-all duration-300 hover:-translate-y-1.5 hover:border-cyan-500/35 hover:bg-white hover:shadow-2xl hover:shadow-cyan-500/12 dark:border-white/8 dark:bg-slate-800/74 dark:hover:bg-slate-800/90">
                {/* Connector line (desktop only) */}
                {i < steps.length - 1 && (
                  <div className="absolute -right-2.5 top-10 z-10 hidden h-px w-5 bg-gradient-to-r from-slate-300 to-transparent dark:from-white/20 lg:block" />
                )}

                {/* Number badge */}
                <div className="mb-5 flex items-center gap-3">
                  <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-2xl bg-gradient-to-br from-cyan-500 via-blue-500 to-sky-700 text-sm font-black text-white shadow-lg shadow-cyan-500/30 transition-transform duration-300 group-hover:scale-105">
                    {step.number}
                  </div>

                  <div className="h-px flex-1 bg-slate-200 dark:bg-white/8" />
                </div>

                {/* Icon */}
                <div className="mb-4 inline-flex h-10 w-10 items-center justify-center rounded-lg border border-slate-200 bg-slate-50 text-slate-600 transition-colors duration-300 group-hover:border-cyan-500/25 group-hover:text-cyan-500 dark:border-white/8 dark:bg-slate-700/50 dark:text-slate-300 dark:group-hover:text-cyan-400">
                  {step.icon}
                </div>

                <h3 className="mb-2 text-base font-bold text-slate-950 dark:text-white">
                  {step.title}
                </h3>

                <p className="text-sm leading-7 text-slate-600 dark:text-slate-400">
                  {step.description}
                </p>
              </article>
            </Reveal>
          ))}
        </div>
      </Container>
    </section>
  );
}
