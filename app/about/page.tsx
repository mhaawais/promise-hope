import Header from "@/components/Header";
import Footer from "@/components/Footer";

import type { Metadata } from "next";
import About1 from "@/components/about/abouts";

export const metadata: Metadata = {
  title: "About – Promise Hope",
  description:
    "Learn about Promise Hope's inspiring journey from a refugee camp to becoming a gospel minister, author, and songwriter dedicated to spreading faith and hope around the world.",
};

const About = () => {
  return (
    <div>
      <Header />
      <About1 />
      <Footer />
    </div>
  );
};

export default About;
