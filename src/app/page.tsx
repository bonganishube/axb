import Header from "@/components/Header";
import Hero from "@/components/Hero";
import WhatWeDo from "@/components/WhatWeDo";
import Testimonial from "@/components/Testimonial";
import Pricing from "@/components/Pricing";
import Process from "@/components/Process";
import CtaSection from "@/components/CtaSection";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <WhatWeDo />
        <Testimonial />
        <Pricing />
        <Process />
        <CtaSection />
      </main>
      <Footer />
    </>
  );
}
