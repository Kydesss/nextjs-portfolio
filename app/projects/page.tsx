"use client";
import Link from "next/link";
import { fetchProjectData } from "../api/wix-api";
import Project from "../models/Project";
import { useEffect, useState } from "react";
import Image from "next/image";
import { getWixImageUrl } from "@/app/utils/wixImageUrl";
import { ProjectItemSkeleton } from "../components/Skeleton";
import RichContentViewer from "../components/RichContentViewer";

const PROJECTS_PREVIEW_COUNT = 3;

export default function ProjectsPage() {
    const [data, setData] = useState<Project[]>([]);
    const [selectedCategory, setSelectedCategory] = useState<string>("All");
    const [showMore, setShowMore] = useState(false);
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const result = await fetchProjectData();
                const projects = (Array.isArray(result) ? result : [])
                    .map((item) => new Project(item))
                    .sort((a, b) => {
                        const dateA = a.date ? new Date(a.date).getTime() : 0;
                        const dateB = b.date ? new Date(b.date).getTime() : 0;
                        return dateB - dateA;
                    });
                setData(projects);
            } catch (error) {
                console.error("Error fetching project data:", error);
                setData([]);
            } finally {
                setIsLoading(false);
            }
        };
        fetchData();
    }, []);

    const categories: string[] = [
        "All",
        ...new Set(
            data
                .map((project) => project.category)
                .filter((c): c is string => c !== undefined),
        ),
    ];

    const filteredProjects =
        selectedCategory === "All"
            ? data
            : data.filter((project) => project.category === selectedCategory);

    const projectsToShow = showMore
        ? filteredProjects
        : filteredProjects.slice(0, PROJECTS_PREVIEW_COUNT);

    return (
        <section id="projects" className="space-y-6 mb-12">
            <h2 className="text-3xl font-bold mb-6 text-gray-900 dark:text-gray-100">
                Projects
            </h2>

            {/* Category filter toggles */}
            <div className="flex flex-wrap gap-3 mb-8">
                {categories.map((category) => (
                    <button
                        key={category}
                        onClick={() => {
                            setSelectedCategory(category);
                            setShowMore(false);
                        }}
                        className={`px-4 py-2 rounded-lg font-medium transition-colors duration-300 ${
                            selectedCategory === category
                                ? "bg-gray-800 dark:bg-stone-700/30 text-white dark:text-gray-100 shadow-md"
                                : "text-gray-600 dark:text-gray-400 dark:hover:text-gray-100 hover:text-gray-900"
                        }`}
                    >
                        {category}{" "}
                        {category !== "All" &&
                            `(${data.filter((p) => p.category === category).length})`}
                    </button>
                ))}
            </div>

            {/* Project list */}
            <div className="space-y-6">
                {isLoading ? (
                    <div
                        className="space-y-6 animate-pulse motion-reduce:animate-none"
                        aria-busy="true"
                        aria-live="polite"
                    >
                        {Array.from({ length: PROJECTS_PREVIEW_COUNT }).map(
                            (_, i) => (
                                <ProjectItemSkeleton key={i} />
                            ),
                        )}
                        <span className="sr-only">Loading projects…</span>
                    </div>
                ) : (
                    projectsToShow.map((item) => {
                        const hasMedia =
                            item.projectImage || item.youtubeVideoEmbed;
                        return (
                            <div
                                key={item._id}
                                className="relative pl-8 before:content-[''] before:absolute before:left-0 before:top-0 before:bottom-0 before:w-0.5 before:bg-gray-300 dark:before:bg-gray-600"
                            >
                                <div className="flex flex-col md:flex-row gap-6">
                                    {hasMedia && (
                                        <div className="md:w-1/3 flex items-center justify-center">
                                            {item.projectImage ? (
                                                <div className="w-full max-w-xs bg-gray-100 dark:bg-stone-800/50 rounded-lg overflow-hidden flex items-center justify-center shadow-md border border-gray-200 dark:border-gray-700">
                                                    <Image
                                                        src={getWixImageUrl(
                                                            item.projectImage,
                                                        )}
                                                        alt={
                                                            item.projectName ??
                                                            "Project image"
                                                        }
                                                        width={
                                                            item.imageWidth ??
                                                            400
                                                        }
                                                        height={
                                                            item.imageHeight ??
                                                            300
                                                        }
                                                        style={{
                                                            maxWidth: "100%",
                                                            height: "auto",
                                                            objectFit:
                                                                "contain",
                                                        }}
                                                    />
                                                </div>
                                            ) : (
                                                <div className="w-full aspect-video bg-gray-800 dark:bg-gray-900 rounded-lg overflow-hidden shadow-lg border border-gray-300 dark:border-gray-700">
                                                    <iframe
                                                        width="100%"
                                                        height="100%"
                                                        src={
                                                            item.youtubeVideoEmbed
                                                        }
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

                                    <div
                                        className={
                                            hasMedia ? "md:w-2/3" : "md:w-full"
                                        }
                                    >
                                        <h3 className="text-2xl font-semibold mb-3 text-gray-900 dark:text-gray-100">
                                            {item.projectName}
                                        </h3>
                                        <div className="mb-4">
                                            <span className="inline-block bg-gray-800 text-white dark:bg-stone-700/50 dark:text-gray-200 px-3 py-1 rounded-full text-sm font-medium">
                                                {item.category}
                                            </span>
                                        </div>
                                        <div className="ulist dark:text-white mb-4">
                                            {item.bulletPoints && (
                                                <RichContentViewer
                                                    content={item.bulletPoints}
                                                />
                                            )}
                                        </div>
                                        {item.tags && (
                                            <div className="flex flex-wrap mb-6">
                                                {item.tags?.map(
                                                    (
                                                        tag: string,
                                                        index: number,
                                                    ) => (
                                                        <span
                                                            key={index}
                                                            className="inline-block dark:bg-green-500/30 bg-green-400/90 px-3 py-1.5 text-xs font-medium dark:text-green-500 mr-2 mb-2 rounded-full"
                                                        >
                                                            {tag}
                                                        </span>
                                                    ),
                                                )}
                                            </div>
                                        )}
                                        <Link href={`/projects/${item.slug}`}>
                                            <button className="bg-emerald-600 hover:bg-emerald-700 dark:bg-emerald-600 dark:hover:bg-emerald-500 border border-emerald-700 dark:border-emerald-500/50 text-white px-6 py-3 rounded-lg font-medium transition-colors shadow-md hover:shadow-lg">
                                                See Project
                                            </button>
                                        </Link>
                                    </div>
                                </div>
                            </div>
                        );
                    })
                )}
            </div>

            {filteredProjects.length > PROJECTS_PREVIEW_COUNT && (
                <div className="text-center mt-8">
                    <button
                        onClick={() => setShowMore(!showMore)}
                        className="bg-emerald-600 hover:bg-emerald-700 dark:bg-emerald-600 dark:hover:bg-emerald-500 text-white px-6 py-3 rounded-lg font-medium transition-colors shadow-md hover:shadow-lg"
                    >
                        {showMore
                            ? "Show Less"
                            : `See All ${filteredProjects.length} Projects`}
                    </button>
                </div>
            )}
        </section>
    );
}
