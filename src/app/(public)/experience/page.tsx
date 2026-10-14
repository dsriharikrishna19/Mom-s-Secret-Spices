import { Metadata } from "next";
import CookingStudioExperience from "@/components/experience/CookingStudioExperience";
import { Badge, SparklesIcon } from "@/components/ui";

export const metadata: Metadata = {
  title: "Cooking Studio Experience | Mom's Secret Spices",
  description:
    "Interactive 3D Indian kitchen cooking experience with guided heirloom recipes and aroma tempering.",
};

export default function ExperiencePage() {
  return (
    <main className="flex-1 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 md:py-12 flex flex-col gap-6 sm:gap-8">
      <div className="text-center max-w-2xl mx-auto flex flex-col items-center gap-2.5">
        <Badge variant="gold" className="inline-flex items-center gap-1.5">
          <SparklesIcon className="w-3.5 h-3.5 text-brand-terracotta" />
          <span>Interactive 3D Kitchen Studio</span>
        </Badge>
        <h1 className="font-heading text-xl sm:text-2xl font-bold text-brand-brown">
          Immersive Cooking Experience
        </h1>
        <p className="text-sm sm:text-base text-brand-brown/75 leading-relaxed">
          Step inside our virtual Indian home kitchen. Follow step-by-step
          heirloom preparations, watch the stone pot temper, and master
          authentic spice techniques.
        </p>
      </div>

      <CookingStudioExperience />
    </main>
  );
}
