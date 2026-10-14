export const SITE_INFO = {
  name: "Mom's Secret Spices",
  tagline: "Authentic artisanal Indian spice blends freshly stone-ground and curated for everyday culinary magic.",
  siteUrl: "https://momssecretspices.com",
  email: "contact@momssecretspices.com",
  whatsappNumber: "919900161030",
  whatsappDisplay: "+91 99001 61030",
  phone: "+91 99001 61030",
  address: "Bengaluru, Karnataka, India",
} as const;

export const SOCIAL_LINKS = {
  whatsapp: `https://wa.me/${SITE_INFO.whatsappNumber}`,
  email: `mailto:${SITE_INFO.email}`,
} as const;
