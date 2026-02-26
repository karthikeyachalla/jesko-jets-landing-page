import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { cn } from "@/lib/utils";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });

export const metadata: Metadata = {
    title: "Jesko Jets | Redefining Private Aviation",
    description: "Experience the pinnacle of luxury aviation with Jesko Jets.",
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en">
            <body className={cn(inter.variable, "font-sans")}>
                <div className="noise-overlay" />
                {children}
            </body>
        </html>
    );
}
