"use client";

import Link from "next/link";
import { Badge } from "@/components/ui/Badge";
import { ShimmerButton, MotionLanding } from "@/components/magicui";

export function FinalCtaSection() {
  return (
    <section className="bg-brand-cream border-t border-brand-sand py-12 md:py-16 px-4 sm:px-6 lg:px-8 text-center overflow-hidden">
      <MotionLanding
        direction="up"
        duration={0.6}
        className="max-w-3xl mx-auto flex flex-col items-center gap-5 sm:gap-6"
      >
        <Badge variant="gold" className="self-center">
          Experience Pure Spices
        </Badge>
        <div className="flex flex-col gap-2.5">
          <h2 className="font-heading text-xl sm:text-2xl font-bold text-brand-brown">
            Bring Grandma&apos;s Secret Aromas into Your Kitchen
          </h2>
          <p className="text-xs sm:text-sm md:text-base text-brand-brown/75 leading-relaxed max-w-xl">
            Whether you are preparing a quick weeknight rasam or perfecting your
            festive biryani blend, Mom&apos;s Secret Spices delivers
            unadulterated flavor in every pinch.
          </p>
        </div>

        <div className="flex flex-col sm:flex-row gap-3.5 justify-center items-center w-full sm:w-auto">
          <Link href="/products" className="w-full sm:w-auto">
            <ShimmerButton
              background="#A9472A"
              shimmerColor="#FFEAC9"
              className="w-full sm:w-auto px-6 py-3 font-semibold shadow-xs text-xs sm:text-sm text-white"
            >
              Order Spices Online
            </ShimmerButton>
          </Link>
          <Link
            href="/experience"
            className="w-full sm:w-auto px-6 py-3 bg-white hover:bg-brand-sand/50 text-brand-brown font-semibold rounded-xl border border-brand-sand shadow-2xs transition-all text-center text-xs sm:text-sm"
          >
            Try Cooking Studio →
          </Link>
        </div>
      </MotionLanding>
    </section>
  );
}
