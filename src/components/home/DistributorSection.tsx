"use client";

import Link from "next/link";
import Image from "next/image";
import { StoreIcon, CheckIcon, WhatsAppIcon } from "@/components/ui/Icons";
import { SITE_INFO } from "@/data/info";
import { MotionLanding } from "@/components/magicui";

export function DistributorSection() {
  return (
    <section className="py-12 md:py-16 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto w-full">
      <div className="bg-linear-to-br from-white via-brand-cream/30 to-brand-sand/20 rounded-xl border border-brand-sand shadow-sm p-6 sm:p-10 grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
        {/* Copy and Actions */}
        <MotionLanding
          direction="right"
          duration={0.65}
          className="lg:col-span-7 flex flex-col items-start gap-4 sm:gap-5"
        >
          <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold bg-brand-terracotta/10 text-brand-terracotta border border-brand-terracotta/20">
            <StoreIcon className="w-3.5 h-3.5" />
            <span>Business & Distribution Partners</span>
          </span>

          <div className="flex flex-col gap-2.5">
            <h2 className="font-heading text-xl sm:text-2xl font-bold text-brand-brown">
              Partner With Mom&apos;s Secret Spices: 27 Hot-Selling Formulations
            </h2>
            <p className="text-xs sm:text-sm text-brand-brown/80 leading-relaxed">
              We are actively expanding our retail, distribution, and restaurant supply network across Karnataka
              and pan-India. Our full catalog includes 27 verified fast-moving formulations spanning daily cooking
              powders, sambar & rasam essentials, and regional South Indian specialty rice blends.
            </p>
          </div>

          {/* Authentic Highlights Badges */}
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-2.5 w-full pt-1">
            <div className="bg-white p-3 rounded-xl border border-brand-sand shadow-2xs flex flex-col">
              <span className="text-[11px] font-bold text-brand-terracotta uppercase">High Margins</span>
              <span className="text-xs text-brand-brown/70">Attractive retail ROI</span>
            </div>
            <div className="bg-white p-3 rounded-xl border border-brand-sand shadow-2xs flex flex-col">
              <span className="text-[11px] font-bold text-brand-gold uppercase">Exclusive Territory</span>
              <span className="text-xs text-brand-brown/70">Protected pin codes</span>
            </div>
            <div className="bg-white p-3 rounded-xl border border-brand-sand shadow-2xs flex flex-col col-span-2 sm:col-span-1">
              <span className="text-[11px] font-bold text-brand-green uppercase">Brand Support</span>
              <span className="text-xs text-brand-brown/70">Sampling & collateral</span>
            </div>
          </div>

          <div className="flex flex-col gap-2 w-full text-xs text-brand-brown/75 bg-brand-cream/80 p-4 rounded-xl border border-brand-sand/70">
            <div className="flex items-center gap-2">
              <CheckIcon className="w-3.5 h-3.5 text-brand-green shrink-0" />
              <span>High recurring consumer demand & authentic taste consistency</span>
            </div>
            <div className="flex items-center gap-2">
              <CheckIcon className="w-3.5 h-3.5 text-brand-green shrink-0" />
              <span>Attractive distributor margins and reliable stock replenishment</span>
            </div>
            <div className="flex items-center gap-2">
              <CheckIcon className="w-3.5 h-3.5 text-brand-green shrink-0" />
              <span>Available in flexible retail pouches & institutional pack sizes</span>
            </div>
          </div>

          <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3 w-full sm:w-auto pt-2">
            <a
              href={`https://wa.me/${SITE_INFO.whatsappNumber}?text=${encodeURIComponent(
                "Hello Mom's Secret Spices! I am interested in distributorship and bulk supply options.",
              )}`}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 px-6 py-3 bg-brand-terracotta hover:bg-[#8e3920] text-white font-semibold rounded-xl shadow-xs transition-all text-xs sm:text-sm text-center"
            >
              <WhatsAppIcon className="w-4 h-4 text-white" />
              <span>Enquire via WhatsApp</span>
            </a>
            <Link
              href="/contact"
              className="inline-flex items-center justify-center gap-2 px-6 py-3 bg-white hover:bg-brand-cream border border-brand-sand text-brand-brown font-semibold rounded-xl text-xs sm:text-sm transition-all text-center"
            >
              <span>Submit Trade Form</span>
            </Link>
          </div>
        </MotionLanding>

        {/* Authentic Royal Spice Scroll Mockup Showcase */}
        <MotionLanding
          direction="left"
          duration={0.65}
          delay={0.1}
          className="lg:col-span-5 flex justify-center w-full"
        >
          <div className="relative w-full max-w-sm sm:max-w-md aspect-2/3 rounded-xl overflow-hidden border border-brand-sand/90 shadow-md bg-linear-to-b from-brand-sand/40 to-brand-cream/80 p-2 sm:p-3 flex items-center justify-center">
            <div className="relative w-full h-full rounded-lg overflow-hidden">
              <Image
                src="/Akshaya%20Foods%20Spice%20Scroll%20Mockup.png"
                alt="Akshaya Foods - Mom's Secret Spices 27 Hot Selling Products Royal Scroll"
                fill
                sizes="(max-width: 1024px) 100vw, 420px"
                className="object-contain drop-shadow-md"
                priority
              />
            </div>
          </div>
        </MotionLanding>
      </div>
    </section>
  );
}
