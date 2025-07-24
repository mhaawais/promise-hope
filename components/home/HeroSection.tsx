'use client';

import { useEffect, useState } from 'react';

export default function HeroSection() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: `url('https://readdy.ai/api/search-image?query=Elegant%20modern%20library%20with%20warm%20golden%20lighting%2C%20floating%20books%20in%20magical%20atmosphere%2C%20dreamy%20literary%20ambiance%20with%20soft%20blues%20and%20golds%2C%20professional%20book%20cover%20photography%20style%2C%20cinematic%20lighting%2C%20depth%20of%20field%2C%20sophisticated%20reading%20environment&width=1920&height=1080&seq=hero1&orientation=landscape')`
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-r from-[#1a4280]/80 via-[#1a4280]/60 to-transparent"></div>
      </div>

      {/* Content */}
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl">
          <div className={`transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
            <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 leading-tight">
              Discover Your Next
              <span className="block text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 to-orange-500">
                Literary Adventure
              </span>
            </h1>
            
            <p className="text-xl md:text-2xl text-white/90 mb-8 max-w-2xl leading-relaxed">
              Immerse yourself in captivating stories that will transport you to extraordinary worlds. 
              Join thousands of readers on an unforgettable journey through the pages of imagination.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 mb-12">
              <button className="bg-gradient-to-r from-yellow-400 to-orange-500 text-white px-8 py-4 rounded-full text-lg font-semibold hover:shadow-2xl transition-all duration-300 transform hover:scale-105 whitespace-nowrap cursor-pointer">
                <i className="ri-shopping-cart-line mr-2"></i>
                Get the Book Now
              </button>
              <button className="bg-white/20 backdrop-blur-sm text-white px-8 py-4 rounded-full text-lg font-semibold hover:bg-[#1a4280] transition-all duration-300 border border-white/30 whitespace-nowrap cursor-pointer">
                <i className="ri-play-circle-line mr-2"></i>
                Read About Book
              </button>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 max-w-2xl">
              <div className="text-center">
                <div className="text-3xl font-bold text-white mb-2">50K<span className='text-orange-600'>+</span></div>
                <div className="text-yellow-500 font-bold">Happy Readers</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-white mb-2">4.9<span className='text-orange-600'>★</span></div>
                <div className="text-yellow-500 font-bold">Average Rating</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-white mb-2">15<span className='text-orange-600'>+</span></div>
                <div className="text-yellow-500 font-bold">Awards Won</div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Floating Elements */}
      <div className="absolute top-20 right-20 w-16 h-16 bg-white/10 rounded-full animate-pulse hidden lg:block"></div>
      <div className="absolute bottom-40 left-20 w-24 h-24 bg-yellow-400/20 rounded-full animate-pulse hidden lg:block"></div>
    </section>
  );
}