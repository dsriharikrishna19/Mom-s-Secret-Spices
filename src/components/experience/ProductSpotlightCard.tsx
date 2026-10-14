"use client";

import Link from "next/link";
import { Product } from "@/features/products/types";
import { Badge, UtensilsIcon, SparklesIcon, WhatsAppIcon } from "@/components/ui";
import { SITE_INFO } from "@/data/info";

interface ProductSpotlightCardProps {
  recipeName: string;
  product?: Product;
}

export function ProductSpotlightCard({ recipeName, product }: ProductSpotlightCardProps) {
  return (
    <div className="w-full lg:w-84 xl:w-96 shrink-0 bg-white p-5 sm:p-6 rounded-xl border border-brand-sand shadow-xs flex flex-col gap-4">
      <Badge variant="gold" className="inline-flex items-center gap-1.5 self-start">
        <SparklesIcon className="w-3.5 h-3.5 text-brand-terracotta" />
        <span>Spotlight Spice Used</span>
      </Badge>

      {product ? (
        <div className="flex flex-col gap-4">
          <div className="aspect-square bg-linear-to-tr from-brand-sand/50 to-brand-cream rounded-xl flex flex-col items-center justify-center p-6 border border-brand-sand/60 gap-3">
            <div className="w-14 h-14 rounded-xl bg-white/80 border border-brand-sand flex items-center justify-center text-brand-terracotta shadow-xs">
              <UtensilsIcon className="w-7 h-7 text-brand-terracotta" />
            </div>
            <div className="text-center">
              <span className="font-heading font-bold text-base text-brand-brown block">
                {product.name}
              </span>
              <span className="text-xs text-brand-brown/60 block mt-0.5">
                Freshly Stone-Ground
              </span>
            </div>
          </div>

          <div className="flex items-center justify-between text-sm">
            <span className="text-brand-brown/70">Pack MRP:</span>
            <span className="font-heading font-bold text-brand-terracotta text-lg">
              ₹{product.packSizes[0]?.mrp}
            </span>
          </div>

          <div className="flex flex-col gap-2 pt-2">
            <Link
              href={`/products/${product.slug}`}
              className="w-full inline-flex items-center justify-center px-4 py-2.5 bg-brand-cream hover:bg-brand-sand text-brand-brown text-xs font-semibold rounded-xl border border-brand-sand transition-all text-center"
            >
              View Spice Details
            </Link>

            <a
              href={`https://wa.me/${SITE_INFO.whatsappNumber}?text=${encodeURIComponent(
                `Hello Mom's Secret Spices! I am cooking ${recipeName} in the studio and would like to order ${product.name}.`,
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
  );
}
