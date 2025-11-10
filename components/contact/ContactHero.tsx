"use client";

export default function ContactHero() {
  return (
    <section className="relative py-20 overflow-hidden">
      {/* Background       bg-gradient-to-r from-[#C6A15B]/60 to-[#6989b0]/60   */}
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{
         backgroundImage: `url("/assets/images/pic-6.jpg")`,
        }}
      >
        <div className="absolute inset-0"></div>
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
                <i className="ri-mail-line text-[#C6A15B] text-2xl"></i>
              </div>
              <h3 className="text-xl font-semibold mb-2">Email</h3>
              <a
                href="mailto:promisehopeauthor@gmail.com"
                className="text-white/80 hover:underline break-all"
              >
                Promisehopeauthor@gmail.com
              </a>
            </div>

            <div className="bg-[#212121] hover:bg-[#383838] backdrop-blur-sm rounded-lg p-6 border border-white/20">
              <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-4">
                <i className="ri-phone-line text-[#C6A15B] text-2xl"></i>
              </div>
              <h3 className="text-xl font-semibold mb-2">Phone</h3>
              <a
                href="tel:+18165942665"
                className="text-white/80 hover:underline"
              >
                +1 (816) 594 2665
              </a>
            </div>

            <div className="bg-[#212121] hover:bg-[#383838] backdrop-blur-sm rounded-lg p-6 border border-white/20">
              <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-4">
                <i className="ri-map-pin-line text-[#C6A15B] text-2xl"></i>
              </div>
              <h3 className="text-xl font-semibold mb-2">Location</h3>
              <a
                href=""
                target="_blank"
                rel="noopener noreferrer"
                className="text-white/80 hover:underline"
              >
                US
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
