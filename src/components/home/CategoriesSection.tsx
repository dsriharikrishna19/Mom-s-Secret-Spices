"use client";

import Link from "next/link";
import { Badge } from "@/components/ui/Badge";
import {
  ArrowRightIcon,
  FlameIcon,
  LeafIcon,
  UtensilsIcon,
} from "@/components/ui/Icons";
import { MotionLanding, MotionCard } from "@/components/magicui";

interface CatalogCategory {
  name: string;
  tag: string;
  count: string;
  description: string;
  badge: string;
  icon: React.ReactNode;
}

const DEFAULT_CATEGORIES: CatalogCategory[] = [
  {
    name: "Heritage Spice Blends",
    tag: "blend",
    count: "Sambar, Rasam, Garam Masala & Regional Blends",
    description:
      "Authentic multi-spice formulations toasted and stone-ground to balance heat, aroma, and color.",
    badge: "Signature Craft",
    icon: <FlameIcon className="w-5 h-5 text-brand-terracotta" />,
  },
  {
    name: "Pure Ground Spices",
    tag: "spice",
    count: "Turmeric, Kashmiri Mirch, Coriander & Black Pepper",
    description:
      "Pure whole seeds milled weekly in small batches without extraction residue or artificial color.",
    badge: "Kitchen Staples",
    icon: <LeafIcon className="w-5 h-5 text-brand-green" />,
  },
  {
    name: "Slow-Roasted Podis",
    tag: "blend",
    count: "Chutney Podi, Idli Podi, Bisibelebath & Puliyogre",
    description:
      "Traditional South Indian kitchen accompaniments prepared with slow-roasted lentils and curry leaves.",
    badge: "Breakfast & Rice",
    icon: <UtensilsIcon className="w-5 h-5 text-brand-gold" />,
  },
];

export function CategoriesSection() {
  return (
    <section className="py-12 md:py-16 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto w-full flex flex-col gap-8">
      <MotionLanding
        direction="up"
        className="text-center max-w-2xl mx-auto flex flex-col items-center gap-2"
      >
        <Badge variant="terracotta" className="self-center">
          Culinary Categories
        </Badge>
        <h2 className="font-heading text-xl sm:text-2xl font-bold text-brand-brown">
          Explore By Flavor & Tradition
        </h2>
        <p className="text-xs sm:text-sm text-brand-brown/75 leading-relaxed">
          Curated according to how Indian families cook — from daily dal and
          curry essentials to slow-roasted breakfast podis.
        </p>
      </MotionLanding>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {DEFAULT_CATEGORIES.map((cat, i) => (
          <MotionCard
            key={i}
            index={i}
            direction="up"
            className="bg-white p-6 rounded-xl border border-brand-sand/80 shadow-xs hover:border-brand-terracotta/40 hover:shadow-md transition-all flex flex-col justify-between gap-5"
          >
            <div className="flex flex-col gap-3">
              <div className="flex items-center justify-between">
                <div className="w-10 h-10 rounded-lg bg-brand-cream border border-brand-sand flex items-center justify-center">
                  {cat.icon}
                </div>
                <Badge variant="sand">{cat.badge}</Badge>
              </div>

              <div className="flex flex-col gap-1.5">
                <h3 className="font-heading font-bold text-base sm:text-lg text-brand-brown">
                  {cat.name}
                </h3>
                <p className="text-xs text-brand-terracotta font-medium">
                  {cat.count}
                </p>
                <p className="text-xs sm:text-sm text-brand-brown/75 leading-relaxed pt-1">
                  {cat.description}
                </p>
              </div>
            </div>

            <Link
              href="/products"
              className="inline-flex items-center gap-1.5 text-xs font-semibold text-brand-terracotta hover:underline pt-2 border-t border-brand-sand/60"
            >
              <span>Browse Category Products</span>
              <ArrowRightIcon className="w-3.5 h-3.5" />
            </Link>
          </MotionCard>
        ))}
      </div>
    </section>
  );
}
