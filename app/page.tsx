import Header from '@/components/Header';
import Footer from '@/components/Footer';
import HeroSection from '@/components/home/HeroSection';
import FeaturedBook from '@/components/home/FeaturedBook';
import AboutAuthor from '@/components/home/AboutAuthor';
// import ReviewsSection from '@/components/home/ReviewsSection';
import CallToAction from '@/components/home/CallToAction';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: "Home – Public Speaking",  
  description: "",
};

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-white via-blue-50/30 to-blue-100/20">
      <Header />
      <HeroSection />
      <FeaturedBook />
      <AboutAuthor />
      {/* <ReviewsSection /> */}
      <CallToAction />
      <Footer />
    </div>
  );
}