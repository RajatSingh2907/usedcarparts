import { ShieldCheck, Truck, Search } from "lucide-react";

import Container from "@/components/ui/Container";
import Reveal from "@/components/ui/Reveal";
import SectionHeading from "@/components/ui/SectionHeading";

const services = [
  {
    title: "60-Day Warranty",
    description:
      "Coverage on most eligible parts with clear support terms that protect your repair investment.",
    bullets: [
      "Warranty available on most quoted components",
      "Extended options offered where applicable",
    ],
    icon: ShieldCheck,
    badge: "Coverage",
    badgeColor: "text-emerald-300 bg-emerald-500/12 border-emerald-400/30",
    border: "hover:border-emerald-300/40",
  },
  {
    title: "Free Shipping",
    description:
      "Reliable dispatch and nationwide delivery designed for speed, safety, and transparent updates.",
    bullets: [
      "Free shipping across the contiguous 48 states",
      "Full U.S. coverage with carrier coordination",
    ],
    icon: Truck,
    badge: "Nationwide",
    badgeColor: "text-cyan-300 bg-cyan-500/12 border-cyan-400/30",
    border: "hover:border-cyan-300/40",
  },
  {
    title: "Search All Brands",
    description:
      "Domestic and imported inventory support with broad OEM match coverage across major makes and models.",
    bullets: [
      "Coverage for foreign and domestic vehicles",
      "High-availability parts sourcing network",
    ],
    icon: Search,
    badge: "All Makes",
    badgeColor: "text-amber-300 bg-amber-500/12 border-amber-400/30",
    border: "hover:border-amber-300/40",
  },
];

export default function Services() {
  return (
    <section className="relative overflow-hidden border-t border-slate-200 bg-slate-50 py-24 dark:border-white/8 dark:bg-slate-950">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(14,165,233,0.08),transparent_42%),radial-gradient(circle_at_bottom_left,rgba(34,197,94,0.08),transparent_40%)] dark:bg-[radial-gradient(circle_at_top_right,rgba(14,165,233,0.12),transparent_42%),radial-gradient(circle_at_bottom_left,rgba(34,197,94,0.1),transparent_40%)]" />

      <Container className="relative">
        <Reveal>
          <SectionHeading
            eyebrow="Our Services"
            title={
              <span className="bg-gradient-to-r from-cyan-500 via-blue-500 to-sky-700 bg-clip-text text-transparent dark:from-cyan-300 dark:via-blue-400 dark:to-sky-500">
                Benefits Built for Speed, Trust, and Fitment Confidence
              </span>
            }
            description="Everything from sourcing to delivery is designed to reduce uncertainty and move your repair forward faster."
            align="center"
            className="max-w-4xl"
          />
        </Reveal>

        <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {services.map((service, i) => {
            const Icon = service.icon;
            return (
              <Reveal key={service.title} delay={i * 0.07}>
                <article className={`group relative flex h-full flex-col overflow-hidden rounded-2xl border border-slate-200 bg-white p-7 shadow-sm shadow-slate-900/5 transition-all duration-300 hover:-translate-y-1 dark:border-white/12 dark:bg-slate-900/80 ${service.border} hover:shadow-2xl`}>
                  <div className="mb-6 flex items-start justify-between gap-3">
                    <div className="inline-flex h-12 w-12 items-center justify-center rounded-xl border border-slate-200 bg-slate-50 text-slate-700 dark:border-white/12 dark:bg-slate-800 dark:text-slate-200">
                      <Icon size={22} />
                    </div>
                    <span className={`inline-flex items-center rounded-full border px-2.5 py-1 text-xs font-semibold ${service.badgeColor}`}>
                      {service.badge}
                    </span>
                  </div>

                  <h3 className="text-xl font-bold text-slate-950 dark:text-white">{service.title}</h3>
                  <p className="mt-3 text-sm leading-7 text-slate-600 dark:text-slate-300">{service.description}</p>

                  <ul className="mt-6 space-y-2.5">
                    {service.bullets.map((bullet) => (
                      <li key={bullet} className="flex items-start gap-2.5 text-sm text-slate-600 dark:text-slate-300">
                        <svg className="mt-0.5 h-4 w-4 shrink-0 text-emerald-300" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5} aria-hidden="true">
                          <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                        </svg>
                        {bullet}
                      </li>
                    ))}
                  </ul>
                </article>
              </Reveal>
            );
          })}
        </div>
      </Container>
    </section>
  );
}
