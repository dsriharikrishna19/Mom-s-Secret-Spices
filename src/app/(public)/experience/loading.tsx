import { Skeleton } from "@/components/ui/Skeleton";

export default function ExperienceLoading() {
  return (
    <main className="flex-1 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 md:py-16 flex flex-col gap-8 sm:gap-10">
      <div className="text-center max-w-2xl mx-auto flex flex-col items-center gap-3">
        <Skeleton className="w-56 h-6 rounded-full" />
        <Skeleton className="w-72 sm:w-80 h-9 sm:h-10 rounded-xl" />
        <Skeleton className="w-full h-12 rounded-lg" />
      </div>

      <div className="flex flex-col gap-6">
        <div className="bg-white p-4 sm:p-6 rounded-xl border border-brand-sand shadow-xs flex justify-between items-center">
          <Skeleton className="w-48 h-8 rounded-xl" />
          <Skeleton className="w-36 h-6 rounded-full" />
        </div>

        {/* 3D Canvas Skeleton */}
        <div className="w-full aspect-16/9 rounded-xl bg-brand-sand/40 border border-brand-sand flex items-center justify-center">
          <Skeleton className="w-24 h-24 sm:w-32 sm:h-32 rounded-full" />
        </div>

        <div className="flex flex-col lg:flex-row gap-6 sm:gap-8 items-start w-full">
          <div className="flex-1 w-full bg-white p-6 sm:p-8 rounded-xl border border-brand-sand shadow-xs flex flex-col gap-4">
            <Skeleton className="w-40 h-6 rounded-md" />
            <Skeleton className="w-3/4 h-8 rounded-lg" />
            <Skeleton className="w-full h-20 rounded-xl" />
          </div>
          <div className="w-full lg:w-84 xl:w-96 shrink-0 bg-white p-6 rounded-xl border border-brand-sand shadow-xs flex flex-col gap-4">
            <Skeleton className="w-36 h-6 rounded-full" />
            <Skeleton className="w-full aspect-square rounded-xl" />
          </div>
        </div>
      </div>
    </main>
  );
}
