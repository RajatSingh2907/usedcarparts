"use client";

import { ArrowLeft, ArrowRight, Star } from "lucide-react";
import Image from "next/image";
import { useEffect, useMemo, useRef, useState } from "react";

import Container from "@/components/ui/Container";
import Reveal from "@/components/ui/Reveal";

const testimonials = [
  {
    quote:
      "Parts Central exceeded my expectations! They sourced a rare part for my vintage BMW that I couldn't find anywhere else. Arrived quickly, fit perfectly.",
    name: "Alex M.",
    location: "Portland, OR",
    initials: "AM",
    verified: true,
    stars: 5,
  },
  {
    quote:
      "The team found the exact OEM replacement I needed within hours. Communication was outstanding and the price was far better than any local shop.",
    name: "Mia R.",
    location: "Austin, TX",
    initials: "MR",
    verified: true,
    stars: 5,
  },
  {
    quote:
      "Ordered a hard-to-find transmission — arrived with a quality warranty, fit perfectly, and saved me over $400 versus the dealership quote.",
    name: "Carlos T.",
    location: "Jacksonville, FL",
    initials: "CT",
    verified: true,
    stars: 5,
  },
  {
    quote:
      "Their service made our repair project painless. We got a great part, a fair quote, and the exact support we needed from start to finish.",
    name: "Sophie L.",
    location: "Nashville, TN",
    initials: "SL",
    verified: true,
    stars: 5,
  },
  {
    quote:
      "Amazing experience from quote to delivery. The used OEM engine arrived quickly and worked exactly as promised. Will absolutely use them again.",
    name: "Derek H.",
    location: "Phoenix, AZ",
    initials: "DH",
    verified: true,
    stars: 5,
  },
];

