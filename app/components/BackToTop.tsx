"use client";

import { useEffect, useState } from "react";

export default function BackToTop() {
    const [visible, setVisible] = useState(false);

    useEffect(() => {
        const onScroll = () => setVisible(window.scrollY > 400);
        window.addEventListener("scroll", onScroll, { passive: true });
        return () => window.removeEventListener("scroll", onScroll);
    }, []);

    return (
        <button
            onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
            aria-label="Back to top"
            className={`fixed bottom-8 right-8 z-50 flex items-center justify-center w-9 h-9 rounded-full border border-gray-300 dark:border-gray-600 bg-white/80 dark:bg-stone-900/80 backdrop-blur-sm text-gray-500 dark:text-gray-400 shadow-sm hover:border-gray-400 dark:hover:border-gray-400 hover:text-gray-800 dark:hover:text-gray-200 transition-all duration-300 ${
                visible
                    ? "opacity-100 translate-y-0 pointer-events-auto"
                    : "opacity-0 translate-y-2 pointer-events-none"
            }`}
        >
            <svg
                xmlns="http://www.w3.org/2000/svg"
                width="14"
                height="14"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                aria-hidden="true"
            >
                <path d="M18 15l-6-6-6 6" />
            </svg>
        </button>
    );
}
