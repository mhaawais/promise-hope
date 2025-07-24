'use client';

import { useState } from 'react';
import Image from 'next/image';

export default function BookHero() {
  const [showFullCover, setShowFullCover] = useState(false);

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background */}
      <div 
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage: `url('https://readdy.ai/api/search-image?query=Elegant%20library%20interior%20with%20floating%20books%2C%20magical%20literary%20atmosphere%2C%20warm%20golden%20lighting%2C%20sophisticated%20book%20lover%20environment%2C%20dreamy%20reading%20nook%20with%20soft%20blue%20and%20gold%20tones&width=1920&height=1080&seq=bookhero1&orientation=landscape')`
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-r from-[#1a4280]/90 to-[#6989b0]/70"></div>
      </div>

      {/* Content */}
      <div className="container mx-auto px-4 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center max-w-6xl mx-auto">
          {/* Book Cover */}
          <div className="flex justify-center lg:justify-start mt-14 lg:mt-0">
            <div className="relative group">
              <div className="relative transform transition-all duration-500 group-hover:scale-105">
                <Image
                  src="/assets/images/half.jpg"
                 // src={`https://readdy.ai/api/search-image?query=Professional%20bestselling%20book%20cover%20design%2C%20elegant%20literary%20fiction%20cover%20with%20sophisticated%20typography%2C%20deep%20blue%20and%20gold%20color%20scheme%2C%20award-winning%20book%20design%2C%20premium%20quality%20mockup&width=400&height=600&seq=mainbook1&orientation=portrait`}                
                  alt="The Journey Within Book Cover"
                  width={400}
                  height={400}
                  className={`w-80 h-auto rounded-lg shadow-2xl transition-all duration-500 ${showFullCover ? 'opacity-0' : 'opacity-100'}`}
                />
                {showFullCover && (
                  <Image
                    src={`https://readdy.ai/api/search-image?query=Complete%20book%20cover%20showing%20front%20and%20back%20covers%2C%20full%20spine%20view%2C%20professional%20book%20mockup%20with%20both%20sides%20visible%2C%20elegant%20literary%20design%20with%20consistent%20typography&width=600&height=400&seq=mainbookfull1&orientation=landscape`}
                    alt="Full Book Cover"
                    width={400}
                    height={400}
                    className="absolute inset-0 w-full h-auto rounded-lg shadow-2xl opacity-100 transition-all duration-500"
                  />
                )}
              </div>
              
              <button
                onClick={() => setShowFullCover(!showFullCover)}
                className="absolute bottom-4 right-4 bg-white/20 backdrop-blur-sm text-white p-3 rounded-full hover:bg-white/30 transition-all duration-300 transform hover:scale-110 cursor-pointer"
              >
                <i className={`ri-${showFullCover ? 'focus' : 'expand'}-line`}></i>
              </button>
            </div>
          </div>

          {/* Book Info */}
          <div className="text-white space-y-6">
            <div>
              <h1 className="text-5xl md:text-6xl font-bold mb-4 leading-tight">
                Public Speaking
              </h1>
              <p className="text-xl md:text-2xl text-gray-950 mb-6">
                A profound exploration of human resilience and the power of self-discovery
              </p>
            </div>

            <div className="flex items-center space-x-6 mb-6">
              <div className="flex text-yellow-400">
                {[...Array(5)].map((_, i) => (
                  <i key={i} className="ri-star-fill text-2xl"></i>
                ))}
              </div>
              <span className="text-xl">4.9/5 (2,547 reviews)</span>
            </div>

            <div className="grid grid-cols-2 gap-4 text-lg">
              <div>
                <span className="text-slate-950">Pages:</span>
                <span className="ml-2 font-semibold">342</span>
              </div>
              <div>
                <span className="text-slate-950">Genre:</span>
                <span className="ml-2 font-semibold">Literary Fiction</span>
              </div>
              <div>
                <span className="text-slate-950">Published:</span>
                <span className="ml-2 font-semibold">March 2025</span>
              </div>
              <div>
                <span className="text-slate-950">Language:</span>
                <span className="ml-2 font-semibold">English</span>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 pt-4">
              <button className="bg-gradient-to-r from-yellow-400 to-orange-500 text-white px-8 py-4 rounded-full text-lg font-semibold hover:shadow-2xl transition-all duration-300 transform hover:scale-105 whitespace-nowrap cursor-pointer">
                <i className="ri-shopping-cart-line mr-2"></i>
                Buy Now - $24.99
              </button>
              <button className="bg-white/20 backdrop-blur-sm text-white px-8 py-4 rounded-full text-lg font-semibold hover:bg-[#1a4280] transition-all duration-300 border border-white/30 whitespace-nowrap cursor-pointer">
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