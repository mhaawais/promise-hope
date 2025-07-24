import Header from '@/components/Header';
import Footer from '@/components/Footer';
import ContactHero from '@/components/contact/ContactHero';
import ContactForm from '@/components/contact/ContactForm';
import ContactInfo from '@/components/contact/ContactInfo';

import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: "Contact – Jacob Ken Robinson",  
  description: "",
};

export default function ContactPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-white via-blue-50/30 to-blue-100/20">
      <Header />
      <ContactHero />
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 container mx-auto px-4 py-20">
        <ContactForm />
        <ContactInfo />
      </div>
      <Footer />
    </div>
  );
}