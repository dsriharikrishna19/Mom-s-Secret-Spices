import { Skeleton } from "@/components/ui/Skeleton";

export default function ProductDetailLoading() {
  return (
    <main className="flex-1 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 md:py-16 space-y-8">
      <Skeleton className="w-36 h-5 rounded-lg" />

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
        <div className="bg-white p-8 sm:p-12 rounded-3xl border border-brand-sand shadow-xs flex flex-col items-center justify-center space-y-6">
          <Skeleton className="w-48 h-48 sm:w-64 sm:h-64 rounded-full" />
          <div className="flex gap-2">
            <Skeleton className="w-24 h-7 rounded-full" />
            <Skeleton className="w-24 h-7 rounded-full" />
            <Skeleton className="w-24 h-7 rounded-full" />
          </div>
        </div>

        <div className="space-y-6">
          <Skeleton className="w-32 h-6 rounded-full" />
          <Skeleton className="w-3/4 h-10 rounded-xl" />
          <Skeleton className="w-full h-16 rounded-xl" />

          <div className="bg-white p-6 rounded-2xl border border-brand-sand/80 shadow-xs space-y-4">
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
