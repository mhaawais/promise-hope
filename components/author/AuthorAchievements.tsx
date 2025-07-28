'use client';

import Image from "next/image";

export default function AuthorAchievements() {
  const achievements = [
    {
      id: 1,
      title: "Veteran Career Comeback",
      year: "2020s",
      description: "Came out of retirement to rejoin Miles’s pre-owned department and mentor the next generation.",
      icon: "ri-award-line",
      color: "from-yellow-400 to-orange-500"
    },
    {
      id: 2,
      title: "Financial Literacy Advocate",
      year: "2000s–Present",
      description: "Over 20 years teaching community financial literacy classes focused on credit, budgeting, and empowerment.",
      icon: "ri-medal-line",
      color: "from-blue-400 to-purple-500"
    },
    {
      id: 3,
      title: "Chamber Delegate Recognition",
      year: 1981,
      description: "Represented the Illinois Black Chamber of Commerce in Nassau to expand Black-owned product distribution.",
      icon: "ri-trophy-line",
      color: "from-green-400 to-blue-500"
    },
    {
      id: 4,
      title: "Salesman of the Year",
      year: "1980s–2000s",
      description: "Received multiple awards for top performance at Miles’s dealership over a decades-long career.",
      icon: "ri-heart-line",
      color: "from-pink-400 to-red-500"
    },
    {
      id: 5,
      title: "Cosmetology Industry Leader",
      year: "1970s–2000s",
      description: "Built a 30+ year career in the beauty industry, becoming a respected voice in Black hair care.",
      icon: "ri-pen-nib-line",
      color: "from-purple-400 to-pink-500"
    },
    {
      id: 6,
      title: "Vietnam Service Medal",
      year: "1969–1970",
      description: "Honored for military service as a helicopter supply specialist during the Vietnam War.",
      icon: "ri-graduation-cap-line",
      color: "from-indigo-400 to-blue-500"
    }
  ];

  const milestones = [
    {
      number: "8",
      label: "Bestselling Novels",
      icon: "ri-book-line"
    },
    {
      number: "500K+",
      label: "Books Sold Worldwide",
      icon: "ri-global-line"
    },
    {
      number: "12",
      label: "Language Translations",
      icon: "ri-book-open-line"
    },
    {
      number: "15+",
      label: "Literary Awards",
      icon: "ri-award-line"
    },
    {
      number: "25+",
      label: "Countries Published",
      icon: "ri-earth-line"
    },
    {
      number: "100+",
      label: "Writers Mentored",
      icon: "ri-user-heart-line"
    }
  ];

  return (
    <section className="py-20 bg-gradient-to-br from-gray-50 to-blue-50/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-[#1a4280] mb-4">Achievements & Recognition</h2>
          <p className="text-xl text-gray-600">Celebrating a distinguished literary career</p>
        </div>

        {/* Awards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto mb-20">
          {achievements.map((achievement) => (
            <div
              key={achievement.id}
              className="bg-white rounded-lg shadow-lg p-6 hover:shadow-xl transition-all duration-300 transform hover:scale-105"
            >
              <div className="flex items-center mb-4">
                <div className={`w-12 h-12 bg-gradient-to-r ${achievement.color} rounded-full flex items-center justify-center mr-4`}>
                  <i className={`${achievement.icon} text-white text-xl`}></i>
                </div>
                <div className="text-2xl font-bold text-[#1a4280]">{achievement.year}</div>
              </div>
              
              <h3 className="text-xl font-bold text-[#1a4280] mb-2">{achievement.title}</h3>
              <p className="text-gray-600 leading-relaxed">{achievement.description}</p>
            </div>
          ))}
        </div>

        {/* Milestones */}
        <div className="bg-white rounded-2xl shadow-xl p-8 max-w-6xl mx-auto">
          <h3 className="text-3xl font-bold text-[#1a4280] mb-8 text-center">Career Milestones</h3>
          
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
            {milestones.map((milestone, index) => (
              <div key={index} className="text-center">
                <div className="w-16 h-16 bg-gradient-to-r from-[#1a4280] to-[#6989b0] rounded-full flex items-center justify-center mx-auto mb-4">
                  <i className={`${milestone.icon} text-white text-2xl`}></i>
                </div>
                <div className="text-3xl font-bold text-[#1a4280] mb-2">{milestone.number}</div>
                <div className="text-gray-600 text-sm">{milestone.label}</div>
              </div>
            ))}
          </div>
        </div>

        {/* Testimonials */}
        <div className="mt-20 max-w-4xl mx-auto">
          <h3 className="text-3xl font-bold text-[#1a4280] mb-8 text-center">What Critics Say</h3>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-white rounded-lg p-6 shadow-lg">
              <div className="flex items-center mb-4">
                <Image
                  src="https://readdy.ai/api/search-image?query=Professional%20portrait%20of%20literary%20critic%2C%20sophisticated%20person%20in%20elegant%20setting%2C%20warm%20lighting%2C%20professional%20headshot%20for%20literary%20review&width=60&height=60&seq=critic1&orientation=squarish"
                  alt="Literary Critic"
                  width={100}
                  height={100}
                  className="w-12 h-12 rounded-full object-cover object-top mr-4"
                />
                <div>
                  <div className="font-semibold text-[#1a4280]">The New York Times</div>
                  <div className="text-sm text-gray-600">Book Review</div>
                </div>
              </div>
              <p className="text-gray-700 italic leading-relaxed">
                &quot;Jacob Ken Robinson writes with a profound understanding of the human condition. 
                Her ability to capture complex emotions in simple, beautiful prose is extraordinary.&quot;
              </p>
            </div>
            
            <div className="bg-white rounded-lg p-6 shadow-lg">
              <div className="flex items-center mb-4">
                <Image
                  src="https://readdy.ai/api/search-image?query=Professional%20portrait%20of%20literary%20magazine%20editor%2C%20sophisticated%20person%20in%20elegant%20setting%2C%20warm%20lighting%2C%20professional%20headshot%20for%20literary%20review&width=60&height=60&seq=critic2&orientation=squarish"
                  alt="Literary Magazine Editor"
                  width={100}
                  height={100}
                  className="w-12 h-12 rounded-full object-cover object-top mr-4"
                />
                <div>
                  <div className="font-semibold text-[#1a4280]">Literary Review Magazine</div>
                  <div className="text-sm text-gray-600">Editor&apos;s Choice</div>
                </div>
              </div>
              <p className="text-gray-700 italic leading-relaxed">
                &quot;One of the most important voices in contemporary literature. Jacob&apos;s work 
                will be studied and cherished for generations to come.&quot;
              </p>
            </div>
          </div>
        </div>

        {/* Future Projects */}
        <div className="bg-gradient-to-r from-[#1a4280] to-[#6989b0] rounded-2xl p-8 mt-16 text-center text-white">
          <h3 className="text-3xl font-bold mb-4">What&apos;s Next?</h3>
          <p className="text-xl mb-6">
            Jacob is currently working on her next novel, expected to be released in th end of 2025. 
            Stay tuned for updates on her upcoming literary projects and events.
          </p>
          <button className="bg-white text-[#1a4280] px-8 py-3 rounded-full hover:bg-gray-100 transition-all duration-300 transform hover:scale-105 font-semibold cursor-pointer">
            <i className="ri-notification-line mr-2"></i>
            Follow me
          </button>
        </div>
      </div>
    </section>
  );
}