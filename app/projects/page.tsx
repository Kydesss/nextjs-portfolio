"use client";
import Link from "next/link";
import { fetchProjectData } from "../api/wix-api";
import Project from "../models/Project";
import { useEffect, useState } from "react";
import Image from "next/image";
import { getWixImageUrl } from "@/app/utils/wixImageUrl";

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
    const categories = [
        "All",
        ...new Set(data.map((project) => project.category)),
    ];
    const filteredProjects =
        selectedCategory === "All"
            ? data
            : data.filter((project) => project.category === selectedCategory);

    const filterToggles = (
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
                            : " text-gray-600 dark:text-gray-400 dark:hover:text-gray-100 hover:text-gray-900"
                    }`}
                >
                    {category}{" "}
                    {category !== "All" &&
                        `(${data.filter((p) => p.category === category).length})`}
                </button>
            ))}
        </div>
    );

    const projectsToShow = showMore
        ? filteredProjects
        : filteredProjects.slice(0, 3);

    const projectsList = projectsToShow.map((item) => (
        <div
            key={item._id}
            className="relative pl-8 before:content-[''] before:absolute before:left-0 before:top-0 before:bottom-0 before:w-0.5 before:bg-gray-300 dark:before:bg-gray-600"
        >
            <div className="flex flex-col md:flex-row gap-6">
                {item.projectImage && (
                    <div className="md:w-1/3 flex items-center justify-center">
                        <div className="w-full max-w-xs aspect-4/3 bg-gray-100 dark:bg-stone-800/50 rounded-lg overflow-hidden flex items-center justify-center relative shadow-md border border-gray-200 dark:border-gray-700">
                            <div className="aspect-4/3 group">
                                <Image
                                    src={getWixImageUrl(item.projectImage)}
                                    alt=""
                                    width={item.imageWidth}
                                    height={item.imageHeight}
                                    style={{
                                        maxWidth: "100%",
                                        height: "100%",
                                        objectFit: "contain",
                                    }}
                                ></Image>
                            </div>
                        </div>
                    </div>
                )}

                {item.youtubeVideoEmbed && (
                    <div className="md:w-1/3 flex items-center justify-center">
                        <div className="relative group cursor-pointer w-full">
                            <div className="aspect-video bg-gray-800 dark:bg-gray-900 rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300 border border-gray-300 dark:border-gray-700">
                                <iframe
                                    width="100%"
                                    height="100%"
                                    src={item.youtubeVideoEmbed}
                                    title={item.projectName}
                                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                                    referrerPolicy="strict-origin-when-cross-origin"
                                    allowFullScreen
                                    className="rounded-lg"
                                ></iframe>
                            </div>
                        </div>
                    </div>
                )}

                <div className="md:w-2/3">
                    <h3 className="text-2xl font-semibold mb-3 text-gray-900 dark:text-gray-100">
                        {item.projectName}
                    </h3>
                    <div className="mb-4">
                        <span className="inline-block bg-blue-600 dark:bg-blue-700 text-white px-3 py-1 rounded-full text-sm font-medium">
                            {item.category}
                        </span>
                    </div>
                    <div className="ulist mb-4">
                        <span>
                            <p className="text-gray-700 dark:text-gray-300">
                                {item.description}
                            </p>
                        </span>
                    </div>
                    <div className="flex flex-wrap mb-6">
                        {item.tags &&
                            item.tags.map((tag: string, index: number) => (
                                <span
                                    key={index}
                                    className="inline-block bg-green-100 dark:bg-green-900/50 text-green-800 dark:text-green-200 px-3 py-1.5 text-xs font-medium mr-2 mb-2 rounded-full border border-green-300 dark:border-green-700"
                                >
                                    {tag}
                                </span>
                            ))}
                    </div>
                    <Link key={item._id} href={`/projects/${item.slug}`}>
                        <button className="bg-gray-800 dark:bg-purple-600 hover:bg-gray-900 dark:hover:bg-purple-700 border border-gray-700 dark:border-purple-700 text-white px-6 py-3 rounded-lg font-medium transition-colors">
                            See Project
                        </button>
                    </Link>
                </div>
            </div>
        </div>
    ));

    return (
        <>
            <section id="projects" className="space-y-6 mb-12">
                <h2 className="text-3xl font-bold mb-6 text-gray-900 dark:text-gray-100">
                    Projects
                </h2>
                {filterToggles}
                <div className="space-y-6">{projectsList}</div>
                {filteredProjects.length > 3 && (
                    <div className="text-center mt-8">
                        <button
                            onClick={() => setShowMore(!showMore)}
                            className="bg-purple-600 hover:bg-purple-700 dark:bg-purple-700 dark:hover:bg-purple-800 text-white px-6 py-3 rounded-lg font-medium transition-colors shadow-lg"
                        >
                            {showMore
                                ? "Show Less"
                                : `See All ${filteredProjects.length} Projects`}
                        </button>
                    </div>
                )}
            </section>
        </>
    );
}
