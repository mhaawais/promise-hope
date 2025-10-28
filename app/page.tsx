import Header from '@/components/Header';
import Footer from '@/components/Footer';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: "Home – Promise Hope",  
  description: "Discover Promise Hope's journey as a speaker, educator, author, wisdom, and real-world experience.",
};

export default function Home() {
  return (
    <div>
      <Header />
      <Footer />
    </div>
  );
}