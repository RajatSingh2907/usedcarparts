import Image from "next/image";
import Link from "next/link";

import Button from "@/components/ui/Button";
import Container from "@/components/ui/Container";
import Reveal from "@/components/ui/Reveal";
import SectionHeading from "@/components/ui/SectionHeading";

const parts = [
  {
    title: "Engine Assembly",
    description: "Quality used engine and transmission parts sold as complete assemblies.",
    image: "/parts/Engine_Assembly (2).png",
    href: "/used-engines",
  },
  {
    title: "Transmission",
    description: "Reliable used transmissions matched to your vehicle for smooth performance.",
    image: "/parts/Transmission.png",
    href: "/used-transmissions",
  },
  {
    title: "ABS Module",
    description: "OEM ABS modules inspected for compatibility and dependable braking control.",
    image: "/parts/ABS Module.png",
    href: "/used-auto-parts",
  },
  {
    title: "ABS System",
    description: "Quality used braking components ready for dependable daily driving.",
    image: "/parts/ABS System.png",
    href: "/used-auto-parts",
  },
  {
    title: "Spindle Knuckle - Front",
    description: "Supports stable steering geometry and suspension alignment integrity.",
    image: "/parts/spindle.png",
    href: "/used-auto-parts",
  },
  {
    title: "Head Light Assembly",
    description: "Improves nighttime visibility with tested OEM fit and durability.",
    image: "/parts/head_light_assembly.png",
    href: "/used-auto-parts",
  },
];

export default function QualityParts() {
  return (
    <section className="relative overflow-hidden bg-slate-950 py-22 text-white">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(34,197,94,0.18),transparent_45%),radial-gradient(circle_at_bottom_right,rgba(14,165,233,0.12),transparent_50%)]" />
      <div className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-white/20 to-transparent" />

      <Container className="relative">
        <Reveal>
          <SectionHeading
            eyebrow="Premium Used OEM Parts"
            title="Quality Used Auto Parts"
            description="Professionally sourced and inspected OEM components with fast shipping, warranty-backed confidence, and transparent pricing."
            align="center"
            theme="dark"
            className="max-w-4xl"
          />
        </Reveal>

        <div className="mt-12 grid gap-6 md:grid-cols-2 xl:grid-cols-3">
          {parts.map((part, index) => (
            <Reveal key={part.title} delay={index * 0.03}>
              <article className="group relative h-full overflow-hidden rounded-3xl border border-white/12 bg-slate-900/80 p-5 shadow-xl shadow-black/25 transition-all duration-300 hover:-translate-y-1 hover:border-emerald-300/45 hover:shadow-2xl hover:shadow-emerald-500/12">
                <div className="absolute inset-0 opacity-0 transition-opacity duration-300 group-hover:opacity-100 bg-[radial-gradient(circle_at_top,rgba(34,197,94,0.14),transparent_62%)]" />

                <div className="relative flex h-full flex-col">
                  <div className="relative mb-5 aspect-[4/3] overflow-hidden rounded-2xl border border-white/10 bg-white">
                    <Image
                      src={part.image}
                      alt={part.title}
                      fill
                      className="object-contain p-4 transition-transform duration-300 group-hover:scale-105"
                    />
                  </div>

                  <h3 className="text-xl font-bold text-white">{part.title}</h3>
                  <p className="mt-3 flex-1 text-sm leading-7 text-slate-300">{part.description}</p>

                  <Link
                    href={part.href}
                    className="mt-4 inline-flex items-center gap-2 text-sm font-semibold text-emerald-300 transition-colors hover:text-emerald-200"
                  >
                    View Details
                    <span aria-hidden="true">-&gt;</span>
                  </Link>
                </div>
              </article>
            </Reveal>
          ))}
        </div>

        <Reveal className="mt-10 flex justify-center">
          <Button href="/used-auto-parts" variant="primary" size="xl" className="rounded-full px-9 py-4 uppercase tracking-[0.08em]">
            View More Parts
          </Button>
        </Reveal>
      </Container>
    </section>
  );
}
