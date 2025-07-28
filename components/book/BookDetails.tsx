'use client';

import { useState } from 'react';
import Image from 'next/image';

export default function BookDetails() {
  const [activeTab, setActiveTab] = useState('synopsis');

  const tabs = [
    { id: 'synopsis', label: 'Synopsis', icon: 'ri-book-open-line' },
    // { id: 'author', label: 'About Author', icon: 'ri-user-line' },
    // { id: 'details', label: 'Book Details', icon: 'ri-information-line' },
    // { id: 'reviews', label: 'Reviews', icon: 'ri-star-line' }
  ];

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          {/* Tab Navigation */}
          <div className="flex flex-wrap justify-center mb-12">
            {tabs.map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`px-10 py-3 m-1 rounded-full transition-all duration-300 cursor-pointer ${
                  activeTab === tab.id
                    ? 'bg-gradient-to-r from-[#1a4280] to-[#6989b0] text-white shadow-lg transform scale-105'
                    : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                }`}
              >
                <i className={`${tab.icon} mr-2`}></i>
                {tab.label}
              </button>
            ))}
          </div>

          {/* Tab Content */}
          <div className="bg-gray-50 rounded-2xl p-8 md:p-12">
            {activeTab === 'synopsis' && (
              <div className="animate-fade-in">
                <h3 className="text-3xl font-bold text-[#1a4280] mb-6">Book Synopsis</h3>
                <div className="space-y-6 text-lg text-gray-700 leading-relaxed">
                  <p>
                   Public Speaking: Credit Edition offers a refreshing take on financial literacy, turning complex credit concepts into engaging, easy-to-understand lessons. With the energy of a live speech and the clarity of a classroom favorite, it’s designed to capture attention and inspire action.
                  </p>
                  <p>
                    Author Ken Robinson blends decades of real-world experience with humor and storytelling, proving that money talk does n&apos;t have to be dull. His approach makes learning about credit not only accessible, but actually enjoyable for readers of all backgrounds.
                  </p>
                  <p>
                   From students navigating their first credit cards to professionals buried in debt, this book equips readers with the tools to build, manage, and master credit. Through vivid examples and practical advice, Robinson helps you connect the dots between smart credit habits and lasting financial freedom.
                  </p>
                  <p>
                   Whether you’re a teacher, public speaker, or simply someone ready for a financial breakthrough, this book shows you how to speak—and live—with confidence when it comes to credit. No jargon. No fear. Just knowledge that sticks and empowers.
                  </p>
                </div>
              </div>
            )}

            {activeTab === 'author' && (
              <div className="animate-fade-in">
                <h3 className="text-3xl font-bold text-[#1a4280] mb-6">About the Author</h3>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                  <div className="md:col-span-1">
                    <Image

                   //   src={`https://readdy.ai/api/search-image?query=Professional%20portrait%20of%20successful%20female%20author%2C%20sophisticated%20writer%20in%20elegant%20setting%2C%20warm%20lighting%2C%20literary%20professional%20headshot%2C%20confident%20and%20approachable%20demeanor&width=300&height=400&seq=authordetail1&orientation=portrait`}
                     
                     src="/assets/images/author-6.jpeg"
                      alt="Author"
                      height={400}
                      width={400}
                      className="w-full h-auto rounded-lg shadow-lg"
                    />
                  </div>
                  <div className="md:col-span-2 space-y-6 text-lg text-gray-700">
                    <p>
                      Jacob Ken Robinson is a critically acclaimed author whose work has touched the hearts 
                      of readers worldwide. With over 15 years of experience in crafting emotionally 
                      resonant narratives, she has established herself as a master of contemporary 
                      literary fiction.
                    </p>
                    <p>
                      Born in Seattle and educated at Columbia University, Sarah began her writing 
                      career as a journalist before transitioning to fiction. Her debut novel, 
                      &quot;Echoes of Tomorrow,&quot; won the prestigious Hemingway Award and launched her 
                      career as a bestselling author.
                    </p>
                    <p>
                      Jacob&apos;s work has been translated into 12 languages and has earned her numerous 
                      accolades, including the National Book Critics Circle Award and the PEN/Faulkner 
                      Award. When not writing, she teaches creative writing at workshops around the 
                      world and mentors emerging authors.
                    </p>
                  </div>
                </div>
              </div>
            )}

            {activeTab === 'details' && (
              <div className="animate-fade-in">
                <h3 className="text-3xl font-bold text-[#1a4280] mb-6">Book Details</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  <div className="space-y-4">
                    <div className="flex justify-between py-3 border-b border-gray-200">
                      <span className="font-semibold text-[#1a4280]">Title:</span>
                      <span className="text-gray-700">Public Speaking Credit Edition</span>
                    </div>
                    <div className="flex justify-between py-3 border-b border-gray-200">
                      <span className="font-semibold text-[#1a4280]">Author:</span>
                      <span className="text-gray-700">Jacob Ken Robinson</span>
                    </div>
                    <div className="flex justify-between py-3 border-b border-gray-200">
                      <span className="font-semibold text-[#1a4280]">Genre:</span>
                      <span className="text-gray-700">Literary Fiction</span>
                    </div>
                    <div className="flex justify-between py-3 border-b border-gray-200">
                      <span className="font-semibold text-[#1a4280]">Pages:</span>
                      <span className="text-gray-700">342</span>
                    </div>
                    <div className="flex justify-between py-3 border-b border-gray-200">
                      <span className="font-semibold text-[#1a4280]">Publisher:</span>
                      <span className="text-gray-700">Meridian Books</span>
                    </div>
                  </div>
                  <div className="space-y-4">
                    <div className="flex justify-between py-3 border-b border-gray-200">
                      <span className="font-semibold text-[#1a4280]">Publication Date:</span>
                      <span className="text-gray-700">March 15, 2025</span>
                    </div>
                    <div className="flex justify-between py-3 border-b border-gray-200">
                      <span className="font-semibold text-[#1a4280]">Language:</span>
                      <span className="text-gray-700">English</span>
                    </div>
                    <div className="flex justify-between py-3 border-b border-gray-200">
                      <span className="font-semibold text-[#1a4280]">ISBN:</span>
                      <span className="text-gray-700">978-0-123456-78-9</span>
                    </div>
                    <div className="flex justify-between py-3 border-b border-gray-200">
                      <span className="font-semibold text-[#1a4280]">Weight:</span>
                      <span className="text-gray-700">1.2 lbs</span>
                    </div>
                    <div className="flex justify-between py-3 border-b border-gray-200">
                      <span className="font-semibold text-[#1a4280]">Dimensions:</span>
                      <span className="text-gray-700">6 x 9 inches</span>
                    </div>
                  </div>
                </div>
              </div>
            )}

            {activeTab === 'reviews' && (
              <div className="animate-fade-in">
                <h3 className="text-3xl font-bold text-[#1a4280] mb-6">Reader Reviews</h3>
                <div className="space-y-6">
                  {[1, 2, 3].map((review) => (
                    <div key={review} className="bg-white p-6 rounded-lg shadow-md">
                      <div className="flex items-center mb-4">
                        <Image
                          src={`https://readdy.ai/api/search-image?query=Professional%20portrait%20of%20book%20reader%2C%20sophisticated%20person%20in%20elegant%20setting%2C%20warm%20lighting%2C%20literary%20enthusiast%20headshot%2C%20confident%20and%20approachable%20demeanor&width=60&height=60&seq=reader${review}&orientation=squarish`}
                          alt="Reader"
                          width={100}
                          height={100}
                          className="w-12 h-12 rounded-full object-cover object-top mr-4"
                        />
                        <div>
                          <div className="font-semibold text-[#1a4280]">Reader {review}</div>
                          <div className="flex text-yellow-400">
                            {[...Array(5)].map((_, i) => (
                              <i key={i} className="ri-star-fill"></i>
                            ))}
                          </div>
                        </div>
                      </div>
                      <p className="text-gray-700 leading-relaxed">
                        This book completely exceeded my expectations. The character development is 
                        extraordinary, and the emotional depth of the story stayed with me long after 
                        I finished reading. Sarah Johnson has created something truly special.
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}