import { fetchExperienceData } from "../api/wix-api";
import SectionHeading from "../components/SectionHeading";
import ExperienceList from "./ExperienceList";

export default async function ExperienceSection() {
    let items: Record<string, unknown>[] = [];
    try {
        const result = await fetchExperienceData();
        items = Array.isArray(result) ? (result as Record<string, unknown>[]) : [];
    } catch (error) {
        console.error("Error fetching experience data:", error);
    }

    if (items.length === 0) {
        return (
            <section id="experience" className="mb-12 space-y-6">
                <SectionHeading>Experience</SectionHeading>
                <p style={{ color: "var(--color-graphite)" }}>
                    No experience data found.
                </p>
            </section>
        );
    }

    return (
        <section id="experience" className="mb-12 space-y-6">
            <SectionHeading>Experience</SectionHeading>
            <ExperienceList items={items} />
        </section>
    );
}
