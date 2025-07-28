"use client";

import { useState } from "react";
import Image from "next/image";

export default function AuthorGallery() {
  const [selectedImage, setSelectedImage] = useState<{
    id: number;
    // title: string;
    description: string;
    image: string;
  } | null>(null);

  const galleryImages = [
    {
      id: 1,
      // title: "Author Reading at Literary Festival",
      description: "Jacob ken captivating audience",
      //   image: "https://readdy.ai/api/search-image?query=Professional%20author%20reading%20at%20literary%20festival%2C%20elegant%20woman%20at%20podium%2C%20warm%20lighting%2C%20audience%20in%20background%2C%20sophisticated%20literary%20event%20atmosphere&width=600&height=400&seq=gallery1&orientation=landscape"
      image: "/assets/images/author-2.jpeg",
    },
    {
      id: 2,
      // title: "Book Signing Event",
      description: "Book Signing Event",
      //   image: "https://readdy.ai/api/search-image?query=Author%20signing%20books%20at%20bookstore%20event%2C%20professional%20woman%20interacting%20with%20readers%2C%20warm%20bookstore%20atmosphere%2C%20literary%20event%20setting&width=600&height=400&seq=gallery2&orientation=landscape"
      image: "/assets/images/author-3.jpeg",
    },
    {
      id: 3,
      // title: "Writing Retreat in the Mountains",
      description: "Finding inspiration",
      // image: "https://readdy.ai/api/search-image?query=Author%20writing%20in%20cozy%20mountain%20cabin%2C%20typewriter%20on%20wooden%20desk%2C%20warm%20fireplace%20lighting%2C%20peaceful%20writing%20environment%2C%20inspiring%20workspace&width=600&height=400&seq=gallery3&orientation=landscape"
      image: "/assets/images/author-4.jpeg",
    },
    {
      id: 4,
      // title: "Award Ceremony",
      description: "Award Ceremony",
      //  image: "https://readdy.ai/api/search-image?query=Professional%20author%20receiving%20literary%20award%2C%20elegant%20award%20ceremony%20setting%2C%20sophisticated%20woman%20in%20formal%20attire%2C%20prestigious%20literary%20event&width=600&height=400&seq=gallery4&orientation=landscape"
      image: "/assets/images/author-5.jpeg",
    },
    // {
    //   id: 5,
    //   title: "University Lecture",
    //   description: "Teaching creative writing at Columbia University",
    //   //  image: "https://readdy.ai/api/search-image?query=Author%20teaching%20creative%20writing%20class%2C%20professional%20woman%20lecturer%20in%20university%20setting%2C%20students%20in%20background%2C%20academic%20atmosphere&width=600&height=400&seq=gallery5&orientation=landscape"
    //   image: "/assets/images/author-6.jpeg",
    // },
    // {
    //   id: 6,
    //   title: "Childhood Home",
    //   description: "The Seattle house where her writing journey began",
    //   //  image: "https://readdy.ai/api/search-image?query=Charming%20Seattle%20house%20with%20cozy%20reading%20nook%2C%20vintage%20home%20interior%2C%20warm%20lighting%2C%20literary%20atmosphere%2C%20inspiring%20childhood%20home%20setting&width=600&height=400&seq=gallery6&orientation=landscape"
    //   image: "/assets/images/author-3.jpeg",
    // },
    // {
    //   id: 7,
    //   title: "International Book Fair",
    //   description: "Promoting her work at the Frankfurt Book Fair",
    //   //   image: "https://readdy.ai/api/search-image?query=Author%20at%20international%20book%20fair%2C%20professional%20woman%20at%20book%20exhibition%2C%20sophisticated%20literary%20event%2C%20international%20publishing%20atmosphere&width=600&height=400&seq=gallery7&orientation=landscape"
    //   image: "/assets/images/author-3.jpeg",
    // },
    // {
    //   id: 8,
    //   title: "Mentoring Session",
    //   description: "Working with emerging writers in her mentorship program",
    //   //   image: "https://readdy.ai/api/search-image?query=Author%20mentoring%20young%20writers%2C%20professional%20woman%20in%20workshop%20setting%2C%20collaborative%20writing%20environment%2C%20inspiring%20literary%20mentorship&width=600&height=400&seq=gallery8&orientation=landscape"
    //   image: "/assets/images/author-2.jpeg",
    // },
  ];

  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-[#1a4280] mb-4">Gallery</h2>
          <p className="text-xl text-gray-600">
            Moments from Jacob&apos;s literary journey
          </p>
        </div>

        {/* Gallery Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 max-w-7xl mx-auto">
          {galleryImages.map((image) => (
            <div
              key={image.id}
              className="relative group cursor-pointer overflow-hidden rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105"
              onClick={() => setSelectedImage(image)}
            >
              <Image
                src={image.image}
                alt="Gallery Image"
                height={300}
                width={300}
                className="w-full h-64 object-cover transition-transform duration-300 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <div className="absolute bottom-4 left-4 right-4 text-white">
                  {/* <h3 className="font-semibold text-lg mb-1">{image.title}</h3> */}
                  <p className="text-sm text-white/90">{image.description}</p>
                </div>
              </div>
              <div className="absolute top-4 right-4 bg-white/20 backdrop-blur-sm rounded-full p-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <i className="ri-eye-line text-white"></i>
              </div>
            </div>
          ))}
        </div>

        {/* Modal */}
        {selectedImage && (
          <div className="fixed inset-0 bg-black/80 flex items-center justify-center z-50 p-4">
            <div className="bg-white rounded-lg max-w-4xl w-full max-h-[90vh] overflow-hidden">
              <div className="relative">
                <Image
                  src={selectedImage.image}
                  alt="full image"
                  height={100}
                  width={100}
                  className="w-full h-auto max-h-[60vh] object-cover"
                />
                <button
                  onClick={() => setSelectedImage(null)}
                  className="absolute top-4 right-4 bg-white/20 backdrop-blur-sm text-white p-2 rounded-full hover:bg-white/30 transition-colors cursor-pointer"
                >
                  <i className="ri-close-line text-xl"></i>
                </button>
              </div>
              <div className="p-6">
                {/* <h3 className="text-2xl font-bold text-[#1a4280] mb-2">
                  {selectedImage.title}
                </h3> */}
                <div className="border-b border-gray-200 mb-4 pb-2">
                  <span className="text-[#1a4280] text-lg font-semibold">
                    Image Description
                  </span>
                </div>
                <p className="text-gray-600">{selectedImage.description}</p>
              </div>
            </div>
          </div>
        )}

        {/* Gallery Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl mx-auto mt-16">
          <div className="text-center bg-white p-6 rounded-lg shadow-md transition-all hover:scale-105">
            <div className="text-3xl font-bold text-[#1a4280] mb-2">50+</div>
            <div className="text-gray-600">Literary Events</div>
          </div>
          <div className="text-center bg-white p-6 rounded-lg shadow-md transition-all hover:scale-105">
            <div className="text-3xl font-bold text-[#1a4280] mb-2">25+</div>
            <div className="text-gray-600">Countries Visited</div>
          </div>
          <div className="text-center bg-white p-6 rounded-lg shadow-md transition-all hover:scale-105">
            <div className="text-3xl font-bold text-[#1a4280] mb-2">100+</div>
            <div className="text-gray-600">Writers Mentored</div>
          </div>
          <div className="text-center bg-white p-6 rounded-lg shadow-md transition-all hover:scale-105">
            <div className="text-3xl font-bold text-[#1a4280] mb-2">15+</div>
            <div className="text-gray-600">Years of Writing</div>
          </div>
        </div>
      </div>
    </section>
  );
}
