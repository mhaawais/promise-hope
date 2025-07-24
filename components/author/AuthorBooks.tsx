'use client';

import React from "react"; 
export default function AuthorBooks() {
  // const [selectedBook, setSelectedBook] = useState(null);

  // const books = [
  //   {
  //     id: 1,
  //     title: "The Journey Within",
  //     year: 2024,
  //     description: "A profound exploration of human resilience and the power of self-discovery.",
  //     rating: 4.9,
  //     reviews: 2547,
  //     status: "Latest Release",
  //     image: "https://readdy.ai/api/search-image?query=Professional%20book%20cover%20design%20for%20The%20Journey%20Within%2C%20elegant%20literary%20fiction%20cover%2C%20sophisticated%20typography%2C%20deep%20blue%20and%20gold%20color%20scheme&width=300&height=450&seq=book1&orientation=portrait"
  //   },
  //   {
  //     id: 2,
  //     title: "Midnight Reflections",
  //     year: 2021,
  //     description: "A haunting tale of love, loss, and the memories that define us.",
  //     rating: 4.6,
  //     reviews: 1834,
  //     status: "Bestseller",
  //     image: "https://readdy.ai/api/search-image?query=Professional%20book%20cover%20design%20for%20Midnight%20Reflections%2C%20elegant%20literary%20fiction%20cover%2C%20sophisticated%20design%20with%20dark%20tones%20and%20elegant%20typography&width=300&height=450&seq=book2&orientation=portrait"
  //   },
  //   {
  //     id: 3,
  //     title: "The Silent Symphony",
  //     year: 2019,
  //     description: "An award-winning novel about finding your voice in a world of silence.",
  //     rating: 4.8,
  //     reviews: 2156,
  //     status: "Award Winner",
  //     image: "https://readdy.ai/api/search-image?query=Professional%20book%20cover%20design%20for%20The%20Silent%20Symphony%2C%20elegant%20literary%20fiction%20cover%2C%20sophisticated%20design%20with%20musical%20elements%20and%20elegant%20typography&width=300&height=450&seq=book3&orientation=portrait"
  //   },
  //   {
  //     id: 4,
  //     title: "Whispers in the Wind",
  //     year: 2017,
  //     description: "A captivating story of family secrets and the courage to face the truth.",
  //     rating: 4.7,
  //     reviews: 1923,
  //     status: "Bestseller",
  //     image: "https://readdy.ai/api/search-image?query=Professional%20book%20cover%20design%20for%20Whispers%20in%20the%20Wind%2C%20elegant%20literary%20fiction%20cover%2C%20sophisticated%20design%20with%20nature%20elements%20and%20elegant%20typography&width=300&height=450&seq=book4&orientation=portrait"
  //   },
  //   {
  //     id: 5,
  //     title: "Echoes of Tomorrow",
  //     year: 2015,
  //     description: "The debut novel that launched Sarah's career and won the Hemingway Award.",
  //     rating: 4.5,
  //     reviews: 1567,
  //     status: "Debut Novel",
  //     image: "https://readdy.ai/api/search-image?query=Professional%20book%20cover%20design%20for%20Echoes%20of%20Tomorrow%2C%20elegant%20literary%20fiction%20cover%2C%20sophisticated%20design%20with%20futuristic%20elements%20and%20elegant%20typography&width=300&height=450&seq=book5&orientation=portrait"
  //   },
  //   {
  //     id: 6,
  //     title: "Seasons of Change",
  //     year: 2013,
  //     description: "A beautiful exploration of life's transitions and the strength found in change.",
  //     rating: 4.4,
  //     reviews: 1245,
  //     status: "Classic",
  //     image: "https://readdy.ai/api/search-image?query=Professional%20book%20cover%20design%20for%20Seasons%20of%20Change%2C%20elegant%20literary%20fiction%20cover%2C%20sophisticated%20design%20with%20seasonal%20elements%20and%20elegant%20typography&width=300&height=450&seq=book6&orientation=portrait"
  //   }
  // ];

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        {/* <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-[#1a4280] mb-4">Complete Works</h2>
          <p className="text-xl text-gray-600">Explore Jacob&apos;s literary journey through her published works</p>
        </div>

        {/* Books Grid 
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {books.map((book) => (
            <div
              key={book.id}
              className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300 transform hover:scale-105 cursor-pointer"
              onClick={() => setSelectedBook(book)}
            >
              <div className="relative">
                <img
                  src={book.image}
                  alt={book.title}
                  className="w-full h-80 object-cover"
                />
                <div className="absolute top-4 right-4">
                  <span className={`px-3 py-1 rounded-full text-sm font-semibold ${
                    book.status === 'Latest Release' ? 'bg-green-500 text-white' :
                    book.status === 'Award Winner' ? 'bg-yellow-500 text-white' :
                    book.status === 'Bestseller' ? 'bg-blue-500 text-white' :
                    'bg-gray-500 text-white'
                  }`}>
                    {book.status}
                  </span>
                </div>
              </div>
              
              <div className="p-6">
                <h3 className="text-xl font-bold text-[#1a4280] mb-2">{book.title}</h3>
                <p className="text-gray-600 mb-3">Published {book.year}</p>
                <p className="text-gray-700 mb-4 text-sm leading-relaxed">{book.description}</p>
                
                <div className="flex items-center justify-between">
                  <div className="flex items-center">
                    <div className="flex text-yellow-400">
                      {[...Array(5)].map((_, i) => (
                        <i key={i} className={`ri-star-${i < Math.floor(book.rating) ? 'fill' : 'line'} text-sm`}></i>
                      ))}
                    </div>
                    <span className="ml-2 text-sm text-gray-600">
                      {book.rating} ({book.reviews} reviews)
                    </span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Book Details Modal 
        {selectedBook && (
          <div className="fixed inset-0 bg-black/80 flex items-center justify-center z-50 p-4">
            <div className="bg-white rounded-lg max-w-4xl w-full max-h-[90vh] overflow-y-auto">
              <div className="p-6">
                <div className="flex justify-between items-start mb-6">
                  <h3 className="text-3xl font-bold text-[#1a4280]">{selectedBook.title}</h3>
                  <button
                    onClick={() => setSelectedBook(null)}
                    className="text-gray-500 hover:text-gray-700 cursor-pointer"
                  >
                    <i className="ri-close-line text-2xl"></i>
                  </button>
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  <div>
                    <img
                      src={selectedBook.image}
                      alt={selectedBook.title}
                      className="w-full h-auto rounded-lg shadow-lg"
                    />
                  </div>
                  
                  <div className="space-y-6">
                    <div>
                      <span className={`inline-block px-3 py-1 rounded-full text-sm font-semibold mb-4 ${
                        selectedBook.status === 'Latest Release' ? 'bg-green-500 text-white' :
                        selectedBook.status === 'Award Winner' ? 'bg-yellow-500 text-white' :
                        selectedBook.status === 'Bestseller' ? 'bg-blue-500 text-white' :
                        'bg-gray-500 text-white'
                      }`}>
                        {selectedBook.status}
                      </span>
                      <p className="text-lg text-gray-700 leading-relaxed">{selectedBook.description}</p>
                    </div>
                    
                    <div className="flex items-center space-x-4">
                      <div className="flex text-yellow-400">
                        {[...Array(5)].map((_, i) => (
                          <i key={i} className={`ri-star-${i < Math.floor(selectedBook.rating) ? 'fill' : 'line'}`}></i>
                        ))}
                      </div>
                      <span className="text-lg font-semibold">{selectedBook.rating}</span>
                      <span className="text-gray-600">({selectedBook.reviews} reviews)</span>
                    </div>
                    
                    <div className="space-y-2 text-sm">
                      <div className="flex justify-between">
                        <span className="font-semibold text-[#1a4280]">Publication Year:</span>
                        <span>{selectedBook.year}</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="font-semibold text-[#1a4280]">Genre:</span>
                        <span>Literary Fiction</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="font-semibold text-[#1a4280]">Language:</span>
                        <span>English</span>
                      </div>
                    </div>
                    
                    <div className="flex space-x-4">
                      <button className="flex-1 bg-gradient-to-r from-[#1a4280] to-[#6989b0] text-white py-3 rounded-full hover:shadow-lg transition-all duration-300 font-semibold cursor-pointer">
                        <i className="ri-shopping-cart-line mr-2"></i>
                        Buy Now
                      </button>
                      <button className="px-6 py-3 border-2 border-[#1a4280] text-[#1a4280] rounded-full hover:bg-[#1a4280] hover:text-white transition-all duration-300 cursor-pointer">
                        <i className="ri-book-open-line mr-2"></i>
                        Read Sample
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )} */}

        {/* Collection CTA */}
        <div className="bg-gradient-to-r from-[#1a4280] to-[#6989b0] rounded-2xl p-8 mt-16 text-center text-white max-w-4xl mx-auto">
          <h3 className="text-3xl font-bold mb-4">Jacob&apos;s Book</h3>
          <p className="text-xl mb-6">Get my book in special discount</p>
          <div className="flex items-center justify-center space-x-4 mb-6">
            <span className="text-2xl font-bold line-through text-white/70">$29.99</span>
            <span className="text-3xl font-bold text-yellow-400">$24.99</span>
            <span className="bg-red-500 text-white px-3 py-1 rounded-full text-sm">Save 33%</span>
          </div>
          <button className="bg-white text-[#1a4280] px-8 py-3 rounded-full hover:bg-gray-100 transition-all duration-300 transform hover:scale-105 font-semibold cursor-pointer">
            <i className="ri-gift-line mr-2"></i>
            Get The Book
          </button>
        </div>
      </div>
    </section>
  );
}