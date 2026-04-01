import { useLenis } from "./hooks/useLenis";
import Navbar from "./components/layout/Navbar";
import Footer from "./components/layout/Footer";
import WhatsAppFloat from "./components/layout/WhatsAppFloat";
import Hero from "./components/sections/Hero";
import Gallery from "./components/sections/Gallery";
import Services from "./components/sections/Services";
import Testimonials from "./components/sections/Testimonials";
import Location from "./components/sections/Location";
import CtaFinal from "./components/sections/CtaFinal";

export default function App() {
  useLenis();

  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <Gallery />
        <Services />
        <Testimonials />
        <Location />
        <CtaFinal />
      </main>
      <Footer />
      <WhatsAppFloat />
    </>
  );
}
