import Cursor from "@/components/Cursor";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Marquee from "@/components/Marquee";
import Services from "@/components/Services";
import Showcase from "@/components/Showcase";
import Guarantee from "@/components/Guarantee";
import Results from "@/components/Results";
import CityBand from "@/components/CityBand";
import Testimonials from "@/components/Testimonials";
import Process from "@/components/Process";
import Pricing from "@/components/Pricing";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main>
      <Cursor />
      <Navbar />
      <Hero />
      <Marquee />
      <Services />
      <Showcase />
      <Guarantee />
      <Results />
      <CityBand />
      <Testimonials />
      <Process />
      <Pricing />
      <Contact />
      <Footer />
    </main>
  );
}
