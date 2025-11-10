"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";

const Hero3 = () => {
  return (
    <section
      id="about-author"
      className="relative w-full overflow-hidden bg-gradient-to-b from-[#fdfaf4] via-[#f9f2e2] to-[#f5e9c9] py-20 sm:py-24 md:py-28 text-gray-800"
    >
      {/* background gold glow */}
      <div className="absolute inset-0 pointer-events-none [background:radial-gradient(60%_60%_at_80%_10%,rgba(198,161,91,0.25)_0%,transparent_70%),radial-gradient(40%_40%_at_0%_100%,rgba(251,191,36,0.25)_0%,transparent_70%)]" />

      <div className="relative mx-auto max-w-7xl px-6 lg:px-12 grid grid-cols-1 lg:grid-cols-2 items-center gap-16">
        {/* LEFT: Author Image */}
        <div className="flex justify-center lg:justify-start relative">
          <div className="relative w-full max-w-[380px] sm:max-w-[460px] md:max-w-[520px] lg:max-w-[560px] xl:max-w-[600px] group transition-all duration-500">
            {/* image frame */}
            <div className="relative rounded-[2rem] bg-white p-3 shadow-[0_20px_60px_rgba(198,161,91,0.3)] group-hover:shadow-[0_30px_80px_rgba(198,161,91,0.45)] transition-all duration-500">
              <Image
                src="/assets/images/promise-1.jpeg"
                alt="Promise Hope portrait"
                width={600}
                height={700}
                className="rounded-[1.5rem] object-cover w-full h-auto group-hover:scale-[1.02] transition-transform duration-500"
                priority
              />
              {/* reflective highlight overlay */}
              <div className="absolute inset-0 rounded-[1.5rem] bg-gradient-to-t from-transparent via-white/15 to-transparent pointer-events-none" />
            </div>

            {/* glowing gold halo */}
            <div
              aria-hidden
              className="absolute -inset-8 rounded-[2.5rem] bg-[radial-gradient(60%_60%_at_50%_100%,rgba(198,161,91,0.45)_0%,transparent_70%)] blur-3xl -z-10"
            />
          </div>
        </div>

        {/* RIGHT: Author Text */}
        <div className="text-center lg:text-left">
          <h2 className="text-3xl sm:text-4xl md:text-5xl leading-tight font-[Playfair_Display] text-[#1a1a1a]">
            About the{" "}
            <span className="text-[#C6A15B] font-[Playfair_Display]">
              Author
            </span>
          </h2>

          <h3 className="mt-3 text-xl sm:text-2xl md:text-3xl font-semibold text-[#a17620]/90 tracking-wide font-[Inter]">
            Promise Hope
          </h3>

          <p className="mt-6 text-base sm:text-lg md:text-xl leading-relaxed text-gray-700 max-w-2xl mx-auto lg:mx-0 font-[Inter]">
            Promise Hope is a speaker, author, and worship minister dedicated to
            helping people discover purpose in the middle of pain. Her message
            is rooted in faith, resilience, and identity in Christ.{" "}
            <span className="font-semibold text-[#C6A15B]">
              Her book, <em>The Way to Greatness</em>,
            </span>{" "}
            teaches that transformation begins in the present moment — not
            yesterday, not tomorrow, but right here, where God meets us. Through
            her voice, her music, and her testimony, she inspires others to
            believe again, heal deeply, and walk boldly into their God-ordained
            greatness.
          </p>

          <div className="mt-10 flex justify-center lg:justify-start">
            <Link href="/about">
              <button className="inline-flex items-center justify-center rounded-full bg-gradient-to-r from-[#C6A15B] to-[#f59e0b] px-10 py-4 text-base sm:text-lg font-semibold text-white shadow-[0_10px_30px_rgba(198,161,91,0.35)] hover:shadow-[0_14px_40px_rgba(198,161,91,0.5)] hover:-translate-y-0.5 transition-all duration-300">
                Learn More
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
        </div>
      </div>

      {/* bottom soft fade */}
      <div className="pointer-events-none absolute inset-x-0 bottom-0 h-24 bg-gradient-to-t from-[#f5e9c9] to-transparent" />
    </section>
  );
};

export default Hero3;
