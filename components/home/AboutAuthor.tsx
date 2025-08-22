"use client";

import Image from "next/image";
// import {faTwitter, faInstagram, faFacebook} from 'react-icons';
import { FaFacebook } from "react-icons/fa";

export default function AboutAuthor() {
  return (
    <section className="py-10 sm:py-20 bg-black">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-12 items-center max-w-6xl mx-auto">
          {/* Author Image */}
          <div className="flex justify-center sm:justify-start">
            <div className="relative">
              <div className="w-48 h-48 sm:w-72 sm:h-72 md:w-96 md:h-96 rounded-full overflow-hidden shadow-2xl transition-transform transform hover:scale-105">
                <Image
                  src="/assets/images/author-6.jpeg"
                  width={600}
                  height={600}
                  alt="Author Portrait"
                  className="w-full h-full object-cover object-top"
                />
              </div>

              {/* Decorative Elements */}
              <div className="absolute -top-4 -right-4 w-16 h-16 sm:w-20 sm:h-20 bg-gradient-to-br from-[#1a4280] to-[#6989b0] rounded-full opacity-20 hidden sm:block"></div>
              <div className="absolute -bottom-4 -left-4 w-12 h-12 sm:w-16 sm:h-16 bg-gradient-to-br from-yellow-400 to-orange-500 rounded-full opacity-20 hidden sm:block"></div>
            </div>
          </div>

          {/* Author Info */}
          <div className="space-y-6">
            <div>
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-4 animate__animated animate__fadeIn">
                Meet the Author
              </h2>
              <h3 className="text-xl sm:text-2xl font-semibold text-[#204f92] mb-6 animate__animated animate__fadeIn animate__delay-1s">
                Jacob Ken Robinson
              </h3>
            </div>

            <p className="text-base sm:text-lg text-gray-500 leading-relaxed animate__animated animate__fadeIn animate__delay-2s">
              Ken Robinson is a seasoned professional with over 30 years of
              experience in both the cosmetology and automotive industries.
              Celebrated as “Salesman of the Year” multiple times, he built a
              strong reputation for excellence, dedication, and customer service
              across his career.
            </p>

            <p className="text-base sm:text-lg text-gray-500 leading-relaxed animate__animated animate__fadeIn animate__delay-3s">
              In addition to his business success, Ken has spent more than 20
              years teaching financial literacy, equipping individuals with the
              tools to manage money wisely. In 1981, he represented the Illinois
              Black Chamber of Commerce as a delegate to Nassau, Bahamas, where
              he met with the late Prime Minister Lynden Pindling to discuss
              Black hair care product distribution.
            </p>

            {/* Achievements */}
            {/* <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="bg-white p-4 rounded-lg shadow-md transition-all transform hover:scale-105">
                <div className="flex items-center mb-2">
                  <RiAwardLine className="text-[#1a4280] text-xl mr-2" />
                  <span className="font-semibold text-[#1a4280]">Awards Won</span>
                </div>
                <p className="text-gray-700">15+ Literary Awards</p>
              </div>
              <div className="bg-white p-4 rounded-lg shadow-md transition-all transform hover:scale-105">
                <div className="flex items-center mb-2">
                  <RiBookLine className="text-[#1a4280] text-xl mr-2" />
                  <span className="font-semibold text-[#1a4280]">Books Published</span>
                </div>
                <p className="text-gray-700">8 Bestsellers</p>
              </div>
              <div className="bg-white p-4 rounded-lg shadow-md transition-all transform hover:scale-105">
                <div className="flex items-center mb-2">
                  <RiUserHeartLine className="text-[#1a4280] text-xl mr-2" />
                  <span className="font-semibold text-[#1a4280]">Readers</span>
                </div>
                <p className="text-gray-700">500K+ Worldwide</p>
              </div>
              <div className="bg-white p-4 rounded-lg shadow-md transition-all transform hover:scale-105">
                <div className="flex items-center mb-2">
                  <RiGlobalLine className="text-[#1a4280] text-xl mr-2" />
                  <span className="font-semibold text-[#1a4280]">Languages</span>
                </div>
                <p className="text-gray-700">12 Translations</p>
              </div>
            </div> */}

            {/* Social Links */}

            <a
              href="https://www.facebook.com/profile.php?id=61579292437244"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Follow me on Facebook for the latest updates"
              className="group relative block w-full"
            >
              <div className="mx-auto max-w-4xl px-4">
                <div
                  className="
        flex flex-col sm:flex-row items-center justify-between gap-4
        rounded-3xl border border-gray-200 bg-gradient-to-r from-blue-50 via-white to-blue-50
        dark:from-gray-800 dark:via-gray-900 dark:to-gray-800
        backdrop-blur-lg p-6 sm:p-8
        shadow-md hover:shadow-2xl transition-all duration-500
        ring-1 ring-transparent hover:ring-blue-400/40
        transform hover:-translate-y-1
      "
                >
                  {/* Text + Inline Logo */}
                  <p className="text-center sm:text-left text-gray-900 dark:text-gray-100 text-lg sm:text-xl font-bold leading-tight transition-colors duration-300 group-hover:text-blue-700 dark:group-hover:text-blue-400">
                    Follow me on
                    <span className="inline-flex items-center align-middle mx-3">
                      <Image
                        src="/assets/images/logo-facebook-1.jpg"
                        alt="Facebook"
                        width={100}
                        height={100}
                        className="rounded-lg shadow-md transition-transform duration-500 group-hover:scale-110 group-hover:rotate-3"
                        priority={false}
                      />
                      <span className="sr-only">Facebook</span>
                    </span>
                    for latest updates
                  </p>

                  {/* Icon button (visual accent) */}
                  <div
                    className="
          flex items-center justify-center
          w-14 h-14 sm:w-16 sm:h-16 rounded-full
          bg-black dark:bg-gray-800
          shadow-md group-hover:shadow-2xl
          transition-transform duration-500
          group-hover:scale-125 group-hover:rotate-6
          ring-1 ring-gray-100 dark:ring-gray-700
        "
                    aria-hidden="true"
                  >
                    <FaFacebook className="text-3xl sm:text-4xl text-blue-700" />
                  </div>
                </div>
              </div>
            </a>

            {/* Learn More Button */}
            {/* <Link href="/author">
              <button className="bg-gradient-to-r from-[#1a4280] to-[#6989b0] text-white px-4 sm:px-8 py-2 sm:py-3 rounded-full hover:shadow-xl transition-all duration-300 transform hover:scale-105 font-semibold whitespace-nowrap cursor-pointer">
                <RiUserLine className="mr-2" />
                Learn More About the Author
              </button>
            </Link> */}
          </div>
        </div>
      </div>
    </section>
  );
}
