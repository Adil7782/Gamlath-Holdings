import { CallToAction } from "@/sections/CallToAction";
import { Footer } from "@/sections/Footer";
import Gallery from "@/sections/Gallery";
import { Navbar } from "@/sections/Header";
import { Hero } from "@/sections/Hero";
import { LogoTicker } from "@/sections/LogoTicker";
import { Pricing } from "@/sections/Pricing";
import { ProductShowcase } from "@/sections/ProductShowcase";
import { Testimonials } from "@/sections/Testimonials";

export default function Home() {
  return (
    <>
     <Navbar />
      <section id="about"><Hero /></section>
      <section id="customers"><LogoTicker /></section>
      <section id="features"><ProductShowcase /></section>
      <section id="gallery"><Gallery /></section>
      <section id="pricing"><Pricing /></section>
      <section id="testimonials"><Testimonials /></section>
      <section id="cta"><CallToAction /></section>
      <Footer />
    </>
  );
}
