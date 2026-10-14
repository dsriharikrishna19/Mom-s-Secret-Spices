import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-[#39251E] text-[#FFF8EE] border-t border-[#39251E]/20 mt-auto">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-12">
          {/* Brand Info */}
          <div className="md:col-span-1 space-y-4">
            <div className="flex items-center gap-2">
              <span className="text-2xl">🌶️</span>
              <span className="font-heading font-bold text-xl text-[#FFF8EE]">
                Mom&apos;s Secret Spices
              </span>
            </div>
            <p className="text-sm text-[#FFF8EE]/70 leading-relaxed">
              Authentic artisanal Indian spice blends freshly stone-ground and curated for everyday culinary magic.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-heading font-semibold text-sm uppercase tracking-wider text-brand-gold mb-4">
              Explore
            </h4>
            <ul className="space-y-2 text-sm text-[#FFF8EE]/75">
              <li>
                <Link href="/products" className="hover:text-brand-gold transition-colors">
                  Spice Catalog
                </Link>
              </li>
              <li>
                <Link href="/experience" className="hover:text-brand-gold transition-colors">
                  Cooking Studio Experience
                </Link>
              </li>
              <li>
                <Link href="/about" className="hover:text-brand-gold transition-colors">
                  Our Tradition & Story
                </Link>
              </li>
            </ul>
          </div>

          {/* Customer Care */}
          <div>
            <h4 className="font-heading font-semibold text-sm uppercase tracking-wider text-brand-gold mb-4">
              Connect
            </h4>
            <ul className="space-y-2 text-sm text-[#FFF8EE]/75">
              <li>
                <Link href="/contact" className="hover:text-brand-gold transition-colors">
                  Customer Support
                </Link>
              </li>
              <li>
                <Link href="/privacy-policy" className="hover:text-brand-gold transition-colors">
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
          <div className="bg-[#FFF8EE]/5 p-5 rounded-xl border border-[#FFF8EE]/10 space-y-2">
            <h4 className="font-heading font-semibold text-sm text-[#FFF8EE] flex items-center gap-2">
              <span className="text-brand-gold">✓</span> 100% Pure & Potent
            </h4>
            <p className="text-xs text-[#FFF8EE]/70 leading-relaxed">
              Zero artificial preservatives, no synthetic colorants. Pure single-origin spices and family heritage blends.
            </p>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="pt-8 border-t border-[#FFF8EE]/10 flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-[#FFF8EE]/60">
          <p>© 2026 Mom&apos;s Secret Spices. Handcrafted with love.</p>
          <div className="flex gap-6">
            <Link href="/privacy-policy" className="hover:text-[#FFF8EE] transition-colors">
              Privacy
            </Link>
            <Link href="/contact" className="hover:text-[#FFF8EE] transition-colors">
              Support
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
