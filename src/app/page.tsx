import HeroSection from "@/components/HeroSection";
import About from "@/components/About";
import OurServices from "@/components/OurServices";
import Portfolio from "@/components/Portfolio";
import Testimonials from "@/components/Testimonials";
import Pricing from "@/components/Pricing";
import Contact from "@/components/Contact";

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
    </>
  );
}
