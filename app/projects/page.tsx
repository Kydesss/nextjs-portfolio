import { fetchProjectData } from "../api/wix-api";
import SectionHeading from "../components/SectionHeading";
import ProjectsClient from "./ProjectsClient";

export const revalidate = 3600;

export default async function ProjectsPage() {
    let items: Record<string, unknown>[] = [];
    try {
        const result = await fetchProjectData();
        items = Array.isArray(result) ? (result as Record<string, unknown>[]) : [];
    } catch (error) {
        console.error("Error fetching project data:", error);
    }

    return (
        <section id="projects" className="space-y-6 mb-12">
            <SectionHeading>Projects</SectionHeading>
            {items.length === 0 ? (
                <p style={{ color: "var(--color-graphite)" }}>
                    No projects found.
                </p>
            ) : (
                <ProjectsClient items={items} />
            )}
        </section>
    );
}
