"use client";

import { useEffect, useState } from "react";
import { useParams } from "next/navigation";
import { fetchProjectBySlug } from "../../api/wix-api";
import Navbar from "@/app/components/Navbar";
import RichContentViewer from "@/app/components/RichContentViewer";
import FeaturedImage from "@/app/components/FeaturedImage";
import { getWixImageUrl } from "@/app/utils/wixImageUrl";
import BackToTop from "@/app/components/BackToTop";
import Project from "@/app/models/Project";

export default function ProjectPage() {
    const { slug } = useParams<{ slug: string }>();
    const [project, setProject] = useState<Project | null>(null);
    const [isLoading, setIsLoading] = useState(true);
    const [notFound, setNotFound] = useState(false);

    useEffect(() => {
        if (!slug) return;
        const fetchData = async () => {
            try {
                const result = await fetchProjectBySlug(slug);
                if (!result) {
                    setNotFound(true);
                } else {
                    setProject(new Project(result));
                }
            } catch (error) {
                console.error("Error fetching project:", error);
                setNotFound(true);
            } finally {
                setIsLoading(false);
            }
        };
        fetchData();
    }, [slug]);

    if (isLoading) {
        return (
            <>
                <Navbar />
                <div className="flex h-auto container mx-auto justify-center">
                    <div className="flex flex-col my-5 px-2 w-full max-w-3xl animate-pulse motion-reduce:animate-none">
                        <div className="h-10 bg-gray-200 dark:bg-stone-800/70 rounded w-2/3 mb-6" />
                        <div className="w-full aspect-video bg-gray-200 dark:bg-stone-800/70 rounded-lg mb-6" />
                        <div className="space-y-3">
                            <div className="h-4 bg-gray-200 dark:bg-stone-800/70 rounded w-full" />
                            <div className="h-4 bg-gray-200 dark:bg-stone-800/70 rounded w-11/12" />
                            <div className="h-4 bg-gray-200 dark:bg-stone-800/70 rounded w-4/5" />
                        </div>
                    </div>
                </div>
            </>
        );
    }

    if (notFound || !project) {
        return (
            <>
                <Navbar />
                <div className="flex h-auto container mx-auto justify-center">
                    <div className="flex flex-col my-5 px-2 text-center">
                        <h1 className="dark:text-white text-4xl font-bold mb-4">
                            Project not found
                        </h1>
                        <p className="dark:text-gray-400 text-gray-600">
                            This project doesn&apos;t exist or couldn&apos;t be loaded.
                        </p>
                    </div>
                </div>
            </>
        );
    }

    return (
        <>
            <Navbar />
            <div className="flex h-auto container mx-auto justify-center">
                <div className="flex flex-col my-5 px-2">
                    <h1 className="dark:text-white text-4xl font-bold mb-6">
                        {project.projectName}
                    </h1>

                    {project.projectImage && (
                        <FeaturedImage
                            src={getWixImageUrl(project.projectImage)}
                            alt={
                                project.projectName ?? "Project featured image"
                            }
                            width={project.imageWidth}
                            height={project.imageHeight}
                        />
                    )}

                    {project.youtubeVideoEmbed && (
                        <div className="aspect-video w-full my-6">
                            <iframe
                                width="100%"
                                height="100%"
                                src={project.youtubeVideoEmbed}
                                title={project.projectName}
                                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                                referrerPolicy="strict-origin-when-cross-origin"
                                allowFullScreen
                                className="rounded-lg border-2 border-gray-700"
                                style={{
                                    boxShadow: "0 4px 12px rgba(0,0,0,0.3)",
                                }}
                            />
                        </div>
                    )}

                    <div className="ulist dark:text-white mb-2">
                        {project.description && (
                            <RichContentViewer content={project.description} />
                        )}
                    </div>
                    {project.tags && (
                        <div className="flex flex-wrap">
                            {project.tags?.map((tag: string, index: number) => (
                                <span
                                    key={index}
                                    className="inline-block dark:bg-green-500/30 bg-green-400/90 px-3 py-1.5 text-xs font-medium dark:text-green-500 mr-2 mb-2 rounded-full"
                                >
                                    {tag}
                                </span>
                            ))}
                        </div>
                    )}

                    <div className="flex flex-wrap gap-4 my-6">
                        {project.githubRepositoryLink && (
                            <a
                                href={project.githubRepositoryLink}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="inline-flex items-center gap-2 px-6 py-3 bg-gray-900 dark:bg-gray-800 text-white rounded-lg font-semibold hover:bg-gray-800 dark:hover:bg-gray-700 transition-colors duration-200 shadow-md hover:shadow-lg"
                            >
                                <span>🔗</span>
                                View GitHub Repository
                            </a>
                        )}

                        {project.liveDemo && (
                            <a
                                href={project.liveDemo}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="inline-flex items-center gap-2 px-6 py-3 bg-emerald-600 hover:bg-emerald-700 dark:bg-emerald-600 dark:hover:bg-emerald-500 text-white rounded-lg font-semibold transition-colors duration-200 shadow-md hover:shadow-lg"
                            >
                                <span>🚀</span>
                                Live Demo
                            </a>
                        )}
                    </div>
                </div>
            </div>
            <BackToTop />
        </>
    );
}
