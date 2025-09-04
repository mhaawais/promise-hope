import React from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Image from "next/image";
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: "Blogs | Public Speaking & Financial Insights",  
  description: "Explore the latest blogs by Jacob Ken Robinson on public speaking, financial literacy, and credit management. Get expert tips, strategies, and inspiring insights to take control of your financial future.",
};

const Blogs = () => {
  return (
    <div className="bg-black text-gray-100">
      <Header />

      <div className="max-w-7xl mx-auto px-4 py-12 font-serif">
        {/* Header */}
        <div className="text-center mb-10">
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-blue-500 mb-1 leading-tight tracking-wide">
            PUBLIC SPEAKING SECRETS – CREDIT EDITION
          </h1>
          <p className="text-xl text-gray-300">By: Jacob Ken Robinson</p>
        </div>

        {/* Main Content */}
        <div className="space-y-12">
          <div className="text-gray-200 leading-relaxed">
            <p className="mb-4 text-lg sm:text-xl md:text-2xl text-center text-yellow-300">
              <span className="font-bold text-white">
                Speak the Language of Money:
              </span>{" "}
              Why Public Speaking: Credit Edition is the Guide You’ve Been
              Waiting For
            </p>

            <p className="mb-8 md:text-lg lg:text-lg font-mono">
              Most books on credit and money management feel like dry lectures
              that put you to sleep. But Jacob Ken Robinson’s Public Speaking:
              Credit Edition is different. It’s fast-paced, witty, and full of
              practical insights that turn the intimidating world of credit into
              something simple, relatable, and even fun.
            </p>

            {/* Image Section with Hover Animation */}
            {/* <div className="my-12">
              <Image
                src="/assets/images/blog-image.jpeg"
                alt="Blog Visual"
                width={1200}
                height={800}
                className="w-full h-auto rounded-lg shadow-xl transform transition-all duration-500 hover:scale-105"
              />
            </div> */}

            <div className="my-12">
              <Image
                src="/assets/images/blog-image.jpeg"
                alt="Blog Visual"
                width={1200}
                height={800}
                className="w-full sm:w-[90%] xs:w-[95%] md:w-full h-auto rounded-lg shadow-xl transform transition-all duration-500 hover:scale-105"
              />
            </div>

            {/* Why This Book Matters Section */}
            <div className="space-y-2 mb-8">
              <h2 className="text-xl md:text-2xl lg:text-3xl font-semibold text-center text-yellow-300">
                Why This Book Matters
              </h2>
              <p className="text-lg sm:text-xl text-gray-200 font-sans">
                Whether you’re a student learning about finances for the first
                time, a young professional trying to balance loans and credit
                cards, or someone tired of feeling stuck in the maze of credit
                scores, this book gives you the tools to take charge.
              </p>
              <p className="text-lg sm:text-xl text-gray-200 font-sans">
                Through storytelling, humor, and crystal-clear examples,
                Robinson explains:
              </p>
              <ul className="list-disc pl-6 space-y-2 font-sans">
                <li className="text-lg sm:text-xl text-gray-200">
                  How credit really works.
                </li>
                <li className="text-lg sm:text-xl text-gray-200">
                  Why your credit score matters.
                </li>
                <li className="text-lg sm:text-xl text-gray-200">
                  Simple strategies to build and protect your financial future.
                </li>
              </ul>
              <p className="text-lg sm:text-xl text-gray-200">
                Think of it as a TED Talk for your wallet i.e. short, smart, and
                seriously impactful.
              </p>
            </div>

            {/* Author's Edge Section */}
            <div className="space-y-4 mb-8">
              <h2 className="text-xl md:text-2xl lg:text-3xl font-semibold text-center text-yellow-300">
                The Author’s Edge
              </h2>
              <p className="text-lg sm:text-xl text-gray-200 font-mono">
                With 30+ years of experience across industries and two decades
                teaching financial literacy, Jacob Ken Robinson knows how to
                make complex topics click. His background in public speaking and
                sales has earned him recognition as a natural communicator who
                can turn financial jargon into everyday wisdom.
              </p>
            </div>

            {/* Transform Your Financial Future Section */}
            <div className="space-y-4">
              <h2 className="text-xl md:text-2xl lg:text-3xl font-semibold text-center text-yellow-300">
                Ready to Transform Your Financial Future?
              </h2>
              <p className="text-lg sm:text-xl text-gray-200 font-mono">
                By the end of Public Speaking: Credit Edition, you won’t just
                know how to build credit, you’ll know how to use it as a tool to
                create opportunities and shape the life you want.
              </p>
              <p className="text-lg sm:text-xl text-gray-200">
                Grab your copy today in eBook ($9.99) or Paperback ($24.99) on
                Amazon and start speaking the language of money with confidence.
              </p>
              <p className="text-lg sm:text-xl text-gray-200 mb-12 font-sans">
                Because financial freedom starts with the right knowledge and
                now, it’s finally within your reach.
              </p>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default Blogs;
