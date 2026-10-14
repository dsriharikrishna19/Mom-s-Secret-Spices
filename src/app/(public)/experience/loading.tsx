import { Skeleton } from "@/components/ui/Skeleton";

export default function ExperienceLoading() {
  return (
    <main className="flex-1 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-10 md:py-16 space-y-10">
      <div className="text-center max-w-2xl mx-auto space-y-3 flex flex-col items-center">
        <Skeleton className="w-56 h-6 rounded-full" />
        <Skeleton className="w-80 h-10 rounded-xl" />
        <Skeleton className="w-full h-12 rounded-lg" />
      </div>

      <div className="space-y-6">
        <div className="bg-white p-4 sm:p-6 rounded-3xl border border-brand-sand shadow-xs flex justify-between items-center">
          <Skeleton className="w-48 h-8 rounded-xl" />
          <Skeleton className="w-36 h-6 rounded-full" />
        </div>

        {/* 3D Canvas Skeleton */}
        <div className="w-full aspect-16/9 md:aspect-21/9 rounded-3xl bg-brand-sand/40 border border-brand-sand flex items-center justify-center">
          <Skeleton className="w-32 h-32 rounded-full" />
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          <div className="lg:col-span-8 bg-white p-8 rounded-3xl border border-brand-sand shadow-xs space-y-4">
            <Skeleton className="w-40 h-6 rounded-md" />
            <Skeleton className="w-3/4 h-8 rounded-lg" />
            <Skeleton className="w-full h-20 rounded-xl" />
          </div>
          <div className="lg:col-span-4 bg-white p-6 rounded-3xl border border-brand-sand shadow-xs space-y-4">
            <Skeleton className="w-36 h-6 rounded-full" />
            <Skeleton className="w-full aspect-square rounded-2xl" />
          </div>
        </div>
      </div>
    </main>
  );
}
