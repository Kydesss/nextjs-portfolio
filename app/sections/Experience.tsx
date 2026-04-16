"use client";
import { useEffect, useState } from "react";
import RichContentViewer from "../components/RichContentViewer";
import { fetchExperienceData } from "../api/wix-api";
import Experience from "../models/Experience";
import { getWixImageUrl } from "../utils/wixImageUrl";

export default function ExperienceList() {
    const [data, setData] = useState<Experience[] | null>(null);
    const [isLoading, setIsLoading] = useState(true);
    const [showMore, setShowMore] = useState(false);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const result = await fetchExperienceData();
                const experiences = (Array.isArray(result) ? result : []).map(
                    (item) => new Experience(item),
                );
                setData(experiences);
            } catch (error) {
                console.error("Error fetching experience data:", error);
                setData([]);
            } finally {
                setIsLoading(false);
            }
        };
        fetchData();
    }, []);

    if (isLoading) return <div>Loading...</div>;
    if (!data || data.length === 0) {
        return <div>No experience data found</div>;
    }

    const experiencePreview = showMore ? data : data.slice(0, 3);

    return (
        <section id="experience" className="mb-12 space-y-6">
                <h2 className="text-3xl font-bold mb-6 dark:text-gray-100">
                    Experience
                </h2>
                {experiencePreview.map((item: Experience) => (
                    <div
                        key={item._id}
                        className="relative pl-8 before:content-[''] before:absolute before:left-0 before:top-0 before:bottom-0 before:w-0.5 before:bg-gray-600"
                    >
                        <div className="flex items-start mb-2">
                            <div
                                className="bg-white rounded-full p-2 mr-4 w-24 h-24 shrink-0 flex items-center justify-center overflow-hidden border-gray-800"
                                style={{
                                    backgroundImage: `url(${getWixImageUrl(item.companyLogo ?? "")})`,
                                    backgroundSize: "85%",
                                    backgroundPosition: "center",
                                    backgroundRepeat: "no-repeat",
                                }}
                            ></div>
                            <div className="grow">
                                <h3 className="text-2xl font-semibold dark:text-gray-100">
                                    {item.jobTitle}
                                </h3>
                                <p className="text-lg dark:text-gray-300">
                                    {item.companyName + ", " + item.location}
                                </p>
                                <p className="dark:text-gray-400">
                                    {item.dateDuration()}
                                </p>
                            </div>
                        </div>
                        <div className="space-y-2 mb-2 ulist dark:text-white">
                            {item.details && (
                                <RichContentViewer
                                    content={item.details}
                                ></RichContentViewer>
                            )}
                        </div>
                        <div className="flex flex-wrap">
                            {item.tags &&
                                item.tags.map((tag: string, index: number) => (
                                    <span
                                        key={index}
                                        className="inline-block dark:bg-green-500/30 bg-green-400/90 px-3 py-1.5 text-xs font-medium dark:text-green-500 mr-2 mb-2 rounded-full"
                                    >
                                        {tag}
                                    </span>
                                ))}
                        </div>
                    </div>
                ))}
                <div>
                    {data.length > 3 && (
                        <div className="flex justify-center mt-8">
                            <button
                                className="px-6 py-2 bg-purple-600 hover:bg-purple-700 text-white rounded transition-colors duration-200"
                                onClick={() => setShowMore((s) => !s)}
                            >
                                {showMore
                                    ? "Show less"
                                    : `See all ${data.length} experiences`}
                            </button>
                        </div>
                    )}
                </div>
        </section>
    );
}
