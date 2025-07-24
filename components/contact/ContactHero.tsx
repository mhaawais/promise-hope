'use client';

export default function ContactHero() {
  return (
    <section className="relative py-20 overflow-hidden">
      {/* Background */}
      <div 
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage: `url('https://readdy.ai/api/search-image?query=Elegant%20writing%20desk%20with%20vintage%20typewriter%2C%20warm%20golden%20lighting%2C%20cozy%20literary%20atmosphere%2C%20inspiring%20writer%20workspace%2C%20sophisticated%20home%20office%20setting&width=1920&height=600&seq=contacthero1&orientation=landscape')`
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-r from-[#1a4280]/90 to-[#6989b0]/80"></div>
      </div>

      {/* Content */}
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center text-white max-w-4xl mx-auto">
          <h1 className="text-5xl md:text-6xl font-bold mb-6 leading-tight">
            Let&apos;s Connect
          </h1>
          <p className="text-xl md:text-2xl text-white/90 mb-8 leading-relaxed">
            Have a question, want to discuss a collaboration, or simply share your thoughts? 
            I&apos;d love to hear from you.
          </p>
          
          {/* Contact Methods */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6 border border-white/20 hover:bg-black/20">
              <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-4">
                <i className="ri-mail-line text-white text-2xl"></i>
              </div>
              <h3 className="text-xl font-semibold mb-2">Email</h3>
              <p className="text-white/80">info@jacobkenrobinson.com</p>
            </div>
            
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6 border border-white/20 hover:bg-black/20">
              <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-4">
                <i className="ri-phone-line text-white text-2xl"></i>
              </div>
              <h3 className="text-xl font-semibold mb-2">Phone</h3>
              <p className="text-white/80">+1 (555) 123-4567</p>
            </div>
            
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6 border border-white/20 hover:bg-black/20">
              <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-4">
                <i className="ri-map-pin-line text-white text-2xl"></i>
              </div>
              <h3 className="text-xl font-semibold mb-2">Location</h3>
              <p className="text-white/80">WA</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}