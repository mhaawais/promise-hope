"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";

const Book1 = () => {
  return (
    <div className="bg-[#fffaf3] text-gray-800 overflow-hidden font-[Inter]">
      {/* ===== HERO SECTION ===== */}
      <section className="relative w-full overflow-hidden bg-gradient-to-b from-[#fffaf3] via-[#f8eed6] to-[#f4e3b8] py-20 sm:py-24 md:py-28">
        {/* background glow */}
        <div className="absolute inset-0 pointer-events-none [background:radial-gradient(60%_60%_at_80%_20%,rgba(198,161,91,0.25)_0%,transparent_70%),radial-gradient(50%_50%_at_20%_100%,rgba(251,191,36,0.25)_0%,transparent_70%)]" />

        <div className="relative max-w-7xl mx-auto px-6 lg:px-12 grid grid-cols-1 lg:grid-cols-2 items-center gap-12">
          {/* LEFT - Book Cover */}
          <div className="flex justify-center lg:justify-start relative">
            <div className="relative group w-full max-w-[400px] sm:max-w-[480px] md:max-w-[520px] lg:max-w-[560px]">
              <div className="relative rounded-[1.8rem] bg-white p-3 shadow-[0_25px_70px_rgba(198,161,91,0.35)] ring-1 ring-[#C6A15B]/10 transition-all duration-500 group-hover:shadow-[0_30px_90px_rgba(198,161,91,0.5)]">
                <Image
                  src="/assets/images/book-1.png"
                  alt="The Way to Greatness Book Cover"
                  width={600}
                  height={700}
                  className="rounded-[1.4rem] object-cover w-full h-auto transition-transform duration-700 group-hover:scale-[1.02]"
                  priority
                />
                <div className="absolute inset-0 rounded-[1.4rem] bg-gradient-to-t from-transparent via-white/10 to-transparent pointer-events-none" />
              </div>
              <div
                aria-hidden
                className="absolute -inset-6 rounded-[2.5rem] bg-[radial-gradient(70%_60%_at_50%_100%,rgba(198,161,91,0.45)_0%,transparent_70%)] blur-3xl -z-10"
              />
            </div>
          </div>

          {/* RIGHT - Book Description */}
          <div className="text-center lg:text-left">
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-[Playfair_Display] leading-tight text-[#1a1a1a]">
              The Way to{" "}
              <span className="bg-gradient-to-r from-[#C6A15B] to-[#f59e0b] bg-clip-text text-transparent">
                Greatness
              </span>
            </h1>
            <p className="mt-6 text-lg md:text-xl leading-relaxed text-gray-700">
              <span className="font-semibold text-[#C6A15B]">
                The Way to Greatness
              </span>{" "}
              is not just a book — it’s an awakening. Written from the depths of
              faith and resilience, Promise Hope invites readers to rise above
              pain, fear, and defeat through unshakable trust in God. Her story
              of transformation proves that the hardest seasons often hide the
              seeds of greatness.
            </p>
            <p className="mt-4 text-lg md:text-xl leading-relaxed text-gray-700">
              Through powerful storytelling and spiritual depth, each chapter
              guides you through principles of healing, perseverance, and
              identity — helping you rediscover who you are and whose you are.
              Every page becomes a whisper of hope for those ready to start
              again and believe again.
            </p>

            {/* CTA */}
            <div className="mt-10 flex flex-col sm:flex-row items-center gap-4 sm:gap-6 justify-center lg:justify-start">
              <Link href="#" className="inline-block">
                <button className="bg-gradient-to-r from-[#C6A15B] to-[#f59e0b] text-white font-semibold px-10 py-4 rounded-full shadow-[0_15px_40px_rgba(198,161,91,0.3)] hover:shadow-[0_20px_55px_rgba(198,161,91,0.45)] hover:-translate-y-0.5 transition-all duration-300">
                  Get the Book
                </button>
              </Link>
              <button
                disabled
                className="px-10 py-4 text-[#C6A15B] hover:bg-black bg-white/80 border border-[#C6A15B]/30 rounded-full font-semibold shadow-inner cursor-not-allowed"
              >
                Pre-Order (Coming Soon)
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* ===== DISCOVER SECTION ===== */}
      <section className="relative bg-white py-20 sm:py-24 md:py-28">
        <div className="absolute inset-0 pointer-events-none [background:radial-gradient(70%_60%_at_90%_10%,rgba(198,161,91,0.2)_0%,transparent_70%),radial-gradient(40%_50%_at_10%_80%,rgba(251,191,36,0.2)_0%,transparent_70%)]" />
        <div className="relative max-w-7xl mx-auto px-6 lg:px-12 text-center">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-[Playfair_Display] text-[#1a1a1a]">
            What You’ll{" "}
            <span className="bg-gradient-to-r from-[#C6A15B] to-[#f59e0b] bg-clip-text text-transparent">
              Discover
            </span>
          </h2>
          <p className="mt-4 text-lg md:text-xl text-gray-700 max-w-3xl mx-auto">
            Step into a divine classroom of transformation — where brokenness
            becomes strength and faith becomes the pathway to purpose.
          </p>

          {/* discovery cards */}
          <div className="mt-14 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                title: "Faith Over Fear",
                desc: "Silence the voice of fear and walk boldly in God's promises.",
              },
              {
                title: "Healing from the Past",
                desc: "Release yesterday's pain and embrace freedom through forgiveness.",
              },
              {
                title: "Purpose in Pain",
                desc: "See every hardship as a divine setup for spiritual growth.",
              },
              {
                title: "Resilience Through Worship",
                desc: "Find renewed strength through worship that transforms the heart.",
              },
              {
                title: "Walking in Identity",
                desc: "Rediscover your identity in Christ and live with divine confidence.",
              },
              {
                title: "The Courage to Begin Again",
                desc: "When all seems lost, rise again — because God never stopped writing your story.",
              },
            ].map(({ title, desc }, i) => (
              <div
                key={i}
                className="bg-white/80 backdrop-blur-md rounded-3xl p-8 shadow-[0_15px_40px_rgba(198,161,91,0.2)] hover:shadow-[0_20px_50px_rgba(198,161,91,0.35)] transition-all duration-500 border border-[#C6A15B]/10 group"
              >
                <h3 className="text-xl sm:text-2xl text-[#C6A15B] mb-3 font-[Playfair_Display] group-hover:tracking-wide transition-all">
                  {title}
                </h3>
                <p className="text-gray-700 text-base sm:text-lg leading-relaxed">
                  {desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ===== AUTHOR CTA ===== */}
      <section className="relative w-full overflow-hidden bg-gradient-to-b from-[#f8f2df] via-[#f5e6bd] to-[#f4da9b] py-20 sm:py-24 md:py-28">
        <div className="absolute inset-0 pointer-events-none [background:radial-gradient(70%_70%_at_80%_20%,rgba(198,161,91,0.25)_0%,transparent_70%),radial-gradient(50%_50%_at_20%_100%,rgba(251,191,36,0.25)_0%,transparent_70%)]" />

        <div className="relative max-w-6xl mx-auto px-6 lg:px-12 grid grid-cols-1 lg:grid-cols-2 items-center gap-10">
          {/* AUTHOR IMAGE */}
          <div className="flex justify-center lg:justify-start relative">
            <div className="relative group w-full max-w-[420px] sm:max-w-[480px] md:max-w-[500px]">
              <div className="relative rounded-[2rem] bg-white p-3 shadow-[0_20px_60px_rgba(198,161,91,0.35)] ring-1 ring-[#C6A15B]/10 group-hover:shadow-[0_25px_80px_rgba(198,161,91,0.45)] transition-all duration-500">
                <Image
                  src="/assets/images/promise-1.jpeg"
                  alt="Promise Hope portrait"
                  width={600}
                  height={700}
                  className="rounded-[1.5rem] object-cover w-full h-auto transition-transform duration-700 group-hover:scale-[1.03]"
                />
              </div>
              <div
                aria-hidden
                className="absolute -inset-6 rounded-[2.5rem] bg-[radial-gradient(70%_60%_at_50%_100%,rgba(198,161,91,0.4)_0%,transparent_70%)] blur-3xl -z-10"
              />
            </div>
          </div>

          {/* AUTHOR TEXT */}
          <div className="text-center lg:text-left">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-[Playfair_Display] text-[#1a1a1a] leading-tight">
              About the{" "}
              <span className="bg-gradient-to-r from-[#C6A15B] to-[#f59e0b] bg-clip-text text-transparent">
                Author
              </span>
            </h2>
            <p className="mt-6 text-base sm:text-lg md:text-xl text-gray-700 leading-relaxed">
              <span className="font-semibold text-[#C6A15B]">Promise Hope</span>{" "}
              is a gospel minister, songwriter, and author whose story of
              redemption and resilience lights the path for others. From
              hardship to healing, she found her calling in faith — and now
              inspires others to find theirs.
            </p>
            <p className="mt-4 text-base sm:text-lg md:text-xl text-gray-700 leading-relaxed">
              Through every note and every page, Promise carries a message:{" "}
              <span className="italic text-[#a67c00] font-semibold">
                Greatness begins when surrender meets faith.
              </span>
            </p>
            <div className="mt-8">
              <Link href="/about">
                <button className="bg-gradient-to-r from-[#C6A15B] to-[#f59e0b] text-white font-semibold px-10 py-4 rounded-full shadow-[0_10px_30px_rgba(198,161,91,0.3)] hover:shadow-[0_16px_50px_rgba(198,161,91,0.45)] hover:-translate-y-0.5 transition-all duration-300">
                  Learn More About Promise Hope
                </button>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Book1;
