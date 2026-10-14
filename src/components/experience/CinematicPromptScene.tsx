"use client";

import { useState } from "react";
import Image from "next/image";
import { Copy, Check, Sparkles, Film, Compass, Flame } from "lucide-react";
import { Badge } from "@/components/ui/Badge";
import { BorderBeam } from "@/components/magicui/border-beam";
import { ShimmerButton } from "@/components/magicui/shimmer-button";

const CINEMATIC_PROMPT = `Cinematic 8K ultra-realistic culinary film shot on ARRI Alexa LF, 50mm anamorphic lens, shallow depth of field. 

Scene: A warm, authentic Indian heritage kitchen bathed in soft morning golden hour sunlight streaming through an antique jharokha wooden lattice window. Volumetric sunbeams illuminate floating dust motes.

Foreground & Action: An Indian mother's hands wearing delicate traditional gold bangles gently tip an artisanal hand-carved brass spoon over a smoking black stone handi pot. A cascade of vibrant, golden stone-ground turmeric and crimson Kashmiri chilli flakes sprinkles in slow-motion into glistening hot desi ghee. 

Physics & Particle Dynamics: The moment the freshly crushed spices hit the clarified butter, an authentic aromatic micro-crackle erupts with blooming golden bubbles, fragrant translucent amber steam spirals, and a swirling mist of tempered mustard seeds and curry leaves popping with lifelike fluid dynamics.

Background: Handcrafted terracotta spice chest, brass canisters with 'Mom's Secret Spices' calligraphy, whole cinnamon barks, star anise, and fresh green coriander sprigs resting on sun-warmed sandstone.

Atmosphere: Rich warm Kodachrome grading, deep terracotta and amber tones, glowing warmth, tactile stone textures, award-winning culinary commercial grade, 60fps slow-motion macro.`;

export default function CinematicPromptScene() {
  const [copied, setCopied] = useState(false);

  const handleCopy = () => {
    navigator.clipboard.writeText(CINEMATIC_PROMPT);
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  return (
    <div className="w-full max-w-5xl mx-auto flex flex-col gap-6 sm:gap-8">
      {/* 3D Cinematic Scene Mockup Card */}
      <div className="relative rounded-2xl overflow-hidden border border-brand-sand shadow-lg bg-black aspect-16/9 flex items-center justify-center group">
        <Image
          src="/Akshaya%20Foods%20Spice%20Scroll%20Mockup.png"
          alt="3D Indian Kitchen Cinematic Scene"
          fill
          priority
          className="object-cover opacity-85 group-hover:scale-105 transition-transform duration-700"
        />

        {/* Ambient Overlay Vignette */}
        <div className="absolute inset-0 bg-linear-to-t from-black/85 via-black/35 to-black/30 pointer-events-none" />

        {/* Live Scene Badge */}
        <div className="absolute top-4 left-4 sm:top-6 sm:left-6 z-10 flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-black/60 backdrop-blur-md border border-white/15 text-white text-xs font-semibold">
          <Film className="w-3.5 h-3.5 text-brand-gold animate-pulse" />
          <span>3D Cinematic Kitchen Scene • 8K Macro</span>
        </div>

        {/* Center Prompt Title Overlay */}
        <div className="relative z-10 text-center px-6 max-w-2xl flex flex-col items-center gap-3">
          <div className="w-12 h-12 rounded-full bg-brand-gold/20 border border-brand-gold/40 flex items-center justify-center text-brand-gold shadow-md">
            <Sparkles className="w-6 h-6 text-brand-gold" />
          </div>
          <h2 className="font-heading font-black text-xl sm:text-2xl md:text-3xl text-white tracking-wide uppercase drop-shadow-md">
            The Royal Stone Handi Tadka
          </h2>
          <p className="text-xs sm:text-sm text-brand-cream/80 leading-relaxed font-sans max-w-lg">
            Sora • Runway Gen-3 • Kling AI • Unreal Engine 5 Photorealistic Scene
          </p>
        </div>

        <BorderBeam size={260} duration={12} colorFrom="#E8A33A" colorTo="#A9472A" />
      </div>

      {/* Cinematic Video Prompt Box */}
      <div className="bg-white rounded-2xl border border-brand-sand p-6 sm:p-8 shadow-xs flex flex-col gap-5">
        <div className="flex flex-wrap items-center justify-between gap-3 pb-4 border-b border-brand-sand/70">
          <div className="flex items-center gap-2.5">
            <div className="w-9 h-9 rounded-xl bg-brand-sand/60 flex items-center justify-center text-brand-terracotta">
              <Compass className="w-5 h-5 text-brand-terracotta" />
            </div>
            <div>
              <h3 className="font-heading font-bold text-base text-brand-brown">
                3D Video Generation Prompt
              </h3>
              <p className="text-xs text-brand-brown/60">
                Optimized for Sora, Runway Gen-3 Alpha, Kling AI, Luma & Midjourney v6
              </p>
            </div>
          </div>

          <button
            onClick={handleCopy}
            className="inline-flex items-center gap-2 px-4 py-2 bg-brand-terracotta hover:bg-[#8e3920] active:scale-95 text-white rounded-xl text-xs font-bold transition-all shadow-xs"
          >
            {copied ? (
              <>
                <Check className="w-4 h-4 text-white" />
                <span>Copied to Clipboard!</span>
              </>
            ) : (
              <>
                <Copy className="w-4 h-4 text-white" />
                <span>Copy 3D Scene Prompt</span>
              </>
            )}
          </button>
        </div>

        {/* Prompt Content */}
        <pre className="font-mono text-xs sm:text-sm leading-relaxed text-brand-brown/90 bg-brand-cream/70 p-5 sm:p-6 rounded-xl border border-brand-sand/80 whitespace-pre-wrap break-words select-all">
          {CINEMATIC_PROMPT}
        </pre>

        {/* Generation Specs Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-2">
          <div className="p-3.5 rounded-xl bg-brand-sand/20 border border-brand-sand/40 flex flex-col gap-1">
            <span className="text-[10px] font-bold uppercase tracking-wider text-brand-brown/60">
              Camera Movement
            </span>
            <span className="text-xs font-semibold text-brand-brown">
              Slow Dolly In + Macro 50mm Anamorphic Tilt
            </span>
          </div>

          <div className="p-3.5 rounded-xl bg-brand-sand/20 border border-brand-sand/40 flex flex-col gap-1">
            <span className="text-[10px] font-bold uppercase tracking-wider text-brand-brown/60">
              Lighting & Grading
            </span>
            <span className="text-xs font-semibold text-brand-brown">
              Golden Hour Volumetric Sunbeams + Kodachrome Warmth
            </span>
          </div>

          <div className="p-3.5 rounded-xl bg-brand-sand/20 border border-brand-sand/40 flex flex-col gap-1">
            <span className="text-[10px] font-bold uppercase tracking-wider text-brand-brown/60">
              Audio Cue
            </span>
            <span className="text-xs font-semibold text-brand-brown">
              Sizzling Ghee Tadka + Chime of Gold Bangles
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}
