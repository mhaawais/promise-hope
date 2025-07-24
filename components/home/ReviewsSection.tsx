'use client';

import { useState, useEffect } from 'react';
import Image from 'next/image';

export default function ReviewsSection() {
  const [currentReview, setCurrentReview] = useState(0);

  const reviews = [
    {
      name: "Emma Thompson",
      role: "Book Critic, The Literary Times",
      rating: 5,
      review: "An absolutely breathtaking masterpiece that explores the depths of human emotion with incredible precision. Sarah Johnson has outdone herself with this profound work.",
      image: "https://readdy.ai/api/search-image?query=Professional%20portrait%20of%20book%20critic%2C%20sophisticated%20woman%20in%20elegant%20setting%2C%20warm%20lighting%2C%20literary%20professional%20headshot%2C%20confident%20and%20approachable%20demeanor&width=80&height=80&seq=reviewer1&orientation=squarish"
    },
    {
      name: "Michael Chen",
      role: "Bestselling Author",
      rating: 5,
      review: "I couldn't put this book down. The character development is extraordinary, and the plot twists kept me guessing until the very end. A true literary gem.",
      image: "https://readdy.ai/api/search-image?query=Professional%20portrait%20of%20male%20author%2C%20sophisticated%20man%20in%20elegant%20setting%2C%20warm%20lighting%2C%20literary%20professional%20headshot%2C%20confident%20and%20approachable%20demeanor&width=80&height=80&seq=reviewer2&orientation=squarish"
    },
    {
      name: "Sofia Rodriguez",
      role: "Goodreads Reviewer",
      rating: 5,
      review: "This book changed my perspective on life. The author's ability to weave complex emotions into a compelling narrative is simply remarkable. Highly recommended!",
      image: "https://readdy.ai/api/search-image?query=Professional%20portrait%20of%20female%20book%20reviewer%2C%20sophisticated%20woman%20in%20elegant%20setting%2C%20warm%20lighting%2C%20literary%20professional%20headshot%2C%20confident%20and%20approachable%20demeanor&width=80&height=80&seq=reviewer3&orientation=squarish"
    },
    {
      name: "David Park",
      role: "Book Club Leader",
      rating: 5,
      review: "Our entire book club was captivated by this story. It sparked incredible discussions and left us all wanting more. A must-read for anyone who loves great literature.",
      image: "https://readdy.ai/api/search-image?query=Professional%20portrait%20of%20male%20book%20club%20leader%2C%20sophisticated%20man%20in%20elegant%20setting%2C%20warm%20lighting%2C%20literary%20professional%20headshot%2C%20confident%20and%20approachable%20demeanor&width=80&height=80&seq=reviewer4&orientation=squarish"
    }
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentReview((prev) => (prev + 1) % reviews.length);
    }, 5000);

    return () => clearInterval(timer);
  }, [reviews.length]);

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-[#1a4280] mb-4">
            What Readers Are Saying
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Join thousands of satisfied readers who have been moved by this extraordinary story
          </p>
        </div>

        {/* Main Review Carousel */}
        <div className="max-w-4xl mx-auto mb-16">
          <div className="bg-gradient-to-r from-[#1a4280]/5 to-[#6989b0]/5 p-8 md:p-12 rounded-2xl shadow-lg">
            <div className="text-center">
              <div className="flex justify-center mb-6">
                {[...Array(5)].map((_, i) => (
                  <i key={i} className="ri-star-fill text-2xl text-yellow-400"></i>
                ))}
              </div>
              
              <blockquote className="text-xl md:text-2xl text-gray-700 italic mb-8 leading-relaxed">
                &quot;{reviews[currentReview].review}&quot;
              </blockquote>
              
              <div className="flex items-center justify-center space-x-4">
                <Image
                  src={reviews[currentReview].image}
                  alt={reviews[currentReview].name}
                  width={100}
                  height={100}
                  className="w-16 h-16 rounded-full object-cover object-top"
                />
                <div className="text-left">
                  <div className="font-semibold text-[#1a4280] text-lg">
                    {reviews[currentReview].name}
                  </div>
                  <div className="text-gray-600">
                    {reviews[currentReview].role}
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Navigation Dots */}
          <div className="flex justify-center mt-8 space-x-2">
            {reviews.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentReview(index)}
                className={`w-3 h-3 rounded-full transition-all duration-300 cursor-pointer ${
                  index === currentReview ? 'bg-[#1a4280]' : 'bg-gray-300'
                }`}
              />
            ))}
          </div>
        </div>

        {/* Review Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-4xl mx-auto">
          <div className="text-center">
            <div className="text-3xl font-bold text-[#1a4280] mb-2">4.9</div>
            <div className="text-gray-600">Average Rating</div>
            <div className="flex justify-center mt-2">
              {[...Array(5)].map((_, i) => (
                <i key={i} className="ri-star-fill text-yellow-400"></i>
              ))}
            </div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-[#1a4280] mb-2">2.5K</div>
            <div className="text-gray-600">Total Reviews</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-[#1a4280] mb-2">95%</div>
            <div className="text-gray-600">5-Star Reviews</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-[#1a4280] mb-2">50K+</div>
            <div className="text-gray-600">Copies Sold</div>
          </div>
        </div>

        {/* Review Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto mt-16">
          {reviews.slice(0, 3).map((review, index) => (
            <div key={index} className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300">
              <div className="flex items-center mb-4">
                <Image
                  src={review.image}
                  alt={review.name}
                   width={100}
                  height={100}
                  className="w-12 h-12 rounded-full object-cover object-top mr-4"
                />
                <div>
                  <div className="font-semibold text-[#1a4280]">{review.name}</div>
                  <div className="text-sm text-gray-600">{review.role}</div>
                </div>
              </div>
              <div className="flex mb-3">
                {[...Array(5)].map((_, i) => (
                  <i key={i} className="ri-star-fill text-yellow-400"></i>
                ))}
              </div>
              <p className="text-gray-700 text-sm leading-relaxed">
                &quot;{review.review}&quot;
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}