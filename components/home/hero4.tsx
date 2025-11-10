"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";

const books = [
  { src: "/assets/images/book-3.png", alt: "Book Cover 3" },
  { src: "/assets/images/book-4.png", alt: "Book Cover 4" },
  { src: "/assets/images/book-5.png", alt: "Book Cover 5" },
  { src: "/assets/images/book-6.png", alt: "Book Cover 6" },
];

const Hero4 = () => {
  return (
    <section
      id="books-gallery"
      aria-labelledby="books-heading"
      className="relative w-full overflow-hidden"
    >
      {/* Background: gradient mesh + subtle grid */}
      <div className="absolute inset-0 -z-20">
        <div className="absolute inset-0 bg-[radial-gradient(1200px_600px_at_20%_0%,rgba(198,161,91,0.25),transparent_60%),radial-gradient(1000px_600px_at_90%_80%,rgba(59,130,246,0.18),transparent_60%),linear-gradient(to_bottom,#fffaf3,#f6edd8,#efe1b8)]" />
        <div className="pointer-events-none absolute inset-0 opacity-[0.08] [background-size:36px_36px] [background-image:linear-gradient(to_right,#000_1px,transparent_1px),linear-gradient(to_bottom,#000_1px,transparent_1px)] mix-blend-multiply" />
      </div>

      <div className="relative mx-auto max-w-7xl px-6 lg:px-12 py-20 sm:py-24 md:py-28">
        {/* Heading */}
        <div className="text-center">
          <h2
            id="books-heading"
            className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-[#1a1a1a]"
          >
            Discover More by{" "}
            <span className="bg-gradient-to-r from-[#C6A15B] to-[#f59e0b] bg-clip-text text-transparent">
              Promise Hope
            </span>
          </h2>
          <p className="mt-4 max-w-2xl mx-auto text-base sm:text-lg text-gray-700">
            A growing collection of faith-filled books to strengthen hearts,
            awaken purpose, and inspire bold steps toward God-ordained
            greatness.
          </p>
        </div>

        {/* Books Grid */}
        <div className="mt-12 grid grid-cols-1 xs:grid-cols-2 md:grid-cols-4 gap-6 md:gap-7 lg:gap-8">
          {books.map((b, i) => (
            <div
              key={i}
              className={[
                "group relative rounded-3xl p-[1px] bg-gradient-to-b from-white/60 to-white/20",
                "shadow-[0_18px_50px_rgba(198,161,91,0.25)] hover:shadow-[0_26px_70px_rgba(198,161,91,0.35)]",
                "transition-all duration-500",
                // staggered layout for rhythm on md+ screens
                i % 2 === 1 ? "md:translate-y-4" : "md:-translate-y-2",
              ].join(" ")}
            >
              {/* gradient border via wrapper + inner glass card */}
              <div className="rounded-3xl bg-white/60 backdrop-blur-md">
                <div className="relative overflow-hidden rounded-2xl m-3">
                  <Image
                    src={b.src}
                    alt={b.alt}
                    width={600}
                    height={800}
                    className="w-full h-auto object-cover rounded-2xl transform transition-transform duration-500 group-hover:scale-[1.03]"
                    priority={i === 0}
                  />
                  {/* top glossy sweep */}
                  <div className="pointer-events-none absolute inset-0 rounded-2xl bg-gradient-to-t from-transparent via-white/10 to-transparent" />
                </div>
              </div>

              {/* glow aura */}
              <div
                aria-hidden
                className="absolute -inset-4 -z-10 rounded-[28px] bg-[radial-gradient(70%_60%_at_50%_100%,rgba(198,161,91,0.38)_0%,transparent_70%)] blur-2xl opacity-90"
              />

              {/* corner chip/badge (optional) */}
              <div className="absolute left-4 top-4 rounded-full bg-[#C6A15B]/10 px-3 py-1 text-[10px] font-semibold uppercase tracking-wider text-[#a0741f] ring-1 ring-[#C6A15B]/30">
                {i === 0
                  ? "New"
                  : i === 1
                  ? "Reader Favorite"
                  : i === 2
                  ? "Inspiring"
                  : "Hope & Healing"}
              </div>
            </div>
          ))}
        </div>

        {/* CTAs */}
        <div className="mt-14 flex flex-col sm:flex-row items-center justify-center gap-5 sm:gap-7">
          <Link href="/contact" className="inline-block">
            <span className="inline-flex items-center justify-center rounded-full bg-gradient-to-r from-[#C6A15B] to-[#f59e0b] px-8 sm:px-10 py-4 text-base sm:text-lg font-semibold text-white shadow-[0_12px_32px_rgba(198,161,91,0.4)] transition-all duration-300 hover:-translate-y-0.5 hover:shadow-[0_18px_44px_rgba(198,161,91,0.5)]">
              Invite Promise Hope to Speak
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
                className="ml-2"
              >
                <path d="M5 12h14" />
                <path d="m12 5 7 7-7 7" />
              </svg>
            </span>
          </Link>

          <button
            disabled
            className="inline-flex items-center hover:bg-black justify-center rounded-full px-8 sm:px-10 py-4 text-base sm:text-lg font-semibold text-[#C6A15B] shadow-[inset_0_0_0_1px_rgba(198,161,91,0.35)] bg-white/70 backdrop-blur-md hover:brightness-105 cursor-not-allowed"
          >
            Pre-Order the Book (Coming Soon)
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
              className="ml-2"
            >
              <path d="M5 12h14" />
              <path d="m12 5 7 7-7 7" />
            </svg>
          </button>
        </div>

        {/* subtle separator accent */}
        <div className="mt-12 flex items-center justify-center gap-2 text-[#C6A15B]/80">
          <span className="h-[1px] w-10 bg-[#C6A15B]/40" />
          <span className="text-sm tracking-wider uppercase">
            Inspired Reads
          </span>
          <span className="h-[1px] w-10 bg-[#C6A15B]/40" />
        </div>
      </div>
    </section>
  );
};

export default Hero4;
