// import { useEffect, useState } from "react";
import RichContentViewer from "../components/RichContentViewer";
import { fetchProjectData } from "../api/wix-api";
import Project from "../models/Project";
import ProjectsPage from "../projects/page";

export default function ProjectList() {
    // const [selectedCategory, setSelectedCategory] = useState<string>("All");
    // const [data, setData] = useState<Project[] | null>(null);
    // const [isLoading, setIsLoading] = useState(true);
    // const [showMore, setShowMore] = useState(false);
    // useEffect(() => {
    //     const fetchData = async () => {
    //         try {
    //             const result = await fetchProjectData();
    //             const education = (Array.isArray(result) ? result : []).map(
    //                 (item) => new Project(item),
    //             );
    //             setData(education);
    //         } catch (error) {
    //             console.error("Error fetching education data:", error);
    //             setData([]);
    //         } finally {
    //             setIsLoading(false);
    //         }
    //     };
    //     fetchData();
    // }, []);
    // if (isLoading) return <div>Loading...</div>;
    // if (!data || data.length === 0) {
    //     return <div>No project data found</div>;
    // }

    // const projectPreview = showMore ? data : data.slice(0, 3);

    // const categories = [
    //     "All",
    //     ...new Set(data.map((project) => project.category)),
    // ];

    // const filteredProjects =
    //     selectedCategory === "All"
    //         ? data
    //         : data.filter((project) => project.category === selectedCategory);

    // const filterToggles = (
    //     <div className="flex flex-wrap gap-3 mb-8">
    //         {categories.map((category) => (
    //             <button
    //                 key={category}
    //                 onClick={() => {
    //                     setSelectedCategory(category);
    //                     setShowMore(false);
    //                 }}
    //                 className={`px-4 py-2 rounded-lg font-medium transition-colors duration-300 ${selectedCategory === category ? "bg-stone-800/80 text-white" : "text-gray-400 hover:text-white"}`}
    //             >
    //                 {category}{" "}
    //                 {category !== "All" &&
    //                     `(${data.filter((p) => p.category === category).length})`}
    //             </button>
    //         ))}
    //     </div>
    // );

    return (
        <>
            {/* <section id="projects" className="space-y-6 mb-12">
                <h2 className="text-3xl font-bold mb-6 dark:text-gray-100">
                    Projects
                </h2>
            </section>
            {filterToggles}
            <div className="space-y-6">
                {filteredProjects.map((item) => (
                    <div
                        key={item._id}
                        className="relative pl-8 before:content-[''] before:absolute before:left-0 before:top-0 before:bottom-0 before:w-0.5 before:bg-gray-600"
                    >
                        <div className="flex flex-col md:flex-row gap-6">
                            {item.projectImage ? (
                                <div className="md:w-1/3 flex items-center justify-center">
                                    <div className="aspect-4/3 group">
                                        <img src={item.projectImage} alt="" />
                                    </div>
                                </div>
                            ) : (
                                <div></div>
                            )}
                            <div className="md:w-2/3">
                                <h3 className="text-2xl font-semibold mb-3 text-gray-100">
                                    {item.projectName}
                                </h3>
                                <div className="mb-4">
                                    <span className="inline-block bg-stone-800/80 text-white px-3 py-1 rounded-full text-sm font-medium">
                                        {item.category}
                                    </span>
                                </div>
                            </div>
                        </div>
                    </div>
                ))}
            </div> */}
            <ProjectsPage></ProjectsPage>
        </>
    );
}
