'use client';

export default function CallToAction() {
  return (
    <section className="py-20 relative overflow-hidden">
      {/* Background */}
      <div 
        className="absolute inset-0 bg-cover bg-center"
        style={{
        //  backgroundImage: `url('https://readdy.ai/api/search-image?query=Elegant%20reading%20nook%20with%20comfortable%20armchair%2C%20warm%20golden%20lighting%2C%20books%20scattered%20around%2C%20cozy%20literary%20atmosphere%2C%20soft%20focus%20background%2C%20dreamy%20book%20lover%20environment%2C%20sophisticated%20interior%20design&width=1920&height=800&seq=cta1&orientation=landscape')`
            backgroundImage: `url("assets/images/pic-3.jpg")`,  
      }}
      >
        <div className="absolute inset-0 bg-gradient-to-r from-[#1a4280]/90 to-[#6989b0]/80"></div>
      </div>

      {/* Content */}
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center max-w-4xl mx-auto">
          <h2 className="text-4xl md:text-6xl font-bold text-white mb-6">
            Ready to Begin Your Journey?
          </h2>
          <p className="text-xl md:text-2xl text-white/90 mb-8 leading-relaxed">
            Don&apos;t miss out on this extraordinary literary experience. 
            Join thousands of readers who have already discovered the magic within these pages.
          </p>

          {/* Special Offer */}
          {/* <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 mb-8 border border-white/20">
            <div className="flex items-center justify-center mb-4">
              <i className="ri-fire-line text-orange-400 text-2xl mr-2"></i>
              <span className="text-white font-semibold text-lg">Limited Time Offer</span>
            </div>
            <div className="text-3xl md:text-4xl font-bold text-white mb-2">
              <span className="line-through text-white/60">$29.99</span>
              <span className="ml-4 text-yellow-400">$24.99</span>
            </div>
            <p className="text-white/80">Save 33% - Offer ends in 7 days</p>
          </div> */}

          {/* Action Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
            <button className="bg-gradient-to-r from-yellow-400 to-orange-500 text-white px-12 py-4 rounded-full text-lg font-semibold hover:shadow-2xl transition-all duration-300 transform hover:scale-105 whitespace-nowrap cursor-pointer">
              <i className="ri-shopping-cart-line mr-2"></i>
              Get Your Copy Now
            </button>
            {/* <button className="bg-white/20 backdrop-blur-sm text-white px-12 py-4 rounded-full text-lg font-semibold hover:bg-[#1a4280] transition-all duration-300 border border-white/30 whitespace-nowrap cursor-pointer">
              <i className="ri-gift-line mr-2"></i>
              Gift to Someone
            </button> */}
          </div>

          {/* Trust Indicators */}
          {/* <div className="flex flex-wrap justify-center items-center gap-8 text-white/80">

            <div className="flex items-center">
              <i className="ri-shield-check-line text-green-400 text-xl mr-2"></i>
              <span>30-Day Money Back Guarantee</span>
            </div>

            <div className="flex items-center">
              <i className="ri-truck-line text-blue-400 text-xl mr-2"></i>
              <span>Free Worldwide Shipping</span>
            </div>

            <div className="flex items-center">
              <i className="ri-heart-line text-red-400 text-xl mr-2"></i>
              <span>Loved by 50K+ Readers</span>
            </div>

          </div> */}

        </div>
      </div>

      {/* Floating Elements */}
      <div className="absolute top-10 left-10 w-20 h-20 bg-white/10 rounded-full animate-pulse"></div>
      <div className="absolute bottom-10 right-10 w-16 h-16 bg-yellow-400/20 rounded-full animate-pulse"></div>
    </section>
  );
}