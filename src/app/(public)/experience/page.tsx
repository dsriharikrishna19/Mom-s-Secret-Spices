import { Metadata } from "next";
import CinematicPromptScene from "@/components/experience/CinematicPromptScene";
import { Badge, SparklesIcon } from "@/components/ui";

export const metadata: Metadata = {
  title: "3D Cinematic Kitchen Scene | Mom's Secret Spices",
  description:
    "Master 3D Cinematic AI Video Scene prompt and visual storyboard for Mom's Secret Spices heritage Indian kitchen.",
};

export default function ExperiencePage() {
  return (
    <main className="flex-1 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 md:py-12 flex flex-col gap-6 sm:gap-8">
      <div className="text-center max-w-2xl mx-auto flex flex-col items-center gap-2.5">
        <Badge variant="gold" className="inline-flex items-center gap-1.5">
          <SparklesIcon className="w-3.5 h-3.5 text-brand-terracotta" />
          <span>3D Cinematic Kitchen Vision</span>
        </Badge>
        <h1 className="font-heading text-xl sm:text-2xl font-bold text-brand-brown">
          The Heritage Cooking Experience
        </h1>
        <p className="text-sm sm:text-base text-brand-brown/75 leading-relaxed">
          Ultra-realistic 3D cinematic scene prompt capturing the sacred art of stone-ground tempering,
          ready for Sora, Runway Gen-3, Kling AI, and Unreal Engine 5 production.
        </p>
      </div>

      <CinematicPromptScene />
    </main>
  );
}
