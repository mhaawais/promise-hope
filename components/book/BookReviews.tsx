'use client';

import { useState } from 'react';

export default function BookReviews() {
  const [showAllReviews, setShowAllReviews] = useState(false);

  const reviews = [
    {
      id: 1,
      name: "Jennifer Martinez",
      rating: 5,
      date: "March 20, 2024",
      review: "Absolutely captivating! This book took me on an emotional journey that I'll never forget. Sarah Johnson's writing is both beautiful and profound.",
      helpful: 24,
      verified: true
    },
    {
      id: 2,
      name: "Robert Kim",
      rating: 5,
      date: "March 18, 2024",
      review: "One of the best books I've read this year. The character development is exceptional and the story keeps you engaged from start to finish.",
      helpful: 18,
      verified: true
    },
    {
      id: 3,
      name: "Alice Cooper",
      rating: 4,
      date: "March 15, 2024",
      review: "A well-crafted narrative with deep emotional resonance. While some parts felt a bit slow, the overall experience was incredibly rewarding.",
      helpful: 12,
      verified: true
    },
    {
      id: 4,
      name: "Michael Thompson",
      rating: 5,
      date: "March 12, 2024",
      review: "This book changed my perspective on life. The themes are universal and the writing is simply gorgeous. Highly recommended!",
      helpful: 31,
      verified: true
    },
    {
      id: 5,
      name: "Sarah Davis",
      rating: 5,
      date: "March 10, 2024",
      review: "I couldn't put this book down. It's rare to find a story that combines beautiful prose with such compelling characters and plot.",
      helpful: 15,
      verified: true
    },
    {
      id: 6,
      name: "David Wilson",
      rating: 4,
      date: "March 8, 2024",
      review: "A thoughtful and moving story. The author's ability to weave complex emotions into the narrative is truly impressive.",
      helpful: 9,
      verified: true
    }
  ];

  const displayedReviews = showAllReviews ? reviews : reviews.slice(0, 3);

  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-[#1a4280] mb-4">Reader Reviews</h2>
            <div className="flex items-center justify-center space-x-4 mb-6">
              <div className="flex text-yellow-400">
                {[...Array(5)].map((_, i) => (
                  <i key={i} className="ri-star-fill text-2xl"></i>
                ))}
              </div>
              <span className="text-xl font-semibold">4.9 out of 5</span>
              <span className="text-gray-600">(2,547 reviews)</span>
            </div>
            
            {/* Rating Breakdown */}
            <div className="bg-white p-6 rounded-lg shadow-md mb-8">
              <div className="space-y-3">
                {[5, 4, 3, 2, 1].map((stars) => (
                  <div key={stars} className="flex items-center">
                    <span className="w-8 text-sm font-medium">{stars}</span>
                    <i className="ri-star-fill text-yellow-400 text-sm mx-1"></i>
                    <div className="flex-1 bg-gray-200 rounded-full h-2 mx-3">
                      <div 
                        className="bg-yellow-400 h-2 rounded-full" 
                        style={{ width: `${stars === 5 ? '85' : stars === 4 ? '12' : '2'}%` }}
                      ></div>
                    </div>
                    <span className="text-sm text-gray-600 w-12">
                      {stars === 5 ? '85%' : stars === 4 ? '12%' : '2%'}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Individual Reviews */}
          <div className="space-y-6">
            {displayedReviews.map((review) => (
              <div key={review.id} className="bg-white p-6 rounded-lg shadow-md">
                <div className="flex items-start justify-between mb-4">
                  <div className="flex items-center space-x-3">
                    <div className="w-12 h-12 bg-gradient-to-r from-[#1a4280] to-[#6989b0] rounded-full flex items-center justify-center text-white font-semibold">
                      {review.name.charAt(0)}
                    </div>
                    <div>
                      <div className="font-semibold text-[#1a4280] flex items-center">
                        {review.name}
                        {review.verified && (
                          <i className="ri-verified-badge-fill text-green-500 ml-2"></i>
                        )}
                      </div>
                      <div className="text-sm text-gray-600">{review.date}</div>
                    </div>
                  </div>
                  <div className="flex text-yellow-400">
                    {[...Array(5)].map((_, i) => (
                      <i key={i} className={`ri-star-${i < review.rating ? 'fill' : 'line'}`}></i>
                    ))}
                  </div>
                </div>
                
                <p className="text-gray-700 leading-relaxed mb-4">{review.review}</p>
                
                <div className="flex items-center justify-between text-sm text-gray-500">
                  <div className="flex items-center space-x-4">
                    {/* <button className="flex items-center hover:text-[#1a4280] transition-colors cursor-pointer">
                      <i className="ri-thumb-up-line mr-1"></i>
                      Helpful ({review.helpful})
                    </button>
                    <button className="hover:text-[#1a4280] transition-colors cursor-pointer">
                      <i className="ri-flag-line mr-1"></i>
                      Report
                    </button> */}
                  </div>
                  {review.verified && (
                    <span className="text-green-600 font-medium">Verified Purchase</span>
                  )}
                </div>
              </div>
            ))}
          </div>

          {/* Show More Button */}
          {!showAllReviews && (
            <div className="text-center mt-8">
              <button
                onClick={() => setShowAllReviews(true)}
                className="bg-gradient-to-r from-[#1a4280] to-[#6989b0] text-white px-8 py-3 rounded-full hover:shadow-lg transition-all duration-300 transform hover:scale-105 cursor-pointer"
              >
                Show More Reviews
              </button>
            </div>
          )}

          {/* Write Review */}

          {/* <div className="bg-white p-6 rounded-lg shadow-md mt-8">
            <h3 className="text-xl font-bold text-[#1a4280] mb-4">Write a Review</h3>
            <form className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Rating</label>
                <div className="flex space-x-1">
                  {[1, 2, 3, 4, 5].map((star) => (
                    <button
                      key={star}
                      type="button"
                      className="text-gray-300 hover:text-yellow-400 transition-colors text-2xl cursor-pointer"
                    >
                      <i className="ri-star-line"></i>
                    </button>
                  ))}
                </div>
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Your Review</label>
                <textarea
                  rows={4}
                  className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#1a4280] focus:border-transparent"
                  placeholder="Share your thoughts about this book..."
                  maxLength={500}
                ></textarea>
              </div>
              <button
                type="submit"
                className="bg-gradient-to-r from-[#1a4280] to-[#6989b0] text-white px-6 py-2 rounded-full hover:shadow-lg transition-all duration-300 cursor-pointer"
              >
                Submit Review
              </button>
            </form>
          </div>   */}



        </div> 
      </div>
    </section>
  );
}