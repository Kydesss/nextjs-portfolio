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
    const aspectRatio = width / height;

    return (
        <div
            style={{
                background: "var(--color-bone)",
                border: "1px solid var(--color-rail)",
            }}
            className="mb-6 w-full max-w-[1200px] mx-auto overflow-hidden rounded-lg"
        >
            <div
                className="relative w-full mx-auto"
                style={{
                    aspectRatio: `${aspectRatio}`,
                    maxHeight: "70vh",
                    minHeight: "280px",
                }}
            >
                <Image
                    src={src}
                    alt={alt}
                    fill
                    sizes="(max-width: 768px) 100vw, 1200px"
                    className="object-contain"
                    priority
                />
            </div>
        </div>
    );
}
