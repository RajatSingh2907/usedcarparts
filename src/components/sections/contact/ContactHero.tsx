import { Mail, MapPin, PhoneCall } from "lucide-react";

import Button from "@/components/ui/Button";
import SubHero from "@/components/ui/SubHero";

const quickActions = [
  { label: "Call our parts team", value: "(888) 338-2540", href: "tel:8883382540", icon: PhoneCall },
  { label: "Email support", value: "support@partscentral.us", href: "mailto:support@partscentral.us", icon: Mail },
  { label: "Visit our office", value: "11011 Richmond Ave Houston, TX 77042, USA", href: "https://www.google.com/maps/search/?api=1&query=11011+Richmond+Ave+Houston+TX+77042", icon: MapPin },
];

const primaryCtaClass =
  "h-14 items-center justify-center rounded-xl border border-primary/20 bg-primary/10 px-9 text-center text-base font-semibold leading-none uppercase tracking-[0.08em] text-primary shadow-xl shadow-primary/10 transition-all duration-200 after:rounded-xl hover:-translate-y-0.5 hover:bg-primary/15 active:scale-[0.98] dark:border-cyan-300/25 dark:bg-cyan-300/10 dark:text-cyan-100 dark:shadow-cyan-950/30 dark:hover:bg-cyan-300/15";

const secondaryCtaClass =
  "h-14 items-center justify-center rounded-xl bg-gradient-to-r from-cyan-500 via-blue-500 to-sky-700 px-9 text-center text-base font-semibold leading-none uppercase tracking-[0.08em] text-white shadow-lg shadow-cyan-500/25 transition-transform duration-150 hover:from-cyan-400 hover:via-blue-500 hover:to-sky-800";

export default function ContactHero() {
  return (
    <SubHero
      eyebrow="Contact Parts Central"
      title="Need the right used OEM part? Talk to our team."
      description="Send your vehicle details, call for quote help, or email us for compatibility checks, pricing, warranty terms, and shipping timelines."
      actions={
        <>
          <Button href="tel:8883382540" size="lg" className={primaryCtaClass}>
            <span className="flex h-full items-center justify-center leading-none">Call Now</span>
          </Button>
          <Button href="#contact-form" variant="secondary" size="lg" className={secondaryCtaClass}>
            <span className="flex h-full items-center justify-center leading-none text-white">Send A Message</span>
          </Button>
        </>
      }
      rightSlot={
        <div className="grid gap-4 md:grid-cols-1">
          {quickActions.map((item) => {
            const Icon = item.icon;
            return (
              <a key={item.label} href={item.href} className={item.href.startsWith("tel:") ? "group flex h-full gap-4 rounded-xl border border-primary/20 bg-primary/10 p-5 text-primary shadow-md shadow-primary/10 transition hover:-translate-y-0.5 hover:bg-primary/15 hover:shadow-lg dark:border-cyan-300/25 dark:bg-cyan-300/10 dark:text-cyan-100 dark:shadow-cyan-950/30 dark:hover:bg-cyan-300/15" : "group flex h-full gap-4 rounded-xl border border-slate-200 bg-white p-5 shadow-md shadow-slate-300/20 transition hover:-translate-y-0.5 hover:shadow-lg"}>
                <span className="inline-flex h-11 w-11 shrink-0 items-center justify-center rounded-md bg-primary/10 text-primary"><Icon size={20} /></span>
                <span>
                  <span className={item.href.startsWith("tel:") ? "block text-sm text-primary/75 dark:text-cyan-100/75" : "block text-sm text-slate-500"}>{item.label}</span>
                  <span className={item.href.startsWith("tel:") ? "mt-1 block break-words text-base font-bold text-primary dark:text-cyan-100" : "mt-1 block break-words text-base font-bold text-slate-900"}>{item.value}</span>
                </span>
              </a>
            );
          })}
        </div>
      }
    />
  );
}
