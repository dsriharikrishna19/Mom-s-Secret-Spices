"use client";

import { BorderBeam } from "@/components/magicui/border-beam";
import { ShimmerButton } from "@/components/magicui/shimmer-button";
import { ChefHatIcon, SparklesIcon, ArrowRightIcon } from "@/components/ui";

export type CompanionStatus = "idle" | "listening" | "thinking" | "speaking" | "celebrating";

interface CompanionConsoleProps {
  currentStepIndex: number;
  totalSteps: number;
  recipeName: string;
  stepTitle: string;
  stepDescription: string;
  companionStatus: CompanionStatus;
  speechMuted: boolean;
  onToggleMute: () => void;
  conversationHistory: { role: "mom" | "user"; message: string }[];
  userQuery: string;
  setUserQuery: (val: string) => void;
  isVoiceActive: boolean;
  onToggleMic: () => void;
  onUserAsk: (e?: React.FormEvent) => void;
  onFocusSpice: () => void;
  onPrevStep: () => void;
  onNextStep: () => void;
  onRestart: () => void;
  isLastStep: boolean;
}

export function CompanionConsole({
  currentStepIndex,
  totalSteps,
  recipeName,
  stepTitle,
  stepDescription,
  companionStatus,
  speechMuted,
  onToggleMute,
  conversationHistory,
  userQuery,
  setUserQuery,
  isVoiceActive,
  onToggleMic,
  onUserAsk,
  onFocusSpice,
  onPrevStep,
  onNextStep,
  onRestart,
  isLastStep,
}: CompanionConsoleProps) {
  return (
    <div className="relative flex-1 w-full bg-white p-5 sm:p-8 rounded-xl border border-brand-sand shadow-xs flex flex-col gap-6 min-w-0 overflow-hidden">
      <BorderBeam size={220} duration={14} colorFrom="#E8A33A" colorTo="#A9472A" />

      {/* Companion Persona Header */}
      <div className="flex flex-wrap items-center justify-between gap-4 pb-4 border-b border-brand-sand/80">
        <div className="flex items-center gap-3">
          <div className="relative w-11 h-11 rounded-full bg-brand-sand/70 flex items-center justify-center text-brand-terracotta border border-brand-sand shrink-0">
            <ChefHatIcon className="w-5 h-5 text-brand-terracotta" />
            {companionStatus === "speaking" && (
              <span className="absolute -top-1 -right-1 flex h-3 w-3">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-brand-gold opacity-75"></span>
                <span className="relative inline-flex rounded-full h-3 w-3 bg-brand-gold"></span>
              </span>
            )}
            {companionStatus === "listening" && (
              <span className="absolute -top-1 -right-1 flex h-3 w-3">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-brand-green opacity-75"></span>
                <span className="relative inline-flex rounded-full h-3 w-3 bg-brand-green"></span>
              </span>
            )}
          </div>
          <div className="min-w-0">
            <div className="flex items-center gap-2">
              <h3 className="font-heading font-bold text-base text-brand-brown">
                Mom&apos;s Culinary Companion
              </h3>
              <span
                className={`text-[10px] font-bold px-2 py-0.5 rounded-full capitalize ${
                  companionStatus === "speaking"
                    ? "bg-amber-100 text-amber-800"
                    : companionStatus === "listening"
                      ? "bg-green-100 text-green-800"
                      : companionStatus === "thinking"
                        ? "bg-blue-100 text-blue-800"
                        : companionStatus === "celebrating"
                          ? "bg-purple-100 text-purple-800"
                          : "bg-brand-sand text-brand-brown/70"
                }`}
              >
                ● {companionStatus}
              </span>
            </div>
            <span className="text-xs text-brand-brown/60">
              Step {currentStepIndex + 1} of {totalSteps} • {recipeName}
            </span>
          </div>
        </div>

        {/* Audio Toggle & Progress dots */}
        <div className="flex items-center gap-3">
          <button
            type="button"
            onClick={onToggleMute}
            className={`p-1.5 rounded-lg border text-xs transition-colors ${
              speechMuted
                ? "bg-brand-sand/50 border-brand-sand text-brand-brown/50"
                : "bg-brand-cream border-brand-sand text-brand-brown"
            }`}
            title={speechMuted ? "Unmute Voice" : "Mute Voice"}
          >
            {speechMuted ? "🔇 Muted" : "🔊 Audio On"}
          </button>
          <div className="flex gap-1.5">
            {Array.from({ length: totalSteps }).map((_, idx) => (
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
      </div>

      {/* Current Step Instruction */}
      <div className="flex flex-col gap-3">
        <div className="flex items-center justify-between gap-2">
          <h2 className="font-heading text-xl sm:text-2xl font-bold text-brand-brown">
            {stepTitle}
          </h2>
          <button
            onClick={onFocusSpice}
            className="text-xs font-semibold text-brand-terracotta hover:underline inline-flex items-center gap-1"
          >
            <SparklesIcon className="w-3.5 h-3.5" />
            Focus Spice in 3D
          </button>
        </div>
        <p className="text-sm sm:text-base text-brand-brown/85 leading-relaxed bg-brand-cream/60 p-4 rounded-xl border border-brand-sand/60">
          &ldquo;{stepDescription}&rdquo;
        </p>
      </div>

      {/* Live Conversational Chat Bubble */}
      <div className="flex flex-col gap-2 bg-brand-sand/20 p-3.5 rounded-xl border border-brand-sand/40">
        <div className="flex items-center justify-between text-xs font-semibold text-brand-brown/70">
          <span>Cooking Transcript & Kitchen Advice:</span>
          <span className="text-[11px] text-brand-brown/50">Typed Scene Actions active</span>
        </div>
        <div className="flex flex-col gap-2 max-h-36 overflow-y-auto pr-1">
          {conversationHistory.map((entry, idx) => (
            <div
              key={idx}
              className={`text-xs p-2.5 rounded-xl ${
                entry.role === "mom"
                  ? "bg-white text-brand-brown border border-brand-sand/80 shadow-xs"
                  : "bg-brand-terracotta/10 text-brand-brown font-medium ml-4 self-end"
              }`}
            >
              <span className="font-bold text-[11px] block text-brand-terracotta">
                {entry.role === "mom" ? "Mom:" : "You:"}
              </span>
              {entry.message}
            </div>
          ))}
        </div>

        {/* Natural Dialogue Form & Mic Controls */}
        <form onSubmit={onUserAsk} className="flex items-center gap-2 pt-1">
          <button
            type="button"
            onClick={onToggleMic}
            className={`p-2 rounded-xl text-xs font-medium border transition-all shrink-0 ${
              isVoiceActive
                ? "bg-red-500 text-white border-red-600 animate-pulse"
                : "bg-white hover:bg-brand-cream border-brand-sand text-brand-brown"
            }`}
            title={isVoiceActive ? "Listening..." : "Tap to Speak"}
          >
            {isVoiceActive ? "🎙️ Listening" : "🎤 Voice"}
          </button>
          <input
            type="text"
            value={userQuery}
            onChange={(e) => setUserQuery(e.target.value)}
            placeholder="Ask Mom: 'What spice is next?', 'Check heat'..."
            className="flex-1 bg-white border border-brand-sand rounded-xl px-3 py-1.5 text-xs text-brand-brown placeholder:text-brand-brown/40 focus:outline-none focus:ring-1 focus:ring-brand-terracotta"
          />
          <button
            type="submit"
            disabled={!userQuery.trim()}
            className="px-3 py-1.5 bg-brand-terracotta text-white rounded-xl text-xs font-semibold disabled:opacity-40 hover:bg-[#8e3920] transition-colors"
          >
            Ask
          </button>
        </form>
      </div>

      {/* Step Actions */}
      <div className="flex flex-wrap items-center justify-between gap-3 pt-2">
        <button
          onClick={onPrevStep}
          disabled={currentStepIndex === 0}
          className="px-4 py-2 text-xs font-semibold text-brand-brown bg-brand-sand/60 hover:bg-brand-sand rounded-xl disabled:opacity-30 disabled:pointer-events-none transition-all"
        >
          ← Previous Step
        </button>

        {isLastStep ? (
          <ShimmerButton
            onClick={onRestart}
            background="#496844"
            shimmerColor="#E8A33A"
            className="px-6 py-2.5 text-xs font-bold text-white shadow-xs"
          >
            ✓ Dish Completed! Cook Again ↺
          </ShimmerButton>
        ) : (
          <ShimmerButton
            onClick={onNextStep}
            background="#A9472A"
            shimmerColor="#FFEAC9"
            className="px-6 py-2.5 text-xs font-bold text-white shadow-xs inline-flex items-center gap-2"
          >
            <span>Continue to Step {currentStepIndex + 2}</span>
            <ArrowRightIcon className="w-3.5 h-3.5" />
          </ShimmerButton>
        )}
      </div>
    </div>
  );
}
