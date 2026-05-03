"use client";
import { useState } from "react";
import RichContentViewer from "../components/RichContentViewer";
import Experience from "../models/Experience";
import { getWixImageUrl } from "../utils/wixImageUrl";
import TimelineItem from "../components/TimelineItem";
import TagChip from "../components/TagChip";
import PrimaryButton from "../components/PrimaryButton";

type SerializedExperience = ConstructorParameters<typeof Experience>[0];

export default function ExperienceList({
    items,
}: {
    items: SerializedExperience[];
}) {
    const [showMore, setShowMore] = useState(false);

    const data = items.map((item) => new Experience(item));
    const preview = showMore ? data : data.slice(0, 3);

    return (
        <>
            {preview.map((item: Experience) => (
                <TimelineItem key={item._id}>
                    <div className="flex items-start mb-2">
                        <div
                            role="img"
                            aria-label={`${item.companyName} logo`}
                            className="rounded-full p-2 mr-4 w-24 h-24 shrink-0 flex items-center justify-center overflow-hidden"
                            style={{
                                backgroundColor: "oklch(0.985 0.003 155)",
                                border: "1px solid var(--color-rail)",
                                backgroundImage: `url(${getWixImageUrl(item.companyLogo ?? "")})`,
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
                                {item.jobTitle}
                            </h3>
                            <p
                                style={{ color: "var(--color-graphite)" }}
                                className="text-lg"
                            >
                                {item.companyName + ", " + item.location}
                            </p>
                            <p style={{ color: "var(--color-graphite)" }}>
                                {item.dateDuration()}
                            </p>
                        </div>
                    </div>
                    <div className="space-y-2 mb-2 ulist">
                        {item.details && (
                            <RichContentViewer content={item.details} />
                        )}
                    </div>
                    <div className="flex flex-wrap">
                        {item.tags &&
                            item.tags.map((tag: string, index: number) => (
                                <TagChip key={index}>{tag}</TagChip>
                            ))}
                    </div>
                </TimelineItem>
            ))}
            {data.length > 3 && (
                <div className="flex justify-center mt-8">
                    <PrimaryButton
                        size="sm"
                        onClick={() => setShowMore((s) => !s)}
                    >
                        {showMore
                            ? "Show less"
                            : `See all ${data.length} experiences`}
                    </PrimaryButton>
                </div>
            )}
        </>
    );
}
