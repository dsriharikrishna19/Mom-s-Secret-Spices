import type { Metadata } from "next";
import { Inter, Sora } from "next/font/google";
import "./globals.css";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

const sora = Sora({
  variable: "--font-sora",
  subsets: ["latin"],
  display: "swap",
});

const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://momssecretspices.com";

export const metadata: Metadata = {
  metadataBase: new URL(baseUrl),
  title: {
    default: "Mom's Secret Spices | Premium Indian Cooking Experience",
    template: "%s | Mom's Secret Spices",
  },
  description:
    "Experience authentic Indian home cooking with our freshly milled artisanal spices and interactive 3D Cooking Studio.",
  keywords: [
    "Mom's Secret Spices",
    "Akshaya Foods",
    "Indian spices",
    "Stone-ground turmeric",
    "Artisanal garam masala",
    "3D cooking experience",
    "Heritage Indian recipes",
  ],
  authors: [{ name: "Akshaya Foods - Mom's Secret Spices" }],
  openGraph: {
    title: "Mom's Secret Spices | Premium Indian Cooking Experience",
    description:
      "Artisanal Indian spices freshly stone-ground and paired with our interactive 3D Cooking Studio.",
    url: baseUrl,
    siteName: "Mom's Secret Spices",
    images: [
      {
        url: "/spice-catalog-banner.jpg",
        width: 1200,
        height: 630,
        alt: "Mom's Secret Spices Collection",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Mom's Secret Spices | Premium Indian Cooking Experience",
    description:
      "Experience authentic Indian home cooking with our premium spices and interactive 3D cooking studio.",
    images: ["/spice-catalog-banner.jpg"],
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html
      lang="en"
      className={`${inter.variable} ${sora.variable} h-full antialiased scroll-smooth`}
    >
      <body className="min-h-full flex flex-col bg-brand-cream text-brand-brown font-sans selection:bg-brand-gold/30 selection:text-brand-brown">
        <Header />
        <div className="flex-1 flex flex-col">
          {children}
        </div>
        <Footer />
      </body>
    </html>
  );
}
