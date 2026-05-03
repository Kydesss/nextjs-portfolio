import { ReactNode } from "react";

type Props = {
    id?: string;
    children: ReactNode;
};

export default function SectionHeading({ children }: Props) {
    return (
        <h2
            style={{ color: "var(--color-ink)" }}
            className="text-3xl font-bold mb-6 tracking-wide"
        >
            {children}
        </h2>
    );
}
