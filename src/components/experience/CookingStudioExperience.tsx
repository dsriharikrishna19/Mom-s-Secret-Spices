"use client";

import { useState, useEffect } from "react";
import dynamic from "next/dynamic";
import { RECIPES } from "@/data/recipes";
import { PRODUCTS } from "@/features/products/data";
import { fireCookingCelebration } from "@/components/magicui/confetti";
import { Badge, ClockIcon, UtensilsIcon } from "@/components/ui";
import { CompanionConsole, CompanionStatus } from "./CompanionConsole";
import { ProductSpotlightCard } from "./ProductSpotlightCard";

// Dynamic import with SSR disabled for Three.js WebGL canvas
const KitchenCanvas = dynamic(
  () => import("@/components/experience/KitchenCanvas"),
  {
    ssr: false,
    loading: () => (
      <div className="w-full aspect-16/9 bg-linear-to-br from-brand-sand/40 via-brand-cream to-brand-sand/30 rounded-xl border border-brand-sand/80 flex flex-col items-center justify-center p-6 sm:p-8 animate-pulse text-center gap-2">
        <UtensilsIcon className="w-8 h-8 text-brand-terracotta" />
        <span className="font-heading font-semibold text-brand-brown text-sm sm:text-base">
          Heating up the kitchen stage...
        </span>
        <span className="text-xs text-brand-brown/60">
          Loading 3D cookware and spice simulation
        </span>
      </div>
    ),
  },
);

type AllowedSceneAction = "welcome" | "prepare" | "show_spice" | "cooking" | "complete";

