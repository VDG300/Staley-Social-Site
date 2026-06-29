import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Services from "@/components/Services";
import Guarantee from "@/components/Guarantee";
import Results from "@/components/Results";
import Testimonials from "@/components/Testimonials";
import Process from "@/components/Process";
import Pricing from "@/components/Pricing";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main>
      <Navbar />
      <Hero />
      <Services />
      <Guarantee />
      <Results />
      <Testimonials />
      <Process />
      <Pricing />
      <Contact />
      <Footer />
    </main>
  );
}
