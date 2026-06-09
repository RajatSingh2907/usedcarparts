import Image from "next/image";
import Link from "next/link";
import Container from "@/components/ui/Container";
import Reveal from "@/components/ui/Reveal";

export default function CTA() {
  return (
    <section className="relative overflow-hidden py-24">

      {/* Background */}
      <Image
        src="/optimized/bg-cta.webp"
        alt=""
        fill
        sizes="100vw"
        quality={70}
        className="pointer-events-none object-cover object-center opacity-92 dark:opacity-78"
      />
      <div className="absolute inset-0 bg-gradient-to-r from-white/35 via-white/5 to-white/18 dark:from-slate-950/58 dark:via-slate-950/12 dark:to-slate-950/35" />

      {/* Glow Effects */}
      <div className="absolute left-0 top-0 h-[500px] w-[500px] rounded-full bg-cyan-500/15 blur-[140px]" />
      <div className="absolute right-0 bottom-0 h-[500px] w-[500px] rounded-full bg-blue-500/10 blur-[140px]" />

      <Container className="relative z-10">

        <Reveal>
          <div className="relative overflow-hidden rounded-[32px] border border-white/75 bg-white/86 p-10 shadow-2xl shadow-slate-900/15 backdrop-blur-xl dark:border-white/12 dark:bg-slate-950/80 dark:shadow-black/30 md:p-16">

            <div className="mx-auto max-w-3xl text-center">

              {/* BADGE */}
              <div className="mb-6 inline-flex items-center rounded-full border border-cyan-200 bg-cyan-50 px-4 py-2 text-sm font-semibold text-cyan-700 dark:border-cyan-500/20 dark:bg-cyan-500/10 dark:text-cyan-300">
                OEM Parts • Free 48-State Shipping • Warranty Included
              </div>

              {/* HEADING */}
              <h2 className="text-4xl font-black leading-tight tracking-[-0.04em] text-slate-900 dark:text-white md:text-6xl">
                Need The Right Part?
                <span className="block bg-gradient-to-r from-cyan-500 via-blue-500 to-sky-700 bg-clip-text text-transparent">
                  Get Pricing & Availability Within Minutes.
                </span>
              </h2>

              {/* DESCRIPTION */}
              <p className="mx-auto mt-6 max-w-2xl text-lg leading-8 text-slate-600 dark:text-slate-300">
                Tell us your vehicle details and our specialists will locate the
                right OEM option with transparent pricing, confirmed warranty
                terms, and delivery guidance.
              </p>

              {/* BUTTONS */}
              <div className="mt-10 flex flex-col justify-center gap-4 sm:flex-row">

                {/* CALL BUTTON */}
                <a
                  href="tel:7705984665"
                  className="inline-flex h-14 items-center justify-center rounded-xl bg-gradient-to-r from-cyan-500 via-blue-500 to-sky-700 px-8 font-bold text-white shadow-lg shadow-cyan-500/25 transition hover:from-cyan-400 hover:via-blue-500 hover:to-sky-800"
                >
                  Call (770) 598-4665
                </a>

                {/* REQUEST QUOTE BUTTON */}
                <Link
                  href="/contact"
                  className="inline-flex h-14 items-center justify-center rounded-xl border border-slate-300 bg-white/60 px-8 font-semibold text-slate-900 backdrop-blur transition hover:bg-white dark:border-white/15 dark:bg-white/5 dark:text-white dark:hover:bg-white/10"
                >
                  Find My Part
                </Link>

              </div>

              {/* FEATURES */}
              <div className="mt-10 flex flex-wrap justify-center gap-6 text-sm font-semibold text-slate-600 dark:text-slate-300">

                <div>✓ OEM Quality Tested</div>
                <div>✓ Warranty Terms Confirmed</div>
                <div>✓ Free Contiguous 48-State Shipping</div>
                <div>✓ Real Fitment Support</div>

              </div>

            </div>
          </div>
        </Reveal>

      </Container>
    </section>
  );
}

