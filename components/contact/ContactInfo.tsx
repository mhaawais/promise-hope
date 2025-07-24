'use client';

export default function ContactInfo() {
  return (
    <div className="space-y-8">
      {/* Contact Details */}
      <div className="bg-white rounded-2xl shadow-xl p-8">
        <h2 className="text-3xl font-bold text-[#1a4280] mb-6">Get in Touch</h2>
        
        <div className="space-y-6">
          <div className="flex items-center">
            <div className="w-12 h-12 bg-gradient-to-r from-[#1a4280] to-[#6989b0] rounded-full flex items-center justify-center mr-4">
              <i className="ri-mail-line text-white text-xl"></i>
            </div>
            <div>
              <h3 className="font-semibold text-[#1a4280]">Email</h3>
              <p className="text-gray-600">info@jacobkenrobinson.com</p>
            </div>
          </div>
          
          <div className="flex items-center">
            <div className="w-12 h-12 bg-gradient-to-r from-[#1a4280] to-[#6989b0] rounded-full flex items-center justify-center mr-4">
              <i className="ri-phone-line text-white text-xl"></i>
            </div>
            <div>
              <h3 className="font-semibold text-[#1a4280]">Phone</h3>
              <p className="text-gray-600">+1 (555) 123-4567</p>
            </div>
          </div>
          
          <div className="flex items-center">
            <div className="w-12 h-12 bg-gradient-to-r from-[#1a4280] to-[#6989b0] rounded-full flex items-center justify-center mr-4">
              <i className="ri-map-pin-line text-white text-xl"></i>
            </div>
            <div>
              <h3 className="font-semibold text-[#1a4280]">Location</h3>
              <p className="text-gray-600">WA</p>
            </div>
          </div>
        </div>
      </div>

      {/* Social Media */}
      <div className="bg-white rounded-2xl shadow-xl p-8">
        <h3 className="text-2xl font-bold text-[#1a4280] mb-6">Follow Me</h3>
        
        <div className="grid grid-cols-2 gap-4">
          <a href="#" className="flex items-center p-4 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors duration-300 cursor-pointer">
            <i className="ri-twitter-fill text-blue-500 text-2xl mr-3"></i>
            <span className="font-medium">Twitter</span>
          </a>
          
          <a href="#" className="flex items-center p-4 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors duration-300 cursor-pointer">
            <i className="ri-instagram-fill text-pink-500 text-2xl mr-3"></i>
            <span className="font-medium">Instagram</span>
          </a>
          
          <a href="#" className="flex items-center p-4 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors duration-300 cursor-pointer">
            <i className="ri-facebook-fill text-blue-600 text-2xl mr-3"></i>
            <span className="font-medium">Facebook</span>
          </a>
          
          <a href="#" className="flex items-center p-4 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors duration-300 cursor-pointer">
            <i className="ri-linkedin-fill text-blue-700 text-2xl mr-3"></i>
            <span className="font-medium">LinkedIn</span>
          </a>
        </div>
      </div>

      {/* FAQ */}
      <div className="bg-white rounded-2xl shadow-xl p-8">
        <h3 className="text-2xl font-bold text-[#1a4280] mb-6">Frequently Asked Questions</h3>
        
        <div className="space-y-4">
          <div className="border-b border-gray-200 pb-4">
            <h4 className="font-semibold text-[#1a4280] mb-2">Do you accept speaking engagements?</h4>
            <p className="text-gray-600 text-sm">Yes, I&apos;m available for literary events, universities, and book clubs. Please include event details in your message.</p>
          </div>
          
          <div className="border-b border-gray-200 pb-4">
            <h4 className="font-semibold text-[#1a4280] mb-2">Can you review my manuscript?</h4>
            <p className="text-gray-600 text-sm">I offer limited manuscript reviews through my mentorship program. Please inquire about availability and rates.</p>
          </div>
          
          <div className="border-b border-gray-200 pb-4">
            <h4 className="font-semibold text-[#1a4280] mb-2">When is your next book coming out?</h4>
            <p className="text-gray-600 text-sm">I&apos;m currently working on my next novel, expected to be released in 2025. Sign up for my newsletter for updates!</p>
          </div>
          
          <div>
            <h4 className="font-semibold text-[#1a4280] mb-2">How long does it take to respond?</h4>
            <p className="text-gray-600 text-sm">I typically respond to messages within 2-3 business days. For urgent matters, please indicate so in your subject line.</p>
          </div>
        </div>
      </div>

      {/* Office Hours */}
      <div className="bg-gradient-to-r from-[#1a4280] to-[#6989b0] rounded-2xl p-8 text-white">
        <h3 className="text-2xl font-bold mb-4">Office Hours</h3>
        <div className="space-y-2">
          <div className="flex justify-between">
            <span>Monday - Friday:</span>
            <span>9:00 AM - 5:00 PM</span>
          </div>
          <div className="flex justify-between">
            <span>Saturday:</span>
            <span>10:00 AM - 2:00 PM</span>
          </div>
          <div className="flex justify-between">
            <span>Sunday:</span>
            <span>Closed</span>
          </div>
        </div>
        <p className="text-white/80 text-sm mt-4">
          For urgent matters outside these hours, please indicate in your message and I&apos;ll respond as soon as possible.
        </p>
      </div>
    </div>
  );
}