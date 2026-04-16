import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter();

export const metadata: Metadata = {
    title: "Joaquin Pacia",
    description: "Portfolio of Joaquin Paolo Pacia — Multimedia Producer & Web Developer.",
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en">
            <body className={`${inter.className} antialiased`}>{children}</body>
        </html>
    );
}
