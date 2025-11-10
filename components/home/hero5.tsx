"use client";

import React from "react";

const Hero5 = () => {
  const testimonials = [
    {
      quote:
        "“The Way to Greatness changed the way I see pain and purpose. Promise Hope’s words gave me courage to heal and believe again.”",
      name: "— Sarah K.",
      title: "Reader & Worship Leader",
    },
    {
      quote:
        "“Every page felt like a conversation with God. A reminder that greatness begins right where you are.”",
      name: "— Michael D.",
      title: "Faith Mentor",
    },
    {
      quote:
        "“A beautifully written guide for anyone walking through uncertainty. Promise Hope writes with honesty and divine inspiration.”",
      name: "— Emily R.",
      title: "Author & Speaker",
    },
    {
      quote:
        "“The Way to Greatness reminded me that my story isn’t over. It’s filled with truth, hope, and transformation.”",
      name: "— Daniel P.",
      title: "Youth Pastor",
    },
  ];

  return (
    <section
      id="reviews"
      className="relative w-full overflow-hidden bg-gradient-to-b from-[#fffaf3] via-[#f9f2e2] to-[#f4e5b7] py-20 sm:py-24 md:py-28"
    >
      {/* background light pattern */}
      <div className="absolute inset-0 pointer-events-none [background:radial-gradient(70%_70%_at_80%_20%,rgba(198,161,91,0.2)_0%,transparent_70%),radial-gradient(50%_50%_at_20%_80%,rgba(251,191,36,0.2)_0%,transparent_70%)]" />

      <div className="relative mx-auto max-w-7xl px-6 lg:px-12 text-center">
        {/* <h2 className="text-3xl sm:text-4xl md:text-5xl text-[#1a1a1a] font-[Playfair_Display]">
          What Readers Say About{" "}
          <span className="bg-gradient-to-r from-[#C6A15B] to-[#f59e0b] bg-clip-text text-transparent">
            The Way to Greatness
          </span>
        </h2> */}
        <h2 className="font-serif relative text-center text-3xl sm:text-4xl md:text-5xl leading-tight text-[#1a1a1a] font-[Playfair_Display] tracking-wide">
          <span className="block mb-3 text-[#1a1a1a]/80 text-base sm:text-lg md:text-xl font-[Inter] font-medium">
            Voices of Transformation
          </span>
          What Readers Say About{" "}
          <span className="relative inline-block bg-gradient-to-r from-[#C6A15B] to-[#f59e0b] bg-clip-text text-transparent">
            The Way to Greatness
            <span
              aria-hidden
              className="absolute left-0 bottom-0 w-full h-[3px] bg-gradient-to-r from-[#C6A15B]/80 via-[#f59e0b]/70 to-transparent rounded-full mt-2"
            />
          </span>
          {/* Soft glow accent behind text */}
          <span
            aria-hidden
            className="absolute inset-0 -z-10 bg-[radial-gradient(80%_50%_at_50%_100%,rgba(198,161,91,0.15)_0%,transparent_70%)] blur-2xl opacity-80"
          />
        </h2>

        <p className="mt-3 text-gray-700 text-base sm:text-lg max-w-2xl mx-auto font-[Inter]">
          Real stories. Real impact. See how Promise Hope’s words are touching
          hearts and transforming lives around the world.
        </p>

        {/* Testimonials Grid */}
        <div className="mt-14 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-8 lg:gap-10 max-w-6xl mx-auto">
          {testimonials.map((t, i) => (
            <div
              key={i}
              className="relative bg-white/80 backdrop-blur-md rounded-2xl p-8 shadow-[0_15px_40px_rgba(198,161,91,0.25)] hover:shadow-[0_20px_50px_rgba(198,161,91,0.35)] transition-all duration-500"
            >
              {/* decorative quote mark */}
              <div className="absolute -top-5 left-6 text-[#C6A15B] text-6xl opacity-30 font-serif select-none">
                “
              </div>

              <p className="mt-4 text-lg leading-relaxed italic text-gray-800 font-[Inter]">
                {t.quote}
              </p>

              <p className="mt-6 text-right font-semibold text-[#C6A15B] font-[Inter]">
                {t.name}
              </p>
              <p className="text-right text-sm text-gray-600">{t.title}</p>
            </div>
          ))}
        </div>

        {/* CTA */}
        {/* <div className="mt-16 flex justify-center">
          <button className="inline-flex items-center justify-center rounded-full bg-gradient-to-r from-[#C6A15B] to-[#f59e0b] px-10 py-4 text-base sm:text-lg font-semibold text-white shadow-[0_10px_30px_rgba(198,161,91,0.35)] hover:shadow-[0_14px_40px_rgba(198,161,91,0.5)] hover:-translate-y-0.5 transition-all duration-300">
            Share Your Story
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
        </div> */}
      </div>
    </section>
  );
};

export default Hero5;
