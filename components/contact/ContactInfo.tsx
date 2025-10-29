"use client";

export default function ContactInfo() {
  return (
    <div className="space-y-8">
      {/* Contact Details */}
      <div className="bg-white rounded-2xl shadow-xl p-8">
        <h2 className="text-3xl font-bold text-[#C6A15B] mb-6">Get in Touch</h2>

        <div className="space-y-6">
          <div className="flex items-center">
            <div className="w-12 h-12 bg-[#b6ab14] rounded-full flex items-center justify-center mr-4">
              <i className="ri-mail-line text-white text-xl"></i>
            </div>
            <div>
              <h3 className="font-semibold text-[#9b742d]">Email</h3>
              <a
                href="mailto:info@promisehope.com"
                className="text-gray-600 hover:underline break-all"
              >
                info@promisehope.com
              </a>
            </div>
          </div>

          <div className="flex items-center">
            <div className="w-12 h-12 bg-[#b6ab14] rounded-full flex items-center justify-center mr-4">
              <i className="ri-phone-line text-white text-xl"></i>
            </div>
            <div>
              <h3 className="font-semibold text-[#9b742d]">Phone</h3>
              <a
                href="tel:2171112222"
                className="text-gray-600 hover:underline"
              >
                (217) 111‑2222
              </a>
            </div>
          </div>

          <div className="flex items-center">
            <div className="w-12 h-12 bg-[#b6ab14] rounded-full flex items-center justify-center mr-4">
              <i className="ri-map-pin-line text-white text-xl"></i>
            </div>
            <div>
              <h3 className="font-semibold text-[#9b742d]">Location</h3>
              <a
                href=""
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-600 hover:underline"
              >
                ..
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Social Media */}
      <div className="bg-white rounded-2xl shadow-xl p-8">
        <h3 className="text-2xl font-bold text-[#C6A15B] mb-6">Follow Me</h3>

        <div className="grid grid-cols-2 gap-4">
          <a
            href="https://www.twitter.com/"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center p-4 bg-gray-200 rounded-lg hover:bg-gray-300 transition-colors duration-300 cursor-pointer"
          >
            <i className="ri-twitter-fill text-blue-500 text-2xl mr-3"></i>
            <span className="font-medium">Twitter</span>
          </a>

          <a
            href="https://www.instagram.com/"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center p-4 bg-gray-200 rounded-lg hover:bg-gray-300 transition-colors duration-300 cursor-pointer"
          >
            <i className="ri-instagram-fill text-pink-500 text-2xl mr-3"></i>
            <span className="font-medium">Instagram</span>
          </a>

          <a
            href="https://www.facebook.com/"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center p-4 bg-gray-200 rounded-lg hover:bg-gray-300 transition-colors duration-300 cursor-pointer"
          >
            <i className="ri-facebook-fill text-blue-600 text-2xl mr-3"></i>
            <span className="font-medium">Facebook</span>
          </a>

          <a
            href="https://www.linkedin.com/"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center p-4 bg-gray-200 rounded-lg hover:bg-gray-300 transition-colors duration-300 cursor-pointer"
          >
            <i className="ri-linkedin-fill text-blue-700 text-2xl mr-3"></i>
            <span className="font-medium">LinkedIn</span>
          </a>
        </div>
      </div>

    </div>
  );
}
