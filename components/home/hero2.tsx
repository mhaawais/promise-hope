"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";

const Hero2 = () => {
  return (
    <section
      id="book-2"
      aria-labelledby="hero2-heading"
      className="relative w-full overflow-hidden bg-gradient-to-b from-[#0d1117] via-[#111827] to-[#0a0d10] text-white"
    >
      {/* background glow and accents */}
      <div className="absolute inset-0 pointer-events-none [background:radial-gradient(60%_70%_at_80%_20%,rgba(198,161,91,0.35)_0%,transparent_70%),radial-gradient(50%_60%_at_0%_80%,rgba(59,130,246,0.3)_0%,transparent_70%)]" />

      <div className="relative mx-auto grid max-w-7xl grid-cols-1 items-center gap-12 px-6 py-20 sm:px-8 md:py-28 lg:grid-cols-2 lg:gap-20">
        {/* IMAGE SIDE */}
        <div className="order-1 lg:order-1 flex justify-center relative">
          <div className="relative w-full max-w-[420px] sm:max-w-[480px] md:max-w-[540px] lg:max-w-[580px] xl:max-w-[620px]">
            <div className="relative rounded-3xl bg-[#1a1f27] shadow-[0_30px_80px_rgba(198,161,91,0.25)] p-3 ring-1 ring-white/10">
              <Image
                src="/assets/images/book-2.png"
                alt="The Way To Greatness Book Cover"
                width={600}
                height={700}
                className="w-full h-auto rounded-2xl object-cover"
                priority
              />
              {/* glossy overlay */}
              <div className="absolute inset-0 rounded-2xl bg-gradient-to-t from-transparent via-white/5 to-transparent pointer-events-none" />
            </div>

            {/* blue–gold aura */}
            <div
              aria-hidden
              className="absolute -inset-8 rounded-[40px] bg-[radial-gradient(70%_60%_at_50%_100%,rgba(198,161,91,0.4)_0%,transparent_70%),radial-gradient(70%_60%_at_50%_0%,rgba(59,130,246,0.3)_0%,transparent_80%)] blur-3xl -z-10"
            />
          </div>
        </div>

        {/* TEXT SIDE */}
        <div className="order-2 lg:order-2 text-center lg:text-left">
          <span className="inline-flex items-center gap-2 rounded-full bg-white/10 px-4 py-1.5 text-[12px] sm:text-sm font-semibold uppercase tracking-wider text-[#C6A15B] shadow-sm ring-1 ring-white/20">
            <span className="h-2 w-2 rounded-full bg-[#C6A15B]" />
            Inspiring True Story
          </span>

          <h1
            id="hero2-heading"
            className="mt-4 text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold leading-tight text-white"
          >
            THE WAY TO GREATNESS
            <span className="block text-xl sm:text-2xl md:text-3xl text-[#C6A15B]/90 font-medium mt-2">
              A Story of Redemption, Faith & Fire
            </span>
          </h1>

          <p className="mt-6 max-w-xl text-base sm:text-lg md:text-xl leading-relaxed text-gray-300 mx-auto lg:mx-0">
            From the harsh streets of New York to the light of spiritual
            awakening, this is more than a testimony—it’s a battle for the soul.
            Experience a gripping story of courage, divine calling, and a love
            that refused to die.
          </p>

          <p className="mt-5 text-sm font-semibold text-[#C6A15B] sm:text-base">
            — Promise Hope, Author
          </p>

          <div className="mt-8">
            <Link href={""} target="_blank" rel="noopener noreferrer">
              <button className="inline-flex items-center justify-center rounded-full bg-gradient-to-r from-[#C6A15B] to-[#f59e0b] px-10 py-4 text-base sm:text-lg font-semibold text-black hover:text-white transition-all duration-300 shadow-[0_10px_30px_rgba(198,161,91,0.35)] hover:shadow-[0_14px_40px_rgba(198,161,91,0.5)] hover:-translate-y-0.5">
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
                  className="ml-2 transition-transform group-hover:translate-x-1"
                >
                  <path d="M5 12h14" />
                  <path d="m12 5 7 7-7 7" />
                </svg>
              </button>
            </Link>
          </div>

          {/* tags */}
          <div className="mt-8 flex flex-wrap justify-center lg:justify-start gap-3 text-xs sm:text-sm text-gray-400">
            <span className="inline-flex items-center gap-2 rounded-full bg-[#1a1f27] px-3 py-1 ring-1 ring-white/10">
              Faith & Redemption
            </span>
            <span className="inline-flex items-center gap-2 rounded-full bg-[#1a1f27] px-3 py-1 ring-1 ring-white/10">
              Spiritual Awakening
            </span>
            <span className="inline-flex items-center gap-2 rounded-full bg-[#1a1f27] px-3 py-1 ring-1 ring-white/10">
              True Testimony
            </span>
          </div>
        </div>
      </div>

      {/* vignette for cinematic depth */}
      <div className="pointer-events-none absolute inset-x-0 bottom-0 h-32 bg-gradient-to-t from-black/40 to-transparent" />
    </section>
  );
};

export default Hero2;
