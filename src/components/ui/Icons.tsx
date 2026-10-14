import React from "react";
import {
  Sparkles,
  Search,
  Filter,
  Check,
  ArrowRight,
  ArrowLeft,
  Flame,
  ChefHat,
  Home,
  Clock,
  Mail,
  Send,
  Leaf,
  Store,
  UtensilsCrossed,
  Layers,
  Award,
  Compass,
  ShieldCheck,
} from "lucide-react";

export interface IconsProps {
  className?: string;
  size?: number;
}

export const CompassIcon = ({
  className = "w-4 h-4",
  size = 16,
}: IconsProps) => <Compass className={className} size={size} />;

export const ShieldCheckIcon = ({
  className = "w-4 h-4",
  size = 16,
}: IconsProps) => <ShieldCheck className={className} size={size} strokeWidth={2} />;

// Brand Lucide Icons
export const SparklesIcon = ({
  className = "w-4 h-4",
  size = 16,
}: IconsProps) => <Sparkles className={className} size={size} />;

export const SearchIcon = ({
  className = "w-4 h-4",
  size = 16,
}: IconsProps) => <Search className={className} size={size} />;

export const FilterIcon = ({
  className = "w-4 h-4",
  size = 16,
}: IconsProps) => <Filter className={className} size={size} />;

export const CheckIcon = ({ className = "w-4 h-4", size = 16 }: IconsProps) => (
  <Check className={className} size={size} strokeWidth={2.5} />
);

export const ArrowRightIcon = ({
  className = "w-4 h-4",
  size = 16,
}: IconsProps) => <ArrowRight className={className} size={size} />;

export const ArrowLeftIcon = ({
  className = "w-4 h-4",
  size = 16,
}: IconsProps) => <ArrowLeft className={className} size={size} />;

export const ChefHatIcon = ({
  className = "w-5 h-5",
  size = 20,
}: IconsProps) => <ChefHat className={className} size={size} />;

export const FlameIcon = ({ className = "w-4 h-4", size = 16 }: IconsProps) => (
  <Flame className={className} size={size} />
);

export const HomeIcon = ({ className = "w-5 h-5", size = 20 }: IconsProps) => (
  <Home className={className} size={size} />
);

export const ClockIcon = ({ className = "w-4 h-4", size = 16 }: IconsProps) => (
  <Clock className={className} size={size} />
);

export const MailIcon = ({ className = "w-4 h-4", size = 16 }: IconsProps) => (
  <Mail className={className} size={size} />
);

export const SendIcon = ({ className = "w-4 h-4", size = 16 }: IconsProps) => (
  <Send className={className} size={size} />
);

export const LeafIcon = ({ className = "w-4 h-4", size = 16 }: IconsProps) => (
  <Leaf className={className} size={size} />
);

export const StoreIcon = ({ className = "w-4 h-4", size = 16 }: IconsProps) => (
  <Store className={className} size={size} />
);

export const UtensilsIcon = ({
  className = "w-4 h-4",
  size = 16,
}: IconsProps) => <UtensilsCrossed className={className} size={size} />;

export const LayersIcon = ({
  className = "w-4 h-4",
  size = 16,
}: IconsProps) => <Layers className={className} size={size} />;

export const AwardIcon = ({ className = "w-4 h-4", size = 16 }: IconsProps) => (
  <Award className={className} size={size} />
);

// WhatsApp brand SVG (WhatsApp is not in standard Lucide icon set)
export function WhatsAppIcon({ className = "w-5 h-5", size = 20 }: IconsProps) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="currentColor"
      className={className}
    >
      <path d="M12.04 2c-5.46 0-9.91 4.45-9.91 9.91 0 1.75.46 3.45 1.32 4.95L2.05 22l5.25-1.38c1.45.79 3.08 1.21 4.74 1.21 5.46 0 9.91-4.45 9.91-9.91 0-2.65-1.03-5.14-2.9-7.01A9.816 9.816 0 0 0 12.04 2m.01 1.67c2.2 0 4.26.86 5.82 2.42a8.225 8.225 0 0 1 2.41 5.83c0 4.54-3.7 8.24-8.24 8.24-1.48 0-2.93-.4-4.2-1.15l-.3-.18-3.12.82.83-3.04-.2-.31a8.19 8.19 0 0 1-1.26-4.38c0-4.54 3.7-8.24 8.24-8.24m4.52 11.66c-.25-.12-1.47-.72-1.7-.81-.23-.08-.39-.12-.56.12-.17.25-.64.81-.79.97-.14.17-.29.19-.54.06-.25-.12-1.05-.39-2-1.23-.74-.66-1.24-1.47-1.39-1.72-.14-.25-.02-.38.11-.5.11-.11.25-.29.37-.43.12-.14.17-.25.25-.41.08-.17.04-.31-.02-.43s-.56-1.35-.77-1.85c-.2-.48-.41-.42-.56-.43h-.48c-.17 0-.44.06-.67.31-.23.25-.88.86-.88 2.1 0 1.24.9 2.44 1.03 2.61.12.17 1.77 2.7 4.29 3.79.6.26 1.07.41 1.44.53.6.19 1.15.16 1.58.1.48-.07 1.47-.6 1.68-1.18.21-.58.21-1.07.15-1.18-.06-.11-.23-.17-.48-.29" />
    </svg>
  );
}
