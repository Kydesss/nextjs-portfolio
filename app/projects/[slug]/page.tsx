import { fetchProjectBySlug, fetchProjectData } from "../../api/wix-api";
import { notFound } from "next/navigation";
import Link from "next/link";
import Navbar from "@/app/components/Navbar";
import RichContentViewer from "@/app/components/RichContentViewer";
import FeaturedImage from "@/app/components/FeaturedImage";
import { getWixImageUrl } from "@/app/utils/wixImageUrl";
import BackToTop from "@/app/components/BackToTop";

interface PageProps {
    params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
    try {
        const items = await fetchProjectData();
        return items.map((project: any) => ({ slug: project.slug }));
    } catch {
        return [];
    }
}

export default async function ProjectPage({ params }: PageProps) {
    const { slug } = await params;
    const project = await fetchProjectBySlug(slug);

    if (!project) notFound();

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
