"use client";
import Link from "next/link";
import Image from "next/image";
import { useState, useMemo } from "react";
import Project from "../models/Project";
import { getWixImageUrl } from "../utils/wixImageUrl";
import RichContentViewer from "../components/RichContentViewer";
import TimelineItem from "../components/TimelineItem";
import TagChip from "../components/TagChip";
import PrimaryButton from "../components/PrimaryButton";

const PREVIEW_COUNT = 3;

export default function ProjectsClient({
    items,
}: {
    items: Record<string, unknown>[];
}) {
    const [selectedCategory, setSelectedCategory] = useState<string>("All");
    const [showMore, setShowMore] = useState(false);

    const data = useMemo(
        () =>
            items
                .map((item) => new Project(item))
                .sort((a, b) => {
                    const dateA = a.date ? new Date(a.date).getTime() : 0;
                    const dateB = b.date ? new Date(b.date).getTime() : 0;
                    return dateB - dateA;
                }),
        [items],
    );

    const categories: string[] = useMemo(
        () => [
            "All",
            ...new Set(
                data
                    .map((p) => p.category)
                    .filter((c): c is string => c !== undefined),
            ),
        ],
        [data],
    );

    const filtered =
        selectedCategory === "All"
            ? data
            : data.filter((p) => p.category === selectedCategory);

    const toShow = showMore ? filtered : filtered.slice(0, PREVIEW_COUNT);

    return (
        <>
            <div className="flex flex-wrap gap-3 mb-8">
                {categories.map((category) => (
                    <button
                        key={category}
                        onClick={() => {
                            setSelectedCategory(category);
                            setShowMore(false);
                        }}
                        style={
                            selectedCategory === category
                                ? {
                                      background: "var(--color-ink)",
                                      color: "var(--color-paper)",
                                  }
                                : {
                                      background: "transparent",
                                      color: "var(--color-graphite)",
                                  }
                        }
                        className="px-4 py-2 rounded-lg font-medium transition-colors duration-200 hover:[color:var(--color-ink)]"
                    >
                        {category}{" "}
                        {category !== "All" &&
                            `(${data.filter((p) => p.category === category).length})`}
                    </button>
                ))}
            </div>

            <div className="space-y-6">
                {toShow.map((item) => {
                    const hasMedia = item.projectImage || item.youtubeVideoEmbed;
                    return (
                        <TimelineItem key={item._id}>
                            <div className="flex flex-col md:flex-row gap-6">
                                {hasMedia && (
                                    <div className="md:w-1/3 flex items-center justify-center">
                                        {item.projectImage ? (
                                            <div
                                                style={{
                                                    background: "var(--color-bone)",
                                                    border: "1px solid var(--color-rail)",
                                                }}
                                                className="w-full max-w-xs rounded-lg overflow-hidden flex items-center justify-center"
                                            >
                                                <Image
                                                    src={getWixImageUrl(item.projectImage)}
                                                    alt={item.projectName ?? "Project image"}
                                                    width={item.imageWidth ?? 400}
                                                    height={item.imageHeight ?? 300}
                                                    style={{
                                                        maxWidth: "100%",
                                                        height: "auto",
                                                        objectFit: "contain",
                                                    }}
                                                />
                                            </div>
                                        ) : (
                                            <div
                                                style={{
                                                    background: "var(--color-ink)",
                                                    border: "1px solid var(--color-rail)",
                                                }}
                                                className="w-full aspect-video rounded-lg overflow-hidden"
                                            >
                                                <iframe
                                                    width="100%"
                                                    height="100%"
                                                    src={item.youtubeVideoEmbed}
                                                    title={item.projectName}
                                                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                                                    referrerPolicy="strict-origin-when-cross-origin"
                                                    allowFullScreen
                                                    className="rounded-lg"
                                                />
                                            </div>
                                        )}
                                    </div>
                                )}

                                <div className={hasMedia ? "md:w-2/3" : "md:w-full"}>
                                    <h3
                                        style={{ color: "var(--color-ink)" }}
                                        className="text-2xl font-semibold mb-3"
                                    >
                                        {item.projectName}
                                    </h3>
                                    <div className="mb-4">
                                        <span
                                            style={{
                                                background: "var(--color-bone)",
                                                color: "var(--color-graphite)",
                                            }}
                                            className="inline-block px-3 py-1 rounded-full text-sm font-medium"
                                        >
                                            {item.category}
                                        </span>
                                    </div>
                                    <div className="ulist mb-4">
                                        {item.bulletPoints && (
                                            <RichContentViewer content={item.bulletPoints} />
                                        )}
                                    </div>
                                    {item.tags && (
                                        <div className="flex flex-wrap mb-6">
                                            {item.tags.map((tag: string, i: number) => (
                                                <TagChip key={i}>{tag}</TagChip>
                                            ))}
                                        </div>
                                    )}
                                    <Link href={`/projects/${item.slug}`}>
                                        <PrimaryButton>See Project</PrimaryButton>
                                    </Link>
                                </div>
                            </div>
                        </TimelineItem>
                    );
                })}
            </div>

            {filtered.length > PREVIEW_COUNT && (
                <div className="text-center mt-8">
                    <PrimaryButton onClick={() => setShowMore(!showMore)}>
                        {showMore
                            ? "Show Less"
                            : `See All ${filtered.length} Projects`}
                    </PrimaryButton>
                </div>
            )}
        </>
    );
}
