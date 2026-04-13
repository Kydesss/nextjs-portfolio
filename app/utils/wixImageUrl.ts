/**
 * Converts Wix image URLs (wix:image://) to proper HTTPS URLs
 * for use with Next.js Image component
 */
export function getWixImageUrl(wixUrl: string): string {
    if (!wixUrl) return "";

    try {
        // If it's already an HTTPS URL, return as is
        if (wixUrl.startsWith("https://")) {
            return wixUrl;
        }

        // Convert wix:image:// format to static.wixstatic.com
        // wix:image://v1/<imageId>_<hash>.png/filename.png#params
        // becomes: https://static.wixstatic.com/media/v1/<imageId>_<hash>.png
        if (wixUrl.startsWith("wix:image://")) {
            const imageId = wixUrl.replace("wix:image://", "").split("/")[1]; // Extract just the image identifier

            return `https://static.wixstatic.com/media/${imageId}`;
        }

        return wixUrl;
    } catch (error) {
        console.error("Error converting Wix image URL:", error);
        return wixUrl;
    }
}
