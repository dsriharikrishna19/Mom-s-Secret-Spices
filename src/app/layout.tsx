import type { Metadata } from "next";
import { Inter, Sora } from "next/font/google";
import "./globals.css";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import PageTransitionWrapper from "@/components/layout/PageTransitionWrapper";
import { WhatsAppBot } from "@/components/shared/WhatsAppBot";
import { SITE_INFO } from "@/data/info";

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

export const viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
};

const baseUrl = SITE_INFO.siteUrl;

export const metadata: Metadata = {
  metadataBase: new URL(baseUrl),
  title: {
    default:
      "Mom's Secret Spices | Authentic Indian Spices & Blends by Akshaya Foods",
    template: "%s | Mom's Secret Spices",
  },
  description:
    "Discover authentic homestyle Indian spices, stone-ground blends, and masalas crafted by Akshaya Foods since 1998. Explore our 27 regional formulations and interactive cooking guide.",
  keywords: [
    "Mom's Secret Spices",
    "Akshaya Foods",
    "Indian spices",
    "Sambar powder",
    "Rasam powder",
    "Garam masala",
    "Biryani masala",
    "Traditional Indian spice blends",
    "Karnataka spices",
  ],
  authors: [{ name: "Akshaya Foods - Mom's Secret Spices" }],
  creator: "Akshaya Foods",
  publisher: "Akshaya Foods",
  icons: {
    icon: [
      { url: "/favicon.svg", type: "image/svg+xml", sizes: "any" },
      { url: "/favicon.ico", sizes: "any" },
      { url: "/icon.jpg", type: "image/jpeg", sizes: "192x192" },
      { url: "/brand-logo.jpg", type: "image/jpeg", sizes: "512x512" },
    ],
    apple: [{ url: "/apple-icon.jpg", sizes: "180x180", type: "image/jpeg" }],
    shortcut: ["/favicon.svg", "/favicon.ico"],
  },
  alternates: {
    canonical: baseUrl,
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  openGraph: {
    title:
      "Mom's Secret Spices | Authentic Indian Spices & Blends by Akshaya Foods",
    description:
      "Crafted with traditional recipes since 1998. Explore 27 authentic regional spice blends and interactive culinary guidance.",
    url: baseUrl,
    siteName: "Mom's Secret Spices",
    images: [
      {
        url: "/images/products/distributor-campaign-artwork.jpg",
        width: 1200,
        height: 675,
        alt: "Mom's Secret Spices Authentic Indian Collection",
      },
    ],
    locale: "en_IN",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Mom's Secret Spices | Authentic Indian Spices & Blends",
    description:
      "Traditional homestyle spices crafted by Akshaya Foods since 1998. Explore our 27 regional formulations.",
    images: ["/images/products/distributor-campaign-artwork.jpg"],
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  // Google Structured Data for Sitelinks & Nested Routes Navigation
  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "WebSite",
        "@id": `${baseUrl}/#website`,
        url: baseUrl,
        name: "Mom's Secret Spices",
        description: "Authentic Indian Spice Blends & Masalas by Akshaya Foods",
        publisher: {
          "@id": `${baseUrl}/#organization`,
        },
        potentialAction: {
          "@type": "SearchAction",
          target: {
            "@type": "EntryPoint",
            urlTemplate: `${baseUrl}/products?search={search_term_string}`,
          },
          "query-input": "required name=search_term_string",
        },
      },
      {
        "@type": "Organization",
        "@id": `${baseUrl}/#organization`,
        name: "Mom's Secret Spices",
        alternateName: "Akshaya Foods",
        url: baseUrl,
        logo: {
          "@type": "ImageObject",
          url: `${baseUrl}/brand-logo.jpg`,
          caption: "Mom's Secret Spices Logo",
        },
        contactPoint: {
          "@type": "ContactPoint",
          telephone: SITE_INFO.phone,
          contactType: "customer service",
          areaServed: "IN",
          availableLanguage: ["en", "kn", "hi"],
        },
      },
      {
        "@type": "SiteNavigationElement",
        "@id": `${baseUrl}/#navigation`,
        name: "Main Navigation",
        hasPart: [
          {
            "@type": "WebPage",
            name: "Spices & Blends Catalog",
            description:
              "Explore 27 authentic regional spice blends and masalas with direct pricing.",
            url: `${baseUrl}/products`,
          },
          {
            "@type": "WebPage",
            name: "3D Cooking Studio",
            description:
              "Interactive virtual Indian kitchen guide for traditional recipes and spice tempering.",
            url: `${baseUrl}/experience`,
          },
          {
            "@type": "WebPage",
            name: "Our Heritage & Tradition",
            description:
              "Learn about Akshaya Foods' heritage since 1998 and our homestyle craft.",
            url: `${baseUrl}/about`,
          },
          {
            "@type": "WebPage",
            name: "Distributor & Customer Contact",
            description:
              "Get in touch with Akshaya Foods for retail purchases and distributorship opportunities.",
            url: `${baseUrl}/contact`,
          },
          {
            "@type": "WebPage",
            name: "Privacy Policy",
            description:
              "Review our customer data protection and ordering privacy standards.",
            url: `${baseUrl}/privacy-policy`,
          },
        ],
      },
    ],
  };

  return (
    <html
      lang="en"
      data-scroll-behavior="smooth"
      className={`${inter.variable} ${sora.variable} h-full antialiased scroll-smooth`}
    >
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="min-h-full flex flex-col bg-brand-cream text-brand-brown font-sans selection:bg-brand-gold/30 selection:text-brand-brown">
        <Header />
        <PageTransitionWrapper>{children}</PageTransitionWrapper>
        <Footer />
        <WhatsAppBot />
      </body>
    </html>
  );
}
