"use client";

import React from "react";
import Image from "next/image";
import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin } from "react-icons/fa";
import Link from "next/link";

export default function AuthorHero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background */}
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{
          //   backgroundImage: `url('https://readdy.ai/api/search-image?query=Elegant%20writer%20workspace%20with%20vintage%20typewriter%2C%20warm%20golden%20lighting%2C%20books%20and%20manuscripts%20scattered%20around%2C%20inspiring%20literary%20atmosphere%2C%20cozy%20study%20environment%2C%20professional%20author%20setting&width=1920&height=1080&seq=authorhero1&orientation=landscape')`
          backgroundImage: `url('/assets/images/pic-5.jpg')`,
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-r from-[#1a4280]/90 to-[#6989b0]/70"></div>
      </div>

      {/* Content */}
      <div className="container mx-auto px-4 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center max-w-6xl mx-auto">
          {/* Author Image */}
          <div className="flex justify-center lg:justify-start">
            <div className="relative">
              <div className="w-96 h-96 rounded-full overflow-hidden shadow-2xl mt-12 lg:mt-0">
                <Image
                  //    src={`https://readdy.ai/api/search-image?query=Professional%20portrait%20of%20successful%20female%20author%2C%20sophisticated%20writer%20in%20elegant%20setting%2C%20warm%20lighting%2C%20literary%20professional%20headshot%2C%20confident%20and%20approachable%20demeanor%2C%20modern%20author%20photography&width=400&height=400&seq=authorhero2&orientation=squarish`}
                  src={"/assets/images/author-3.jpeg"}
                  alt="jacob - Author"
                  height={400}
                  width={400}
                  className="w-full h-full object-cover object-top"
                />
              </div>

              {/* Floating Elements */}
              <div className="absolute -top-8 -right-8 w-24 h-24 bg-white/20 rounded-full animate-pulse"></div>
              <div className="absolute -bottom-8 -left-8 w-20 h-20 bg-yellow-400/30 rounded-full animate-pulse"></div>
            </div>
          </div>

          {/* Author Info    [#1a4280] */}
          <div className="text-white space-y-6">
            <div>
              <h1 className="text-4xl md:text-5xl font-bold mb-4 leading-tight">
                Jacob Ken Robinson
              </h1>
              <p className="text-2xl md:text-3xl text-orange-300 mb-6">
                Award-Winning Author & Storyteller
              </p>
              <p className="text-xl text-white/80 leading-relaxed">
                Jacob Ken Robinson is a seasoned professional with over 30 years
                in both the automotive and cosmetology industries. A Vietnam
                veteran and financial literacy educator, he’s dedicated to
                empowering others through knowledge, service, and community
                engagement.
              </p>
            </div>

            {/* Quick Stats */}
            {/* <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 py-6">
              <div className="text-center">
                <div className="text-3xl font-bold text-yellow-400">8</div>
                <div className="text-white/80">Bestsellers</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-yellow-400">15+</div>
                <div className="text-white/80">Awards</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-yellow-400">500K+</div>
                <div className="text-white/80">Readers</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-yellow-400">12</div>
                <div className="text-white/80">Languages</div>
              </div>
            </div> */}

            {/* Social Links */}
            <div className="flex items-center space-x-4">
              <span className="text-white/80">Follow me:</span>
              <div className="flex space-x-3">
                <a
                  href="https://www.twitter.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-12 h-12 bg-white rounded-full flex items-center justify-center hover:bg-black transition-all duration-300 transform hover:scale-110 cursor-pointer"
                >
                  <FaTwitter className="text- text-2xl text-blue-400" />
                </a>
                <a
                  href="https://www.instagram.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-12 h-12 bg-white rounded-full flex items-center justify-center hover:bg-black transition-all duration-300 transform hover:scale-110 cursor-pointer"
                >
                  <FaInstagram className=" text- text-2xl text-pink-700" />
                </a>
                <a
                  href="https://www.facebook.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-12 h-12 bg-white rounded-full flex items-center justify-center hover:bg-black transition-all duration-300 transform hover:scale-110 cursor-pointer"
                >
                  <FaFacebook className=" text- text-2xl text-blue-600" />
                </a>
                <a
                  href="https://www.linkedin.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-12 h-12 bg-white rounded-full flex items-center justify-center hover:bg-black transition-all duration-300 transform hover:scale-110 cursor-pointer"
                >
                  <FaLinkedin className=" text- text-2xl text-blue-800" />
                </a>
              </div>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 pt-4">
              <a
                href="https://www.amazon.com/dp/B0FK48ZB8D/ref=tmm_pap_swatch_0?_encoding=UTF8&dib_tag=se&dib=eyJ2IjoiMSJ9.5Ryr3VO0Oo4G5ELjCEElxA.kxRVC8uT-pHCVVAfZFfL_dk7rIJlu67ygwY0hSi9BHA&qid=1753725149&sr=1-1"
                target="_blank"
                rel="noopener noreferrer"
              >
                <button className="bg-gradient-to-r from-yellow-400 to-orange-500 text-white px-8 py-4 rounded-full text-lg font-semibold hover:shadow-2xl transition-all duration-300 transform hover:scale-105 whitespace-nowrap cursor-pointer">
                  <i className="ri-book-open-line mr-2"></i>
                  Get My Book
                </button>
              </a>
              <Link href="/contact">
                <button className="bg-white/20 backdrop-blur-sm text-white px-8 py-4 rounded-full text-lg font-semibold hover:bg-[#1a4280] transition-all duration-300 border border-white/30 whitespace-nowrap cursor-pointer">
                  <i className="ri-mail-line mr-2"></i>
                  Get in Touch
                </button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
