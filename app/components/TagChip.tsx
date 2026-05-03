import { ReactNode } from "react";

export default function TagChip({ children }: { children: ReactNode }) {
    return (
        <span
            style={{
                background: "var(--color-tag-bg)",
                color: "var(--color-tag-text)",
            }}
            className="inline-block px-3 py-1.5 text-xs font-medium mr-2 mb-2 rounded-full"
        >
            {children}
        </span>
    );
}
