import Image from "next/image";
import Link from "next/link";

import Container from "@/components/ui/Container";
import Reveal from "@/components/ui/Reveal";

const brands = [
  { name: "Acura", file: "acura.png" },
  { name: "Audi", file: "audi.png" },
  { name: "BMW", file: "bmw.png" },
  { name: "Buick", file: "buick.png" },
  { name: "Cadillac", file: "cadillac.png" },
  { name: "Chevrolet", file: "chevrolet.png" },
  { name: "Chrysler", file: "chrysler.png" },
  { name: "Dodge", file: "dodge.png" },
  { name: "Ford", file: "ford.png" },
  { name: "Honda", file: "honda.png" },
  { name: "Hyundai", file: "hyundai.png" },
  { name: "Jeep", file: "jeep.png" },
  { name: "Kia", file: "kia.png" },
  { name: "Lexus", file: "lexus.png" },
  { name: "Mazda", file: "mazda.png" },
  { name: "Mercedes", file: "mercedes.png" },
  { name: "Nissan", file: "nissan.png" },
  { name: "Subaru", file: "subaru.png" },
  { name: "Toyota", file: "toyota.png" },
  { name: "Volkswagen", file: "volkswagen.png" },
];

function MarqueeRow({ items, reverse = false }: { items: typeof brands; reverse?: boolean }) {
  const loopItems = [...items, ...items];
  return (
    <div className="relative overflow-hidden">
      <div className={reverse ? "marquee-track marquee-reverse" : "marquee-track"}>
        {loopItems.map((brand, index) => (
          <Link
            key={`${brand.name}-${index}`}
            href={`/used-auto-parts?make=${encodeURIComponent(brand.name)}#vehicle-selector`}
            className="group mx-2 flex min-w-[180px] items-center gap-3 rounded-2xl border border-slate-200 bg-white px-4 py-3 shadow-sm shadow-slate-900/5 transition-all duration-300 hover:border-cyan-300/70 hover:bg-slate-50 dark:border-white/15 dark:bg-slate-900/85 dark:hover:border-cyan-300/60 dark:hover:bg-slate-800"
          >
            <div className="flex h-11 w-11 items-center justify-center rounded-lg bg-white">
              <Image
                src={`/brands/${brand.file}`}
                alt={`${brand.name} logo`}
                width={30}
                height={30}
                className="h-8 w-8 object-contain"
              />
            </div>
            <p className="text-sm font-semibold text-slate-900 dark:text-white">{brand.name}</p>
          </Link>
        ))}
      </div>
    </div>
  );
}

export default function Brands() {
  const topRow = brands.slice(0, 10);
  const middleRow = brands.slice(10, 20);
  const bottomRow = brands.slice(10);

  return (
    <section className="border-t border-slate-200 bg-white py-20 dark:border-white/5 dark:bg-slate-950">
      {/* Subtle top glow */}
      <div className="mb-16 h-px w-full bg-gradient-to-r from-transparent via-cyan-500/30 to-transparent" />

      <Container>
        <Reveal>
          <div className="text-center mb-12">
            <span className="mb-4 inline-flex items-center gap-2 rounded-full border border-cyan-500/20 bg-cyan-500/8 px-3.5 py-1.5 text-xs font-semibold uppercase tracking-widest text-cyan-700 dark:text-cyan-400">
              Search by Brand
            </span>
            <h2
              className="bg-gradient-to-r from-cyan-500 via-blue-500 to-sky-700 bg-clip-text text-3xl font-extrabold tracking-tight text-transparent sm:text-4xl dark:from-cyan-300 dark:via-blue-400 dark:to-sky-500"
            >
              OEM Parts for Every Major Make
            </h2>
            <p className="mx-auto mt-3 max-w-xl text-base text-slate-600 dark:text-slate-400">
              Domestic and foreign vehicles covered. Click any brand to find parts instantly.
            </p>
          </div>
        </Reveal>

        <Reveal>
          <div className="space-y-4">
            <MarqueeRow items={topRow} />
            <MarqueeRow items={bottomRow} reverse />
            <MarqueeRow items={middleRow} />
          </div>
        </Reveal>

        {/* View all CTA */}
        <Reveal>
  <div className="mt-10 flex justify-center">
    <Link
      href="/used-auto-parts"
      className="group relative inline-flex items-center gap-3 rounded-full border border-cyan-300/20 bg-white/5 px-8 py-4 text-sm font-bold uppercase tracking-[0.18em] text-cyan-700 shadow-md backdrop-blur-xl transition-all duration-500 hover:-translate-y-1 hover:border-cyan-300/50 hover:bg-cyan-50 dark:border-white/10 dark:bg-white/5 dark:text-cyan-200 dark:hover:bg-white/10 dark:hover:text-white"
    >
      Browse all makes & models

      <svg
        className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
        strokeWidth={2}
        aria-hidden="true"
      >
        <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
      </svg>

      {/* hover shine effect (same style as your premium buttons) */}
      <span className="absolute inset-0 -translate-x-full bg-[linear-gradient(120deg,transparent,rgba(255,255,255,0.25),transparent)] opacity-0 transition-all duration-700 group-hover:translate-x-full group-hover:opacity-100" />
    </Link>
  </div>
</Reveal>
      </Container>
    </section>
  );
}
