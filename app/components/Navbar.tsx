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
                <ul className="flex items-center text-sm py-5 px-6 gap-6 dark:text-white bg-white/30 dark:bg-neutral-800/30 backdrop-blur-lg rounded-md">
                    {NAV_LINKS.map(({ href, label }) => (
                        <li key={href}>
                            <Link
                                href={href}
                                className="hover:text-gray-500 transition ease-in"
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
