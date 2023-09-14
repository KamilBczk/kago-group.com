import HeroSection from "@/components/HeroSection";
import About from "@/components/About";
import OurServices from "@/components/OurServices";
import Portfolio from "@/components/Portfolio";
import Testimonials from "@/components/Testimonials";
import Pricing from "@/components/Pricing";
import Contact from "@/components/Contact";
import ContactInfo from "@/components/ContactInfo";
import { Metadata } from "next";

// either Static metadata
export const metadata: Metadata = {
  title: "Agence de création de site web | Kago Group",
};

export default function Home() {
  return (
    <>
      <HeroSection />
      <About />
      <OurServices />
      <Portfolio />
      <Testimonials />
      <Pricing />
      <Contact />
      <ContactInfo />
    </>
  );
}
