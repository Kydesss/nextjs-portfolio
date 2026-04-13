import { fetchProjectBySlug, fetchProjectData } from "../../api/wix-api";
import { notFound } from "next/navigation";
import Link from "next/link";
import Navbar from "@/app/components/Navbar";
import RichContentViewer from "@/app/components/RichContentViewer";
import Image from "next/image";

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
                        <Image src={project.projectImage} alt=""></Image> // add alt text field in CMS
                    )}

                    {project.githubRepositoryLink && (
                        <p>
                            <a href={project.githubRepositoryLink}>
                                View GitHub Repository
                            </a>
                        </p>
                    )}

                    {project.liveDemo && (
                        <p>
                            <a href={project.liveDemo}>Live Demo</a>
                        </p>
                    )}
                    <div className="ulist dark:text-white">
                        {project.bulletPoints && (
                            <RichContentViewer
                                content={project.bulletPoints}
                            ></RichContentViewer>
                        )}
                    </div>
                </div>
            </div>
        </>
    );
}
