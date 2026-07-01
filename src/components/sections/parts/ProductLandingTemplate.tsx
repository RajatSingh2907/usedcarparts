import Image from "next/image";
import {
  PhoneCall,
  Wrench,
  Clock3,
} from "lucide-react";

import Container from "@/components/ui/Container";
import MagneticButton from "@/components/ui/MagneticButton";
import VehicleSelectorForm from "@/components/forms/VehicleSelectorForm";
import MakeGrid from "@/components/sections/home/MakeGrid";

type FeatureBlock = {
  title: string;
  body: string;
};

type ProductLandingTemplateProps = {
  eyebrow: string;
  title: string;
  subtitle: string;
  heroImage: string;
  heroImageAlt: string;
  heroTintClass: string;
  sectionTitle: string;
  sectionLead: string;
  features: FeatureBlock[];
  partLabel: string;
  heroContentClassName?: string;
  heroFormClassName?: string;
  showBrandImages?: boolean;
};

const whyChooseUs = [
  {
    icon: Wrench,
    title: "Expert Fitment Help",
    text: "Our specialists help you match the exact part for your vehicle.",
  },
  {
    icon: Clock3,
    title: "Quick Response",
    text: "Get pricing and availability support from our team.",
  },
  {
    icon: PhoneCall,
    title: "Dedicated Support",
    text: "Real humans helping you throughout the process.",
  },
];

