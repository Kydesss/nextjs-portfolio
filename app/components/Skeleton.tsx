import React from "react";

function Shimmer({ className = "" }: { className?: string }) {
    return (
        <div
            className={`bg-gray-200 dark:bg-stone-800/70 rounded ${className}`}
        />
    );
}

export function TimelineItemSkeleton() {
    return (
        <div className="relative pl-8 before:content-[''] before:absolute before:left-0 before:top-0 before:bottom-0 before:w-0.5 before:bg-gray-300 dark:before:bg-gray-600">
            <div className="flex items-start mb-2">
                <Shimmer className="rounded-full mr-4 w-24 h-24 shrink-0" />
                <div className="grow space-y-3 pt-2">
                    <Shimmer className="h-6 w-2/3" />
                    <Shimmer className="h-5 w-1/2" />
                    <Shimmer className="h-4 w-1/3" />
                </div>
            </div>
            <div className="space-y-2 mb-2">
                <Shimmer className="h-4 w-full" />
                <Shimmer className="h-4 w-11/12" />
                <Shimmer className="h-4 w-3/4" />
            </div>
            <div className="flex flex-wrap gap-2 mt-3">
                <Shimmer className="h-6 w-16 rounded-full" />
                <Shimmer className="h-6 w-20 rounded-full" />
                <Shimmer className="h-6 w-14 rounded-full" />
            </div>
        </div>
    );
}

export function ProjectItemSkeleton() {
    return (
        <div className="relative pl-8 before:content-[''] before:absolute before:left-0 before:top-0 before:bottom-0 before:w-0.5 before:bg-gray-300 dark:before:bg-gray-600">
            <div className="flex flex-col md:flex-row gap-6">
                <div className="md:w-1/3 flex items-center justify-center">
                    <Shimmer className="w-full max-w-xs aspect-video rounded-lg" />
                </div>
                <div className="md:w-2/3 space-y-4">
                    <Shimmer className="h-7 w-2/3" />
                    <Shimmer className="h-6 w-24 rounded-full" />
                    <div className="space-y-2">
                        <Shimmer className="h-4 w-full" />
                        <Shimmer className="h-4 w-11/12" />
                        <Shimmer className="h-4 w-4/5" />
                    </div>
                    <div className="flex flex-wrap gap-2">
                        <Shimmer className="h-6 w-16 rounded-full" />
                        <Shimmer className="h-6 w-20 rounded-full" />
                        <Shimmer className="h-6 w-14 rounded-full" />
                    </div>
                    <Shimmer className="h-11 w-32 rounded-lg" />
                </div>
            </div>
        </div>
    );
}

export function SectionSkeleton({
    variant,
    title,
    count = 3,
}: {
    variant: "timeline" | "project";
    title: string;
    count?: number;
}) {
    const Item =
        variant === "timeline" ? TimelineItemSkeleton : ProjectItemSkeleton;
    return (
        <section className="mb-12 space-y-6" aria-busy="true" aria-live="polite">
            <h2 className="text-3xl font-bold mb-6 dark:text-gray-100">
                {title}
            </h2>
            <div className="space-y-6 animate-pulse motion-reduce:animate-none">
                {Array.from({ length: count }).map((_, i) => (
                    <Item key={i} />
                ))}
            </div>
            <span className="sr-only">Loading {title}…</span>
        </section>
    );
}
