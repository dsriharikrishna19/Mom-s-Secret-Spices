import Link from "next/link";
import { FlameIcon, CheckIcon } from "@/components/ui/Icons";

export default function Footer() {
  return (
    <footer className="bg-[#39251E] text-[#FFF8EE] border-t border-[#39251E]/20 mt-auto">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 md:py-14 flex flex-col gap-10">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Brand Info */}
          <div className="space-y-3">
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 rounded-lg bg-brand-gold/20 flex items-center justify-center text-brand-gold border border-brand-gold/30 shrink-0">
                <FlameIcon className="w-4 h-4 text-brand-gold" />
              </div>
              <span className="font-heading font-bold text-lg text-[#FFF8EE]">
                Mom&apos;s Secret Spices
              </span>
            </div>
            <p className="text-xs sm:text-sm text-[#FFF8EE]/70 leading-relaxed">
              Authentic artisanal Indian spice blends freshly stone-ground and
              curated for everyday culinary magic.
            </p>
          </div>

          {/* Quick Links */}
          <div className="flex flex-col gap-3">
            <h4 className="font-heading font-semibold text-xs uppercase tracking-wider text-brand-gold">
              Explore
            </h4>
            <ul className="flex flex-col gap-2 text-xs sm:text-sm text-[#FFF8EE]/75">
              <li>
                <Link
                  href="/products"
                  className="hover:text-brand-gold transition-colors"
                >
                  Spice Catalog
                </Link>
              </li>
              <li>
                <Link
                  href="/experience"
                  className="hover:text-brand-gold transition-colors"
                >
                  Cooking Studio Experience
                </Link>
              </li>
              <li>
                <Link
                  href="/about"
                  className="hover:text-brand-gold transition-colors"
                >
                  Our Tradition & Story
                </Link>
              </li>
            </ul>
          </div>

          {/* Customer Care */}
          <div className="flex flex-col gap-3">
            <h4 className="font-heading font-semibold text-xs uppercase tracking-wider text-brand-gold">
              Connect
            </h4>
            <ul className="flex flex-col gap-2 text-xs sm:text-sm text-[#FFF8EE]/75">
              <li>
                <Link
                  href="/contact"
                  className="hover:text-brand-gold transition-colors"
                >
                  Customer Support
                </Link>
              </li>
              <li>
                <Link
                  href="/privacy-policy"
                  className="hover:text-brand-gold transition-colors"
                >
                  Privacy Policy
                </Link>
              </li>
              <li>
                <a
                  href={`https://wa.me/${process.env.NEXT_PUBLIC_WHATSAPP_NUMBER || "919876543210"}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-brand-gold transition-colors inline-flex items-center gap-1.5"
                >
                  WhatsApp Assistance ↗
                </a>
              </li>
            </ul>
          </div>

          {/* Craft Promise */}
          <div className="bg-[#FFF8EE]/5 p-5 rounded-xl border border-[#FFF8EE]/10 flex flex-col gap-2">
            <h4 className="font-heading font-semibold text-xs sm:text-sm text-[#FFF8EE] flex items-center gap-2">
              <CheckIcon className="w-3.5 h-3.5 text-brand-gold shrink-0" />
              <span>100% Pure & Potent</span>
            </h4>
            <p className="text-xs text-[#FFF8EE]/70 leading-relaxed">
              Zero artificial preservatives, no synthetic colorants. Pure
              single-origin spices and family heritage blends.
            </p>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="pt-6 border-t border-[#FFF8EE]/10 flex flex-col sm:flex-row justify-between items-center gap-4 text-xs text-[#FFF8EE]/60">
          <p className="text-center sm:text-left">© 2026 Mom&apos;s Secret Spices. Handcrafted with love.</p>
          <div className="flex gap-6">
            <Link
              href="/privacy-policy"
              className="hover:text-[#FFF8EE] transition-colors"
            >
              Privacy
            </Link>
            <Link
              href="/contact"
              className="hover:text-[#FFF8EE] transition-colors"
            >
              Support
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
