import Navbar from "@/app/components/Navbar";

export default function NotFound() {
    return (
        <>
            <Navbar />
            <div className="flex h-auto container mx-auto justify-center">
                <div className="flex flex-col my-5 px-2 text-center">
                    <h1
                        style={{ color: "var(--color-ink)" }}
                        className="text-4xl font-bold mb-4"
                    >
                        Project not found
                    </h1>
                    <p style={{ color: "var(--color-graphite)" }}>
                        This project doesn&apos;t exist or couldn&apos;t be loaded.
                    </p>
                </div>
            </div>
        </>
    );
}
