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
    stars: 5,
  },
  {
    quote:
      "The team found the exact OEM replacement I needed within hours. Communication was outstanding and the price was far better than any local shop.",
    name: "Mia R.",
    location: "Austin, TX",
    initials: "MR",
    stars: 5,
  },
  {
    quote:
      "Ordered a hard-to-find transmission — arrived with a quality warranty, fit perfectly, and saved me over $400 versus the dealership quote.",
    name: "Carlos T.",
    location: "Jacksonville, FL",
    initials: "CT",
    stars: 5,
  },
  {
    quote:
      "Their service made our repair project painless. We got a great part, a fair quote, and the exact support we needed from start to finish.",
    name: "Sophie L.",
    location: "Nashville, TN",
    initials: "SL",
    stars: 5,
  },
  {
    quote:
      "Amazing experience from quote to delivery. The used OEM engine arrived quickly and worked exactly as promised. Will absolutely use them again.",
    name: "Derek H.",
    location: "Phoenix, AZ",
    initials: "DH",
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
        src="/bg_Images/pexels-107932638-32828577.jpg"
        alt=""
        fill
        sizes="100vw"
        className="pointer-events-none object-cover object-center opacity-90 dark:opacity-72"
      />
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-r from-white/48 via-white/12 to-white/28 dark:from-slate-950/65 dark:via-slate-950/18 dark:to-slate-950/45" />

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
                "min-w-[300px] max-w-[400px] snap-center rounded-2xl border p-7 flex flex-col gap-5 transition-all duration-300",
                i === currentIndex
                  ? "border-cyan-500/30 bg-white shadow-xl shadow-cyan-500/10 dark:bg-slate-800/80 dark:shadow-cyan-500/8"
                  : "border-slate-200 bg-white/80 hover:-translate-y-0.5 dark:border-white/8 dark:bg-slate-900/60",
              ].join(" ")}
            >
              {/* Stars */}
              <div className="flex gap-1">
                {Array.from({ length: t.stars }).map((_, si) => (
                  <Star key={si} size={14} className="fill-amber-400 text-amber-400" />
                ))}
              </div>

              <blockquote className="flex-1 text-sm leading-7 text-slate-600 dark:text-slate-300">
                &ldquo;{t.quote}&rdquo;
              </blockquote>

              {/* Author */}
              <div className="flex items-center gap-3 border-t border-slate-200 pt-4 dark:border-white/8">
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-gradient-to-br from-cyan-500 to-cyan-700 text-xs font-bold text-white">
                  {t.initials}
                </div>
                <div>
                  <p className="text-sm font-semibold text-slate-950 dark:text-white">{t.name}</p>
                  <p className="text-xs text-slate-500">{t.location}</p>
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
