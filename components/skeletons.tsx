'use client';

export function SkeletonCard() {
  return (
    <div className="p-6 space-y-4 animate-pulse">
      <div className="h-6 bg-secondary rounded w-3/4" />
      <div className="space-y-2">
        <div className="h-4 bg-secondary rounded w-full" />
        <div className="h-4 bg-secondary rounded w-5/6" />
      </div>
      <div className="flex gap-2">
        <div className="h-8 bg-secondary rounded-md w-20" />
        <div className="h-8 bg-secondary rounded-md w-20" />
      </div>
    </div>
  );
}

export function SkeletonProgressBar() {
  return (
    <div className="space-y-2 animate-pulse">
      <div className="flex justify-between">
        <div className="h-4 bg-secondary rounded w-1/3" />
        <div className="h-4 bg-secondary rounded w-10" />
      </div>
      <div className="h-2 bg-secondary rounded-full w-full" />
    </div>
  );
}

export function SkeletonText({ lines = 3 }: { lines?: number }) {
  return (
    <div className="space-y-2 animate-pulse">
      {Array.from({ length: lines }).map((_, i) => (
        <div
          key={i}
          className="h-4 bg-secondary rounded w-full"
          style={{
            width: i === lines - 1 ? '80%' : '100%',
          }}
        />
      ))}
    </div>
  );
}

export function SkeletonGrid({ count = 4 }: { count?: number }) {
  return (
    <div className="grid md:grid-cols-2 gap-6">
      {Array.from({ length: count }).map((_, i) => (
        <SkeletonCard key={i} />
      ))}
    </div>
  );
}
