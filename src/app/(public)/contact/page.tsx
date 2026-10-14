import { Metadata } from "next";
import ContactForm from "@/components/shared/ContactForm";

export const metadata: Metadata = {
  title: "Contact Us | Mom's Secret Spices",
  description:
    "Get in touch with Mom's Secret Spices for retail, bulk, or culinary inquiries",
};

export default function ContactPage() {
  const email = process.env.NEXT_PUBLIC_EMAIL || "contact@momssecretspices.com";
  const whatsapp = process.env.NEXT_PUBLIC_WHATSAPP_NUMBER || "919876543210";

  return (
    <main className="flex-1 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-8 md:py-12 flex flex-col gap-8 md:gap-10">
      <div className="max-w-2xl flex flex-col gap-2.5">
        <span className="self-start inline-flex items-center gap-1 px-3 py-1 rounded-full text-xs font-semibold bg-brand-gold/15 text-brand-brown border border-brand-gold/30">
          Support & Enquiries
        </span>
        <h1 className="font-heading text-xl sm:text-2xl font-bold text-brand-brown tracking-tight">
          Get in Touch
        </h1>
        <p className="text-xs sm:text-sm md:text-base text-brand-brown/75 leading-relaxed">
          Have questions about our spice blends, custom gift packages, or
          restaurant supply? We&apos;d love to hear from you.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-start">
        {/* Contact Information & Channels */}
        <div className="md:col-span-5 flex flex-col gap-6">
          <div className="bg-white p-5 sm:p-6 rounded-xl border border-brand-sand shadow-xs flex flex-col gap-5">
            <div className="flex flex-col gap-1">
              <h3 className="font-heading font-bold text-xs uppercase tracking-wider text-brand-brown">
                Email
              </h3>
              <a
                href={`mailto:${email}`}
                className="text-xs sm:text-sm font-medium text-brand-terracotta hover:underline break-all"
              >
                {email}
              </a>
            </div>

            <div className="pt-4 border-t border-brand-sand flex flex-col gap-1">
              <h3 className="font-heading font-bold text-xs uppercase tracking-wider text-brand-brown">
                Direct WhatsApp
              </h3>
              <a
                href={`https://wa.me/${whatsapp}`}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 text-xs sm:text-sm font-medium text-brand-terracotta hover:underline"
              >
                <span>Chat with us on WhatsApp ↗</span>
              </a>
            </div>

            <div className="pt-4 border-t border-brand-sand flex flex-col gap-1">
              <h3 className="font-heading font-bold text-xs uppercase tracking-wider text-brand-brown">
                Customer Hours
              </h3>
              <p className="text-xs text-brand-brown/75 leading-relaxed">
                Monday – Friday: 10:00 AM – 6:00 PM IST
                <br />
                Saturday: 11:00 AM – 4:00 PM IST
                <br />
                Sunday: Closed (Family cooking time!)
              </p>
            </div>
          </div>

          <div className="p-5 sm:p-6 bg-brand-sand/40 border border-brand-sand rounded-xl flex flex-col gap-1.5">
            <h4 className="font-heading font-semibold text-xs sm:text-sm text-brand-brown">
              Bulk Orders & Partnerships
            </h4>
            <p className="text-xs text-brand-brown/70 leading-relaxed">
              Supplying restaurants, boutique grocery stores, and corporate
              gifting events across India.
            </p>
          </div>
        </div>

        {/* Contact Form */}
        <div className="md:col-span-7 bg-white p-5 sm:p-8 rounded-xl border border-brand-sand shadow-xs flex flex-col gap-5">
          <h2 className="font-heading text-lg sm:text-xl font-bold text-brand-brown">
            Send Us a Message
          </h2>
          <ContactForm />
        </div>
      </div>
    </main>
  );
}
