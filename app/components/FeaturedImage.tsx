import Image from "next/image";

interface FeaturedImageProps {
    src: string;
    alt: string;
    width?: number;
    height?: number;
}

const DEFAULT_WIDTH = 1920;
const DEFAULT_HEIGHT = 1080;

export default function FeaturedImage({
    src,
    alt,
    width = DEFAULT_WIDTH,
    height = DEFAULT_HEIGHT,
}: FeaturedImageProps) {
    const aspectRatio = (height / width) * 100;

    return (
        <div className="mb-6 w-full max-w-[1200px] mx-auto overflow-hidden rounded-[1.25rem] border border-gray-200 bg-white/80 shadow-xl shadow-slate-300/20 dark:border-gray-700 dark:bg-slate-950/90 dark:shadow-black/20">
            <div
                className="relative w-full"
                style={{ paddingTop: `${aspectRatio}%`, minHeight: 280 }}
            >
                <Image
                    src={src}
                    alt={alt}
                    fill
                    sizes="(max-width: 768px) 100vw, 1200px"
                    className="rounded-[1.25rem] object-contain"
                    priority
                />
            </div>
        </div>
    );
}
