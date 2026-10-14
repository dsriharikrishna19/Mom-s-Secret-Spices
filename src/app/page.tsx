import { Metadata } from "next";
import { PRODUCTS } from "@/features/products/data";
import {
  HeroSection,
  SpiceRibbon,
  FeaturedSpicesSection,
  StudioSpotlightSection,
  CategoriesSection,
  HeritageQualitySection,
  DistributorSection,
  FinalCtaSection,
} from "@/components/home";

export const metadata: Metadata = {
  title: "Mom's Secret Spices | Premium Artisanal Indian Spices & AI Cooking Studio",
  description:
    "Handcrafted artisanal Indian spice blends freshly stone-ground with zero adulteration. Explore our catalog and step inside the interactive 3D Cooking Studio.",
};

export default function HomePage() {
  const featuredProducts = PRODUCTS.slice(0, 3);

  return (
    <main className="flex-1 flex flex-col w-full ">
      <HeroSection />
      <SpiceRibbon />
      <FeaturedSpicesSection products={featuredProducts} />
      <StudioSpotlightSection />
      <CategoriesSection />
      <HeritageQualitySection />
      <DistributorSection />
      <FinalCtaSection />
    </main>
  );
}
