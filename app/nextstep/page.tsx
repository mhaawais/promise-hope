import Footer from '@/components/Footer';
import Header from '@/components/Header';
import React from 'react';

import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: "Booking – Public Speaking",  
  description: "Booked Public Speaking: Credit Edition by Jacob Ken Robinson and shipped to Client.",
};

const Nextstep = () => {
  return (
    <>
      <Header />
      <div className="bg-gradient-to-br from-white via-blue-50/30 to-blue-100/20">
        <div className="container mx-auto px-4 py-20">
          <h1 className="text-4xl font-bold text-center mb-8">Next Steps</h1>
          <p className="text-lg text-center mb-12">
            Thank you for your interest! Here are the next steps to get involved.
          </p>
          {/* Add your next steps content here */}
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Nextstep;
