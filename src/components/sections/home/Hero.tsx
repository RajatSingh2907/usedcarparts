import Image from "next/image";
import MagneticButton from "@/components/ui/MagneticButton";
import VehicleSelectorForm from "@/components/forms/VehicleSelectorForm";
import Container from "@/components/ui/Container";

const heading = "Premium Quality Used OEM Car Parts";

export default function Hero() {
  const heroActions = (
    <>
      <MagneticButton
        href="#vehicle-selector"
        label="Find A Part Now"
      />

      <a
        href="tel:7705984665"
        className="inline-flex h-14 items-center justify-center gap-2 rounded-xl border border-white/25 bg-white/12 px-7 text-sm font-bold !text-white shadow-[0_18px_42px_-22px_rgba(255,255,255,0.5)] backdrop-blur-md transition-all duration-300 hover:-translate-y-1 hover:border-cyan-200/50 hover:bg-white/18 [&_*]:!text-white"
      >
        <svg
          className="h-5 w-5"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          strokeWidth={2}
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
          />
        </svg>

        Call (770) 598-4665
      </a>
    </>
  );

  return (
    <section
      className="relative overflow-hidden bg-slate-50 dark:bg-slate-950"
    >
      {/* Background Image */}
      <div className="absolute inset-0">
        <Image
          src="/optimized/hero-home.webp"
          alt="OEM Used Auto Parts"
          fill
          priority
          sizes="100vw"
          quality={72}
          className="object-cover opacity-95 dark:opacity-85"
        />
      </div>

      {/* Overlay */}
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-r from-slate-950/78 via-slate-950/48 to-slate-950/8 dark:from-slate-950/82 dark:via-slate-950/52 dark:to-slate-950/12" />
      <div className="pointer-events-none absolute inset-y-0 left-0 w-[72%] bg-[radial-gradient(ellipse_at_left,rgba(8,47,73,0.42),transparent_72%)]" />

      {/* Glow */}
      <div className="pointer-events-none absolute -left-20 top-1/2 h-[420px] w-[620px] -translate-y-1/2 rounded-full bg-cyan-500/10 blur-[130px]" />

      <Container className="relative z-10 px-6 py-10 sm:py-12 lg:flex lg:min-h-[calc(100svh-72px)] lg:items-center lg:px-4 lg:py-7">
        <div className="grid w-full gap-8 lg:grid-cols-[1.2fr_0.8fr] lg:items-center">
          {/* Left Side */}
          <div className="max-w-4xl pt-10 sm:pt-6 lg:pt-0">
            {/* Trust Badge */}
            {/* <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-cyan-500/20 bg-cyan-500/10 px-4 py-2 text-xs font-semibold uppercase tracking-wider text-cyan-600 dark:text-cyan-300">
              <span className="h-2 w-2 rounded-full bg-cyan-500" />
              Premium OEM Auto Parts
            </div> */}

            {/* Heading */}
            <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-4 py-2 text-xs font-black uppercase tracking-[0.22em] text-cyan-100 shadow-lg shadow-black/20 backdrop-blur-md">
              <span className="h-2 w-2 rounded-full bg-cyan-300 shadow-[0_0_18px_rgba(103,232,249,0.9)]" />
              Premium Used OEM Auto Parts
            </div>

            <h1 className="max-w-4xl bg-gradient-to-r from-white via-cyan-100 to-sky-300 bg-clip-text text-[44px] font-black leading-none tracking-[-0.05em] text-transparent drop-shadow-[0_4px_16px_rgba(0,0,0,0.98)] sm:text-6xl lg:text-7xl">
              {heading}
            </h1>

            {/* Description */}
            <p className="mt-5 max-w-2xl text-base font-semibold leading-7 text-slate-100 drop-shadow-[0_2px_6px_rgba(0,0,0,0.95)] sm:text-lg">
              Affordable, trusted replacements for every make and model with
              fitment support, clear quote details, and shipping guidance.
            </p>

            {/* Trust Stats */}
            <div className="mt-6 grid max-w-2xl grid-cols-3 gap-3 sm:flex sm:flex-wrap sm:gap-6">
              <div>
                <div className="text-xl font-black text-white drop-shadow-[0_2px_5px_rgba(0,0,0,0.95)] sm:text-2xl">
                  OEM
                </div>
                <div className="text-xs font-semibold text-slate-200 drop-shadow-[0_2px_4px_rgba(0,0,0,0.95)] sm:text-sm">
                  Quality Parts
                </div>
              </div>

              <div>
                <div className="text-xl font-black text-white drop-shadow-[0_2px_5px_rgba(0,0,0,0.95)] sm:text-2xl">
                  Warranty
                </div>
                <div className="text-xs font-semibold text-slate-200 drop-shadow-[0_2px_4px_rgba(0,0,0,0.95)] sm:text-sm">
                  Terms Confirmed
                </div>
              </div>

              <div>
                <div className="text-xl font-black text-white drop-shadow-[0_2px_5px_rgba(0,0,0,0.95)] sm:text-2xl">
                  Free
                </div>
                <div className="text-xs font-semibold text-slate-200 drop-shadow-[0_2px_4px_rgba(0,0,0,0.95)] sm:text-sm">
                  48-State Shipping
                </div>
              </div>
            </div>

            {/* Buttons */}
            <div className="mt-7 hidden flex-wrap gap-4 lg:flex">
              {heroActions}
            </div>
          </div>

          {/* Right Side Form */}
          <div
            id="vehicle-selector"
            className="relative lg:ml-auto"
          >
            <div className="absolute inset-0 rounded-[32px] bg-cyan-500/20 blur-3xl" />

            <div className="relative mx-auto max-w-lg">
              <VehicleSelectorForm theme="dark" />
            </div>
          </div>

          {/* Mobile Buttons */}
          <div className="flex flex-col gap-3 lg:hidden [&_a]:w-full">
            {heroActions}
          </div>
        </div>
      </Container>
    </section>
  );
}
