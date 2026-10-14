import { Metadata } from "next";
import CookingStudioExperience from "@/components/experience/CookingStudioExperience";
import { Badge } from "@/components/ui";

export const metadata: Metadata = {
  title: "Cooking Studio Experience | Mom's Secret Spices",
  description:
    "Interactive 3D Indian kitchen cooking experience with guided heirloom recipes and aroma tempering.",
};

export default function ExperiencePage() {
  return (
    <main className="flex-1 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-10 md:py-16">
      <div className="text-center max-w-2xl mx-auto mb-10 space-y-3">
        <Badge variant="gold">✨ Interactive 3D Kitchen Studio</Badge>
        <h1 className="font-heading text-3xl sm:text-4xl md:text-5xl font-bold text-brand-brown">
          Immersive Cooking Experience
        </h1>
        <p className="text-base text-brand-brown/75 leading-relaxed">
          Step inside our virtual Indian home kitchen. Follow step-by-step heirloom preparations, watch the stone pot temper, and master authentic spice techniques.
        </p>
      </div>

      <CookingStudioExperience />
    </main>
  );
}
