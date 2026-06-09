import { Gauge, Headset, ShieldCheck, Truck } from "lucide-react";

import Container from "@/components/ui/Container";
import Reveal from "@/components/ui/Reveal";

const trustItems = [
  {
    label: "Warranty Included",
    text: "Terms confirmed",
    icon: ShieldCheck,
  },
  {
    label: "Free Shipping",
    text: "Contiguous 48 states",
    icon: Truck,
  },
  {
    label: "Verified Quality",
    text: "OEM fitment support",
    icon: Gauge,
  },
  {
    label: "Fast Response",
    text: "Quote support",
    icon: Headset,
  },
];

export default function HeroTrustStrip() {
  return (
    <section className="relative overflow-hidden border-y border-slate-200 bg-white py-4 dark:border-white/8 dark:bg-slate-950 sm:py-5">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(14,165,233,0.10),transparent_42%)] dark:bg-[radial-gradient(circle_at_top,rgba(14,165,233,0.16),transparent_44%)]" />

      <Container className="relative">
        <Reveal>
          <div className="grid grid-cols-2 gap-3 lg:grid-cols-4">
            {trustItems.map((item) => {
              const Icon = item.icon;
              return (
                <div
                  key={item.text}
                  className="group flex items-center gap-2.5 rounded-2xl border border-slate-200 bg-slate-50/80 p-3 shadow-sm shadow-slate-900/5 transition-all duration-300 hover:-translate-y-0.5 hover:border-cyan-300/60 hover:bg-white hover:shadow-xl hover:shadow-cyan-500/10 dark:border-white/10 dark:bg-white/[0.04] dark:hover:border-cyan-300/35 dark:hover:bg-white/[0.07] sm:gap-3 sm:p-4"
                >
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-gradient-to-br from-cyan-500 via-blue-500 to-sky-700 text-white shadow-lg shadow-cyan-500/25 transition-transform duration-300 group-hover:scale-105 sm:h-11 sm:w-11">
                    <Icon size={18} />
                  </div>
                  <div className="min-w-0">
                    <p className="text-sm font-black leading-tight text-slate-950 dark:text-white sm:text-base">
                      {item.label}
                    </p>
                    <p className="mt-0.5 text-[10px] font-bold uppercase tracking-[0.08em] text-slate-500 dark:text-slate-400 sm:mt-1 sm:text-xs sm:tracking-[0.12em]">
                      {item.text}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </Reveal>
      </Container>
    </section>
  );
}
