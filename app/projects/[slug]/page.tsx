import { notFound } from "next/navigation";
import { fetchProjectBySlug } from "../../api/wix-api";
import Navbar from "@/app/components/Navbar";
import RichContentViewer from "@/app/components/RichContentViewer";
import FeaturedImage from "@/app/components/FeaturedImage";
import { getWixImageUrl } from "@/app/utils/wixImageUrl";
import BackToTop from "@/app/components/BackToTop";
import Project from "@/app/models/Project";
import TagChip from "@/app/components/TagChip";

export const revalidate = 3600;

export default async function ProjectPage({
    params,
}: {
    params: Promise<{ slug: string }>;
}) {
    const { slug } = await params;

    let raw: Record<string, unknown> | null = null;
    try {
        raw = (await fetchProjectBySlug(slug)) as Record<string, unknown> | null;
    } catch (error) {
        console.error("Error fetching project:", error);
    }

    if (!raw) {
        notFound();
    }

    const project = new Project(raw);

    return (
        <>
            <Navbar />
            <div className="flex h-auto container mx-auto justify-center">
                <div className="flex flex-col my-5 px-2">
                    <h1
                        style={{ color: "var(--color-ink)" }}
                        className="text-4xl font-bold mb-6 tracking-tight"
                    >
                        {project.projectName}
                    </h1>

                    {project.projectImage && (
                        <FeaturedImage
                            src={getWixImageUrl(project.projectImage)}
                            alt={project.projectName ?? "Project featured image"}
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
                                style={{ border: "1px solid var(--color-rail)" }}
                                className="rounded-lg w-full h-full"
                            />
                        </div>
                    )}

                    <div className="ulist mb-2">
                        {project.description && (
                            <RichContentViewer content={project.description} />
                        )}
                    </div>
                    {project.tags && (
                        <div className="flex flex-wrap">
                            {project.tags.map((tag: string, index: number) => (
                                <TagChip key={index}>{tag}</TagChip>
                            ))}
                        </div>
                    )}

                    <div className="flex flex-wrap gap-4 my-6">
                        {project.githubRepositoryLink && (
                            <a
                                href={project.githubRepositoryLink}
                                target="_blank"
                                rel="noopener noreferrer"
                                style={{
                                    background: "var(--color-ink)",
                                    color: "var(--color-paper)",
                                }}
                                className="inline-flex items-center gap-2 px-6 py-3 rounded-lg font-semibold transition-colors duration-200 hover:[background:var(--color-graphite)]"
                            >
                                <span aria-hidden="true">🔗</span>
                                View GitHub Repository
                            </a>
                        )}

                        {project.liveDemo && (
                            <a
                                href={project.liveDemo}
                                target="_blank"
                                rel="noopener noreferrer"
                                style={{
                                    background: "var(--color-accent)",
                                    color: "var(--color-paper)",
                                }}
                                className="inline-flex items-center gap-2 px-6 py-3 rounded-lg font-semibold transition-colors duration-200 hover:[background:var(--color-accent-deep)]"
                            >
                                <span aria-hidden="true">🚀</span>
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
