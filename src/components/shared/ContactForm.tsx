"use client";

import { useState } from "react";
import { MailIcon, SendIcon } from "@/components/ui/Icons";

export default function ContactForm() {
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.email) return;
    setSubmitted(true);
  };

  if (submitted) {
    return (
      <div className="bg-brand-cream/80 border border-brand-sand p-6 rounded-xl text-center flex flex-col items-center gap-3">
        <div className="w-12 h-12 rounded-full bg-brand-sand/60 border border-brand-sand flex items-center justify-center text-brand-terracotta">
          <MailIcon className="w-6 h-6 text-brand-terracotta" />
        </div>
        <h4 className="font-heading font-bold text-brand-brown text-base sm:text-lg">
          Thank you, {formData.name}!
        </h4>
        <p className="text-sm text-brand-brown/75 max-w-sm">
          Your inquiry has been received. Our team will get back to you shortly.
        </p>
        <button
          onClick={() => {
            setSubmitted(false);
            setFormData({ name: "", email: "", message: "" });
          }}
          className="text-xs font-semibold text-brand-terracotta hover:underline pt-2"
        >
          Send another message
        </button>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="flex flex-col gap-4">
      <div className="flex flex-col gap-1.5">
        <label className="text-xs font-bold text-brand-brown uppercase tracking-wider">
          Your Name
        </label>
        <input
          type="text"
          required
          value={formData.name}
          onChange={(e) => setFormData({ ...formData, name: e.target.value })}
          className="w-full px-4 py-3 rounded-xl border border-brand-sand bg-white text-brand-brown placeholder:text-brand-brown/40 focus:outline-hidden focus:border-brand-terracotta focus:ring-1 focus:ring-brand-terracotta transition-all text-sm"
          placeholder="e.g. Priya Sharma"
        />
      </div>

      <div className="flex flex-col gap-1.5">
        <label className="text-xs font-bold text-brand-brown uppercase tracking-wider">
          Email Address
        </label>
        <input
          type="email"
          required
          value={formData.email}
          onChange={(e) => setFormData({ ...formData, email: e.target.value })}
          className="w-full px-4 py-3 rounded-xl border border-brand-sand bg-white text-brand-brown placeholder:text-brand-brown/40 focus:outline-hidden focus:border-brand-terracotta focus:ring-1 focus:ring-brand-terracotta transition-all text-sm"
          placeholder="priya@example.com"
        />
      </div>

      <div className="flex flex-col gap-1.5">
        <label className="text-xs font-bold text-brand-brown uppercase tracking-wider">
          Message
        </label>
        <textarea
          rows={4}
          required
          value={formData.message}
          onChange={(e) =>
            setFormData({ ...formData, message: e.target.value })
          }
          className="w-full px-4 py-3 rounded-xl border border-brand-sand bg-white text-brand-brown placeholder:text-brand-brown/40 focus:outline-hidden focus:border-brand-terracotta focus:ring-1 focus:ring-brand-terracotta transition-all text-sm resize-none"
          placeholder="Tell us about your spice requirement or bulk enquiry..."
        />
      </div>

      <button
        type="submit"
        className="w-full inline-flex items-center justify-center gap-2 bg-brand-terracotta hover:bg-[#8e3920] text-white py-3.5 px-6 rounded-xl font-semibold transition-all shadow-xs hover:shadow text-sm"
      >
        <SendIcon className="w-4 h-4" />
        <span>Send Message</span>
      </button>
    </form>
  );
}
