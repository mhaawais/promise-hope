"use client";

import Link from "next/link";
import { useState } from "react";
import Image from "next/image";
import { FaBars, FaTimes } from "react-icons/fa";

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="bg-white/95 backdrop-blur-md shadow-lg sticky top-0 z-50 transition-all duration-300">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link href="/">
            <Image
              src="/assets/images/logo-1.JPG"
              alt="logo"
              width={100}
              height={100}
              className="object-contain"
            />
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-8">
            <Link
              href="/"
              className="text-gray-800 hover:text-[#1a4280] hover:underline transition-colors duration-300 font-semibold hover:font-bold text-lg"
            >
              Home
            </Link>
            <Link
              href="/book"
              className="text-gray-800 hover:text-[#1a4280] hover:underline transition-colors duration-300 font-semibold hover:font-bold text-lg"
            >
              Book
            </Link>
            <Link
              href="/pre-order"
              className="text-gray-800 hover:text-[#1a4280] hover:underline transition-colors duration-300 font-semibold hover:font-bold text-lg"
            >
              Pre-Order
            </Link>
            <Link
              href="/author"
              className="text-gray-800 hover:text-[#1a4280] hover:underline transition-colors duration-300 font-semibold hover:font-bold text-lg"
            >
              Author
            </Link>
            <Link
              href="/contact"
              className="text-gray-800 hover:text-[#1a4280] hover:underline transition-colors duration-300 font-semibold hover:font-bold text-lg"
            >
              Contact
            </Link>
          </nav>

          {/* Get Book Button */}
          <div className="hidden lg:flex items-center space-x-4">
            <a
              href="https://www.amazon.com/dp/B0FK48ZB8D/ref=tmm_pap_swatch_0?_encoding=UTF8&dib_tag=se&dib=eyJ2IjoiMSJ9.5Ryr3VO0Oo4G5ELjCEElxA.kxRVC8uT-pHCVVAfZFfL_dk7rIJlu67ygwY0hSi9BHA&qid=1753725149&sr=1-1"
              target="_blank"
              rel="noopener noreferrer"
            >
              <button className="bg-gradient-to-r from-[#1a4280] to-[#6989b0] text-white font-bold text-xl px-10 py-5 rounded-full hover:shadow-lg transition-all duration-300 transform hover:scale-105 whitespace-nowrap cursor-pointer">
                Get the Book
              </button>
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="lg:hidden w-12 h-12 flex items-center justify-center cursor-pointer"
          >
            {isMenuOpen ? (
              <FaTimes className="text-2xl text-[#1a4280]" />
            ) : (
              <FaBars className="text-2xl text-[#1a4280]" />
            )}
          </button>
        </div>

        {/* Mobile Navigation */}
        <div
          className={`lg:hidden transition-all duration-300 ${
            isMenuOpen ? "max-h-screen opacity-100" : "max-h-0 opacity-0"
          } overflow-hidden`}
        >
          <nav className="py-4 space-y-4 flex flex-col items-center">
            <Link
              href="/"
              className="block text-gray-800 hover:text-[#1a4280] hover:underline transition-colors duration-300 font-bold text-[18px]"
            >
              Home
            </Link>
            <Link
              href="/book"
              className="block text-gray-800 hover:text-[#1a4280] hover:underline transition-colors duration-300 font-bold text-[18px]"
            >
              Book
            </Link>
            <Link
              href="/pre-order"
              className="block text-gray-800 hover:text-[#1a4280] hover:underline transition-colors duration-300 font-bold text-[18px]"
            >
              Pre-Order
            </Link>
            <Link
              href="/author"
              className="block text-gray-800 hover:text-[#1a4280] hover:underline transition-colors duration-300 font-bold text-[18px]"
            >
              Author
            </Link>
            <Link
              href="/contact"
              className="block text-gray-800 hover:text-[#1a4280] hover:underline transition-colors duration-300 font-bold text-[18px]"
            >
              Contact
            </Link>
            <a
              href="https://www.amazon.com/dp/B0FK48ZB8D/ref=tmm_pap_swatch_0?_encoding=UTF8&dib_tag=se&dib=eyJ2IjoiMSJ9.5Ryr3VO0Oo4G5ELjCEElxA.kxRVC8uT-pHCVVAfZFfL_dk7rIJlu67ygwY0hSi9BHA&qid=1753725149&sr=1-1"
              target="_blank"
              rel="noopener noreferrer"
            >
              <button className="bg-gradient-to-r from-[#1a4280] to-[#6989b0] text-white px-8 py-4 font-semibold rounded-full hover:shadow-lg transition-all duration-300 transform hover:scale-105 whitespace-nowrap cursor-pointer">
                Get the Book
              </button>
            </a>
          </nav>
        </div>
      </div>
    </header>
  );
}
