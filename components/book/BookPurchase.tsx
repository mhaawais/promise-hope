'use client';

import { useState } from 'react';
import Image from 'next/image';

export default function BookPurchase() {                               
  const [selectedFormat, setSelectedFormat] = useState('hardcover');
  const [quantity, setQuantity] = useState(1);

  const formats = [
    { id: 'hardcover', name: 'Hardcover', price: 29.99, description: 'Premium hardcover edition', image: '/assets/images/Hardcover-1.png' },
    { id: 'paperback', name: 'Paperback', price: 24.99, description: 'Standard paperback edition', image: '/assets/images/paperback.png' },
    { id: 'ebook', name: 'E-book', price: 12.99, description: 'Digital edition for all devices', image: '/assets/images/ebook.png' },
    // { id: 'audiobook', name: 'Audiobook', price: 19.99, description: 'Narrated by professional voice actor' },
  ];

  const selectedFormatData = formats.find((f) => f.id === selectedFormat);
  const totalPrice = selectedFormatData ? selectedFormatData.price * quantity : 0;

  return (
    <section className="py-20 bg-gradient-to-br from-gray-50 to-blue-50/30">
      <div className="container mx-auto px-4 sm:px-6">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-12 px-4">
            <h2 className="text-3xl sm:text-4xl font-bold text-[#1a4280] mb-4">Get Your Copy Today</h2>
            <p className="text-lg sm:text-xl text-gray-600">Choose your preferred format and start reading</p>
          </div>

          {/* Responsive image container */}
          {/* <div className="flex justify-center mb-12">
            <div className="border-4 border-black p-2 sm:p-4 rounded-lg bg-black max-w-full w-full sm:w-[400px] md:w-[500px] lg:w-[600px]">
              
              <Image               
                src="/assets/images/full.JPG"
                alt="Book Cover"
                width={600}
                height={600}
                className="w-full h-auto rounded-lg shadow-lg"
              />

            </div>
          </div> */}

          <div className="bg-white rounded-2xl shadow-xl p-6 sm:p-8">
            <div className="grid grid-cols-1 lg:grid-cols-1 gap-8">
              {/* Purchase Options */}
              <div>
                <h3 className="text-2xl font-bold text-[#1a4280] mb-6">Choose Format</h3>

                <div className="space-y-4 mb-6">
                  {formats.map((format) => (
                    <label
                      key={format.id}
                      className={`block p-4 rounded-lg border-2 cursor-pointer transition-all duration-300 ${
                        selectedFormat === format.id
                          ? 'border-[#1a4280] bg-[#1a4280]/5'
                          : 'border-gray-200 hover:border-[#6989b0]'
                      }`}
                    >
                      <input
                        type="radio"
                        name="format"
                        value={format.id}
                        checked={selectedFormat === format.id}
                        onChange={(e) => setSelectedFormat(e.target.value)}
                        className="sr-only"
                      />
                      <div className="flex justify-between items-center">
                        <div>
                          <p className="font-semibold text-[#1a4280]">{format.name}</p>
                          <p className="text-sm text-gray-600">{format.description}</p>
                        </div>
                        <p className="text-xl font-bold text-[#1a4280]">${format.price}</p>
                      </div>
                       <Image
                            src={format.image}
                            alt={format.name}
                            width={250}
                            height={250}
                            className="object-cover rounded-sm mt-2"
                          />
                    </label>
                  ))}
                </div>

                {/* Quantity */}
                <div className="mb-6">
                  <label className="block text-sm font-medium text-gray-700 mb-2">Quantity</label>
                  <div className="flex items-center space-x-3">
                    <button
                      onClick={() => setQuantity(Math.max(1, quantity - 1))}
                      className="w-10 h-10 bg-gray-200 rounded-full flex items-center justify-center hover:bg-gray-300 transition-colors cursor-pointer"
                    >
                      <i className="ri-subtract-line"></i>
                    </button>
                    <span className="text-xl font-semibold w-8 text-center">{quantity}</span>
                    <button
                      onClick={() => setQuantity(quantity + 1)}
                      className="w-10 h-10 bg-gray-200 rounded-full flex items-center justify-center hover:bg-gray-300 transition-colors cursor-pointer"
                    >
                      <i className="ri-add-line"></i>
                    </button>
                  </div>
                </div>

                {/* Special Offers */}
                <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-4 mb-6">
                  <div className="flex items-center mb-2">
                    <i className="ri-gift-line text-yellow-600 mr-2"></i>
                    <span className="font-semibold text-yellow-800">Special Offer</span>
                  </div>
                  <p className="text-sm text-yellow-700">
                    Free shipping on orders over $25 • 30-day money-back guarantee
                  </p>
                </div>
              </div>

              {/* Order Summary */}
              <div>
                <h3 className="text-2xl font-bold text-[#1a4280] mb-6">Order Summary</h3>

                <div className="bg-gray-50 rounded-lg p-6 mb-6">
                  <div className="space-y-3">
                    <div className="flex justify-between">
                      <span>Public Speaking ({selectedFormatData?.name})</span>
                      <span>${selectedFormatData?.price}</span>
                    </div>
                    <div className="flex justify-between">
                      <span>Quantity</span>
                      <span>{quantity}</span>
                    </div>
                    <div className="flex justify-between">
                      <span>Subtotal</span>
                      <span>${totalPrice.toFixed(2)}</span>
                    </div>
                    <div className="flex justify-between">
                      <span>Shipping</span>
                      <span className="text-green-600">Free</span>
                    </div>
                    <div className="border-t pt-3">
                      <div className="flex justify-between font-bold text-lg">
                        <span>Total</span>
                        <span className="text-[#1a4280]">${totalPrice.toFixed(2)}</span>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Purchase Buttons */}
                <div className="space-y-4">
                  {/* <button className="w-full bg-gradient-to-r from-[#1a4280] to-[#6989b0] text-white py-4 rounded-full text-lg font-semibold hover:shadow-xl transition-all duration-300 transform hover:scale-105 cursor-pointer">
                    <i className="ri-shopping-cart-line mr-2"></i>
                    Grab Your Copy
                  </button> */}

                  <button className="w-full bg-gradient-to-r from-[#1a4280] to-[#6989b0] text-white py-4 rounded-full text-lg font-semibold hover:bg-yellow-500 transition-all duration-300 transform hover:scale-105 cursor-pointer">
                    <i className="ri-flashlight-line mr-2"></i>
                    Buy Now
                  </button>

                  {/* <button className="w-full border-2 border-[#1a4280] text-[#1a4280] py-4 rounded-full text-lg font-semibold hover:bg-[#1a4280] hover:text-white transition-all duration-300 cursor-pointer">
                    <i className="ri-gift-line mr-2"></i>
                    Gift This Book
                  </button> */}
                </div>

                {/* Trust Badges */}
                <div className="mt-8 space-y-3">
                  <div className="flex items-center text-sm text-gray-600">
                    <i className="ri-shield-check-line text-green-500 mr-2"></i>
                    <span>Secure checkout with SSL encryption</span>
                  </div>
                  <div className="flex items-center text-sm text-gray-600">
                    <i className="ri-truck-line text-blue-500 mr-2"></i>
                    <span>Free shipping worldwide on orders over $25</span>
                  </div>
                  <div className="flex items-center text-sm text-gray-600">
                    <i className="ri-arrow-go-back-line text-orange-500 mr-2"></i>
                    <span>30-day money-back guarantee</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}


























