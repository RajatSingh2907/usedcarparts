import { ShieldCheck, Truck, Wrench, Headset } from "lucide-react";

import Container from "@/components/ui/Container";
import Reveal from "@/components/ui/Reveal";
import SectionHeading from "@/components/ui/SectionHeading";

const trustItems = [
  {
    title: "Quality-Tested Components",
    description: "Every OEM part is inspected for fitment integrity, condition quality, and dependable performance.",
    icon: ShieldCheck,
    accent: "from-cyan-400/25 to-cyan-500/5",
    iconColor: "text-cyan-300",
    border: "group-hover:border-cyan-300/40",
  },
  {
    title: "Warranty-Backed Confidence",
    description: "Drive with peace of mind using clear warranty coverage and transparent support expectations.",
    icon: Wrench,
    accent: "from-amber-400/25 to-amber-500/5",
    iconColor: "text-amber-300",
    border: "group-hover:border-amber-300/40",
  },
  {
    title: "Fast Nationwide Shipping",
    description: "Quick dispatch and trusted logistics support your repair timeline across the U.S.",
    icon: Truck,
    accent: "from-emerald-400/25 to-emerald-500/5",
    iconColor: "text-emerald-300",
    border: "group-hover:border-emerald-300/40",
  },
  {
    title: "Expert Parts Support",
    description: "Specialists help verify exact OEM match details before order approval to avoid mistakes.",
    icon: Headset,
    accent: "from-violet-400/25 to-violet-500/5",
    iconColor: "text-violet-300",
    border: "group-hover:border-violet-300/40",
  },
];

export default function Trust() {
  return (
    <section className="relative overflow-hidden bg-slate-950 py-24">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(34,197,94,0.12),transparent_40%),radial-gradient(circle_at_bottom_right,rgba(14,165,233,0.1),transparent_45%)]" />

      <Container className="relative z-10">
        <Reveal>
          <SectionHeading
            eyebrow="Why Drivers Choose Us"
            title="Trusted Source for Reliable Used OEM Parts"
            description="Built for value, precision, and post-purchase confidence at every stage of your repair journey."
            align="center"
            theme="dark"
            className="max-w-4xl"
          />
        </Reveal>

        <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {trustItems.map((item, i) => {
            const Icon = item.icon;
            return (
              <Reveal key={item.title} delay={i * 0.05}>
                <article className={`group relative flex h-full flex-col overflow-hidden rounded-2xl border border-white/12 bg-slate-900/80 p-6 transition-all duration-300 hover:-translate-y-1 ${item.border} hover:shadow-2xl`}>
                  <div className={`pointer-events-none absolute inset-0 opacity-0 transition-opacity duration-300 group-hover:opacity-100 bg-gradient-to-br ${item.accent}`} />
                  <div className="relative">
                    <div className="mb-5 inline-flex h-12 w-12 items-center justify-center rounded-xl border border-white/10 bg-slate-800">
                      <Icon size={22} className={item.iconColor} />
                    </div>
                    <h3 className="text-base font-bold text-white">{item.title}</h3>
                    <p className="mt-3 text-sm leading-7 text-slate-300">{item.description}</p>
                  </div>
                </article>
              </Reveal>
            );
          })}
        </div>
      </Container>
    </section>
  );
}
