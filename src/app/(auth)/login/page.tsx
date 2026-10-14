"use client";

import React, { useState } from "react";
import Link from "next/link";

export default function LoginPage() {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <main className="flex-1 flex items-center justify-center px-4 py-16 sm:py-24">
      <div className="w-full max-w-md bg-white rounded-3xl p-8 border border-brand-sand shadow-xs space-y-6">
        <div className="text-center space-y-2">
          <span className="text-4xl block">🏺</span>
          <h1 className="font-heading text-2xl font-bold text-brand-brown">
            Welcome Back
          </h1>
          <p className="text-sm text-brand-brown/70">
            Sign in to your Mom&apos;s Secret Spices profile
          </p>
        </div>

        {submitted ? (
          <div className="bg-brand-cream/80 p-6 rounded-2xl border border-brand-sand text-center space-y-3">
            <span className="text-2xl block">✨</span>
            <p className="text-sm font-semibold text-brand-brown">
              Welcome to the Mom&apos;s Secret Spices kitchen!
            </p>
            <p className="text-xs text-brand-brown/70">
              In this MVP edition, full catalog browsing and recipe guidance are immediately accessible.
            </p>
            <Link
              href="/experience"
              className="inline-block mt-2 px-5 py-2.5 bg-brand-terracotta text-white font-semibold text-xs rounded-xl shadow-xs hover:bg-[#8e3920] transition-all"
            >
              Enter Cooking Studio →
            </Link>
          </div>
        ) : (
          <form className="space-y-4" onSubmit={handleSubmit}>
            <div>
              <label className="block text-xs font-bold text-brand-brown uppercase tracking-wider mb-1.5">
                Email Address
              </label>
              <input
                type="email"
                required
                placeholder="you@example.com"
                className="w-full px-4 py-2.5 rounded-xl border border-brand-sand bg-brand-cream/30 text-sm text-brand-brown focus:outline-hidden focus:border-brand-terracotta transition-all"
              />
            </div>

            <div>
              <label className="block text-xs font-bold text-brand-brown uppercase tracking-wider mb-1.5">
                Password
              </label>
              <input
                type="password"
                required
                placeholder="••••••••"
                className="w-full px-4 py-2.5 rounded-xl border border-brand-sand bg-brand-cream/30 text-sm text-brand-brown focus:outline-hidden focus:border-brand-terracotta transition-all"
              />
            </div>

            <div className="pt-2">
              <button
                type="submit"
                className="w-full py-3 px-4 bg-brand-terracotta hover:bg-[#8e3920] text-white font-semibold rounded-xl text-sm transition-all shadow-xs"
              >
                Sign In
              </button>
            </div>
          </form>
        )}

        <div className="pt-4 border-t border-brand-sand/80 text-center text-xs text-brand-brown/70">
          <span>Note: In this MVP version, all recipes and orders are open without login via direct WhatsApp and email.</span>
        </div>
      </div>
    </main>
  );
}
