import { ProductCardSkeleton, Skeleton } from "@/components/ui/Skeleton";

export default function ProductsLoading() {
  return (
    <main className="flex-1 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 md:py-16 flex flex-col gap-8 sm:gap-10">
      <div className="max-w-3xl flex flex-col gap-3">
        <Skeleton className="w-48 h-6 rounded-full" />
        <Skeleton className="w-72 sm:w-96 h-8 sm:h-10 rounded-xl" />
        <Skeleton className="w-full max-w-xl h-5 rounded-md" />
      </div>

      <div className="bg-white p-4 sm:p-6 rounded-xl border border-brand-sand/80 shadow-xs flex flex-col md:flex-row gap-4 justify-between items-stretch md:items-center">
        <Skeleton className="h-10 flex-1 rounded-xl" />
        <div className="flex gap-2">
          <Skeleton className="w-20 h-8 rounded-lg" />
          <Skeleton className="w-20 h-8 rounded-lg" />
          <Skeleton className="w-20 h-8 rounded-lg" />
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
        {Array.from({ length: 6 }).map((_, i) => (
          <ProductCardSkeleton key={i} />
        ))}
      </div>
    </main>
  );
}