export default function CustomerStories() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const sliderRef = useRef<HTMLDivElement | null>(null);

  const total = testimonials.length;
  const canScroll = useMemo(() => total > 1, [total]);

  useEffect(() => {
    if (!canScroll || isPaused) return;
    const interval = window.setInterval(() => {
      setCurrentIndex((i) => (i + 1) % total);
    }, 5500);
    return () => window.clearInterval(interval);
  }, [canScroll, isPaused, total]);

  useEffect(() => {
    const slider = sliderRef.current;
    const card = slider?.children[currentIndex] as HTMLElement | undefined;
    if (!slider || !card) return;
    slider.scrollTo({ left: card.offsetLeft, behavior: "smooth" });
  }, [currentIndex]);

  return (
    <section className="relative overflow-hidden border-t border-slate-200 bg-slate-50 py-24 dark:border-white/5 dark:bg-slate-950">
      <Image
        src="/optimized/bg-testimonials.webp"
        alt=""
        fill
        sizes="100vw"
        quality={70}
        className="pointer-events-none object-cover object-center opacity-58 dark:opacity-48"
      />
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-r from-white/74 via-white/48 to-white/64 dark:from-slate-950/78 dark:via-slate-950/56 dark:to-slate-950/70" />

      <Container className="relative z-10">
        <Reveal>
          <div className="mb-12 flex flex-col gap-6 rounded-3xl border border-white/70 bg-white/82 p-6 shadow-xl shadow-slate-900/10 backdrop-blur-md dark:border-white/10 dark:bg-slate-950/78 dark:shadow-black/25 md:flex-row md:items-end md:justify-between">
            <div>
              <span className="mb-4 inline-flex items-center gap-2 rounded-full border border-cyan-500/20 bg-cyan-500/8 px-3.5 py-1.5 text-xs font-semibold uppercase tracking-widest text-cyan-700 dark:text-cyan-400">
                Customer Stories
              </span>

              <h2 className="max-w-lg bg-gradient-to-r from-cyan-500 via-blue-500 to-sky-700 bg-clip-text text-3xl font-extrabold tracking-tight text-transparent sm:text-4xl dark:from-cyan-300 dark:via-blue-400 dark:to-sky-500">
                Trusted by Thousands of Car Owners
              </h2>

              <p className="mt-3 max-w-md text-base text-slate-600 dark:text-slate-400">
                Real feedback from customers who found exactly what they needed.
              </p>
            </div>

            {/* Navigation controls */}
            <div className="flex items-center gap-3 shrink-0">
              <span className="text-sm text-slate-500 dark:text-slate-500">
                {currentIndex + 1} / {total}
              </span>

              <button
                type="button"
                aria-label="Previous testimonial"
                onClick={() => setCurrentIndex((i) => (i - 1 + total) % total)}
                className="inline-flex h-10 w-10 items-center justify-center rounded-xl border border-slate-200 bg-white text-slate-600 transition-all duration-200 hover:border-slate-300 hover:bg-slate-100 hover:text-slate-950 dark:border-white/10 dark:bg-white/5 dark:text-slate-400 dark:hover:border-white/20 dark:hover:bg-white/10 dark:hover:text-white"
              >
                <ArrowLeft size={16} />
              </button>

              <button
                type="button"
                aria-label="Next testimonial"
                onClick={() => setCurrentIndex((i) => (i + 1) % total)}
                className="inline-flex h-10 w-10 items-center justify-center rounded-xl border border-slate-200 bg-white text-slate-600 transition-all duration-200 hover:border-slate-300 hover:bg-slate-100 hover:text-slate-950 dark:border-white/10 dark:bg-white/5 dark:text-slate-400 dark:hover:border-white/20 dark:hover:bg-white/10 dark:hover:text-white"
              >
                <ArrowRight size={16} />
              </button>
            </div>
          </div>
        </Reveal>

        {/* Slider */}
        <div
          ref={sliderRef}
          onMouseEnter={() => setIsPaused(true)}
          onMouseLeave={() => setIsPaused(false)}
          className="no-scrollbar flex snap-x snap-mandatory gap-5 overflow-x-auto pb-2 scroll-smooth"
        >
          {testimonials.map((t, i) => (
            <article
              key={`${t.name}-${i}`}
              className={[
                "relative min-w-[300px] max-w-[400px] snap-center overflow-hidden rounded-3xl border p-7 flex flex-col gap-5 transition-all duration-300",
                i === currentIndex
                  ? "border-cyan-500/35 bg-white shadow-2xl shadow-cyan-500/15 dark:bg-slate-800/88 dark:shadow-cyan-500/10"
                  : "border-slate-200 bg-white/86 hover:-translate-y-1 hover:border-cyan-300/45 hover:shadow-xl hover:shadow-slate-900/8 dark:border-white/8 dark:bg-slate-900/70",
              ].join(" ")}
            >
              <div className="pointer-events-none absolute -right-8 -top-8 text-[9rem] font-black leading-none text-cyan-500/[0.07] dark:text-cyan-300/[0.08]">
                “
              </div>
              <div className="pointer-events-none absolute inset-x-0 top-0 h-1 bg-gradient-to-r from-cyan-400 via-blue-500 to-sky-700 opacity-70" />

              {/* Stars */}
              <div className="relative flex gap-1">
                {Array.from({ length: t.stars }).map((_, si) => (
                  <Star key={si} size={14} className="fill-amber-400 text-amber-400" />
                ))}
              </div>

              <blockquote className="relative flex-1 text-sm font-medium leading-7 text-slate-700 dark:text-slate-200">
                &ldquo;{t.quote}&rdquo;
              </blockquote>

              {/* Author */}
              <div className="flex items-center gap-3 border-t border-slate-200 pt-4 dark:border-white/8">
                <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-gradient-to-br from-cyan-500 via-blue-500 to-sky-700 text-xs font-black text-white shadow-lg shadow-cyan-500/25">
                  {t.initials}
                </div>
                <div>
                  <p className="text-sm font-bold text-slate-950 dark:text-white">{t.name}</p>
                  <p className="text-xs text-slate-500">{t.location}</p>
                  {t.verified && (
                    <p className="mt-1 text-[10px] font-black uppercase tracking-[0.16em] text-emerald-600 dark:text-emerald-300">
                      ✓ Verified Customer
                    </p>
                  )}
                </div>
              </div>
            </article>
          ))}
        </div>

        {/* Dot indicators */}
        <div className="mt-6 flex justify-center gap-2">
          {testimonials.map((_, i) => (
            <button
              key={i}
              type="button"
              aria-label={`Go to testimonial ${i + 1}`}
              onClick={() => setCurrentIndex(i)}
              className={[
                "h-1.5 rounded-full transition-all duration-300",
                i === currentIndex ? "w-6 bg-cyan-500" : "w-1.5 bg-slate-300 hover:bg-slate-400 dark:bg-white/20 dark:hover:bg-white/35",
              ].join(" ")}
            />
          ))}
        </div>
      </Container>
    </section>
  );
}
