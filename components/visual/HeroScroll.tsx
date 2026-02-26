"use client";

import { useRef, useEffect } from "react";
import { motion, useTransform, MotionValue } from "framer-motion";
import { useImagePreloader } from "@/hooks/useImagePreloader";
import { useScrollProgress } from "@/hooks/useScrollProgress";
import { HERO_PATH, HERO_SEQUENCE_COUNT } from "@/lib/constants";
import { HERO_COPY } from "@/lib/copy";

export const HeroScroll = () => {
    const containerRef = useRef<HTMLDivElement>(null);
    const canvasRef = useRef<HTMLCanvasElement>(null);
    const { images, isLoaded } = useImagePreloader(HERO_PATH, HERO_SEQUENCE_COUNT);
    const progress = useScrollProgress(containerRef);

    const opacity = useTransform(progress, [0.8, 1], [1, 0]);
    const scale = useTransform(progress, [0, 1], [1, 1.1]);
    const textOpacity = useTransform(progress, [0, 0.2, 0.4, 0.6], [1, 0.5, 0.2, 0]);
    const textY = useTransform(progress, [0, 0.5], [0, -100]);

    useEffect(() => {
        if (!canvasRef.current || images.length === 0) return;

        const canvas = canvasRef.current;
        const ctx = canvas.getContext("2d");
        if (!ctx) return;

        const render = (progressVal: number) => {
            const frameIndex = Math.min(
                HERO_SEQUENCE_COUNT - 1,
                Math.floor(progressVal * HERO_SEQUENCE_COUNT)
            );

            const img = images[frameIndex];
            if (!img) return;

            const scale = Math.max(canvas.width / img.width, canvas.height / img.height);
            const x = (canvas.width - img.width * scale) / 2;
            const y = (canvas.height - img.height * scale) / 2;

            ctx.clearRect(0, 0, canvas.width, canvas.height);
            ctx.drawImage(img, x, y, img.width * scale, img.height * scale);
        };

        const unsubscribe = progress.on("change", (latest) => {
            render(latest);
        });

        // Initial render
        const handleResize = () => {
            canvas.width = window.innerWidth * window.devicePixelRatio;
            canvas.height = window.innerHeight * window.devicePixelRatio;
            render(progress.get());
        };

        window.addEventListener("resize", handleResize);
        handleResize();

        return () => {
            unsubscribe();
            window.removeEventListener("resize", handleResize);
        };
    }, [images, isLoaded, progress]);

    return (
        <section ref={containerRef} className="relative h-[400vh] bg-background">
            <div className="sticky top-0 h-screen w-full overflow-hidden">
                <motion.canvas
                    ref={canvasRef}
                    style={{ opacity, scale }}
                    className="w-full h-full object-cover"
                />

                <div className="absolute inset-0 flex flex-col items-center justify-center z-10">
                    <motion.div
                        style={{ opacity: textOpacity, y: textY }}
                        className="text-center px-4"
                    >
                        <h1 className="text-4xl md:text-7xl font-bold tracking-[0.3em] mb-4 text-white uppercase">
                            {HERO_COPY.title}
                        </h1>
                        <p className="text-sm md:text-lg tracking-widest text-accent mb-12 uppercase font-light">
                            {HERO_COPY.subtitle}
                        </p>
                        <motion.button
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                            className="px-8 py-4 bg-white text-background text-xs tracking-widest uppercase font-bold hover:bg-accent transition-colors duration-300"
                        >
                            {HERO_COPY.cta}
                        </motion.button>
                    </motion.div>
                </div>

                {/* Loading Indicator */}
                {!isLoaded && (
                    <div className="absolute inset-0 flex items-center justify-center bg-background z-50">
                        <div className="w-24 h-[1px] bg-white/20 relative">
                            <motion.div
                                initial={{ width: 0 }}
                                animate={{ width: "100%" }}
                                transition={{ duration: 2, repeat: Infinity }}
                                className="absolute top-0 left-0 h-full bg-white"
                            />
                        </div>
                    </div>
                )}
            </div>
        </section>
    );
};
