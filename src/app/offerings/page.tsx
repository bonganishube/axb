import type { Metadata } from "next";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import OfferingsHero from "@/components/offerings/OfferingsHero";

export const metadata: Metadata = {
  title: "Offerings | AXB AI Consulting",
  description:
    "Build a business that runs smarter. Choose the solutions your business needs — AXB connects the right tools, automation and AI to help you save time, serve customers and grow.",
};

export default function OfferingsPage() {
  return (
    <>
      <Header active="Offerings" />
      <main>
        <OfferingsHero />
      </main>
      <Footer />
    </>
  );
}
