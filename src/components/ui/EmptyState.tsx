import React from "react";
import { SearchIcon } from "@/components/ui/Icons";

interface EmptyStateProps {
  icon?: React.ReactNode;
  title: string;
  description: string;
  actionLabel?: string;
  onAction?: () => void;
  className?: string;
}

export function EmptyState({
  icon,
  title,
  description,
  actionLabel,
  onAction,
  className = "",
}: EmptyStateProps) {
  return (
    <div
      className={`bg-white rounded-xl p-8 sm:p-12 text-center border border-brand-sand/80 shadow-xs flex flex-col items-center gap-4 max-w-xl mx-auto ${className}`}
    >
      <div className="w-14 h-14 sm:w-16 sm:h-16 rounded-xl bg-brand-cream border border-brand-sand flex items-center justify-center text-brand-brown/60 shadow-2xs">
        {icon || (
          <SearchIcon className="w-7 h-7 sm:w-8 sm:h-8 text-brand-brown/50" />
        )}
      </div>
      <div className="flex flex-col gap-1.5">
        <h3 className="font-heading text-lg sm:text-xl font-bold text-brand-brown">
          {title}
        </h3>
        <p className="text-xs sm:text-sm text-brand-brown/70 leading-relaxed max-w-md mx-auto">
          {description}
        </p>
      </div>
      {actionLabel && onAction && (
        <div className="pt-2">
          <button
            type="button"
            onClick={onAction}
            className="px-5 py-2.5 bg-brand-terracotta hover:bg-[#8e3920] text-white text-xs font-semibold rounded-xl transition-all shadow-xs hover:shadow"
          >
            {actionLabel}
          </button>
        </div>
      )}
    </div>
  );
}
