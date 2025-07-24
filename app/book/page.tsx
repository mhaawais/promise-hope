import Header from '@/components/Header';
import Footer from '@/components/Footer';
import BookHero from '@/components/book/BookHero';
import BookDetails from '@/components/book/BookDetails';
import BookReviews from '@/components/book/BookReviews';
// import RelatedBooks from '@/components/book/RelatedBooks';
// import BookPurchase from '@/components/book/BookPurchase';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: "Book – Public Speaking",  
  description: "",
};

export default function BookPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-white via-blue-50/30 to-blue-100/20">
      <Header />
      <BookHero />
      <BookDetails />
      <BookReviews />
      <Footer />
    </div>
  );
}