"use client";

import { useState } from "react";
import {
  ShoppingBag,
  Handshake,
  CookingPot,
  X,
  ArrowRight,
} from "lucide-react";
import { WhatsAppIcon, SparklesIcon } from "@/components/ui/Icons";
import { SITE_INFO } from "@/data/info";

export function WhatsAppBot() {
  const [isOpen, setIsOpen] = useState(false);

  const quickPrompts = [
    {
      label: "Place Spice Order",
      icon: ShoppingBag,
      text: "Hello Mom's Secret Spices! I would like to order fresh stone-ground spices.",
    },
    {
      label: "Distributor Enquiry",
      icon: Handshake,
      text: "Hello Mom's Secret Spices! I want to inquire about dealership and bulk distributorship opportunities.",
    },
    {
      label: "Recipe Spice Help",
      icon: CookingPot,
      text: "Namaste! Can you help me pick the right spice blend for my recipe?",
    },
  ];

  const handleOpenWhatsApp = (customText?: string) => {
    const text = customText || "Hello Mom's Secret Spices! I have an inquiry.";
    const url = `https://wa.me/${SITE_INFO.whatsappNumber}?text=${encodeURIComponent(text)}`;
    window.open(url, "_blank", "noopener,noreferrer");
  };

  return (
    <div className="fixed bottom-4 right-4 sm:bottom-5 sm:right-5 z-50 flex flex-col items-end gap-2.5">
      {/* Floating Interactive Popup Menu */}
      {isOpen && (
        <div className="w-72 sm:w-80 bg-white rounded-xl border border-brand-sand shadow-lg p-4 flex flex-col gap-3 animate-in fade-in slide-in-from-bottom-3 duration-200">
          <div className="flex items-center justify-between pb-2 border-b border-brand-sand">
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 rounded-full bg-[#25D366]/15 flex items-center justify-center text-[#25D366]">
                <WhatsAppIcon className="w-4 h-4 text-[#25D366]" />
              </div>
              <div className="flex flex-col">
                <span className="font-heading font-bold text-xs text-brand-brown">
                  Mom&apos;s Spice Assistant
                </span>
                <span className="text-[10px] text-brand-green font-medium flex items-center gap-1">
                  <span className="w-1.5 h-1.5 rounded-full bg-brand-green animate-pulse" />
                  Online on WhatsApp
                </span>
              </div>
            </div>
            <button
              onClick={() => setIsOpen(false)}
              className="text-brand-brown/50 hover:text-brand-brown p-1 rounded-md hover:bg-brand-sand/30 transition-colors"
              aria-label="Close WhatsApp chat assistant"
            >
              <X className="w-3.5 h-3.5" />
            </button>
          </div>

          <p className="text-xs text-brand-brown/75 leading-relaxed bg-brand-cream/60 p-2.5 rounded-lg border border-brand-sand/60">
            Namaste! How can we assist you with our stone-ground artisanal
            spices today?
          </p>

          <div className="flex flex-col gap-1.5">
            <span className="text-[10px] font-bold text-brand-brown/60 uppercase tracking-wider">
              Quick Inquiries:
            </span>
            {quickPrompts.map((q, idx) => {
              const IconComponent = q.icon;
              return (
                <button
                  key={idx}
                  onClick={() => handleOpenWhatsApp(q.text)}
                  className="w-full text-left px-3 py-2 text-xs font-medium text-brand-brown bg-brand-cream/40 hover:bg-brand-sand/60 rounded-lg border border-brand-sand/60 transition-colors flex items-center justify-between group"
                >
                  <div className="flex items-center gap-2">
                    <IconComponent className="w-3.5 h-3.5 text-brand-terracotta shrink-0" />
                    <span>{q.label}</span>
                  </div>
                  <ArrowRight className="w-3.5 h-3.5 text-brand-terracotta/70 group-hover:translate-x-0.5 group-hover:text-brand-terracotta transition-all" />
                </button>
              );
            })}
          </div>

          <button
            onClick={() => handleOpenWhatsApp()}
            className="w-full py-2.5 bg-[#25D366] hover:bg-[#20ba59] text-white rounded-lg text-xs font-bold shadow-xs transition-colors flex items-center justify-center gap-2 mt-1"
          >
            <WhatsAppIcon className="w-4 h-4 text-white" />
            <span>Start WhatsApp Chat</span>
          </button>
        </div>
      )}

      {/* Persistent Floating WhatsApp Button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        aria-label="Open WhatsApp Support Assistant"
        className="group relative flex items-center gap-2 px-3.5 py-2.5 sm:px-4 sm:py-3 bg-[#25D366] hover:bg-[#20ba59] text-white rounded-full shadow-md hover:shadow-lg transition-all duration-300 hover:scale-105 active:scale-95"
      >
        <span className="absolute -top-1 -right-1 flex h-3 w-3">
          <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-white opacity-75" />
          <span className="relative inline-flex rounded-full h-3 w-3 bg-white" />
        </span>
        <WhatsAppIcon className="w-5 h-5 text-white shrink-0" />
        <span className="text-xs font-bold hidden sm:inline-block">
          Chat with Us
        </span>
        <SparklesIcon className="w-3.5 h-3.5 text-white/80 hidden sm:inline-block" />
      </button>
    </div>
  );
}
