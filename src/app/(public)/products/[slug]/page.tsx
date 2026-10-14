import { Metadata } from "next";
import Link from "next/link";
import { getProductBySlug, getAllProducts } from "@/features/products";
import { Badge, CheckIcon, ArrowLeftIcon, WhatsAppIcon } from "@/components/ui";

interface ProductPageProps {
  params: Promise<{
    slug: string;
  }>;
}

export async function generateMetadata({
  params,
}: ProductPageProps): Promise<Metadata> {
  const { slug } = await params;
  const product = getProductBySlug(slug);

  if (!product) {
    return {
      title: "Product Not Found | Mom's Secret Spices",
    };
  }

  return {
    title: `${product.name} | Mom's Secret Spices`,
    description: product.description,
  };
}

export async function generateStaticParams() {
  const products = getAllProducts();
  return products.map((product) => ({
    slug: product.slug,
  }));
}

export default async function ProductDetailPage({
  params,
}: ProductPageProps) {
  const { slug } = await params;
  const product = getProductBySlug(slug);

  if (!product) {
    return (
      <main className="flex-1 flex items-center justify-center px-4 py-20">
        <div className="max-w-md w-full text-center bg-white p-8 rounded-3xl border border-brand-sand shadow-xs">
          <span className="text-4xl mb-4 block">🔍</span>
          <h1 className="font-heading text-2xl font-bold text-brand-brown mb-2">
            Product Not Found
          </h1>
          <p className="text-sm text-brand-brown/70 mb-6">
            We couldn&apos;t locate the spice blend you were looking for.
          </p>
          <Link
            href="/products"
            className="inline-flex items-center gap-2 px-6 py-2.5 bg-brand-terracotta text-white font-medium rounded-xl hover:bg-[#8e3920] transition-colors text-sm"
          >
            <ArrowLeftIcon className="w-4 h-4" />
            <span>Back to All Spices</span>
          </Link>
        </div>
      </main>
    );
  }

  const emoji = product.slug.includes("turmeric")
    ? "🟡"
    : product.slug.includes("garam")
    ? "🏺"
    : "🌿";

  const whatsappNumber =
    process.env.NEXT_PUBLIC_WHATSAPP_NUMBER || "919876543210";
  const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(
    `Hello! I would like to order Mom's Secret Spices: ${product.name} (${product.packSizes[0]?.weight}${product.packSizes[0]?.unit} pack).`
  )}`;

  return (
    <main className="flex-1 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 md:py-16">
      <div className="mb-8">
        <Link
          href="/products"
          className="inline-flex items-center gap-2 text-sm font-semibold text-brand-brown/70 hover:text-brand-terracotta transition-colors"
        >
          <ArrowLeftIcon className="w-4 h-4" />
          <span>Back to All Products</span>
        </Link>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
        {/* Left Column: Visual Showcase */}
        <div className="bg-white p-8 sm:p-12 rounded-3xl border border-brand-sand shadow-xs flex flex-col items-center justify-center text-center">
          <div className="w-48 h-48 sm:w-64 sm:h-64 rounded-full bg-gradient-to-tr from-brand-sand/60 to-brand-cream flex items-center justify-center text-7xl sm:text-8xl shadow-inner border border-brand-sand">
            {emoji}
          </div>
          <div className="mt-8 flex flex-wrap gap-2 justify-center">
            <Badge variant="green">
              <CheckIcon className="w-3.5 h-3.5" /> 100% Natural
            </Badge>
            <Badge variant="gold">
              <CheckIcon className="w-3.5 h-3.5" /> Stone Ground
            </Badge>
            <Badge variant="sand">
              <CheckIcon className="w-3.5 h-3.5" /> Small Batch
            </Badge>
          </div>
        </div>

        {/* Right Column: Details & Purchasing Info */}
        <div className="space-y-8">
          <div>
            <Badge variant="terracotta" className="mb-2">
              Authentic Spice Blend
            </Badge>
            <h1 className="font-heading text-3xl sm:text-4xl font-bold text-brand-brown mb-3">
              {product.name}
            </h1>
            <p className="text-base text-brand-brown/80 leading-relaxed">
              {product.description}
            </p>
          </div>

          {/* Pack Sizes & Pricing */}
          <div className="bg-white p-6 rounded-2xl border border-brand-sand/80 shadow-xs space-y-4">
            <h3 className="font-heading text-sm font-bold text-brand-brown uppercase tracking-wider">
              Available Packaging Options
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {product.packSizes.map((packSize) => (
                <div
                  key={packSize.id}
                  className="flex items-center justify-between p-3.5 bg-brand-cream/60 border border-brand-sand/80 rounded-xl hover:border-brand-terracotta/40 transition-colors"
                >
                  <span className="font-medium text-brand-brown text-sm">
                    {packSize.weight} {packSize.unit}
                  </span>
                  <span className="font-heading font-bold text-brand-terracotta text-lg">
                    ₹{packSize.mrp}
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* Ingredients list */}
          {product.ingredients.length > 0 && (
            <div className="space-y-3">
              <h3 className="font-heading text-sm font-bold text-brand-brown uppercase tracking-wider">
                Pure Ingredients
              </h3>
              <div className="flex flex-wrap gap-2">
                {product.ingredients.map((item, idx) => (
                  <span
                    key={idx}
                    className="px-3 py-1.5 bg-white border border-brand-sand text-xs font-medium text-brand-brown rounded-lg"
                  >
                    {item}
                  </span>
                ))}
              </div>
            </div>
          )}

          {/* Health & Culinary Benefits */}
          {product.healthBenefits && product.healthBenefits.length > 0 && (
            <div className="space-y-3">
              <h3 className="font-heading text-sm font-bold text-brand-brown uppercase tracking-wider">
                Culinary & Wellness Benefits
              </h3>
              <ul className="grid grid-cols-1 gap-2.5">
                {product.healthBenefits.map((benefit, idx) => (
                  <li
                    key={idx}
                    className="flex items-start gap-2.5 text-sm text-brand-brown/85"
                  >
                    <span className="text-brand-green font-bold text-base leading-none">
                      ✓
                    </span>
                    <span>{benefit}</span>
                  </li>
                ))}
              </ul>
            </div>
          )}

          {/* Action Button */}
          <div className="pt-2">
            <a
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full inline-flex items-center justify-center gap-2.5 py-4 px-6 bg-brand-terracotta hover:bg-[#8e3920] text-white font-semibold rounded-xl shadow-md hover:shadow-lg transition-all text-center text-sm"
            >
              <WhatsAppIcon className="w-5 h-5 text-white" />
              <span>Enquire & Order on WhatsApp</span>
            </a>
          </div>
        </div>
      </div>
    </main>
  );
}
