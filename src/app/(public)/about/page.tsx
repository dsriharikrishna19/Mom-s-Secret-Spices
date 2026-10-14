import { Metadata } from "next";
import Link from "next/link";
import {
  UtensilsIcon,
  LeafIcon,
  SparklesIcon,
  CheckIcon,
} from "@/components/ui/Icons";

export const metadata: Metadata = {
  title: "About Us | Mom's Secret Spices",
  description:
    "Learn about Mom's Secret Spices, our heritage, values, and commitment to purity",
};

export default function AboutPage() {
  return (
    <main className="flex-1 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 md:py-12 flex flex-col gap-8 md:gap-10">
      <div className="text-center max-w-2xl mx-auto flex flex-col items-center gap-2.5">
        <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold bg-brand-gold/15 text-brand-brown border border-brand-gold/30">
          <SparklesIcon className="w-3.5 h-3.5 text-brand-terracotta" />
          <span>Our Heritage</span>
        </span>
        <h1 className="font-heading text-xl sm:text-2xl font-bold text-brand-brown">
          The Secret in Every Spoon
        </h1>
        <p className="text-xs sm:text-sm md:text-base text-brand-brown/75 leading-relaxed">
          Passed down through generations, preserved with respect for
          traditional Indian culinary craft.
        </p>
      </div>

      <div className="flex flex-col gap-6 sm:gap-8">
        {/* Story Section */}
        <section className="bg-white p-6 sm:p-8 rounded-xl border border-brand-sand shadow-xs flex flex-col gap-3">
          <h2 className="font-heading text-lg sm:text-xl font-bold text-brand-brown flex items-center gap-3">
            <div className="w-8 h-8 rounded-lg bg-brand-cream border border-brand-sand flex items-center justify-center text-brand-terracotta shrink-0">
              <UtensilsIcon className="w-4 h-4 text-brand-terracotta" />
            </div>
            <span>Our Story</span>
          </h2>
          <p className="text-xs sm:text-sm text-brand-brown/80 leading-relaxed">
            Mom&apos;s Secret Spices was born from the timeless memory of a warm
            home kitchen, where every dish began with hand-selected seeds,
            roasted to gentle perfection, and freshly crushed with a stone
            mortar.
          </p>
          <p className="text-xs sm:text-sm text-brand-brown/80 leading-relaxed">
            In an era of mass-manufactured, stale supermarket powders filled
            with anti-caking agents and extract residue, we set out to restore
            the soul of traditional Indian spices. Every blend we offer is made
            from whole spices sourced directly from fertile local farms across
            India.
          </p>
        </section>

        {/* Mission Section */}
        <section className="bg-white p-6 sm:p-8 rounded-xl border border-brand-sand shadow-xs flex flex-col gap-3">
          <h2 className="font-heading text-lg sm:text-xl font-bold text-brand-brown flex items-center gap-3">
            <div className="w-8 h-8 rounded-lg bg-brand-cream border border-brand-sand flex items-center justify-center text-brand-green shrink-0">
              <LeafIcon className="w-4 h-4 text-brand-green" />
            </div>
            <span>Our Mission</span>
          </h2>
          <p className="text-xs sm:text-sm text-brand-brown/80 leading-relaxed">
            Our mission is twofold: preserve sacred heirloom spice formulations,
            and bring joyful, intuitive cooking confidence to every kitchen
            through authentic ingredients and our interactive AI culinary guide.
          </p>
        </section>

        {/* Quality Promises */}
        <section className="bg-brand-cream border border-brand-sand p-6 sm:p-8 rounded-xl flex flex-col gap-4">
          <h2 className="font-heading text-lg sm:text-xl font-bold text-brand-brown">
            Our Purity Commitment
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
            <div className="flex items-start gap-3 p-4 bg-white/80 rounded-xl border border-brand-sand/60 hover:shadow-xs hover:border-brand-terracotta/40 hover:-translate-y-0.5 transition-all">
              <div className="w-5 h-5 rounded-full bg-brand-green/15 flex items-center justify-center text-brand-green shrink-0 mt-0.5">
                <CheckIcon className="w-3.5 h-3.5 text-brand-green" />
              </div>
              <div className="flex flex-col gap-0.5">
                <h4 className="font-heading font-semibold text-xs sm:text-sm text-brand-brown">
                  100% Single-Origin Sourcing
                </h4>
                <p className="text-xs text-brand-brown/70 leading-relaxed">
                  Traceable origins from trusted multigenerational spice
                  growers.
                </p>
              </div>
            </div>

            <div className="flex items-start gap-3 p-4 bg-white/80 rounded-xl border border-brand-sand/60 hover:shadow-xs hover:border-brand-terracotta/40 hover:-translate-y-0.5 transition-all">
              <div className="w-5 h-5 rounded-full bg-brand-green/15 flex items-center justify-center text-brand-green shrink-0 mt-0.5">
                <CheckIcon className="w-3.5 h-3.5 text-brand-green" />
              </div>
              <div className="flex flex-col gap-0.5">
                <h4 className="font-heading font-semibold text-xs sm:text-sm text-brand-brown">
                  Traditional Slow Stone-Grinding
                </h4>
                <p className="text-xs text-brand-brown/70 leading-relaxed">
                  Prevents friction heat from destroying essential aromatic
                  oils.
                </p>
              </div>
            </div>

            <div className="flex items-start gap-3 p-4 bg-white/80 rounded-xl border border-brand-sand/60 hover:shadow-xs hover:border-brand-terracotta/40 hover:-translate-y-0.5 transition-all">
              <div className="w-5 h-5 rounded-full bg-brand-green/15 flex items-center justify-center text-brand-green shrink-0 mt-0.5">
                <CheckIcon className="w-3.5 h-3.5 text-brand-green" />
              </div>
              <div className="flex flex-col gap-0.5">
                <h4 className="font-heading font-semibold text-xs sm:text-sm text-brand-brown">
                  No Fillers or Additives
                </h4>
                <p className="text-xs text-brand-brown/70 leading-relaxed">
                  Zero preservatives, artificial coloring, or MSG. Pure spice.
                </p>
              </div>
            </div>

            <div className="flex items-start gap-3 p-4 bg-white/80 rounded-xl border border-brand-sand/60 hover:shadow-xs hover:border-brand-terracotta/40 hover:-translate-y-0.5 transition-all">
              <div className="w-5 h-5 rounded-full bg-brand-green/15 flex items-center justify-center text-brand-green shrink-0 mt-0.5">
                <CheckIcon className="w-3.5 h-3.5 text-brand-green" />
              </div>
              <div className="flex flex-col gap-0.5">
                <h4 className="font-heading font-semibold text-xs sm:text-sm text-brand-brown">
                  Fresh Small Batches
                </h4>
                <p className="text-xs text-brand-brown/70 leading-relaxed">
                  Milled weekly to guarantee the maximum scent and flavor punch.
                </p>
              </div>
            </div>
          </div>
        </section>

        <div className="text-center pt-2">
          <Link
            href="/products"
            className="inline-flex items-center gap-2 px-6 py-3 bg-brand-terracotta hover:bg-[#8e3920] text-white font-semibold rounded-xl shadow-xs transition-all text-xs sm:text-sm"
          >
            Explore Our Spice Blends →
          </Link>
        </div>
      </div>
    </main>
  );
}
