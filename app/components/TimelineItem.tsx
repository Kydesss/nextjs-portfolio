import { ReactNode } from "react";

export default function TimelineItem({ children }: { children: ReactNode }) {
    return (
        <div className="relative pl-8 before:content-[''] before:absolute before:left-0 before:top-0 before:bottom-0 before:w-0.5 before:[background:var(--color-rail)]">
            {children}
        </div>
    );
}
