import { Mail, PhoneCall } from "lucide-react";

import Container from "@/components/ui/Container";
import Reveal from "@/components/ui/Reveal";

export default function FaqCTA() {
  return (
    <section className="bg-white py-18 sm:py-20">
      <Container>
        <Reveal>
          <div className="grid gap-8 rounded-lg border border-border bg-white p-7 text-slate-950 shadow-xl shadow-slate-900/10 dark:bg-slate-900 dark:text-white dark:shadow-slate-900/15 sm:p-10 lg:grid-cols-[1fr_auto] lg:items-center">
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.18em] text-primary dark:text-cyan-300">
                Still Need Help?
              </p>
              <h2 className="mt-3 max-w-2xl text-3xl font-bold leading-tight sm:text-4xl">
                Send us your vehicle details and part request.
              </h2>
              <p className="mt-4 max-w-2xl text-sm leading-7 text-slate-600 dark:text-slate-300 sm:text-base">
                Our team can help confirm fitment, quote available inventory, and explain shipping
                or warranty details before you order.
              </p>
            </div>

            <div className="flex flex-col gap-3 sm:flex-row lg:flex-col">
              <a
                href="tel:7705984665"
                className="inline-flex h-13 items-center justify-center gap-2.5 rounded-xl border border-primary/20 bg-primary/10 px-8 text-base font-bold text-primary shadow-xl shadow-primary/10 transition-all duration-200 hover:-translate-y-0.5 hover:bg-primary/15 active:scale-[0.98] dark:border-cyan-300/25 dark:bg-cyan-300/10 dark:text-cyan-100 dark:shadow-cyan-950/30 dark:hover:bg-cyan-300/15"
              >
                <PhoneCall size={18} />
                Call Now
              </a>
              <a
                href="mailto:delpaenterprise@gmail.com"
                className="inline-flex h-13 items-center justify-center gap-2.5 rounded-xl border border-primary/30 bg-primary px-8 text-base font-bold text-white shadow-lg shadow-primary/25 transition-all duration-200 hover:-translate-y-0.5 hover:border-primary-dark hover:bg-primary-dark hover:shadow-xl active:scale-[0.98] dark:border-cyan-300/20 dark:bg-primary dark:text-white"
              >
                <Mail size={18} />
                Email Us
              </a>
            </div>
          </div>
        </Reveal>
      </Container>
    </section>
  );
}

