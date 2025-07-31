"use client";

export default function ContactHero() {
  return (
    <section className="relative py-20 overflow-hidden">
      {/* Background */}
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{
          //   backgroundImage: `url('https://readdy.ai/api/search-image?query=Elegant%20writing%20desk%20with%20vintage%20typewriter%2C%20warm%20golden%20lighting%2C%20cozy%20literary%20atmosphere%2C%20inspiring%20writer%20workspace%2C%20sophisticated%20home%20office%20setting&width=1920&height=600&seq=contacthero1&orientation=landscape')`
          backgroundImage: `url("/assets/images/pic-6.jpg")`,
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-r from-[#1a4280]/60 to-[#6989b0]/60"></div>
      </div>

      {/* Content */}
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center text-white max-w-4xl mx-auto">
          <h1 className="text-5xl md:text-6xl font-bold mb-6 leading-tight">
            Let&apos;s Connect
          </h1>
          <p className="text-xl md:text-2xl text-white/90 mb-8 leading-relaxed">
            Have a question, want to discuss a collaboration, or simply share
            your thoughts? I&apos;d love to hear from you.
          </p>

          {/* Contact Methods */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
            <div className="bg-[#212121] hover:bg-[#383838] backdrop-blur-sm rounded-lg p-6 border border-white/20">
              <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-4">
                <i className="ri-mail-line text-blue-400 text-2xl"></i>
              </div>
              <h3 className="text-xl font-semibold mb-2">Email</h3>
              <a
                href="mailto:suitman49@gmail.com"
                className="text-white/80 hover:underline break-all"
              >
                suitman49@gmail.com
              </a>
            </div>

            <div className="bg-[#212121] hover:bg-[#383838] backdrop-blur-sm rounded-lg p-6 border border-white/20">
              <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-4">
                <i className="ri-phone-line text-blue-400 text-2xl"></i>
              </div>
              <h3 className="text-xl font-semibold mb-2">Phone</h3>
              <a
                href="tel:2175209236"
                className="text-white/80 hover:underline"
              >
                (217) 520‑9236
              </a>
            </div>

            <div className="bg-[#212121] hover:bg-[#383838] backdrop-blur-sm rounded-lg p-6 border border-white/20">
              <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-4">
                <i className="ri-map-pin-line text-blue-400 text-2xl"></i>
              </div>
              <h3 className="text-xl font-semibold mb-2">Location</h3>
              <a
                href="https://www.google.com/maps/place/Illinois"
                target="_blank"
                rel="noopener noreferrer"
                className="text-white/80 hover:underline"
              >
                Illinois
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
