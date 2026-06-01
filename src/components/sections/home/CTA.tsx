import Link from "next/link";
import Container from "@/components/ui/Container";
import Reveal from "@/components/ui/Reveal";

export default function CTA() {
  return (
    <section className="relative overflow-hidden py-24">

      {/* Background */}
      <div className="absolute inset-0 bg-white dark:bg-slate-950" />

      {/* Glow Effects */}
      <div className="absolute left-0 top-0 h-[500px] w-[500px] rounded-full bg-cyan-500/15 blur-[140px]" />
      <div className="absolute right-0 bottom-0 h-[500px] w-[500px] rounded-full bg-blue-500/10 blur-[140px]" />

      <Container className="relative z-10">

        <Reveal>
          <div className="relative overflow-hidden rounded-[32px] border border-slate-200 bg-white/70 p-10 backdrop-blur-xl dark:border-white/10 dark:bg-white/[0.03] md:p-16">

            <div className="mx-auto max-w-3xl text-center">

              {/* BADGE */}
              <div className="mb-6 inline-flex items-center rounded-full border border-cyan-200 bg-cyan-50 px-4 py-2 text-sm font-semibold text-cyan-700 dark:border-cyan-500/20 dark:bg-cyan-500/10 dark:text-cyan-300">
                OEM Parts • Fast Shipping • Warranty Included
              </div>

              {/* HEADING */}
              <h2 className="text-4xl font-black leading-tight text-slate-900 dark:text-white md:text-5xl">
                Need The Right Part
                <span className="block bg-gradient-to-r from-cyan-500 to-blue-500 bg-clip-text text-transparent">
                  Fast?
                </span>
              </h2>

              {/* DESCRIPTION */}
              <p className="mx-auto mt-6 max-w-2xl text-lg leading-8 text-slate-600 dark:text-slate-300">
                Tell us your vehicle details and our specialists will help you
                find the exact OEM replacement part with transparent pricing and
                nationwide delivery.
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
                  Request Quote
                </Link>

              </div>

              {/* FEATURES */}
              <div className="mt-10 flex flex-wrap justify-center gap-6 text-sm text-slate-600 dark:text-slate-400">

                <div>✓ OEM Quality</div>
                <div>✓ Tested Parts</div>
                <div>✓ Fast Shipping</div>
                <div>✓ Warranty Included</div>

              </div>

            </div>
          </div>
        </Reveal>

      </Container>
    </section>
  );
}
