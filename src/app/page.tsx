import { Metadata } from "next";
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
  title:
    "Mom's Secret Spices | Premium Artisanal Indian Spices & AI Cooking Studio",
  description:
    "Handcrafted artisanal Indian spice blends freshly stone-ground with zero adulteration. Explore our catalog and step inside the interactive 3D Cooking Studio.",
};

export default function HomePage() {
  return (
    <main className="flex-1 flex flex-col w-full ">
      <HeroSection />
      <SpiceRibbon />
      <FeaturedSpicesSection />
      <StudioSpotlightSection />
      <CategoriesSection />
      <HeritageQualitySection />
      <DistributorSection />
      <FinalCtaSection />
    </main>
  );
}
