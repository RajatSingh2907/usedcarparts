import Container from "@/components/ui/Container";
import Reveal from "@/components/ui/Reveal";

const stats = [
  {
    value: "OEM",
    label: "Used Parts",
  },
  {
    value: "48 States",
    label: "Free Shipping",
  },
  {
    value: "7–8 Days",
    label: "Typical Delivery",
  },
  {
    value: "No Core",
    label: "Deposit Required",
  },
];

export default function AuthorityStats() {
  return (
    <section className="relative overflow-hidden bg-slate-950 py-8 text-white sm:py-10 lg:py-12">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(14,165,233,0.22),transparent_55%)]" />
      <div className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-cyan-300/50 to-transparent" />

      <Container className="relative">
        <Reveal>
          <div className="grid grid-cols-2 gap-3 sm:gap-4 lg:grid-cols-4">
            {stats.map((stat) => (
              <div
                key={stat.label}
                className="rounded-2xl border border-white/10 bg-white/[0.06] p-4 text-center shadow-2xl shadow-black/20 backdrop-blur-xl transition-all duration-300 hover:-translate-y-1 hover:border-cyan-300/35 hover:bg-white/[0.09] sm:rounded-3xl sm:p-6"
              >
                <p className="bg-gradient-to-r from-white via-cyan-100 to-sky-300 bg-clip-text text-3xl font-black tracking-[-0.04em] text-transparent sm:text-5xl">
                  {stat.value}
                </p>
                <p className="mt-2 text-[10px] font-black uppercase tracking-[0.14em] text-cyan-100/85 sm:mt-3 sm:text-xs sm:tracking-[0.2em]">
                  {stat.label}
                </p>
              </div>
            ))}
          </div>
        </Reveal>
      </Container>
    </section>
  );
}
