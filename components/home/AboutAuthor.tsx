'use client';

import Image from 'next/image';

export default function AboutAuthor() {
  return (
    <section className="py-10 sm:py-20 bg-black">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-12 items-center max-w-6xl mx-auto">
          {/* Author Image */}
          <div className="flex justify-center sm:justify-start">
            <div className="relative">
              <div className="w-48 h-48 sm:w-72 sm:h-72 md:w-96 md:h-96 rounded-full overflow-hidden shadow-2xl transition-transform transform hover:scale-105">
                <Image
                  src="/assets/images/author-6.jpeg"
                  width={600}
                  height={600}
                  alt="Author Portrait"
                  className="w-full h-full object-cover object-top"
                />
              </div>

              {/* Decorative Elements */}
              <div className="absolute -top-4 -right-4 w-16 h-16 sm:w-20 sm:h-20 bg-gradient-to-br from-[#1a4280] to-[#6989b0] rounded-full opacity-20 hidden sm:block"></div>
              <div className="absolute -bottom-4 -left-4 w-12 h-12 sm:w-16 sm:h-16 bg-gradient-to-br from-yellow-400 to-orange-500 rounded-full opacity-20 hidden sm:block"></div>
            </div>
          </div>

          {/* Author Info */}
          <div className="space-y-6">
            <div>
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-4 animate__animated animate__fadeIn">
                Meet the Author
              </h2>
              <h3 className="text-xl sm:text-2xl font-semibold text-[#204f92] mb-6 animate__animated animate__fadeIn animate__delay-1s">
                Jacob Ken Robinson
              </h3>
            </div>

            <p className="text-base sm:text-lg text-gray-500 leading-relaxed animate__animated animate__fadeIn animate__delay-2s">
              Ken Robinson is a seasoned professional with over 30 years of experience in both the cosmetology and automotive industries. Celebrated as “Salesman of the Year” multiple times, he built a strong reputation for excellence, dedication, and customer service across his career.
            </p>

            <p className="text-base sm:text-lg text-gray-500 leading-relaxed animate__animated animate__fadeIn animate__delay-3s">
              In addition to his business success, Ken has spent more than 20 years teaching financial literacy, equipping individuals with the tools to manage money wisely. In 1981, he represented the Illinois Black Chamber of Commerce as a delegate to Nassau, Bahamas, where he met with the late Prime Minister Lynden Pindling to discuss Black hair care product distribution.
            </p>

            {/* Achievements */}
            {/* <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="bg-white p-4 rounded-lg shadow-md transition-all transform hover:scale-105">
                <div className="flex items-center mb-2">
                  <RiAwardLine className="text-[#1a4280] text-xl mr-2" />
                  <span className="font-semibold text-[#1a4280]">Awards Won</span>
                </div>
                <p className="text-gray-700">15+ Literary Awards</p>
              </div>
              <div className="bg-white p-4 rounded-lg shadow-md transition-all transform hover:scale-105">
                <div className="flex items-center mb-2">
                  <RiBookLine className="text-[#1a4280] text-xl mr-2" />
                  <span className="font-semibold text-[#1a4280]">Books Published</span>
                </div>
                <p className="text-gray-700">8 Bestsellers</p>
              </div>
              <div className="bg-white p-4 rounded-lg shadow-md transition-all transform hover:scale-105">
                <div className="flex items-center mb-2">
                  <RiUserHeartLine className="text-[#1a4280] text-xl mr-2" />
                  <span className="font-semibold text-[#1a4280]">Readers</span>
                </div>
                <p className="text-gray-700">500K+ Worldwide</p>
              </div>
              <div className="bg-white p-4 rounded-lg shadow-md transition-all transform hover:scale-105">
                <div className="flex items-center mb-2">
                  <RiGlobalLine className="text-[#1a4280] text-xl mr-2" />
                  <span className="font-semibold text-[#1a4280]">Languages</span>
                </div>
                <p className="text-gray-700">12 Translations</p>
              </div>
            </div> */}

            {/* Social Links */}
            {/* <div className="flex items-center space-x-4">
              <span className="text-gray-500">Follow the author:</span>
              <div className="flex space-x-3">
                <a href="#" className="w-8 h-8 sm:w-10 sm:h-10 bg-white rounded-full flex items-center justify-center hover:bg-gray-500 transition-all duration-300">
                  <FaTwitter className='text-2xl text-blue-400 font-bold'/>
                </a>
                <a href="#" className="w-8 h-8 sm:w-10 sm:h-10 bg-white rounded-full flex items-center justify-center hover:bg-gray-500 transition-all duration-300">
                  <FaInstagram className='text-2xl text-pink-700 font-bold'/>
                </a>
                <a href="#" className="w-8 h-8 sm:w-10 sm:h-10 bg-white rounded-full flex items-center justify-center hover:bg-gray-500 transition-all duration-300">
                  <FaFacebook className='text-2xl text-blue-600 font-bold'/>
                </a>
              </div>
            </div> */}

            {/* Learn More Button */}
            {/* <Link href="/author">
              <button className="bg-gradient-to-r from-[#1a4280] to-[#6989b0] text-white px-4 sm:px-8 py-2 sm:py-3 rounded-full hover:shadow-xl transition-all duration-300 transform hover:scale-105 font-semibold whitespace-nowrap cursor-pointer">
                <RiUserLine className="mr-2" />
                Learn More About the Author
              </button>
            </Link> */}
          </div>
        </div>
      </div>
    </section>
  );
}