export default function ProductLandingTemplate({
  eyebrow,
  title,
  subtitle,
  heroImage,
  heroImageAlt,
  heroTintClass,
  sectionTitle,
  sectionLead,
  features,
  partLabel,
  heroContentClassName = "",
  heroFormClassName = "",
  showBrandImages = false,
}: ProductLandingTemplateProps) {
  const heroActions = (
    <>
      <MagneticButton
        href="#vehicle-selector"
        label="Find A Part Now"
      />

      <a
        href="tel:8885283657"
        className="inline-flex h-14 items-center justify-center gap-2 rounded-xl border border-white/25 bg-white/12 px-7 text-sm font-bold text-white shadow-[0_18px_42px_-22px_rgba(255,255,255,0.5)] backdrop-blur-md transition-all duration-300 hover:-translate-y-1 hover:border-cyan-200/50 hover:bg-white/18"
      >
        <PhoneCall size={18} />
        Call (888) 528-3657
      </a>
    </>
  );

  return (
    <>
      {/* HERO SECTION */}
      <section className="relative overflow-hidden bg-slate-950 text-white">
        {/* Background Image */}
        <div className="pointer-events-none absolute inset-0 opacity-95 dark:opacity-85">
          <Image
            src={heroImage}
            alt={heroImageAlt}
            fill
            className="object-cover"
            sizes="100vw"
            quality={72}
            priority
          />
        </div>

        {/* Overlay */}
        <div className={`absolute inset-0 ${heroTintClass} opacity-0`} />
        <div className="pointer-events-none absolute inset-0 bg-gradient-to-r from-slate-950/82 via-slate-950/52 to-slate-950/12" />
        <div className="pointer-events-none absolute inset-y-0 left-0 w-[72%] bg-[radial-gradient(ellipse_at_left,rgba(8,47,73,0.44),transparent_72%)]" />
        <div className="pointer-events-none absolute -left-20 top-1/2 h-[420px] w-[620px] -translate-y-1/2 rounded-full bg-cyan-500/10 blur-[130px]" />

        <Container className="relative z-10 px-6 py-10 sm:py-12 lg:flex lg:min-h-[calc(100svh-72px)] lg:items-center lg:px-4 lg:py-7">
          <div className="grid w-full gap-8 lg:grid-cols-[1.2fr_0.8fr] lg:items-center">
            {/* LEFT CONTENT */}
            <div className={`max-w-4xl pt-10 sm:pt-6 lg:pt-0 ${heroContentClassName}`}
            >
              <p className="mb-4 inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-4 py-2 text-xs font-black uppercase tracking-[0.22em] text-cyan-100 shadow-lg shadow-black/20 backdrop-blur-md">
                <span className="h-2 w-2 rounded-full bg-cyan-300 shadow-[0_0_18px_rgba(103,232,249,0.9)]" />
                {eyebrow}
              </p>

              <h1 className="max-w-4xl bg-gradient-to-r from-white via-cyan-100 to-sky-300 bg-clip-text text-[44px] font-black leading-none tracking-[-0.05em] text-transparent drop-shadow-[0_4px_16px_rgba(0,0,0,0.98)] sm:text-6xl lg:text-7xl">
                {title}
              </h1>

              <p className="mt-5 max-w-2xl text-base font-semibold leading-7 text-slate-100 drop-shadow-[0_2px_6px_rgba(0,0,0,0.95)] sm:text-lg">
                {subtitle}
              </p>

              <div className="mt-6 hidden flex-col gap-4 sm:flex-row lg:flex">
                {heroActions}
              </div>
            </div>

            {/* FORM */}
            <div id="vehicle-selector" className={`relative lg:ml-auto ${heroFormClassName}`}
            >
              <div className="mx-auto max-w-lg">
                <VehicleSelectorForm theme="dark" />
              </div>
            </div>

            <div className="flex flex-col gap-3 sm:flex-row lg:hidden [&_a]:w-full">
              {heroActions}
            </div>
          </div>
        </Container>
      </section>

      {/* FEATURES SECTION */}
      <section className="bg-slate-50 py-16 dark:bg-slate-900">
        <Container>
          <div className="max-w-3xl"
          >
            <h2 className="bg-gradient-to-r from-cyan-500 via-blue-500 to-sky-700 bg-clip-text text-3xl font-bold text-transparent sm:text-4xl dark:from-cyan-300 dark:via-blue-400 dark:to-sky-500">
              {sectionTitle}
            </h2>

            <p className="mt-5 text-lg leading-8 text-slate-600 dark:text-slate-300">
              {sectionLead}
            </p>
          </div>

          <div className="mt-12 grid gap-6 md:grid-cols-2">
            {features.map((feature) => (
              <article key={feature.title} className="rounded-3xl border border-slate-200 bg-white p-8 shadow-lg transition-all duration-300 hover:-translate-y-1 hover:shadow-2xl dark:border-white/10 dark:bg-slate-950"
              >
                <h3 className="text-2xl font-bold text-slate-900 dark:text-white">
                  {feature.title}
                </h3>

                <p className="mt-4 leading-7 text-slate-600 dark:text-slate-300">
                  {feature.body}
                </p>
              </article>
            ))}
          </div>
        </Container>
      </section>

      {/* WHY CHOOSE US */}
      <section className="bg-white py-16 dark:bg-slate-950">
        <Container>
          <div className="text-center">
            <h2 className="bg-gradient-to-r from-cyan-500 via-blue-500 to-sky-700 bg-clip-text text-3xl font-bold text-transparent sm:text-4xl dark:from-cyan-300 dark:via-blue-400 dark:to-sky-500">
              Why Customers Trust Us
            </h2>

            <p className="mx-auto mt-5 max-w-2xl text-lg text-slate-600 dark:text-slate-300">
              We focus on quality, reliability, and customer satisfaction with
              every order.
            </p>
          </div>

          <div className="mt-14 grid gap-6 md:grid-cols-3">
            {whyChooseUs.map((item) => {
              const Icon = item.icon;

              return (
                <div key={item.title} className="rounded-3xl border border-slate-200 bg-slate-50 p-8 text-center shadow-lg dark:border-white/10 dark:bg-slate-900"
                >
                  <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-2xl bg-cyan-500/10">
                    <Icon className="h-8 w-8 text-cyan-500" />
                  </div>

                  <h3 className="mt-6 text-xl font-bold text-slate-900 dark:text-white">
                    {item.title}
                  </h3>

                  <p className="mt-3 leading-7 text-slate-600 dark:text-slate-300">
                    {item.text}
                  </p>
                </div>
              );
            })}
          </div>
        </Container>
      </section>

      {/* BRANDS */}
      <MakeGrid
        partLabel={partLabel}
        showBrandImages={showBrandImages}
      />

      {/* FINAL CTA */}
      <section className="relative overflow-hidden bg-slate-50 py-20 text-slate-950 dark:bg-slate-950 dark:text-white">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(14,165,233,0.12),transparent_50%)] dark:bg-[radial-gradient(circle_at_top,rgba(14,165,233,0.2),transparent_50%)]" />

        <Container className="relative text-center">
          <div>
            <h2 className="bg-gradient-to-r from-cyan-500 via-blue-500 to-sky-700 bg-clip-text text-4xl font-extrabold text-transparent dark:from-cyan-300 dark:via-blue-400 dark:to-sky-500">
              Ready To Find Your Perfect Part?
            </h2>

            <p className="mx-auto mt-5 max-w-2xl text-lg leading-8 text-slate-600 dark:text-slate-300">
              Get started today with our expert support team and premium OEM
              inventory.
            </p>

            <div className="mt-10 flex flex-col justify-center gap-4 sm:flex-row">
              <MagneticButton
                href="#vehicle-selector"
                label="Request A Quote"
              />

              <MagneticButton
                href="tel:8885283657"
                label="Call Now"
                variant="outline"
              />
            </div>
          </div>
        </Container>
      </section>
    </>
  );
}

