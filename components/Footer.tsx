"use client";

import Link from "next/link";
import Image from "next/image";
import { FaFacebook, FaArrowUp } from "react-icons/fa";

export default function Footer() {
  const year = new Date().getFullYear();
  const scrollTop = () => window.scrollTo({ top: 0, behavior: "smooth" });

  const social = [
    { href: "https://www.facebook.com/", label: "Facebook", Icon: FaFacebook },
    // { href: "https://www.instagram.com/", label: "Instagram", Icon: FaInstagram },
    // { href: "https://www.linkedin.com/", label: "LinkedIn", Icon: FaLinkedin },
  ];

  return (
    <footer
      id="footer"
      className="relative w-full text-gray-800 overflow-hidden"
    >
      {/* Background Gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#fffaf3] via-[#f6ebcf] to-[#f4e0a3]" />
      <div className="absolute inset-0 pointer-events-none [background:radial-gradient(60%_60%_at_80%_0%,rgba(198,161,91,0.25)_0%,transparent_70%),radial-gradient(40%_40%_at_20%_100%,rgba(251,191,36,0.25)_0%,transparent_70%)]" />

      <div className="relative max-w-7xl mx-auto px-6 lg:px-12 py-20 sm:py-24 md:py-28">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 md:gap-16 items-start">
          {/* Left Column: About */}
          <div className="md:col-span-5">
            <Link href="/" className="flex items-center gap-3 mb-5">
              <div className="relative w-16 h-16 rounded-full bg-white shadow ring-8 ring-white/30">
                <Image
                  src="/assets/images/logo-2.JPG"
                  alt="Promise Hope Logo"
                  fill
                  className="object-contain p-2"
                />
              </div>
              <span className="font-extrabold text-2xl tracking-wide text-[#2e0101]">
                PROMISE&nbsp;HOPE
              </span>
            </Link>

            <p className="text-gray-700/90 leading-relaxed max-w-md font-[Inter]">
              Promise Hope is an author, worship minister, and inspirational
              speaker passionate about helping people discover their purpose in
              the midst of pain. Her words awaken hope, faith, and healing in
              every heart.
            </p>

            {/* Social Links */}
            <div className="mt-6 flex gap-4">
              {social.map(({ href, label, Icon }) => (
                <a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={label}
                  className="group w-10 h-10 rounded-full bg-white/90 hover:bg-[#C6A15B] grid place-items-center shadow-md transition-all duration-300 hover:scale-110"
                >
                  <Icon className="text-xl text-[#C6A15B] group-hover:text-white transition-colors duration-300" />
                </a>
              ))}
            </div>
          </div>

          {/* Middle Column: Book Showcase */}
          <div className="md:col-span-4 flex flex-col items-center text-center relative">
            <div className="relative w-full max-w-[260px] sm:max-w-[300px] md:max-w-[320px]">
              <div className="relative rounded-2xl bg-white/80 p-2 shadow-[0_20px_60px_rgba(198,161,91,0.35)]">
                <Image
                  src="/assets/images/book-7.jpg"
                  alt="The Way to Greatness book cover"
                  width={400}
                  height={500}
                  className="w-full h-auto object-cover rounded-xl"
                />
                <div className="absolute inset-0 rounded-xl bg-gradient-to-t from-transparent via-white/10 to-transparent pointer-events-none" />
              </div>
              {/* subtle glow */}
              <div
                aria-hidden
                className="absolute -inset-4 rounded-3xl bg-[radial-gradient(70%_50%_at_50%_100%,rgba(198,161,91,0.45)_0%,transparent_70%)] blur-3xl -z-10"
              />
            </div>

            <p className="mt-5 text-sm sm:text-base font-medium text-gray-700/80 max-w-xs">
              “The Way to Greatness” — a powerful message of healing, purpose,
              and faith through life’s challenges.
            </p>

            <Link
              href=""
              target="_blank"
              rel="noopener noreferrer"
              className="mt-5 inline-block"
            >
              <button className="bg-gradient-to-r from-[#C6A15B] to-[#f59e0b] text-white px-8 py-3 rounded-full font-semibold shadow-md hover:shadow-lg hover:-translate-y-0.5 transition-all duration-300">
                Get the Book
              </button>
            </Link>
          </div>

          {/* Right Column: Quick Links */}
          <div className="md:col-span-3 text-center md:text-left">
            <h3 className="text-[#1a1a1a] font-bold text-lg mb-5 tracking-wide">
              Quick Links
            </h3>
            <ul className="space-y-2 font-[Inter]">
              {[
                { href: "/", label: "Home" },
                { href: "/book", label: "Book" },
                { href: "/about", label: "About" },
                { href: "/contact", label: "Contact" },
              ].map(({ href, label }) => (
                <li key={href}>
                  <Link
                    href={href}
                    className="text-gray-700/90 hover:text-yellow-500 hover:underline underline-offset-4 transition-all duration-300 font-medium"
                  >
                    {label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom Border + CTA Row */}
        <div className="border-t border-[#C6A15B]/30 mt-16 pt-8 flex flex-col md:flex-row items-center justify-between gap-6">
          <p className="text-gray-700/80 text-sm sm:text-base text-center md:text-left font-[Inter]">
            © {year} Promise Hope. All rights reserved.
          </p>

          <button
            onClick={scrollTop}
            aria-label="Scroll to top"
            className="inline-flex items-center gap-2 bg-gradient-to-r from-[#C6A15B] to-[#f59e0b] text-white px-5 py-2.5 rounded-full font-medium shadow hover:shadow-lg transition-all hover:-translate-y-0.5"
          >
            <FaArrowUp />
            Back to Top
          </button>
        </div>
      </div>
    </footer>
  );
}
