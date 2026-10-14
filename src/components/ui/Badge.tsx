import React from "react";

interface BadgeProps extends React.HTMLAttributes<HTMLSpanElement> {
  variant?: "terracotta" | "gold" | "green" | "sand" | "cream";
  children: React.ReactNode;
}

export function Badge({
  variant = "sand",
  className = "",
  children,
  ...props
}: BadgeProps) {
  const variantStyles = {
    terracotta:
      "bg-brand-terracotta/10 text-brand-terracotta border-brand-terracotta/25",
    gold: "bg-brand-gold/15 text-brand-brown border-brand-gold/30",
    green: "bg-brand-green/10 text-brand-green border-brand-green/20",
    sand: "bg-brand-sand/60 text-brand-brown border-brand-sand",
    cream: "bg-brand-cream text-brand-brown border-brand-sand/80",
  }[variant];

  return (
    <span
      className={`inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold border ${variantStyles} ${className}`}
      {...props}
    >
      {children}
    </span>
  );
}
