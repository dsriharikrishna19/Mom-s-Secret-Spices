import { Skeleton } from "@/components/ui/Skeleton";

export default function ProductDetailLoading() {
  return (
    <main className="flex-1 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 md:py-16 flex flex-col gap-8">
      <Skeleton className="w-36 h-5 rounded-lg" />

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start">
        <div className="lg:col-span-5 bg-white p-6 sm:p-12 rounded-xl border border-brand-sand shadow-xs flex flex-col items-center justify-center gap-6">
          <Skeleton className="w-44 h-44 sm:w-60 sm:h-60 rounded-full" />
          <div className="flex gap-2">
            <Skeleton className="w-20 sm:w-24 h-7 rounded-full" />
            <Skeleton className="w-20 sm:w-24 h-7 rounded-full" />
          </div>
        </div>

        <div className="lg:col-span-7 flex flex-col gap-6">
          <Skeleton className="w-32 h-6 rounded-full" />
          <Skeleton className="w-3/4 h-8 sm:h-10 rounded-xl" />
          <Skeleton className="w-full h-16 rounded-xl" />

          <div className="bg-white p-5 sm:p-6 rounded-xl border border-brand-sand/80 shadow-xs flex flex-col gap-4">
            <Skeleton className="w-40 h-4 rounded-md" />
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              <Skeleton className="h-14 rounded-xl" />
              <Skeleton className="h-14 rounded-xl" />
            </div>
          </div>

          <Skeleton className="w-full h-14 rounded-xl" />
        </div>
      </div>
    </main>
  );
}
