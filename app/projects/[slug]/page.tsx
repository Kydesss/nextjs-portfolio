import { fetchProjectBySlug, fetchProjectData } from "../../api/wix-api";
import { notFound } from "next/navigation";
import Link from "next/link";
import Navbar from "@/app/components/Navbar";
import RichContentViewer from "@/app/components/RichContentViewer";
import Image from "next/image";
import { getWixImageUrl } from "@/app/utils/wixImageUrl";

interface PageProps {
    params: Promise<{ slug: string }>;
}

/* 1️⃣ Generate all static project URLs */
export async function generateStaticParams() {
    const data = await fetchProjectData();
    console.log(
        "Generated slugs:",
        data.items.map((p: any) => p.slug),
    );
    return data.items.map((project: any) => ({
        slug: project.slug,
    }));
}

/* 2️⃣ Render single project */
export default async function ProjectPage({ params }: PageProps) {
    const { slug } = await params;
    const project = await fetchProjectBySlug(slug);

    if (!project) {
        notFound();
    }
    return (
        <>
            <Navbar></Navbar>
            <div className="flex h-auto container mx-auto justify-center">
                <div className="flex flex-col my-5 px-2">
                    <h1 className="dark:text-white text-4xl font-bold mb-6">
                        {project.projectName}
                    </h1>

                    {project.projectImage && (
                        <div className="mb-6">
                            <Image
                                src={getWixImageUrl(project.projectImage)}
                                alt=""
                                width={1920}
                                height={1080}
                                style={{
                                    maxWidth: "100%",
                                    height: "auto",
                                    boxShadow: "0 4px 12px rgba(0, 0, 0, 0.3)",
                                    borderRadius: "8px",
                                    border: "2px solid #333",
                                }}
                            ></Image>{" "}
                        </div>
                        // add alt text field in CMS
                    )}

                    {project.youtubeVideoEmbed && (
                        <div className="aspect-video w-full my-6 flex items-center justify-center">
                            <iframe
                                width="1349"
                                height="759"
                                src={project.youtubeVideoEmbed}
                                title={project.projectName}
                                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                                referrerPolicy="strict-origin-when-cross-origin"
                                allowFullScreen
                                style={{
                                    boxShadow: "0 4px 12px rgba(0, 0, 0, 0.3)",
                                    borderRadius: "8px",
                                    border: "2px solid #333",
                                }}
                            ></iframe>
                        </div>
                    )}

                    <div className="ulist dark:text-white">
                        {project.bulletPoints && (
                            <RichContentViewer
                                content={project.bulletPoints}
                            ></RichContentViewer>
                        )}
                    </div>

                    <div className="flex flex-wrap gap-4 my-8">
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
                                className="inline-flex items-center gap-2 px-6 py-3 bg-blue-600 dark:bg-blue-700 text-white rounded-lg font-semibold hover:bg-blue-700 dark:hover:bg-blue-600 transition-colors duration-200 shadow-md hover:shadow-lg"
                            >
                                <span>🚀</span>
                                Live Demo
                            </a>
                        )}
                    </div>
                </div>
            </div>
        </>
    );
}
