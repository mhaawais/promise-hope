import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Book1 from "@/components/book/books";

import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Book – The Way to Greatness",
  description:
    "Explore 'The Way to Greatness' by Promise Hope – a transformative journey of faith, healing, and purpose. Discover how to rise above life's challenges through divine strength and walk boldly into your God-ordained destiny.",
};

const Book = () => {
  return (
    <div>
      <Header />
      <Book1 />
      <Footer />
    </div>
  );
};

export default Book;
