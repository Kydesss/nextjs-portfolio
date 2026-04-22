"use client";
import { useEffect, useState } from "react";
import RichContentViewer from "../components/RichContentViewer";
import { fetchEducationData } from "../api/wix-api";
import Education from "../models/Education";
import { getWixImageUrl } from "../utils/wixImageUrl";
import { SectionSkeleton } from "../components/Skeleton";

export default function EducationList() {
    const [data, setData] = useState<Education[] | null>(null);
    const [isLoading, setIsLoading] = useState(true);
    useEffect(() => {
        const fetchData = async () => {
            try {
                const result = await fetchEducationData();
                const education = (Array.isArray(result) ? result : []).map(
                    (item) => new Education(item),
                );
                setData(education);
            } catch (error) {
                console.error("Error fetching education data:", error);
                setData([]);
            } finally {
                setIsLoading(false);
            }
        };
        fetchData();
    }, []);

    if (isLoading)
        return <SectionSkeleton variant="timeline" title="Education" count={2} />;
    if (!data || data.length === 0) {
        return <div>No education data found</div>;
    }
    return (
        <section id="education" className="space-y-6 mb-12">
                <h2 className="text-3xl font-bold mb-6 dark:text-gray-100">
                    Education
                </h2>
                {data.map((item: Education) => (
                    <div
                        key={item._id}
                        className="relative pl-8 before:content-[''] before:absolute before:left-0 before:top-0 before:bottom-0 before:w-0.5 before:bg-gray-600"
                    >
                        <div className="flex items-start mb-2">
                            <div
                                className="bg-white rounded-full p-2 mr-4 w-24 h-24 shrink-0 flex items-center justify-center overflow-hidden border-gray-800"
                                style={{
                                    backgroundImage: `url(${getWixImageUrl(item.instituteLogo ?? "")})`,
                                    backgroundSize: "85%",
                                    backgroundPosition: "center",
                                    backgroundRepeat: "no-repeat",
                                }}
                            ></div>
                            <div className="grow">
                                <h3 className="text-2xl font-semibold dark:text-gray-100">
                                    {item.degreeType}
                                </h3>
                                <p className="text-lg dark:text-gray-300">
                                    {item.instituteName + ", " + item.location}
                                </p>
                                <p className="dark:text-gray-400">
                                    {item.dateRange()}
                                </p>
                            </div>
                        </div>
                        <div className="space-y-2 mb-2 ulist dark:text-white">
                            {item.richcontent && (
                                <RichContentViewer
                                    content={item.richcontent}
                                ></RichContentViewer>
                            )}
                        </div>
                    </div>
                ))}
        </section>
    );
}
