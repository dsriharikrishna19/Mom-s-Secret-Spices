import { Metadata } from "next";
import CinematicVideoExperience from "@/components/experience/CinematicVideoExperience";
import { Badge, SparklesIcon } from "@/components/ui";

export const metadata: Metadata = {
  title: "3D Cinematic Kitchen Film | Mom's Secret Spices",
  description:
    "Experience the sacred art of authentic Indian spice tempering in our 3D cinematic film.",
};

export default function ExperiencePage() {
  return (
    <main className="flex-1 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 md:py-12 flex flex-col gap-6 sm:gap-8">
      <div className="text-center max-w-2xl mx-auto flex flex-col items-center gap-2.5">
        <Badge variant="gold" className="inline-flex items-center gap-1.5">
          <SparklesIcon className="w-3.5 h-3.5 text-brand-terracotta" />
          <span>3D Cinematic Experience</span>
        </Badge>
        <h1 className="font-heading text-xl sm:text-2xl font-bold text-brand-brown">
          The Heritage Cooking Experience
        </h1>
        <p className="text-sm sm:text-base text-brand-brown/75 leading-relaxed">
          Witness the authentic stone-ground tempering craft in our 3D cinematic film,
          showcasing the vibrant aroma and heritage of Indian home cooking.
        </p>
      </div>

      <CinematicVideoExperience />
    </main>
  );
}
