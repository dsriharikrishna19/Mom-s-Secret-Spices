import Link from "next/link";
import { FlameIcon, CheckIcon } from "@/components/ui/Icons";
import { SOCIAL_LINKS } from "@/data/info";

export default function Footer() {
  return (
    <footer className="bg-brand-brown text-brand-cream border-t border-brand-brown/20 mt-auto">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 md:py-14 flex flex-col gap-10">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Brand Info */}
          <div className="space-y-3">
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 rounded-lg bg-secondary/20 flex items-center justify-center text-secondary border border-secondary/30 shrink-0">
                <FlameIcon className="w-4 h-4 text-secondary" />
              </div>
              <span className="font-heading font-bold text-lg text-brand-cream">
                Mom&apos;s Secret Spices
              </span>
            </div>
            <p className="text-xs sm:text-sm text-brand-cream/70 leading-relaxed">
              Authentic artisanal Indian spice blends freshly stone-ground and
              curated for everyday culinary magic.
            </p>
          </div>

          {/* Quick Links */}
          <div className="flex flex-col gap-3">
            <h4 className="font-heading font-semibold text-xs uppercase tracking-wider text-secondary">
              Explore
            </h4>
            <ul className="flex flex-col gap-2 text-xs sm:text-sm text-brand-cream/75">
              <li>
                <Link
                  href="/products"
                  className="hover:text-secondary transition-colors"
                >
                  Spice Catalog
                </Link>
              </li>
              <li>
                <Link
                  href="/experience"
                  className="hover:text-secondary transition-colors"
                >
                  Cooking Studio Experience
                </Link>
              </li>
              <li>
                <Link
                  href="/about"
                  className="hover:text-secondary transition-colors"
                >
                  Our Tradition & Story
                </Link>
              </li>
            </ul>
          </div>

          {/* Customer Care */}
          <div className="flex flex-col gap-3">
            <h4 className="font-heading font-semibold text-xs uppercase tracking-wider text-secondary">
              Connect
            </h4>
            <ul className="flex flex-col gap-2 text-xs sm:text-sm text-brand-cream/75">
              <li>
                <Link
                  href="/contact"
                  className="hover:text-secondary transition-colors"
                >
                  Customer Support
                </Link>
              </li>
              <li>
                <Link
                  href="/privacy-policy"
                  className="hover:text-secondary transition-colors"
                >
                  Privacy Policy
                </Link>
              </li>
              <li>
                <a
                  href={SOCIAL_LINKS.whatsapp}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-secondary transition-colors inline-flex items-center gap-1.5"
                >
                  WhatsApp Assistance ↗
                </a>
              </li>
            </ul>
          </div>

          {/* Craft Promise */}
          <div className="bg-brand-cream/5 p-5 rounded-xl border border-brand-cream/10 flex flex-col gap-2">
            <h4 className="font-heading font-semibold text-xs sm:text-sm text-brand-cream flex items-center gap-2">
              <CheckIcon className="w-3.5 h-3.5 text-secondary shrink-0" />
              <span>Authentic Homestyle Quality</span>
            </h4>
            <p className="text-xs text-brand-cream/70 leading-relaxed">
              Traditional Indian recipes curated by Akshaya Foods. Crafted to
              deliver wholesome taste, rich aroma, and natural color in every
              dish.
            </p>
          </div>
        </div>

        {/* Grand Baahubali Style Title Banner */}
        <div className="relative py-4 border-t border-brand-cream/10 text-center overflow-hidden flex flex-col items-center justify-center">
          <div className="flex items-center justify-center gap-3 w-full mb-3">
            <span className="h-px bg-linear-to-r from-transparent via-brand-gold/40 to-transparent flex-1 max-w-xs" />
            <span className="text-[10px] sm:text-xs font-heading tracking-[0.35em] uppercase text-brand-gold/80 font-bold">
              Artisanal Heritage • Est. 1998
            </span>
            <span className="h-px bg-linear-to-r from-transparent via-brand-gold/40 to-transparent flex-1 max-w-xs" />
          </div>

          <h2 className="font-heading font-black text-2xl sm:text-2xl md:text-2xl uppercase tracking-[0.25em] text-transparent bg-clip-text bg-linear-to-r from-amber-200 via-brand-gold to-orange-400 drop-shadow-[0_4px_16px_rgba(217,119,6,0.35)] select-none">
            MOM&apos;S SECRET SPICES
          </h2>
          <p className="text-[11px] sm:text-xs font-serif tracking-[0.2em] uppercase text-brand-cream/60 mt-1">
            AKSHAYA FOODS • THE ROYAL ESSENCE OF INDIAN TRADITION
          </p>
        </div>

        {/* Bottom bar */}
        <div className="pt-4 pb-6 border-t border-brand-cream/10 flex flex-col sm:flex-row justify-between items-center gap-4 text-xs text-brand-cream/60">
          <p className="text-center sm:text-left">
            © 2026 Mom&apos;s Secret Spices. Handcrafted with love.
          </p>
          <div className="flex gap-6">
            <Link
              href="/privacy-policy"
              className="hover:text-brand-cream transition-colors"
            >
              Privacy
            </Link>
            <Link
              href="/contact"
              className="hover:text-brand-cream transition-colors"
            >
              Support
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
