"use client";

import { useState, useRef } from "react";
import Link from "next/link";
import { Play, Pause, Volume2, VolumeX, Sparkles, ChefHat, ShoppingBag, ArrowRight } from "lucide-react";
import { BorderBeam } from "@/components/magicui/border-beam";
import { ShimmerButton } from "@/components/magicui/shimmer-button";

export default function CinematicVideoExperience() {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [isPlaying, setIsPlaying] = useState(true);
  const [isMuted, setIsMuted] = useState(true);

  const togglePlay = () => {
    if (!videoRef.current) return;
    if (isPlaying) {
      videoRef.current.pause();
      setIsPlaying(false);
    } else {
      videoRef.current.play();
      setIsPlaying(true);
    }
  };

  const toggleMute = () => {
    if (!videoRef.current) return;
    videoRef.current.muted = !isMuted;
    setIsMuted(!isMuted);
  };

  return (
    <div className="w-full max-w-5xl mx-auto flex flex-col gap-8 sm:gap-10">
      {/* Cinematic 3D Video Showcase Player */}
      <div className="relative rounded-2xl overflow-hidden border border-brand-sand shadow-xl bg-black aspect-16/9 group">
        <video
          ref={videoRef}
          src="/Moms.mp4"
          autoPlay
          loop
          muted
          playsInline
          className="w-full h-full object-cover"
          onPlay={() => setIsPlaying(true)}
          onPause={() => setIsPlaying(false)}
        />

        {/* Ambient Vignette Overlay */}
        <div className="absolute inset-0 bg-linear-to-t from-black/80 via-transparent to-black/30 pointer-events-none" />

        {/* Top Floating Badge */}
        <div className="absolute top-4 left-4 sm:top-6 sm:left-6 z-10 flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-black/60 backdrop-blur-md border border-white/20 text-white text-xs font-semibold">
          <span className="w-2 h-2 rounded-full bg-brand-green animate-pulse" />
          <span>Mom&apos;s Secret Spices • 3D Heritage Film</span>
        </div>

        {/* Custom Video Overlay Controls */}
        <div className="absolute bottom-4 left-4 right-4 sm:bottom-6 sm:left-6 sm:right-6 z-10 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <button
              onClick={togglePlay}
              className="p-3 rounded-full bg-white/90 hover:bg-white text-brand-brown shadow-lg active:scale-95 transition-all"
              aria-label={isPlaying ? "Pause Video" : "Play Video"}
            >
              {isPlaying ? <Pause className="w-4 h-4 fill-current" /> : <Play className="w-4 h-4 fill-current ml-0.5" />}
            </button>

            <button
              onClick={toggleMute}
              className="p-3 rounded-full bg-black/60 hover:bg-black/80 text-white border border-white/20 backdrop-blur-md active:scale-95 transition-all"
              aria-label={isMuted ? "Unmute Audio" : "Mute Audio"}
            >
              {isMuted ? <VolumeX className="w-4 h-4" /> : <Volume2 className="w-4 h-4 text-brand-gold" />}
            </button>

            <span className="hidden sm:inline-block text-xs font-medium text-white/90 drop-shadow-md">
              {isPlaying ? "Playing Cinema Reel" : "Paused"}
            </span>
          </div>

          <div className="flex items-center gap-2">
            <Link href="/products">
              <ShimmerButton
                shimmerColor="#FFEAC9"
                background="#A9472A"
                className="px-4 py-2 text-xs font-bold text-white shadow-md inline-flex items-center gap-2"
              >
                <ShoppingBag className="w-3.5 h-3.5" />
                <span>Shop Featured Spices</span>
              </ShimmerButton>
            </Link>
          </div>
        </div>

        <BorderBeam size={280} duration={14} colorFrom="#E8A33A" colorTo="#A9472A" />
      </div>

      {/* Story & Heritage Highlights */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
        <div className="bg-white p-5 rounded-2xl border border-brand-sand shadow-xs flex flex-col gap-2">
          <div className="w-9 h-9 rounded-xl bg-brand-sand/60 flex items-center justify-center text-brand-terracotta">
            <ChefHat className="w-5 h-5 text-brand-terracotta" />
          </div>
          <h3 className="font-heading font-bold text-sm text-brand-brown">
            Slow Stone-Ground Heritage
          </h3>
          <p className="text-xs text-brand-brown/70 leading-relaxed">
            Crushed gently in traditional stone mills at low temperatures to keep natural aromatic oils and volatile flavors intact.
          </p>
        </div>

        <div className="bg-white p-5 rounded-2xl border border-brand-sand shadow-xs flex flex-col gap-2">
          <div className="w-9 h-9 rounded-xl bg-brand-sand/60 flex items-center justify-center text-brand-terracotta">
            <Sparkles className="w-5 h-5 text-brand-terracotta" />
          </div>
          <h3 className="font-heading font-bold text-sm text-brand-brown">
            The Golden Handi Tadka
          </h3>
          <p className="text-xs text-brand-brown/70 leading-relaxed">
            Tempered in sizzling ghee with heirloom mustard, curry leaves, and stone-ground spices for the authentic Indian taste.
          </p>
        </div>

        <div className="bg-white p-5 rounded-2xl border border-brand-sand shadow-xs flex flex-col gap-2 justify-between">
          <div className="flex flex-col gap-2">
            <div className="w-9 h-9 rounded-xl bg-brand-sand/60 flex items-center justify-center text-brand-terracotta">
              <ShoppingBag className="w-5 h-5 text-brand-terracotta" />
            </div>
            <h3 className="font-heading font-bold text-sm text-brand-brown">
              Cook This Dish at Home
            </h3>
            <p className="text-xs text-brand-brown/70 leading-relaxed">
              Experience the exact single-origin spices featured in this cinematic film delivered freshly packed to your kitchen.
            </p>
          </div>
          <Link
            href="/products"
            className="inline-flex items-center gap-1.5 text-xs font-bold text-brand-terracotta hover:underline pt-2 group"
          >
            <span>Explore Artisanal Catalog</span>
            <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 transition-transform" />
          </Link>
        </div>
      </div>
    </div>
  );
}
