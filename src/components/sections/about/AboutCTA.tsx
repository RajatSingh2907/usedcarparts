import Button from "@/components/ui/Button";
import Container from "@/components/ui/Container";
import Reveal from "@/components/ui/Reveal";

const primaryCtaClass =
  "h-14 items-center justify-center rounded-xl bg-gradient-to-r from-cyan-500 via-blue-500 to-sky-700 px-9 text-center text-base font-semibold leading-none uppercase tracking-[0.08em] text-white shadow-xl shadow-cyan-500/25 transition-transform duration-150 after:rounded-xl hover:from-cyan-400 hover:via-blue-500 hover:to-sky-800";

const secondaryCtaClass =
  "h-14 items-center justify-center rounded-xl border border-primary/20 bg-primary/10 px-9 text-center text-base font-semibold leading-none uppercase tracking-[0.08em] text-primary shadow-lg shadow-primary/10 transition-transform duration-150 hover:border-primary/30 hover:bg-primary/15 dark:border-cyan-300/25 dark:bg-cyan-300/10 dark:text-cyan-100";

export default function AboutCTA() {
  return (
    <section className="relative overflow-hidden bg-white py-18 text-slate-900 sm:py-20">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(14,165,233,0.12),transparent_45%),radial-gradient(circle_at_bottom_left,rgba(245,158,11,0.10),transparent_40%)]" />
      <Container>
        <Reveal className="relative">
          <div className="max-w-3xl">
            <p className="text-xs font-semibold uppercase tracking-[0.18em] text-primary">
              Ready To Find Your Part?
            </p>
            <h2 className="mt-4 text-3xl font-extrabold leading-tight sm:text-4xl">
              Get help matching the right used OEM part for your vehicle.
            </h2>
            <p className="mt-4 text-sm leading-7 text-slate-600 sm:text-base">
              Call our team or send your vehicle details and part request. We will help with fitment,
              pricing, warranty information, and shipping expectations.
            </p>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <Button href="/contact" variant="secondary" size="lg" className={secondaryCtaClass}>
                <span className="flex h-full items-center justify-center leading-none">Contact Us</span>
              </Button>
              <Button
                href="tel:8885283657"
                size="lg"
                className={primaryCtaClass}
              >
                <span className="flex h-full items-center justify-center leading-none">Call (888) 528-3657</span>
              </Button>
            </div>
          </div>
        </Reveal>
      </Container>
    </section>
  );
}

