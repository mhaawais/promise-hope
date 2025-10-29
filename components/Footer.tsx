"use client";

import Link from "next/link";
import Image from "next/image";
import {
  FaFacebook,
  FaTwitter,
  FaInstagram,
  FaLinkedin,
  FaLocationArrow,
  FaPhoneAlt,
  FaEnvelope,
  FaArrowUp,
} from "react-icons/fa";

export default function Footer() {
  const year = new Date().getFullYear();

  const scrollTop = () => window.scrollTo({ top: 0, behavior: "smooth" });

  const social = [
    { href: "https://www.facebook.com/", label: "Facebook", Icon: FaFacebook },
    { href: "https://www.twitter.com/", label: "Twitter", Icon: FaTwitter },
    { href: "https://www.instagram.com/", label: "Instagram", Icon: FaInstagram },
    { href: "https://www.linkedin.com/", label: "LinkedIn", Icon: FaLinkedin },
  ];

  return (
    <footer className="relative text-black">

      {/* Gradient background matching logo (gold theme) */}
      <div className="bg-gradient-to-r from-[#C6A15B] via-[#d4a24a] to-[#f59e0b] relative overflow-hidden">
        <div
          aria-hidden
          className="pointer-events-none absolute inset-0 opacity-10"
          style={{
            backgroundImage:
              "radial-gradient(currentColor 1px, transparent 1px), radial-gradient(currentColor 1px, transparent 1px)",
            backgroundSize: "16px 16px",
            backgroundPosition: "0 0, 8px 8px",
            color: "#fff",
          }}
        />

        <div className="container mx-auto px-4 py-16">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-10">
            {/* Brand / About */}
            <div className="md:col-span-6">
              <Link href="/" className="flex items-center gap-3 mb-5">
                <div className="relative w-16 h-16 rounded-full bg-white shadow ring-8 ring-white/30">
                  <Image
                    src="/assets/images/logo-2.JPG"
                    alt="Promise Hope logo"
                    fill
                    className="object-contain p-2"
                    sizes="64px"
                    priority
                  />
                </div>
                <span className="font-extrabold text-xl tracking-wide text-[#2e0101] drop-shadow">
                  PROMISE&nbsp;HOPE
                </span>
                </Link>

              <p className="text-white/85 leading-relaxed max-w-lg">
                Discover captivating stories and heartfelt insights from a good author.
                Join thousands of readers on an unforgettable literary journey.
              </p>

              {/* Socials */}
              <div className="mt-6 flex gap-3">
                {social.map(({ href, label, Icon }) => (
                  <a
                    key={label}
                    href={href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={label}
                    className="group w-10 h-10 rounded-full bg-white/95 hover:bg-black transition-colors grid place-items-center shadow-md"
                  >
                    <Icon className="text-xl text-[#996e20] group-hover:text-white transition-colors" />
                  </a>
                ))}
              </div>
            </div>

            {/* Quick Links */}
            <div className="md:col-span-3">
              <h3 className="text-[#1a1a1a] font-bold text-lg mb-4">Quick Links</h3>
              <ul className="space-y-2">
                {[
                  { href: "/", label: "Home" },
                  { href: "/book", label: "Book" },
                  { href: "/about", label: "About" },
                  { href: "/contact", label: "Contact" },
                ].map(({ href, label }) => (
                  <li key={href}>
                    <Link
                      href={href}
                      className="text-white/90 hover:text-black hover:underline underline-offset-4 transition-colors font-medium"
                    >
                      {label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Get Book CTA */}
            <div className="md:col-span-3 flex flex-col justify-start items-center md:items-start">
              <h3 className="text-[#1a1a1a] font-bold text-lg mb-4">Get the Book</h3>
              <p className="text-white/85 mb-4 max-w-xs">
                Start your inspiring journey today by grabbing your copy.
              </p>
              <a href="" target="_blank" rel="noopener noreferrer">
                <button className="bg-white text-[#966a19] px-6 py-3 rounded-full font-semibold shadow hover:bg-black hover:text-white transition-all hover:scale-[1.03]">
                  Get the Book
                </button>
              </a>
            </div>
          </div>

          {/* Contact Strip */}
          <div className="mt-12 rounded-2xl bg-white/90 backdrop-blur p-5 shadow-md">
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 text-[#1a1a1a]">
              <div className="flex items-center gap-3 justify-center sm:justify-start">
                <FaLocationArrow className="text-xl text-[#C6A15B]" />
                <p className="text-sm sm:text-base">
                  123 Lit
                </p>
              </div>
              <div className="flex items-center gap-3 justify-center sm:justify-start">
                <FaPhoneAlt className="text-xl text-[#C6A15B]" />
                <a href="tel:+12171112222" className="text-sm sm:text-base hover:underline">
                  (217) 111‑2222
                </a>
              </div>
              <div className="flex items-center gap-3 justify-center sm:justify-start">
                <FaEnvelope className="text-xl text-[#C6A15B]" />
                <a
                  href="mailto:hello@promisehope.com"
                  className="text-sm sm:text-base hover:underline"
                >
                  hello@promisehope.com
                </a>
              </div>
            </div>
          </div>

          {/* Bottom bar */}
          <div className="border-t border-white/30 mt-10 pt-6 flex flex-col md:flex-row items-center justify-between gap-4">
            <p className="text-white/85 text-center md:text-left">
              © {year} Promise Hope. All rights reserved.
            </p>

            <button
              onClick={scrollTop}
              aria-label="Scroll to top"
              className="inline-flex items-center gap-2 bg-white text-[#C6A15B] px-4 py-2 rounded-full shadow hover:bg-black hover:text-white transition-colors"
            >
              <FaArrowUp />
              Top
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
}