// 'use client';

// import { useState } from 'react';
// import Image from 'next/image';

// export default function BookPurchase() {
//   const [selectedFormat, setSelectedFormat] = useState('hardcover');
//   const [quantity, setQuantity] = useState(1);

//   const formats = [
//     { id: 'hardcover', name: 'Hardcover', price: 29.99, description: 'Premium hardcover edition' },
//     { id: 'paperback', name: 'Paperback', price: 24.99, description: 'Standard paperback edition' },
//     { id: 'ebook', name: 'E-book', price: 12.99, description: 'Digital edition for all devices' },
//     { id: 'audiobook', name: 'Audiobook', price: 19.99, description: 'Narrated by professional voice actor' }
//   ];

//   const selectedFormatData = formats.find(f => f.id === selectedFormat);
//   const totalPrice = selectedFormatData ? selectedFormatData.price * quantity : 0;

//   return (
//     <section className="py-20 bg-gradient-to-br from-gray-50 to-blue-50/30">
//       <div className="container mx-auto px-4">
//         <div className="max-w-4xl mx-auto">
//           <div className="text-center mb-12">
//             <h2 className="text-4xl font-bold text-[#1a4280] mb-4">Get Your Copy Today</h2>
//             <p className="text-xl text-gray-600">Choose your preferred format and start reading</p>
//           </div>

         
//   <Image
//     src="/assets/images/full.jpg"
//     alt="Book Cover"
//     width={600}
//     height={600}
//     className="mb-8 rounded-lg shadow-lg mx-auto"
//   />



//           <div className="bg-white rounded-2xl shadow-xl p-8">
//             <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
//               {/* Purchase Options */}
//               <div>
//                 <h3 className="text-2xl font-bold text-[#1a4280] mb-6">Choose Format</h3>
                
//                 <div className="space-y-4 mb-6">
//                   {formats.map((format) => (
//                     <label
//                       key={format.id}
//                       className={`block p-4 rounded-lg border-2 cursor-pointer transition-all duration-300 ${
//                         selectedFormat === format.id
//                           ? 'border-[#1a4280] bg-[#1a4280]/5'
//                           : 'border-gray-200 hover:border-[#6989b0]'
//                       }`}
//                     >
//                       <input
//                         type="radio"
//                         name="format"
//                         value={format.id}
//                         checked={selectedFormat === format.id}
//                         onChange={(e) => setSelectedFormat(e.target.value)}
//                         className="sr-only"
//                       />
//                       <div className="flex justify-between items-center">
//                         <div>
//                           <div className="font-semibold text-[#1a4280]">{format.name}</div>
//                           <div className="text-sm text-gray-600">{format.description}</div>
//                         </div>
//                         <div className="text-xl font-bold text-[#1a4280]">${format.price}</div>
//                       </div>
//                     </label>
//                   ))}
//                 </div>

