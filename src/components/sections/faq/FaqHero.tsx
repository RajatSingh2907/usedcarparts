import { CircleHelp, Headset, PhoneCall, ShieldCheck, Truck } from "lucide-react";

import Button from "@/components/ui/Button";
import SubHero from "@/components/ui/SubHero";

const highlights = [
  { label: "Fitment Help", icon: ShieldCheck },
  { label: "Shipping Updates", icon: Truck },
  { label: "Fast Support", icon: Headset },
];

export default function FaqHero() {
  return (
    <SubHero
      eyebrow="Frequently Asked Questions"
      title="Clear answers before you order used OEM parts."
      description="Find quick guidance on fitment, part condition, ordering, shipping, warranty support, and returns from Parts Central of Georgia."
      actions={
        <>
          <Button href="/contact" size="lg">Ask A Question</Button>
          <a
            href="tel:7705984665"
            className="inline-flex h-13 items-center justify-center gap-2.5 rounded-xl border border-primary/20 bg-primary/10 px-8 text-base font-bold text-primary shadow-xl shadow-primary/10 transition-all duration-200 hover:-translate-y-0.5 hover:bg-primary/15 active:scale-[0.98] dark:border-cyan-300/25 dark:bg-cyan-300/10 dark:text-cyan-100 dark:shadow-cyan-950/30 dark:hover:bg-cyan-300/15"
          >
            <PhoneCall size={18} />
            Call Support
          </a>
        </>
      }
      rightSlot={
        <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-xl shadow-slate-300/20">
          <span className="inline-flex h-12 w-12 items-center justify-center rounded-md bg-primary/10 text-primary"><CircleHelp size={24} /></span>
          <h2 className="mt-5 text-2xl font-bold text-slate-900">Need a part matched?</h2>
          <p className="mt-3 text-sm leading-7 text-slate-600">Have your year, make, model, VIN, and part name ready. Our team can help verify compatibility before you approve a quote.</p>
          <div className="mt-6 grid gap-3 sm:grid-cols-3">
            {highlights.map((item) => {
              const Icon = item.icon;
              return (
                <div key={item.label} className="rounded-md border border-slate-200 bg-slate-50 p-4">
                  <Icon className="text-primary" size={20} />
                  <p className="mt-3 text-sm font-semibold text-slate-900">{item.label}</p>
                </div>
              );
            })}
          </div>
        </div>
      }
    />
  );
}
