import Link from "next/link";

const NAV_LINKS = [
    { href: "/#about", label: "About" },
    { href: "/#experience", label: "Experience" },
    { href: "/#education", label: "Education" },
    { href: "/#projects", label: "Projects" },
];

export default function Navbar() {
    return (
        <div className="sticky w-full flex justify-center items-center top-0 z-10 h-24">
            <nav>
                <ul
                    className="flex items-center text-sm py-4 px-6 gap-6 rounded-md"
                    style={{
                        background: "var(--color-surface-card)",
                        color: "var(--color-ink)",
                        border: "1px solid var(--color-bone)",
                    }}
                >
                    {NAV_LINKS.map(({ href, label }) => (
                        <li key={href}>
                            <Link
                                href={href}
                                className="transition-colors duration-200"
                                style={{ color: "var(--color-graphite)" }}
                            >
                                {label}
                            </Link>
                        </li>
                    ))}
                </ul>
            </nav>
        </div>
    );
}
