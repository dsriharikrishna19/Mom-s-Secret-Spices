import React from "react";

interface SkeletonProps extends React.HTMLAttributes<HTMLDivElement> {
  className?: string;
}

export function Skeleton({ className = "", ...props }: SkeletonProps) {
  return (
    <div
      className={`animate-pulse rounded-xl bg-brand-sand/60 ${className}`}
      {...props}
    />
  );
}

export function ProductCardSkeleton() {
  return (
    <div className="flex flex-col bg-white rounded-xl border border-brand-sand/80 shadow-xs overflow-hidden">
      {/* Visual Top */}
      <div className="aspect-4/3 bg-brand-sand/30 p-6 flex flex-col items-center justify-center relative">
        <Skeleton className="w-16 h-16 rounded-xl" />
        <div className="mt-4 flex gap-2">
          <Skeleton className="w-16 h-5 rounded-full" />
          <Skeleton className="w-20 h-5 rounded-full" />
        </div>
      </div>

      {/* Card Content */}
      <div className="p-6 flex-1 flex flex-col justify-between space-y-4">
        <div className="space-y-2.5">
          <Skeleton className="w-3/4 h-6 rounded-lg" />
          <Skeleton className="w-full h-4 rounded-md" />
          <Skeleton className="w-5/6 h-4 rounded-md" />
        </div>

        <div className="pt-2 space-y-2">
          <Skeleton className="w-1/3 h-3 rounded-md" />
          <div className="flex gap-1.5 flex-wrap">
            <Skeleton className="w-16 h-5 rounded-md" />
            <Skeleton className="w-14 h-5 rounded-md" />
            <Skeleton className="w-20 h-5 rounded-md" />
          </div>
        </div>

        <div className="pt-4 border-t border-brand-sand/60 flex items-center justify-between">
          <div className="space-y-1">
            <Skeleton className="w-12 h-3 rounded-md" />
            <Skeleton className="w-16 h-6 rounded-md" />
          </div>
          <Skeleton className="w-28 h-9 rounded-xl" />
        </div>
      </div>
    </div>
  );
}
