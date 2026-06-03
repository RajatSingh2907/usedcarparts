import { BadgeCheck, Building2, MapPinned } from "lucide-react";

import Container from "@/components/ui/Container";
import Reveal from "@/components/ui/Reveal";

const items = [
  {
    icon: Building2,
    text: "Serving repair shops, dealerships, and everyday drivers",
  },
  {
    icon: MapPinned,
    text: "OEM parts support across the contiguous United States",
  },
  {
    icon: BadgeCheck,
    text: "Domestic, import, luxury, and performance vehicle coverage",
  },
];

export default function MiniAuthorityStrip() {
  return (
    <section className="relative overflow-hidden bg-slate-950 py-6 text-white">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(14,165,233,0.18),transparent_58%)]" />
      <div className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-cyan-300/45 to-transparent" />
      <div className="pointer-events-none absolute inset-x-0 bottom-0 h-px bg-gradient-to-r from-transparent via-cyan-300/25 to-transparent" />

      <Container className="relative">
        <Reveal>
          <div className="grid gap-3 md:grid-cols-3">
            {items.map((item) => {
              const Icon = item.icon;
              return (
                <div
                  key={item.text}
                  className="flex items-center gap-3 rounded-2xl border border-white/10 bg-white/[0.05] px-4 py-3 text-sm font-semibold text-slate-100 shadow-xl shadow-black/10 backdrop-blur"
                >
                  <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-cyan-400/12 text-cyan-200 ring-1 ring-cyan-200/20">
                    <Icon size={18} />
                  </span>
                  <span>{item.text}</span>
                </div>
              );
            })}
          </div>
        </Reveal>
      </Container>
    </section>
  );
}
