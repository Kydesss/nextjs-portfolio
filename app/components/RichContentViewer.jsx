"use client";

import { quickStartViewerPlugins, RicosViewer } from "@wix/ricos";
import "@wix/ricos/css/all-plugins-viewer.css";

const plugins = quickStartViewerPlugins();

const RichContentViewer = ({ content }) => {
    return (
        <div suppressHydrationWarning>
            <RicosViewer content={content} plugins={plugins} />
        </div>
    );
};
export default RichContentViewer;
