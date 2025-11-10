"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";

const About1 = () => {
  return (
    <div className="bg-[#fffaf3] text-gray-800 overflow-hidden">
      {/* ===== HERO / INTRO ===== */}
      <section className="relative w-full overflow-hidden bg-gradient-to-b from-[#fffaf3] via-[#f8eed6] to-[#f4e3b8] py-20 sm:py-24 md:py-28">
        {/* soft background glows + pattern */}
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute inset-0 [background:radial-gradient(60%_60%_at_80%_20%,rgba(198,161,91,.25)_0%,transparent_70%),radial-gradient(50%_50%_at_20%_100%,rgba(251,191,36,.25)_0%,transparent_70%)]" />
          <div className="absolute inset-0 opacity-[0.05] [background-size:36px_36px] [background-image:linear-gradient(to_right,#000_1px,transparent_1px),linear-gradient(to_bottom,#000_1px,transparent_1px)] mix-blend-multiply" />
        </div>

        <div className="relative max-w-7xl mx-auto px-6 lg:px-12 grid grid-cols-1 lg:grid-cols-2 items-center gap-12">
          {/* Left: Portrait card */}
          <div className="flex justify-center lg:justify-start relative">
            <div className="relative w-full max-w-[380px] sm:max-w-[450px] md:max-w-[520px] lg:max-w-[560px] xl:max-w-[600px] group">
              <div className="relative rounded-[2rem] bg-white/90 p-3 shadow-[0_22px_60px_rgba(198,161,91,0.32)] ring-1 ring-[#C6A15B]/10 transition-all duration-500 group-hover:shadow-[0_28px_80px_rgba(198,161,91,0.42)]">
                <Image
                  src="/assets/images/promise-1.jpeg"
                  alt="Promise Hope portrait"
                  width={600}
                  height={760}
                  className="rounded-[1.5rem] object-cover w-full h-auto"
                  priority
                />
                {/* glossy sweep */}
                <div className="absolute inset-0 rounded-[1.5rem] bg-gradient-to-t from-transparent via-white/10 to-transparent pointer-events-none" />
              </div>
              {/* halo */}
              <div
                aria-hidden
                className="absolute -inset-6 rounded-[2.5rem] bg-[radial-gradient(60%_60%_at_50%_100%,rgba(198,161,91,0.45)_0%,transparent_70%)] blur-3xl -z-10"
              />
              {/* corner chip */}
              <div className="absolute left-3 top-3 rounded-full bg-[#C6A15B]/10 px-3 py-1 text-[10px] font-semibold uppercase tracking-wider text-[#8a641a] ring-1 ring-[#C6A15B]/30">
                Worship • Author • Speaker
              </div>
            </div>
          </div>

          {/* Right: Text */}
          <div className="text-center lg:text-left">
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-[Playfair_Display] leading-tight text-[#1a1a1a]">
              About{" "}
              <span className="bg-gradient-to-r from-[#C6A15B] to-[#f59e0b] bg-clip-text text-transparent">
                Promise Hope
              </span>
            </h1>

            <p className="mt-6 text-base sm:text-lg md:text-xl leading-relaxed font-[Inter] text-gray-700">
              Promise Hope is a gospel minister, songwriter, and author
              dedicated to helping others rise above pain, fear, and
              discouragement through the power of faith. Raised in the
              Mayukwayukwa refugee camp, her journey began amid struggle, loss,
              and uncertainty—yet even there, God planted a vision for worship,
              education, and a future shaped by purpose.
            </p>

            <p className="mt-4 text-base sm:text-lg md:text-xl leading-relaxed font-[Inter] text-gray-700">
              In 2022, she relocated to the United States to continue a path of
              healing, growth, and calling. Her voice—both in worship and in
              words—carries warmth, resilience, and conviction. She believes
              every life, regardless of its beginnings, holds divine
              greatness—revealed through perseverance, faith, and surrender to
              God’s will.
            </p>

            <p className="mt-4 text-base sm:text-lg md:text-xl leading-relaxed font-[Inter] text-gray-700">
              Her debut book,{" "}
              <span className="font-semibold text-[#C6A15B]">
                The Way to Greatness
              </span>
              , shares her testimony and lessons on identity, endurance, and
              healing. Through ministry and music, Promise reminds the weary
              that their story isn’t over—
              <span className="italic text-[#a67c00] font-semibold">
                God is still writing
              </span>
              .
            </p>

            {/* value badges */}
            <div className="mt-7 flex flex-wrap items-center justify-center lg:justify-start gap-2">
              {["Faith • Identity", "Healing • Hope", "Worship • Purpose"].map(
                (chip) => (
                  <span
                    key={chip}
                    className="inline-flex items-center rounded-full bg-white/70 px-4 py-1.5 text-sm font-medium text-[#8a641a] ring-1 ring-[#C6A15B]/30"
                  >
                    {chip}
                  </span>
                )
              )}
            </div>

            {/* CTA */}
            <div className="mt-8 flex flex-col sm:flex-row items-center gap-4 sm:gap-6 justify-center lg:justify-start">
              <Link href="/book" className="inline-block">
                <button className="inline-flex items-center justify-center rounded-full bg-gradient-to-r from-[#C6A15B] to-[#f59e0b] px-8 sm:px-10 py-3.5 text-base sm:text-lg font-semibold text-white shadow-[0_10px_30px_rgba(198,161,91,0.35)] hover:shadow-[0_14px_40px_rgba(198,161,91,0.5)] hover:-translate-y-0.5 transition-all duration-300">
                  Explore the Book
                </button>
              </Link>
              <Link href="/contact" className="inline-block">
                <button className="inline-flex items-center justify-center rounded-full bg-white text-[#C6A15B] ring-1 ring-[#C6A15B]/40 px-8 sm:px-10 py-3.5 text-base sm:text-lg font-semibold shadow-sm hover:brightness-105 transition-all duration-300 hover:bg-black">
                  Invite to Speak
                </button>
              </Link>
            </div>
          </div>
        </div>

        {/* quick facts strip */}
        <div className="relative max-w-7xl mx-auto px-6 lg:px-12 mt-14">
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
            {[
              { k: "Born of Resilience", v: "Mayukwayukwa Camp" },
              { k: "Debut Book", v: "The Way to Greatness" },
              { k: "Calling", v: "Worship • Teaching • Hope" },
            ].map(({ k, v }) => (
              <div
                key={k}
                className="rounded-2xl bg-white/80 backdrop-blur-md p-5 text-center ring-1 ring-[#C6A15B]/20 shadow-sm"
              >
                <div className="text-xs uppercase tracking-wider text-[#8a641a] font-semibold">
                  {k}
                </div>
                <div className="mt-1 text-lg font-bold text-[#1a1a1a]">{v}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ===== HIGHLIGHT QUOTE ===== */}
      <section className="relative py-12 sm:py-14 md:py-16">
        <div className="absolute inset-0 pointer-events-none [background:radial-gradient(60%_60%_at_50%_0%,rgba(198,161,91,0.18)_0%,transparent_70%)]" />
        <div className="relative max-w-5xl mx-auto px-6">
          <div className="rounded-3xl bg-white/85 backdrop-blur-md p-8 sm:p-10 ring-1 ring-[#C6A15B]/20 shadow-[0_10px_30px_rgba(198,161,91,0.22)]">
            <p className="text-center text-xl sm:text-2xl md:text-[26px] leading-relaxed font-[Playfair_Display] text-[#1a1a1a]">
              “Greatness begins where surrender meets faith. Your pain is not
              the end—it&apos;s the ground where God grows purpose.”
            </p>
            <p className="mt-4 text-center text-sm text-[#8a641a] font-semibold">
              — Promise Hope
            </p>
          </div>
        </div>
      </section>

      {/* ===== GALLERY ===== */}
      <section className="relative bg-white py-20 sm:py-24 md:py-28">
        <div className="absolute inset-0 pointer-events-none [background:radial-gradient(70%_60%_at_90%_10%,rgba(198,161,91,0.2)_0%,transparent_70%),radial-gradient(40%_50%_at_10%_80%,rgba(251,191,36,0.2)_0%,transparent_70%)]" />

        <div className="relative max-w-7xl mx-auto px-6 lg:px-12 text-center">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-[Playfair_Display] text-[#1a1a1a]">
            A Journey of{" "}
            <span className="bg-gradient-to-r from-[#C6A15B] to-[#f59e0b] bg-clip-text text-transparent">
              Faith & Transformation
            </span>
          </h2>

          <p className="mt-4 text-base sm:text-lg md:text-xl max-w-2xl mx-auto text-gray-700 font-[Inter]">
            Glimpses from worship, ministry, and milestones—moments that testify
            to hope, healing, and God’s faithful leading.
          </p>

          {/* Gallery Grid with subtle rhythm */}
          <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 md:gap-8 lg:gap-10">
            {[2, 8, 4, 5, 6, 7].map((num, i) => (
              <div
                key={num}
                className={[
                  "group relative overflow-hidden rounded-2xl",
                  "shadow-[0_10px_30px_rgba(198,161,91,0.22)] hover:shadow-[0_14px_40px_rgba(198,161,91,0.32)]",
                  "transition-all duration-500",
                  i % 3 === 1
                    ? "sm:translate-y-2"
                    : i % 3 === 2
                    ? "sm:-translate-y-1"
                    : "",
                ].join(" ")}
              >
                <Image
                  src={`/assets/images/promise-${num}.jpeg`}
                  alt={`Promise Hope ${num}`}
                  width={640}
                  height={800}
                  className="w-full h-auto object-cover transform transition-transform duration-700 group-hover:scale-[1.04]"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              </div>
            ))}
          </div>

          {/* Gallery CTA */}
          <div className="mt-12">
            <Link href="/contact" className="inline-block">
              <button className="inline-flex items-center justify-center rounded-full bg-gradient-to-r from-[#C6A15B] to-[#f59e0b] px-8 sm:px-10 py-3.5 text-base sm:text-lg font-semibold text-white shadow-[0_10px_30px_rgba(198,161,91,0.35)] hover:shadow-[0_14px_40px_rgba(198,161,91,0.5)] hover:-translate-y-0.5 transition-all duration-300">
                Invite Promise Hope
              </button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About1;
