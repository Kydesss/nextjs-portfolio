"use client";

import dynamic from "next/dynamic";
import { useEffect } from "react";
import { quickStartViewerPlugins, type RichContent } from "@wix/ricos";
import "@wix/ricos/css/all-plugins-viewer.css";

const RicosViewer = dynamic(
    () => import("@wix/ricos").then((m) => m.RicosViewer),
    { ssr: false },
);

const plugins = quickStartViewerPlugins();

// @wix/ricos passes customImageRenderer to a native <img> — known library bug
const SUPPRESSED = "React does not recognize the `customImageRenderer` prop";

interface RichContentViewerProps {
    content: RichContent;
}

const RichContentViewer = ({ content }: RichContentViewerProps) => {
    useEffect(() => {
        const original = console.error;
        console.error = (...args) => {
            if (typeof args[0] === "string" && args[0].includes(SUPPRESSED))
                return;
            original(...args);
        };
        return () => {
            console.error = original;
        };
    }, []);

    return <RicosViewer content={content} plugins={plugins} />;
};
export default RichContentViewer;
