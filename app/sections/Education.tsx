import RichContentViewer from "../components/RichContentViewer";
import { fetchEducationData } from "../api/wix-api";
import EducationModel from "../models/Education";
import { getWixImageUrl } from "../utils/wixImageUrl";
import SectionHeading from "../components/SectionHeading";
import TimelineItem from "../components/TimelineItem";

export default async function EducationSection() {
    let items: Record<string, unknown>[] = [];
    try {
        const result = await fetchEducationData();
        items = Array.isArray(result) ? (result as Record<string, unknown>[]) : [];
    } catch (error) {
        console.error("Error fetching education data:", error);
    }

    if (items.length === 0) {
        return (
            <section id="education" className="space-y-6 mb-12">
                <SectionHeading>Education</SectionHeading>
                <p style={{ color: "var(--color-graphite)" }}>
                    No education data found.
                </p>
            </section>
        );
    }

    const data = items.map((item) => new EducationModel(item));

    return (
        <section id="education" className="space-y-6 mb-12">
            <SectionHeading>Education</SectionHeading>
            {data.map((item: EducationModel) => (
                <TimelineItem key={item._id}>
                    <div className="flex items-start mb-2">
                        <div
                            role="img"
                            aria-label={`${item.instituteName} logo`}
                            className="rounded-full p-2 mr-4 w-24 h-24 shrink-0 flex items-center justify-center overflow-hidden"
                            style={{
                                backgroundColor: "oklch(0.985 0.003 155)",
                                border: "1px solid var(--color-rail)",
                                backgroundImage: `url(${getWixImageUrl(item.instituteLogo ?? "")})`,
                                backgroundSize: "85%",
                                backgroundPosition: "center",
                                backgroundRepeat: "no-repeat",
                            }}
                        ></div>
                        <div className="grow">
                            <h3
                                style={{ color: "var(--color-ink)" }}
                                className="text-2xl font-semibold"
                            >
                                {item.degreeType}
                            </h3>
                            <p
                                style={{ color: "var(--color-graphite)" }}
                                className="text-lg"
                            >
                                {item.instituteName + ", " + item.location}
                            </p>
                            <p style={{ color: "var(--color-graphite)" }}>
                                {item.dateRange()}
                            </p>
                        </div>
                    </div>
                    <div className="space-y-2 mb-2 ulist">
                        {item.richcontent && (
                            <RichContentViewer content={item.richcontent} />
                        )}
                    </div>
                </TimelineItem>
            ))}
        </section>
    );
}
