import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Privacy Policy | Mom's Secret Spices",
  description: "Privacy policy and data governance practices at Mom's Secret Spices",
};

export default function PrivacyPolicyPage() {
  const email = process.env.NEXT_PUBLIC_EMAIL || "contact@momssecretspices.com";

  return (
    <main className="flex-1 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-16">
      <div className="mb-10">
        <span className="inline-flex items-center gap-1 px-3 py-1 rounded-full text-xs font-semibold bg-brand-gold/15 text-brand-brown border border-brand-gold/30 mb-3">
          Governance & Trust
        </span>
        <h1 className="font-heading text-3xl sm:text-4xl font-bold text-brand-brown mb-3">
          Privacy Policy
        </h1>
        <p className="text-sm text-brand-brown/70">
          Last updated: October 2026
        </p>
      </div>

      <div className="bg-white rounded-3xl p-6 sm:p-10 border border-brand-sand shadow-xs space-y-8 text-brand-brown/85 leading-relaxed text-sm sm:text-base">
        <section className="space-y-3">
          <h2 className="font-heading text-xl font-bold text-brand-brown">
            1. Introduction
          </h2>
          <p>
            At Mom&apos;s Secret Spices, we respect your privacy and are committed to protecting the personal information you share with us. This policy details how we handle and protect your personal data when you visit our website, explore our culinary experience, or order our products.
          </p>
        </section>

        <section className="space-y-3">
          <h2 className="font-heading text-xl font-bold text-brand-brown">
            2. Information We Collect
          </h2>
          <p>
            We collect only the essential information necessary to deliver exceptional spice experiences:
          </p>
          <ul className="space-y-2 list-disc list-inside text-brand-brown/80">
            <li><strong>Contact Details:</strong> Your name, email address, and phone number when you submit an inquiry or message us on WhatsApp.</li>
            <li><strong>Order Preferences:</strong> Spice varieties and packaging selections you indicate an interest in.</li>
            <li><strong>Anonymous Technical Metrics:</strong> Device viewport and browser capabilities strictly used to optimize WebGL 3D kitchen performance.</li>
          </ul>
        </section>

        <section className="space-y-3">
          <h2 className="font-heading text-xl font-bold text-brand-brown">
            3. How We Use Your Data
          </h2>
          <ul className="space-y-2 list-disc list-inside text-brand-brown/80">
            <li>To respond to your inquiries and coordinate spice orders.</li>
            <li>To refine our recipes, cooking guide recommendations, and user experience.</li>
            <li>We do not sell, rent, or trade your personal data to any third-party marketing brokers.</li>
          </ul>
        </section>

        <section className="space-y-3">
          <h2 className="font-heading text-xl font-bold text-brand-brown">
            4. Your Rights
          </h2>
          <p>
            You retain full control over your personal data. You may request access, correction, or deletion of your information at any time by contacting us.
          </p>
        </section>

        <section className="pt-6 border-t border-brand-sand space-y-2">
          <h3 className="font-heading font-semibold text-base text-brand-brown">
            Questions or Concerns?
          </h3>
          <p className="text-sm text-brand-brown/75">
            Feel free to email us directly at{" "}
            <a
              href={`mailto:${email}`}
              className="text-brand-terracotta hover:underline font-medium"
            >
              {email}
            </a>
            .
          </p>
        </section>
      </div>
    </main>
  );
}
