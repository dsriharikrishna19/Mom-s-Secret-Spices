import React from "react";
import Link from "next/link";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "secondary" | "outline" | "ghost";
  size?: "sm" | "md" | "lg";
  href?: string;
  external?: boolean;
}

export function Button({
  variant = "primary",
  size = "md",
  className = "",
  children,
  href,
  external,
  ...props
}: ButtonProps) {
  const base =
    "inline-flex items-center justify-center font-semibold rounded-xl transition-all focus:outline-hidden focus:ring-2 focus:ring-brand-terracotta/40 disabled:opacity-50 disabled:pointer-events-none";

  const sizeStyles = {
    sm: "px-3.5 py-1.5 text-xs",
    md: "px-5 py-2.5 text-sm",
    lg: "px-8 py-3.5 text-base",
  }[size];

  const variantStyles = {
    primary:
      "bg-brand-terracotta hover:bg-[#8e3920] text-white shadow-xs hover:shadow-md",
    secondary:
      "bg-brand-gold hover:bg-[#d6932e] text-brand-brown shadow-xs hover:shadow-md",
    outline:
      "bg-white/90 hover:bg-white text-brand-brown border border-brand-sand shadow-2xs hover:border-brand-terracotta/50",
    ghost: "bg-transparent hover:bg-brand-sand/50 text-brand-brown",
  }[variant];

  const combinedClasses = `${base} ${sizeStyles} ${variantStyles} ${className}`;

  if (href) {
    if (external) {
      return (
        <a
          href={href}
          target="_blank"
          rel="noopener noreferrer"
          className={combinedClasses}
        >
          {children}
        </a>
      );
    }
    return (
      <Link href={href} className={combinedClasses}>
        {children}
      </Link>
    );
  }

  return (
    <button className={combinedClasses} {...props}>
      {children}
    </button>
  );
}
