"use client";

import { useState } from "react";
import Link from "next/link";
import dynamic from "next/dynamic";
import { RECIPES } from "@/data/recipes";
import { PRODUCTS } from "@/features/products/data";
import { Badge, WhatsAppIcon, ArrowRightIcon } from "@/components/ui";

// Dynamic import with SSR disabled for Three.js WebGL canvas
const KitchenCanvas = dynamic(
  () => import("@/components/experience/KitchenCanvas"),
  {
    ssr: false,
    loading: () => (
      <div className="w-full aspect-16/9 bg-linear-to-br from-brand-sand/40 via-brand-cream to-brand-sand/30 rounded-3xl border border-brand-sand/80 flex flex-col items-center justify-center p-8 animate-pulse text-center">
        <span className="text-4xl mb-3">🍳</span>
        <span className="font-heading font-semibold text-brand-brown text-base">
          Heating up the kitchen stage...
        </span>
        <span className="text-xs text-brand-brown/60 mt-1">
          Loading 3D cookware and spice simulation
        </span>
      </div>
    ),
  }
);

export default function CookingStudioExperience() {
  const [selectedRecipeIndex, setSelectedRecipeIndex] = useState(0);
  const [currentStepIndex, setCurrentStepIndex] = useState(0);
  const [sceneState, setSceneState] = useState<string>("cooking");

  const recipe = RECIPES[selectedRecipeIndex] || RECIPES[0];
  const step = recipe.steps[currentStepIndex] || recipe.steps[0];
  const isLastStep = currentStepIndex === recipe.steps.length - 1;

  // Active product spotlight for this recipe/step
  const activeProductId = recipe.productSpotlights[0];
  const spotlightProduct = PRODUCTS.find((p) => p.id === activeProductId);

  const handleNextStep = () => {
    if (!isLastStep) {
      setCurrentStepIndex((prev) => prev + 1);
      setSceneState(step.sceneAction || "cooking");
    } else {
      setSceneState("complete");
    }
  };

  const handlePrevStep = () => {
    if (currentStepIndex > 0) {
      setCurrentStepIndex((prev) => prev - 1);
      setSceneState("cooking");
    }
  };

  const handleRestart = () => {
    setCurrentStepIndex(0);
    setSceneState("cooking");
  };

  return (
    <div className="space-y-10">
      {/* Recipe Selection Tabs */}
      <div className="flex flex-wrap items-center justify-between gap-4 bg-white p-4 rounded-2xl border border-brand-sand shadow-xs">
        <div className="flex items-center gap-2">
          <span className="text-xs font-bold uppercase tracking-wider text-brand-brown/60">
            Choose Heritage Dish:
          </span>
          <div className="flex gap-2">
            {RECIPES.map((r, idx) => (
              <button
                key={r.id}
                onClick={() => {
                  setSelectedRecipeIndex(idx);
                  setCurrentStepIndex(0);
                  setSceneState("welcome");
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

        <Badge variant="green">
          ⏱️ Prep: {recipe.prepTime}m • Cook: {recipe.cookTime}m
        </Badge>
      </div>

      {/* 3D Kitchen Canvas Viewport */}
      <KitchenCanvas
        sceneState={sceneState}
        activeSpice={step.animationKey}
        stepTitle={step.title}
        potSimmering={currentStepIndex >= 1}
      />

      {/* Interactive Cooking Story Step Console */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
        {/* Step Guide & Companion Prompt */}
        <div className="lg:col-span-8 bg-white p-6 sm:p-8 rounded-3xl border border-brand-sand shadow-xs space-y-6">
          <div className="flex items-center justify-between pb-4 border-b border-brand-sand/80">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-full bg-brand-sand flex items-center justify-center text-xl">
                👩🏽‍🍳
              </div>
              <div>
                <h3 className="font-heading font-bold text-base text-brand-brown">
                  Mom&apos;s Cooking Guide
                </h3>
                <span className="text-xs text-brand-brown/60">
                  Step {currentStepIndex + 1} of {recipe.steps.length}
                </span>
              </div>
            </div>

            {/* Progress indicators */}
            <div className="flex gap-1.5">
              {recipe.steps.map((_, idx) => (
                <div
                  key={idx}
                  className={`h-2 rounded-full transition-all ${
                    idx === currentStepIndex
                      ? "w-6 bg-brand-terracotta"
                      : idx < currentStepIndex
                      ? "w-2.5 bg-brand-green"
                      : "w-2.5 bg-brand-sand"
                  }`}
                />
              ))}
            </div>
          </div>

          {/* Current Step Instruction */}
          <div className="space-y-3">
            <h2 className="font-heading text-2xl font-bold text-brand-brown">
              {step.title}
            </h2>
            <p className="text-base text-brand-brown/85 leading-relaxed bg-brand-cream/60 p-4 rounded-2xl border border-brand-sand/60">
              &ldquo;{step.description}&rdquo;
            </p>
          </div>

          {/* Step Actions */}
          <div className="flex items-center justify-between pt-2">
            <button
              onClick={handlePrevStep}
              disabled={currentStepIndex === 0}
              className="px-4 py-2 text-xs font-semibold text-brand-brown bg-brand-sand/60 hover:bg-brand-sand rounded-xl disabled:opacity-30 disabled:pointer-events-none transition-all"
            >
              ← Previous Step
            </button>

            {isLastStep ? (
              <button
                onClick={handleRestart}
                className="px-6 py-2.5 text-xs font-bold text-white bg-brand-green hover:bg-[#3d5739] rounded-xl shadow-xs transition-all"
              >
                ✓ Dish Completed! Cook Again ↺
              </button>
            ) : (
              <button
                onClick={handleNextStep}
                className="inline-flex items-center gap-2 px-6 py-2.5 text-xs font-bold text-white bg-brand-terracotta hover:bg-[#8e3920] rounded-xl shadow-xs transition-all"
              >
                <span>Continue to Step {currentStepIndex + 2}</span>
                <ArrowRightIcon className="w-3.5 h-3.5" />
              </button>
            )}
          </div>
        </div>

        {/* Product Spotlight & Reorder Card */}
        <div className="lg:col-span-4 bg-white p-6 rounded-3xl border border-brand-sand shadow-xs space-y-4">
          <Badge variant="gold">🏺 Spotlight Spice Used</Badge>

          {spotlightProduct ? (
            <div className="space-y-4">
              <div className="aspect-square bg-gradient-to-tr from-brand-sand/50 to-brand-cream rounded-2xl flex flex-col items-center justify-center p-6 border border-brand-sand/60">
                <span className="text-6xl mb-2">
                  {spotlightProduct.slug.includes("turmeric") ? "🟡" : "🏺"}
                </span>
                <span className="font-heading font-bold text-base text-brand-brown text-center">
                  {spotlightProduct.name}
                </span>
                <span className="text-xs text-brand-brown/60 mt-1">
                  Freshly Stone-Ground
                </span>
              </div>

              <div className="flex items-center justify-between text-sm">
                <span className="text-brand-brown/70">Pack MRP:</span>
                <span className="font-heading font-bold text-brand-terracotta text-lg">
                  ₹{spotlightProduct.packSizes[0]?.mrp}
                </span>
              </div>

              <div className="space-y-2 pt-2">
                <Link
                  href={`/products/${spotlightProduct.slug}`}
                  className="w-full inline-flex items-center justify-center px-4 py-2.5 bg-brand-cream hover:bg-brand-sand text-brand-brown text-xs font-semibold rounded-xl border border-brand-sand transition-all text-center"
                >
                  View Spice Details
                </Link>

                <a
                  href={`https://wa.me/${
                    process.env.NEXT_PUBLIC_WHATSAPP_NUMBER || "919876543210"
                  }?text=${encodeURIComponent(
                    `Hello Mom's Secret Spices! I am cooking ${recipe.name} in the studio and would like to order ${spotlightProduct.name}.`
                  )}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full inline-flex items-center justify-center gap-2 px-4 py-2.5 bg-brand-terracotta hover:bg-[#8e3920] text-white text-xs font-semibold rounded-xl shadow-xs transition-all text-center"
                >
                  <WhatsAppIcon className="w-4 h-4" />
                  <span>Order on WhatsApp</span>
                </a>
              </div>
            </div>
          ) : (
            <p className="text-xs text-brand-brown/60">
              Authentic Mom&apos;s Secret Spices are featured in this recipe.
            </p>
          )}
        </div>
      </div>
    </div>
  );
}
