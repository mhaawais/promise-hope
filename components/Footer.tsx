"use client";

import Link from "next/link";
import Image from "next/image";
import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="bg-gradient-to-r from-[#1a4280] to-[#6989b0] text-white">
      <div className="container mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Logo and Description */}
          <div className="md:col-span-2 flex flex-col items-center md:items-start">
            <Link href="/" className="flex items-center space-x-2 mb-4">
              <div className="w-24 h-24 bg-white rounded-full flex items-center justify-center border-[8px] border-white">
                <Image
                  src="/assets/images/logo-1.JPG"
                  alt="logo"
                  width={100}
                  height={100}
                  className="object-contain"
                />
              </div>
            </Link>
            <p className="text-white/80 mb-6 max-w-md text-center md:text-left">
              Discover captivating stories and profound insights from an
              award-winning author. Join thousands of readers on an
              unforgettable literary journey.
            </p>
            <div className="flex space-x-4 justify-center md:justify-start">
              <a
                href="#"
                className="w-10 h-10 bg-white hover:bg-black rounded-full flex items-center justify-center transition-colors duration-300 cursor-pointer"
              >
                <FaFacebook className="text-blue-600 text-2xl" />
              </a>
              <a
                href="#"
                className="w-10 h-10 bg-white rounded-full flex items-center justify-center hover:bg-black transition-colors duration-300 cursor-pointer"
              >
                <FaTwitter className="text-blue-400 text-2xl" />
              </a>
              <a
                href="#"
                className="w-10 h-10 bg-white rounded-full flex items-center justify-center hover:bg-black transition-colors duration-300 cursor-pointer"
              >
                <FaInstagram className="text-pink-700 text-2xl" />
              </a>
              <a
                href="#"
                className="w-10 h-10 bg-white rounded-full flex items-center justify-center hover:bg-black transition-colors duration-300 cursor-pointer"
              >
                <FaLinkedin className="text-blue-800 text-2xl" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div className="flex justify-center md:justify-start items-center">
            <div>
              <h3 className="text-lg font-semibold mb-4 text-center md:text-left">
                Quick Links
              </h3>
              <ul className="space-y-2 text-center md:text-left">
                <li>
                  <Link
                    href="/"
                    className="text-white/80 font-medium hover:font-bold hover:underline hover:text-black transition-colors duration-300"
                  >
                    Home
                  </Link>
                </li>
                <li>
                  <Link
                    href="/book"
                    className="text-white/80 font-medium hover:font-bold hover:underline hover:text-black transition-colors duration-300"
                  >
                    Book
                  </Link>
                </li>
                <li>
                  <Link
                    href="/pre-order"
                    className="text-white/80 font-medium hover:font-bold hover:underline hover:text-black transition-colors duration-300"
                  >
                    Pre-Order
                  </Link>
                </li>
                <li>
                  <Link
                    href="/author"
                    className="text-white/80 font-medium hover:font-bold hover:underline hover:text-black transition-colors duration-300"
                  >
                    Author
                  </Link>
                </li>
                <li>
                  <Link
                    href="/contact"
                    className="text-white/80 font-medium hover:font-bold hover:underline hover:text-black transition-colors duration-300"
                  >
                    Contact
                  </Link>
                </li>
              </ul>
            </div>
          </div>

          {/* Get the Book Button */}
          <div className="flex justify-center items-center">
            <a
              href="https://www.amazon.com/dp/B0FK48ZB8D/ref=tmm_pap_swatch_0?_encoding=UTF8&dib_tag=se&dib=eyJ2IjoiMSJ9.5Ryr3VO0Oo4G5ELjCEElxA.kxRVC8uT-pHCVVAfZFfL_dk7rIJlu67ygwY0hSi9BHA&qid=1753725149&sr=1-1"
              target="_blank"
              rel="noopener noreferrer"
            >
              <button className="bg-white text-[#1a4280] px-8 py-3 rounded-full hover:bg-[#1a4280] hover:text-white transition-all duration-300 transform hover:scale-105 font-semibold whitespace-nowrap cursor-pointer">
                Get the Book
              </button>
            </a>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="border-t border-white/20 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-white/80 mb-4 md:mb-0 text-center md:text-left">
            © 2025 Jacob Ken Robinson. All rights reserved.
          </p>
          <p className="text-sm">
            Created by{" "}
            <Link
              href={"https://americanbookfounders.com/"}
              target="_blank"
              className="underline text-yellow-500 hover:text-green-500"
            >
              Americanbookfounders
            </Link>
          </p>
        </div>
      </div>
    </footer>
  );
}
