"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";

const Hero = () => {
  return (
    <section id="book-hero" className="relative overflow-hidden text-white">
      {/* Background: deep vignette + gold glow */}
      <div className="absolute inset-0 -z-20 bg-[#0E1013]" />
      <div className="absolute inset-0 -z-10 bg-[radial-gradient(80%_60%_at_20%_20%,rgba(198,161,91,0.25)_0%,transparent_55%),radial-gradient(60%_50%_at_90%_70%,rgba(251,191,36,0.18)_0%,transparent_60%)]" />
      {/* Soft diagonal light sweep */}
      <div className="pointer-events-none absolute -left-1/3 top-0 h-[120%] w-[120%] -rotate-6 bg-gradient-to-r from-transparent via-white/5 to-transparent blur-3xl" />

      <div className="relative mx-auto max-w-7xl px-6 lg:px-12 py-20 md:py-28 lg:py-32">
        <div className="grid grid-cols-1 md:grid-cols-2 items-center gap-12">
          {/* LEFT: Copy */}
          <div className="order-2 md:order-1 text-center md:text-left animate-slideIn">
            <span className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-4 py-1.5 text-xs sm:text-sm font-semibold tracking-wider">
              <span className="h-2 w-2 rounded-full bg-[#C6A15B]" />
              OUT NOW
            </span>

            <h1 className="mt-6 text-4xl sm:text-5xl lg:text-6xl font-extrabold leading-tight">
              The Way to{" "}
              <span className="bg-gradient-to-r from-[#C6A15B] to-[#f59e0b] bg-clip-text text-transparent font-serif">
                Greatness
              </span>
            </h1>

            <p className="mt-5 text-base sm:text-lg md:text-xl text-white/85 leading-relaxed max-w-xl mx-auto md:mx-0">
              A journey of faith, healing, and purpose through every season.
              Find strength in uncertainty, hope in the waiting, and grace to
              keep moving. Greatness isn’t found—it’s grown.
            </p>

            {/* one strong CTA only */}
            <div className="mt-8">
              <Link
                href=""
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Get the book"
                className="inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-[#C6A15B] to-[#f59e0b] px-10 py-4 text-lg font-semibold shadow-[0_12px_30px_rgba(198,161,91,0.35)] transition-all duration-300 hover:shadow-[0_16px_40px_rgba(251,191,36,0.35)] hover:-translate-y-0.5"
              >
                Get the Book
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="18"
                  height="18"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="transition-transform group-hover:translate-x-1"
                >
                  <path d="M5 12h14" />
                  <path d="m12 5 7 7-7 7" />
                </svg>
              </Link>
            </div>

            {/* micro-trust row */}
            <div className="mt-5 flex items-center justify-center md:justify-start gap-2 text-sm text-white/60">
              <div className="flex items-center gap-1">
                <span className="text-yellow-500">★★★★★</span>
              </div>
              <span className="text-yellow-600">
                Readers call it “deeply uplifting.”
              </span>
            </div>
          </div>

          {/* RIGHT: Book cover on luxe pedestal */}
          <div className="order-1 md:order-2 flex justify-center animate-slideInRight">
            <div className="relative w-full max-w-[360px] sm:max-w-[420px] md:max-w-[460px]">
              {/* base card */}
              <div className="relative aspect-[3/4] rounded-2xl bg-white/5 ring-1 ring-white/10 p-2 shadow-[0_24px_60px_rgba(0,0,0,0.45)]">
                <Image
                  src="/assets/images/book-1.png"
                  alt="The Way to Greatness book cover"
                  fill
                  sizes="(max-width: 640px) 80vw, (max-width: 1024px) 40vw, 36vw"
                  className="rounded-xl object-contain"
                  priority
                />
                {/* glass highlight */}
                <div className="pointer-events-none absolute inset-0 rounded-xl bg-gradient-to-tr from-white/8 via-transparent to-transparent" />
              </div>

              {/* golden underglow */}
              <div
                aria-hidden
                className="absolute -inset-6 -z-10 rounded-3xl bg-[radial-gradient(60%_50%_at_50%_100%,rgba(198,161,91,0.45)_0%,transparent_60%)] blur-2xl"
              />

              {/* pedestal */}
              <div className="mt-6 h-2 w-40 mx-auto rounded-full bg-gradient-to-r from-transparent via-white/20 to-transparent blur-sm" />
            </div>
          </div>
        </div>
      </div>

      {/* subtle top/bottom vignettes */}
      <div className="pointer-events-none absolute inset-x-0 top-0 h-24 bg-gradient-to-b from-black/40 to-transparent" />
      <div className="pointer-events-none absolute inset-x-0 bottom-0 h-24 bg-gradient-to-t from-black/30 to-transparent" />
    </section>
  );
};

export default Hero;
