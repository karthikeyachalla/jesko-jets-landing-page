"use client";

import { useLenis } from "@/hooks/useLenis";
import { Navigation } from "@/components/layout/Navigation";
import { HeroScroll } from "@/components/visual/HeroScroll";
import { CombinedSequence } from "@/components/visual/CombinedSequence";
import { Globe } from "@/components/visual/Globe";
import { Footer } from "@/components/layout/Footer";

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
