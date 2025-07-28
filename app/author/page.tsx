import Header from '@/components/Header';
import Footer from '@/components/Footer';
import AuthorHero from '@/components/author/AuthorHero';
import AuthorBio from '@/components/author/AuthorBio';
import AuthorGallery from '@/components/author/AuthorGallery';
// import AuthorBooks from '@/components/author/AuthorBooks';
import AuthorAchievements from '@/components/author/AuthorAchievements';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: "Author – Jacob Ken Robinson",  
  description: "",
};

export default function AuthorPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-white via-blue-50/30 to-blue-100/20">
      <Header />
      <AuthorHero />
      <AuthorBio />
      <AuthorGallery />
      {/* <AuthorBooks /> */}
      <AuthorAchievements />
      <Footer />
    </div>
  );
}