import type { Metadata } from "next";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import BrandingHero from "@/components/branding/BrandingHero";
import BrandCatalogue from "@/components/branding/BrandCatalogue";
import BrandingCta from "@/components/branding/BrandingCta";

export const metadata: Metadata = {
  title: "Brand Accelerator | AXB AI Consulting",
  description:
    "Look as professional as you operate. The AXB Brand Accelerator gives you everything you need to build a consistent, premium brand presence across digital and physical touchpoints.",
};

export default function BrandingPage() {
  return (
    <>
      <Header solid active="Branding" />
      <main>
        <BrandingHero />
        <BrandCatalogue />
        <BrandingCta />
      </main>
      <Footer />
    </>
  );
}