//                 {/* Quantity */}
//                 <div className="mb-6">
//                   <label className="block text-sm font-medium text-gray-700 mb-2">Quantity</label>
//                   <div className="flex items-center space-x-3">
//                     <button
//                       onClick={() => setQuantity(Math.max(1, quantity - 1))}
//                       className="w-10 h-10 bg-gray-200 rounded-full flex items-center justify-center hover:bg-gray-300 transition-colors cursor-pointer"
//                     >
//                       <i className="ri-subtract-line"></i>
//                     </button>
//                     <span className="text-xl font-semibold w-8 text-center">{quantity}</span>
//                     <button
//                       onClick={() => setQuantity(quantity + 1)}
//                       className="w-10 h-10 bg-gray-200 rounded-full flex items-center justify-center hover:bg-gray-300 transition-colors cursor-pointer"
//                     >
//                       <i className="ri-add-line"></i>
//                     </button>
//                   </div>
//                 </div>

//                 {/* Special Offers */}
//                 <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-4 mb-6">
//                   <div className="flex items-center mb-2">
//                     <i className="ri-gift-line text-yellow-600 mr-2"></i>
//                     <span className="font-semibold text-yellow-800">Special Offer</span>
//                   </div>
//                   <p className="text-sm text-yellow-700">
//                     Free shipping on orders over $25 • 30-day money-back guarantee
//                   </p>
//                 </div>
//               </div>

//               {/* Order Summary */}
//               <div>
//                 <h3 className="text-2xl font-bold text-[#1a4280] mb-6">Order Summary</h3>
                
//                 <div className="bg-gray-50 rounded-lg p-6 mb-6">
//                   <div className="space-y-3">
//                     <div className="flex justify-between">
//                       <span>The Journey Within ({selectedFormatData?.name})</span>
//                       <span>${selectedFormatData?.price}</span>
//                     </div>
//                     <div className="flex justify-between">
//                       <span>Quantity</span>
//                       <span>{quantity}</span>
//                     </div>
//                     <div className="flex justify-between">
//                       <span>Subtotal</span>
//                       <span>${totalPrice.toFixed(2)}</span>
//                     </div>
//                     <div className="flex justify-between">
//                       <span>Shipping</span>
//                       <span className="text-green-600">Free</span>
//                     </div>
//                     <div className="border-t pt-3">
//                       <div className="flex justify-between font-bold text-lg">
//                         <span>Total</span>
//                         <span className="text-[#1a4280]">${totalPrice.toFixed(2)}</span>
//                       </div>
//                     </div>
//                   </div>
//                 </div>

//                 {/* Purchase Buttons */}
//                 <div className="space-y-4">
//                   <button className="w-full bg-gradient-to-r from-[#1a4280] to-[#6989b0] text-white py-4 rounded-full text-lg font-semibold hover:shadow-xl transition-all duration-300 transform hover:scale-105 cursor-pointer">
//                     <i className="ri-shopping-cart-line mr-2"></i>
//                     Add to Cart
//                   </button>
                  
//                   <button className="w-full bg-yellow-400 text-black py-4 rounded-full text-lg font-semibold hover:bg-yellow-500 transition-all duration-300 transform hover:scale-105 cursor-pointer">
//                     <i className="ri-flashlight-line mr-2"></i>
//                     Buy Now
//                   </button>

//                   <button className="w-full border-2 border-[#1a4280] text-[#1a4280] py-4 rounded-full text-lg font-semibold hover:bg-[#1a4280] hover:text-white transition-all duration-300 cursor-pointer">
//                     <i className="ri-gift-line mr-2"></i>
//                     Gift This Book
//                   </button>
//                 </div>

//                 {/* Trust Badges */}
//                 <div className="mt-8 space-y-3">
//                   <div className="flex items-center text-sm text-gray-600">
//                     <i className="ri-shield-check-line text-green-500 mr-2"></i>
//                     <span>Secure checkout with SSL encryption</span>
//                   </div>
//                   <div className="flex items-center text-sm text-gray-600">
//                     <i className="ri-truck-line text-blue-500 mr-2"></i>
//                     <span>Free shipping worldwide on orders over $25</span>
//                   </div>
//                   <div className="flex items-center text-sm text-gray-600">
//                     <i className="ri-arrow-go-back-line text-orange-500 mr-2"></i>
//                     <span>30-day money-back guarantee</span>
//                   </div>
//                 </div>
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// }