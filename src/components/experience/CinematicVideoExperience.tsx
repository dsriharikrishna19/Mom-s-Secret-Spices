"use client";

import { useState, useRef } from "react";
import Link from "next/link";
import {
  Play,
  Pause,
  Volume2,
  VolumeX,
  Sparkles,
  ChefHat,
  ShoppingBag,
  ArrowRight,
} from "lucide-react";
import { BorderBeam } from "@/components/magicui/border-beam";
import { ShimmerButton } from "@/components/magicui/shimmer-button";

export default function CinematicVideoExperience() {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [isPlaying, setIsPlaying] = useState(true);
  const [isMuted, setIsMuted] = useState(true);

  const [isLoading, setIsLoading] = useState(true);

  const togglePlay = () => {
    if (!videoRef.current) return;
    if (isPlaying) {
      videoRef.current.pause();
      setIsPlaying(false);
    } else {
      videoRef.current.play().catch(() => {});
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
          poster="/Akshaya%20Foods%20Spice%20Scroll%20Mockup.png"
          autoPlay
          loop
          muted
          playsInline
          preload="metadata"
          className="w-full h-full object-cover"
          onWaiting={() => setIsLoading(true)}
          onPlaying={() => {
            setIsLoading(false);
            setIsPlaying(true);
          }}
          onLoadedData={() => setIsLoading(false)}
          onPause={() => setIsPlaying(false)}
        />

        {/* Loading Spinner */}
        {isLoading && (
          <div className="absolute inset-0 flex items-center justify-center bg-black/40 backdrop-blur-xs pointer-events-none z-20">
            <div className="w-10 h-10 border-2 border-brand-gold border-t-transparent rounded-full animate-spin" />
          </div>
        )}

        {/* Ambient Vignette Overlay */}
        <div className="absolute inset-0 bg-linear-to-t from-black/80 via-transparent to-black/30 pointer-events-none" />

        {/* Top Floating Badge with Brand Logo Reference */}
        <div className="absolute top-3 left-3 sm:top-6 sm:left-6 z-10 flex items-center gap-2 px-3 py-1.5 rounded-full bg-black/60 backdrop-blur-md border border-white/20 text-white text-xs font-semibold">
          <span className="w-2 h-2 rounded-full bg-brand-green animate-pulse" />
          <span className="truncate max-w-[220px] sm:max-w-none">
            Akshaya Foods • Mom&apos;s Secret Spices Film
          </span>
        </div>

        {/* Custom Video Overlay Controls */}
        <div className="absolute bottom-3 left-3 right-3 sm:bottom-6 sm:left-6 sm:right-6 z-10 flex items-center justify-between">
          <div className="flex items-center gap-2 sm:gap-3">
            <button
              onClick={togglePlay}
              className="p-2.5 sm:p-3 rounded-full bg-white/95 hover:bg-white text-brand-brown shadow-lg active:scale-95 transition-all cursor-pointer"
              aria-label={isPlaying ? "Pause Video" : "Play Video"}
            >
              {isPlaying ? (
                <Pause className="w-4 h-4 fill-current" />
              ) : (
                <Play className="w-4 h-4 fill-current ml-0.5" />
              )}
            </button>

            <button
              onClick={toggleMute}
              className="p-2.5 sm:p-3 rounded-full bg-black/60 hover:bg-black/80 text-white border border-white/20 backdrop-blur-md active:scale-95 transition-all cursor-pointer"
              aria-label={isMuted ? "Unmute Audio" : "Mute Audio"}
            >
              {isMuted ? (
                <VolumeX className="w-4 h-4" />
              ) : (
                <Volume2 className="w-4 h-4 text-brand-gold" />
              )}
            </button>

            <span className="hidden sm:inline-block text-xs font-medium text-white/90 drop-shadow-md">
              {isPlaying ? "Playing Reel (Muted by default)" : "Paused"}
            </span>
          </div>

          <div className="flex items-center gap-2">
            <Link href="/products">
              <ShimmerButton
                shimmerColor="#FFEAC9"
                background="#A9472A"
                className="px-3.5 py-2 text-xs font-bold text-white shadow-md inline-flex items-center gap-1.5 cursor-pointer"
              >
                <ShoppingBag className="w-3.5 h-3.5" />
                <span className="hidden xs:inline sm:inline">Shop Spices</span>
              </ShimmerButton>
            </Link>
          </div>
        </div>

        <BorderBeam
          size={280}
          duration={14}
          colorFrom="#E8A33A"
          colorTo="#A9472A"
        />
      </div>

      {/* Story & Heritage Highlights */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
        <div className="bg-white p-5 rounded-2xl border border-brand-sand shadow-xs flex flex-col gap-2">
          <div className="w-9 h-9 rounded-xl bg-brand-sand/60 flex items-center justify-center text-brand-terracotta">
            <ChefHat className="w-5 h-5 text-brand-terracotta" />
          </div>
          <h3 className="font-heading font-bold text-sm text-brand-brown">
            Heritage Culinary Craft
          </h3>
          <p className="text-xs text-brand-brown/70 leading-relaxed">
            Authentic spice milling guided by multigenerational homestyle
            recipes to keep essential aromatic flavor intact.
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
            Tempered in sizzling ghee with mustard, curry leaves, and authentic
            blends for the genuine Indian flavor.
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
              Experience the authentic blends featured in this culinary showcase
              delivered directly to your home kitchen.
            </p>
          </div>
          <Link
            href="/products"
            className="inline-flex items-center gap-1.5 text-xs font-bold text-brand-terracotta hover:underline pt-2 group cursor-pointer"
          >
            <span>Explore Artisanal Catalog</span>
            <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 transition-transform" />
          </Link>
        </div>
      </div>
    </div>
  );
}
