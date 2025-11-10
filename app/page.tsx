import Header from "@/components/Header";
import Footer from "@/components/Footer";
import type { Metadata } from "next";
import Hero from "@/components/home/hero";
import Hero2 from "@/components/home/hero2";
import Hero3 from "@/components/home/hero3";
import Hero4 from "@/components/home/hero4";
import Hero5 from "@/components/home/hero5";

export const metadata: Metadata = {
  title: "Home – Promise Hope",
  description:
    "Discover the inspiring journey of Promise Hope, a gospel minister, author, and songwriter dedicated to spreading faith and hope worldwide through her powerful story and uplifting works.",
};

export default function Home() {
  return (
    <div>
      <Header />
      <Hero />
      <Hero2 />
      <Hero3 />
      <Hero4 />
      <Hero5 />
      <Footer />
    </div>
  );
}
