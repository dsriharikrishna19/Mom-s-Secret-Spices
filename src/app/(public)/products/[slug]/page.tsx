import { Metadata } from "next";
import Link from "next/link";
import { getProductBySlug, getAllProducts } from "@/features/products";
import {
  Badge,
  CheckIcon,
  ArrowLeftIcon,
  WhatsAppIcon,
  FlameIcon,
  LeafIcon,
  UtensilsIcon,
  EmptyState,
} from "@/components/ui";

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

export default async function ProductDetailPage({ params }: ProductPageProps) {
  const { slug } = await params;
  const product = getProductBySlug(slug);

  if (!product) {
    return (
      <main className="flex-1 flex items-center justify-center px-4 py-20">
        <EmptyState
          title="Spice Blend Not Found"
          description="We couldn't locate the artisanal spice blend you were looking for. Browse our full catalog to explore our current batches."
          actionLabel="Browse All Spices"
          onAction={undefined}
        />
      </main>
    );
  }

  const isChilliOrHot =
    product.slug.includes("chilli") ||
    product.slug.includes("pepper") ||
    product.slug.includes("garam");
  const isHerbalOrLeafy =
    product.slug.includes("coriander") ||
    product.slug.includes("kasuri") ||
    product.slug.includes("podi");

  const whatsappNumber =
    process.env.NEXT_PUBLIC_WHATSAPP_NUMBER || "919876543210";
  const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(
    `Hello! I would like to order Mom's Secret Spices: ${product.name} (${product.packSizes[0]?.weight}${product.packSizes[0]?.unit} pack).`,
  )}`;

  return (
    <main className="flex-1 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 md:py-12 flex flex-col gap-6 sm:gap-8">
      <div>
        <Link
          href="/products"
          className="inline-flex items-center gap-2 text-xs sm:text-sm font-semibold text-brand-brown/70 hover:text-brand-terracotta transition-colors"
        >
          <ArrowLeftIcon className="w-4 h-4" />
          <span>Back to All Products</span>
        </Link>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start">
        {/* Left Column: Visual Showcase */}
        <div className="lg:col-span-5 bg-white p-6 sm:p-10 rounded-xl border border-brand-sand shadow-xs flex flex-col items-center justify-center text-center gap-6">
          <div className="w-40 h-40 sm:w-56 sm:h-56 rounded-full bg-gradient-to-tr from-brand-sand/60 to-brand-cream flex items-center justify-center shadow-inner border border-brand-sand">
            {isChilliOrHot ? (
              <FlameIcon className="w-20 h-20 sm:w-24 sm:h-24 text-brand-terracotta" />
            ) : isHerbalOrLeafy ? (
              <LeafIcon className="w-20 h-20 sm:w-24 sm:h-24 text-brand-green" />
            ) : (
              <UtensilsIcon className="w-20 h-20 sm:w-24 sm:h-24 text-brand-gold" />
            )}
          </div>
          <div className="flex flex-wrap gap-2 justify-center">
            <Badge variant="green" className="inline-flex items-center gap-1.5">
              <CheckIcon className="w-3.5 h-3.5" />
              <span>100% Natural</span>
            </Badge>
            <Badge variant="gold" className="inline-flex items-center gap-1.5">
              <CheckIcon className="w-3.5 h-3.5" />
              <span>Stone Ground</span>
            </Badge>
            <Badge variant="sand" className="inline-flex items-center gap-1.5">
              <CheckIcon className="w-3.5 h-3.5" />
              <span>Small Batch</span>
            </Badge>
          </div>
        </div>

        {/* Right Column: Details & Purchasing Info */}
        <div className="lg:col-span-7 flex flex-col gap-6">
          <div className="flex flex-col gap-2">
            <Badge variant="terracotta" className="self-start">
              Authentic Spice Blend
            </Badge>
            <h1 className="font-heading text-xl sm:text-2xl font-bold text-brand-brown">
              {product.name}
            </h1>
            <p className="text-xs sm:text-sm md:text-base text-brand-brown/80 leading-relaxed">
              {product.description}
            </p>
          </div>

          {/* Pack Sizes & Pricing */}
          <div className="bg-white p-5 sm:p-6 rounded-xl border border-brand-sand/80 shadow-xs flex flex-col gap-3.5">
            <h3 className="font-heading text-xs font-bold text-brand-brown uppercase tracking-wider">
              Available Packaging Options
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {product.packSizes.map((packSize) => (
                <div
                  key={packSize.id}
                  className="flex items-center justify-between p-3.5 bg-brand-cream/60 border border-brand-sand/80 rounded-lg hover:border-brand-terracotta/40 transition-colors"
                >
                  <span className="font-medium text-brand-brown text-xs sm:text-sm">
                    {packSize.weight} {packSize.unit}
                  </span>
                  <span className="font-heading font-bold text-brand-terracotta text-base sm:text-lg">
                    ₹{packSize.mrp}
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* Ingredients list */}
          {product.ingredients.length > 0 && (
            <div className="flex flex-col gap-2.5">
              <h3 className="font-heading text-xs font-bold text-brand-brown uppercase tracking-wider">
                Pure Ingredients
              </h3>
              <div className="flex flex-wrap gap-2">
                {product.ingredients.map((item, idx) => (
                  <span
                    key={idx}
                    className="px-2.5 py-1 bg-white border border-brand-sand text-xs font-medium text-brand-brown rounded-lg"
                  >
                    {item}
                  </span>
                ))}
              </div>
            </div>
          )}

          {/* Health & Culinary Benefits */}
          {product.healthBenefits && product.healthBenefits.length > 0 && (
            <div className="flex flex-col gap-2.5">
              <h3 className="font-heading text-xs font-bold text-brand-brown uppercase tracking-wider">
                Culinary & Wellness Benefits
              </h3>
              <ul className="grid grid-cols-1 gap-2">
                {product.healthBenefits.map((benefit, idx) => (
                  <li
                    key={idx}
                    className="flex items-start gap-2 text-xs sm:text-sm text-brand-brown/85"
                  >
                    <CheckIcon className="w-4 h-4 text-brand-green shrink-0 mt-0.5" />
                    <span>{benefit}</span>
                  </li>
                ))}
              </ul>
            </div>
          )}

          {/* Action Button */}
          <div className="pt-1">
            <a
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full inline-flex items-center justify-center gap-2 py-3.5 px-6 bg-brand-terracotta hover:bg-[#8e3920] text-white font-semibold rounded-xl shadow-xs hover:shadow transition-all text-center text-xs sm:text-sm"
            >
              <WhatsAppIcon className="w-4 h-4 text-white shrink-0" />
              <span>Enquire & Order on WhatsApp</span>
            </a>
          </div>
        </div>
      </div>
    </main>
  );
}
