"use client";

import { useLenis } from "@/hooks/useLenis";
import { Navigation } from "@/components/Navigation";
import { HeroScroll } from "@/components/HeroScroll";
import { CombinedSequence } from "@/components/CombinedSequence";
import { Globe } from "@/components/Globe";
import { Footer } from "@/components/Footer";

export default function Home() {
    useLenis(); // Initialize smooth scrolling

    return (
        <main className="relative min-h-screen bg-background text-white selection:bg-white selection:text-background font-sans">
            <Navigation />

            <HeroScroll />

            <CombinedSequence />

            <div className="h-screen flex items-center justify-center p-6 text-center bg-background">
                <h2 className="text-3xl md:text-5xl font-bold tracking-[0.4em] uppercase opacity-40">
                    Beyond First Class
                </h2>
            </div>

            <Globe />

            <Footer />
        </main>
    );
}