export default function CookingStudioExperience() {
  const [selectedRecipeIndex, setSelectedRecipeIndex] = useState(0);
  const [currentStepIndex, setCurrentStepIndex] = useState(0);
  const [sceneState, setSceneState] = useState<AllowedSceneAction>("cooking");
  const [companionStatus, setCompanionStatus] = useState<CompanionStatus>("speaking");
  const [isVoiceActive, setIsVoiceActive] = useState(false);
  const [speechMuted, setSpeechMuted] = useState(false);
  const [userQuery, setUserQuery] = useState("");
  const [customReplies, setCustomReplies] = useState<
    { role: "mom" | "user"; message: string }[]
  >([]);

  const recipe = RECIPES[selectedRecipeIndex] || RECIPES[0];
  const step = recipe.steps[currentStepIndex] || recipe.steps[0];
  const isLastStep = currentStepIndex === recipe.steps.length - 1;

  // Active product spotlight for this recipe/step
  const activeProductId = recipe.productSpotlights[0];
  const spotlightProduct = PRODUCTS.find((p) => p.id === activeProductId);

  // Default initial message computed from props/state
  const currentInitialMessage =
    currentStepIndex === 0
      ? `Namaste beta! Today we are preparing authentic ${recipe.name}. Notice the aroma of freshly roasted seeds first.`
      : `For step ${currentStepIndex + 1}: ${step.title}. ${step.description}`;

  // Combined transcript
  const conversationHistory = [
    { role: "mom" as const, message: currentInitialMessage },
    ...customReplies,
  ];

  // Reset companion speaking timer when step changes
  useEffect(() => {
    const timer = setTimeout(() => setCompanionStatus("idle"), 3500);
    return () => clearTimeout(timer);
  }, [selectedRecipeIndex, currentStepIndex]);

  // Validated Scene-Action Dispatcher
  const dispatchSceneAction = (action: AllowedSceneAction) => {
    const allowed: AllowedSceneAction[] = ["welcome", "prepare", "show_spice", "cooking", "complete"];
    if (allowed.includes(action)) {
      setSceneState(action);
    }
  };

  const handleNextStep = () => {
    if (!isLastStep) {
      const nextIdx = currentStepIndex + 1;
      setCurrentStepIndex(nextIdx);
      const nextAction = (recipe.steps[nextIdx]?.sceneAction as AllowedSceneAction) || "show_spice";
      dispatchSceneAction(nextAction);
      setCompanionStatus("speaking");
    } else {
      dispatchSceneAction("complete");
      setCompanionStatus("celebrating");
      fireCookingCelebration();
    }
  };

  const handlePrevStep = () => {
    if (currentStepIndex > 0) {
      setCurrentStepIndex((prev) => prev - 1);
      dispatchSceneAction("cooking");
      setCompanionStatus("speaking");
    }
  };

  const handleRestart = () => {
    setCurrentStepIndex(0);
    dispatchSceneAction("welcome");
    setCompanionStatus("speaking");
  };

  // Voice / Conversation interaction handler
  const handleUserAsk = (e?: React.FormEvent) => {
    if (e) e.preventDefault();
    if (!userQuery.trim()) return;

    const query = userQuery.trim();
    setCustomReplies((prev) => [...prev, { role: "user" as const, message: query }]);
    setUserQuery("");
    setCompanionStatus("thinking");

    setTimeout(() => {
      let momReply = `Beta, always keep the flame on medium to retain the volatile spice oils. ${step.description}`;
      const lower = query.toLowerCase();

      if (lower.includes("spice") || lower.includes("masala") || lower.includes("ingredient")) {
        dispatchSceneAction("show_spice");
        momReply = `I am using our authentic stone-ground ${spotlightProduct?.name || "special blend"}. Watch the 3D jar highlight in the rack!`;
      } else if (lower.includes("next") || lower.includes("continue") || lower.includes("ready")) {
        handleNextStep();
        return;
      } else if (lower.includes("repeat") || lower.includes("again") || lower.includes("what")) {
        momReply = `Sure beta: ${step.description}`;
      } else if (lower.includes("oil") || lower.includes("ghee") || lower.includes("heat")) {
        dispatchSceneAction("cooking");
        momReply = "Ensure the pure mustard oil or desi ghee smokes faintly before dropping the whole spices in.";
      }

      setCustomReplies((prev) => [...prev, { role: "mom", message: momReply }]);
      setCompanionStatus("speaking");
      setTimeout(() => setCompanionStatus("idle"), 4000);
    }, 1200);
  };

  const toggleMic = () => {
    if (!isVoiceActive) {
      setIsVoiceActive(true);
      setCompanionStatus("listening");
      setTimeout(() => {
        setIsVoiceActive(false);
        setUserQuery("What spice should I add right now, Mom?");
      }, 2500);
    } else {
      setIsVoiceActive(false);
      setCompanionStatus("idle");
    }
  };

  return (
    <div className="w-full max-w-7xl mx-auto flex flex-col gap-8 sm:gap-10">
      {/* Recipe Selection Tabs */}
      <div className="flex flex-wrap items-center justify-between gap-4 bg-white p-4 rounded-xl border border-brand-sand shadow-xs">
        <div className="flex flex-wrap items-center gap-2 sm:gap-3">
          <span className="text-xs font-bold uppercase tracking-wider text-brand-brown/60">
            Choose Heritage Dish:
          </span>
          <div className="flex flex-wrap gap-2">
            {RECIPES.map((r, idx) => (
              <button
                key={r.id}
                onClick={() => {
                  setSelectedRecipeIndex(idx);
                  setCurrentStepIndex(0);
                  dispatchSceneAction("welcome");
                }}
                className={`px-3.5 py-1.5 rounded-xl text-xs font-semibold transition-all ${
                  selectedRecipeIndex === idx
                    ? "bg-brand-terracotta text-white shadow-xs"
                    : "bg-brand-cream text-brand-brown/80 hover:bg-brand-sand"
                }`}
              >
                {r.name}
              </button>
            ))}
          </div>
        </div>

        <Badge variant="green" className="inline-flex items-center gap-1.5">
          <ClockIcon className="w-3.5 h-3.5" />
          <span>
            Prep: {recipe.prepTime}m • Cook: {recipe.cookTime}m
          </span>
        </Badge>
      </div>

      {/* 3D Kitchen Canvas Viewport */}
      <KitchenCanvas
        sceneState={sceneState}
        activeSpice={step.animationKey}
        stepTitle={step.title}
        potSimmering={currentStepIndex >= 1}
      />

      {/* Interactive Cooking Story Step Console & AI Companion */}
      <div className="flex flex-col lg:flex-row gap-6 sm:gap-8 items-start w-full">
        <CompanionConsole
          currentStepIndex={currentStepIndex}
          totalSteps={recipe.steps.length}
          recipeName={recipe.name}
          stepTitle={step.title}
          stepDescription={step.description}
          companionStatus={companionStatus}
          speechMuted={speechMuted}
          onToggleMute={() => setSpeechMuted(!speechMuted)}
          conversationHistory={conversationHistory}
          userQuery={userQuery}
          setUserQuery={setUserQuery}
          isVoiceActive={isVoiceActive}
          onToggleMic={toggleMic}
          onUserAsk={handleUserAsk}
          onFocusSpice={() => dispatchSceneAction("show_spice")}
          onPrevStep={handlePrevStep}
          onNextStep={handleNextStep}
          onRestart={() => {
            handleRestart();
            fireCookingCelebration();
          }}
          isLastStep={isLastStep}
        />

        <ProductSpotlightCard
          recipeName={recipe.name}
          product={spotlightProduct}
        />
      </div>
    </div>
  );
}
