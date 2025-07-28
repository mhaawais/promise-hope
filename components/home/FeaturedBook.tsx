/* eslint-disable react/jsx-no-comment-textnodes */
"use client";

import { useState } from "react";
import Image from "next/image";

export default function FeaturedBook() {
  const [showFullCover, setShowFullCover] = useState(false);

  return (
    <section className="py-20 bg-black">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Featured Book
          </h2>
          <p className="text-xl text-gray-500 max-w-2xl mx-auto">
            Discover the latest masterpiece that&apos;s captivating readers
            worldwide
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center max-w-6xl mx-auto">
          {/* Book Cover   /assets/images/half.jpg   [#1a4280]     https://readdy.ai/api/search-image?query=Professional%20book%20cover%20design%20with%20elegant%20typography%2C%20modern%20literary%20fiction%20cover%2C%20sophisticated%20design%20with%20deep%20blue%20and%20gold%20accents%2C%20bestseller%20book%20cover%20style%2C%20premium%20quality%20book%20mockup%2C%20clean%20background&width=400&height=600&seq=bookcover1&orientation=portrait                        */}
          <div className="flex justify-center">
            <div className="relative group">
              <div className="relative transform transition-all duration-500 group-hover:scale-105">
                <Image
                  // src={`https://readdy.ai/api/search-image?query=Professional%20book%20cover%20design%20with%20elegant%20typography%2C%20modern%20literary%20fiction%20cover%2C%20sophisticated%20design%20with%20deep%20blue%20and%20gold%20accents%2C%20bestseller%20book%20cover%20style%2C%20premium%20quality%20book%20mockup%2C%20clean%20background&width=400&height=600&seq=bookcover1&orientation=portrait`}

                  src="/assets/images/half.jpg"
                  alt="Featured Book Cover"
                  width={400}
                  height={400}
                  className={`w-80 h-auto rounded-lg shadow-2xl transition-all duration-500 ${
                    showFullCover ? "opacity-0" : "opacity-100"
                  }`}
                />
                {showFullCover && (
                  <Image
                  //   src={`https://readdy.ai/api/search-image?query=Complete%20book%20cover%20design%20showing%20front%20and%20back%2C%20full%20book%20spine%20view%2C%20professional%20book%20mockup%20with%20both%20covers%20visible%2C%20literary%20fiction%20book%20design%2C%20elegant%20typography%2C%20sophisticated%20color%20scheme&width=600&height=400&seq=bookfull1&orientation=landscape`}
                   
                     src="/assets/images/half.jpg"
                    alt="Full Book Cover"
                     width={400}
                 height={400}
                    className="absolute inset-0 w-full h-auto rounded-lg shadow-2xl opacity-100 transition-all duration-500"
                  />
                )}
              </div>

              {/* Toggle Button */}
              <button
                onClick={() => setShowFullCover(!showFullCover)}
                className="absolute bottom-4 right-4 bg-[#1a4280] text-white p-3 rounded-full hover:bg-[#6989b0] transition-all duration-300 transform hover:scale-110 cursor-pointer"
              >
                <i
                  className={`ri-${showFullCover ? "focus" : "expand"}-line`}
                ></i>
              </button>
            </div>
          </div>

          {/* Book Details        [#1a4280]    */}
          <div className="space-y-6">
            <div>
              <h3 className="text-3xl md:text-4xl font-bold text-[#204f92] mb-4">
                Public Speaking
              </h3>
              <p className="text-lg text-gray-500 mb-6">
                A profound exploration of human nature and the power of
                resilience. This captivating novel takes readers on an emotional
                journey through the complexities of love, loss, and
                self-discovery.
              </p>
            </div>

            {/* Book Details */}
            <div className="grid grid-cols-2 gap-4 text-sm">
              <div className="bg-gray-50 p-4 rounded-lg">
                <span className="font-semibold text-[#1a4280]">Pages:</span> 342
              </div>
              <div className="bg-gray-50 p-4 rounded-lg">
                <span className="font-semibold text-[#1a4280]">Genre:</span>{" "}
                Literary Fiction
              </div>
              <div className="bg-gray-50 p-4 rounded-lg">
                <span className="font-semibold text-[#1a4280]">Published:</span>{" "}
                2025
              </div>
              <div className="bg-gray-50 p-4 rounded-lg">
                <span className="font-semibold text-[#1a4280]">Rating:</span>{" "}
                4.9/5
              </div>
            </div>

            {/* Reviews Preview */}
            <div className="bg-gradient-to-r from-[#1a4280]/5 to-[#6989b0]/5 p-6 rounded-lg">
              <div className="flex items-center mb-4">
                <div className="flex text-yellow-400">
                  {[...Array(5)].map((_, i) => (
                    <i key={i} className="ri-star-fill text-xl"></i>
                  ))}
                </div>
                <span className="ml-2 text-gray-500">4.9 out of 5 stars</span>
              </div>
              <p className="text-white italic">
                &quot;A masterpiece that stays with you long after the final
                page. The author&apos;s ability to weave emotion and meaning is
                extraordinary.&quot;
              </p>
              <p className="text-sm text-gray-400 mt-2">
                - Literary Review Magazine
              </p>
            </div>

            {/* Action Buttons */}
            <div className="flex flex-col sm:flex-row gap-4">
              <button className="bg-gradient-to-r from-[#1a4280] to-[#6989b0] text-white px-8 py-3 rounded-full hover:shadow-xl transition-all duration-300 transform hover:scale-105 font-semibold whitespace-nowrap cursor-pointer">
                <i className="ri-shopping-cart-line mr-2"></i>
                {/* Buy Now - $24.99 */}
                Buy Now
              </button>
              <button className="border-2 border-[#1a4280] text-[#1a4280] px-8 py-3 rounded-full hover:bg-[#1a4280] hover:text-white transition-all duration-300 font-semibold whitespace-nowrap cursor-pointer">
                <i className="ri-book-open-line mr-2"></i>
                Read Sample
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
