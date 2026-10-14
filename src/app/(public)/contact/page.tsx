import { Metadata } from "next";
import ContactForm from "@/components/shared/ContactForm";

export const metadata: Metadata = {
  title: "Contact Us | Mom's Secret Spices",
  description: "Get in touch with Mom's Secret Spices for retail, bulk, or culinary inquiries",
};

export default function ContactPage() {
  const email = process.env.NEXT_PUBLIC_EMAIL || "contact@momssecretspices.com";
  const whatsapp = process.env.NEXT_PUBLIC_WHATSAPP_NUMBER || "919876543210";

  return (
    <main className="flex-1 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-16">
      <div className="max-w-2xl mb-12">
        <span className="inline-flex items-center gap-1 px-3 py-1 rounded-full text-xs font-semibold bg-brand-gold/15 text-brand-brown border border-brand-gold/30 mb-3">
          Support & Enquiries
        </span>
        <h1 className="font-heading text-3xl sm:text-4xl md:text-5xl font-bold text-brand-brown tracking-tight mb-4">
          Get in Touch
        </h1>
        <p className="text-base text-brand-brown/75 leading-relaxed">
          Have questions about our spice blends, custom gift packages, or restaurant supply? We&apos;d love to hear from you.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-start mb-12">
        {/* Contact Information & Channels */}
        <div className="md:col-span-5 space-y-6">
          <div className="bg-white p-6 rounded-2xl border border-brand-sand shadow-xs space-y-6">
            <div>
              <h3 className="font-heading font-bold text-xs uppercase tracking-wider text-brand-brown mb-1.5">
                Email
              </h3>
              <a
                href={`mailto:${email}`}
                className="text-sm font-medium text-brand-terracotta hover:underline"
              >
                {email}
              </a>
            </div>

            <div className="pt-4 border-t border-brand-sand">
              <h3 className="font-heading font-bold text-xs uppercase tracking-wider text-brand-brown mb-1.5">
                Direct WhatsApp
              </h3>
              <a
                href={`https://wa.me/${whatsapp}`}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 text-sm font-medium text-brand-terracotta hover:underline"
              >
                <span>Chat with us on WhatsApp ↗</span>
              </a>
            </div>

            <div className="pt-4 border-t border-brand-sand">
              <h3 className="font-heading font-bold text-xs uppercase tracking-wider text-brand-brown mb-1.5">
                Customer Hours
              </h3>
              <p className="text-xs text-brand-brown/75 leading-relaxed">
                Monday – Friday: 10:00 AM – 6:00 PM IST<br />
                Saturday: 11:00 AM – 4:00 PM IST<br />
                Sunday: Closed (Family cooking time!)
              </p>
            </div>
          </div>

          <div className="p-6 bg-brand-sand/40 border border-brand-sand rounded-2xl space-y-2">
            <h4 className="font-heading font-semibold text-sm text-brand-brown">
              Bulk Orders & Partnerships
            </h4>
            <p className="text-xs text-brand-brown/70 leading-relaxed">
              Supplying restaurants, boutique grocery stores, and corporate gifting events across India.
            </p>
          </div>
        </div>

        {/* Contact Form */}
        <div className="md:col-span-7 bg-white p-6 sm:p-8 rounded-3xl border border-brand-sand shadow-xs">
          <h2 className="font-heading text-xl font-bold text-brand-brown mb-6">
            Send Us a Message
          </h2>
          <ContactForm />
        </div>
      </div>
    </main>
  );
}
