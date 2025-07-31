/* eslint-disable @next/next/no-img-element */
'use client';

export default function RelatedBooks() {
  const relatedBooks = [
    {
      id: 1,
      title: "Echoes of Tomorrow",
      author: "Sarah Johnson",
      rating: 4.8,
      reviews: 1234,
      price: 22.99,
      image: "https://readdy.ai/api/search-image?query=Professional%20book%20cover%20design%20for%20literary%20fiction%2C%20elegant%20typography%2C%20sophisticated%20color%20scheme%2C%20bestseller%20book%20cover%20style%2C%20premium%20quality%20mockup&width=300&height=450&seq=related1&orientation=portrait"
    },
    {
      id: 2,
      title: "Whispers in the Wind",
      author: "Sarah Johnson",
      rating: 4.7,
      reviews: 987,
      price: 21.99,
      image: "https://readdy.ai/api/search-image?query=Elegant%20book%20cover%20design%20for%20contemporary%20fiction%2C%20sophisticated%20literary%20design%2C%20modern%20typography%2C%20professional%20book%20mockup%20with%20premium%20quality&width=300&height=450&seq=related2&orientation=portrait"
    },
    {
      id: 3,
      title: "The Silent Symphony",
      author: "Sarah Johnson",
      rating: 4.9,
      reviews: 2156,
      price: 23.99,
      image: "https://readdy.ai/api/search-image?query=Premium%20book%20cover%20design%20for%20literary%20fiction%2C%20elegant%20and%20sophisticated%20design%2C%20modern%20typography%2C%20bestseller%20quality%20book%20mockup&width=300&height=450&seq=related3&orientation=portrait"
    },
    {
      id: 4,
      title: "Midnight Reflections",
      author: "Sarah Johnson",
      rating: 4.6,
      reviews: 756,
      price: 20.99,
      image: "https://readdy.ai/api/search-image?query=Professional%20literary%20fiction%20book%20cover%2C%20sophisticated%20design%20with%20elegant%20typography%2C%20contemporary%20book%20cover%20style%2C%20premium%20quality%20mockup&width=300&height=450&seq=related4&orientation=portrait"
    }
  ];

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-[#1a4280] mb-4">More by Sarah Johnson</h2>
          <p className="text-xl text-gray-600">Discover other captivating stories from the same author</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto">
          {relatedBooks.map((book) => (
            <div key={book.id} className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300 transform hover:scale-105">
              <div className="relative">
               
                <img
                  src={book.image}
                  alt={book.title}
                  className="w-full h-80 object-cover"
                />
                <div className="absolute top-4 right-4 bg-yellow-400 text-white px-2 py-1 rounded-full text-sm font-semibold">
                  ${book.price}
                </div>
              </div>
              
              <div className="p-6">
                <h3 className="text-xl font-bold text-[#1a4280] mb-2 line-clamp-2">{book.title}</h3>
                <p className="text-gray-600 mb-3">by {book.author}</p>
                
                <div className="flex items-center mb-4">
                  <div className="flex text-yellow-400">
                    {[...Array(5)].map((_, i) => (
                      <i key={i} className={`ri-star-${i < Math.floor(book.rating) ? 'fill' : 'line'} text-sm`}></i>
                    ))}
                  </div>
                  <span className="ml-2 text-sm text-gray-600">
                    {book.rating} ({book.reviews} reviews)
                  </span>
                </div>
                
                <div className="flex space-x-2">
                  <button className="flex-1 bg-gradient-to-r from-[#1a4280] to-[#6989b0] text-white py-2 px-4 rounded-full hover:shadow-lg transition-all duration-300 text-sm font-semibold cursor-pointer">
                    <i className="ri-shopping-cart-line mr-1"></i>
                    Buy Now
                  </button>
                  <button className="px-4 py-2 border border-[#1a4280] text-[#1a4280] rounded-full hover:bg-[#1a4280] hover:text-white transition-all duration-300 cursor-pointer">
                    <i className="ri-book-open-line"></i>
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Author Collection CTA */}
        <div className="bg-gradient-to-r from-[#1a4280] to-[#6989b0] rounded-2xl p-8 mt-16 text-center text-white">
          <h3 className="text-3xl font-bold mb-4">Complete Collection</h3>
          <p className="text-xl mb-6">Get all of Sarah Johnson&apos;s books in one special bundle</p>
          <div className="flex items-center justify-center space-x-4 mb-6">
            <span className="text-2xl font-bold line-through text-white/70">$89.96</span>
            <span className="text-3xl font-bold text-yellow-400">$59.99</span>
            <span className="bg-red-500 text-white px-3 py-1 rounded-full text-sm">Save 33%</span>
          </div>
          <button className="bg-white text-[#1a4280] px-8 py-3 rounded-full hover:bg-gray-100 transition-all duration-300 transform hover:scale-105 font-semibold cursor-pointer">
            <i className="ri-gift-line mr-2"></i>
            Get Complete Collection
          </button>
        </div>
      </div>
    </section>
  );
}